import React, {Component} from 'react';
import './App.css';
import{connect} from 'react-redux';

import Header from './Components/Header/Header';
import ClockNow from './Components/Clocknow/ClockNow';
import AddEntry from './Components/AddEntry/AddEntry';
import AllActs from './Components/AllActs/AllActs';

// import Footer from './Components/Footer';

import {addQuote} from './redux/app/appAction';
class App extends Component {

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
      this.props.addQuote('"'+data.text+'" - '+data.author);
    })
      
  }
  
  render() {
    const {totalHours,quote} = this.props;
    return (
      <div className="App">
        <Header></Header>
        <hr/>
        <div className="clocks">
          <h1>Quote for the Day</h1>
            <blockquote cite="https://type.fit/api/quotes">{quote}</blockquote>
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
          <AddEntry></AddEntry>
        </div>
        <hr/>
        
        <div className="today">
          <p>All Entries:</p>
          <AllActs></AllActs>
        </div>
        <hr/>

        <div className="today">
          <h1>Total Productive Hours</h1>
            <p>{totalHours}</p> 
        </div>
        <hr/>
        {/*
        <Footer></Footer> */}
      </div>
      
    );
  }
  
}

const mapStateToProps = state => ({
  totalHours: state.activity.totalHours,
  quote: state.app.quote
});

const mapDispatchToProps = dispatch => ({
  addQuote: quote => dispatch(addQuote(quote))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
