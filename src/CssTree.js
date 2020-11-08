import React, { useState } from "react";
import Item from "./Item";

const items = [
  { id: 1, name: "Item 1", children: [] },
  {
    id: 2,
    name: "Item 2",
    children: [
      {
        id: 3,
        name: "Milk",
        children: [
          {
            id: 4,
            name: "Soya",
            children: [
              {
                id: 6,
                name: "New item",
                children: [
                  {
                    id: 4,
                    name: "Soya",
                    children: [{ id: 6, name: "New item", children: [] }],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [
          {
            id: 6,
            name: "New item",
            children: [
              {
                id: 4,
                name: "Soya",
                children: [
                  {
                    id: 6,
                    name: "New item",
                    children: [
                      {
                        id: 4,
                        name: "Soya",
                        children: [
                          {
                            id: 6,
                            name: "New item",
                            children: [
                              {
                                id: 4,
                                name: "Soya",
                                children: [
                                  { id: 6, name: "New item", children: [] },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },

      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },

      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },

      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },

      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      {
        id: 4,
        name: "Soya",
        children: [{ id: 6, name: "New item", children: [] }],
      },
      { id: 5, name: "Gowno", children: [] },
    ],
  },
  {
    id: 7,
    name: "Item 3",
    children: [
      {
        id: 8,
        name: "hehe",
        children: [
          { id: 9, name: "Item 1222", children: [] },
          {
            id: 10,
            name: "Item 1sssss",
            children: [{ id: 11, name: "Item 12sxdasdas", children: [] }],
          },
        ],
      },
    ],
  },
];

const CssTree = () => {
  const [tree, setTree] = useState(items);
  const [expanded, setExpanded] = useState([]);

  const handleClick = () => {
    if (expanded.length === 0) setExpanded(["Soya"]);
    else setExpanded([]);
  };

  console.log("RENDERED CSS TREE");

  return (
    <div>
      <button onClick={handleClick}>Render CssTree</button>
      {tree.map((item, i) => {
        const isExpanded = expanded.includes(item.name);

        return (
          <Item
            key={i}
            data={item}
            depth={1}
            isExpanded={isExpanded}
            expanded={expanded}
          />
        );
      })}
    </div>
  );
};

export default CssTree;
