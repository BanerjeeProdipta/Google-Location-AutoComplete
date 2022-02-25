// TODO
// export const isAuthenticated = () => (!!store.getState().userReducer.user);
// eslint-disable-next-line import/prefer-default-export
export const isAuthenticated = true;

// all regex
export const emailRegex = /^([a-z\d._-]+)@([a-z\d_-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i;
export const lowercaseRegex = /(?=.*[a-z])/;
export const uppercaseRegex = /(?=.*[A-Z])/;
export const numericRegex = /(?=.*[0-9])/;
export const specialCharRegex = /(?=.*[\^$*.[\]{}()?“!@#%&/,><’:;|_~`/-])/;
export const durationRegex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/;
