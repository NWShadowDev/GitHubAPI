var MovieFinder = require('./../js/project.js').movieFinderModule;

function displayMovies(movies){
  if (typeof movies === "string") {
    $("#data").text(movies);
  }else {
    var movieDomElements = "";
    for (var i = 0; i < movies.length; i++) {
      movieDomElements += "<tr>";
      movieDomElements += "<td>" + (i+1) + "</td>";
      movieDomElements += "<td>" + movies[i].show_title + "</td>";
      movieDomElements += "<td>" + movies[i].release_year + "</td>";
      if (movies[i].runtime === "N/A") {
        movieDomElements += "<td>Data not Available</td>";
      }else{
        movieDomElements += "<td>" + movies[i].runtime + "</td>";
      }
      if(movies[i].director === ""){
        movieDomElements += "<td>Data not Available</td>";
      }else{
          movieDomElements += "<td>" + movies[i].director + "</td>";
      }
      movieDomElements += "<td>&nbsp;<img onerror = ' this.onerror = null; this.src = \" /img/not-found.png \" ; ' class = 'poster' src='" + movies[i].poster + "'></td>";
      movieDomElements += "</tr>";
    }
    $("#data").append("<table class='table'>" +
                        "<thead>"+
                          "<tr>"+
                          "<th>#</th>"+
                            "<th>Movie Title</th>" +
                            "<th>Release Year</th>" +
                            "<th>Movie Runtime</th>" +
                            "<th>Director</th>" +
                            "<th>Poster</th>" +
                          "</tr>" +
                          "</thead>"+
                          movieDomElements +
                          "</tbody></table>"
                      );
  }
}

$(document).ready(function() {
  $("#getMovies").submit(function(event){
    event.preventDefault();
    $('#data').text("");
    var first = $("#actorFirst").val();
    var last = $("#actorLast").val();
    var movieFinder = new MovieFinder(first, last);
    movieFinder.getMovies(displayMovies);
  });
});
