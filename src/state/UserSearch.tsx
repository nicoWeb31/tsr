import React,{ useState} from 'react'



const users=[
    {name:"toto",age:20},
    {name:"mamy",age:220},
    {name:"tata",age:120},
    {name:"titi",age:24}
];

const UserSearch: React.FC = () => {

    const [name,setName] = useState('');
    const [user, setUser] = useState<{name: string,age: number} | undefined>();

    const onHandleClick = ()=>{
        setName('');
        const findUser = users.find(user => user.name === name);
        setUser(findUser);
    }


    return (
        <div>
            <h1>userSearch</h1>
            <input value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={onHandleClick}>Search</button>

            {
                user && 
                    <>
                    <h6>{user.name}</h6>
                    <h6>{user.age}</h6>
                    </>
            }



        </div>
    )
}

export default UserSearch
