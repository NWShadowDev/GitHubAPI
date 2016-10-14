var MovieFinder = require('./../js/project.js').movieFinderModule;

function displayUser(user){
  if (typeof user === "string") {
    $("#data").text(movies);
  }else {
    var userDomElements = "";
    for (var i = 0; i < user.length; i++) {
      userDomElements += "<tr>";
      userDomElements += "<td>" + (i+1) + "</td>";
      userDomElements += "<td>" + muser[i].show_title + "</td>";
      userDomElements += "<td>" + movies[i].release_year + "</td>";
      if (muser[i].runtime === "N/A") {
        userDomElements += "<td>Data not Available</td>";
      }else{
        userDomElements += "<td>" + user[i].runtime + "</td>";
      }
      if(user[i].director === ""){
        userDomElements += "<td>Data not Available</td>";
      }else{
          userDomElements += "<td>" + user[i].director + "</td>";
      }
      userDomElements += "<td>&nbsp;<img onerror = ' this.onerror = null; this.src = \" /img/not-found.png \" ; ' class = 'poster' src='" + movies[i].poster + "'></td>";
      userDomElements += "</tr>";
    }
    $("#data").append("<table class='table'>" +
                        "<thead>"+
                          "<tr>"+
                          "<th>#</th>"+
                            "<th>Username</th>" +
                            "<th>Number of Repos</th>" +
                            "<th>Github Link</th>" +
                          "</tr>" +
                          "</thead>"+
                          userDomElements +
                          "</tbody></table>"
                      );
  }
}

$(document).ready(function() {
  $("#getUserInfo").submit(function(event){
    event.preventDefault();
    $('#data').text("");
    var userInfo = $("#userName").val();
    var userFinder = new UserFinder(userInfo);
    userFinder.getRepos(displayUser);
  });
});
