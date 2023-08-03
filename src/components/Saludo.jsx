
function Saludo() {
    const user = "Miguel Melgarejo"

    const add = (n1, n2) => n1 + n2;

    return (
        <>
            {/* Observese que no se usa 'class' por que es una palabra reservada de JS */}
            <h1 className='read-the-docs'>
                Hello {user}!
            </h1>
            
            <h2>{5 + 4}</h2>
            <h3>{5 > 4 ? "Cinco es mayor que cuatro" : "Cinco NO es mayor que cuatro"}</h3>
            {10 > 20 ? <h4>Título Uno</h4> : <h4>Título Dos</h4>}
            {add(52, 6)}

            {/* Observese que no se usa 'for' por que es una palabra reservada de JS */}
            {/* <label htmlFor="name">Name: </label>
            <input type="text" id="name" /> */}
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio ipsum provident suscipit est similique dolore reprehenderit alias? Molestias, accusantium. Deleniti assumenda expedita itaque est in cumque, pariatur sequi alias?
            </p>
        </>
    )
}

export default Saludo