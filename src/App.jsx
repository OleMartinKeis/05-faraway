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

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    function handleClearlist(item) {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );
        if (confirmed) setItems([]);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onToggleItem={handleToggleItem}
                onDeleteItem={handleDeleteItem}
                onClearList={handleClearlist}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
