var searchYouTube = (options, callback) => {
  options['part'] = 'snippet';

  _.debounce(function() {
    $.ajax({
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&type=video&key=${options.key}`,
      type: 'GET',
      success: function(data) {
        callback(data.items);
      },
      error: function(e) {
        console.log(e);
      }
    });
  }, 500)();
  
};

window.searchYouTube = searchYouTube;
