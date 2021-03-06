const renderView = function () {
    for (i = 0; i < employeeList.length; i++) {
        let name = employeeList[i].name;
        let officeNum = employeeList[i].officeNum;
        let phoneNum = employeeList[i].phoneNum;
        $(".contacts").append(` <div class="contactInfo"> <p> ${name}</p> <p> ${officeNum}</p> <p> ${phoneNum}</p> </div>`);
    }
};



const showVeri = function(cb) {
    $('.verifyShow').html(`<p> ${cb} </p>`);
};

const addFn = function () {
    const name1 = $(".nameForm").val();
    const offNum = $(".officeNumForm").val();
    const phoneNum = $(".phoneNumForm").val();
    employeeList.push({
        name: name1,
        officeNum: offNum,
        phoneNum: phoneNum
    });

    $(".contacts").empty();
    renderView();
    $(".contacts").show();
};

const verifyFn = function () {
    const verifyName = $('.nameForm').val();
    let response = 'Nope.';
    console.log(response);
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === verifyName) {
           response = 'Yes';
        }
    }
    showVeri(response);
};

const showView = function () {
    $('.verifyShow').empty();
    $('.nameForm').hide();
    $('.officeNumForm').hide();
    $('.phoneNumForm').hide();
    $('.glass').hide();
    $('.contacts').show();

};

const showAdd = function () {
    $('.glass').addClass('addTog');
    $('.glass').addClass('verifyTog');
    $('.glass').addClass('UpdateTog');
    $('.glass').removeClass('verifyTog');
    $('.glass').removeClass('UpdateTog');
    $('.verifyShow').empty();
    $('.nameForm').show();
    $('.officeNumForm').show();
    $('.phoneNumForm').show();
    $('.glass').show();
    $('.contacts').hide();
    // $('.glass').toggleClass('verifyTog');
    // $('.glass').toggleClass('updateTog');
    $(".addTog").on('click', addFn);
};

const showVerify = function () {
    $('.glass').addClass('addTog');
    $('.glass').addClass('verifyTog');
    $('.glass').addClass('UpdateTog');
    $('.glass').removeClass('addTog');
    $('.glass').removeClass('UpdateTog');
    $('.contacts').hide();
    $('.officeNumForm').hide();
    $('.phoneNumForm').hide();
    $('.nameForm').show();
    $('.glass').show();
    // $('.glass').toggleClass('addTog');
    // $('.glass').toggleClass('updateTog');
    $('.verifyTog').on("click", verifyFn);

};

renderView();
$("#view").on('click', showView);
$("#add").on('click', showAdd);
$("#verify").on('click', showVerify);