export const checkValiDate=(email,passwords) => {
    const isEmailVali=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwords);
    if(!isEmailVali) return "Email is not a valid";
    if(!isPasswordValid) return "Password is not a valid";
    return null;
}