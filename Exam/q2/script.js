function rightAlignedTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let space = "";
        for (let j = 1; j <= i; j++) {
            space += j;
        }
        console.log(space);
    }}
rightAlignedTriangle(10);