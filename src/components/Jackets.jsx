import React from 'react'
import fakeJackets from '../dumpData/articlesData'
const Jackets = () => {

    return (
        <div>

        {fakeJackets.map((jacket, index) => {
            return (
            <div key={index}>
            <img src={`${jacket.url}`}/>
            <div >{jacket.name}</div>
            </div>
            )
            })
        }        
</div>
    )
}

export default Jackets