import {createStore} from 'redux';


export const store=createStore((state,action)=> {
    if(action.type === "USER"){
        return {
            ...state,
            email:action.email
        }
    }
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//creamos un store y le pasamos una funcion vacia que es una funcion reductora