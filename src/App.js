import React from 'react';
import { Component } from 'react';
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Tasks from "./components/Tasks/Task";
import "./App.css";

class App extends Component {
  state = {
    tasks: []
  };

  onKeyPress = event => {
    if (event.key === "Enter") {
      // Tomo el texto del formulario
      const text = event.target.value;
      // Copio tasks del estado
      if (text) {
        const tasks = [...this.state.tasks];
        // Agrego el texto
        tasks.push({ title: text });
        // Cambio el estado

        this.setState({
          tasks: tasks
        });
      }

      // Limpia el formulario
      event.target.value = "";
    }
  };

  onClickAdd = () => {
   
      // Tomo el texto del formulario
      const text = document.getElementById("inputAdd").value;
      // Copio tasks del estado
      if (text) {
        const tasks = [...this.state.tasks];
        // Agrego el texto
        tasks.push({ title: text });
        // Cambio el estado

        this.setState({
          tasks: tasks
        });
      }

      // Limpia el formulario
      document.getElementById("inputAdd").value = "";
    
  };

  clickCircle = (event, index) => {
    const tasks = [...this.state.tasks];

    tasks.splice(index, 1);

    this.setState({
      tasks: tasks
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Input
          onKeyPress={event => this.onKeyPress(event)}
          onClickAdd={this.onClickAdd}
        />
        <div className="wrapTaks">
          {this.state.tasks.map((task, index) => {
            return (
              <Tasks
                title={task.title}
                key={index}
                clickCircle={event => this.clickCircle(event, index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
