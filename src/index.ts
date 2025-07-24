import { User } from "./models/User";

const user = new User({ name: 'Ana', age: 33 });

user.save();
