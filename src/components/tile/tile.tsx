import type { Tile } from "../../types/types";
import "./tile.scss";

export const TileComponent = ({ type, item }: Tile) => {
  return <div className={`tile ${type} ${item ? "has-item" : ""}`} />;
};
