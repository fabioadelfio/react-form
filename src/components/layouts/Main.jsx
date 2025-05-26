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

  // States per la modifica di un articolo
  const [editArticle, setEditArticle] = useState(``);
  const [editIndex, setEditIndex] = useState(null);

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

  const handleUpdateArticle = (index) => {
    const updatedArticles = [...articlesList];
    updatedArticles[index] = {title: editArticle};
    setArticlesList(updatedArticles);
    setEditIndex(null);
    setEditArticle(``);
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
            <li className="d-flex align-items-center" key={index}>
              {editIndex === index ? (
                <>
                  <input 
                    type="text"
                    value={editArticle} 
                    onChange={(e) => setEditArticle(e.target.value)}  
                  />
                  <button className="btn fs-4" onClick={() => handleUpdateArticle(index)}><i class="fa-solid fa-floppy-disk"></i></button>
                </>
              ) : (
                <>
                  <div className="article">{article.title}</div>
                  <button 
                    className="btn" 
                    onClick={() => {
                    setEditIndex(index);
                    setEditArticle(article.title);
                  }}><i class="fa-solid fa-pencil"></i></button>
                </>
              )}
              <button className="btn fs-4 text-end" onClick={() => handleDeleteArticle(index)}><i class="fa-solid fa-xmark text-danger"></i></button>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
