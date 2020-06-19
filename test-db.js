

const admin = require('firebase-admin')
const secret = require('./firebase-secret.json')
const {GeoFirestore} = require('geofirestore')

//my aplication
admin.initializeApp(
    {
        credential: admin.credential.cert(secret)
    })
    //instancia db
    const db = admin.firestore()
    const dbgeo = new GeoFirestore(db)
   
    
    //a promisse
    dbgeo
        .collection('test').add(
        {
            test: 1,
            coordinates: new admin.firestore.GeoPoint(-20.218990, -45.939060)
        })
        .then(()=>{
            console.log('ok')
        })