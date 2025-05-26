import { useState } from "react"

export default function Main() {
  const [articles, setarticles] = useState([
    {
      id: 1,
      title: `Risparmia oggi`
    },

    {
      id: 2,
      title: `Viaggi low-cost`
    },

    {
      id: 3,
      title: `Ordina la casa`
    }
  ]);

  return (
    <main>
      <div className="container">
        <h1 className="my-3">Lista Articoli</h1>

        <form className="d-flex" action="">
          <input className="form-control mx-3" type="text" placeholder="Nuovo Articolo"/>
          <button className="btn btn-primary fs-5 fw-bold" type="submit">Add</button>
        </form>

        <div className="articles">
          <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
        </div>
      </div>
    </main>
  );
}
