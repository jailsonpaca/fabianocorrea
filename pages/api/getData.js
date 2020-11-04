import { db } from '../../lib/firebase';

async function getLandingNames() {
    let res = await db.collection("landings").where('published', '==', true).get();
    return res.docs.map(e => {
        console.log(e.data().name);
        return { pageName: e.data().name.replace(/ /g, "-"), title: e.data().name.replace(/-/g, " ") };
    });
}

export default function getData() {

    return (Promise.all([
        // authenticate(),
        db.collection("plans").where('published', '==', true).get(),
        db.collection("depoiments").where('published', '==', true).get(),
        db.collection("posts").where('published', '==', true).get(),
        getLandingNames(),
    ]).then((responses) => {
        if (responses) {
            
            return {
                plans: responses[0].docs.map(doc => doc.data()),
                depoiments: responses[1].docs.map(doc => doc.data()),
                posts: responses[2].docs.map(doc => doc.data()),
                landings: responses[3],
            };
        }
    }));
}