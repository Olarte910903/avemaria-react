import "./CalculoPrecios.css";

function CalculoPrecios() {
  return (
    <div>
      <header className="header">
        <h1>Calculadora de valores</h1>
      </header>
      <main className="main">
        <form className="form">
            <label>
            Cantidad
            <input></input>
            </label>

            <label>
            Precio
            <input></input>
            </label>

        </form>
      </main>
      <footer className="footer">
        <p>El resultado es {}</p>
      </footer>
    </div>
  );
}

export { CalculoPrecios };
