import React from 'react';

const AllActs = ({data}) => {

    return(
        <div>
            <div>
                This is table head
            </div>
            { data.map((element) => <p>{element.activity}</p>)}
            <div>
                This is table foot
            </div>
        </div>
    )
}

export default AllActs;