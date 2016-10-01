var searchYouTube = (options, callback) => {
  options['part'] = 'snippet';

  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&type=video&key=${options.key}`,
    type: 'GET',
    // data: options,
    success: function(data) {
      console.log("success from GET");
      // console.log(callback, this);
      callback(data.items);
    },
    error: function(e) {
      console.log(e);
    }
  });
};

window.searchYouTube = searchYouTube;
