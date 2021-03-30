import React from 'react'
import Todo from './Todo'

const List = props => {
    return(
        <section>
            {props.addItems.map((element, index) => {
            return <Todo item={element} />
         } )}
        </section>
    )
}
export default List