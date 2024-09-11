

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import bcrypt from 'bcryptjs';
// import './Admin.css';
// import { Button, TextField, MenuItem, Select, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// const AdminDashboard = () => {
//     const [questions, setQuestions] = useState([]);
//     const [results, setResults] = useState([]);
//     const [pendingResults, setPendingResults] = useState([]);
//     const [examDetails, setExamDetails] = useState({ title: '', description: '', startTime: '' });
//     const [adminName, setAdminName] = useState('');
//     const [formData, setFormData] = useState({
//         question: '',
//         type: 'multiple-choice',
//         optionA: '',
//         optionB: '',
//         optionC: '',
//         optionD: '',
//         correctOption: '',
//     });
//     const [password, setPassword] = useState('');
//     const [showLogin, setShowLogin] = useState(true);

//     const navigate = useNavigate();

//     useEffect(() => {
//         if (showLogin) {
//             return;
//         }
//         loadQuestions();
//         loadResults();
//         loadPendingResults();
//         loadExamDetails();
//     }, [showLogin]);

//     const handleLogin = (e) => {
//         e.preventDefault();
//         const storedHash = localStorage.getItem('adminPasswordHash');
//         if (!storedHash) {
//             const name = prompt("Enter admin's name:");
//             const password = prompt("Create a strong password:");
//             const hash = bcrypt.hashSync(password, 10);
//             localStorage.setItem('adminPasswordHash', hash);
//             localStorage.setItem('adminName', name);
//             setAdminName(name);
//             alert('Admin credentials set. Please refresh the page.');
//             window.location.reload();
//         } else {
//             if (!bcrypt.compareSync(password, storedHash)) {
//                 alert("Incorrect password");
//                 navigate('/admin-login');
//             } else {
//                 setAdminName(localStorage.getItem('adminName'));
//                 setShowLogin(false);
//             }
//         }
//     };

//     const loadQuestions = () => {
//         try {
//             const questions = JSON.parse(localStorage.getItem('questions')) || [];
//             setQuestions(questions);
//         } catch (error) {
//             console.error('Error loading questions:', error);
//         }
//     };

//     const loadResults = () => {
//         try {
//             const results = JSON.parse(localStorage.getItem('results')) || [];
//             setResults(results);
//         } catch (error) {
//             console.error('Error loading results:', error);
//             setResults([]);
//         }
//     };

//     const loadPendingResults = () => {
//         try {
//             const pendingResults = JSON.parse(localStorage.getItem('pendingResults')) || [];
//             setPendingResults(pendingResults);
//         } catch (error) {
//             console.error('Error loading pending results:', error);
//             setPendingResults([]);
//         }
//     };

//     const loadExamDetails = () => {
//         try {
//             const examDetails = JSON.parse(localStorage.getItem('examDetails')) || { title: '', description: '', startTime: '' };
//             setExamDetails(examDetails);
//         } catch (error) {
//             console.error('Error loading exam details:', error);
//         }
//     };

//     const updateExamDetails = () => {
//         try {
//             localStorage.setItem('examDetails', JSON.stringify(examDetails));
//             alert('Exam details updated successfully!');
//         } catch (error) {
//             console.error('Error updating exam details:', error);
//         }
//     };

//     const handleQuestionAdd = () => {
//         const newQuestion = {
//             question: formData.question,
//             type: formData.type,
//             options: formData.type === 'multiple-choice' ? {
//                 A: formData.optionA,
//                 B: formData.optionB,
//                 C: formData.optionC,
//                 D: formData.optionD,
//             } : null,
//             correctOption: formData.type === 'multiple-choice' ? formData.correctOption.toUpperCase() : null,
//         };
//         const updatedQuestions = [...questions, newQuestion];
//         try {
//             localStorage.setItem('questions', JSON.stringify(updatedQuestions));
//             setQuestions(updatedQuestions);
//             alert('Question added successfully!');
//             setFormData({
//                 question: '',
//                 type: 'multiple-choice',
//                 optionA: '',
//                 optionB: '',
//                 optionC: '',
//                 optionD: '',
//                 correctOption: '',
//             });
//         } catch (error) {
//             console.error('Error adding question:', error);
//         }
//     };

//     const handleQuestionDelete = (index) => {
//         const updatedQuestions = questions.filter((_, i) => i !== index);
//         try {
//             localStorage.setItem('questions', JSON.stringify(updatedQuestions));
//             setQuestions(updatedQuestions);
//             alert('Question deleted successfully!');
//         } catch (error) {
//             console.error('Error deleting question:', error);
//         }
//     };

//     const handleResultDelete = (index) => {
//         const updatedResults = results.filter((_, i) => i !== index);
//         try {
//             localStorage.setItem('results', JSON.stringify(updatedResults));
//             setResults(updatedResults);
//             alert('Result deleted successfully!');
//         } catch (error) {
//             console.error('Error deleting result:', error);
//         }
//     };

//     const handleResultPreview = (index) => {
//         if (!Array.isArray(pendingResults)) {
//             console.error('Pending Results is not an array:', pendingResults);
//             return;
//         }

//         if (index < 0 || index >= pendingResults.length) {
//             console.error('Invalid index for pending results:', index);
//             return;
//         }

//         const correctAnswers = questions.map(q => q.correctOption);
//         const result = pendingResults[index];

//         if (!result || !Array.isArray(result.answers)) {
//             console.error('Invalid result or answers:', result);
//             return;
//         }

//         const score = result.answers.filter((answer, i) => answer === correctAnswers[i]).length;
//         const percentage = (score / questions.length) * 100;

//         const updatedPendingResults = pendingResults.map((r, i) => i === index ? { ...r, previewScore: percentage.toFixed(2) } : r);
//         try {
//             localStorage.setItem('pendingResults', JSON.stringify(updatedPendingResults));
//             setPendingResults(updatedPendingResults);
//             alert(`Preview: ${result.user}'s score is ${percentage.toFixed(2)}%`);
//         } catch (error) {
//             console.error('Error previewing result:', error);
//         }
//     };

//     const handleResultPublish = (index) => {
//         if (!Array.isArray(pendingResults)) {
//             console.error('Pending Results is not an array:', pendingResults);
//             return;
//         }

//         if (index < 0 || index >= pendingResults.length) {
//             console.error('Invalid index for pending results:', index);
//             return;
//         }

//         const correctAnswers = questions.map(q => q.correctOption);
//         const result = pendingResults[index];

//         if (!result || !Array.isArray(result.answers)) {
//             console.error('Invalid result or answers:', result);
//             return;
//         }

//         const score = result.answers.filter((answer, i) => answer === correctAnswers[i]).length;
//         const percentage = (score / questions.length) * 100;

//         const updatedResults = [...results, { ...result, score: percentage.toFixed(2) }];
//         try {
//             localStorage.setItem('results', JSON.stringify(updatedResults));
//             setResults(updatedResults);

//             const updatedPendingResults = pendingResults.filter((_, i) => i !== index);
//             localStorage.setItem('pendingResults', JSON.stringify(updatedPendingResults));
//             setPendingResults(updatedPendingResults);

//             alert(`Result for ${result.user} published with score ${percentage.toFixed(2)}%!`);
//         } catch (error) {
//             console.error('Error publishing result:', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleExamDetailsChange = (e) => {
//         const { name, value } = e.target;
//         setExamDetails(prev => ({ ...prev, [name]: value }));
//     };

//     const toggleOptions = (e) => {
//         const { value } = e.target;
//         document.getElementById('options-section').style.display = value === 'multiple-choice' ? 'block' : 'none';
//     };

//     const handleSectionChange = (e) => {
//         const section = e.target.value;
//         document.querySelectorAll('.section').forEach(el => {
//             el.classList.remove('active');
//         });
//         document.getElementById(section).classList.add('active');
//     };

//     if (showLogin) {
//         return (
//             <div className="login-container">
//                 <form onSubmit={handleLogin} className="login-form">
//                     <TextField
//                         label="Admin Password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         fullWidth
//                         margin="normal"
//                     />
//                     <Button type="submit" variant="contained" color="primary">Login</Button>
//                 </form>
//             </div>
//         );
//     }

//     return (
//         <div className="dashboard-container">
//             <header className="header">
//                 <nav>
//                     <ul className="nav">
//                         <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
//                         <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
//                         <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
//                         <li className="nav-item"><Link to="/results" className="nav-link">Results</Link></li>
//                         <li className="nav-item"><Link to="/admin" className="nav-link">Admin Dashboard</Link></li>
//                     </ul>
//                 </nav>
//             </header>

//             <main className="main">
//                 <h1 className="heading">Admin Dashboard</h1>
//                 <p>Welcome, {adminName}!</p>

//                 <FormControl fullWidth margin="normal">
//                     <InputLabel>Select Section</InputLabel>
//                     <Select
//                         id="section"
//                         onChange={handleSectionChange}
//                         defaultValue="question-section"
//                     >
//                         <MenuItem value="question-section">Create and Manage Exam Questions</MenuItem>
//                         <MenuItem value="exam-details-section">Manage Exam Details</MenuItem>
//                         <MenuItem value="results-section">View and Manage Exam Results</MenuItem>
//                     </Select>
//                 </FormControl>

//                 <div id="question-section" className="section">
//                     <h2>Create and Manage Exam Questions</h2>
//                     <form id="question-form" className="question-form">
//                         <TextField
//                             label="Question"
//                             name="question"
//                             value={formData.question}
//                             onChange={handleChange}
//                             required
//                             fullWidth
//                             margin="normal"
//                         />
//                         <FormControl fullWidth margin="normal">
//                             <InputLabel>Type</InputLabel>
//                             <Select
//                                 name="type"
//                                 value={formData.type}
//                                 onChange={(e) => {
//                                     handleChange(e);
//                                     toggleOptions(e);
//                                 }}
//                                 required
//                             >
//                                 <MenuItem value="multiple-choice">Multiple Choice</MenuItem>
//                                 <MenuItem value="writing">Writing</MenuItem>
//                             </Select>
//                         </FormControl>
//                         <div id="options-section" style={{ display: formData.type === 'multiple-choice' ? 'block' : 'none' }}>
//                             <TextField
//                                 label="Option A"
//                                 name="optionA"
//                                 value={formData.optionA}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                             />
//                             <TextField
//                                 label="Option B"
//                                 name="optionB"
//                                 value={formData.optionB}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                             />
//                             <TextField
//                                 label="Option C"
//                                 name="optionC"
//                                 value={formData.optionC}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                             />
//                             <TextField
//                                 label="Option D"
//                                 name="optionD"
//                                 value={formData.optionD}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                             />
//                             <TextField
//                                 label="Correct Option (A/B/C/D)"
//                                 name="correctOption"
//                                 value={formData.correctOption}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                             />
//                         </div>
//                         <Button
//                             type="button"
//                             onClick={handleQuestionAdd}
//                             variant="contained"
//                             color="primary"
//                         >
//                             Add Question
//                         </Button>
//                     </form>

//                     <h3>Current Questions</h3>
//                     <ul id="questions-list" className="question-list">
//                         {questions.map((question, index) => (
//                             <li key={index}>
//                                 {index + 1}. {question.question} ({question.type})
//                                 <Button onClick={() => handleQuestionDelete(index)} variant="contained" color="secondary">Delete</Button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div id="exam-details-section" className="section">
//                     <h2>Manage Exam Details</h2>
//                     <form id="exam-details-form" className="exam-details">
//                         <TextField
//                             label="Exam Title"
//                             name="title"
//                             value={examDetails.title}
//                             onChange={handleExamDetailsChange}
//                             required
//                             fullWidth
//                             margin="normal"
//                         />
//                         <TextField
//                             label="Exam Description"
//                             name="description"
//                             value={examDetails.description}
//                             onChange={handleExamDetailsChange}
//                             required
//                             multiline
//                             rows={4}
//                             fullWidth
//                             margin="normal"
//                         />
//                         <TextField
//                             label="Start Time"
//                             name="startTime"
//                             type="datetime-local"
//                             value={examDetails.startTime}
//                             onChange={handleExamDetailsChange}
//                             fullWidth
//                             margin="normal"
//                         />
//                         <Button
//                             type="button"
//                             onClick={updateExamDetails}
//                             variant="contained"
//                             color="primary"
//                         >
//                             Update Details
//                         </Button>
//                     </form>
//                 </div>

//                 <div id="results-section" className="section">
//                     <h2>View and Manage Exam Results</h2>
//                     <TableContainer component={Paper}>
//                         <Table>
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell>User</TableCell>
//                                     <TableCell>Score (%)</TableCell>
//                                     <TableCell>Date</TableCell>
//                                     <TableCell>Preview Score</TableCell>
//                                     <TableCell>Publish</TableCell>
//                                     <TableCell>Delete</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {pendingResults.map((result, index) => (
//                                     <TableRow key={index}>
//                                         <TableCell>{result.user}</TableCell>
//                                         <TableCell>{result.score ? result.score + '%' : 'Not Calculated'}</TableCell>
//                                         <TableCell>{result.date}</TableCell>
//                                         <TableCell>{result.previewScore ? result.previewScore + '%' : 'Not Previewed'}</TableCell>
//                                         <TableCell>
//                                             <Button onClick={() => handleResultPreview(index)} variant="contained" color="primary">Preview</Button>
//                                             <Button onClick={() => handleResultPublish(index)} variant="contained" color="success">Publish</Button>
//                                         </TableCell>
//                                         <TableCell>
//                                             <Button onClick={() => handleResultDelete(index)} variant="contained" color="error">Delete</Button>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import './Admin.css';
import { Button, TextField, MenuItem, Select, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AdminDashboard = () => {
    const [questions, setQuestions] = useState([]);
    const [results, setResults] = useState([]);
    const [pendingResults, setPendingResults] = useState([]);
    const [examDetails, setExamDetails] = useState({ title: '', description: '', startTime: '' });
    const [adminName, setAdminName] = useState('');
    const [formData, setFormData] = useState({
        question: '',
        type: 'multiple-choice',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctOption: '',
    });
    const [password, setPassword] = useState('');
    const [showLogin, setShowLogin] = useState(true);
    const [activeSection, setActiveSection] = useState('question-section');

    const navigate = useNavigate();

    useEffect(() => {
        if (!showLogin) {
            loadQuestions();
            loadResults();
            loadPendingResults();
            loadExamDetails();
        }
    }, [showLogin]);

    const handleLogin = (e) => {
        e.preventDefault();
        const storedHash = localStorage.getItem('adminPasswordHash');
        if (!storedHash) {
            const name = prompt("Enter admin's name:");
            const password = prompt("Create a strong password:");
            const hash = bcrypt.hashSync(password, 10);
            localStorage.setItem('adminPasswordHash', hash);
            localStorage.setItem('adminName', name);
            setAdminName(name);
            alert('Admin credentials set. Please refresh the page.');
            window.location.reload();
        } else {
            if (!bcrypt.compareSync(password, storedHash)) {
                alert("Incorrect password");
                navigate('/admin-login');
            } else {
                setAdminName(localStorage.getItem('adminName'));
                setShowLogin(false);
            }
        }
    };

    const loadQuestions = () => {
        try {
            const questions = JSON.parse(localStorage.getItem('questions')) || [];
            setQuestions(questions);
        } catch (error) {
            console.error('Error loading questions:', error);
        }
    };

    const loadResults = () => {
        try {
            const results = JSON.parse(localStorage.getItem('results')) || [];
            setResults(results);
        } catch (error) {
            console.error('Error loading results:', error);
            setResults([]);
        }
    };

    const loadPendingResults = () => {
        try {
            const pendingResults = JSON.parse(localStorage.getItem('pendingResults')) || [];
            setPendingResults(pendingResults);
        } catch (error) {
            console.error('Error loading pending results:', error);
            setPendingResults([]);
        }
    };

    const loadExamDetails = () => {
        try {
            const examDetails = JSON.parse(localStorage.getItem('examDetails')) || { title: '', description: '', startTime: '' };
            setExamDetails(examDetails);
        } catch (error) {
            console.error('Error loading exam details:', error);
        }
    };

    const updateExamDetails = () => {
        try {
            localStorage.setItem('examDetails', JSON.stringify(examDetails));
            alert('Exam details updated successfully!');
        } catch (error) {
            console.error('Error updating exam details:', error);
        }
    };

    const handleQuestionAdd = () => {
        if (!formData.question.trim()) {
            alert('Please enter a question.');
            return;
        }
        const newQuestion = {
            question: formData.question,
            type: formData.type,
            options: formData.type === 'multiple-choice' ? {
                A: formData.optionA,
                B: formData.optionB,
                C: formData.optionC,
                D: formData.optionD,
            } : null,
            correctOption: formData.type === 'multiple-choice' ? formData.correctOption.toUpperCase() : null,
        };
        const updatedQuestions = [...questions, newQuestion];
        try {
            localStorage.setItem('questions', JSON.stringify(updatedQuestions));
            setQuestions(updatedQuestions);
            alert('Question added successfully!');
            setFormData({
                question: '',
                type: 'multiple-choice',
                optionA: '',
                optionB: '',
                optionC: '',
                optionD: '',
                correctOption: '',
            });
        } catch (error) {
            console.error('Error adding question:', error);
        }
    };

    const handleQuestionDelete = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        try {
            localStorage.setItem('questions', JSON.stringify(updatedQuestions));
            setQuestions(updatedQuestions);
            alert('Question deleted successfully!');
        } catch (error) {
            console.error('Error deleting question:', error);
        }
    };

    const handleResultDelete = (index) => {
        const updatedResults = results.filter((_, i) => i !== index);
        try {
            localStorage.setItem('results', JSON.stringify(updatedResults));
            setResults(updatedResults);
            alert('Result deleted successfully!');
        } catch (error) {
            console.error('Error deleting result:', error);
        }
    };

    const handleResultPreview = (index) => {
        if (!Array.isArray(pendingResults)) {
            console.error('Pending Results is not an array:', pendingResults);
            return;
        }

        if (index < 0 || index >= pendingResults.length) {
            console.error('Invalid index for pending results:', index);
            return;
        }

        const correctAnswers = questions.map(q => q.correctOption);
        const result = pendingResults[index];

        if (!result || !Array.isArray(result.answers)) {
            console.error('Invalid result or answers:', result);
            return;
        }

        const score = result.answers.filter((answer, i) => answer === correctAnswers[i]).length;
        const percentage = (score / questions.length) * 100;

        const updatedPendingResults = pendingResults.map((r, i) => i === index ? { ...r, previewScore: percentage.toFixed(2) } : r);
        try {
            localStorage.setItem('pendingResults', JSON.stringify(updatedPendingResults));
            setPendingResults(updatedPendingResults);
            alert(`Preview: ${result.user}'s score is ${percentage.toFixed(2)}%`);
        } catch (error) {
            console.error('Error previewing result:', error);
        }
    };

    const handleResultPublish = (index) => {
        if (!Array.isArray(pendingResults)) {
            console.error('Pending Results is not an array:', pendingResults);
            return;
        }

        if (index < 0 || index >= pendingResults.length) {
            console.error('Invalid index for pending results:', index);
            return;
        }

        const correctAnswers = questions.map(q => q.correctOption);
        const result = pendingResults[index];

        if (!result || !Array.isArray(result.answers)) {
            console.error('Invalid result or answers:', result);
            return;
        }

        const score = result.answers.filter((answer, i) => answer === correctAnswers[i]).length;
        const percentage = (score / questions.length) * 100;

        const updatedResults = [...results, { ...result, score: percentage.toFixed(2) }];
        try {
            localStorage.setItem('results', JSON.stringify(updatedResults));
            setResults(updatedResults);

            const updatedPendingResults = pendingResults.filter((_, i) => i !== index);
            localStorage.setItem('pendingResults', JSON.stringify(updatedPendingResults));
            setPendingResults(updatedPendingResults);

            alert(`Result for ${result.user} published with score ${percentage.toFixed(2)}%!`);
        } catch (error) {
            console.error('Error publishing result:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleExamDetailsChange = (e) => {
        const { name, value } = e.target;
        setExamDetails(prev => ({ ...prev, [name]: value }));
    };

    const toggleOptions = (type) => {
        setFormData(prev => ({ ...prev, type }));
    };

    if (showLogin) {
        return (
            <div className="login-container">
                <form onSubmit={handleLogin} className="login-form">
                    <TextField
                        label="Admin Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">Login</Button>
                </form>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            <header className="header">
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <h1 className="heading">Admin Dashboard</h1>
                <p>Welcome, {adminName}!</p>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Select Section</InputLabel>
                    <Select
                        id="section"
                        onChange={(e) => setActiveSection(e.target.value)}
                        value={activeSection}
                    >
                        <MenuItem value="question-section">Create and Manage Exam Questions</MenuItem>
                        <MenuItem value="exam-details-section">Manage Exam Details</MenuItem>
                        <MenuItem value="results-section">View and Manage Exam Results</MenuItem>
                    </Select>
                </FormControl>

                {activeSection === 'question-section' && (
                    <div id="question-section" className="section">
                        <h2>Create and Manage Exam Questions</h2>
                        <TextField
                            name="question"
                            label="Question"
                            value={formData.question}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Question Type</InputLabel>
                            <Select
                                name="type"
                                value={formData.type}
                                onChange={(e) => {
                                    handleChange(e);
                                    toggleOptions(e.target.value);
                                }}
                                required
                            >
                                <MenuItem value="multiple-choice">Multiple Choice</MenuItem>
                                <MenuItem value="writing">Writing</MenuItem>
                            </Select>
                        </FormControl>
                        {formData.type === 'multiple-choice' && (
                            <>
                                <TextField
                                    name="optionA"
                                    label="Option A"
                                    value={formData.optionA}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    name="optionB"
                                    label="Option B"
                                    value={formData.optionB}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    name="optionC"
                                    label="Option C"
                                    value={formData.optionC}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    name="optionD"
                                    label="Option D"
                                    value={formData.optionD}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    name="correctOption"
                                    label="Correct Option"
                                    value={formData.correctOption}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    required
                                />
                            </>
                        )}
                        <Button onClick={handleQuestionAdd} variant="contained" color="primary">Add Question</Button>
                        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Question</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Options</TableCell>
                                        <TableCell>Correct Option</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {questions.map((q, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{q.question}</TableCell>
                                            <TableCell>{q.type}</TableCell>
                                            <TableCell>{q.type === 'multiple-choice' ? Object.entries(q.options).map(([key, value]) => `${key}: ${value}`).join(', ') : '-'}</TableCell>
                                            <TableCell>{q.correctOption}</TableCell>
                                            <TableCell>
                                                <Button onClick={() => handleQuestionDelete(index)} variant="contained" color="secondary">Delete</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )}

                {activeSection === 'exam-details-section' && (
                    <div id="exam-details-section" className="section">
                        <h2>Manage Exam Details</h2>
                        <TextField
                            name="title"
                            label="Exam Title"
                            value={examDetails.title}
                            onChange={handleExamDetailsChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            name="description"
                            label="Exam Description"
                            value={examDetails.description}
                            onChange={handleExamDetailsChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            name="startTime"
                            label="Start Time"
                            type="datetime-local"
                            value={examDetails.startTime}
                            onChange={handleExamDetailsChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <Button onClick={updateExamDetails} variant="contained" color="primary">Update Exam Details</Button>
                    </div>
                )}

                {activeSection === 'results-section' && (
                    <div id="results-section" className="section">
                        <h2>View and Manage Exam Results</h2>
                        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>User</TableCell>
                                        <TableCell>Score</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {results.map((result, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{result.user}</TableCell>
                                            <TableCell>{result.score || '-'}</TableCell>
                                            <TableCell>
                                                <Button onClick={() => handleResultDelete(index)} variant="contained" color="secondary">Delete</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <h2>Pending Results</h2>
                        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>User</TableCell>
                                        <TableCell>Preview Score</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {pendingResults.map((result, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{result.user}</TableCell>
                                            <TableCell>{result.previewScore || '-'}</TableCell>
                                            <TableCell>
                                                <Button onClick={() => handleResultPreview(index)} variant="contained" color="primary">Preview</Button>
                                                <Button onClick={() => handleResultPublish(index)} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>Publish</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
