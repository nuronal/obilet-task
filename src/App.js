import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CustomNavbar from './components/CustomNavbar'
import { setHeader } from './helpers/setHeader'
import { GetSession } from './redux/oBilet/action'
import MyRouter from './router/MyRouter'
const App = () => {

  return (
    <>
      <CustomNavbar />
      <MyRouter />
    </>
  )
}

export default App