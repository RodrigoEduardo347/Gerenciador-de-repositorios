import { useEffect, useState } from "react";

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(()=>{
    const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url)
    .then(r => r.json())
    .then((json) => {
      setNutri(json)
    })
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

    {nutri.map((item)=>{
      return (
        <article key={item.id} className="post">
          <strong className="titulo">{item.titulo}</strong>
          <img src={item.capa} alt={item.titulo} className="capa" />
          <p className="subtitulo">
            {item.subtitulo}
          </p>
          <a className="botao" href="http://192.168.166.188:3000">Acessar</a>
        </article>
      )
    })}

    </div>
  );
}

export default App;
