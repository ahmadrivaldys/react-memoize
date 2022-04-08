import React, { useRef } from 'react'

const Counter = ({ increment }) =>
{
    const renders = useRef(0)
    console.log('Renders:', renders.current++)
    
    return (
        <div>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default React.memo(Counter, (prev, next) =>
{
    return prev.value === next.value
})