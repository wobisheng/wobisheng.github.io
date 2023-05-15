var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", 'https://v1.hitokoto.cn/?encode=jsonv', false );
xmlHttp.send( null );
content_html = JSON.parse(xmlHttp.responseText);
sentence = content_html['hitokoto'].replace('。','');
if (sentence.length > 15){sentence = sentence.slice(0,20) + '</br>' + sentence.slice(20)}
document.getElementById("sentence").innerHTML = sentence;