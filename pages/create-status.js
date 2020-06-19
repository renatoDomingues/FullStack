
import React, {useState} from 'react'
import auth0 from '../lib/auth0'
import axios from 'axios'
import {useAuth} from '../lib/AuthContext'
import router from 'next/router'

const CreateStatus = ()=>{
    const auth = useAuth()
    const [dados, setDados]= useState({
        status: 'bem',
        coords:
        {
            lat: null,
            long: null
        }
    })
    if(auth.isAuthReady && !auth.isAuth){
        router.push('/')
    }
    const getMyLocation=()=>{
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(position=>{
                //console.log(position.coords)
                setDados(old=>{
                    return{
                        ...old,
                        coords:{
                            lat: position.coords.latitude,
                            long: position.coords.longitude
                        }
                    }
                })
            })
        }
    }
    const onStatusChange = evt=>{
        const value = evt.target.value
        setDados(old=>{
            return{
                ...old,
                status: value
            }            
        })
        //console.log()
    }
    const save= async()=>{
        await axios.post('/api/save-status', dados)
    }
    return(
        <div>
             <h1>Create Status</h1>
             <label className='block'>
             <label><input 
                       type='radio' 
                       name='status' 
                       value='bem' 
                       onClick={onStatusChange}/>Estou bem e sem sintomas</label>
             </label>
             <label className='block'>
             <label><input 
                        type='radio' 
                        name='status' 
                        value='gripe' 
                        onClick={onStatusChange}/>Estou com sintomas de  gripe/resfriado</label>
             </label>
             <label className='block'>
             <label><input 
                       type='radio' 
                       name='status' 
                       value='covid' 
                       onClick={onStatusChange}/>Estou com sintomas de COVID</label>
             </label>
             Sua posição atual: {JSON.stringify(dados)}
             <button onClick={getMyLocation}>Pegar a minha localiação</button>
             <button onClick={save}>Salvar o meu status</button>
        </div>
    )
}
export default CreateStatus

export async function getServerSideProps({req, res})
{
    const session = await auth0.getSession(req)
    if(session){
    return{
        props: 
        {
            isAuth: true,
            user: session.user,
        }
    }
}
    return{
        props:
        {
            isAuth: false,
            user: {}
        }
    }
}