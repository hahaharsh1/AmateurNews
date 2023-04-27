// import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import NewsBody from './components/NewsBody';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';



const App=()=>{

const [progress,setProgress]=useState(0)


    return (
      <div>
        <Router>
        <Navbar />
          {/* <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />     */}
        <Switch>
          <Route exact strict path="/"><NewsBody setProgress={setProgress}  key="general"  pageSize={15} country="in" category="general"/></Route>
          <Route exact strict path="/business"><NewsBody setProgress={setProgress}  key="business"  pageSize={15} country="in" category="business"/></Route>
          <Route exact strict path="/entertainment"><NewsBody setProgress={setProgress}  key="entertainment"  pageSize={15} country="in" category="entertainment"/></Route>
          <Route exact strict path="/general"><NewsBody setProgress={setProgress}  key="general"  pageSize={15} country="in" category="general"/></Route>
          <Route exact strict path="/health"><NewsBody setProgress={setProgress}  key="health"  pageSize={15} country="in" category="health"/></Route>
          <Route exact strict path="/science"><NewsBody setProgress={setProgress} key="science"  pageSize={15} country="in" category="science"/></Route>
          <Route exact strict path="/sports"><NewsBody setProgress={setProgress}  key="sports"  pageSize={15} country="in" category="sports"/></Route>
          <Route exact strict path="/technology"><NewsBody setProgress={setProgress}  key="technology"  pageSize={15} country="in" category="technology"/></Route>
        </Switch>
        </Router>
              </div>
    )
  
}

export default App;