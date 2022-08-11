import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import './App.css';
import Feed from './components/Feed';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000"
});



function App() {
  const ids = ["1556600758908227585","1556713820453756931","1556638184041172992"];
  return (
    <>
    <div className="app">
    <ApolloProvider client={client}>
      <Router>
      <Sidebar/>
        <Routes>
          <Route path="/" element={<Feed ids={ids}/>}/>
          <Route path="/home" element={<Feed ids={ids}/>} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
    <Widgets/>  
      </Router>
    </ApolloProvider>
    </div>
    </>

  );
}

export default App;
