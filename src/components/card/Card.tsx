interface CardProps {
  price: number;
  title: string;
  image: string;
}

export function Card({ price, title, image }: CardProps) {
  return (
    <div
      className="
    flex flex-col items-center justify-center
    w-[250px]
    rounded-lg shadow-md p-0"
    >
      <img
        src={image}
        alt={title}
        className="
      w-[250px] h-[200px]
      rounded-t-lg
      object-cover"
      />
      <h2>{title}</h2>
      <p>
        <b>Valor: R$ {price.toFixed(2)}</b>
      </p>
    </div>
  );
}
