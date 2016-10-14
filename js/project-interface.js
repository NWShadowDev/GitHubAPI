var GithubLookup = require('./../js/project.js').githubLookupModule;
function displayRepos(repos){
  var repoList = ""; //repo list empty array
  for (var i = 0; i < repos.length; i++) { // start at index 0 and check length of user info and append into empty <table>
    repoList += "<tr>";
          repoList += "<td>" + (i+1) + "</td>";
          repoList += "<td>" + repos[i].name + "</td>";
          repoList += "<td>" + repos[i].language + "</td>";
          repoList += "<td><a>" + repos[i].html_url + "</a></td>";
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

    $("#clear").click(function () { // clear button click function to empty the search
      $("table").empty();
      location.reload(); //reload to empty form
    });

    var username = $("#userName").val();
    var githublookup = new GithubLookup();
    githublookup.getRepos(username, displayRepos);
  });
});
