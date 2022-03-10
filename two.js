class Test {
    constructor() {
        this.name = "name"
        this.aaa = () => {
            console.log("aaa", this);
        }
    }
    func = () => {
        console.log("func", this);
    }
}
let test = new Test()
// console.log(tset);
// let funct = tset.func
// funct()
// let obj = {
//     a: funct
// }
// obj.a()

var obj = {
    a: () => {
        console.log("a", this);
    }
}