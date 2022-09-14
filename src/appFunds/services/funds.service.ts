import { EventEmitter } from '@angular/core';

export class FundsService {
  url: string = 'https://62b0abe8196a9e987028bc67.mockapi.io/funds';
  fundAdded: EventEmitter<Object> = new EventEmitter<Object>();

  async getFunds() {
    try {
      const response = await fetch(this.url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  }

  async addFund(bodyInfo: Object) {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(bodyInfo),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  }

  async deleteFunds(id: string) {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  }
}
