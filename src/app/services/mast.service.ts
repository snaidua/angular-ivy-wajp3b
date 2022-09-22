import { Injectable } from '@angular/core';
import { IMast } from '../model';

@Injectable()
export class MastService {
  private data: IMast[] = [];

  constructor() {}

  public setData(vdata: IMast[]) {
    this.data = vdata;
  }

  public getData(vgrp: string = 'MAST'): IMast[] {
    return this.data.filter(function (element, index, array) {
      return element.grp === vgrp;
    });
  }

  public addData(vitem: IMast) {
    this.data.push(vitem);
  }
}
