import axios from "axios";
import CharacterModel from "../Models/CharacterModel";
import PlanetModel from "../Models/PlanetModel";

async function getPlanets(planet: string): Promise<PlanetModel> {
    try {
        const res = await axios.get<PlanetModel>(planet);
        const planets = res.data;
        console.log(planets)
        return planets;
    }
    catch (err) {

    }
}

export default {
    getPlanets
}