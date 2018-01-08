export class User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    age: number;
    gender: string;
    address: Address;
    occupation: string;
    username: string;
}

interface Address {
    street:string;
    city:string;
    state:string;
}