import React, { Component } from 'react';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Header from './components/header';
import HeaderUser from './components/header/HeaderUser';
import IconGoogle from './components/icons/btnGoogle';
import IconFacebook from './components/icons/Iconfacebook';

import data from './components/db/index';
import Ofertas from './components/login/Ofetas';
import save from '../src/services/save';
import Form from '../src/components/form/form';
import { actionKreator } from './actions/index';
import  {store} from './store/index';

import './App.css';
//import AppRouter from './Router/Router';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      user:true,
      email:null,
      empresa:false
    }


    this.handleAuth=this.handleAuth.bind(this);
    this.renderLoginButton=this.renderLoginButton.bind(this);
    this.company=this.company.bind(this);

  }


  handleAuth() {
     const provider = new firebase.auth.GoogleAuthProvider();
    //creamos un proveerdor en este caso google
    firebase.auth().signInWithPopup(provider)
    .then( 
      result => { 
      save(result.user);  console.log(`${result.user.email} ha iniciado sesión`) 
      const email=result.user.email;

      const action = {
        type:"USER",
        email
      }
          store.dispatch(action);
      this.setState({
        email:store.getState().email
      })
      console.log(this.state.email);
    }) 
    .catch(error=> console.log(`Error: ${error.code} ${error.message}` ))
  }
  //this.setState({
  //  correo:result.user.email
  //})  
//logeo
company(){
    this.setState({
      user:null,
      empresa:true
    })
    store.dispatch(actionKreator(true));        
    if(this.state.empresa){
      return <Form></Form>
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  }

  renderLoginButton(){
    if(this.state.user){
      return <div>
              <section>
                <div className="imgContainer">
                   <img src={ process.env.PUBLIC_URL+'/images/iphone.png' } className="image" alt="texto"/>
                </div>
              <div className="btn">
                  <button  className="btnLogin" onClick={this.handleAuth}>
                    Inicia sesión con Google <IconGoogle/></button>
                    <button className="btnLogin btnFacebook">
                    Inicia sesión con facebook <IconFacebook></IconFacebook>
                    </button>
          
       <Router>
       <div className="routes">
           <Link to="/Empresa" className="link"  id="empresa" onClick={this.company}>
               Eres una empresa?
           </Link>
             <Route path="/Empresa" component={Form} />
             </div>
          </Router>
      </div>
    </section>
    
    <div className="row ">
      { this.jobs() }
    </div>
    </div>

  }
}

  /** */

  jobs(){
   return data.jobs.map( (jobs,index) => {
      return (
       <Ofertas jobs={jobs} key={index} />
      );
    })
  }

  renderHeader(){
    if(this.state.user){
      return <Header></Header>
     }
  }

  render() {
    console.log("Ejecutando");
    if(this.state.email){
      return <HeaderUser></HeaderUser>
    }else if(this.state.user){
          return  <div>
            <MuiThemeProvider>
                <div>
                    {this.renderHeader()}
                </div>
              <section>
                  {this.renderLoginButton()}
              </section>
        </MuiThemeProvider> 
          </div>
        }//render
      }
}// clase 

export default App;
