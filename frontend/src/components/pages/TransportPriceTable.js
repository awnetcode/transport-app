import React from "react";
import transportData from '../../assets/data';

const calculatePrice = (type, distance) => {
  const { lastZone, pricePerKm, lastZonePrice, zonesPrices } = transportData[type];

  if (distance <= lastZone) {
    return zonesPrices[zonesPrices.length - 1] || lastZonePrice;
  }
  return lastZonePrice + (distance - lastZone) * pricePerKm;
};

const TransportTable = () => {
  const distances = Array.from({ length: 100 }, (_, i) => i + 1);
  const transportTypes = Object.keys(transportData);

  return (
    <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>Odległość (km)</th>
          {transportTypes.map((type) => (
            <th key={type}>{transportData[type].polishName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {distances.map((distance) => (
          <tr key={distance}>
            <td>{distance}</td>
            {transportTypes.map((type) => (
              <td key={type}>{calculatePrice(type, distance)} zł</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransportTable;
