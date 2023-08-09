(function()
{
function send_color_to_service(name,color)
{
	document.getElementById(name).style.background= color;
}
function get_service_status()
{
	var servicehttp = new XMLHttpRequest();
	send_char_to_index('.....')
	servicehttp.open( "GET", "https://service-e69d8zqf-1302618926.bj.apigw.tencentcs.com/release/", false );
	servicehttp.send( null );
	content_service = JSON.parse(servicehttp.responseText);
	if (content_service['rstudio server'] == "open")
	{send_color_to_service("Rstudio","#00B454");}
	else
	{send_color_to_service("Rstudio","#FF2300");}
	if (content_service['mqtt'] == "open")
	{send_color_to_service("MQTT","#00B454");}
	else
	{send_color_to_service("MQTT","#FF2300");}
	if (content_service['mongodb'] == "open")
	{send_color_to_service("Mongodb","#00B454");}
	else
	{send_color_to_service("Mongodb","#FF2300");}
	if (content_service['cloud'] == "open")
	{send_color_to_service("cloud","#00B454");}
	else
	{send_color_to_service("cloud","#FF2300");}
	send_char_to_index('finish!')
}
function send_char_to_index(stringindex)
{
	document.getElementById("index").innerHTML = stringindex
}
window.onload = function() 
{ 
	setTimeout(function (){
		send_char_to_index('.');},300);
	setTimeout(function (){
		send_char_to_index('..');},600);
	setTimeout(function (){
		send_char_to_index('...');},900);
	setTimeout(function (){
		send_char_to_index('....');},1200);
	setTimeout(function (){
		get_service_status();},1500);
};
})();