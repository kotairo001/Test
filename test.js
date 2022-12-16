//* Bai 1
// let string = "program";
// let array = string.split('');
// let reverseArray = [];
// // console.log(array)
// for(i=array.length-1;i>=0;i--) {
//     reverseArray.push(array[i]);
// }
// console.log(reverseArray)
// let reverseString = reverseArray.join("")
// console.log(reverseString);

//* Bai 2
// let string = "hEllo world";
// let lowerCase = string.toLowerCase();
// lowerCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1,6) + lowerCase.charAt(6).toUpperCase() + lowerCase.slice(7)
// console.log(lowerCase);

//* Bai 3
// let array = [1,2,1,1,6,2,8,9]
// for (i=0;i<array.length;i++) {
//     for(j=0;j<i;j++) {
//         if(array[i]==array[j]) {
//             array.splice(j,1);
//         }
//     }

// }
// console.log(array);

//*Bai 4
// let array = [5, 4, 2, 9, 8, 7];
// let sortArray = [];
// let temp;
// for (i = 0; i <array.length; i++) {
//     for(j=i;j<array.length;j++) {
//         if(array[i]>array[j]) {
//             temp=array[i];
//             array[i] = array[j];
//             array[j] = temp
//         }
//     }
// }
// console.log(array)

//* Bai 5
//TODO Create
// let container = document.getElementById("container");

//TODO Read
// function renderList(list) {
//   let data = `
//     <table>
//     <tr>
//         <th>No.</th>
//         <th>Name</th>
//         <th col-span=2>Action</th>
//     </tr>
// `;
//   for (i = 0; i < list.length; i++) {
//     data += `
//           <tr>
//               <td>${i + 1}</td>
//               <td>${list[i]}</td>
//               <td>
//               <input type="button" value="Edit" id="editBtn" onclick="editInfo(${i})">
//               </td>
//               <td>
//               <input type="button" value="Delete" id="deleteBtn" onclick="deleteInfo(${i})">
//               </td>
//           </tr>
//           `;
//   }
//   data += `</table>`;
//   container.innerHTML = data;
// }

//TODO Update
// let addBtn = document.getElementById("addBtn");
// let inputText = document.getElementById("inputText");

// function showList() {
//   let listName = JSON.parse(localStorage.getItem("listName"));
//   if (listName == null) {
//     listStaff = [];
//     listStaff.push(inputText.value);
//     localStorage.setItem("listName", JSON.stringify(listStaff));
//     renderList(listStaff);
//   } else {
//     listName.push(inputText.value);
//     localStorage.setItem("listName", JSON.stringify(listName));
//     renderList(listName);
//   }
//   inputText.value = "";
// }
// addBtn.addEventListener("click", showList);

// let listName = JSON.parse(localStorage.getItem("listName"));
// renderList(listName);

// function editInfo(i) {
//   let listName = JSON.parse(localStorage.getItem("listName"));
//   inputText.value = listName[i];
//   localStorage.setItem("key", i);
// }

// let updateBtn = document.getElementById("updateBtn");
// function updateInfo() {
//   let listName = JSON.parse(localStorage.getItem("listName"));
//   let key = JSON.parse(localStorage.getItem("key"));
//   console.log(key)
//   listName[key] = inputText.value;
//   inputText.value = "";
//   localStorage.setItem("listName", JSON.stringify(listName));
//   renderList(listName);
// }
// updateBtn.addEventListener("click",updateInfo)

//TODO Delete
// function deleteInfo(i) {
//   let listName = JSON.parse(localStorage.getItem("listName"));
//   listName.splice(i, 1);
//   localStorage.setItem("listName", JSON.stringify(listName));
//   renderList(listName);
// }

//* Bai 6
//TODO A
// let date = prompt("Input the date you like!");
// let splitDate = date.split("/");
// console.log(splitDate);
// console.log(parseInt(splitDate[0]));

// function validateDate() {
//   let flag = false;
//   if (parseInt(splitDate[0]) >= 1 && parseInt(splitDate[0]) <= 31) {
//     flag = true;
//   } else {
//     flag = false;
//   }
//   if (flag == false) {
//     alert("You have to input the right date!");
//   }
//   return flag;
// }
// validateDate();

// function validateMonth() {
//   let flag = false;
//   if (parseInt(splitDate[1]) >= 1 && parseInt(splitDate[1]) <= 12) {
//     flag = true;
//   } else {
//     flag = false;
//   }
//   if (flag == false) {
//     alert("You have to input the right month!");
//   }
//   return flag;
// }
// validateMonth();

// function checkFeb() {
//   let flag = false;
//   if (parseInt(splitDate[1]) != 2) {
//     flag = true;
//   } else {
//     flag = false;
//   }
//   if (flag == false && parseInt(splitDate[0]) > 29) {
//     alert("Febuary doesn't have more than 29 days");
//   }
//   return flag;
// }
// checkFeb();

// function checkOddMonth() {
//   let flag = true;
//   if (parseInt(splitDate[0]) >= 1 && parseInt(splitDate[0]) <= 31) {
//     switch (parseInt(splitDate[1])) {
//       case 1:
//         flag = true;
//         break;
//       case 3:
//         flag = true;
//         break;
//       case 5:
//         flag = true;
//         break;
//       case 7:
//         flag = true;
//         break;
//       case 8:
//         flag = true;
//         break;
//       case 10:
//         flag = true;
//         break;
//       case 12:
//         flag = true;
//         break;
//       default:
//         flag = false;
//         break;
//     }
//   }
//   if (splitDate[1] != 2) {
//     if (flag == false && parseInt(splitDate[0]) > 30) {
//       alert("This month has only 30 days");
//     }
//   }
//   return flag;
// }
// checkOddMonth();

// function checkYear() {
//   let flag = false;
//   if (
//     (parseInt(splitDate[2]) % 4 == 0 && parseInt(splitDate[3]) % 100 != 0) ||
//     (parseInt(splitDate[2]) % 100 == 0 && parseInt(splitDate[3]) % 400 == 0)
//   ) {
//     flag = true;
//   } else {
//     flag = false;
//   }
//   if (flag == false && parseInt(splitDate[1]) == 2) {
//     if (parseInt(splitDate[0]) > 28) {
//       alert("This is not a leap year!");
//     }
//   }
//   return flag;
// }
// checkYear();

//TODO B
// function showNextDay() {
//   let nextday;
//   if (validateDate() == true && validateMonth() == true) {
//     nextday =
//       "The next day is " +
//       (parseInt(splitDate[0]) + 1) +
//       "/" +
//       parseInt(splitDate[1]) +
//       "/" +
//       parseInt(splitDate[2]);
//     if (checkOddMonth() == true && parseInt(splitDate[0]) == 31) {
//       splitDate[0] = 1;
//       nextday =
//         "The next day is " +
//         splitDate[0] +
//         "/" +
//         (parseInt(splitDate[1]) + 1) +
//         "/" +
//         parseInt(splitDate[2]);
//       if (parseInt(splitDate[1]) == 12) {
//         // console.log("111111")
//         splitDate[0] = 1;
//         splitDate[1] = 1;
//         nextday =
//           "The next day is " +
//           splitDate[0] +
//           "/" +
//           splitDate[1] +
//           "/" +
//           (parseInt(splitDate[2]) + 1);
//       }
//     } else if (checkOddMonth() == false) {
//       if (parseInt(splitDate[0]) == 30) {
//         splitDate[0] = 1;
//         nextday =
//           "The next day is " +
//           splitDate[0] +
//           "/" +
//           (parseInt(splitDate[1]) + 1) +
//           "/" +
//           parseInt(splitDate[2]);
//       } else {
//         if (checkFeb() == false && checkYear() == false) {
//           if (parseInt(splitDate[0]) == 28) {
//             splitDate[0] = 1;
//             nextday =
//               "The next day is " +
//               splitDate[0] +
//               "/" +
//               (parseInt(splitDate[1]) + 1) +
//               "/" +
//               parseInt(splitDate[2]);
//           }
//         } else if (checkFeb() == false && checkYear() == true) {
//           if (parseInt(splitDate[0]) == 29) {
//             splitDate[0] = 1;
//             nextday =
//               "The next day is " +
//               splitDate[0] +
//               "/" +
//               (parseInt(splitDate[1]) + 1) +
//               "/" +
//               parseInt(splitDate[2]);
//           }
//         }
//       }
//     }
//   }
//   console.log(nextday);
// }

// showNextDay();
