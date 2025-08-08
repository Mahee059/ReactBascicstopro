
import './APP.css'
import UserProfile from './components/user.profile'
function App() {
 

  //orderedlist and //onuderlist
  return (
    <main>
      <h1> React Bacics </h1>
      <ul>
        <li>What is React</li>
        <li>SPA(Single Page Application) & MPA(Multi page Application)</li>
        <li>SSR, CSR & SSG</li>
        <li>jsx - javascript xml</li>
        <li>React Functional components</li>
      </ul> 

      <UserProfile/>  
     

      <div>
        <p>name : Alice </p>
        <p>email: alice@gmail.com</p>
        <p>phone np.: 9765960831</p>
      </div> 

    </main>
  
  )
}



  
export default App





