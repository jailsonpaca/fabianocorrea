import {db} from '../../lib/firebase';

export default function getData(){

    return (Promise.all([
       // authenticate(),
        db.collection("plans").where('published', '==', true).get(),
        db.collection("depoiments").where('published', '==', true).get(),
        db.collection("posts").where('published', '==', true).get(),
    ]).then((responses)=>{
        if(responses){
            return {
                plans:responses[0].docs.map(doc => doc.data()),
                depoiments:responses[1].docs.map(doc => doc.data()),
                posts:responses[2].docs.map(doc => doc.data())
            };
        }
    }));
          
}