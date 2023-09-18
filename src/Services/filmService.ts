import axios from "axios";
import FilmModel from "../Models/FilmModel";

async function getFilm(id: number): Promise<FilmModel> {
    const res = await axios.get<FilmModel>("https://swapi.dev/api/films/" + id);
    const film = res.data;
    return film;

}
export default {
    getFilm
}