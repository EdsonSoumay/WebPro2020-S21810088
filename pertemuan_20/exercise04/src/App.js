//import Header from './components/Header';
//import './App.css';
//import React, {Component} from "react";
//import Card from './components/card-pertemuan21';
//import axios from "axios";
//import {person} from './utils/person-pertemuan21';
//import Counter from './components/counter-pertemuan22';
//import Hello from './components/Hello';
//import Content from './components/Content';
//import Nama from './components/Nama';
//import Ttl from './components/Ttl';
//import Alamat from './components/Alamat';


// ---------------------------------------PERTEMUAN 25 --------------------------------------------
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Home, Login, Register } from './pages'


const App = () =>{
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;





//------------------------------------PERTEMUAN 24----------------------------------------------
/*class App extends Component{
 
  state = {
    users: [],
  };
 
  componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => this.setState({users:json}));
  
 
  //axios
  //.get("https://jsonplaceholder.typicode.com/users");
  //.then((response) =>this.setState({users: response.data}));
   
}  
  render(){
    return( 
    <>
      {this.state.users.map((item) =>{
        return(
        <Card
          name={item.name}
          username={item.username}
          email = {item.email}
          phone= {item.phone}
        />
        );
    })}
    </> 
    );  
  }
}
  export default App;




/*
------------------------------------PERTEMUAN 23 NO CLASS----------------------------
sir suruh melanjutkan tugas React Aplikasi Dragon ball
*/




/*
//-----------------------------------PERTEMUAN 22--------------------------------------
function App() {
  return( 
    <>
   <Counter/>
   </>
   );
  }
    export default App;

*/


/*
//----------------------------------PERTEMUAN 21----------------------------------
function App() {
  return( 
    <>
   {person.map((item)=> {
     return(
       <Card
        name={item.name}
        institution={item.institution}
        address = {item.address}
        phoneNumber= {item.phoneNumber}
      />
     );
   })}
   </>
   );
  }
    export default App;

*/


  /*
//-----------------------------------EXERCISE 04-----------------------------------------------


function App() {
  return( 
    <>
      <Header/>
      <Hello/>
      <Nama/>
      <Alamat/>
      <Ttl/>
      <Content/>
    </>
   );
  }
}
  export default App;

*/

// keterangan : jsx hanya memiliki 1 komponen yang dikembalikan
