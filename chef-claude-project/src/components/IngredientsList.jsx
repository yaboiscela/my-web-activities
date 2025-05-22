export default function IngredientsList(props){
    const ingredientsListItems = props.ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })
    return(
        <section>
            <h3>Ingredients on Hand</h3>
            <ul className='ingredient-list'>{ingredientsListItems}</ul>
            {props.ingredients.length > 3 ? <div className="get-recipe-container">
                {<div ref={props.ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>}
            <button onClick={props.handleShowRecipe}>Get a recipe</button>
            </div> : null}
        </section>
    )
}