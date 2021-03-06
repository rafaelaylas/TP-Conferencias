import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ApiController from '../controller/ApiController';

export default class ModificarConferencia extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      open: false,
      cover: this.props.value.cover,
      title: this.props.value.title,
      date: this.props.value.date,
      description: this.props.value.description,
      speaker: this.props.value.speaker,
      infoSpeaker: this.props.value.infoSpeaker
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleUpdate = () => {
    console.log("props",this.props);
    let data = {
      // utilizo el id conferencia de monngo 
      idConference : this.props.value._id,
      newData :{
        cover : this.state.cover,
        title : this.state.title,
        date : this.state.date,
        description : this.state.description,
        speaker : this.state.speaker,
        infoSpeaker : this.state.infoSpeaker

      }
    }
    // console.log(data);
    ApiController.updateConference(data);
    this.setState({ open: false });
    window.location.reload();

  };
  handleClose = () => {
    this.setState({ open: false });
  };
  
  onChangeIdConference = (e)=>{
    this.setState({idConference : e.target.value});
  }
  onChangeTitle (e){
    this.setState({title : e.target.value});
  }
  onChangeCover (e){  
    this.setState({cover : e.target.value});
  }
  onChangeDate = (e)=>{
    this.setState({date : e.target.value});
  }
  onChangeDescription = (e)=>{
    this.setState({description : e.target.value});
  }
  onChangeSpeaker = (e)=>{
    this.setState({speaker : e.target.value});
  }
  onChangeInfoSpeaker = (e) =>{
    this.setState({infoSpeaker : e.target.value});
  }
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          modificar Conferencia
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Modificar Conferencia</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Aqui puede modificar los datos de una conferencia.
            </DialogContentText>
          
              <TextField
              autoFocus
              margin="dense"
              id="cover"
              label="Cover"
              type="text"
              fullWidth
              value = {this.state.cover}
              onChange = {this.onChangeCover.bind(this)}
            />
            <TextField
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              value = {this.state.title}
              onChange = {this.onChangeTitle.bind(this)}
            />
             <TextField
              margin="dense"
              id="date"
              label="Date"
              type="text"
              fullWidth
              value = {this.state.date}
              onChange = {this.onChangeDate.bind(this)}
            />
            <TextField
              multiline
              rowsMax="4"
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              value={this.state.description}
              onChange = {this.onChangeDescription.bind(this)}
            />
            <TextField
              margin="dense"
              id="speaker"
              label="Speaker"
              type="text"
              fullWidth
              value={this.state.speaker}
              onChange = {this.onChangeSpeaker.bind(this)}
            />
             <TextField
              margin="dense"
              id="infoSpeaker"
              label="InfoSpeaker"
              type="text"
              fullWidth
              value={this.state.infoSpeaker}
              onChange = {this.onChangeInfoSpeaker.bind(this)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleUpdate} color="primary">
              Modificar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
