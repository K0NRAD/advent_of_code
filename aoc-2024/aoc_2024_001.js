const input = `3   4
4   3
2   5
1   3
3   9
3   3`

const createLists = (input) => {
    let listA = [];
    let listB = [];
    input.split('\n').map(row => row.split(/\s+/)).forEach(item => {
        listA.push(parseInt(item[0]));
        listB.push(parseInt(item[1]));
    });
    return { listA, listB }
}

const getDiff = (listA, listB) => {
    const sortedListA = listA.sort();
    const sortedListB = listB.sort();

    const lists = sortedListA.map((key, index) => [key, sortedListB[index]]);
    const diff = lists.reduce((accu, current) => accu + Math.abs(current[0] - current[1]), 0);
    return diff;
};

const lists = createLists(input);
console.log(getDiff(lists.listA, lists.listB))