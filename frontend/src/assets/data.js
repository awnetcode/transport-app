
 const transportData = {
    light: { polishName:'Lekki', lastZone: 30, pricePerKm: 8, lastZonePrice: 185, zonesPrices: [85, 135, 185] },
    medium: { polishName:'Średni', lastZone: 30, pricePerKm: 12, lastZonePrice: 370, zonesPrices: [170, 270, 370] },
    smallTruck: { polishName:'MałyHDS', lastZone: 10, pricePerKm: 13, lastZonePrice: 250, zonesPrices: [250] },
    mediumTruck: { polishName:'ŚredniHDS', lastZone: 10, pricePerKm: 13, lastZonePrice: 310, zonesPrices: [310] },
    heavyTruck: { polishName:'DużyHDS', lastZone: 10, pricePerKm: 15, lastZonePrice: 430, zonesPrices: [430] },
  };

  const bringData = {
    weightUnit:25,
    groundFloor: 15,
    Ifloor: 20,
    IIfloor: 25,
    IIIfloor: 30,
    IVfloor: 35,

    for25kg: 15,
    forFloor: 5,
}

  export default transportData;

  export { bringData };