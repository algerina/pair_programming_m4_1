function pageCount(n, p) {
    // Write your code here
    let frontCount = Math.floor(p/2);
    let totalCount = Math.floor(n/2);
    let backCount = Math.floor(totalCount - frontCount);
    
    return Math.min(frontCount, backCount);

}
