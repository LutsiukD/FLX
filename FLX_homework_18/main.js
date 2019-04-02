function createRequest(method, url, callback = function(){}, sendData = null) {
  let data = sendData;
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.send(data);
  xhr.onreadystatechange = function () {
  	if (xhr.readyState != 4) return;
    if (xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
    } else {
    	console.error( xhr.status + ': ' + xhr.statusText );
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
	    		<p class="username"><a href="#">${userName}</a></p>
	    		<div>company: ${companyName}</div>
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
      			<div>City: ${city}</div>
      			<div>Street: ${street}</div>
      			<div>Building: ${suite}</div>
    		</div>
    		<div class="Card_contacts-phone">
    		    <p>contacts:</p>
      			<div>phone: ${userphone}</div>
      			<div>email: ${email}</div>
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
}


async function getRandomImage() {
  try {
    const request = await fetch('https://api.thecatapi.com/v1/images/search');
    const text = await request.text();
    return JSON.parse(text)[0].url;
  }
  catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

createRequest('GET', 'https://jsonplaceholder.typicode.com/users' , userListIterator); 