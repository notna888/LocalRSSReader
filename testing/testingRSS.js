function fetchRSSFeed(){

  var content = document.getElementById('content');

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
    if (xhr.readyState==4 && xhr.status==200)
    {
      var data = JSON.parse(xhr.responseText);
      if(data.status == 'ok'){

        var output = '<h1>'+data.feed.title+'</h1>';

        for(var i=0;i<data.items.length;++i){

          output += '<p><h2> This is item ' + i +
          ': <a href="' +
          data.items[i].link + '" >' +
          data.items[i].title +
          '</h2></a></p>';

        }
        content.innerHTML = output;

      }
    }
  };
  xhr.open('GET','http://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.ycombinator.com%2Frss',true);
  xhr.send();

}

function combineMultipleFeeds() {
  var channels = [];
  
}
