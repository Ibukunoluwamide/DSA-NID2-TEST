class Stack {
    constructor() {
      this.all = [];
    }
  
    length() {
      return this.all.length;
    }
  
    push(item) {
      this.all.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("all is empty, nothing to pop");
      }
      return this.all.pop();
    }
  
    peekLast() {
      if (this.isEmpty()) {
        console.log("all is empty");
      }
      return this.all[this.length() - 1];
    }
  
    peekFirst() {
      if (this.isEmpty()) {
        console.log("all is empty");
      }
      return this.all[0];
    }
  
    isEmpty() {
      return this.length() === 0;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("is empty");
      }
      console.log(this.all);
    }
  }
  
  const q1 = new Stack();
  q1.push(10);
  q1.push(20);
  q1.push(30);
  q1.print(); 
  console.log("Peek Last:", q1.peekLast()); 
  console.log("Peek First:", q1.peekFirst()); 
  console.log("Popped item:", q1.pop()); 
  q1.print();
  