var https = require('https');  
var request = require('request');
var getHTML = require('./getHTML');
var dotenv = require('dotenv').config();
var fs = require('fs');


var github_token = process.env.GITHUB_TOKEN
var repoOwner = 'jquery'
var repoName = 'jquery'
var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors/?access_token=" + github_token

function log(err, response) {
  console.log(response);
}

//INPUT: github username and one of thier reposiotry names
//OUTPUT: an array of objects with the name and url of repo contributor images

function getRepoContributors(repoOwner, repoName, callback) {

  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request'
      //'Authorization': github_token
    },
    qs: {
      access_token: github_token
    }
  };

  request(options, function(error, body, callthing) {
    
    data = JSON.parse(body.body);

    for(var contributor in data) {
      let {login, avatar_url} = data[contributor];
      callback(login, avatar_url);
    }
  });
}

function downloadAvatar(id, avatar_url) {
  request.get(avatar_url)            
    .on('error', function (err) {                                   
      throw err; 
    })
    .pipe(fs.createWriteStream('./avatars/' + [id] + ".JPEG"))
        .on('finish', function(response) {
          console.log('wrote a file!')
        })              
  }



  getRepoContributors('jquery', 'jquery', downloadAvatar)