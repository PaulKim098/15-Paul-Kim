class Helpers {
    getUsersByStatus(response, status) {
        const users = [];
        
        for (const user of response.users) {
            if (user.role.status === status && user.role.description) {
                users.push(user.name);
            }
        }
        return users;
    }

    getUsersByRole(response, role, roleId) {
        const users = [];

        for (const user of response.users) {
            if (user.role.name === role && user.role.id === roleId) {
                users.push(user.name);
            }
        }

        return users;
    }

    getUsersByEmailDomain(response, domain) {
        const users = [];

        for (const user of response.users) {
            if (user.email.includes(domain)) {
                users.push(user.name);
            }
        }

        return users;
    }

    getUserBalanceByCurrency(response, currency) {
        const balances = [];

        for (const user of response.users) {
            if (user.currency === currency) {
                balances.push(user.balance);
            }
        }

        return balances;
    }
}

export default new Helpers()