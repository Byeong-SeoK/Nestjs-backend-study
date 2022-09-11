import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export default class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
}
