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
    connection.query('SELECT * FROM roles', function(err, rolesResults) {

        var roles = []
        for (let i = 0; i < rolesResults.length; i++) {
            roles.push({name: rolesResults[i].title, value: rolesResults[i].id })
        }
inquirer.prompt([
    {
        type: 'input',
        name: 'firstname',
        message: "What's your employee name",
      },

      {
        type: 'input',
        name: 'lastname',
        message: "What's your employee name",
      },

      {
        type: 'list',
        name: 'roleid',
        message: "What's your department id?",
        choices: roles
    },
]).then(function(answer){
    console.log(answer)
    connection.query('insert into employees(first_name, last_name, role_id) values(?,?,?)', [answer.firstname, answer.lastname, answer.roleid], function(err,result){
        console.log(result)
    })

})
});
}

function addRole(){

    connection.query('SELECT * FROM departments', function(err, deptResults) {

        var depts = []
        for (let i = 0; i < deptResults.length; i++) {
            depts.push({name: deptResults[i].name, value: deptResults[i].id })
        }

    
      inquirer.prompt([
            {
                type: 'input',
                name: 'rolename',
                message: "What's your role name",
            },

            {
                type: 'input',
                name: 'salaryamount',
                message: "What's your salary?",
            },

            {
                type: 'list',
                name: 'departmentid',
                message: "What's your department id?",
                choices: depts
            },
        ]).then(function(answer){
            console.log(answer)
            connection.query('insert into roles(title, salary, department_id) values(?,?, ?)', [answer.rolename, answer.salaryamount, answer.departmentid], function(err,result){
                console.log(result)
                console.log('errrrr',err)
            })
                
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

//     };