import { db } from '../firebase.js'
//import store from './index.js';

class Poster {
    //collection, data
    postNew(collection, docData) {
        db.collection(collection).add(docData).then((docRef) => {
            console.log("New document successfully written! =>", docRef.id);
        }).catch(err => console.log(err));
    }
}

export default new Poster()
