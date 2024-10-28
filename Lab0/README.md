### Laboratory work N1

This is the repository with the content with Laboratory work number 1

### Implementation algorithm

According to the input data the optimal solution will be to create a grading system that will assign points to one of 4 universes for each creature: _Marvelness, Starwarness, Ringness, Hitchickerness_. 

Each creature will start from all properies being equal to 0. By going from property to property (age, planet, etc.) I will increase the corresponding counter. Then after counting I will determine the maximum and it will show to which universe the creature belongs to.

Ex:

```cs
ringness = 0, marvelness = 0, starwarness = 0, hitchness = 0; 
if(creature.planet == "asgard"){
    marvelness++;
}
maximum = max(ringness, marvelness, starwarness, hitchness);
if(maximum == marvelness)return "Marvel universe";
```

Programming languages in which the solution to the problem will be provided:

- Typescript 
  - [x] Read the source file
  - [x] Deserialize the json into list of objects by class
  - [x] Create classes that will hold information about classification values for each universe
  - [x] Initialize lists of creatures by universes
  - [x] Go through all objects and determine number of point for each universe
  - [x] Determine the highest grade and put the creature in corresponding list of creatures by universe
  - [x] Go through each list by universes and save into a json file.
- C#
  - [x] Read the source file
  - [x] Deserialize the json into list of objects by class
  - [x] Create classes that will hold information about classification values for each universe
  - [x] Initialize lists of creatures by universes
  - [x] Go through all objects and determine number of point for each universe
  - [x] Determine the highest grade and put the creature in corresponding list of creatures by universe
  - [x] Go through each list by universes and save into a json file.

Cases to consider:
  - [x] Push to an UndefinedUniverse array if some of the counters are equal.

Further commits will be in `oop-intro-classification-system` branch
