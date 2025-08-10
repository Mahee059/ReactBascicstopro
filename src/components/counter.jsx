import { useEffect, useState } from "react"

const Counter = () => {     
    // let count = 0; 


    const [count,setCount] = useState(0)  

    const onIncrement = () => { 
        // count += 1; 
        setCount(count +1)
        console.log(count);
    }
      
    const onDecrement = () => { 
        // count -= 1 
        setCount(count -1)
        console.log(count);
    
    } 
      
    console.log(count); 
    

    // component did mountn -> empty dependency array  

    useEffect(() => {
        console.log("mounting phase");
    }, []); //dependency array

    //component will did update 
    useEffect(() => {
        console.log("updating phase");

    }, [count]) 

    
    

    //compeonet did unmount 
    useEffect(() => {  
    // on  count change
        //---- 
      
    //
        
    
        () => {
            // 
        };
}, [count])




    return ( 
        <div> 
            <h4>Counter</h4> 
            <h3>{count}</h3> 

            <button onclick={onIncrement}>+</button>
            <button onclick={onDecrement}>-</button>
           

    </div>
)

    
} 
export default Counter