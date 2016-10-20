var GithubLookup = require('./../js/project.js').githubLookupModule; //this app must have the backend .js file to work
function displayRepos(repos){
  var repoList = ""; //repo list empty string array
  for (var i = 0; i < repos.length; i++) { // start at index 0 and check length of user info and append into empty <table>
    repoList += "<tr>";
          repoList += "<td>" + (i+1) + "</td>";
          repoList += "<td>" + repos[i].name + "</td>";
          repoList += "<td>" + repos[i].language + "</td>";
          repoList += "<td><a>" + repos[i].html_url + "</a></td>";
          repoList += "<td>" + repos[i].description + "</td>";
  }
  $("#data").append("<table class='table'>" + //data is appending with headers for the table
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
    $('#submit').attr('disabled',true); // after you hit the submit button, disable until you hit "clear"

    $("#clear").click(function () { // clear button click function to empty the search
      $("table").empty();
    });

    var username = $("#userName").val(); //give the variable "username" the value of the div ID #userName
    var githublookup = new GithubLookup(); //Use the object of GithubLookup for looking up a new user via variable
    githublookup.getRepos(username, displayRepos); //display the repos via username lookup
  });
});
