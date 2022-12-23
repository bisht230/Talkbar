import React from 'react';
import Chat from './Chat';
import './App.css';
import Sidebar from './SideBar';
function App() {
  return (
    <div className="App">
      {/* {Sidebar} */}
      <Sidebar />
      {/* {Chat} */}
      <Chat />
    </div>
  );
}

export default App;
