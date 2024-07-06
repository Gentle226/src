import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addExpense } from '../features/expenses/expensesSlice';
import { TextField, Button } from '@mui/material';

const AddExpense = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        amount: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        amount: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    });

    const onSubmit = (values) => {
        dispatch(addExpense({ ...values, id: Date.now() }));
        navigate('/');
    };

    return (
        <div>
            <h1>Add Expense</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form>
                        <Field name="name" as={TextField} label="Expense Name" error={touched.name && !!errors.name} helperText={touched.name && errors.name} />
                        <Field name="amount" as={TextField} label="Amount" type="number" error={touched.amount && !!errors.amount} helperText={touched.amount && errors.amount} />
                        <Button variant="contained" color="primary" type="submit">Add</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddExpense;
