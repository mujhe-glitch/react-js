import React, { useEffect, useMemo, useState } from "react";

export const FindMemo = () => {
  var girdSize = 5;
  var totalTiles = girdSize * girdSize;
  const [clickedTiles, setclickedTiles] = useState([]);
  const [isGameOver, setisGameOver] = useState(false);
  const [message, setmessage] = useState("find Bomb");
  const [GameKey, setGameKey] = useState(0)

  const bombPosition = useMemo(() => {
    return Math.floor(Math.random() * totalTiles);
  }, [GameKey]);
  console.log(bombPosition);
  const clickHandler = (index) => {
    console.log("clicked tiles", clickedTiles);
    setclickedTiles([...clickedTiles, index]);
    if (bombPosition == index) {
      setisGameOver(true);
      setmessage("Game Over..");
    }
  };
  console.log(clickedTiles);
  useEffect(() => {
    if (isGameOver) {
      setTimeout(() => {
        setclickedTiles([]);
        setisGameOver(false);
        setmessage("find Bomb");
        setGameKey((a) => a + 1);
      }, 2000);
    }
  }, [isGameOver]);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{message}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${girdSize},50px)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: totalTiles }).map((tile, index) => {
          return (
            <div
              onClick={() => clickHandler(index)}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                //backgroundColor: "white",
                backgroundColor: clickedTiles.includes(index)
                  ? "grey"
                  : "white",
                cursor: "pointer",
              }}
            >
              {isGameOver && index == bombPosition ? "💣" : index}
            </div>
          );
        })}
      </div>
      {
        isGameOver && <h1>SCORE = {clickedTiles.length - 1}</h1>
      }

    </div>
  );
};