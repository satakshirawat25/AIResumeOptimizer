import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import {AuthContext} from '../AuthContext.jsx'


const withAuthHOC = (WrappedComponents) => {
    
  return (props)=> {
    const navigate = useNavigate()
    const {setLogin} = useContext(AuthContext)

    useEffect(()=>{
        const isLogin = localStorage.getItem('isLogin')
        if(!isLogin){
            setLogin(false)
            navigate('/')

            return
        }
    },[navigate])

    return <WrappedComponents {...props}/>
}
}

export default withAuthHOC
