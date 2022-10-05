
const Tour = ({id, name, info, price, image, removeTour}) => {
    return (
        <article>
            <img src={image} alt={name} />
            <footer>
                <div>
                    <h4>{name}</h4>
                    <h4>${price}</h4>
                </div>
                <p>{info}</p>
            </footer>
            <button onClick={() => removeTour(id)}>Remove Tour</button>
        </article>
    )
}

export default Tour