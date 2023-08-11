import "./app.css";

function App() {
  return (
  <div className="app">
    <span>React Search </span>
    <input
      className="search"
      placeholder="Search..."
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
    />
    
    <ul className="list">
        <li className="listItem">
             
        </li>
    </ul>

</div>

)}

export default App;
