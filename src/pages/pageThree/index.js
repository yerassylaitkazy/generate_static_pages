import axios from 'axios';
import { fromEvent } from 'rxjs';

const asyncGetUsers = () => {
    return axios({
        method: "GET",
        baseURL: "https://jsonplaceholder.typicode.com",
        url: "/users"
    }).then(response => {
        return response.data;
    });
};


fromEvent(window, 'load')
    .subscribe(() => {
        asyncGetUsers().then(users => {
            const userListEl = document.getElementById("user-list");
            userListEl.innerHTML = users.map(user => `<div>${user.name} --- ${user.phone}</div>`).join("");
        });
    });