function setAction() {



    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3?team='+document.getElementById("team").value, false ); // false for synchronous request
    xmlHttp.send( null );
    // alert (xmlHttp.responseText);
    document.getElementById("id1").value = xmlHttp.responseText 
  return false;
}