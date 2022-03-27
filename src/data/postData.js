import firebase from '../helpers/db';
import Post from '../models/Post';


const firestore = firebase.firestore();

export const getPosts = async () => {
    try {
        const response = await firestore.collection('post');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const post = new Post(
                doc.id,
                doc.data().categoria,
                doc.data().descrizione,
                doc.data().link_content,
                doc.data().link_immagine,
                doc.data().titolo
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