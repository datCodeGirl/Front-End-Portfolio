

export default function DrinksList () {
    const drinks= [["mojito","https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"], 
    ["Long Island","https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg"], 
    ["magarita", "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"], 
    ["Berry Deadly","https://www.thecocktaildb.com/images/media/drink/zk74k21593351065.jpg"], 
    ["penicillin","https://www.thecocktaildb.com/images/media/drink/hc9b1a1521853096.jpg"],
    ["pina colada", "https://www.thecocktaildb.com/images/media/drink/upgsue1668419912.jpg"], 
  ["pink panty pulldowns", "https://www.thecocktaildb.com/images/media/drink/squsuy1468926657.jpg"],
  ["pornstar martini", "https://www.thecocktaildb.com/images/media/drink/xjhjdf1630406071.jpg"], 
   [ "manhattan", "https://www.thecocktaildb.com/images/media/drink/yk70e31606771240.jpg"], 
   ["Tequila Sunrise", "https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg"],
    ["Moscow Mule", "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg"]]

        
    return (
        <div className="drinkList">
            {drinks.map(drink => {
                return (
                    <div>
                        <img src={drink[1]} alt={drink[0]} />
                         <p>{drink[0]}</p>
                        </div>
                )
            })}
        
          </div>
    )
}