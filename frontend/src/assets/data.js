
export default class Transport {
    constructor({ lastZone, priceForKm, lastZonePrice}){
        this.lastZone = lastZone;
        this.priceForKm = priceForKm;
        this.lastZonePrice = lastZonePrice;
    }
/*
    overZonePrice(){
        const price = (this.distance - this.lastZone) * this.priceForKm + this.lastZonePrice 

        return(price);
    }
        */
}
