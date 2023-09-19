import axios from "axios";
import PlanetModel from "../Models/PlanetModel";
import VehicleModel from "../Models/VehicleModel";

async function getVehicles(vehicle: string): Promise<VehicleModel> {
    try {
        const res = await axios.get<VehicleModel>(vehicle);
        const vehicles = res.data;
        return vehicles;
    }
    catch (err) {

    }
}

export default {
    getVehicles
}