import React, { Component } from 'react';
//import firebase from 'firebase';


class Form extends Component { 
    constructor(){
        super();
        this.state={
            Nombre:null,
            Empleo:null,
            telefono:null
        }
    }
   
   render(){
       return <form>
           <label>
               Nombre de la empresa:    
           </label>
       </form>
   }

}


export default Form;