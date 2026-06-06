import type { Tile } from "../../types/types";
import { TileComponent } from "../tile/tile";
import "./map.scss";

export const Map = () => {
  const generateMap = (width: number, height: number): Tile[][] => {
    const map: Tile[][] = [];

    for (let y = 0; y < height; y++) {
      const row: Tile[] = [];
      for (let x = 0; x < width; x++) {
        row.push({ type: "floor" });
      }
      map.push(row);
    }
    return map;
  };

  return (
    <div className="map">
      {generateMap(50, 30).map((row, y) =>
        row.map((tile, x) => (
          <TileComponent type={tile.type} key={`${x}-${y}`} />
        )),
      )}
    </div>
  );
};
