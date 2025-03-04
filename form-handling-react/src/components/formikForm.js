import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Form submitted:", values)}
    >
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <ErrorMessage name="username" component="p" />
        
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="p" />
        
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="p" />
        
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default formikForm;
