MovieFinder = function(first, last){
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

MovieFinder.prototype.getMovies = function(displayMovies){
  $.get('http://netflixroulette.net/api/api.php?actor=' + this.first + '%20' + this.last).then(function(response){
    displayMovies(response.sort(compare));
  }).fail(function(error) {
    displayMovies(error.responseJSON.message);
  });
}

exports.movieFinderModule = MovieFinder;

//this is the code to make the API call from github
exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
