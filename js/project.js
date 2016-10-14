UserFinder = function(first, last){
  this.first = first;
  this.last = last;
}

function compare(a,b) {
  if (a.show_title < b.show_title)
    return -1;
  if (a.show_title > b.show_title)
    return 1;
  return 0;
}

UserFinder.prototype.getUserInfo = function(displayUser){
  exports.getRepos = function(){
    $.get('https://api.github.com/users/daneden?access_token=' + ' 9d77a6affb3c817e524b4992f5b37e439f328a88').then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };


exports.userFinderModule = UserFinder;

//this is the code to make the API call from github
