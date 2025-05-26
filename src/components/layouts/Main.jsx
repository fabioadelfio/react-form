import { useState } from "react"

export default function Main() {
  // State per la lista degli articoli
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

  // State per aggiungere e rimuovere articoli
  const [newArticle, setNewArticle] = useState(``);

  const handleAddArticle = (e) => {
    e.preventDefault();

    const newArticlesList = [...articlesList, { title: newArticle }];
    setArticlesList(newArticlesList);
    setNewArticle(``);
  }

  const handleDeleteArticle = (indexToDelete) => {
    const newArticlesList = articlesList.filter((article, index) => index !== indexToDelete);
    setArticlesList(newArticlesList);
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
            <li className="d-flex justify-content-between align-items-center" key={index}>
              <div className="article">{article.title}</div>
              <div className="buttons d-flex">
                <button className="btn fs-5" ><i class="fa-solid fa-pencil"></i></button>
                <button className="btn fs-4" onClick={() => handleDeleteArticle(index)}><i class="fa-solid fa-xmark text-danger"></i></button>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </main>
  );
}
