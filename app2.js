const renderList = function (content) {
    console.log(content);
    $('.contacts').html(content);
}


const getList = function () {
    let contactList = '';
    for (let i = 0; i < employeeList.length; i++) {
        let name = employeeList[i].name;
        let officeNum = employeeList[i].officeNum;
        let phoneNum = employeeList[i].phoneNum;

        contactList += ` <div class="contactInfo"> <p> ${name}</p> <p> ${officeNum}</p> <p> ${phoneNum}</p> </div>`;

    }
    renderList(contactList);
}

let viewFinder = '';
const switchBoard = function () {
    console.log(viewFinder);

    switch (viewFinder) {
        case 'showView':
            break;
        case 'showAdd':
            addFn();
            break;
        case 'showVerify':
            verifyFn();
            break;
        case 'showUpdate':
            updateFn();
            break;
        case 'showDelete':
        deleteFn();
            break;
    };
};

const showVeri = function (cb) {
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

    $(".contactInfo").empty();
    getList();

    $(".contacts").show();
};

const verifyFn = function () {
    const verifyName = $('.nameForm').val();
    let response = 'Nope.';
    console.log(response);
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === verifyName) {
            response = 'Yes';
        };
    };
    showVeri(response);
};

const updateFn = function () {
    const updateName = $('.nameForm').val();
    const officeNum = $('.officeNumForm').val();
    const phoneNum = $('.phoneNumForm').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === updateName) {
            employeeList[i].officeNum = officeNum;
            employeeList[i].phoneNum = phoneNum;
            console.log(employeeList[i].phoneNum);
        };
    };
    $(".contactInfo").empty();
    getList();
    $(".contacts").show();
}

const deleteFn = function () {
    let updateName = $('.nameForm').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === updateName) {
        employeeList.splice(i,1);
        };
    };
    $(".contactInfo").empty();
    getList();
    $(".contacts").show();
}


    const showView = function () {
        $('.verifyShow').empty();
        $('.nameForm').hide();
        $('.officeNumForm').hide();
        $('.phoneNumForm').hide();
        $('.glass').hide();
        $('.contacts').show();
        viewFinder = "showView";

    };

    const showAdd = function () {
        $('.verifyShow').empty();
        $('.nameForm').show();
        $('.officeNumForm').show();
        $('.phoneNumForm').show();
        $('.glass').show();
        $('.contacts').hide();
        viewFinder = "showAdd";
    };

    const showVerify = function () {
        $('.contacts').hide();
        $('.officeNumForm').hide();
        $('.phoneNumForm').hide();
        $('.nameForm').show();
        $('.glass').show();
        viewFinder = "showVerify";
    };

    const showUpdate = function () {
        $('.verifyShow').empty();
        $('.contacts').hide();
        $('.officeNumForm').show();
        $('.phoneNumForm').show();
        $('.nameForm').show();
        $('.glass').show();
        viewFinder = "showUpdate";
    };

    const showDelete = function () {
        $('.verifyShow').empty();
        $('.contacts').hide();
        $('.officeNumForm').hide();
        $('.phoneNumForm').hide();
        $('.nameForm').show();
        $('.glass').show();
        viewFinder = "showDelete";
    };

    // remember to add generate onload for view to work
    $("contacts").on('onload', getList());
    $("#view").on('click', showView);
    $("#add").on('click', showAdd);
    $("#verify").on('click', showVerify);
    $("#update").on('click', showUpdate);
    $("#delete").on('click', showDelete);
    $('.glass').on("click", switchBoard);


