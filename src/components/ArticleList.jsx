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
            <div>
                <h1>Lista di articoli</h1>
                <ul>
                    {
                        articles.map((article, index) => (
                            <li key={index}>
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