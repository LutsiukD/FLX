import './style.scss';
import {createStore} from 'redux';
import reducer from './reducers/reducer.js';

import UserList from './components/userList';
import Search from './components/search';

const store = createStore(reducer);

const search = new Search();
search.render();

const root = document.getElementById('root');
root.addEventListener('click', dispatchActions);
const usersListContainer = document.createElement('div');
usersListContainer.classList.add('users-list__container');
root.appendChild(usersListContainer);

function dispatchActions(e) {
    if (e.target.className === 'removeBtn') {
        store.dispatch({
            type: 'REMOVE',
            id: e.target.dataset.id
        });
    }
    if (e.target.className === 'load-more__btn') {
        store.dispatch({
            type: 'MORE'
        });
    }
}

function showUserList() {
    const userList = new UserList(store.getState(), usersListContainer);
    document
        .querySelector('.user-search__form')
        .addEventListener('keyup', () => userList.filterUsers());
    userList.render();
}

store.subscribe(showUserList);
document.onload = showUserList();