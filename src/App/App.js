import React from 'react';
import TodoList from '../TodoList';
import "./App.css";

const details = {
  header: "Todoifier",
  headerColor: "red"
};

const {header} = details;

const moreDetails = {
  ...details,
  header: "Best Todoifier",
  background: "black"
};

const headerDisplay = ({
  header: title = "To do List",
  headerColor: color = "blue",
  background: background = "none"
  }) => <h2 style={{color: color, background: background}}>{title}</h2>;

const App = () => (
  <div className="App">
    {headerDisplay({})}
    <br />
    <TodoList />
  </div>
);

export default App;