import './Calculadora.css';

function Calculadora (props){
    return(<div className="main-container">
        <header className='header'>
            <input></input>
        </header>
        <main className='main'>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div>
                <button>4</button>
                <button>5</button>
                <button>6</button>
            </div>
            <div>
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </div>
        </main>
    </div>
    );
}

export {Calculadora};