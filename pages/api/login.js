
//API: request <=> response

import auth0 from '../../lib/auth0'

const login = async(req, res)=>{
    await auth0.handleLogin(req, res)
    //response.send('Holla FullStack lab')
    /*res.send(
        {
            name: 'Renato Domingues'
        })*/
}
export default login