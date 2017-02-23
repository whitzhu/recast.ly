class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentPlay: exampleVideoData[0]
    };
  }

  onClickVideoEntry (videoEntry) {
    this.setState({
      currentPlay: videoEntry
    });
  }

  render () {

    return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentPlay}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={exampleVideoData} listener={this.onClickVideoEntry.bind(this)}/>
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
