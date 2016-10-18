var apiKey = require('./../.env').apiKey; // you must have an API token generated from a GitHub account to put into a .env file to make this work

GithubLookup = function(){

};
//Github API protoype to access user info
GithubLookup.prototype.getRepos = function(username, displayRepos){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    displayRepos(response);
  }).fail(function(error){
    displayRepos(error.responseJSON.message); //display an error message
  });
};

exports.githubLookupModule = GithubLookup; //export the module for use
