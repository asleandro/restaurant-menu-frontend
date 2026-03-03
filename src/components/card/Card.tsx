import { useState } from "react";
import "./card.css";

interface CardProps {
  price: number;
  title: string;
  image: string;
}

export function Card({ price, title, image }: CardProps) {
  return (
    <div className="Card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>
        <b>Valor: R$ {price.toFixed(2)}</b>
      </p>
    </div>
  );
}
