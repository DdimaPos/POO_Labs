import {
    MarvelUniverse,
    StarWarsUniverse,
    HitchhickersUniverse,
    LordOfTheRingsUniverse,
} from "./UniverseDefs";
import {Creature} from "./index"
export class Clasify {
    public static Classification(val: Creature): string {
        var marvelness = 0,
            ringness = 0,
            hitchness = 0,
            starwarness = 0,
            numberOfMaxPoints = 0;

        if (val.planet != undefined) {
            if (MarvelUniverse.Planets.indexOf(val.planet) !== -1) marvelness++;
            if (HitchhickersUniverse.Planets.indexOf(val.planet) !== -1) hitchness++;
            if (StarWarsUniverse.Planets.indexOf(val.planet) !== -1) starwarness++;
            if (LordOfTheRingsUniverse.Planets.indexOf(val.planet) !== -1) ringness++;
        }

        if (val.traits != undefined)
            val.traits.forEach((trait) => {
                if (MarvelUniverse.Traits.indexOf(trait) !== -1) marvelness++;
                if (StarWarsUniverse.Traits.indexOf(trait) !== -1) starwarness++;
                if (HitchhickersUniverse.Traits.indexOf(trait) !== -1) hitchness++;
                if (LordOfTheRingsUniverse.Traits.indexOf(trait) !== -1) ringness++;
            });

        if (val.isHumanoid != undefined && val.isHumanoid) {
            marvelness++;
            hitchness+=0.5;
            ringness++;
        } else {
            starwarness++;
            hitchness+=0.5;
        }

        if (val.age <= MarvelUniverse.AsgardianMaxAge) marvelness++;
        if (val.age <= StarWarsUniverse.WookieMaxAge || val.age <= StarWarsUniverse.EwokMaxAge) starwarness++;
        if (val.age <= HitchhickersUniverse.BetelgeusianMaxAge || val.age <= HitchhickersUniverse.VogonMaxAge) hitchness++;
        if (val.age <= LordOfTheRingsUniverse.ElfMaxAge) ringness++;

        var maxPoints: number = Math.max(
            Math.max(marvelness, starwarness),
            Math.max(ringness, hitchness),
        );
        if (marvelness == maxPoints) numberOfMaxPoints++;
        if (starwarness == maxPoints) numberOfMaxPoints++;
        if (ringness == maxPoints) numberOfMaxPoints++;
        if (hitchness == maxPoints) numberOfMaxPoints++;

        //if there is more than one max value, return "undetermined"
        if (numberOfMaxPoints > 1) return "undetermined";

        switch (maxPoints) {
            case marvelness:
                return "Marvel";
            case starwarness:
                return "Star Wars";
            case hitchness:
                return "Hitchhickers";
            case ringness:
                return "Lord of Rings";
        }
        return "undetermined";
    }
}

