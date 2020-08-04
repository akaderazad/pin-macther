// nums = [5, 12, 25, 30, 10];
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     console.log(num * 2);
    
// }

function evenify(num){
    if (num % 2 == 0){
        console.log(num, ': is even number')
    }
    else{
        console.log(num, ': is odd number')


}
    
}


nums = [5, 12, 25, 30, 10];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    evenify(num);
    
        
    }



friends_age = [8, 12, 9, 17, 5, 11];
for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];
    if (age % 2 == 0){
        console.log(age, ': is even number')
    }
    else{
        console.log(age, ': is odd number')

        evenify(age);
    }
    
}