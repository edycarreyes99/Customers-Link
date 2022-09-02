import {Observable} from "rxjs";

export interface ICRUD<M, S> {
  index(): M;

  store(params: any): S;

  show?(id: number | string): S;

  update(id: number | string, t: S): S;

  delete(id: number | string): S;

  poblate(data: M[]): void;
}
