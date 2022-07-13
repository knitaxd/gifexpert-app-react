import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () =>{
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        // Verifica si la categoria existe
        if(categories.includes(newCategory)) return;

        // Copia el arreglo existente e inserta la newCategory
        setCategories([newCategory, ...categories])
    }

    return (
        <>
        <h1>GifExpertApp</h1>
        
        {/* Input para buscar gifs */}
        <AddCategory 
            // prop que limpia e inserta la newCategory
            onNewCategory={ value => onAddCategory(value)}
        />

        {
            categories.map(category => (
                <GiftGrid 
                    key={category} 
                    category={category}/>
            ))
        }
        </>
    )
}