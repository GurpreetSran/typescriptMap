import User from './User';
import Company from './Company';
import Map from './Map';

const customMap = new Map(document.getElementById('map'));

for (let i = 0; i < 10; i++) {
  customMap.addMarker(new User());
  customMap.addMarker(new Company());
}
