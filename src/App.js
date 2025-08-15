export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌊Far Away🌊</h1>;
}

function Form() {
  return <div className="add-form">What items you want to add?</div>;
}

function PackingList() {
  return <h3 className="list">List</h3>;
}

function Stats() {
  return (
    <footer className="stats">
      You have X items in your list ,and you have alredy packed X (X%) items
    </footer>
  );
}
