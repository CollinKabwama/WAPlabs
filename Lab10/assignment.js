//Number one 
/*
There are 6 callback queues in Node.js
The call backs are executed in the order below;
1. Timers Queue: Manages callbacks for setTimeout and setInterval functions.
2. I/O Queue (or Poll Queue): Handles callbacks for I/O-related operations, such as file system operations, network requests.
3. Idle, prepare: Mainly used for internal use
4. Poll: Retrieves new I/O evernts; execute I/O related callbacks
5. Check Queue: Contains callbacks scheduled by setImmediate.
6. Close Queue: Manages callbacks related to close events, like closing a socket or a file.
*/

// Number 2
/*
start
end
nextTick 1
nextTick 2
Promise...1
Promise...2
timeout 1
timeout 2
nextTick 3
timeout 3
*/

// Number 3

/*
timeout
readFile....
Immediate


*/

//Number 4

/*   

Node.js
undefined

Browser
"Hello World"

The output is different because when you exscute the code in the 
browser the message variable is added to the window which is
the global environment whereas while usin node, the message variable isn'y
added to global.

*/


// Number 5
/*

getName is not a function so it will be an error since getName is an object
It can be rectified by using getName.getName()

*/

// Number 6
/*

Josh Edward

*/


// Number 7
/*

 Josh Edward

 */


// Number 8
/*

 { firstname: 'John' , lastname: 'Smith' }

*/