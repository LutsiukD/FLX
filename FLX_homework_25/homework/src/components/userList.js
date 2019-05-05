import Users from './users';
import UsersTableHeader from './usersTableHeader';
import LoadMoreUsers from './loadMoreUsers';


class UserList {
    constructor(state, container) {
        this.state = state;
        this.container = container;
        this.usersData = this.state.data.slice(0, this.state.limit);
        this.usersOutput = new Users();
        this.loadMore = new LoadMoreUsers();
        this.tableHead = new UsersTableHeader();
    }

    render() {
        this.container.innerHTML = `
        <table class='table'>  
            ${this.tableHead.render()}
            <tbody class='table__body'>
              ${this.state.limit > 0 ? this.usersOutput.render(this.usersData) : this.notFound}
            </tbody>
        </table>
        ${this.loadMore.render(this.state)}
        `;
    }
    filterUsers() {
        const table = document.querySelector('.table__body');
        const search = document.querySelector('.user-search__input');
        const filteredUsers = this.state.data.filter((user) =>
            user.name.toLowerCase().includes(search.value.toLowerCase())
        );
        document.querySelector('.load-more__msg-current').innerText =
            filteredUsers.length;
        if (filteredUsers.length <= 0) {
            table.innerHTML = `
            <tr class='no-user'>
                <td colspan="7">
                    <p class="no-user__msg">
                        Not found
                    </p>
                </td>
            </tr>`;
        } else {
            let output = '';
            for (let user of filteredUsers) {
                output += this.usersOutput.render([user]);
            }
            table.innerHTML = output;
        }
    }
}

export default UserList;