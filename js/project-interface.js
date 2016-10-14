var GithubLookup = require('./../js/project.js').githubLookupModule;
function displayRepos(repos){
  console.log(repos);
  var repoList = ""; //repo list empty array
  for (var i = 0; i < repos.length; i++) { // start at index 0 and check length of user info and append into empty <ul>
    repoList += "<li><br><b>Repository: " + repos[i].name + "</b></br></li>";
    repoList += "<li>Description: " + repos[i].description + "</li>";
  }
  $("#data").append("<ul>"+ repoList + "</ul>");

}
$(document).ready(function() {
  $("#getUserInfo").submit(function(event){ //form submit to look up user/repo info
    event.preventDefault();
    var username = $("#userName").val();
    var githublookup = new GithubLookup();
    githublookup.getRepos(username, displayRepos);
  });
});
