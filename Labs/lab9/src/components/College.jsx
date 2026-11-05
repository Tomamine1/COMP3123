/*
We will define a functional component 
Props: name, City

*/

function College({name, city}){
    return  (
        <article>
            the name of the college is: {name}, and city is: {city}
        </article>
    )
}

export default College