//1st way
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"))

//2nd way
const hello = (<p>Hello P</p>)
ReactDOM.render(hello, document.getElementById("root1"))

//3rd way
function MyApp() {
  return <h1>Hello, world!</h1>;
}

const container = document.getElementById('root2');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);