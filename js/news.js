n_time = 0
while(document.getElementById("news1").innerHTML == '<img src="https://www.intogif.com/resource/image/loading/square-queue.gif">'&&n_time <= 10)
{
	try 
	{
		refresh_news();
	}
	catch
	{
		n_time += 1;
	}
}

if(n_time >= 10)
{
	document.getElementById("news1").innerHTML = "新闻api出现问题";
	document.getElementById("news2").innerHTML = "";
}
else
{
setInterval("refresh_news()",30000);
}

function refresh_news()
{
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