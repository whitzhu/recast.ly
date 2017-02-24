class App extends React.Component {
  constructor (props) {
    super(props);
    // this.props.searchYouTube(arguments);
    // this.props.searchYouTube();
    // var AppContext = this;
    // var search = function() {
    this.options = {
      query: 'React',
      max: 5,
      key: window.YOUTUBE_API_KEY
    };

    this.state = {
      currentPlay: exampleVideoData[0],
      searchQuery: '',
      queryResults: []
    };
  }

  onClickVideoEntry (videoEntry) {
    this.setState({
      currentPlay: videoEntry
    });
  }

  onSearchVideoQuery (event) {
    this.setState({
      searchQuery: event.target.value
    });
    console.log('searchQuery', searchQuery);
  }

  callback(data) {
    this.setState({
      queryResults: data
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
        <VideoList videos={exampleVideoData} listener={this.onClickVideoEntry.bind(this)}/>
      </div>
    </div>
    );
  }


  componentDidMount() {
    this.props.searchYouTube(this.options, this.callback.bind(this));
    console.log('results', this.state.queryResults);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
