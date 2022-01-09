export enum GameState {
  NotCreated,
  NotStarted,
  Playing,
  Finished,
}

export interface IGame {
  id: string;
  state: GameState;
  dateCreated: Date;
}
