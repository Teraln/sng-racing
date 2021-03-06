import { db, st } from "../firebase.js";
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
    };
  }

  partnerTemplate() {
    return {
      name: null,
      text: null,
      link: null,
      imageURL: null
    };
  }

  galleryTemplate() {
    return {
      title: null,
      imageURL: null
    };
  }

  newsTemplate() {
    return {
      title: null,
      platform: null,
      imageURL: null,
      year: null,
      month: null,
      day: null,
      text: null,
      unix: null
    };
  }

  //READ
  getData(collection) {
    return db
      .collection(collection)
      .get()
      .then(querySnapshot => {
        const fbData = [];
        querySnapshot.forEach(doc => {
          const dataWithID = Object.assign(doc.data(), { id: doc.id });

          fbData.push(dataWithID);
        });
        return fbData;
      })
      .catch(error => {
        return error;
      });
  }

  //WRITE
  edit(collection, docData, id) {
    db.collection(collection)
      .doc(id)
      .set(docData);
  }

  postNew(collection, docData) {
    db.collection(collection)
      .add(docData)
      .then(docRef => {
        return docRef;
      })
      .catch(err => {
        return err;
      });
  }

  deleteEntry(collection, id) {
    db.collection(collection)
      .doc(id)
      .delete()
      .then(() => {
        return id;
      })
      .catch(error => {
        return error;
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
    const fileRef = stRef.child(`${folder}/${name}`);

    const uploadTask = fileRef.put(file);

    // Listen for state changes, errors, and completion of the upload.

    uploadTask.on(
      "state_changed", // or 'state_changed'
      snapshot => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        return progress;
      },
      error => {
        return error;
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          updateDB(downloadURL);
        });
      }
    );
  }

  //TODO Maybe keep for later
  //DATE HANDLER
  dateToUnix(year, month, day) {
    const stringify = `${year}-${month}-${day}`;
    const unix = parseInt((new Date(stringify).getTime() / 1000).toFixed(0));
    return unix;
  }
}

export default new API();
