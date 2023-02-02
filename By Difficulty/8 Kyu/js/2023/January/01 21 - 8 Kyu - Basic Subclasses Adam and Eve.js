/*
Instruction:

You have to do God's job. The creation method must return an array of length 2 
containing objects (representing Adam and Eve). 

The first object in the array should be an instance of the class Man. 

The second should be an instance of the class Woman. 

Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

*/

//  Codewars - Traditional Class

class God{
  /**
   * @returns Human[]
   */
    static create(){
      return [ new Man('Adam'), new Woman('Eve') ]
    }
  }
  
  class Human {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Man extends Human {
    constructor(name) {
      super(name);
    }
  }
  
  class Woman extends Human {
    constructor(name) {
      super(name);
    }
  }

//  Codewars - Best Practice

class God{
  /**
   * @returns Human[]
   */
    static create(){
      return [new Man, new Woman];
    }
  }
  class Human{}
  class Man extends Human{}
  class Woman extends Human{}

//  Codewars

class God{
  static create(){
    return [new Man('Adam'), new Woman('Eve')]
  }
};
class Human{
  constuctor(name){
    this.name = name;
  }
};
class Man extends Human{};
class Woman extends Human{};