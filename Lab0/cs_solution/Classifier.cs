class Clasify
{
    public static string ClassifyCreatures(Creature creature)
    {
        double marvelness = 0, starwarness = 0, hitchness = 0, ringness = 0, numberOfMaxPoints = 0;

        //check planet
        if (creature.planet != null)
        {
            if (MarvelUniverse.Planets.Contains(creature.planet)) marvelness++;
            if (StarWarsUniverse.Planets.Contains(creature.planet)) starwarness++;
            if (HitchhikersUniverse.Planets.Contains(creature.planet)) hitchness++;
            if (LordOfTheRingsUniverse.Planets.Contains(creature.planet)) ringness++;
        }
        //check traits
        foreach (var trait in creature.traits ?? Array.Empty<string>())
        {
            if (MarvelUniverse.Traits.Contains(trait)) marvelness++;
            if (StarWarsUniverse.Traits.Contains(trait)) starwarness++;
            if (LordOfTheRingsUniverse.Traits.Contains(trait)) ringness++;
            if (HitchhikersUniverse.Traits.Contains(trait)) hitchness++;
        }
        //check isHumanoid
        if (creature.isHumanoid != null && (bool)creature.isHumanoid)
        {
            marvelness++; hitchness += 0.5; ringness++;
        }
        else
        {
            starwarness++; hitchness += 0.5;

        }
        //check age
        if (creature.age <= MarvelUniverse.AsgardianMaxAge) marvelness++;
        if (creature.age <= StarWarsUniverse.WookieMaxAge || creature.age <= StarWarsUniverse.EwokMaxAge) starwarness++;
        if (creature.age <= HitchhikersUniverse.BetelgeusianMaxAge || creature.age <= HitchhikersUniverse.VogonMaxAge) hitchness++;
        if (creature.age <= LordOfTheRingsUniverse.DwarfMaxAge || creature.age <= LordOfTheRingsUniverse.ElfMaxAge) ringness++;

        double maxPoints = Math.Max(Math.Max(marvelness, starwarness), Math.Max(ringness, hitchness));

        if (marvelness == maxPoints) numberOfMaxPoints++;
        if (starwarness == maxPoints) numberOfMaxPoints++;
        if (ringness == maxPoints) numberOfMaxPoints++;
        if (hitchness == maxPoints) numberOfMaxPoints++;

        //if there is more than one max value, return "undetermined"
        if (numberOfMaxPoints > 1) return "undetermined";

        if (maxPoints == marvelness) return "Marvel";
        if (maxPoints == starwarness) return "Star Wars";
        if (maxPoints == ringness) return "Lord of the Rings";
        if (maxPoints == hitchness) return "Hitchhiker's Guide";
        return "undetermined";
    }
}

