export const required = (value) => (value ? undefined : 'This field is required');

export const maxLengthCreator = (maxLength) => (value) =>
  value.length < maxLength ? undefined : `Max length is ${maxLength} symbols`;

export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()) ? undefined : `Email is not correct`;
};
