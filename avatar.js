var request = require('request');
var dotenv = require('dotenv').config();
var fs = require('fs');

var github_token = process.env.GITHUB_TOKEN

//INPUT: github username and one of thier reposiotry names
//OUTPUT: an array of objects with the name and url of repo contributor images
function getRepoContributors(repoOwner, repoName, callback) {

  // var options = {
    var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors/?access_token=" + github_token
  //   headers: {
  //     'User-Agent': 'request'
  //   }
  // };

  request.get(url)
    .on('error', function (err) {                                   
      throw err; 
    })
    .on('response', function (response) {                           
      console.log('IM HERE')
    })

function downloadImageByURL(url, filePath) {
  // ...
}

}

getRepoContributors('jquery', 'jquery')