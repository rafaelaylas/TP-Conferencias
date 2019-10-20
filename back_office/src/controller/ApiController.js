import {Component} from 'react';

const url ="http://localhost:8080/apiAgenda/";
const urlGetContactos="leerAgenda";
const urlGetContactosById="leerAgenda/idBusqueda";
const urlInsertContacto="/insertContacto/Contacto";
const urlUpdateContacto='/updateContacto/Contacto';
const urlDeleteContacto='/deleteContacto/Contacto';

class ApiController extends Component
{
   
    getConference(okBusqueda)
    {
        const endpoint = 'http://localhost:3006/api/conferences';
        //console.log("Buscando")
       fetch(endpoint).then ((response) => {
            // console.log("response",response);
            return response.json();
        }).then (responseData => {
                //console.log(responseData);
            
                //console.log("Recibi datos");
                okBusqueda(responseData);
                // console.log(responseData)
          
        });
    }
    getContactosById(data)
    {
        const endpoint = 'http://';
        //console.log("Buscando")
        console.log(data);
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        }).then ((response) => {
            
            return response.json();
        }).then (responseData => {
                console.log(responseData);
            
                //console.log("Recibi datos");
                
        });
    }
    insertConference(data)
    {
        console.log("guardo conferencia",data);
        
        
        const endpoint = 'http://localhost:3006/api/conferences';
        console.log("Guardando");
            fetch (endpoint,{
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
    updateConference(data)
    {
        console.log("actualizo contacto",data);
        
        
        const endpoint = `http://localhost:3006/api/conferences/${data.idConference}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'PUT',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data.newData)
        }).then ((response) => {
            console.log("response",response);
                       
            return response.json();
        }).then((rta)=> { console.log("Respuesta",rta)})
        
    }
    deleteConference(data)
    {
        console.log("idConferencia a eliminar: ",data.idConference);
        
        
        const endpoint = `http://localhost:3006/api/conferences/${data.idConference}`;
        // console.log("Guardando");
            fetch (endpoint,{
            method:'DELETE',
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