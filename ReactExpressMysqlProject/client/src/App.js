import React,{ Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      task: []
    }
  }

  componentDidMount() {
    axios.get('/api/news').then(
      res => {
        const tasks = res.data;
        this.setState({task: tasks.todo});
      }).catch(err => console.log(err));
  }

  render()
  {
    return(
      this.state.task.map(item => 
       <ul>
            <li key={item.id}>
          <h2>Title: {item.title} </h2>
          <p>Detail: {item.detail}</p>
        </li>
       </ul> 
     ))
  }
}

export default App;
