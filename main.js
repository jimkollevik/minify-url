var endpoint = "https://api.jsonstores.com/AA881541393665888256c6EY";

function geturl() {
 var url = document.getElementById("urlinput").value;
 var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
 	if(!protocol_ok) {
  	newurl = "http://"+url;
    	return newurl;
  }
  else {
  return url;
  }
}

function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function genhash() {
	if(window.location.hash == "") {
  	window.location.hash = getrandom();
  }
}

function send_request(url) {

let xhr = new XMLHttpRequest()

let myObj = {name:"Steve Jobs", company:"Apple"};                                            
xhr.addEventListener('load', () => {    
	if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
    }                                      
})
                                            
let url =   https://api.jsonstores.com/5679096778206781440wJqSH/user
xhr.open('POST', url, false)
                                        
xhr.send(JSON.stringify(myObj))
}

function shorturl() {
	var longurl = geturl();
  genhash();
  send_request(longurl);
}

var hashh = window.location.hash.substr(1)

if (window.location.hash != "") {
	$.getJSON(endpoint + "/" + hashh, function (data) {
  	data = data["result"];
    
	if (data != null) {
	window.location.href = data;
  }
});
}
