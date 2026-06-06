export type Position = {
  x: number;
  y: number;
};

export type Player = {
  position: Position;
  light: number;
};

export type Enemy = {
  id: number;
  position: Position;
};

export type Tile = {
  type: "floor" | "wall" | "stairs";
  item?: "coal" | "oil";
};

export type GameState = {
  status: "playing" | "won" | "lost";
  player: Player;
  enemies: Enemy[];
  map: Tile[][];
};
