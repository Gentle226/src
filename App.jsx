// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './pages/Home';
import AddExpense from './pages/AddExpense';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-expense" element={<AddExpense />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
