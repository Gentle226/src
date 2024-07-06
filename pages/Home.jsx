import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from '../features/expenses/expensesSlice';
import { Link } from 'react-router-dom';
import { Button, List, ListItem, ListItemText } from '@mui/material';

const Home = () => {
    const expenses = useSelector((state) => state.expenses.items);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Student Monthly Expenses</h1>
            <Link to="/add-expense">
                <Button variant="contained" color="primary">Add Expense</Button>
            </Link>
            <List>
                {expenses.map((expense) => (
                    <ListItem key={expense.id}>
                        <ListItemText primary={`${expense.name}: $${expense.amount}`} />
                        <Button variant="contained" color="secondary" onClick={() => dispatch(removeExpense(expense.id))}>Remove</Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Home;
