function sendRequest() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (
      httpRequest.readyState == XMLHttpRequest.DONE &&
      httpRequest.status == 200
    ) {
      document.getElementById("text").innerHTML = httpRequest.responseText;
    }
  };
  // GET 방식으로 요청을 보내면서 데이터를 동시에 전달함.
  httpRequest.open(
    "GET",
    "/examples/media/request_ajax.php?city=Seoul&zipcode=06141",
    true
  );
  httpRequest.send();
}
