$.getJSON("https://raw.githubusercontent.com/wobisheng/test/main/baidu.json",function(data){
	var html = " ";
	for(var i = 1; i <= 20; i++)
	{
		html += '<p>' + i + ':' + data[i] + '<p>';
		html += '<p></p>';
	}
   $('#news').html(html);  
  });