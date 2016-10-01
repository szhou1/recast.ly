var searchYouTube = (options, callback) => {
  options['part'] = 'snippet';
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: function(data) {
      // console.log('Success!', data);
      callback(data.items);
    },
    error: function(e) {
      console.log(e);
    }
  });
};

window.searchYouTube = searchYouTube;
