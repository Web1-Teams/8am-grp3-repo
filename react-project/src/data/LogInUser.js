const getUsers=()=>{
    return JSON.parse(localStorage.getItem('users')) || []
}
export function  LogIn(email , password){
    let users=getUsers();
    const user=users.find(user=>user.email === email && user.password === password);
    return user || null;
}
export function addUser(username = 'ali', password = 'Ali123456', firstName = 'Ali', lastName = 'Ahmad', email = 'ali.ahmad123456@gmail.com')
{
    let users = getUsers();

    if(users.find(user => user.username === username)){
        return false
    }

    const newUser = {username, password, firstName, lastName, email};
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}