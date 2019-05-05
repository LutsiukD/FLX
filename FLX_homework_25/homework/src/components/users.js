class Users {
    render(currentUsers) {
        let userList = '';
        for (let user of currentUsers) {
            const {name, location, email, phone, picture, timezone, id} = user;
            userList += `
            <tr class ="row">
                <td>
                    <img src="${picture}" alt="" />
                </td>
                <td>${name}</td>
                <td>${location}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${timezone}</td>
                <td>
                    <button data-id="${id}" class="removeBtn" type="button">
                        Remove
                    </button>
                </td>    
            </tr>
            `;
        }
        return userList;
    }
}

export default Users;