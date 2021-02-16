import ReactDom from 'react-dom';
import Parent from './props/Parent';


const App = () => {
    return (
        <div>
            <h1>hi there ! </h1>
            <Parent/>
        </div>
    )
}



ReactDom.render(
    <App/>,
    document.getElementById("root")
)

export default App;