import { db } from '../../lib/firebase';

export async function getLanding(pageName) {
  try {
    let query = await db.collection("landings").where('published', '==', true);
    
    query =await  query.where('name', '==', pageName.replace(/-/g," ")).get();
   
    return query.docs.map(doc => doc.data());
  }
  catch (e) {
    console.log('error: ', e);
    return []
  }
}

export async function getAllLandings() {
  return (Promise.all([
    // authenticate(),
    db.collection("landings").where('published', '==', true).get(),
  ]).then((responses) => {
    if (responses) {
      return {
        landings: responses[0].docs.map(doc => doc.data()),
      };
    }
  }));
}