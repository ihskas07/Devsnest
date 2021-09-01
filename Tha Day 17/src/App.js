import './App.css';
import Item from "./Card"
function App() {

  return (
    <div className="app">
      <h1>Calorie Read Only</h1>
      <Item name ="Pizza" cal ="56"/>
      <Item name ="Burger" cal = "69"/>
      <Item name ="Coke" cal = "500"/>
      <Item name ="Browne" cal = "180"/>
      <Item name ="Fried Rice" cal = "90"/>
      <Item name ="Lassania" cal = "200"/>
      <Item name ="Pani Puri" cal = "10"/>

    </div>
  );
}

export default App;