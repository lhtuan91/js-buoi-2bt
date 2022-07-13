// bài 3:

/***
 * INPUT: 3 số nguyên, in ra cách đọc nó
 * 
 * PROCESS:
 * 1. lấy input
 * 2. tính
 * 3. log ra màn hình
 * OUTPIT: cách đọc của 3 số nguyên
 */

 var a = 2 % 10;
 var b = (30 / 10) % 10;
 var c = 200 / 100;
 
 if (a,b,c < 100 || a,b,c > 500) {
     console.log("cách đọc của 3 số nguyên là:");
 }else{
     switch(c){
         case 1: console.log("Một trăm ");
         break;
         case 2: console.log("Hai trăm ");
         break;
         case 3: console.log("Ba trăm ");
         break;
         case 4: console.log("Bốn trăm ");
         break;
         case 5: console.log("Năm trăm ");
         break;
     }
 }
 if(b % 10 == 0 && a != 0){
     console.log("lẻ ",b);
   }else{
   switch(b){
     case 1: console.log("mười ");
     break;
     case 2: console.log("hai mươi ");
     break;
     case 3: console.log("ba mươi ");
     break;
     case 4: console.log("bốn mươi ");
     break;
   }
 }
   switch(a){
     case 1: console.log("một ");
     break;
     case 2: console.log("hai ");
     break;
     case 3: console.log("ba ");
     break;
   }