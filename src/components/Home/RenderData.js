import React,{ Component } from 'react';
import firebase from 'firebase';

class RenderData extends Component {
    constructor(props){
        super(props);

        this.state={
            blog:{
              }
        }
    }
    componentDidMount(){
        firebase.database().ref("Users").limitToFirst(1).on("child_added", s => {
            const user = s.val();
           this.setState({ 
                nombre:user.nombre,
                foto:user.photo,
                descripcion:user.descripcion
           })
           console.log(this.state)
        })
    }
    render(){
        if(this.state.nombre)
        {
            return <div className="user-data col-xs-6 col-sm-2">
                <h3 className="App-title title-comment"> { this.state.nombre } </h3>
                <img src={ this.state.foto } alt={ this.state.nombre } width={190}/>
                <p className="description title-comment"> { this.state.descripcion } </p>
            </div>
        }else {
           return <h3> Ellos ya usan esta app </h3>
        }
    }
}

export default RenderData;