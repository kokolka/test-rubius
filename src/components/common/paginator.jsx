import React from 'react';

const Paginator = (props) => {

    let pagesNumbers = [];

    for(let i = 1; i <= props.amountPage; i++){
        pagesNumbers.push(
            <button key={i} onClick={() => props.setNumberPage(i)}>
                {i}
            </button>
        );
    }

    return(
        <div>
            <div>
                {pagesNumbers}
            </div>
        </div>
    )
}

export default Paginator;