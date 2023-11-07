// Number one

console.log("arrow")
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) => {
            console.log(this.title + ": " + student
            );
        });
    }
};
group1.showList();

console.log("self")
let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const self = this;
        this.students.forEach(function (student) {
            console.log(self.title + ": " + student
            );
        });
    }
};
group2.showList();


console.log("bind#")

let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        let change = function (student) {
            console.log(this.title + ": " + student
            );
        }
        this.students.forEach(change.bind(this));
    }
};
group3.showList();


console.log("apply")

let group4 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        let change = function (student) {
            console.log(this.title + ": " + student
            );
        }
        this.students.forEach((student)=>change.apply(this,[student]));
    }
};
group4.showList();


console.log("call")


let group5 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        let change = function (student) {
            console.log(this.title + ": " + student
            );
        }
        this.students.forEach((student)=>change.call(this,student));
    }
};
group5.showList();


// Number 2
// After the loop

