const current_users = ["John", "Mark", "Shery"];
const new_users = ["MarkZ", "Elon", "Steve", "Smith"]

const u_current_users = current_users.map(n => n.toUpperCase());
const u_new_users = new_users.map(n => n.toUpperCase());

for (let i = 0; i < u_new_users.length; ++i) {
    if (u_current_users.includes(u_new_users[i])) {
        console.log("enter a different username");
    } else {
        console.log(`usernmae ${new_users[i]} is available`)
    }
}