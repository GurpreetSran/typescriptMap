import faker from 'faker';
import { Mappable } from './Map';

class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
      <div>  
        <h1>
          ${this.catchPhrase}
        </h1>
        Company name is ${this.name}
      <div>  
    `;
  }
}

export default Company;
