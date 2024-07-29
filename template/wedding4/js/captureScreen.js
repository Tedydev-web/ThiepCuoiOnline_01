// Láº¥y pháº§n tá»­ container
$(".cap_flast").hide();
$(document).on("click", ".cap_downloadBtn", function () {
  // xÃ³a nhÃ¢n váº­t Ä‘Æ°á»£c chá»nchá»n
  $(".CL_CAP_Person").removeClass("CL_CAP_Person_select");
  // chá»¥p
  html2canvas(document.querySelector(".cap_screen")).then((canvas) => {
    var imageData = canvas.toDataURL("image/png");

    var downloadLink = document.createElement("a");
    downloadLink.href = imageData;
    downloadLink.download = "27BG-selfie.png"; // TÃªn tá»‡p khi táº£i vá»
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
  $(".cap_flast").show();
  setTimeout(() => {
    $(".cap_flast").hide();
  }, 100);
});

// <!-- ___________________________________________________________________________________ -->

// list nhân vật
function runListCapItem(CapClass, img) {
  let cap_list_item = $(CapClass);
  let cap_list_item_Size = cap_list_item.length;
  for (i = 0; i <= cap_list_item_Size + 1; i++) {
    $(cap_list_item[i]).attr(
      "src",
      "https://www.27biggroup.com/src/image/image-template/CaptureScreen/avatar/" +
        img +
        i +
        ".png"
    );
  }
}
runListCapItem(".CL_CAP_Menu_Person_boy", "b");
runListCapItem(".CL_CAP_Menu_Person_girl", "g");

// <!-- ___________________________________________________________________________________ -->
//Chá»©c nÄƒng nhÃ¢n váº­t
//táº¡o nhÃ¢n váº­t
let set_id = 0;
$(".cl_cap_menu_item").click(function () {
  let getSrc = $(this).find("img").attr("src");
  let html_person =
    '<div class="CL_CAP_Person ladi-element" id="id_porson_' +
    set_id +
    '" ><h2 class="CL_CAP_Name"></h2><img src="' +
    getSrc +
    '" height="150"></div>';
  // Táº¡o má»™t pháº§n tá»­ div má»›i

  $("#point_created").append(html_person);
  set_id = set_id + 1;
});

// áº©m nÃºt chá»‰nh nhÃ¢n váº­t
$(".cap_btn_chinhNhanVat").hide();
let role_btn_chinhNhanVat = false;
let getcolorBtn = $(".cap_btn_chinhNhanVat .ladi-button-background").css(
  "background-color"
);
$(".cap_btn_chinhNhanVat").click(function () {
  if (role_btn_chinhNhanVat == false) {
    $(".cap_btn_chinhNhanVat p").text("   Xong");
    $(".cap_btn_chinhNhanVat .ladi-button-background").css(
      "background-color",
      "rgb(22 159 46)"
    );
    role_btn_chinhNhanVat = true;
  } else {
    $(".cap_btn_chinhNhanVat p").html(
      "&nbsp; &nbsp; &nbsp; &nbsp; Chá»‰nh nhÃ¢n váº­t"
    );
    $(".cap_btn_chinhNhanVat .ladi-button-background").css(
      "background-color",
      getcolorBtn
    );
    $(".cap_btn_chinhNhanVat").hide();
    role_btn_chinhNhanVat = false;
    let getIdNhanVat = localStorage.getItem("StorageId");
    $("#" + getIdNhanVat).removeClass("CL_CAP_Person_select");
  }
});
// Chá»n nhÃ¢n váº­t
let StorageId = "";
$(document).on("click", ".CL_CAP_Person", function () {
  //hiá»‡n nÃºt chá»‰nh nhÃ¢n váº­t
  $(".cap_btn_chinhNhanVat").show();
  let getIdPerson = $(this).attr("id");
  // lÆ°u id vÃ o local
  localStorage.setItem("StorageId", getIdPerson);
  // xÃ³a nhÃ¢n váº­t Ä‘Æ°á»£c chá»nchá»n
  $(".CL_CAP_Person").removeClass("CL_CAP_Person_select");
  $(this).addClass("CL_CAP_Person_select");
  let getPointX = $(this).css("top");
  let getPointY = $(this).css("left");
  localStorage.setItem("PointXY", getPointX + "," + getPointY);
  // kÃ­ch thÆ°á»›c
  let getSize = $(this).find("img").css("height");
  getSize = getSize.split("px").join("");
  $("#cap_change_size").val(getSize);
});

// Ä‘iá»u khiá»ƒn nhÃ¢n váº­t --------------------------------------------------
let speedUp = 0;
let readyRun = false;
function movePerson(X, Y, directionX, directionY) {
  runMove = setInterval(() => {
    let getIdNhanVat = localStorage.getItem("StorageId");
    let arrPointXY = localStorage.getItem("PointXY").split(",");
    let PointX = arrPointXY[0].replace("px", "");
    let PointY = arrPointXY[1].replace("px", "");
    PointX = Number(PointX) + X + speedUp * X;
    PointY = Number(PointY) + Y + speedUp * Y;
    speedUp = speedUp + 1;
    console.log("check: " + speedUp);
    $("#" + getIdNhanVat).css(directionX, PointX);
    $("#" + getIdNhanVat).css(directionY, PointY);
    localStorage.setItem("PointXY", PointX + "px," + PointY + "px");
  }, 100);
}
$(".cap_move_down").on("mousedown", function () {
  movePerson(1, 0, "top", "left");
});
$(".cap_move_up").on("mousedown", function () {
  movePerson(-1, 0, "top", "left");
});
$(".cap_move_right").on("mousedown", function () {
  movePerson(0, 1, "top", "left");
});
$(".cap_move_left").on("mousedown", function () {
  movePerson(0, -1, "top", "left");
});
// hÃ m dá»«ng di chuyá»ƒn
function stopMove() {
  if (typeof runMove !== "undefined") {
    clearInterval(runMove);
    speedUp = 0;
  }
}
$(".cap_move_down").mouseout(function () {
  stopMove();
});
$(".cap_move_up").mouseout(function () {
  stopMove();
});
$(".cap_move_right").mouseout(function () {
  stopMove();
});
$(".cap_move_left").mouseout(function () {
  stopMove();
});
$(document).on("mouseup", function () {
  stopMove();
});

// di chuyá»ƒn nhÃ¢n váº­t cho Ä‘iá»‡n thoáº¡i
$(".cap_move_down").on("touchstart", function (e) {
  movePerson(1, 0, "top", "left");
});
$(".cap_move_up").on("touchstart", function (e) {
  movePerson(-1, 0, "top", "left");
});
$(".cap_move_right").on("touchstart", function (e) {
  movePerson(0, 1, "top", "left");
});
$(".cap_move_left").on("touchstart", function (e) {
  movePerson(0, -1, "top", "left");
});
$(document).on("touchend", function (e) {
  stopMove();
});
$(document).on("touchcancel", function (e) {
  stopMove();
});

// xÃ³a nhÃ¢n váº­t-----------------------------------------------
$(".cap_delete_person").click(function () {
  let getIdNhanVat = localStorage.getItem("StorageId");
  if (getIdNhanVat !== "id_porson_000") {
    $("#" + getIdNhanVat).remove();
  }
});

// chá»©c nÄƒng chÃ¡t -------------------------------------------------
$(".cap_btn_chat").click(function () {
  let getValueChat = $("#cap_text_box").val();
  let getIdNhanVat = localStorage.getItem("StorageId");
  if (getIdNhanVat !== "id_porson_000") {
    $("#" + getIdNhanVat + " h2").text(getValueChat);
  }
});
// Ä‘á»•i kÃ­ch thÆ°á»›c nhÃ¢n váº­t----------------------------------------------
$("#cap_change_size").on("input", function () {
  let getSize = $(this).val();
  let getIdNhanVat = localStorage.getItem("StorageId");
  $("#" + getIdNhanVat + " img").css("height", getSize);
});
