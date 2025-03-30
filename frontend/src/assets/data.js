
export default class Transport {
    constructor({ lastZone, priceForKm, lastZonePrice, zonesPrices}){
        this.zonesPrices = zonesPrices;
        this.lastZone = lastZone;
        this.priceForKm = priceForKm;
        this.lastZonePrice = lastZonePrice;
    }
}
