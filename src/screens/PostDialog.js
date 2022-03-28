import React from 'react';

import {
    Dialog, DialogActions, DialogContent, DialogTitle, Button,
    Grid
} from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DateFnsUtils from '@date-io/date-fns';
import {
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { SelectInput } from 'react-admin';


const PostDialog = (props) => {
    return (
        <Dialog
            fullWidth={true}
            maxWidth='lg'
            open={props.open}
            onClose={props.close}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>{props.formmode ? 'Aggiungi' : 'Aggiorna'}  Post</DialogTitle>
            <ValidatorForm
                onSubmit={props.addPost}
            >
                <DialogContent>
                    <SelectInput choices={[
                        { id: 'programming', name: 'Programming' },
                        { id: 'lifestyle', name: 'Lifestyle' },
                        { id: 'photography', name: 'Photography' }]} />
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
                        <Grid item xs={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DateTimePicker
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    label="Data"
                                    onChange={props.changeData}
                                    name="data"
                                    format="dd/MM/yyyy"
                                    value={props.data}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    autoComplete='off'
                                />
                            </MuiPickersUtilsProvider>
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