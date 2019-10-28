import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ApiController from '../controller/ApiController';

export default class EliminarConferencia extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      open: false,
      idConference:''
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
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
              Esta seguro que desea eliminar la conferencia ?.
            </DialogContentText>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDelete} color="primary">
              Eliminar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
