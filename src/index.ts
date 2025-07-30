import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserEdit } from "./views/UserEdit";

// Edit Part

const user = User.buildUser({ name: 'NAME', age: 20 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('Root element not found!');

}

/* Collection Part
const rootUrl = 'http://localhost:3000/users';

const users = new Collection(rootUrl, (json: UserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
})

users.fetch();
*/
