import logo from './logo.svg';
import './App.css';


import Expenseitem from "./components/Expenseitem";
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

      <Expenseitem expenseData={expenses[0]}></Expenseitem>
        <Expenseitem expenseData={expenses[1]}></Expenseitem>

    </div>
  );
}

export default App;
