import React,{ useState } from 'react';

const GuerstList: React.FC = () => {

    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);


    const addGuest = ()=>{
        setName('');
        setGuests([...guests,name]);
    }

    return (
        <div>
            <h3>GuerstList</h3>
            {guests.map(guest=>{
                return (
                    <h6>{guest}</h6>
                )
            })}

            <input value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={addGuest}>Add Guest</button>

        </div>
    )
}

export default GuerstList
