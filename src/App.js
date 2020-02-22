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
      activities: [],
      totalHours: 0,
      quote: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onTotalHours = this.onTotalHours.bind(this);
  }

  componentDidMount(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const basedate = new Date();
      const datecount = (Date.UTC(basedate.getFullYear(), basedate.getMonth(), basedate.getDate()) 
      - Date.UTC(basedate.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
      return (data[datecount]);
    })
    .then(data => {
      this.setState({quote:'"'+data.text+'" - '+data.author});
    })
      
  }
  
  onSubmit(activity,startime, endtime){
    this.setState({
      activities: [
        ...this.state.activities,
        {activity,startime, endtime}
      ]
    });
  }

  onTotalHours(totalHours){
    this.setState({totalHours})
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <hr/>
        <div className="clocks">
          <h1>Quote for the Day</h1>
            <blockquote cite="https://type.fit/api/quotes">{this.state.quote}</blockquote>
        </div>
        <hr/>
        <div className="clocks">
          <h1>Clocks</h1>
          <ClockNow></ClockNow>
        </div>
        <hr/>

        <div className="today">
          <h1>Today's Activity Log</h1>
          <p>Add Entry:</p>
          <AddEntry onClicker={this.onSubmit}></AddEntry>
        </div>
        <hr/>
        
        <div className="today">
          <p>All Entries:</p>
          <AllActs data={this.state.activities} onTotalHours={this.onTotalHours}></AllActs>
        </div>
        <hr/>

        <div className="today">
          <h1>Total Productive Hours</h1>
            <p>{this.state.totalHours}</p> 
        </div>
        <hr/>
        {/*
        <Footer></Footer> */}
      </div>
      
    );
  }
  
}

export default App;
