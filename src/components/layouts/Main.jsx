import { useState } from "react"

export default function Main() {
  const [articlesList, setArticlesList] = useState([
    {
      title: `Risparmia oggi`
    },

    {
      title: `Viaggi low-cost`
    },

    {
      title: `Ordina la casa`
    }
  ]);

  const [newArticle, setNewArticle] = useState(``);

  const handleAddArticle = (e) => {
    e.preventDefault();

    const newArticlesList = [...articlesList, { title: newArticle }];
    setArticlesList(newArticlesList);
    setNewArticle(``);
  }

  return (
    <main>
      <div className="container">
        <h1 className="my-3">Lista Articoli</h1>

        <form className="d-flex" onSubmit={handleAddArticle}>
          <input 
            className="form-control mx-3" 
            type="text" 
            value={newArticle} 
            onChange={(e) => setNewArticle(e.target.value)}
            placeholder="Nuovo Articolo"
          />
          <button className="btn btn-primary fs-5 fw-bold" type="submit">Add</button>
        </form>

        <div className="articles">
          <ul>
          {articlesList.map((article, index) => (
            <li key={index}>{article.title}</li>
          ))}
        </ul>
        </div>
      </div>
    </main>
  );
}
