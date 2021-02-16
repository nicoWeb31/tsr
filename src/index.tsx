import ReactDom from 'react-dom';


const App = () => {
    return (
        <div>
            <h1>hi there ! </h1>
        </div>
    )
}



ReactDom.render(
    <App/>,
    document.getElementById("root")
)

export default App;