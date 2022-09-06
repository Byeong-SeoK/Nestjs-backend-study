import { Injectable } from '@nestjs/common';

@Injectable()
export default class BoardsService {
  private boards = [];

  getAllBoards() {
    return this.boards;
  }
}
