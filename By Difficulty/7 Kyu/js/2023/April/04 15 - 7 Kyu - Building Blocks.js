/*
Instruction:

The constructor should take an array as an argument, 
this will contain 3 integers of the form [width, length, height] 
from which the Block should be created.

Examples
    let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
    b.getWidth() // -> 2
    
    b.getLength() // -> 4
    
    b.getHeight() // -> 6
    
    b.getVolume() // -> 48
    
    b.getSurfaceArea() // -> 88

*/

//  My Solution

class Block{

  constructor(data){
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }
  
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }
  getVolume() {
    return this.width * this.length * this.height;
  }
  getSurfaceArea() {
    return 2 * (this.width * this.length + this.width * this.height + this.length * this.height);
  }
}

//  Codewars - Best Practice

class Block{

  constructor(data){
    [this.w, this.l, this.h] = data;
  }
  
  getWidth() {
    return this.w;
  }
  getLength() {
    return this.l;
  }
  getHeight() {
    return this.h;
  }
  getVolume() {
    let {w, l, h} = this;
    return w * l * h;
  }
  getSurfaceArea(){
    let {w, l, h} = this;
    return 2 * (l*w + l*h + w*h);
  }
}