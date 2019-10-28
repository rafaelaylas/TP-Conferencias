// Responsable de almacenar datos en el storage y poder leerlos
const setItem = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

const getItem = (key) =>{
    // si existe este key almacenado entonces
    if(window.localStorage.getItem(key)){
        return JSON.parse(window.localStorage.getItem(key));
    }
    return undefined;
}

export function setUser(user){
    setItem('user', user);
}

export function getUser() {
  return getItem('user');
}

export function clear(){
    window.localStorage.clear();
}