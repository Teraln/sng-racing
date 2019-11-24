import { db } from '../firebase.js'
//import store from './index.js';

class Getter {
    getDrivers() {
        const fbData = [];
        db.collection("drivers").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id)

                    //console.log(doc.id, " => ", doc.data())
                    fbData.push(doc.data())
                    fbData.forEach((document) => {
                        document.id = doc.id
                    })


                });
            }
            );
        //console.log(fbData);
        return fbData
    }
}

export default new Getter()
