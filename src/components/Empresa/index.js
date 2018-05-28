import React, { Component } from 'react';
import firebase from 'firebase';


class Empresa extends Component {
    
    componentDidMount(){
        firebase.database().ref("Users/").on( s => {
            const users = s.val();
            console.log(users);
        })
    }

    render(){
       return <div>
            <h1> Hola</h1>
        </div>
    }
}
export default Empresa;