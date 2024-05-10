import React from 'react';
import { Link } from 'react-router-dom';
import './styles/card.css';

interface Props {
    title: string;
    children: React.ReactNode;
    className?: string;
    link?: string;
}

function Card({ title, children, className, link }: Props) {
    return (
        <>
            <Link to={link ? link : '/'} title={title ? title : 'Card'} className={`relative card ${className}`}>
                <div className="overlay" ></div>
                <div className="circle">
                    { children }
                </div>
                <p className="text-lg">{title}</p>
                <span className="absolute bottom-5 left-50 w-20 text-center bg-gray-300 p-2 rounded-lg text-black text-md md:text-lg">
                    Ver +
                </span>
            </Link>
        </>
    )
}
export default Card;