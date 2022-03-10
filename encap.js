console.log('Tihs is encapsulation');

/*ENCAPSULATION:-

1. JavaScript Encapsulation is a process of binding the data (i.e. variable)

2. Wrapping up variables and methods in one single unit.

3. Use setter method to set the data and getter method to get the data.

4. Encapsulation is used to hide the values or state of a structured data object 
inside a class, prevemting unauthorized parties' direct access to them.*/

class Student{

    constuructor(){
        let name;    //just defined not assigned any values.
        let marks;
    }

    setName(){  // set the name of class varible
        this.name = name;  //assigning name value to the class variable(this.name).
    }

    getName(){
        return this.name;  //this will return class variable name which we set in setname method.
    }

    setMarks(){
        this.marks = marks;
    }

    getMarks(){
        return this.marks;
    }
    
}

//to access we have to create an object:-

const stu1 = new Student(); // it will just initialize the class variable.
stu1.setName(' john');
stu1.setMarks(60);

console.log(stu1.getName() + ' ' + stu1.getMarks());

//wrapping up of data i.e. class variables and methods to get them in a single unit.
//this class bonds data (i.e. class variables--let name and let marks) along with methods 
//(i.e. setter and getter)


//eg.2
class Employee{

    setEmpDetails(name, id, number){
        this.name = name;
        this.id = id;
        this.number = number;
    }

    getEmpName(){
        return this.name;
    }

    getEmpId(){
        return this.id;
    }

    getEmpNumber(){
        return this.number;
    }
}

const emp1 = new Employee();
emp1.setEmpDetails('john', 1223435, 9870505050);
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpNumber());



//eg.3
class Student{

    setStuDetails(name, grade, marks){
        this.name = name;
        this.grade = grade;
        this.marks = marks;
    }

    getStuName(){
        return this.name;
    }

    getStuGrade(){
        return this.grade;
    }

    getStuMarks(){
        return this.marks;
    }

}

const stu2 = new Student();
stu2.setStuDetails('saguni', 10, 344);
console.log(stu2.getStuName());
console.log(stu2.getStuGrade());
console.log(stu2.getStuMarks());



//eg.4
class Vehicle{

    setVehicle(name, type){
        this.name = name;
        this.type = type;
    }

    getVehicleName(){
        return this.name;
    }

    getVehicleType(){
        return this.type;
    }
}

const vehi = new Vehicle();
vehi.setVehicle('Car', 'Four Wheeler');

console.log(vehi.getVehicleName());
console.log(vehi.getVehicleType());

