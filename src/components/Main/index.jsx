import { useState } from "react";
import "./styles.css";

function Main() {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const handleFocus = () => {
    setEmail("Digite um email");
  };

  return (
    <div>
      <div className="main">
        <h1>Filmes, séries e muito mais. Sem limites.</h1>
        <h3>Assista onde quiser. Cancele quando quiser.</h3>
        <p>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </p>
        <div className="submit">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setInput(e.target.value)}
            onFocus={handleFocus}
          />
          <button>Vamos Lá {">"}</button>
        </div>
      </div>
      {!input.length >= 1 && <p className="email">{email}</p>}
    </div>
  );
}

export default Main;
