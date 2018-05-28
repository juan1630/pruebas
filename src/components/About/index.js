import React,{ Component } from 'react';
import firebase from 'firebase';

class Perfil extends Component {
    constructor(){
        super();

        this.state={
            uid:null,
            foto:null,
            nombre:null,
            description:null
        }
        this.updatePic=this.updatePic.bind(this);
        this.save=this.save.bind(this);
    }
    updatePic(e){

        const picture = e.target.files[0];
        console.log(picture)
        const newPhoto={
            photo: picture.name
        }
            firebase.database().ref(`Users/${this.state.uid}`).set(newPhoto);
    }
    save(){
        var textEsc = document.getElementById('Escuela').value;
        var textCar = document.getElementById('Carrera').value;

        const dataNew = {
            Escolaridad:textEsc,
            Carrera:textCar
        }
        console.log(this.state.id);

        firebase.database().ref(`Users/${this.state.id}/`).update(dataNew);
    }
    componentDidMount(){
        firebase.database().ref("Users").on("child_added", s => {
            let user = s.val();
            this.setState( { 
                id:user.uid,
                foto:user.photo,
                nombre:user.nombre,
                description:user.descripcion
             })
        })
    }

    render(){
        return <div>
        <h1>Bienvenido a tu curriculum</h1>
        <section>
            <img src={this.state.foto} alt={this.state.nombre} className="image-prefil" />
            <form> 
                <input type="text" placeholder="Agrega tu esolaridad" id="Escuela"/>
                <input type="text" placeholder="Agrega tu especialida" id="Carrera" />
                <input type="button" value="Enviar" onClick={ this.save} />
            </form>
        </section>
    </div>
    }
}

export default Perfil;