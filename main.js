function geturl() {
 var url = document.getElementById("urlinput").value;
 var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
   if(!protocol_ok) {
	   $("#shorturl").append("Please use an URL that starts with either http://, https:// or ftp://")
  	}
   else {
    var url = "https://api.shrtco.de/v2/shorten?url=" + url;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
	  if (xhr.readyState === 4) {
	  console.log(xhr.status);
       	  console.log(xhr.responseText);
   	}
    };
    console.log("Success")
    $.getJSON(url, function(data) {
	var uri = data.result.short_link;
	    $( "#shortUrl" ).append(uri);
	});
  }
}

