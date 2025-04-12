function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

  logState: function() {
    console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);},

  markCompleted: function() {
    this.complete = true;
    }
  }
  return task;
};

const task1 = newTask("Clean Cat litter", "Take all the ⏰ out of the litter box");
const task2 = newTask("Do laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed);
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

task1.title
task1.markCompleted();
