import { db } from '../firebase.js'
//import store from './index.js';

class API {
    //DATA TEMPLATES
    driverTemplate() {
        return {
            name: null,
            lastname: null,
            country: null,
            role: null,
            id: null
        }
    }
    //READ
    getData(collection) {
        const fbData = [];
        db.collection(collection).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {



                    const dataWithID = Object.assign(doc.data(), { id: doc.id })
                    //TODO delet
                    console.log(dataWithID)

                    fbData.push(dataWithID)


                });
            }
            );
        //console.log(fbData);
        return fbData
    }

    //WRITE
    edit(collection, docData, id) {
        db.collection(collection).doc(id).set(docData).then(() => {
            console.log("Document successfully edited!");
        });
    }

    postNew(collection, docData) {
        db.collection(collection).add(docData).then((docRef) => {
            console.log("New document successfully written! =>", docRef.id);
        }).catch(err => console.log(err));
    }
}

export default new API()
