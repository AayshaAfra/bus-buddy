import React, { useEffect, useRef } from 'react';

const busMarkers = [
  { id: 'Bus_344', lat: 51.510, lng: -0.118, label: 'Bus 344 – On Time' },
  { id: 'Bus_354', lat: 51.514, lng: -0.130, label: 'Bus 354 – On Time' },
  { id: 'Bus_365', lat: 51.506, lng: -0.110, label: 'Bus 365 – On Time' },
  { id: 'Bus_372', lat: 51.508, lng: -0.140, label: 'Bus 372 – Alert'   },
];

export default function MapOverview() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapInstance.current) return; // Already initialized

    const L = window.L;
    if (!L) return;

    mapInstance.current = L.map(mapRef.current, {
      center: [51.510, -0.125],
      zoom: 14,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(mapInstance.current);

    
    busMarkers.forEach((bus) => {
      const isAlert = bus.label.includes('Alert');
      const markerHtml = `
        <div style="
          background:${isAlert ? '#ef4444' : '#14b8a6'};
          color:white;
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          width:32px;height:32px;
          display:flex;align-items:center;justify-content:center;
          box-shadow:0 4px 12px rgba(0,0,0,0.3);
          border:2px solid white;
        ">
          <span style="transform:rotate(45deg);font-size:14px;">🚌</span>
        </div>
      `;

      const icon = L.divIcon({
        html: markerHtml,
        className: '',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -36],
      });

      L.marker([bus.lat, bus.lng], { icon })
        .addTo(mapInstance.current)
        .bindPopup(`<b>${bus.id}</b><br/>${bus.label}`);
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapRef} className="w-full h-full" style={{ minHeight: '300px' }} />
  );
}
