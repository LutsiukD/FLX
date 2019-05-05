class LoadMoreUsers {
    render(users) {
        return `
        <div class="load-more">
            <p class="load-more__msg">
                Displayed 
                <span class="load-more__msg-current">
                    ${users.limit}
                </span> 
                users out of 
                <span class="load-more__msg-all">
                ${users.data.length}
                </span>
            </p>
        <button type="text" class="load-more__btn" 
        ${users.limit === users.data.length ? 'disabled' : ''}>
          Load more
        </button>
    </div>`;
    }
}

export default LoadMoreUsers;