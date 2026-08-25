(() => {

    // no aplicando el principio de responsabilidad única
    // en herencia es casi imposible aplicar el principio de responsabilidad única
    

    type Gender = 'M'|'F';

    class Person {
        constructor( 
            public name: string,
            public gender: Gender, 
            public bithdate: Date 
        ){}
    }

    // const newPerson = new Person('John', 'M', new Date('1985-10-21'));
    // console.log({ newPerson });

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,

            name: string,
            gender: Gender,
            bithdate: Date
        ){
            super(name, gender, bithdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,

            email: string,
            role: string,
            lastAccess: Date,

            name: string,
            gender: Gender,
            bithdate: Date
        ){
            super(
                email,
                role,
                lastAccess,

                name,
                gender,
                bithdate
            );
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',

        'john@example.com',
        'user',
        new Date(),

        'John',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });

})();