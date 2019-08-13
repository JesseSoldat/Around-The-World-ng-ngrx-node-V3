// all the possible keys for validating forms
const errKeys = ["required", "nomatch", "minlength", "maxlength", "email"];

const getErrMsg = (key, length) => {
  const err = {
    required: "This field is required!",
    minlength: `This field has to be at least ${length} characters long`,
    maxlength: `This field can not be over ${length} characters!`,
    email: "Please enter a valid email!",
    nomatch: "The passwords do not match!"
  };

  return err[key];
};

const handleMinMaxLength = (errObj, key) => {
  // errObj[key] = {requiredLength: 3, actualLength: 1}
  const { requiredLength } = errObj[key];
  return getErrMsg(key, requiredLength);
};

export const fieldValidation = errObj => {
  if (errObj === null) {
    return null;
  }

  let msg = null;

  errKeys.forEach(key => {
    // only shows errors for specific keys
    if (errObj[key]) {
      // for minlength and maxlength
      if (key === "minlength" || key === "maxlength") {
        return (msg = handleMinMaxLength(errObj, key));
      }
      // all other fields
      return (msg = getErrMsg(key, null));
    }
  });

  return msg;
};
