const  addUser = (name, last_name) => {
   
    //Gets first name intial
    let initial = name.charAt(0);
    //concats with the last name
    let result1 = initial.concat(last_name);

    return result1.toLowerCase();
}

module.exports = addUser;