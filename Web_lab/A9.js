// PART B
let events = new Set();
let event1 = { type: "concert", day: "Saturday" };
let event2 = { type: "book launch", day: "Wednesday"};
let event3 = { type: "conference", day: "Thursday"};
let event4 = { type: "meet up", day: "Monday" };
let event5 = { type: "meet up", day: "Monday" };
events.add(event1);
events.add(event2);
events.add(event3);
events.add(event4);
events.add(event1);
for (let item of events) {
  console.log(item);
}