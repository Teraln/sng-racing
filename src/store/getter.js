import { db } from '../firebase.js'
//import store from './index.js';

class Getter {
    getDrivers() {

        db.collection("drivers").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                console.log(doc.id, " => ", doc.data())

            });
        });

    }
}

export default new Getter()
