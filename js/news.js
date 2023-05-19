setInterval("refresh_news()",5000);
function refresh_news(){
var newshttp = new XMLHttpRequest();
newshttp.open( "GET", 'https://service-muomqjyj-1302618926.bj.apigw.tencentcs.com/release/', false );
newshttp.send( null );
content_news = JSON.parse(newshttp.responseText);
var html = "";
	for(var i = 1; i <= 15; i++)
	{
		html += '<p title='+content_news['result']['3'][i-1]['contentPreview']+'>' + i + ':' + content_news['result']['3'][i-1]['title'] + '<p>';
		html += '<br></br>';
	}
document.getElementById("news1").innerHTML = html;
html = "";
	for(var i = 1; i <= 15; i++)
	{
		html += '<p title='+content_news['result']['2'][i-1]['contentPreview']+'> ' + i + ':' + content_news['result']['2'][i-1]['title'] + '<p>';
		html += '<br></br>';
	}
document.getElementById("news2").innerHTML = html;
}