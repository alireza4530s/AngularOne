import { Person } from "./Models/Person";
import { PersonService } from "./Services/PersonService";

var personService = new PersonService();
personService.Add(new Person("Alireza", "Heydari"));
personService.Add(new Person("Mohammad", "Hassani"));

var result = personService.GetAll();
console.log(result);