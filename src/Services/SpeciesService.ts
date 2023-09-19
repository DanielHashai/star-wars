import axios from "axios";
import PlanetModel from "../Models/PlanetModel";
import StarShipModel from "../Models/StarShipModel";
import SpeciesModel from "../Models/SpeciesModel";

async function getSpecies(type: string): Promise<SpeciesModel> {
    try {
        const res = await axios.get<SpeciesModel>(type);
        const species = res.data;
        console.log(species)
        return species;
    }
    catch (err) {

    }
}

export default {
    getSpecies
}