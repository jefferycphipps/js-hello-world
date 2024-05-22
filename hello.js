/*  
Welcome, new coder. 
Enter your code on line 7 to print 'Hello, World!' 
to the console (the panel on the right)
*/

console.log("\"Nevermore\"");
console.log(10+7);
/*  
Next, PLAY! 
Modify your code on line 7 to try to accomplish the tasks listed below:

   1. Change the message that is printed.
   Hello to the console
   Changed to New Test -JCP
   2. Figure out what the parentheses do. Will the code work without them?
   Code will not work without them
      Uncaught SyntaxError C:\Users\j_inf\Documents\LaunchCode\js-hello-world\hello.js:7
      console.log"New test";
               ^^^^^^^^^^

      SyntaxError: Unexpected string
         at wrapSafe (internal/modules/cjs/loader:1281:20)
         at Module._compile (internal/modules/cjs/loader:1321:27)
         at Module._extensions..js (internal/modules/cjs/loader:1416:10)
         at Module.load (internal/modules/cjs/loader:1208:32)
         at Module._load (internal/modules/cjs/loader:1024:12)
         at executeUserEntryPoint (internal/modules/run_main:174:12)
         at <anonymous> (internal/main/run_main_module:28:49)
      loader:1281
      Process exited with code 1
   It lets the program know that the stuff in the middle is the parameter for the method/function.
   3. Remove one or both quotation marks. Do we need to include both opening and closing quote marks? Is there a difference between using a single or a double quote (' vs. ")?
         Uncaught SyntaxError C:\Users\j_inf\Documents\LaunchCode\js-hello-world\hello.js:7
      console.log("New test);
            ^^^^^^^^^^^
      Worked with ' ' 
   It did not change the program in this case. In other languages it might. 
   4. Remove the semi-colon, ;.
   The semicolon did not make a difference. In other languages it might.
   Worked without a semicolon
   5. Print a number. (Bonus: Print two numbers added together).
   Done
   6. Print multiple messages one after the other.
   Done
   7. Print two messages on the same line.
   Done
   8. Print a message that contains quote marks, such as Quoth the Raven "Nevermore".
   console.log("\"Nevermore\"");
   9. Other. You choose!
*/