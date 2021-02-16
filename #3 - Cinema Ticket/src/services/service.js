import db from "../firebase";
export default{
    
    fetchMovies(){
        //get movies from firebase
       // var database= db.database();
        debugger;
        return database('movie').once('value');
    }
}