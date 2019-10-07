import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): any[] {
    return [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      {
        id: 3,
        name: "Test von dem Berge",
        username: "tvdberge",
        email: "Shanna@melissa.tv"
      },
      {
        id: 4,
        name: "Martin Test",
        username: "mtest",
        email: "Shanna@melissa.tv"
      },
      {
        id: 5,
        name: "Ervin Muster",
        username: "emuster",
        email: "Shanna@melissa.tv"
      },
      {
        id: 6,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "Rey.Padberg@rosamond.biz"
      }
    ];
  }
}
