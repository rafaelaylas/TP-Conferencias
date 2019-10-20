import { Component } from 'react';

class UserConferencesApi extends Component{

    insertUserConference(data)
    {
        console.log("guardo contacto",data);
                                
        console.log("Guardando");
            fetch ('http://localhost:3006/api/user-conferences/',{
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
// import { useEffect, useState } from 'react';

// const userConferencesApi = url => {
//     const [tvShows, setTvShows] = useState([]);
//     useEffect(() => {
//       window
//         .fetch(url)
//         .then(response => response.json())
//         .then(data => setTvShows(data.data));
//     }, []);
//     return tvShows;
//   };



  export default UserConferencesApi;