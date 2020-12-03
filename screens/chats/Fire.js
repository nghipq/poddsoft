import firebase from "firebase"
import AsyncStorage from "@react-native-community/async-storage"

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
        // this.state = {

        //     userId: "",
        //     name: ""
        // }

    }
  
    init = () => {
        if (!firebase.apps.length) {
            var firebaseConfig = {
                apiKey: "AIzaSyA5_MtEc-ff6ECQMSEyfjHbN6BvhNPX87w",
                authDomain: "poddsoft.firebaseapp.com",
                databaseURL: "https://poddsoft.firebaseio.com",
                projectId: "poddsoft",
                storageBucket: "poddsoft.appspot.com",
                messagingSenderId: "355335609819",
                appId: "1:355335609819:web:d7fab85353d00f05f15bfe",
                measurementId: "G-WPXZQXDMF5"
            };

            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);


        }
    }


    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously()
            }
        })

    }

    send = messages => {
        messages.forEach(item => {
            const message = {
                content: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user,
                type: 0,
                status: 0,
                room_id: item.user
            }
            console.log(message);

            this.db.push(message)
        });
    }


    parse = message => {

        const { content, timestamp, user, room_id } = message.val()
        const { key: _id } = message
        const createAt = new Date(timestamp)
         return {
            _id ,
            text: content,
            createAt,
            user,
            room_id
        }
        // let idU = user._id
    }

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)))
    }

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages")
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new Fire()