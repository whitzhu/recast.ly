class App extends React.Component {
  constructor (props) {
    super(props);
    // this.props.searchYouTube(arguments);
    // this.props.searchYouTube();
    // var AppContext = this;
    // var search = function() {
    

    this.state = {
      videos: exampleVideoData,
      currentPlay: exampleVideoData[0],
    };
  }

  onClickVideoEntry (videoEntry) {
    this.setState({
      currentPlay: videoEntry
    });
  }

  onSearchVideoQuery (query) {
    this.options = {
      query: query,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };
    this.props.searchYouTube(this.options, this.callback.bind(this));
  }

  callback(data) {
    this.setState({
      videos: data,
      currentPlay: data[0]
    });
  }

  render () {

    return (
    <div>
      <Nav query={this.onSearchVideoQuery.bind(this)}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentPlay}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos} listener={this.onClickVideoEntry.bind(this)}/>
      </div>
    </div>
    );
  }


  componentDidMount() {
    //this.props.searchYouTube(this.options, this.callback.bind(this));
    this.onSearchVideoQuery('pokemon');

    // console.log('results', this.state.queryResults);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
