import { Create } from './Create/Create';
import { Explore } from './Explore/Explore';
import { Friends } from './Friends/Friends';
import { Home } from './Home/Home';
import { Login } from './Login/Login'
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Account } from './Account/Account';

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
            <Route path="/explore" element={ signedIn ? <Explore/> : <Login/> }/>
            <Route path="/create" element={ signedIn ? <Create/> : <Login/> }/>
            <Route path="/friends" element={ signedIn ? <Friends/> : <Login/> }/>
            <Route path="/account" element={ signedIn ? <Account/> : <Login/> }/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
