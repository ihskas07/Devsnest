import	React from 'react'
import "./Card.css"
function Item({name , cal}) 
    {
        return (
                <div className= "item">
                    <p><h1>{name}</h1></p>
                   <h3><p>you have consumed {cal} cals today</p></h3>
             </div>)
    }
export default Item