(() => {

    // aplicando el principio de responsabilidad única
    // priorizar composición sobre herencia, ya que la herencia es un mecanismo muy fuerte y puede generar problemas de acoplamiento entre clases

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

    interface UserProps {
        email       : string;
        role        : string;
    }

    class User {

        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({
            email,
            role,
        } : UserProps){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProps){
            
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {
        
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name,
            gender,
            bithdate,
            email,
            role,
            workingDirectory,
            lastOpenFolder
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, bithdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
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

    console.log({ userSettings, areCredentialsValid: userSettings.user.checkCredentials() });

})();