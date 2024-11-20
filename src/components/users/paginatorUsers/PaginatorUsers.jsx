import React, { useState } from "react";

const PaginatorUsers = ({ totalUserCount, pageSize, portionSize, onChangePage }) => {

    const pageCount = Math.ceil(totalUserCount / pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pageCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(0)

    const leftBorderPagePortion = (portionNumber * portionSize) + 1
    const rightBorderPagePortion = portionSize * (portionNumber + 1)

    return (
        <div className="paginatorUsers__wrapper">
            {portionNumber > 0 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>back</button>
            }
            <div>
                {
                    pages
                        .filter(p => p >= leftBorderPagePortion && p <= rightBorderPagePortion)
                        .map(p => {
                            return (
                                <span onClick={() => { onChangePage(p) }}
                                    key={p}>
                                        {p}
                                </span>
                            )
                        })
                }
            </div>
            {portionNumber < portionCount &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>
            }
        </div>

    )
};

export default PaginatorUsers;