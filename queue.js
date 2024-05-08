class Queue {
    constructor() {
      this.queue = {};
      this.first = 0;
      this.last = -1;
      this.length = 0;
      this.capacity = 10; 
    }
  
    isFull() {
      return this.length === this.capacity;
    }
  
    isEmpty() {
      return this.length === 0;
    }
  
    enqueue(item) {
      if (this.isFull()) {
        console.log("Queue is full!");
        return;
      }
  
      this.last++;
      this.queue[this.last] = item;
      this.length++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty!");
        return;
      }
  
      const dequeuedItem = this.queue[this.first];
      delete this.queue[this.first];
      this.first++;
      this.length--;
      return dequeuedItem;
    }
  
    size() {
      return this.length;
    }
  }
  
  const q1 = new Queue();
  q1.isEmpty()
  console.log(q1); 
  
  q1.enqueue(10);
  q1.enqueue(20);
  q1.enqueue(30);
  console.log(q1); 
  q1.size()
  console.log(q1); 
  q1.dequeue();
  console.log(q1) 
  q1.size()
  console.log(q1); 
  