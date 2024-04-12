import React from 'react';
import './styles/card.css';

interface Props {
    title: string;
    children: React.ReactNode;
    className?: string;
}

function Card({ title, children, className }: Props) {
    return (
        <>
            <span className={`card ${className}`}>
                <div className="overlay" ></div>
                <div className="circle">
                    { children }
                </div>
                <p>{title}</p>
            </span>
        </>
    )
}
export default Card;