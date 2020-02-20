import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ClockNow from './Components/Clocknow/ClockNow';
import AddEntry from './Components/AddEntry/AddEntry';
import AllActs from './Components/AllActs/AllActs';

// import Footer from './Components/Footer';


class App extends Component {
  constructor(){
    super();
    this.state = {
      activities: [{
        activity:"",
        startime:"", 
        endtime:""
    }]}
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(activity,startime, endtime){
    this.setState({
      activities: [
        ...this.state.activities,
        {activity,startime, endtime}
      ]
    });
  }

  render() {
    console.log("i am rendering");
    return (
      <div className="App">
        <Header></Header>
  
        <div className="clocks">
          <h1>Clocks</h1>
          <ClockNow></ClockNow>
        </div>
        <hr/>

        <div className="today">
          <h1>Today's Activity Log</h1>
          <AddEntry onClicker={this.onSubmit}></AddEntry>
        </div>
        <hr/>
        
        <div>
          <AllActs data={this.state.activities}></AllActs>
        </div>
         
         
        {/*
        <Footer></Footer> */}
      </div>
      
    );
  }
  
}

export default App;
