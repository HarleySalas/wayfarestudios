export default function validateContact(values) {
  let errors = {};

  //Name
  if (!values.name) {
    errors.name = "Required.";
  } else if (values.name.length < 2) {
    errors.name = "Required.";
  }

  //Email
  if (!values.mail) {
    errors.mail = "Required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
    errors.mail = "Invalid email address";
  }

  //subject
  if (!values.subject) {
    errors.subject = "Required.";
  } else if (values.subject.length < 3) {
    errors.mail = "Please provide a subject.";
  }

  //Message
  if (!values.message) {
    errors.message = "Required.";
  } else if (values.message.length < 15) {
    errors.message = "Your message should contain at least 15 characters.";
  }

  return errors;
}
