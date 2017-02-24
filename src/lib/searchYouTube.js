var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'application/json',
    data: { 
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      videoEmbeddable: 'true',
      type: 'video'
    },
    success: function (data) {
      console.log('Success in getting data', data);
      callback(data.items);
      //return callback(data.items);
    },
    error: function (data) {
      console.error ('Failed to get');
    }
  });
};

window.searchYouTube = searchYouTube;
