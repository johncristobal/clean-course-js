
interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmingBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly() {
        console.log('Tucan is flying');
    }
    public eat() {
        console.log('Tucan is eating');
    }
}

class Hummingbird implements Bird, FlyingBird {
    public fly() {
        console.log('Hummingbird is flying');
    }
    public eat() {
        console.log('Hummingbird is eating');
    }
}

class Ostrich implements Bird, RunningBird {
    public eat() {
        console.log('Ostrich is eating');
    }
    public run() {
        console.log('Ostrich is running');
    }
}
