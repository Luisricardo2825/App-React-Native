import React from 'react';
import {Formik} from 'formik';

interface FormProps {
  children: React.ReactNode;
  onSubmit: (values: any) => void;
  validationSchema: any;
  initialValues: object;
}

const Form: React.FC<FormProps> = props => {
  const {children, validationSchema, initialValues, onSubmit} = props;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {children}
    </Formik>
  );
};

export default Form;
