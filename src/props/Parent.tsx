import React from 'react'
import {Child,ChildAsFC} from './Child'



// const Parent = () => {
//     return <Child color="red" onclick={()=>console.log('click')}>
//         </Child>
// }
// export default Parent


const Parent = () => {
    return <ChildAsFC color="red" onclick={()=>console.log('click')}>
        toto
        </ChildAsFC>
}
export default Parent