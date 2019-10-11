import {Component} from 'react';

const url ="http://localhost:3006/api/users/";
const url2 ="http://localhost:3004/api/movies/";

class ApiController extends Component{

    getContactos()
    {
        // const endpoint = `${url}${urlGetContactos}`;
        //console.log("Buscando")
       fetch(url2).then ((response) => {
             console.log("response",response);
             return response.json();
        }).then (responseData => {
                 console.log(responseData);
            
                 console.log("Recibi datos");
                //okBusqueda(responseData);
            // return movieList;
        });
        
    }

    insertUser(data)
    {
        console.log("guardo contacto",data);
        
        
        // const endpoint = `${url}`;
        console.log("Guardando");
            fetch (url,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
        })
        
    }
}

export default new ApiController();