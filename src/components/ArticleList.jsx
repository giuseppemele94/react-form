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
            </div>
        </>
    )
}

export default ArticleList