import { Card } from "./components/card/Card";
import { useMenuItemData } from "./components/card/hooks/useMenuItemData";
import { useState } from "react";
import { CreateModal } from "./components/create-modal/create-modal";

function App() {
  const { data, loading, error } = useMenuItemData();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsCreateModalOpen((prev) => !prev);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Carregando...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Erro ao carregar dados
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <header className="bg-white shadow-md py-4 mb-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Cardápio
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {data?.map((menuItemData) => (
            <Card
              key={menuItemData.id}
              price={menuItemData.price}
              title={menuItemData.name}
              image={menuItemData.image}
            />
          ))}
        </div>
      </div>
      {isCreateModalOpen && <CreateModal />}
      <button
        onClick={handleOpenModal}
        className="
      fixed bottom-6 right-6
      bg-blue-500 hover:bg-blue-600
      text-white font-medium
      px-6 py-3 rounded-full
      shadow-lg hover:shadow-xl
      transition-all duration-300
      flex items-center gap-2
      z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Novo Cadastro
      </button>
    </div>
  );
}

export default App;
