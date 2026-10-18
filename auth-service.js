function authenticateUser(username, password) {
    if (username && password) {
        return "Authentication successful!";
    }

    return "Invalid username or password.";
}