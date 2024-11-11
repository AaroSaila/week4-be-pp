// data model
/*
{
  "name": "Matti Seppänen",
  "email": "matti@example.com",
  "password": "M@45mtg$",
  "phone_number": "+358401234567",
  "gender": "Male",
  "date_of_birth": "2000-01-15",
  "membership_status": "Active"
}
*/

let userArray = [];
let nextId = 1;

const getAll = () => {
    return userArray;
};

const addOne = (name, email, password, phone_number, gender, date_of_birth, membership_status) => {
    if (!name | !email | !password | !phone_number | !gender | !date_of_birth | !membership_status) {
        return false;
    }
    const newuser = {
        id: nextId++,
        name: name,
        email: email,
        password: password,
        phone_number: phone_number,
        gender: gender,
        date_of_birth: date_of_birth,
        membership_status: membership_status,
    };
    userArray.push(newuser);
    return newuser;
};

const findById = (id) => {
    const user = userArray.find((user) => user.id === Number(id));
    if (user) {
        return user;
    } else return false;
};

const updateOneById = (id, updatedData) => {
    const user = findById(id);
    if (user) {
        if (updatedData.name) {
            user.name = updatedData.name;
        }
        if (updatedData.info) {
            user.info = updatedData.info;
        }
        if (updatedData.image) {
            user.image = updatedData.image;
        }
        if (updatedData.price) {
            user.price = updatedData.price;
        }
        return user;
    }
    return false;
};

const deleteOneById = (id) => {
    const user = findById(id);
    if (user) {
        const initialLenght = userArray.length;
        userArray = userArray.filter((user) => user.id !== Number(id));
        return userArray.length < initialLenght;
    } else return false;
};
if (require.main === module) {
    let result = addOne("Matti Seppänen",
        "matti@example.com",
        "M@45mtg$",
        "+358401234567",
        "Male",
         "2000-01-15",
       "Inactive"
    );
    console.log(result);
    console.log(`getAll called: ${getAll()}`);
    console.log(`findById called: ${findById(1)}`);
    console.log(
        `updateById called: ${updateOneById(1, {
            name: "Matti Seppänen",
            email: "matti@example.com",
            password: "M@45mtg$",
            phone_number: "+358401234567",
            gender: "Male",
            date_of_birth: "2000-01-15",
            membership_status: "Active"
        })}`
    );
    console.log(`findById called after item updated: ${findById(1)}`);
    console.log(`deleteById called: ${deleteOneById(1)}`);
    console.log(`findById called after item deleted: ${findById(1)}`);
}

module.exports = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById,
};
