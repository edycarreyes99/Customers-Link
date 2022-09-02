import {ICRUD} from "../interfaces/crud";
import {CUSTOMERS_LS} from "../constants/local-storage.constants";
import {faker} from "@faker-js/faker";
import {Observable, of} from "rxjs";

export abstract class LocalStorageDatasource<M, S> implements ICRUD<M, S> {

  protected constructor() {
  }

  index(): Observable<S[]> {
    if (!this.verifyIfDataSourceExists()) {
      this.poblate();
    }

    return of(JSON.parse(localStorage.getItem(CUSTOMERS_LS)!));
  }

  store(body: S): Observable<S> {
    if (!this.verifyIfDataSourceExists()) {
      this.poblate();
    }
    let data: S[] = [];

    body = {
      ...body,
      id: faker.datatype.uuid()
    }

    this.index().subscribe((payload: S[]) => {
      data = payload;
    });

    (data as any).push(body);

    this.poblate(data);

    return of(body);
  }

  show(id: number | string): Observable<S | undefined> {
    if (!this.verifyIfDataSourceExists()) {
      this.poblate();
    }

    let find: S | undefined;

    this.index().subscribe((payload: S[]) => {
      find = payload.find(d => (d as any).id === id);
    });

    return of(find);
  }

  update(id: number | string, body: S): Observable<S> {
    if (!this.verifyIfDataSourceExists()) {
      this.poblate();
    }

    let data: S[] = [];

    this.index().subscribe((payload: S[]) => {
      data = payload;
    });

    const index = data.findIndex(d => (d as any).id === id);

    data[index] = {
      ...body
    };

    this.poblate(data);

    return of(body);
  }

  delete(id: number | string): Observable<S> {
    if (!this.verifyIfDataSourceExists()) {
      this.poblate();
    }

    let data: S[] = [];

    this.index().subscribe((payload: S[]) => {
      data = payload;
    });

    const index = data.findIndex(d => (d as any).id === id);

    const deleted = data[index];

    data.splice(index, 1);

    this.poblate(data);

    return of(deleted);
  }

  poblate(data?: S[]): void {
    localStorage.setItem(CUSTOMERS_LS, JSON.stringify(data ?? []));
  }

  verifyIfDataSourceExists(): boolean {
    return !!localStorage.getItem(CUSTOMERS_LS);
  }
}
