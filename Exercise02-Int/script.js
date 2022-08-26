function countTrue(group) {
    // let newArr = [];
    let count = 0;
    // let num = 1; num < group.length;
    for (let i = 0; i < group.length; i++) {
        // let a = 0; a < group.length; a++;
        if (group[i] === true) {
            count++;
            // a = a + i;
        }
        // console.log(group[i]);
        // console.log(a);
    }
    console.log(count);
};

countTrue([true, false, false, true])