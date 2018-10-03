const renderView = function (){
    for (i = 0; i < employeeList.length; i++) {
        let name = employeeList[i].name;
        let officeNum = employeeList[i].officeNum;
        let phoneNum = employeeList[i].phoneNum;
        $(".contacts").append(` <div class="contactInfo"> <p> ${name}</p> <p> ${officeNum}</p> <p> ${phoneNum}</p> </div>`);
    }
};
renderView();


const addFn = function(){
    const name1 = $(".nameForm").val();
    const offNum = $(".officeNumForm").val();
    const phoneNum = $(".phoneNumForm").val();
    let i = employeeList.length;
    employeeList[i].name = name1;
    employeeList[i].officeNum = offNum;
    employeeList[i].phoneNum = phoneNum;
}

const showView = function() {
$('form').hide();
$('.glass').hide();
};

const showAdd = function (){
    $('form').show();
    $('.glass').show();
    addFn();
    renderView();
};



$("#view").on('click', showView);
$("#add").on('click', showAdd);