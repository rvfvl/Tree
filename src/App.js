import React, { useRef, useState } from "react";
import { List, AutoSizer } from "react-virtualized";

import Vtree from "react-virtualized-tree";
var ROW_HEIGHT = 15;
var RANDOM_WORDS = [
  "abstrusity",
  "advertisable",
  "bellwood",
  "benzole",
  "boreum",
  "brenda",
  "cassiopeian",
  "chansonnier",
  "cleric",
  "conclusional",
  "conventicle",
  "copalm",
  "cornopion",
  "crossbar",
  "disputative",
  "djilas",
  "ebracteate",
  "ephemerally",
  "epidemical",
  "evasive",
  "eyeglasses",
  "farragut",
  "fenny",
  "ferryman",
  "fluently",
  "foreigner",
  "genseng",
  "glaiket",
  "haunch",
];

var test123 = createRandomizedData();

const Node = ({ data, listRef, depth }) => {
  const [isExpanded, setIsExpanded] = useState(data.isExpanded);

  const handleClick = (e) => {
    if (data.children.length === 0) return;

    e.stopPropagation();
    setIsExpanded(!isExpanded);
    listRef.current.recomputeRowHeights();
    listRef.current.forceUpdate();
  };

  return (
    <div onClick={handleClick}>
      {data.children.length ? (isExpanded ? "[-]" : "[+]") : ""} {data.name}
      {isExpanded && (
        <div style={{ marginLeft: depth * 15 }}>
          {data.children.map((child, index) => (
            <Node
              key={child.name + index}
              data={child}
              listRef={listRef}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function getExpandedItemCount(item) {
  var count = 1;
  console.log(item.name, item.expanded);

  if (item.expanded) {
    count += item.children
      .map(getExpandedItemCount)
      .reduce(function (total, count) {
        return total + count;
      }, 0);
  }
  console.log(item.name, count);
  return count;
}

// function rowHeight(params) {
//   return getExpandedItemCount(data[params.index]) * ROW_HEIGHT;
// }

const App = () => {
  const ref = useRef(null);

  return (
    <div style={{ height: "500px", border: "1px solid black" }}>
      <Vtree val={test123} />
      {/* <AutoSizer>
        {({ width, height }) => (
          <List
            height={height}
            overscanRowCount={10}
            ref={ref}
            rowHeight={rowHeight}
            rowRenderer={({ index, style, key }) => {
              return (
                <div style={style}>
                  <Node key={key} data={data[index]} listRef={ref} depth={1} />
                </div>
              );
            }}
            rowCount={data.length}
            width={width}
          />
        )}
      </AutoSizer> */}
    </div>
  );
};

export default App;

function createRandomizedData() {
  var data = [];

  for (var i = 0; i < 10000; i++) {
    data.push(createRandomizedItem(0));
  }

  return data;
}

function createRandomizedItem(depth) {
  var item = {};
  item.children = [];
  item.name = RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];

  var numChildren = depth < 3 ? Math.floor(Math.random() * 5) : 0;
  for (var i = 0; i < numChildren; i++) {
    item.children.push(createRandomizedItem(depth + 1));
  }

  item.expanded = numChildren > 0 && Math.random() < 0.25;

  return item;
}
