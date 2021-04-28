var key = "?key=0d27129a68be02c62ebadb4a982a5cfa";
var itemPerPage = "&itemPerPage=20";
var targetDt = "&targetDt=20210307";
const url =
  //   "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json" +
  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json" +
  key +
  targetDt +
  itemPerPage;
var item_int = 20;

const url2 =
  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml";

var title = document.getElementById("a");
fetch(url)
  .then((response) => response.json())
  .then(function (msg) {
    for (var i = 0; i < item_int; i++) {
      var div = document.createElement("div");
      var low_div = document.createElement("div");
      var title_div = document.createElement("div");
      var br = document.createElement("br");

      var gp = document.createElement("p");
      gp.id = "genreAlt";
      var mp = document.createElement("p");
      mp.id = "movieNm";
      var rp = document.createElement("p");
      rp.id = "rank";
      //   var pp = document.createElement("p");
      //   pp.id = "prdtYear";
      title_div.id = "title_div";
      low_div.id = "low_div";
      div.id = "movies";
      short_url = msg.boxOfficeResult.dailyBoxOfficeList[i];
      console.log(short_url);
      div.appendChild(title_div);
      div.appendChild(low_div);
      title.appendChild(div);

      var name = document.createTextNode("영화명: ");
      var ranking = document.createTextNode("순위: ");
      var date = document.createTextNode("개봉일: ");

      var movieNm = document.createTextNode(
        msg.boxOfficeResult.dailyBoxOfficeList[i].movieNm
      );
      var rank = document.createTextNode(short_url.rank);
      var genreAlt = document.createTextNode(short_url.openDt);
      //   var prdtYear = document.createTextNode(short_url.prdtYear);
      rp.appendChild(ranking);
      mp.appendChild(name);
      gp.appendChild(date);

      rp.appendChild(rank);
      mp.appendChild(movieNm);
      gp.appendChild(genreAlt);
      //   pp.appendChild(prdtYear);

      title_div.appendChild(mp);
      low_div.appendChild(rp);
      low_div.appendChild(gp);
      low_div.appendChild(br);
      //   low_div.appendChild(pp);
    }
  });
