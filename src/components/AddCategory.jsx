import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        // Previene la actualizacion de la pagina
        event.preventDefault();

        // Quita espacios al final y al inicio
        const cleanNewCategory = inputValue.trim()

        // Permite solo categorias de mas de 2 caracteres
        if(cleanNewCategory.length <= 1) return;

        // Insercion de nueva categoria en App
        onNewCategory( cleanNewCategory)

        // Limpieza del input para insertar mas categorias
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

  )
}
