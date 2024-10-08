### Laboratory work N1

This is the repository with the content with laboratory work number 1

### Implementation algorithm

According to the input data the optimal solution will be to create a grading system that will assign points to one of 4 universes for each creature: _Marvelness, Starwarness, Ringness, Hitchickerness_. Each creature will start from all properies being equal to 0. By going from property to property I will increase the correct counter.

Ex:

```cs
if(creature.planet == "earth"){
    creature.Ringness++;
    creature.Marvelness++;
}
```

Programming languages in which the solution to the problem will be provided:

- Typescript 
  - [ ] Read the source file
  - [ ] Deserialize the json into list of objects by class
  - [ ] Create classes that will hold information about classification values for each universe
  - [ ] Initialize lists of creatures by universes
  - [ ] Go through all objects and determine number of point for each universe
  - [ ] Determine the highest grade and put the creature in corresponding list of creatures by universe
  - [ ] Go through each list by universes and save into a json file.
- C#
  - [x] Read the source file
  - [x] Deserialize the json into list of objects by class
  - [ ] Create classes that will hold information about classification values for each universe
  - [ ] Initialize lists of creatures by universes
  - [ ] Go through all objects and determine number of point for each universe
  - [ ] Determine the highest grade and put the creature in corresponding list of creatures by universe
  - [ ] Go through each list by universes and save into a json file.

Further commits will be in `oop-intro-classification-system` branch
