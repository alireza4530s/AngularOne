import { Person } from "../Models/Person";

export interface IPersonService {
    Add(item: Person): void;
    Delete(item: Person): void;
    GetAll(): Array<Person>;
}