import React, { useEffect, useState } from 'react';
import {Table, TableBody, TableCell, TableRow, TableHead,
    TableContainer, Paper, makeStyles, Container,
    Typography, Button, Grid, IconButton} from '@material-ui/core';
import {AddCircle, Edit, Delete} from '@material-ui/icons';
import {ScaleLoader} from 'react-spinners';
import {ToastContainer, toast} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { getPosts, addPost, getPost, updatePost, deletePost } from './../data/postData';
import PostDialog from './PostDialog';

const Post = () => {
    const classes  = useStyles();
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [formMode, setFormMode] = useState(true);
    const [postId, setPostId] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descrizione, setDescrizione] = useState('');
    const [link_content, setLink_content] =  useState('');
    const [link_immagine, setLink_immagine] = useState('');
    const [titolo, setTitolo] = useState('');
    const override =`
        display: flex;
        align-items: center;
        justify-content: center;    
        border-color: red;
    `;
    const handleClose = () => {
        setOpen(false);
    }
    const handleCategoria = (event) => {
        setCategoria(event.target.value);
    }
    const handleDescrizione = (event) => {
        setDescrizione(event.target.value);
    }
    const handleLink_content = (event) => {
        setLink_content(event.target.value);
    }
    const handleLink_immagine = (event) => {
        setLink_immagine(event.target.value);
    }
    const handleTitolo = (event) => {
        setTitolo(event.target.value);
    }
    const getlist = async () => { 
        try {
            setLoading(true);
            const list = await getPosts();
            setPost(list);
            setLoading(false);
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    }
    const getOnePost = async (id) => {
            try {
                setFormMode(false);
                setPostId(id);
                const response = await getPost(id);
                 setCategoria(response.categoria);
                 setDescrizione(response.descrizione);
                 setLink_content(response.link_content);
                 setLink_immagine(response.link_immagine);
                 setTitolo(response.titolo);
                 setOpen(true);
            } catch (error) {
                toast.error(error.message);
            }

    }
    const deleteHandler = async (id) => {
            try {
                await deletePost(id);
                getlist();
                toast.success('Post Deleted Successfully');
            } catch (error) {
                toast.error(error.message);
            }
    }
    const handleAdd = () => {
            setOpen(true);
            setFormMode(true);
            setCategoria('');
            setDescrizione('');
            setLink_content('');
            setLink_immagine('');
            setTitolo('');
    }

    const addPostHandler = async () => {
            try {
                 const post = {
                     categoria,
                     descrizione,
                     link_content,
                     link_immagine,
                     titolo,
                 }
                if (formMode) {
                    await addPost(post);
                    toast.success('Post Added Successfully');
                    getlist();
                    setOpen(false);
                    setCategoria('');
                    setDescrizione('');
                    setLink_content('');
                    setLink_immagine('');
                    setTitolo(''); 
                } else {
                    await updatePost(postId, post);
                    toast.success('Post Updated Successfully');
                    getlist();
                    setOpen(false);
                    setCategoria('');
                    setDescrizione('');
                    setLink_content('');
                    setLink_immagine('');
                    setTitolo('');
                }
            } catch (error) {
                toast.error(error.message);
            }
    }

    useEffect(() => {
        getlist();
    }, []);
    return (
        <Container className={classes.container}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <TableContainer component={Paper}>
                <Grid container>
                    <Grid item xs={6}>
                    <Typography className={classes.title} variant="h6" component="div">
                        Tutti i Post
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAdd}
                        className={classes.button}
                        startIcon={<AddCircle/>}
                    >Add</Button>
                    </Grid>
                </Grid>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.head}>Categoria</TableCell>
                            <TableCell className={classes.head}>Descrizione</TableCell>
                            <TableCell className={classes.head}>Link Post</TableCell>
                            <TableCell className={classes.head}>Link Immagine</TableCell>
                            <TableCell className={classes.head}>Titolo</TableCell>
                            <TableCell className={classes.head}>Azioni</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {console.log(post)}
                        {post.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7}>
                                    <ScaleLoader 
                                     css={override}
                                    size={150}
                                    color={"#eb4034"}
                                    loading={loading}/>
                                </TableCell>
                            </TableRow>
                        ) : (
                            <>
                            {post.map((post) => (
                                <TableRow key={post.id}>
                                  <TableCell>{post.categoria}</TableCell>
                                  <TableCell>{post.descrizione}</TableCell>
                                  <TableCell>{post.link_content.toString().length > 15 ? post.link_content.toString().substring(0, 15) + "..." : post.link_content}</TableCell>
                                  <TableCell>{post.link_immagine.toString().length > 15 ? post.link_immagine.toString().substring(0, 15) + "..." : post.link_immagine}</TableCell>
                                  <TableCell>{post.titolo.toString().length > 15 ? post.titolo.toString().substring(0, 15) + "..." : post.titolo}</TableCell>
                                  <TableCell>
                                    <IconButton onClick={() => getOnePost(post.id)} color="primary" aria-label="update post">
                                            <Edit />
                                    </IconButton>
                                    <IconButton onClick={() => { if (window.confirm('Sei proprio sicuro uhu ?')) deleteHandler(post.id) }} color="secondary" aria-label="delete post">
                                        <Delete />
                                    </IconButton>
                                  </TableCell>
                              </TableRow>
                            ))}
                              
                            </>
                        )}
                        
                    </TableBody>
                </Table>  
            </TableContainer>
            <PostDialog
                open={open} 
                close={handleClose}
                formmode={formMode}
                categoria={categoria}
                descrizione={descrizione}
                link_content={link_content}
                link_immagine={link_immagine}
                titolo={titolo}
                changeCategoria={handleCategoria}
                changeDescrizione={handleDescrizione}
                changeLink_content={handleLink_content}
                changeLink_immagine={handleLink_immagine}
                changeTitolo={handleTitolo}
                addPost={addPostHandler}
            />
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    container: {
        marginTop: '40px'
    }, 
    title: {
        flex: '1 1 100%',
        padding: '20px'
    },
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    button: {
        margin: theme.spacing(1),
        float: 'right',
    },
}));

export default Post;