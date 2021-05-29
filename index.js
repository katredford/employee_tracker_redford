// get th e starter create connections mysql code form previos activity
const inquirer = require('inquirer')
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'p4st4batman',
    database : 'employee_tracker'
});

connection.connect();

connection.query('select * from departments', function(err, result) {
    // console.log(err,result)
})
/// inquiere stuff make a big list questions what do u want ot do ?? ['View all emps', 'view all depts' ec....]
inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What do you want to do?',
      choices: [
        'View Departments',
        'View Roles',
        'View Employees',
        'Add Department',
        'Add Role',
        'Add Employee',
        'Update Employee Role'
      ],
    }]).then(function(answer){
        // console.log(answer)
        if (answer.choice === 'View Departments'){
            viewDepartment()
        } 
        if (answer.choice === 'View Roles'){
            viewRoles()
        }
        if (answer.choice === 'View Employees'){
            viewEmployees()
        }
        if (answer.choice === 'Add Department'){
            addDepartment()
        }
        if (answer.choice === 'Add Role'){
            addRole()
        }
        if (answer.choice === 'Add Employee'){
            addEmployee()
        }
    });
// diffirent fucntinos to do each of those commands find all EMp functino findallDept function
function viewDepartment(){
    connection.query('select * from departments', function(err, result) {
        console.table(result);
    })
};

function viewRoles(){
    connection.query('select * from roles', function(err, result) {
        console.table(result);
    })
};

function viewEmployees(){
    connection.query('select * from employees', function(err, result) {
        console.table(result);
    })
};

function addEmployee(){
inquirer.prompt([
    {
        type: 'input',
        name: 'employeename',
        message: "What's your employee name",
      },
]).then(function(answer){
    console.log(answer)
    connection.query('insert into employees(name) values(?)', answer.employeename, function(err,result){
        console.log(result)
    })
});
}

function addRole(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'rolename',
            message: "What's your role name",
          },

    ]).then(function(answer){
        console.log(answer)
        connection.query('insert into roles(title) values(?)', answer.rolename, function(err,result){
            console.log(result)
           
            
            })
           
        })
    };
    
   
    function addDepartment(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'departmentname',
                message: "What's your department name",
              },
        ]).then(function(answer){
            console.log(answer)
            connection.query('insert into departments(name) values(?)', answer.departmentname, function(err,result){
                console.log(result)
            })
        });
        }
///inside each of your fucntions do the actiona SQL queires!! connecection.quer('SELECT * FROM departments') y stuff 

// function addRole(){
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'rolename',
//             message: "What's your role name",
//           },

//           {
//             type: 'input',
//             name: 'salaryamount',
//             message: "What's your salary?",
//           },
//     ]).then(function(answer){
//         console.log(answer)
//         connection.query('insert into roles(title, salary) values(?)', (answer.rolename, answer.salaryamount), function(err,result){
//             console.log(result)
           
            
//             })
           
//         })
//     };