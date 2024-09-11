
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './ExamPage.css'; // Ensure the CSS file is correctly referenced

// const ExamPage = () => {
//     const [questions, setQuestions] = useState([]);
//     const [userAnswers, setUserAnswers] = useState({});
//     const [examTitle, setExamTitle] = useState('');
//     const [examDescription, setExamDescription] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [userName, setUserName] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Load exam details and questions from localStorage
//         const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
//         setQuestions(storedQuestions);

//         const examDetails = JSON.parse(localStorage.getItem('examDetails')) || { title: '', description: '' };
//         setExamTitle(examDetails.title);
//         setExamDescription(examDetails.description);

//         // Check if user is logged in
//         const storedUserName = localStorage.getItem('userName');
//         if (!storedUserName) {
//             // Prompt user to log in
//             const name = prompt("Enter your name to start the exam:");
//             if (name) {
//                 localStorage.setItem('userName', name);
//                 setUserName(name);
//             } else {
//                 navigate('/login');
//             }
//         } else {
//             setUserName(storedUserName);
//         }
//     }, [navigate]);

//     const handleChange = (index, value) => {
//         setUserAnswers(prevAnswers => ({
//             ...prevAnswers,
//             [index]: value
//         }));
//     };

//     const handleSubmit = () => {
//         // Validation: Ensure all questions have been answered
//         for (let i = 0; i < questions.length; i++) {
//             const answer = userAnswers[i];
            
//             if (questions[i].type === 'multiple-choice' && answer === undefined) {
//                 setErrorMessage('Please answer all questions before submitting.');
//                 return;
//             }
//             if (questions[i].type === 'writing' && (!answer || answer.trim() === '')) {
//                 setErrorMessage('Please answer all questions before submitting.');
//                 return;
//             }
//         }
//         setErrorMessage(''); // Clear error message if validation passes
    
//         // Store the pending results for admin review
//         const pendingResults = JSON.parse(localStorage.getItem('pendingResults')) || [];
//         pendingResults.push({
//             user: userName,
//             answers: userAnswers,
//             date: new Date().toLocaleDateString(),
//         });
//         localStorage.setItem('pendingResults', JSON.stringify(pendingResults));
    
//         alert('Your exam has been submitted for review!');
//         navigate('/thank-you'); // Redirect to Thank You Page
//     };

//     return (
//         <div className="exam-page">
//             <header className="header">
//                 <nav>
//                     <ul className="nav">
//                         <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
//                         <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
//                         <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
//                     </ul>
//                 </nav>
//             </header>
//             <main className="main">
//                 <h1 className="main-title">takenoLAB Online Exam</h1>
//                 <div className="exam-details">
//                     <h2 className="exam-title">{examTitle}</h2>
//                     <p className="exam-description">{examDescription}</p>
//                 </div>
//                 {errorMessage && <div className="error-message">{errorMessage}</div>}
//                 <form id="exam-form">
//                     {questions.map((question, index) => (
//                         <div key={index} className="question">
//                             <p className="question-text">{index + 1}. {question.question}</p>
//                             {question.type === 'multiple-choice' &&
//                                 Object.entries(question.options).map(([key, value]) => (
//                                     <label key={key} className="option-label">
//                                         <input
//                                             type="radio"
//                                             name={`q${index}`}
//                                             value={key}
//                                             checked={userAnswers[index] === key}
//                                             onChange={() => handleChange(index, key)}
//                                         /> {value}
//                                     </label>
//                                 ))
//                             }
//                             {question.type === 'writing' &&
//                                 <textarea
//                                     name={`q${index}`}
//                                     rows="4"
//                                     value={userAnswers[index] || ''}
//                                     onChange={(e) => handleChange(index, e.target.value)}
//                                 />
//                             }
//                         </div>
//                     ))}
//                 </form>
//                 <button className="submit-button" onClick={handleSubmit}>
//                     Submit
//                 </button>
//             </main>
//             <footer className="footer">
//                 <p className="footer-text">&copy; 2024 Online Exam | <Link to="/contact" className="footer-link">Contact</Link> | <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link> | <Link to="/terms-of-service" className="footer-link">Terms of Service</Link></p>
//             </footer>
//         </div>
//     );
// };

// export default ExamPage;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ExamPage.css'; // Assurez-vous que le fichier CSS est correctement référencé

const ExamPage = () => {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [examTitle, setExamTitle] = useState('');
    const [examDescription, setExamDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Charger les détails de l'examen et les questions depuis localStorage
        const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        setQuestions(storedQuestions);

        const examDetails = JSON.parse(localStorage.getItem('examDetails')) || { title: '', description: '' };
        setExamTitle(examDetails.title);
        setExamDescription(examDetails.description);

        // Vérifier si l'utilisateur est connecté
        const storedUserName = localStorage.getItem('userName');
        if (!storedUserName) {
            // Demander à l'utilisateur de se connecter
            const name = prompt("Enter your name to start the exam:");
            if (name) {
                localStorage.setItem('userName', name);
                setUserName(name);
            } else {
                navigate('/login');
            }
        } else {
            setUserName(storedUserName);
        }
    }, [navigate]);

    const handleChange = (index, value) => {
        setUserAnswers(prevAnswers => ({
            ...prevAnswers,
            [index]: value
        }));
    };

    const handleSubmit = () => {
        // Validation : Assurez-vous que toutes les questions ont été répondues
        for (let i = 0; i < questions.length; i++) {
            const answer = userAnswers[i];
            
            if (questions[i].type === 'multiple-choice' && answer === undefined) {
                setErrorMessage('Please answer all questions before submitting.');
                return;
            }
            if (questions[i].type === 'writing' && (!answer || answer.trim() === '')) {
                setErrorMessage('Please answer all questions before submitting.');
                return;
            }
        }
        setErrorMessage(''); // Effacer le message d'erreur si la validation passe
    
        // Stocker les résultats en attente pour l'examen
        const pendingResults = JSON.parse(localStorage.getItem('pendingResults')) || [];
        pendingResults.push({
            user: userName,
            answers: userAnswers,
            date: new Date().toLocaleDateString(),
        });
        localStorage.setItem('pendingResults', JSON.stringify(pendingResults));
    
        alert('Your exam has been submitted for review!');
        navigate('/thank-you'); // Redirection vers la page de remerciement
    };

    return (
        <div className="exam-page">
            <header className="header">
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <h1 className="main-title">takenoLAB Online Exam</h1>
                <div className="exam-details">
                    <h2 className="exam-title">{examTitle}</h2>
                    <p className="exam-description">{examDescription}</p>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <form id="exam-form">
                    {questions.map((question, index) => (
                        <div key={index} className="question">
                            <p className="question-text">{index + 1}. {question.question}</p>
                            {question.type === 'multiple-choice' &&
                                Object.entries(question.options).map(([key, value]) => (
                                    <label key={key} className="option-label">
                                        <input
                                            type="radio"
                                            name={`q${index}`}
                                            value={key}
                                            checked={userAnswers[index] === key}
                                            onChange={() => handleChange(index, key)}
                                        /> {value}
                                    </label>
                                ))
                            }
                            {question.type === 'writing' &&
                                <textarea
                                    name={`q${index}`}
                                    rows="4"
                                    value={userAnswers[index] || ''}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                />
                            }
                        </div>
                    ))}
                </form>
                <button className="submit-button" onClick={handleSubmit}>
                    Submit
                </button>
            </main>
            <footer className="footer">
                <p className="footer-text">&copy; 2024 Online Exam | <Link to="/contact" className="footer-link">Contact</Link> | <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link> | <Link to="/terms-of-service" className="footer-link">Terms of Service</Link></p>
            </footer>
        </div>
    );
};

export default ExamPage;
