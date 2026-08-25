(() => {

    type Gender = 'M'|'F';

    interface PersonProps {
        name        : string;
        gender      : Gender;
        bithdate    : Date;
    }

    class Person {

        public name: string;
        public gender: Gender;
        public bithdate: Date;

        constructor({ name, gender, bithdate }: PersonProps){
            this.name = name;
            this.gender = gender;
            this.bithdate = bithdate;
        }
    }

    // const newPerson = new Person('John', 'M', new Date('1985-10-21'));
    // console.log({ newPerson });

    interface UserProps {
        email       : string;
        role        : string;
        lastAccess  : Date;

        name        : string;
        gender      : Gender;
        bithdate    : Date;
    }

    class User extends Person {

        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({
            email,
            role,
            name,
            gender,
            bithdate,
        } : UserProps){
            super({ name, gender, bithdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;

        email       : string;
        role        : string;
        lastAccess  : Date;

        name        : string;
        gender      : Gender;
        bithdate    : Date;
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            lastAccess,
            name,
            gender,
            bithdate,
        }: UserSettingsProps){
            super({
                email,
                role,
                lastAccess,
                name,
                gender,
                bithdate
            });
            
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'john@example.com',
        role: 'user',
        lastAccess: new Date(),
        name: 'John',
        gender: 'M',
        bithdate: new Date('1985-10-21')
    });

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });

})();