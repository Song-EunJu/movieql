import { getMovies, getMovie, getSuggest} from "./db";

const resolvers = {
    Query:{
        movies: (_,{ limit, rating })=> getMovies(limit, rating),
        movie: (_,{ id })=> getMovie(id),
        suggest: (_,{ id })=> getSuggest(id)
    }
};


export default resolvers;
