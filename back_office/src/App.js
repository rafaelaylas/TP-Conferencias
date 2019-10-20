import React, { Component } from 'react';
import MiAppBar from './components/MiAppBar';

import TablaConferencias from './components/TablaConferencias';




const appClasses = {root:'root'};

const tablaClasses = {
  onRequestSort: 'onRequestSort',
  onSelectAllClick: 'onSelectAllClick', 
  order: 'desc', 
  orderBy: 'dni', 
  numSelected: 0, 
  rowCount: 10,
  
  classes: {
    root:'root',
    highlight:'highligth',
    title: 'title',
    spacer: 'spacer',
    actions: 'actions',
    table: 'table',
    tableWrapper:'tableWrapper',
    botonesWrapper:'botonesWrapper'
  }
}


class App extends Component {

  
  render() {
    
    return (
      <div className="App">
        <MiAppBar classes ={appClasses}></MiAppBar>
        <TablaConferencias clases={tablaClasses}></TablaConferencias>
        
      </div>
    );
  }
}

export default App;
