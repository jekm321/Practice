import React, { Component } from 'react';
import logo from './logo.svg';
import cloudy from './weatherSVG/cloudy.svg';
import sunny from './weatherSVG/sunny.svg';
import snowy from './weatherSVG/snowy.svg';
import rainy from './weatherSVG/rainy.svg';
import stormy from './weatherSVG/stormy.svg';
import windy from './weatherSVG/windy.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home
    </div>
  )
}

const Day = props => {
  const { day, high, low, weather } = props;
  const weathers = {
    Sunny: sunny,
    Cloudy: cloudy,
    Windy: windy,
    Rainy: rainy,
    Snowy: snowy,
    Stormy: stormy,
  }
  return (
    <div className="Container__Day">
      <div className="Day__Title">
        {day}
      </div>
      <div className="Day__Weather">
        <img src={weathers[weather]} alt={weather}/>
        {weather}
      </div>
      <div className="Day__Temps">
        <div>
          {high}&deg;
        </div>
        <div>
          {low}&deg;
        </div>
      </div>
    </div>
  )
}

const Weather = props => {
  return (
    <div className='Container__Week'>
      {props.days.map(day => {
        return (
          <div key={day.id}>
            <Day day={day.name} high={day.high} low={day.low} weather={day.weather} />
          </div>
        )
      })}
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: [
        {
          id: '0',
          name: 'Sunday',
          high: '100',
          low: '88',
          weather: 'Sunny'

        },
        {
          id: '1',
          name: 'Monday',
          high: '95',
          low: '82',
          weather: 'Sunny'

        },
        {
          id: '2',
          name: 'Tuesday',
          high: '88',
          low: '76',
          weather: 'Cloudy'

        },
        {
          id: '3',
          name: 'Wednesday',
          high: '79',
          low: '57',
          weather: 'Rainy'

        },
        {
          id: '4',
          name: 'Thursday',
          high: '77',
          low: '55',
          weather: 'Rainy'

        },
        {
          id: '5',
          name: 'Friday',
          high: '88',
          low: '72',
          weather: 'Sunny'

        },
        {
          id: '6',
          name: 'Saturday',
          high: '105',
          low: '92',
          weather: 'Sunny'

        },
      ],
      lastCall: Date.now()
    }
  }

  timeCheck = () => {
    let currentTime = Date.now();
    let timeElapsed = currentTime - this.state.lastCall;
    if (timeElapsed < 600000) {
      return false;
    } else {
      return true;
    }
  }

  getWeather = () => {
    if (this.timeCheck()) {
      
    } else {
      let currentTime = Date.now();
      let timeElapsed = currentTime - this.state.lastCall;
      let timeLeft = (600000 - timeElapsed)/1000;
      let minutes = parseInt(timeleft / 60);
      let seconds = parseInt(timeleft % 60);
      return {
        Error: `Too Soon, please try again in ${minutes}:${seconds}`
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path='/forecast'
            component={(props) => <Weather days={this.state.weather} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
