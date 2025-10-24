import { IPersonService } from "../Contract/IPersonService";
import { Person } from "../Models/Person";

export class PersonService implements IPersonService {

    private _people: Array<Person> = new Array<Person>();

    Add(item: Person): void {
        this._people.push(item);
    }
    Delete(item: Person): void {
        let personIndex = this._people.indexOf(item);
        if (personIndex !== -1) {
            delete this._people[personIndex];
        }
    }
    GetAll(): Array<Person> {
        return this._people;
    }

}