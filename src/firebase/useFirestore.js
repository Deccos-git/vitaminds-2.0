import { db } from "./config.js"
import { useState, useEffect} from 'react';
import { client } from '../Hooks/Client';
import { collection, query, where, getDocs, orderBy } from "firebase/firestore"; 

const useFirestore = (collect, compagny) => {

    const [docs, setDocs] = useState("")

    const getCollection = async () => {

        const col = collection(db, collect);
        const q = query(col, where('Compagny', '==', compagny));
        const snapshot = await getDocs(q);

        const docArray = []

        snapshot.docs.forEach(doc => 
            docArray.push({...doc.data(), docid: doc.id})
        );

        return docArray

    }

    useEffect(() => {

        getCollection().then(coll => {
            setDocs(coll)
        })

    },[collect, compagny])

    return docs
}

const useFirestoreID = (collect, ID) => {

    const [docs, setDocs] = useState("")

    useEffect(() => {

        const queryCollection = async () => {
            const col = collection(db, collect);
            const q = query(col, where('ID', '==', ID));
            const snapshot = await getDocs(q);
    
            const docArray = []
    
            snapshot.docs.forEach(doc => 
                docArray.push({...doc.data(), docid: doc.id})
            );

            setDocs(docArray)
        }

    queryCollection()

    }, [collect, ID])

    return docs
}

export { 
    useFirestore,
    useFirestoreID,
}