import React from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Toothbrush", quantity: 1, packed: false },
    { id: 4, description: "Toothpaste", quantity: 1, packed: false },
    { id: 5, description: "Sandals", quantity: 2, packed: false },
    { id: 6, description: "T-shirts", quantity: 6, packed: false },
    { id: 7, description: "Shorts", quantity: 5, packed: false },
];

function PackingList({ items }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </ul>
        </div>
    );
}

function Item({ item }) {
    return (
        <li>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    );
}

export default PackingList;
