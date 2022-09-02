import {HttpClient} from '@angular/common/http';
import {ICRUD} from "../interfaces/crud";

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

  show(
    id: number | string
  ): S {
    return {} as S;
  }

  update(id: number | string, body: S): S {
    return {} as S;
  }

  delete(id: number | string): S {
    return {} as S;
  }
}
