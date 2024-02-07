import { useState } from "react";
import Form from "./components/form";
import Logo from "./components/logo";
import PackingList from "./components/packingList";
import Stats from "./components/stats";

function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList items={items} />
            <Stats />
        </div>
    );
}

export default App;
