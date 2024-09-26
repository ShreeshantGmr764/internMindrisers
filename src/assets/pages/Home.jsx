import React, { useState } from 'react'
import Header from '../components/Header'
import Compiler from '../components/Compiler'
import Login from '../components/Login';
import LoginPage from './LoginPage';


const Home = () => {

const [refreshKey,setrefreshKey]=useState(0);

const refreshCompiler =() =>{
  setrefreshKey(prevKey => prevKey+1);
}

  return (
    <>
 <Header onNewBinClick={refreshCompiler}/>
 <Compiler key={refreshKey}/>
 <LoginPage/>
    </>
  )
}

export default Home
