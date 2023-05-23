import { useEffect, useState } from "react";
export const Counter2 = ({ name }) => {
    const [count, setCount] = useState(0);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        console.log('useEffect');
        setTimeout(() => {setLoading(false)}, 3000);
    },[loading,count]);
    const onDecrease = () => {
        setCount(count - 1);
    }
    const onIncrease = () => {
        setCount(count + 1);
    }
    console.log('re-render');
    return (
        <div>
            {
                loading?
                <div>loading</div>:
                <>
                    <h1>Hello {name}</h1>
                    <button onClick={() => onDecrease()} style={{ width: 60, height: 40 }}>-</button>
                    <span style={{ marginLeft: 30, marginRight: 30 }}>{count}</span>
                    <button onClick={() => onIncrease()} style={{ width: 60, height: 40 }}>+</button>
                </>
            }
        </div>
    )

} 