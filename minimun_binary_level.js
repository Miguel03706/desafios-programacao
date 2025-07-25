const root = [1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10];

function minimun_binary_by_level(root) {
    let temp;
    let trocas = 0;

    for (let i = 1; i < root.length; i++) {
        if (root[i] > root[i + 1]) {
            temp = root[i];
            root[i] = root[i + 1];
            root[i + 1] = temp;
            trocas++;
        }
    }
    return trocas;
}

console.log(minimun_binary_by_level(root))