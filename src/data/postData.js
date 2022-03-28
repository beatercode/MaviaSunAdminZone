import firebase from '../helpers/db';
import Post from '../models/Post';

const firestore = firebase.firestore();

export const getPosts = async () => {
    try {
        const response = firestore.collection('post').orderBy("data", "desc");
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            var correctDate = new Date(1970, 0, 1);
            correctDate.setMilliseconds(doc.data().data.seconds * 1000 + 2 * 60 * 60 * 1000);
            const post = new Post(
                doc.id,
                doc.data().categoria,
                doc.data().descrizione,
                doc.data().link_content,
                doc.data().link_immagine,
                doc.data().titolo,
                correctDate.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })
            );

            array.push(post);
        });
        return array;
    } catch (error) {
        throw error;
    }
}

export const addPost = async (post) => {
    try {
        await firestore.collection('post').doc().set(post);
    } catch (error) {
        throw error;
    }
}

export const getPost = async (id) => {
    try {
        const post = await firestore.collection('post').doc(id);
        const data = await post.get();
        console.log(data);
        return data.data();
    } catch (error) {
        throw error;
    }
}

export const updatePost = async (id, data) => {
    try {
        const post = await firestore.collection('post').doc(id);
        await post.update(data)
    } catch (error) {
        throw error;
    }
}

export const deletePost = async (id) => {
    try {
        await firestore.collection('post').doc(id).delete();
    } catch (error) {
        throw error;
    }
}