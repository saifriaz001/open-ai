import { useState } from 'react';
import { Routes,Route,Navigate, BrowserRouter} from "react-router-dom";
import Chat from "@/components/chat";
import Login from "@/components/chat/login"
import './App.css'

function App() {
  const [user,setUser] = useState(null);
  const[secret, setSecret] = useState(null);
  const isAuth =Boolean(user)&& Boolean(secret);


  return (
    
      <div className='app'>
        <BrowserRouter basename=''>
        <Routes>
          <Route path="/"
          element={
            isAuth ? (
              <Navigate to="/chat"/>
            ):(
              <Login setUser={setUser} setSecret={setSecret}/>
            )
          }/>
          <Route path="/chat" element={isAuth?(<Chat user={user} 
          secret={secret}/>):(<Navigate to="/"/>)}/>
        </Routes>
        </BrowserRouter>
   
       </div>
    
  )
}

export default App;
