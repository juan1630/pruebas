import React, { Component } from 'react';
import firebase from 'firebase';


class Logout extends Component {
constructor(){
    super();
    
    this.handleLogout=this.handleLogout.bind(this);
}
    handleLogout(){
    firebase.auth().signOut()
  .then( result => {  console.log(`Has salido ${result.user.displayName}` )})
  .catch( error => { console.log( `Ocirrio el Error: ${error.code} y ${error.message} `) } )
    }

render(){
    return  <button onClick={this.handleLogout} className="btnLogout main">Cerrar sesión</button>
}
}

export default Logout;