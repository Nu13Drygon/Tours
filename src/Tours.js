// component imports
import Tour from "./Tour"

const Tours = ({tours, removeTour}) => {
    return (
        <section>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} /> 
                })}
            </div>
        </section>
    )
}

export default Tours