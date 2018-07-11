import React, { Component } from 'react';
import AddToDo from './containers/AddToDo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddToDo />
        <VisibleTodoList/>
        <Footer />
      </div>
    );
  }
}

export default App;
