const admin = require("firebase-admin");
const serviceAccount = require("./early-alarm-pwa-firebase-adminsdk-ppv9f-c1092750a8.json");

class Firebase {
  constructor() {
    if (!this.admin) {
      // console.log('first time firebase admin initialize...')
      this.admin = this.initialze();
      this.db = this.admin.firestore();
      const settings = {/* your settings... */ timestampsInSnapshots: true};
      this.db.settings(settings);
      this.alarmsRef = this.db.collection('alarms');
    }
    return this;

  }

  initialze() {
    return admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://early-alarm-pwa.firebaseio.com"
    });
  }

  verifyToken(token, checkRevoked) {
    return this.admin.auth().verifyIdToken(token, checkRevoked)
      .then(decodedToken => Promise.resolve(decodedToken))
      .catch(error => Promise.reject(error));
  }

  setDB(uid, data, merge = true) {
    // const db = this.admin.firestore();

    const docRef = this.alarmsRef.doc(uid);

    return docRef.set(data, { merge });

  }

  getDB(uid) {
    this.alarmsRef.doc(uid).get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log('Document data:', doc.data());
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
  }
}

module.exports = new Firebase();
