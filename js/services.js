(function(){
function get_service_status()
{
	var servicehttp = new XMLHttpRequest();
	servicehttp.open( "GET", "https://service-e69d8zqf-1302618926.bj.apigw.tencentcs.com/release/", false );
	servicehttp.send( null );
	content_service = JSON.parse(servicehttp.responseText);
	if (content_service['rstudio server'] == "open")
	{
		document.getElementById("Rstudio").style.background= "green";
	}
	if (content_service['mqtt'] == "open")
	{
		document.getElementById("MQTT").style.background= "green";
	}
	if (content_service['mongodb'] == "open")
	{
		document.getElementById("Mongodb").style.background= "green";
	}
}
window.onload = function() { 
	setTimeout(function (){
		get_service_status();},200);
	};
})();