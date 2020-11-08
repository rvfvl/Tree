import React, { useState } from "react";
import { List } from "react-virtualized";
import TreeItem from "./TreeItem";

const TreeView = ({ tree, handleExpand }) => {
  const [renamin, setRenamin] = useState(1);

  return (
    <div style={{ border: "1px solid black" }}>
      <List
        height={200}
        width={500}
        rowCount={tree.length}
        rowHeight={20}
        rowRenderer={({ style, key, index }) => {
          const item = tree[index];

          return (
            <div style={style} key={key}>
              <TreeItem
                item={item}
                handleExpand={handleExpand}
                isRenaming={renamin === item.id}
              />
            </div>
          );
        }}
      />
    </div>
  );
};

export default TreeView;
