import { useState } from "react"

//array da usare come valore iniziale della variabile di stato dei dati 
const initialArticles = [
    'Introduzione allo sviluppo web',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Frontend e Backend',
    'Git e Github',
    'Best practies'];


function ArticleList() {

    // creiamo la var di stato per gestire gli articoli
    const [articles, setArticles] = useState(initialArticles);

    //   var di stato che gestisce valore di input
    const [newArticle, setNewArticle] = useState('');


    //funzione di gestione invio form
    const addArticle = e => {
        e.preventDefault();
        //creo nuovo array aggiornato con i valori precendenti e il nuovo valore preso dall'input
        const updateArticles = [...articles,newArticle];
        //aggiorno quindi il mio arrayarticles con i valori del nuovo array 
        setArticles(updateArticles); 
        //ripulisco input 
        setNewArticle(""); 
    }

    return (
        <>
            <div className="container mt-4">
                <h2 className="mb-3">Lista di articoli</h2>
                <ul className="list-group">
                    {
                        articles.map((article, index) => (
                            <li key={index} className="list-group-item">
                                {article}
                            </li>
                        ))
                    }
                </ul>

                {/*form per aggiungere nuovo articolo alla lista*/}
                <form onSubmit={addArticle}>
                    <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nuovo articolo"
                        value={newArticle}
                        onChange={e => { setNewArticle(e.target.value) }}
                    />
                    <button className="btn btn-outline-secondary">Aggiungi</button>
                </div>
                </form>
            </div>
        </>
    )
}

export default ArticleList