function Company(obj) {
	let _name = obj.name;
	let _owner = obj.owner;
	let _maxCount = obj.maxCompanySize;
	let _employeeList = [];
	let _logs = `${_name} was created in ${new Date()}\n`;
	let _one = 1;
	let _zero = 0;

	this.findMinEmployee = function() {
		let employeeWithMinSalary;
		if(_employeeList.length > _zero) {
			if(_employeeList.length > _one) {
				for(let i = 1; i < _employeeList.length; i++) {
					if(_employeeList[i].getSalary() < _employeeList[i-_one].getSalary()) {
						employeeWithMinSalary = _employeeList[i];
					}
				}
			} else {
				employeeWithMinSalary = _employeeList[_zero];
			}
		} else {
			console.log('There is no employees in this company.');
		}
		return employeeWithMinSalary;
	}

	this.getDate = function() {
		return new Date();
	}

	this.addNewEmployee = function(newEmployee) {
		if(arguments.length === _one && newEmployee instanceof Employee) {
			if(_employeeList.length >= _maxCount) {
				let index = _employeeList.indexOf(this.findMinEmployee());
				this.removeEmployee(index);
			}
			
			_employeeList.push(newEmployee);
			newEmployee.hire(_name);
			_logs += `${newEmployee.name} starts working at ${_name} in ${new Date()}\n`;
		} else {
			console.log('Please try to add Employee instance');
		}
	}

	this.removeEmployee = function(id) {
		_employeeList[id].fire();
		_logs += `${_employeeList[id].name} ends working at ${_name} in ${new Date()}\n`
		_employeeList.splice(id, _one);	
	}

	this.getHistory = function() {
		return _logs;
	}

	this.getAvarageSalary = function() {
		let sum = _employeeList.reduce(function (temp, obj) { 
			return temp + obj.getSalary(); 
		}, _zero); 
        return sum / _employeeList.length;
	}

	this.getEmployees = function() {
		return _employeeList;
	}

	this.getAvarageAge = function() {
		let sum = _employeeList.reduce(function (temp, obj) { 
			return temp + obj.getAge(); 
		}, _zero);
		return sum / _employeeList.length;
	}

	this.getFormattedListOfEmployees = function() {
		let formattedListOfEmoloyees = [];
		for(let i = 0; i < _employeeList.length; i++) {
			let timeTemplate = _employeeList[i].getWorkTimeInSeconds();
			let listTemplate = `${_employeeList[i].name} - works in ${_name} ${timeTemplate} seconds.`;
			formattedListOfEmoloyees.push(listTemplate);
		}
		return formattedListOfEmoloyees;
	}
}

function Employee(obj) {
	this.name = obj.name;
	let _primarySkill = obj.primarySkill;
	let _age = obj.age;
	let _salary = obj.salary;
	let _currentCompany = null;
	let _historyLog = '';
	let _whenHired;
	let _experience = 0;

	this.getAge = function() {
		return _age;
	}

	this.getSalary = function() {
		return _salary;
	}

	this.setSalary = function(newSalary) {
		if(newSalary > _salary) {
			_historyLog += `change salary from ${_salary} to ${newSalary}.\n`;
			_salary = newSalary;
		} else {
			_historyLog += `try to change salary from ${_salary} to ${newSalary}.\n`;
		}
	}

	this.getWorkTimeInSeconds = function() {
		if(_currentCompany !== null) {
			let now = new Date();
			let currentCompanyExp = now.getSeconds() - _whenHired.getSeconds();
			return currentCompanyExp + _experience;
		} else {
			return _experience;
		}
		
	}

	this.hire = function(companyName) {
		_whenHired = new Date();
		_historyLog += `${this.name} is hired to ${companyName} in ${_whenHired}.\n`;
		_currentCompany = companyName;
	}

	this.fire = function() {
		let whenFired = new Date();
		_experience += _whenHired.getSeconds() - whenFired.getSeconds();
		_historyLog += `${this.name} is fired from ${_currentCompany} in ${whenFired}.\n`;
		_currentCompany = null;
	}
	this.getHistory = function() {
		return _historyLog;
	}
}




