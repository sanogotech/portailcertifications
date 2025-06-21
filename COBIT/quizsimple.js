document.addEventListener('DOMContentLoaded', function() {
    // Array of quiz questions for the Simple Quiz
    // You MUST fill in the remaining 33 questions (8 to 40) with proper COBIT content.
    const simpleQuestions = [
        // Simple Question 1: Basic definition of COBIT
        {
            question: "1. COBIT est un cadre pour :",
            options: [
                "A) La gestion de projet IT.",
                "B) La gouvernance et la gestion des informations et des technologies (EGIT).",
                "C) Le développement de logiciels agiles.",
                "D) La sécurité des réseaux uniquement."
            ],
            correctAnswer: "B",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: B</p>
                <p><strong>Commentaire Détaillé:</strong> COBIT (Control Objectives for Information and Related Technologies) est spécifiquement conçu pour la Gouvernance et la Gestion des Informations et Technologies (EGIT - Enterprise Governance of Information and Technology). Il fournit un cadre complet pour aider les entreprises à atteindre leurs objectifs stratégiques en utilisant les TI.</p>
                <p><strong>Nuance pour l'examen:</strong> Alors que les autres options peuvent être des domaines que les TI gèrent, COBIT est un cadre de gouvernance général et non un outil ou une méthodologie spécifique pour un seul domaine (comme la gestion de projet ou la sécurité réseau). Il englobe ces domaines dans une perspective de gouvernance.</p>
            `
        },
        // Simple Question 2: Primary component of COBIT 2019
        {
            question: "2. Quel est le composant principal du système de gouvernance et de gestion de COBIT 2019 ?",
            options: [
                "A) Les procédures opérationnelles détaillées.",
                "B) Les objectifs de gouvernance et de management.",
                "C) Les plans de formation des employés.",
                "D) Les rapports financiers annuels."
            ],
            correctAnswer: "B",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: B</p>
                <p><strong>Commentaire Détaillé:</strong> Les objectifs de gouvernance et de management (ex: EDM, APO, BAI, DSS, MEA) sont au cœur du modèle COBIT 2019. Ils définissent ce qui doit être réalisé par la gouvernance et le management des TI pour atteindre les objectifs de l'entreprise. Les autres options sont des éléments beaucoup plus spécifiques ou non centraux pour le cadre de gouvernance.</p>
                <p><strong>Nuance pour l'examen:</strong> Comprenez que COBIT est axé sur les objectifs. Les objectifs de gouvernance et de management sont la pierre angulaire qui guide les processus et les autres composants.</p>
            `
        },
        // Simple Question 3: Distinction between Governance and Management
        {
            question: "3. La gouvernance et la gestion sont des disciplines distinctes. La gouvernance est principalement axée sur :",
            options: [
                "A) La planification, la construction, l'exécution et la surveillance.",
                "B) L'évaluation, la direction et la surveillance.",
                "C) L'exécution des tâches quotidiennes.",
                "D) L'optimisation des ressources techniques."
            ],
            correctAnswer: "B",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: B</p>
                <p><strong>Commentaire Détaillé:</strong> Selon COBIT, la gouvernance est définie par le cycle 'Evaluate, Direct, Monitor' (EDM), tandis que le management est défini par 'Plan, Build, Run, Monitor' (PBRM), ou plus spécifiquement les domaines APO, BAI, DSS, MEA. La gouvernance assure l'alignement stratégique et la création de valeur pour les parties prenantes, tandis que le management exécute les activités pour atteindre ces objectifs.</p>
                <p><strong>Nuance pour l'examen:</strong> C'est un concept fondamental de COBIT. La gouvernance est le "quoi" et le "pourquoi", le management est le "comment".</p>
            `
        },
        // Simple Question 4: One of the governance principles
        {
            question: "4. L'un des principes clés d'un système de gouvernance de COBIT est :",
            options: [
                "A) Être exclusivement axé sur les coûts.",
                "B) Fournir de la valeur aux parties prenantes.",
                "C) Ignorer les cadres existants.",
                "D) Être statique et immuable."
            ],
            correctAnswer: "B",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: B</p>
                <p><strong>Commentaire Détaillé:</strong> Le principe fondamental de la gouvernance des TI est de générer de la valeur pour l'entreprise et ses parties prenantes. Les autres options sont contraires aux principes de COBIT (ex: un cadre dynamique, tirant parti d'autres cadres).</p>
                <p><strong>Nuance pour l'examen:</strong> La création de valeur est l'objectif ultime de la gouvernance des TI et un principe omniprésent dans COBIT.</p>
            `
        },
        // Simple Question 5: Purpose of Design Factors
        {
            question: "5. À quoi servent les 'facteurs de conception' dans COBIT 2019 ?",
            options: [
                "A) À documenter les erreurs passées.",
                "B) À créer un système de gouvernance générique pour toutes les entreprises.",
                "C) À personnaliser le système de gouvernance en fonction du contexte de l'entreprise.",
                "D) À définir les salaires des équipes IT."
            ],
            correctAnswer: "C",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: C</p>
                <p><strong>Commentaire Détaillé:</strong> Les facteurs de conception (Design Factors) sont introduits dans COBIT 2019 pour aider les organisations à adapter le cadre COBIT à leurs besoins spécifiques. Ils incluent des éléments comme la stratégie de l'entreprise, le paysage des menaces, les exigences de conformité, etc. Ils permettent de créer un système de gouvernance sur mesure.</p>
                <p><strong>Nuance pour l'examen:</strong> C'est une innovation majeure de COBIT 2019. L'idée est que COBIT n'est pas une solution 'taille unique', et les facteurs de conception aident à le rendre pertinent pour chaque organisation.</p>
            `
        },
        // Simple Question 6: What is a "component" in COBIT?
        {
            question: "6. Dans COBIT 2019, un 'composant de gouvernance' peut être :",
            options: [
                "A) Uniquement des processus.",
                "B) Uniquement des structures organisationnelles.",
                "C) Un ensemble d'éléments qui contribuent à la gouvernance et la gestion (processus, structures, culture, informations, etc.).",
                "D) Un logiciel de gestion des risques."
            ],
            correctAnswer: "C",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: C</p>
                <p><strong>Commentaire Détaillé:</strong> COBIT 2019 adopte une vue holistique des composants de gouvernance. Cela inclut non seulement les processus et les structures organisationnelles, mais aussi la culture, l'éthique et le comportement, les informations, les services, les infrastructures et les applications, et les personnes, les compétences et les compétences. Tous ces éléments travaillent ensemble pour atteindre les objectifs de gouvernance.</p>
                <p><strong>Nuance pour l'examen:</strong> Comprenez l'étendue des "composants". Ce n'est pas seulement des procédures ou des départements, mais un écosystème complet qui doit être aligné.</p>
            `
        },
        // Simple Question 7: Role of performance management
        {
            question: "7. Quel est le but principal de la gestion de la performance dans COBIT 2019 ?",
            options: [
                "A) Évaluer les employés individuellement.",
                "B) Mesurer la conformité aux exigences légales uniquement.",
                "C) Mesurer dans quelle mesure les objectifs de gouvernance et de management sont atteints.",
                "D) Simplement enregistrer les incidents techniques."
            ],
            correctAnswer: "C",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: C</p>
                <p><strong>Commentaire Détaillé:</strong> La gestion de la performance (incluant les niveaux de capacité et de maturité) vise à mesurer l'efficacité et l'efficience des processus de gouvernance et de management. Elle permet d'évaluer si les objectifs sont atteints et d'identifier les domaines d'amélioration. La conformité est une partie de cette évaluation, mais pas l'unique but.</p>
                <p><strong>Nuance pour l'examen:</strong> La performance est évaluée à plusieurs niveaux: performance du processus (capacité), performance de l'objectif (mesure des objectifs), et maturité globale de l'entreprise.</p>
            `
        },
        // --- START OF PLACEHOLDER QUESTIONS FOR QUIZ SIMPLE ---
        // You MUST replace these placeholders with actual COBIT 2019 questions and detailed explanations.
        // There are 33 placeholder questions here to reach the total of 40.
        {
            question: "8. Question simple Placeholder 8: Remplacer ceci par une vraie question COBIT.",
            options: [
                "A) Option A", "B) Option B", "C) Option C", "D) Option D"
            ],
            correctAnswer: "A", // Adjust as needed
            explanation: `<p class="text-info">Explication pour la Question simple 8. Détailler la réponse correcte et les nuances.</p>`
        },
        { question: "9. Question simple Placeholder 9?", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "<p class='text-info'>Explication pour Q9.</p>" },
        { question: "10. Question simple Placeholder 10?", options: ["A", "B", "C", "D"], correctAnswer: "C", explanation: "<p class='text-info'>Explication pour Q10.</p>" },
        { question: "11. Question simple Placeholder 11?", options: ["A", "B", "C", "D"], correctAnswer: "D", explanation: "<p class='text-info'>Explication pour Q11.</p>" },
        { question: "12. Question simple Placeholder 12?", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "<p class='text-info'>Explication pour Q12.</p>" },
        { question: "13. Question simple Placeholder 13?", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "<p class='text-info'>Explication pour Q13.</p>" },
        { question: "14. Question simple Placeholder 14?", options: ["A", "B", "C", "D"], correctAnswer: "C", explanation: "<p class='text-info'>Explication pour Q14.</p>" },
        { question: "15. Question simple Placeholder 15?", options: ["A", "B", "C", "D"], correctAnswer: "D", explanation: "<p class='text-info'>Explication pour Q15.</p>" },
        { question: "16. Question simple Placeholder 16?", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "<p class='text-info'>Explication pour Q16.</p>" },
        { question: "17. Question simple Placeholder 17?", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "<p class='text-info'>Explication pour Q17.</p>" },
        { question: "18. Question simple Placeholder 18?", options: ["A", "B", "C", "D"], correctAnswer: "C", explanation: "<p class='text-info'>Explication pour Q18.</p>" },
        { question: "19. Question simple Placeholder 19?", options: ["A", "B", "C", "D"], correctAnswer: "D", explanation: "<p class='text-info'>Explication pour Q19.</p>" },
        { question: "20. Question simple Placeholder 20?", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "<p class='text-info'>Explication pour Q20.</p>" },
        { question: "21. Question simple Placeholder 21?", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "<p class='text-info'>Explication pour Q21.</p>" },
        { question: "22. Question simple Placeholder 22?", options: ["A", "B", "C", "D"], correctAnswer: "C", explanation: "<p class='text-info'>Explication pour Q22.</p>" },
        { question: "23. Question simple Placeholder 23?", options: ["A", "B", "C", "D"], correctAnswer: "D", explanation: "<p class='text-info'>Explication pour Q23.</p>" },
        { question: "24. Question simple Placeholder 24?", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "<p class='text-info'>Explication pour Q24.</p>" },
        { question: "25. Question simple Placeholder 25?", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "<p class='text-info'>Explication pour Q25.</p>" },
        { question: "26. Question simple Placeholder 26?", options: ["A", "B", "C", "D"], correctAnswer: "C", explanation: "<p class='text-info'>Explication pour Q26.</p>" },
        { question: "27. Question simple Placeholder 27?", options: ["A", "B", "C", "D"], correctAnswer: "D", explanation: "<p class='text-info'>Explication pour Q27.</p>" },
        { question: "28. Question simple Placeholder 28?", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "<p class='text-info'>Explication pour Q28.</p>" },
        { question: "29. Question simple Placeholder 29?", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "<p class='text-info'>Explication pour Q29.</p>" },
        { question: "30. Question simple Placeholder 30?", options: ["A", "B", "C", "D"], correctAnswer: "C", explanation: "<p class='text-info'>Explication pour Q30.</p>" },
        { question: "31. Question simple Placeholder 31?", options: ["A", "B", "C", "D"], correctAnswer: "D", explanation: "<p class='text-info'>Explication pour Q31.</p>" },
        { question: "32. Question simple Placeholder 32?", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "<p class='text-info'>Explication pour Q32.</p>" },
        { question: "33. Question simple Placeholder 33?", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "<p class='text-info'>Explication pour Q33.</p>" },
        { question: "34. Question simple Placeholder 34?", options: ["A", "B", "C", "D"], correctAnswer: "C", explanation: "<p class='text-info'>Explication pour Q34.</p>" },
        { question: "35. Question simple Placeholder 35?", options: ["A", "B", "C", "D"], correctAnswer: "D", explanation: "<p class='text-info'>Explication pour Q35.</p>" },
        { question: "36. Question simple Placeholder 36?", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "<p class='text-info'>Explication pour Q36.</p>" },
        { question: "37. Question simple Placeholder 37?", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "<p class='text-info'>Explication pour Q37.</p>" },
        { question: "38. Question simple Placeholder 38?", options: ["A", "B", "C", "D"], correctAnswer: "C", explanation: "<p class='text-info'>Explication pour Q38.</p>" },
        { question: "39. Question simple Placeholder 39?", options: ["A", "B", "C", "D"], correctAnswer: "D", explanation: "<p class='text-info'>Explication pour Q39.</p>" },
        { question: "40. Question simple Placeholder 40?", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "<p class='text-info'>Explication pour Q40.</p>" }
        // --- END OF PLACEHOLDER QUESTIONS ---
    ];

    let currentSimpleQuestionIndex = 0;
    let simpleScore = 0;
    let selectedSimpleOption = null; // To track the user's current selection

    // Get references to HTML elements for the SIMPLE QUIZ
    const quizSimpleContainer = document.getElementById('quizSimpleContainer');
    const questionSimpleDisplay = document.getElementById('questionSimpleDisplay');
    const explanationSimpleDisplay = document.getElementById('explanationSimpleDisplay');
    const nextSimpleQuestionBtn = document.getElementById('nextSimpleQuestionBtn');
    const restartSimpleQuizBtn = document.getElementById('restartSimpleQuizBtn'); // Button during quiz

    const quizSimpleResults = document.getElementById('quizSimpleResults');
    const scoreSimpleDisplay = document.getElementById('scoreSimpleDisplay');
    const totalQuestionsSimpleFinalDisplay = document.getElementById('totalQuestionsSimpleFinalDisplay');
    const progressBarSimpleScore = document.getElementById('progressBarSimpleScore');
    const recommendationsSimpleDiv = document.getElementById('recommendationsSimple');
    const retakeSimpleQuizBtn = document.getElementById('retakeSimpleQuizBtn'); // Button in results

    // Elements for simple question tracking
    const currentQuestionSimpleNumberSpan = document.getElementById('currentQuestionSimpleNumber');
    const totalQuestionsSimpleCountSpan = document.getElementById('totalQuestionsSimpleCount');


    // Function to load a question for the simple quiz
    function loadSimpleQuestion() {
        if (currentSimpleQuestionIndex < simpleQuestions.length) {
            const q = simpleQuestions[currentSimpleQuestionIndex];

            // Update question counter
            currentQuestionSimpleNumberSpan.textContent = currentSimpleQuestionIndex + 1;
            totalQuestionsSimpleCountSpan.textContent = simpleQuestions.length;

            questionSimpleDisplay.innerHTML = `
                <p class="fw-bold">${q.question}</p>
                <div class="options-container">
                    ${q.options.map((option, index) => `
                        <div class="quiz-option" data-option="${String.fromCharCode(65 + index)}">${option}</div>
                    `).join('')}
                </div>
            `;
            explanationSimpleDisplay.style.display = 'none';
            explanationSimpleDisplay.innerHTML = '';
            nextSimpleQuestionBtn.style.display = 'none'; // Hide next button until an answer is selected
            restartSimpleQuizBtn.style.display = 'none'; // Hide restart during quiz
            selectedSimpleOption = null; // Reset selected option

            addSimpleOptionClickListeners();
        } else {
            showSimpleResults();
        }
    }

    // Function to add click listeners to options for the simple quiz
    function addSimpleOptionClickListeners() {
        const options = questionSimpleDisplay.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', function() {
                // Only allow selection if an option hasn't been selected yet for this question
                if (selectedSimpleOption === null) {
                    options.forEach(opt => {
                        opt.classList.remove('selected', 'correct', 'incorrect');
                    });
                    this.classList.add('selected');
                    selectedSimpleOption = this; // Store the selected option

                    checkSimpleAnswer(this);
                    nextSimpleQuestionBtn.style.display = 'block'; // Show next button
                }
            });
        });
    }

    // Function to check the answer for the simple quiz
    function checkSimpleAnswer(selectedDiv) {
        const currentQuestion = simpleQuestions[currentSimpleQuestionIndex];
        const selectedValue = selectedDiv.dataset.option;

        if (selectedValue === currentQuestion.correctAnswer) {
            selectedDiv.classList.add('correct');
            simpleScore++;
        } else {
            selectedDiv.classList.add('incorrect');
            // Highlight the correct answer if the user was wrong
            const correctOptionDiv = questionSimpleDisplay.querySelector(`.quiz-option[data-option="${currentQuestion.correctAnswer}"]`);
            if (correctOptionDiv) {
                correctOptionDiv.classList.add('correct');
            }
        }
        explanationSimpleDisplay.innerHTML = currentQuestion.explanation;
        explanationSimpleDisplay.style.display = 'block';
    }

    // Event listener for the "Next Question" button for the simple quiz
    nextSimpleQuestionBtn.addEventListener('click', function() {
        currentSimpleQuestionIndex++;
        loadSimpleQuestion();
    });

    // Function to show results for the simple quiz
    function showSimpleResults() {
        quizSimpleContainer.style.display = 'none';
        quizSimpleResults.style.display = 'block';
        scoreSimpleDisplay.textContent = simpleScore;
        totalQuestionsSimpleFinalDisplay.textContent = simpleQuestions.length;

        const percentage = (simpleScore / simpleQuestions.length) * 100;
        progressBarSimpleScore.style.width = percentage + '%';
        progressBarSimpleScore.setAttribute('aria-valuenow', percentage);

        let recommendationsText = "";
        let recommendationClass = "";

        // Target for simple quiz is 80%
        if (percentage >= 90) {
            recommendationsText = `<p><i class='fas fa-check-circle me-2'></i>Félicitations! Vous maîtrisez parfaitement les fondamentaux de COBIT. Vous êtes prêt(e) pour des questions plus complexes.</p><p><strong>Recommandations:</strong> Concentrez-vous maintenant sur les nuances et les applications pratiques des concepts COBIT.</p>`;
            recommendationClass = "alert-success";
        } else if (percentage >= 80) {
            recommendationsText = `<p><i class='fas fa-info-circle me-2'></i>Excellent travail! Vous avez atteint l'objectif de 80% pour ce quiz simple. Votre base est solide.</p><p><strong>Recommandations:</strong> Continuez à renforcer vos points faibles identifiés. Passez au quiz "Learn" pour des questions plus détaillées et complexes.</p>`;
            recommendationClass = "alert-info";
        } else if (percentage >= 65) { // COBIT Foundation pass mark
            recommendationsText = `<p><i class='fas fa-exclamation-triangle me-2'></i>Bonne base, mais vous n'avez pas encore atteint l'objectif de 80% pour ce quiz simple.</p><p><strong>Recommandations:</strong> Revoyez les concepts fondamentaux de COBIT. Assurez-vous de bien comprendre la distinction entre gouvernance et management, les principes clés et les objectifs des domaines (EDM, APO, BAI, DSS, MEA).</p>`;
            recommendationClass = "alert-warning";
        } else {
            recommendationsText = `<p><i class='fas fa-times-circle me-2'></i>Votre score indique que vous avez besoin de revoir les concepts fondamentaux de COBIT.</p><p><strong>Recommandations:</strong> Prenez le temps de lire attentivement le matériel de cours sur les bases de COBIT avant de retenter ce quiz. Concentrez-vous sur les définitions clés et la structure générale du cadre.</p>`;
            recommendationClass = "alert-danger";
        }
        recommendationsSimpleDiv.innerHTML = recommendationsText;
        recommendationsSimpleDiv.className = `alert ${recommendationClass} mt-4`; // Apply Bootstrap alert class
    }

    // Restart Simple Quiz functionality (from results screen)
    retakeSimpleQuizBtn.addEventListener('click', startSimpleQuiz);

    // Function to initialize/reset the simple quiz
    function startSimpleQuiz() {
        currentSimpleQuestionIndex = 0;
        simpleScore = 0;
        selectedSimpleOption = null;
        quizSimpleResults.style.display = 'none';
        quizSimpleContainer.style.display = 'block';
        nextSimpleQuestionBtn.style.display = 'none';
        restartSimpleQuizBtn.style.display = 'none';
        explanationSimpleDisplay.style.display = 'none';
        explanationSimpleDisplay.innerHTML = '';
        
        loadSimpleQuestion(); // Load the first question
    }

    // Attach event listener to the "Quiz Simple" tab button
    const quizSimpleTabBtn = document.getElementById('quiz-simple-tab');
    if (quizSimpleTabBtn) {
        quizSimpleTabBtn.addEventListener('shown.bs.tab', function (event) {
            // This event fires when the tab has been made active
            startSimpleQuiz(); // Start the quiz when the tab is shown
        });
    }

    // Initial load if the tab is already active when page loads (e.g., if page refreshed on this tab)
    if (document.getElementById('quiz-simple').classList.contains('active')) {
        startSimpleQuiz();
    }
});