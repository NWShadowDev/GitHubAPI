var apiKey = require('./../.env').apiKey;

GithubLookup = function(){

};
//Github API protoype to access user info
GithubLookup.prototype.getRepos = function(username, displayRepos){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    displayRepos(response);
  }).fail(function(error){
    displayRepos(error.responseJSON.message);
  });
};

exports.githubLookupModule = GithubLookup;
