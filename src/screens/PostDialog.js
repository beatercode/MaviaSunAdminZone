import React from 'react';

import {Dialog, DialogActions, DialogContent, DialogTitle, Button,
    Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const PostDialog = (props) => {
    return (
        <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={props.open}
        onClose={props.close}
        aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>{props.formmode ?  'Aggiungi' : 'Aggiorna'}  Post</DialogTitle>
            <ValidatorForm
                onSubmit={props.addPost}
            >
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Categoria"
                            onChange={props.changeCategoria}
                            name="categoria"
                            value={props.categoria}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Link Post"
                            onChange={props.changeLink_content}
                            name="link_content"
                            value={props.link_content}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Link Immagine"
                                onChange={props.changeLink_immagine}
                                name="link_immagine"
                                value={props.link_immagine}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Titolo"
                                onChange={props.changeTitolo}
                                name="titolo"
                                value={props.titolo}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Descrizione"
                                onChange={props.changeDescrizione}
                                name="descrizione"
                                value={props.descrizione}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" color="secondary">
                       {props.formmode ? 'AGGIUNGI' : 'AGGIORNA'}
                    </Button>
                    <Button onClick={props.close} color="primary">
                        CHIUDI
                    </Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
}

export default PostDialog;