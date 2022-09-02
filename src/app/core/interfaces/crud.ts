import {Observable} from "rxjs";

export interface ICRUD<M, S> {
  index(): S[];

  store(params: any): S;

  show?(id: number | string): S | undefined;

  update(id: number | string, t: S): S;

  delete(id: number | string): S;

  poblate(data: S[]): void;
}
