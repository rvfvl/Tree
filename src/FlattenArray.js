import React, { useState, useEffect } from "react";
import { List } from "react-virtualized";
import TreeView from "./TreeView";

export const data = [
  {
    id: 1,
    type: "group",
    name: "Colors",
    items: [
      { id: 2, type: "item", name: "Red", items: [], top: new Set() },
      { id: 3, type: "item", name: "Purple2", items: [] },
      {
        id: 4,
        type: "item",
        name: "Black",
        items: [
          {
            id: 9999,
            type: "item",
            name: "Purple3",
            items: [],
          },
          { id: 21223, type: "item", name: "Purple4", items: [] },
        ],
      },
    ],
  },
  {
    id: 5,
    type: "group",
    name: "Food",
    items: [
      { id: 6, type: "item", name: "Cheese", items: [] },
      { id: 7, type: "item", name: "Potatoes", items: [] },
      {
        id: 10,
        type: "group",
        name: "Sandwich",
        items: [
          { id: 11, type: "item", name: "Bread", items: [] },
          { id: 12, type: "item", name: "Cheese", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 14, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          { id: 13, type: "item", name: "Salami", items: [] },
          ...Array.from({ length: 1500 }, (i, ind) => ({
            id: 13,
            type: "item",
            name: "Salami" + ind,
            items: [],
          })),
        ],
      },
    ],
  },
  { id: 8, type: "item", name: "Kitten", items: [] },
  {
    id: 14,
    type: "group",
    name: "Matryoshka A",
    items: [
      {
        id: 15,
        type: "group",
        name: "Matryoshka B",
        items: [
          {
            id: 16,
            type: "group",
            name: "Matryoshka C",
            items: [
              {
                id: 17,
                type: "group",
                name: "Matryoshka D",
                items: [
                  {
                    id: 18,
                    type: "item",
                    name: "Secret Treasure",
                    items: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { id: 9, type: "item", name: "Rainbow", items: [] },
  {
    id: 19,
    type: "group",
    name: "Box",
    items: [
      {
        id: 20,
        type: "group",
        name: "Box in a box (which is empty)",
        items: [],
      },
    ],
  },
];

// const flattenArr = (data, depth = 1, parent = null) => {
//   const result = [];

//   data.forEach((item) => {
//     const { id, name, items } = item;
//     result.push({
//       id,
//       name,
//       depth,
//       parentId: parent,
//       main: [],
//     });

//     if (items) result.push(...flattenArr(items, depth + 1, item.id));
//   });

//   return result;
// };

const flatten = (data, depth = 1, parentId = null, main = []) => {
  return data.reduce((r, { items, id, ...rest }) => {
    const obj = { ...rest, id, depth, parentId, main };
    r.push(obj);

    if (items.length) {
      r.push(...flatten(items, depth + 1, id, [...main, id]));
    }

    return r;
  }, []);
};

const flattenData = flatten(data);

// const grab = (arr) => {
//   for (let b = 0; b < arr.length; b++) {
//     if (arr[b].depth !== 1) {
//       arr[b].main.push(
//         ...arr[b - 1].main,
//         arr[b - 1].depth === arr[b].depth - 1 ? arr[b - 1].id : null
//       );
//     }
//   }

//   arr.forEach((x) => (x.main = x.main.filter((i) => i !== null)));
// };

// grab(flattenData);

console.log("res", flattenData);

const FlattenArray = () => {
  const [expanded, setExpanded] = useState([]);
  const [text, setText] = useState("");

  const getChildren = (arr, id, maxDepth = 9999) => {
    const result = [];

    for (const item in arr) {
      if (arr[item].parentId === id && maxDepth > 0) {
        const node = arr[item].id;
        result.push(node);

        const child = getChildren(arr, arr[item].id, maxDepth - 1);

        if (child.length) {
          result.push(...child);
        }
      }
    }

    return result;
  };

  const handleExpand = (id) => {
    const children = getChildren(flattenData, id, 1);

    console.log(flattenData);

    if (expanded.includes(id)) {
      console.log("HER");

      const filtered = expanded.filter((x) => x !== id);

      // const filtered = expanded.filter(
      //   (x) => !children.includes(x) && x !== id
      // );

      setExpanded(filtered);
    } else {
      console.log("non");

      setExpanded([...expanded, id]);
    }
  };

  const filterSet = () => {
    let renderSet = flattenData.filter(
      (item) =>
        item.depth === 1 ||
        (expanded.includes(item.parentId) &&
          item.main.every((x) => expanded.includes(x)))
    );

    if (text !== "") {
      renderSet = flattenData
        // .filter((item) => item.depth === 1 || expanded.includes(item.id))
        .filter((item) => item.name.includes(text));
    }

    return renderSet;
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <TreeView tree={filterSet()} handleExpand={handleExpand} />
      <div>{expanded.join(" ")}</div>
    </>
  );
};

export default FlattenArray;
