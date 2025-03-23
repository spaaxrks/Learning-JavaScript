//learn this from practice

var user = function(firstName,courseCount){                     
    this.firstName = firstName;
    this.courseCount = courseCount;

    this.getcourseCount = function () {
        console.log(`cours count is: ${this.courseCount}`);
    };
};

var akash = new user("akash",2);

console.log(akash)

var sam = new user("sam",1);
sam.getcourseCount()