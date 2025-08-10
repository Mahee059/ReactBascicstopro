
import './APP.css'
import UserProfile from './components/user.profile'
import Counter from './components/counter'
function App() {



  //orderedlist and //onuderlist
  return (
    <>
    <main>
      <h1> React Bacics </h1>
      <ol type ='A' > 

        <li>What is React</li>
        <li>SPA(Single Page Application) & MPA(Multi page Application)</li>
        <li>SSR, CSR & SSG</li>
        <li>jsx - javascript xml</li>
        <li>React Functional components</li>
        {/* <li>{greet }</li> */}
        <li>Props (properties)</li>
          <li>DOM (Document Object Model) </li> 
          <li>VDOM  (Virtual Document Object Model)</li>

          <li>Hooks</li> 
          <ol>
            <li>useState</li> 
            <li>useEffect</li> 
            {/* yeslai kahile pani conditionally use garna mildaina */}

          </ol>

          {/* react ko exact copy ar coampare garxa  */}
          {/* //Interview Question    definging change where react change its.,  */}
          {/* Where this process called reconsideration */} 
          hooks use hunxa use state ko lagi 



        </ol>
      {/*<UserProfile name={'Alice'} email={'alice@gmail.com'} phone={98653233467} /> 
     <UserProfile name={'Charlie'} email={'charlie@gmail.com'} phone={98653233467} /> 
     
     */} 
        
        <Counter/>

    </main>
    </>
  
  )
}



  
export default App





