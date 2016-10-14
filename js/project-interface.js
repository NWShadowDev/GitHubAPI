var GithubLookup = require('./../js/project.js').githubLookupModule;
function displayRepos(repos){
  console.log(repos);
  var repoList = ""; //repo list empty array
  for (var i = 0; i < repos.length; i++) { // start at index 0 and check length of user info and append into empty <ul>
    repoList += "<tr>";
          repoList += "<td>" + (i+1) + "</td>";
          repoList += "<td>" + repos[i].name + "</td>";
          repoList += "<td>" + repos[i].language + "</td>";
          repoList += "<td>" + repos[i].html_url + "</td>";
          repoList += "<td>" + repos[i].description + "</td>";
  }
  $("#data").append("<table class='table'>" +
                         "<thead>"+
                           "<tr>"+
                           "<th>#</th>"+
                             "<th>Repository</th>" +
                             "<th>Language</th>" +
                             "<th>URL</th>" +
                             "<th>Description</th>" +
                           "</tr>" +
                           "</thead>"+
                           repoList +
                           "</tbody></table>"
                       );
  }

$(document).ready(function() {
  $("#getUserInfo").submit(function(event){ //form submit to look up user/repo info
    event.preventDefault();
    var username = $("#userName").val();
    var githublookup = new GithubLookup();
    githublookup.getRepos(username, displayRepos);
  });
  // $("#clear").click(function() {
  //     document.getElementById("#getUserInfo").reset();
  // }
});
