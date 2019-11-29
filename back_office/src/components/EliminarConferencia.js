import React from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ApiController from '../controller/ApiController';

const API = 'http://localhost:3006/api/conferences';
const API2 = 'http://localhost:3006/api/users';

var conferencias;

 fetch(API)
    .then(function(response) {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then(data => conferencias = data)
     .then(() => console.log(conferencias))


  var users;

 fetch(API2)
    .then(function(response) {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then(data => users = data)
     .then(() => console.log(users))

export default class EliminarConferencia extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
        open: false,
        idConference:'',
        has_users: false,
    };


  }

  handleClickOpen = () => {
    this.setState({ open: true, has_users: this.props.value.users && !!this.props.value.users.length });
  };
  handleDelete = () => {
    console.log("props",this.props);
    let data = {
      idConference : this.props.value._id
    }
    ApiController.deleteConference(data);
    this.setState({ open: false });
    window.location.reload();
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  onChangeIdConference = (e)=>{
    this.setState({idConference : e.target.value});
  }
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          Eliminar Conferencia
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Eliminar Conferencia</DialogTitle>
          <DialogContent>
            <DialogContentText>
               Esta seguro que desea eliminar la conferencia?
                { this.state.has_users && <div>Esta conferencia tiene usuarios inscriptos, si elimina se notificará por mail a los inscriptos que se canceló la conferencia.</div> }
            </DialogContentText>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>

            {/* logica de envio de email a suscriptores */}

            <Button onClick={this.handleDelete} color="primary">
              Eliminar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
