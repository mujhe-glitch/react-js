import React from 'react'

export const MyButton = (props) => {
    return (
        <div>
            <button onClick={() => { props.fun() }} className={props.class || 'btn btn-primary'}>{props.name || "test"}</button>
        </div>
    )
}
