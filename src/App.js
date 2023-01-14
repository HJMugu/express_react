
import './App.css';

import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      date: new Date(2023,0,10),
      title: "new book",
      price: 30.99
    },
    {
      date: new Date(2023,0,6),
      title: "ice cream",
      price: 3.50
    }
  ]



  return (
    <div className="App">
      <Expenses>

      </Expenses>
    </div>
  );
}

export default App;
