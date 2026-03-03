import type { MenuItemData } from "./interface/MenuItemData";
import { Card } from "./components/card/Card";
import { useMenuItemData } from "./components/card/hooks/useMenuItemData";

function App() {
  const { data } = useMenuItemData() as { data: MenuItemData[] };

  return (
    <div className="container">
      <div className="card-grid">
        {data?.map((menuItemData) => (
          <Card
            price={menuItemData.price}
            title={menuItemData.name}
            image={menuItemData.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
