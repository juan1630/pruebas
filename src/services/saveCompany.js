import firebase from 'firebase';
import React, { Component } from 'react';

class saveCompany extends Component {

    agregar(){
        firebase.database().ref("company").push({ 
                                        Nombre:"Google",
                                         Giro:"privada",
                                        empleo:"web master",
                                    telefono:785857585 })
    }
    render(){
        return <button onClick={ this.agregar }> Guardar </button>
    }
}

export default saveCompany;