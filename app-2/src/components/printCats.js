import React from 'react'

const PrintCats = props => {

    return(
        <div>
            <h2>
        {props.cats ? JSON.stringify(props.cats) : null}
            </h2>
        </div>
        
    )
}
export default PrintCats