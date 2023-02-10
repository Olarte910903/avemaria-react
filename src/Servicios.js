import './Servicios.css';

function Servicios(props){
    return(
        <div className='root'>
            <header className="header">
                <h1>{props.titulo}</h1>
            </header>

            <main className='main'>
                <figure className="figure">
                    <img src="https://www.entremaquinasdecoser.com/pics/catalogo/productos/bordadora-ricoma-swd-1201-1.jpg" alt="Bordadora"></img>
                </figure>
            </main>

            <footer className='footer'>
                <p>Avemaría Publicidad - All Rights Reserved 2023 - Made width React</p>
            </footer>
        </div>
    );
}

export {Servicios};