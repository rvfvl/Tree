import React, { useRef, useEffect, memo, useState } from "react";

const Item = ({ data, depth, isExpanded, expanded }) => {
  const itemRef = useRef(null);
  const didMountRef = useRef(false);

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (didMountRef.current && itemRef)
      itemRef.current.classList.toggle("hidden");
    else didMountRef.current = true;
  }, [isExpanded]);

  const handleClick = () => {
    if (itemRef) {
      itemRef.current.classList.toggle("hidden");
      setIsClicked(!isClicked);
    }
  };

  // console.log("RENDERED ITEM");

  return (
    <div>
      <div style={{ color: isClicked ? "red" : "black" }} onClick={handleClick}>
        {data.name}
      </div>
      <div
        ref={itemRef}
        className="hidden"
        style={{
          marginLeft: depth * 15,
        }}
      >
        {data.children.length > 0 &&
          data.children.map((item, i) => {
            const isExpanded = expanded.includes(item.name);

            return (
              <Item
                key={i}
                data={item}
                depth={depth + 1}
                isExpanded={isExpanded}
                expanded={expanded}
              />
            );
          })}
      </div>
    </div>
  );
};

export default memo(Item);
