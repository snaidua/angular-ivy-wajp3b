import { Injectable } from '@angular/core';
import { IApp } from './../model';

@Injectable()
export class AppService {
  data: IApp = {};

  constructor() {}

  public setData(vdata: IApp) {
    this.data = vdata;
  }

  public getData(): IApp {
    return this.data;
  }
}
