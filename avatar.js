var https = require('https');

//INPUT: github user, repository name
//OUTPUT: a folder called avatars in root with images of repo contributors named according to contributor's name
function download_avatars() {
    https.get('https://api.github.com/repos/jensen/moresql-notes/contributors', function(response){
        if(response.statusCode !== 200) {
            console.log("Error with status code" + response.statusCode);
        } else {
            var body = '';
            response.setEncoding('utf-8');
            response.on('data', function(chunk) {
                body += chunk;
            });
            response.on('end', function() {
                callback(null, body);
            });
            return body;
        }
    });
}
console.log(download_avatars());

// //example code from lecture
// function makeRequest(callback) {
//   http.get('http://api.nobelprize.org/v1/prize.json', function(response) {
//     if(response.statusCode !== 200) {
//       callback(new Error('Request Failed with Status Code ' + response.statusCode), null);
//       return;
//     }

//     var body = '';
//     response.setEncoding('utf-8');
//     response.on('data', function(chunk) {
//       body += chunk;
//     });
//     response.on('end', function() {
//       callback(null, body);
//     });
//   });
// }

// function getFilteredWinners(data, filter) {
//   var prizes = JSON.parse(data).prizes;

//   var filtered = prizes.filter(prize => {
//     return prize.category === filter;
//   });

//   var formatted = filtered.map(prize => {
//     return prize.year + ' ' + prize.laureates.map(laureate => {
//       return laureate.firstname + ' ' + laureate.surname;
//     }).join(', ');
//   });

//   return formatted;
// }

// function printPhysicsWinners() {
//   makeRequest(function(error, data) {
//     if(error) {
//       console.error(error);
//     } else {
//       console.log(getFilteredWinners(data, 'physics').join('\n'));
//     }
//   });
// }

// printPhysicsWinners();