export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

class Map {
  private googleMap: google.maps.Map;

  constructor(el: HTMLElement) {
    this.googleMap = new google.maps.Map(el, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
      map: this.googleMap
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}

export default Map;
