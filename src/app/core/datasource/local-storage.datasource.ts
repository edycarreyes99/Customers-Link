import {HttpClient} from '@angular/common/http';
import {ICRUD} from "../interfaces/crud";
import {CUSTOMERS_LS} from "../constants/local-storage.constants";

export abstract class LocalStorageDatasource<M, S> implements ICRUD<M, S> {

  protected constructor(
    protected http: HttpClient
  ) {
  }

  index(): M {
    return {} as M;
  }

  store(body: object): S {
    return {} as S;
  }

  show(id: number | string): S {
    return {} as S;
  }

  update(id: number | string, body: S): S {
    return {} as S;
  }

  delete(id: number | string): S {
    return {} as S;
  }

  poblate(data: M[]): void {
    localStorage.setItem(CUSTOMERS_LS, JSON.stringify(data));
  }
}
