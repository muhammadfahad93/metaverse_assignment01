var user_list = ['Honda','Toyato','admin','Audi','BMW']

for (i of user_list)
{
    if(i == 'admin')
    console.log(`Hello ${i}, would you like to see a status report?`);
    else
    console.log(`Hello ${i},  thank you for logging in again`)
}