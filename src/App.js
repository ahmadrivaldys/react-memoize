import { useCallback, useState } from 'react'
import './App.css'
import Counter from './Counter'

function App()
{
    const [ input, setInput ] = useState('')
    const [ count, setCount ] = useState(0)

    const increment = useCallback(() =>
    {
        setCount(prev => prev + 1)
    }, [setCount])

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <p>Count: {count}</p>
            <Counter increment={increment} object={{ value: 'haha' }} />
        </div>
    )
}

export default App