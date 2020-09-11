## Code assignment UR Service Team

### Task
Create an endpoint for quering Star Wars characters: `/characters/{name}`. For instance, `/characters/Luke Skywalker` should return information on Luke Skywalker. 

### Resources
To do this, you will use the Star Wars API (www.swapi.dev). However, you are only allowed to use https://swapi.dev/api/people/ as your entry point. That means, you will have to go through the response to find the correct person.

Each person object has references to `starships`. This in turn has references to people. In the case of a starship, it has a reference to `pilots`, which are the related persons.

### Requirements
`/characters/{name}` should give information on the name of that character.

It should also be possible to get related persons if this query param is true: `/characters/Luke Skywalker?related_persons_by_starships=true`. 

If this query parameter is present, there should be an additional field in the response with the names of the related persons, e.g. 

```JSON
{
  "name": "Luke Skywalker", 
  //...
  "related_persons_by_starships": ["Chewbacca", "Biggs Darklighter", "Wedge Antilles"]
}
```

The `{name}` parameter in the end point `/characters/{name}` will always match with what you will find in the response from https://swapi.dev/api/people/. But perhaps you want to support incorrect casing or similar...


