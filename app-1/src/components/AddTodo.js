import React from 'react'
import {useState} from 'react'
import List from './List'


const AddToDo = props => {

    const [moreItems, setnewItems] = useState('')

    function addToList(){
        props.add(moreItems)
        setnewItems('')
    }

    return(
        <div>
            <input onChange={(event) => setnewItems(event.target.value)} 
            placeholder= "Enter Task"
            value={moreItems}/>

            <button onClick={addToList}>ADD TASK</button>
        </div>
    )
}
export default AddToDo;