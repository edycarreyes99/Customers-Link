import {ICRUD} from "../interfaces/crud";
import {CUSTOMERS_LS} from "../constants/local-storage.constants";
import {faker} from "@faker-js/faker";

export abstract class LocalStorageDatasource<M, S> implements ICRUD<M, S> {

  protected constructor() {
  }

  index(): S[] {
    if (!this.verifyIfDataSourceExists()) {
      this.poblate();
    }

    return JSON.parse(localStorage.getItem(CUSTOMERS_LS)!) as S[];
  }

  store(body: S): S {
    if (!this.verifyIfDataSourceExists()) {
      this.poblate();
    }

    const data = this.index();

    (body as any).id = faker.datatype.uuid();

    (data as any).push(body);

    this.poblate(data);

    return body;
  }

  show(id: number | string): S | undefined {
    if (!this.verifyIfDataSourceExists()) {
      this.poblate();
    }

    return this.index().find(d => (d as any).id === id);
  }

  update(id: number | string, body: S): S {
    if (!this.verifyIfDataSourceExists()) {
      this.poblate();
    }

    const data = this.index();

    const index = data.findIndex(d => (d as any).id === id);

    data[index] = body;

    this.poblate(data);

    return body;
  }

  delete(id: number | string): S {
    if (!this.verifyIfDataSourceExists()) {
      this.poblate();
    }

    const data = this.index();

    const index = data.findIndex(d => (d as any).id === id);

    const deleted = data[index];

    data.splice(index, 1);

    this.poblate(data);

    return deleted;
  }

  poblate(data?: S[]): void {
    localStorage.setItem(CUSTOMERS_LS, JSON.stringify(data ?? []));
  }

  verifyIfDataSourceExists(): boolean {
    return !!localStorage.getItem(CUSTOMERS_LS);
  }
}
