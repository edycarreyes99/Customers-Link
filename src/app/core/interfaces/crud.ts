import {Observable} from "rxjs";

export interface ICRUD<M, S> {
  index(): Observable<S[]>;

  store(params: any): Observable<S>;

  show?(id: number | string): Observable<S | undefined>;

  update(id: number | string, t: S): Observable<S>;

  delete(id: number | string): Observable<S>;

  poblate(data: S[]): void;
}
