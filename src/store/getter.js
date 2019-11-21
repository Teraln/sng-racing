import { db } from '../firebase.js'
//import store from './index.js';

class Getter {
    getDrivers() {
        const fbData = [];
        db.collection("drivers").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    //console.log(doc.id, " => ", doc.data())
                    fbData.push(doc.data())
                });
            }
            );
        //console.log(fbData);
        return fbData
    }
}

export default new Getter()
