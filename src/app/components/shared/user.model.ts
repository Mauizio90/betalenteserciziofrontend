import { Sex } from "./sex.enum";

export interface User{
    username: string;
    password: string;
    email: string;
    age: number;
    sex: Sex;
    isActive: boolean;
}