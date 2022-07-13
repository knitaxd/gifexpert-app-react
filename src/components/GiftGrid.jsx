import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftItem } from "./GiftItem";

export const GiftGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category)
  
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading ? <h2>Cargando...</h2> : null
            }

            <div className="card-grid">
                {
                    images.map( (item) => (
                        <GiftItem 
                            key={item.id}
                            { ...item }
                        />
                    ))
                }
            </div>
        
        </>
    )
}
