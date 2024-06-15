import { useState} from "react";



export default function SearchBar() {

const[searchCocktail, setSearchCocktail] = useState("");
 
const[cocktailName, setCocktailName] = useState([]);
    

function handleTextChange(event) {
    const search = event.target.value;
    setSearchCocktail(search);
}


function handleSubmit (event) {
    event.preventDefault();
     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchCocktail}`)   
        .then((response) => response.json())
        .then((JSONresponse) => {console.log(JSONresponse)
        setCocktailName(JSONresponse.drinks)})
        .catch(console.log);
          
        }
      return ( 
        <div >
          <form onSubmit={handleSubmit}>
      <input
        placeholder="Search"
        type="text"
        value={searchCocktail}
        onChange={handleTextChange}
        id= "search-bar"
        name="search-bar"
        />
        <button className='background-color: rgb(148 163 184)'>
          search for a cocktail
        </button>
        </form> 
        <div > 
          {cocktailName?.map((ele, i) => {
            return (

            
              <div className="outermost" key={i}>
                <img src= {ele.strImageAttribution} />
                <img className="image" src= {ele.strDrinkThumb} />

                <div>
                  <h1>{ele.strDrink}</h1>
                  <div>{ele.strTags}</div>
                  <div>{ele.strGlass}</div> 
                  <div>{ele.strAlcoholic}</div>
                  <div>{ele.strCategory}</div>
                    
                  <br />
                  <h2>Ingredients</h2>
                  <div>{ele.strIngredient1}</div>  
                  <div>{ele.StrIngredient2}</div> 
                  <div>{ele.strIngredient3}</div>
                  <div>{ele.strIngredient4}</div>
                  <div>{ele.strIngredient5}</div>
                  <div>{ele.strIngredient6}</div>
                  <div>{ele.strIngredient7}</div>
                  <br />
                  <div>{ele.strMeasure1}</div>
                  <div>{ele.strMeasure2}</div>
                  <div>{ele.strMeasure3}</div>
                  <div>{ele.strMeasure4}</div>
                  <div>{ele.strMeasure5}</div>

                  <br /> 
                  
                  <h3> Instructions</h3>
                  <div>{ele.strInstructions}</div>
                  <div>{ele.strInstructionsES}</div>
                  <div>{ele.strInstructionsDE}</div>
                  <div>{ele.strInstructionsFR}</div>
                  <div>{ele.strInstructionsIT}</div>

                </div>
              </div>
            
              
            )
          })}
        </div>
        </div>
      )
}

            
            
           
