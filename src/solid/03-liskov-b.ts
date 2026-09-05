
export abstract class Car {
    abstract getNumberOfSeats(): number;
}

export class Tesla extends Car {
    constructor( private numberOfSeats: number ) {
        super();
    }

    // getNumberOfTeslaSeats() {
    //     return this.numberOfSeats;
    // }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

}

export class Audi extends Car {
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }
}

export class Toyota extends Car {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Honda extends Car {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}
