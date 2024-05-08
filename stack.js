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
        return;
      }
      return this.all.pop();
    }
  
    peekLast() {
      if (this.isEmpty()) {
        console.log("all is empty");
        return;
      }
      return this.all[this.length() - 1];
    }
  
    peekFirst() {
      if (this.isEmpty()) {
        console.log("all is empty");
        return;
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
  
  const all = new Stack();
  all.push(10);
  all.push(20);
  all.push(30);
  all.print(); 
  console.log("Peek Last:", all.peekLast()); 
  console.log("Peek First:", all.peekFirst()); 
  console.log("Popped item:", all.pop()); 
  all.print();
  