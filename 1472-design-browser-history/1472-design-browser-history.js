
var BrowserHistory = function(homepage) {
    this.arr = [homepage]
    this.head = 0

};

BrowserHistory.prototype.visit = function(url) {
    this.head++
    this.arr[this.head] = url
    this.arr.length = this.head + 1
};


BrowserHistory.prototype.back = function(steps) {
    this.head -= steps
    if (this.head < 0) this.head = 0
    return this.arr[this.head]
};


BrowserHistory.prototype.forward = function(steps) {
    this.head += steps
    if (this.head >= this.arr.length) this.head = this.arr.length - 1
    return this.arr[this.head]
};