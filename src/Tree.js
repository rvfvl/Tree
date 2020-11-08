import React, { useState } from "react";
import { List, CellMeasurer, CellMeasurerCache } from "react-virtualized";

import { data } from "./FlattenArray";

const Tree = () => {
  const [expanded, setExpanded] = useState([]);
  const ref = React.useRef();

  function getExpandedItemCount(item, arr) {
    var count = 1;

    if (arr.includes(item.name)) {
      count += item.items
        .map((i) => getExpandedItemCount(i, arr))
        .reduce(function (total, count) {
          return total + count;
        }, 0);
    }
    return count;
  }

  return (
    <div style={{ border: "1px solid black" }}>
      <List
        height={100}
        width={300}
        ref={ref}
        rowHeight={(t) => getExpandedItemCount(data[t.index], expanded) * 15}
        rowRenderer={({ style, index, key, parent }) => {
          const item = data[index];
          const isExpanded = expanded.includes(item.name);

          // const test = getExpandedItemCount(item, expanded);

          // console.log(item.name, test);

          return (
            <Node
              item={item}
              index={index}
              depth={0}
              q={style}
              isExpanded={isExpanded}
              key={key}
              expanded={expanded}
              setExpanded={setExpanded}
              list={ref}
            />
          );
        }}
        rowCount={data.length}
      />
    </div>
  );
};

const Node = ({
  item,
  depth,
  isExpanded,
  key,
  expanded,
  setExpanded,
  cache,
  index,
  list,
  q,
}) => {
  const handleClick = () => {
    if (isExpanded) {
      //const index = expanded.findIndex(item.name);
      setExpanded(expanded.filter((x) => x !== item.name));
    } else {
      setExpanded([...expanded, item.name]);
    }

    //cache.current.clear(index, 0);
    list.current.recomputeRowHeights();
    list.current.forceUpdate();

    const test = clickedOn(data, []);
  };

  const clickedOn = (val, t) => {
    for (const v of val) {
      if (v.name === "Salami") {
        t.push(v.name);
      }

      if (v.items !== undefined && v.items.length > 0) {
        clickedOn(v.items, t);
      }
    }

    return t;
  };

  return (
    <div style={q}>
      <div onClick={handleClick} style={{ marginLeft: depth * 15 }}>
        {item.name}
      </div>

      {isExpanded &&
        item.items &&
        item.items.map((child) => {
          const isExpanded = expanded.includes(child.name);

          return (
            <Node
              item={child}
              depth={depth + 1}
              key={key}
              expanded={expanded}
              isExpanded={isExpanded}
              setExpanded={setExpanded}
              index={index}
              list={list}
            />
          );
        })}
    </div>
  );
};

export default Tree;
