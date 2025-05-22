import React from 'react';

import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';

import { getRecipeFromMistral } from "../ai"


export default function Main(){
    //ingredients getter
    const [ingredients, setIngredients] = React.useState(
        ["chicken", "all the main spices", "corn", "heavy cream", "pasta"]
    )

    //submit
    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        console.log("Submitted!")
    }
    //toggle recipe function
    const [recipeShown, setRecipeShown] = React.useState()
    const recipeSection = React.useRef(null)

    React.useEffect( ( )=> {
        if (recipeShown !== "" && recipeSection.current !== null){
            const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            window.scroll({
                top: yCoord,
                behavior: "smooth"
            })
        }
    },[recipeShown])

    async function handleShowRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipeShown(recipeMarkdown)
        console.log(recipeMarkdown)
    }

    return (
        <main className='ingredients-form'>
            <div className='container-form'>
                <form action={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient" 
                    name="ingredient"
                />
                <button>Add ingredient</button>
                </form>
                {ingredients.length > 0 ? 
                    <IngredientsList 
                        ref={recipeSection}
                        ingredients={ingredients} 
                        handleShowRecipe={handleShowRecipe} 
                    /> : null}
            </div>
            {recipeShown ? <ClaudeRecipe recipeShown={recipeShown}/> : null}
        </main>
    )
}