import type { MenuItemData } from "./interface/MenuItemData";
import { Card } from "./components/card/Card";
import { useMenuItemData } from "./components/card/hooks/useMenuItemData";

function App() {
  const { data, loading, error } = useMenuItemData() as {
    data: MenuItemData[];
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
              price={menuItemData.price}
              title={menuItemData.name}
              image={menuItemData.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
