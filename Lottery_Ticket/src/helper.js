function getTicket(n) {
    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

export { getTicket, sum };
