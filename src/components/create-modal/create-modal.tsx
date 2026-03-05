import React from "react";
import { useMenuItemDataMutate } from "../card/hooks/useMenuItemDataMutate";
import type { MenuItemData } from "../../interface/MenuItemData";

interface InputProps {
  label: string;
  value: string | number;
  updateValue: (newValue: string) => void;
  type?: "text" | "number";
}

const Input = ({ label, value, updateValue, type = "text" }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        className=" border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export function CreateModal({ onClose }: { onClose?: () => void }) {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [image, setImage] = React.useState("");

  const { mutate, isPending } = useMenuItemDataMutate();

  const submit = () => {
    mutate({
      name,
      price: Number(price),
      image,
    });

    setName("");
    setPrice(0);
    setImage("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Cadastrar Novo Item</h2>

        <form className="space-y-4">
          <Input label="Nome" value={name} updateValue={setName} />

          <Input
            label="Preço"
            value={price}
            updateValue={(value) => setPrice(Number(value))}
            type="number"
          />

          <Input label="URL da Imagem" value={image} updateValue={setImage} />
        </form>

        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={submit}
            disabled={isPending}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
