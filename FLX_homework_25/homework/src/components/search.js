class Search {
    render() {
        const userSearch = document.createElement('div');
        userSearch.classList.add('user-search__container');
        userSearch.innerHTML = `
        <div class='user-search__form'>
            <label class='user-search__label'>
                Search by name:
            </label>
            <input
                type='text'
                placeholder='Enter username'
                class='user-search__input'
            />
        </div>
        `;
        document.querySelector('.root').appendChild(userSearch);
    }
}

export default Search;