class Post {
    constructor(id, categoria, descrizione, link_content, link_immagine, titolo, data) {
        this.id = id;
        this.categoria = categoria;
        this.descrizione = descrizione;
        this.link_content = link_content;
        this.link_immagine = link_immagine;
        this.titolo = titolo;
        this.data = data;
    }
}

export default Post;