
import auth0 from '../../lib/auth0'

const me = async (req, resp) => {
    try{
      await auth0.handleProfile(req, resp)
    }catch(err){
        resp.status(500).end(err.message)
    }
}
export default me
//handleProfile: find out if user is logged in, if logged in returns that user, otherwise an error will be triggered