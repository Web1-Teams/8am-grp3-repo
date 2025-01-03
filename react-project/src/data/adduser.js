const getUsers = () => {
    return JSON.parse(localStorage.getItem('users')) || [];
};

export function SignUp(email, password) {
    const users = getUsers();
    const user = users.find(user => user.email === email && user.password === password);
    return user || null; 
}

export function addUser(username, password, firstName, lastName, email) {
    if (!username || !password || !firstName || !lastName || !email) {
        return false;
    }

    const users = getUsers();

    const usernameExists = users.find(user => user.username === username);
    if (usernameExists) {
        return false;//Username already exists
    }

    const emailExists = users.find(user => user.email === email);
    if (emailExists) {
        return false;//Email already exists
    }


    const newUser = { username, password, firstName, lastName, email };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}