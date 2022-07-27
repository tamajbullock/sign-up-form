
import './App.css';
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import * as React from 'react';
function App() {
  return (
    <div className="App">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Alert severity="error">This is an error alert — check it out!</Alert>
    <Button variant="text">Text</Button>
   <Button variant="contained">Contained</Button>
   <Button variant="outlined">Outlined</Button>
   
    </div>
  );
}

export default App;