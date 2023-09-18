import axios from "axios";
import CharacterModel from "../Models/CharacterModel";

async function getPeople(character: string): Promise<CharacterModel> {
    try {
        const res = await axios.get<CharacterModel>(character);
        const people = res.data;
        // console.log(people)
        return people;
    }
    catch (err) {

    }
}

export default {
    getPeople
}