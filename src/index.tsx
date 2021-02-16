import ReactDom from 'react-dom';
import Parent from './props/Parent';
import GuerstList from './state/GuerstList';


const App = () => {
    return (
        <div>
            <h1>hi there ! </h1>
            <Parent/>
            <hr/>
            <GuerstList/>
        </div>
    )
}



ReactDom.render(
    <App/>,
    document.getElementById("root")
)

export default App;