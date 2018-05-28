import firebase from 'firebase';


export default function save (user) {
    const usuario = {
        uid:user.uid,
        nombre:user.displayName,
        email:user.email,
        photo:user.photoURL
     }

    firebase.database().ref(`Users/${user.uid}`)
    .set(usuario)
}

//set graba en toda la rama
