import ReactDom from 'react-dom';
import Parent from './props/Parent';
import GuerstList from './state/GuerstList';
import UserSearch from './state/UserSearch';



const App = () => {
    return (
        <div>
            <h1>hi there ! </h1>
            <Parent/>
            <hr/>
            <GuerstList/>
            <hr/>
            <UserSearch/>
        </div>
    )
}



ReactDom.render(
    <App/>,
    document.getElementById("root")
)

export default App;