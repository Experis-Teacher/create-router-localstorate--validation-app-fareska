import './App.css';
import dummyData from "./data";
import CardList from './Components/CardList';
import { Component } from 'react';
import SkeletonCard from './Components/SkeletonCard';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      videos: [],
      loading: false,
      timer: null
    }
  }

  setVideosState(videos = []){
    this.setState({videos})
  }

  setLoadingState(value = false){
    this.setState({loading: value})
  }
  

  componentDidMount(){
    this.setLoadingState(true);
    const timer = setTimeout(() => {
      this.setVideosState(dummyData);
      this.setLoadingState(false);
    }, 5000);
    this.setState({timer})
  }

  componentWillUnmount(){
    clearTimeout(this.state.timer)
  }



  render(){
    return (
      <div className="App">
         {/* {
          this.state.videos.map((list, index) => {
            return (
              <section key={index}>
                <h2 className="section-title">{list.section}</h2>
                <CardList list={list} />
                <hr />
              </section>
            );
          })} */}
          <SkeletonCard/>
      </div>
    );
  }
}

export default App;
