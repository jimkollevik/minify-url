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
    $.getJSON(url, function(data) {
	var uri = data.result.short_link;
	    $( "#shortUrl" ).append(uri);
	    $( ".switch" ).css("display", "none");
	    $( "#newUrl" ).append("There it is, short and nice. Click the link to copy.");
	    return uri;
	});
  }
}

const shortUrl = document.getElementById("shortUrl");

shortUrl.onclick = function() {
  document.execCommand("copy");
}

shortUrl.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", shortUrl.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});

