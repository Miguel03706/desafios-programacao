function smallMultiple(limite) {
    let index = 1
    let find = true;

    while (find) {
        let findIndex = 1;
        for (let i = 1; i <= limite; i++) {
            if (index % i !== 0) {
                index++
            }
            else {
                findIndex++
            }
            if (findIndex == limite) find = false
        }
    }
    console.log(index)
}

smallMultiple(20)