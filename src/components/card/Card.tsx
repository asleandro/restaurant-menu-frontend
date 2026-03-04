interface CardProps {
  price: number;
  title: string;
  image: string;
}

export function Card({ price, title, image }: CardProps) {
  return (
    <div
      className="/* Container */ bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 items-center justify-center
    /* Layout */ flex flex-col w-[250px]"
    >
      <img
        src={image}
        alt={title}
        className="/* Imagem */ w-full h-[200px] rounded-t-lg object-cover"
      />

      <div className="/* Conteúdo */ p-2 flex flex-col flex-1">
        <h3 className="/* Título */ font-semibold text-gray-800 text-lg line-clamp-2 min-h-14">
          {title}
        </h3>
      </div>

      <div className="/* Rodapé */ m-auto flex items-center justify-center w-full p-2">
        <span className="/* Preço */ text-xl font-bold text-green-600 text-center">
          <b>Valor: R$ {price.toFixed(2)}</b>
        </span>
      </div>
    </div>
  );
}
