export const setUserRole = (userRole) => {
    localStorage.setItem('userRole', userRole);
};

export const getUserRole = () => {
    const userRole = localStorage.getItem('userRole');
    return userRole ? userRole : null;
};