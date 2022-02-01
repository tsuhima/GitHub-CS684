function setAction() {



    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3?team='+document.getElementById("team").value, false ); // false for synchronous request
    xmlHttp.send( null ); // The null parameter indicates that no body content is needed for the GET request
    
    document.getElementById("id1").value = xmlHttp.responseText 
  return false;
}