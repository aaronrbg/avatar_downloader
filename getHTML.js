var https = require('https');     

//INPUT: requestOptions i.e. host + path
//OUTPUT: html as string, modified by callback
function getHTML (requestOptions, callback) {
    var output = ''
    https.get(requestOptions, function(response) {
        response.setEncoding('utf8');
        var html = ''
        response.on('data', function(data) {
            html += data;   
        })
        response.on('end', function() {
            callback(html);
          });
    })
}

module.exports = getHTML;