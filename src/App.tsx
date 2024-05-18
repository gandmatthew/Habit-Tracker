import './App.css'
import { Create } from './Create/Create';
import { Explore } from './Explore/Explore';
import { Friends } from './Friends/Friends';
import { Home } from './Home/Home';
import { Login } from './Login/Login'
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

interface UserContextType {
  signedIn: boolean;
  setSignedIn: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextType>({
  signedIn: false,
  setSignedIn: () => {}
});

function App() {

  const [signedIn, setSignedIn] = useState(false)
  
  return (
    <>
      <UserContext.Provider value={{signedIn, setSignedIn}}>
        
        <BrowserRouter>
          <Routes>
            <Route index element={ signedIn ? <Home/> : <Login/> } />
            <Route path="/explore" element={ <Explore/> }/>
            <Route path="/create" element={ <Create/> }/>
            <Route path="/friends" element={ <Friends/> }/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
