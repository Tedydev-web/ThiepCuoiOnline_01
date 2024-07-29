if (
  localStorage.getItem("roleRefresh") &&
  localStorage.getItem("roleRefresh") == "true"
) {
  $("html").html("");
}
setInterval(() => {
  var timebefore = new Date().getTime();
  debugger;
  var timeafter = new Date().getTime();
  if (timeafter - timebefore > 200) {
    $("html").html("");
    localStorage.setItem("roleRefresh", "true");
    // window.location.reload();
  }
}, 10);
