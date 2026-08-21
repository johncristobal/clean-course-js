(() => {

    // función para obtener información de una película por Id
    // function getAllMovies( movieId: string ) {
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    // function getAllMovieActors( id: string ) {
    function getActorsByMovieId( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    // function getUsuario( ActorId: string ) {
    function getBioActorById( ActorId: string ) {
        console.log({ ActorId });
    }

    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    // Crear una película
    // function movie(title: string, description: string, rating: number, cast: string[] ) {
    // function createMovie(title: string, description: string, rating: number, cast: string[] ) {
    function createMovie( { title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    // function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;
    }


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {
        // let result: number;
        // if ( isDead ) {
        //     result = 1500;
        // } else {
        //     if ( isSeparated ) {
        //         result = 2500;
        //     } else {
        //         if ( isRetired ) {
        //             result = 3000;
        //         } else {
        //             result = 4000; 
        //         }
        //     }
        // }
        
        // return result;
        if ( isDead ) return 1500;
        
        if ( isSeparated ) return 2500;

        return ( isRetired ) ? 3000 : 4000;

        // if ( isRetired ) {
        //     return 3000;
        // }

        // return 4000;
                        
    }


})();




