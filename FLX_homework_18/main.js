function createRequest(method, url, sendData = null, callback = function(){}) {
  let data = sendData;
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  if( method ==='PUT') {
    let json = JSON.stringify(data);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
      let users = xhr.responseText;
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.log(xhr.status + ': ' + xhr.statusText);
      } else {
        console.error(xhr.status + ': ' + xhr.statusText);
      }
    }
    xhr.send(json);
    return false;
  } else if(method === 'GET') {
    xhr.send(data);
    xhr.onreadystatechange = function () {
  	 if (xhr.readyState != 4) return;
      if (xhr.status === 200) {
          console.log( xhr.status + ': ' + xhr.statusText );
          callback(JSON.parse(xhr.responseText));
      } else {
    	 console.error( xhr.status + ': ' + xhr.statusText );
      }
    }
  }  
}

function userListIterator(list) {
  list.forEach(el => {
    createUserCard(el);
  });
}		

function createUserCard(user) {
	let {
    	id: id,
    	address: {city, street, suite},
    	company: {name: companyName},
    	name: userName,
    	phone: userphone,
    	email: email
    } = user;

  let cardTemplate = `
      <div class="card_main">
	  		<div class="card-main_image">
	    		<img class="image">
	  		</div>
	  		<div class="card_main-info">
	    		<p class="username"><a href="#" class="userName">${userName}</a></p>
	    		<div class="company">company: ${companyName}</div>
	    		<br />
	    		<div class="actions">
	      			<button class="button edit-btn" type="submit">Edit</button>
	      			<button class="button delete-btn" type="submit">Delete</button>
	    		</div>
	  		</div>
  		</div>
  		<div class="card_contacts">
    		<div class="Card_contacts-address">
      			<p>address:</p>
      			<div class="city">City: ${city}</div>
      			<div class="street">Street: ${street}</div>
      			<div class="suite">Building: ${suite}</div>
    		</div>
    		<div class="Card_contacts-phone">
    		    <p>contacts:</p>
      			<div class="userphone">phone: ${userphone}</div>
      			<div class="email">email: ${email}</div>
    		</div>
  		</div>
  	`;

  let card = document.createElement('div');
	card.classList.add('card');
	card.innerHTML = cardTemplate;

	let image = card.getElementsByClassName('image')[0];
  getRandomImage().then(res => image.src = res);

	let container = document.getElementsByClassName('container')[0];
	container.appendChild(card);

	let deleteBtn = card.getElementsByClassName('delete-btn')[0];
  deleteBtn.onclick =  () => {
	  if(confirm('Delete this post?')) {
	    createRequest('DELETE', `https://jsonplaceholder.typicode.com/users/${id}`);
      card.remove();
    }
  }

  let editButton = card.getElementsByClassName('edit-btn')[0];
  editButton.onclick = function(event) {
    let target = event.target;
    createEditUserModal(target, user); 
  }
}

async function getRandomImage() {
  try {
    showLoader();
    const request = await fetch('https://api.thecatapi.com/v1/images/search');
    const text = await request.text();
    removeLoader();
    return JSON.parse(text)[0].url;

  }
  catch (error) {
    console.log(`ERROR: ${error.stack}`);
    removeLoader();
  }
}

function createEditUserModal(target, user) {
  let modalTemplate = `  
      <div class="modal-title">Edit user card:</div>  
      <form method="get" class="modal_form">
          <div class="modal_form-name">
            <label for="name">New name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div class="modal_form-company">
            <label for="company">New company:</label>
            <input type="text" name="company" id="company" />
          </div>
          <div class="modal_form-email">
            <label for="email">New Email: </label>
            <input type="email" name="email" id="email" />
          </div>
          <div class="modal_form-phone">
            <label for="phone">New Phone: </label>
            <input name="phone" id="phone" />
          </div>
          <div class="modal_form-city">
            <label for="city">New City: </label>
            <input name="city" id="city" />
          </div>
          <div class="modal_form-street">
            <label for="street">New Street: </label>
            <input name="street" id="street" />
          </div>
          <div class="modal_form-suite">
            <label for="suite">New Building: </label>
            <input name="suite" id="suite" />
          </div>
          <div class="modal_form-btns">
            <input class="modal_form-submit button" type="button" value="Submit" />
            <input class="modal_form-cancel button" type="button" value="Cancel" />
          </div>
      </form>
  `;

  let modalWindow = document.createElement('div');
  modalWindow.classList.add('modal');
  modalWindow.innerHTML = modalTemplate;

  let container = document.getElementsByTagName('body')[0];
  container.appendChild(modalWindow);

  let modalName = modalWindow.querySelector('#name');
  let modalCompany = modalWindow.querySelector('#company');
  let modalEmail = modalWindow.querySelector('#email');
  let modalPhone = modalWindow.querySelector('#phone');
  let modalCity = modalWindow.querySelector('#city');
  let modalStreet = modalWindow.querySelector('#street');
  let modalSuite = modalWindow.querySelector('#suite');

  let {
      id: id,
      address: {city, street, suite},
      company: {name: companyName},
      name: userName,
      phone: userphone,
      email: email
    } = user;
  console.log(user);
  modalName.value = userName;
  modalCompany.value = companyName;
  modalEmail.value = email;
  modalPhone.value = userphone;
  modalCity.value = city;
  modalStreet.value = street;
  modalSuite.value = suite;

  let cancelButton = document.getElementsByClassName('modal_form-cancel')[0];
  cancelButton.onclick = () => modalWindow.remove();

  let submitButton = modalWindow.querySelector('.modal_form-submit');
  submitButton.onclick = function() {
    let changedUser = Object.assign({}, user);
    changedUser['id'] = user['id'];
    changedUser['address']['city'] = modalCity.value; 
    changedUser['address']['street'] =  modalStreet.value;
    changedUser['address']['suite']  = modalSuite.value;
    changedUser['company']['name'] = modalCompany.value;
    changedUser['name'] =  modalName.value;
    changedUser['phone'] = modalPhone.value;
    changedUser['email'] = modalEmail.value;

    console.log(changedUser);
    createRequest('PUT', `https://jsonplaceholder.typicode.com/users/${user.id}`, changedUser);
    UptadeUser(target,changedUser);
    modalWindow.remove();
  }
}

function UptadeUser(target,data) {
  console.log(data);
  let {
    id: id,
    address: {city, street, suite},
    company: {name: companyName},
    name: userName,
    phone: userphone,
    email: email
  } = data;

  const container = document.querySelector('.container');
 
  while(target.className !== 'container') {
    if(target.className === 'card') {
      const newName = target.querySelector('.userName');
      const newCompany = target.querySelector('.company');
      const newEmail = target.querySelector('.email');
      const newPhone = target.querySelector('.userphone');
      const newCity = target.querySelector('.city');
      const newStreet = target.querySelector('.street');
      const newSuite = target.querySelector('.suite');

      newName.innerHTML = userName;
      newCompany.innerHTML = `company: ${companyName}`;
      newCity.innerHTML = `City: ${city}`;
      newStreet.innerHTML = `Street: ${street}`;
      newSuite.innerHTML = `Building: ${suite}`;
      newPhone.innerHTML = `phone: ${userphone}`;
      newEmail.innerHTML = `email: ${email}`;
      return;
    }
    target = target.parentNode;
  }
}

function showLoader() {
  let loaderTemplate = `
  <div class="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  `;
  let spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = loaderTemplate;
  

  let container = document.querySelectorAll('.card-main_image');
  container.forEach(el => el.appendChild(spinner));
  
}

function removeLoader() {
  let spinners = document.querySelectorAll('.spinner');
  spinners.forEach(el => el.remove() );

}
createRequest('GET', 'https://jsonplaceholder.typicode.com/users' , null,  userListIterator); 









 
    