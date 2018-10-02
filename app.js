const renderView = function (){
    for (i = 0; i < employeeList.length; i++) {
        let name = employeeList[i].name;
        let officeNum = employeeList[i].officeNum;
        let phoneNum = employeeList[i].phoneNum;
        $(".contacts").append(` <div class="contactInfo"> <p> ${name}</p> <p> ${officeNum}</p> <p> ${phoneNum}</p> </div>`);
    }
};
renderView();