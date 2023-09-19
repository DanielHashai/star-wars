import axios from "axios";
import SpeciesModel from "../Models/SpeciesModel";

async function getSpecies(type: string): Promise<SpeciesModel> {
    try {
        const res = await axios.get<SpeciesModel>(type);
        const species = res.data;
        return species;
    }
    catch (err) {

    }
}

export default {
    getSpecies
}