import axios from "axios";
import PlanetModel from "../Models/PlanetModel";
import StarShipModel from "../Models/StarShipModel";

async function getStarShips(ship: string): Promise<StarShipModel> {
    try {
        const res = await axios.get<StarShipModel>(ship);
        const starShips = res.data;
        console.log(starShips)
        return starShips;
    }
    catch (err) {

    }
}

export default {
    getStarShips
}