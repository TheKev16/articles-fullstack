import { useEffect, useState } from "react";
import axios from "axios";

// Definicion la interfaz que representa el artículo
interface Article {
  _id: string;
  title: string;
  description: string;
  body: string;
  author: string;
}

// Definicion de la estructura de la respuesta del backend
interface ApiResponse {
  status_code: number;
  status_message: string;
  data: Article[]; 
}

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<ApiResponse>("http://localhost:5005/articles")
      .then(res => {
        setArticles(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al obtener artículos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Cargando artículos...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Artículos</h1>
      {articles.length ? (
        <ul>
          {articles.map((article) => (
            <li key={article._id} style={{ marginBottom: "20px" }}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <small>Autor: {article.author}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay artículos disponibles.</p>
      )}
    </div>
  );
}

export default App; 