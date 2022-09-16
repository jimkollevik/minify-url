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

function copyUrl() {
  // Get the text field
  var copyText = document.getElementById("shortUrl");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

