var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", 'https://v1.hitokoto.cn/?encode=jsonv', false );
xmlHttp.send( null );
content_html = JSON.parse(xmlHttp.responseText);
sentence = content_html['hitokoto']
document.getElementById("sentence").innerHTML = sentence;