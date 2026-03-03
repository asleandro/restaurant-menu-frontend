import type { MenuItemData } from "./interface/MenuItemData";

function App() {
const data: MenuItemData = [];

  return (
    <div className="container">
      <h1 className="Cardápio"></h1>
        <div className="card-grid">
          {data.map(menuItemData => <Card price={menuItemData.price, title={menuItemData.name}, image={menuItemData.image}/>)}

        </div>
    </div>
  );
}

export default App;
