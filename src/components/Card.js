import React from 'react'

export default function Card({ content, number, blockClass, ...restProps }) {
    const parentClass = blockClass ? `${blockClass}__card` : ''
    return (
        <div {...restProps} className={`${parentClass} card`}>
            <p className="card__content">
                <span className="card__number">{number}</span>
                {content}
            </p>
        </div>
    )
}