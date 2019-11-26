import { db, st } from '../firebase.js'
//import store from './index.js';

class API {
    //DATA TEMPLATES
    driverTemplate() {
        return {
            name: null,
            lastname: null,
            country: null,
            role: null,
            series: null,
            year: null,
            month: null,
            day: null
        }
    }

    galleryTemplate() {
        return {
            title: null,
            imageURL: null
        }
    }

    //READ
    getData(collection) {
        const fbData = [];
        db.collection(collection).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const dataWithID = Object.assign(doc.data(), { id: doc.id })

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

        db.collection(collection).add(docData)
            .then((docRef) => {
                console.log("New document successfully written! =>", docRef.id);
            })
            .catch(err => console.log(err));
    }

    deleteEntry(collection, id) {
        db.collection(collection).doc(id).delete().then(() => {
            console.log("Document successfully deleted!", id);
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    //STORAGE
    //READ

    //WRITE

    // IMPORTANT: The postFile function takes in a callback of either
    // postNew() or edit() => those wait until the file is uploaded
    // and a link is returned.
    postFile(folder, name, file, updateDB) {
        //Create a reference to the storage
        const stRef = st.ref();
        //Create a reference and specify path to the file
        const fileRef = stRef.child(`${folder}/${name}`)

        const uploadTask = fileRef.put(file)



        // Listen for state changes, errors, and completion of the upload.


        uploadTask.on('state_changed', // or 'state_changed'
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }, (error) => {
                console.log(error)
            }, () => {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log(downloadURL);
                    updateDB(downloadURL)
                });
            });




    }

    //TODO Maybe keep for later
    //DATE HANDLER
    dateToUnix(year, month, day) {
        const stringify = `${year}-${month}-${day}`
        console.log(stringify)
        const unix = parseInt((new Date(stringify).getTime() / 1000).toFixed(0))
        console.log(unix)
        return unix
    }
}

export default new API()
