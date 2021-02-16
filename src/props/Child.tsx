import React from 'react'
interface ChildProps {
    color: string;
    onclick: () => void;

}

export const Child = (props: ChildProps) => {
    return (
        <div>
            hi tere! 
            {props.color}
            
            <button onClick={props.onclick}>click Me</button>
        </div>
    )
}



export const ChildAsFC : React.FC<ChildProps> = ({color, onclick, children})=>{
    return (
        <div>
            hi tere! 
            {children}
            {color}
            <button onClick={onclick}>click Me</button>

        </div>
    )
}