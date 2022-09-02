import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import './App.css';
import Feed from './components/Feed';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import Blogs from "./components/Blogs";
import { useEffect } from "react";
import icon from './components/Images/favicon.ico';
import Connections from "./components/Connections";

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: "http://localhost:4000"
// });

function App() {
  
  useEffect(()=>{
    const favicon = document.getElementById('favicon');
    favicon.setAttribute('href',icon);
  },[])  
  const ids = ["1556600758908227585","1556713820453756931","1556638184041172992"];

  return (
    <>
    <div className="app">
    {/* <ApolloProvider client={client}> */}
      <Router>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Feed ids={ids}/>}/>
          <Route path="/home" element={<Feed ids={ids}/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/posts" element={<Blogs/>}/>
          <Route path="/connects" element={<Connections />}/>
        </Routes>
        <Widgets/>  
      </Router>
    {/* </ApolloProvider> */}
    </div>
    </>

  );
}

export default App;
