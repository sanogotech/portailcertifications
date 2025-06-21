document.addEventListener('DOMContentLoaded', function() {
    // Array of quiz questions
    // You MUST fill in the remaining 33 questions (8 to 40) with proper content.
    const questions = [
        // Question 1
        {
            question: "1. Quel est l'objectif principal de la gouvernance des TI selon COBIT ?",
            options: [
                "A) Fournir des services informatiques de manière efficace.",
                "B) Gérer les opérations quotidiennes du département informatique.",
                "C) Assurer que la valeur est générée pour les parties prenantes et que les risques sont gérés.",
                "D) Optimiser les coûts des technologies de l'information."
            ],
            correctAnswer: "C",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: C</p>
                <p><strong>Commentaire Détaillé:</strong></p>
                <ul>
                    <li><strong>A) Fournir des services informatiques de manière efficace:</strong> C'est un objectif du management des TI (DSS - Deliver, Service and Support), pas l'objectif principal de la gouvernance. Le management est subordonné à la gouvernance.</li>
                    <li><strong>B) Gérer les opérations quotidiennes du département informatique:</strong> Ceci relève également du management des TI (opérations quotidiennes, processus).</li>
                    <li><strong>C) Assurer que la valeur est générée pour les parties prenantes et que les risques sont gérés:</strong> C'est la définition même de la gouvernance selon COBIT. La gouvernance vise à évaluer les besoins des parties prenantes, diriger la prise de décision et surveiller l'atteinte des objectifs et la gestion des risques (EDM - Evaluate, Direct and Monitor).</li>
                    <li><strong>D) Optimiser les coûts des technologies de l'information:</strong> Bien que l'optimisation des coûts soit un objectif important des TI, c'est une composante de la génération de valeur et de la gestion des ressources, mais pas l'objectif principal et englobant de la gouvernance.</li>
                </ul>
                <p><strong>Nuance pour l'examen:</strong> Comprenez bien la distinction fondamentale entre <em>Gouvernance</em> (EDM - évaluer, diriger, surveiller) et <em>Management</em> (planifier, construire, exécuter, surveiller). La gouvernance est au-dessus du management et assure l'alignement stratégique et la création de valeur.</p>
            `
        },
        // Question 2
        {
            question: "2. Parmi les principes fondamentaux de la gouvernance des TI de COBIT 2019, lequel met en évidence l'interconnexion de tous les composants de gouvernance ?",
            options: [
                "A) Gouvernance distincte du management.",
                "B) Fournir de la valeur aux parties prenantes.",
                "C) Approche holistique.",
                "D) Cadre de gouvernance dynamique."
            ],
            correctAnswer: "C",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: C</p>
                <p><strong>Commentaire Détaillé:</strong></p>
                <ul>
                    <li><strong>A) Gouvernance distincte du management:</strong> Ce principe établit une séparation claire des rôles et responsabilités entre la gouvernance et le management, mais ne se réfère pas spécifiquement à l'interconnexion des composants.</li>
                    <li><strong>B) Fournir de la valeur aux parties prenantes:</strong> C'est l'objectif principal de la gouvernance, mais pas le principe qui décrit l'intégration des composants.</li>
                    <li><strong>C) Approche holistique:</strong> Ce principe stipule que le système de gouvernance doit être considéré dans son ensemble et que tous ses composants (processus, structures organisationnelles, culture, information, services, infrastructures) sont interdépendants et doivent travailler ensemble de manière cohérente pour atteindre les objectifs.</li>
                    <li><strong>D) Cadre de gouvernance dynamique:</strong> Ce principe souligne que le système de gouvernance doit être flexible et adaptable aux changements de l'environnement (facteurs de conception).</li>
                </ul>
                <p><strong>Nuance pour l'examen:</strong> Maîtrisez les six principes de gouvernance de COBIT 2019. Chaque principe a une signification spécifique et répond à un aspect particulier de la gouvernance. L'approche holistique est cruciale pour comprendre comment COBIT intègre différents éléments.</p>
            `
        },
        // Question 3
        {
            question: "3. Lequel des éléments suivants est un objectif de management relevant du domaine BAI (Build, Acquire and Implement) ?",
            options: [
                "A) Gérer la stratégie.",
                "B) Gérer les services.",
                "C) Gérer les programmes.",
                "D) Gérer la surveillance et l'évaluation."
            ],
            correctAnswer: "C",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: C</p>
                <p><strong>Commentaire Détaillé:</strong></p>
                <ul>
                    <li><strong>A) Gérer la stratégie (APO02):</strong> Fait partie du domaine APO (Align, Plan and Organize), qui se concentre sur la planification et l'organisation des TI.</li>
                    <li><strong>B) Gérer les services (DSS01-DSS06):</strong> Fait partie du domaine DSS (Deliver, Service and Support), qui gère la livraison et le support des services TI.</li>
                    <li><strong>C) Gérer les programmes (BAI01):</strong> Fait partie du domaine BAI (Build, Acquire and Implement), qui couvre l'acquisition, le développement et la mise en œuvre des solutions TI. La gestion des programmes est essentielle pour construire de nouvelles capacités TI.</li>
                    <li><strong>D) Gérer la surveillance et l'évaluation (MEA01-MEA03):</strong> Fait partie du domaine MEA (Monitor, Evaluate and Assess), qui évalue la performance et la conformité.</li>
                </ul>
                <p><strong>Nuance pour l'examen:</strong> Il est essentiel de bien connaître les 4 domaines d'objectifs de management (APO, BAI, DSS, MEA) et d'avoir une bonne idée des types de processus qu'ils contiennent. Les questions peuvent porter sur l'association d'un objectif de management à son domaine correct.</p>
            `
        },
        // Question 4
        {
            question: "4. Quelle est la principale différence entre le modèle de maturité de COBIT 5 (CMMI-basé) et les niveaux de capacité de COBIT 2019 (basés sur ISO/IEC 33000) ?",
            options: [
                "A) COBIT 2019 utilise 5 niveaux, tandis que COBIT 5 en utilisait 6.",
                "B) Le modèle COBIT 2019 est plus orienté sur l'évaluation de la performance réelle du processus, tandis que COBIT 5 était plus axé sur la capacité.",
                "C) COBIT 2019 se concentre sur l'efficacité, et COBIT 5 sur l'efficience.",
                "D) Il n'y a pas de différence significative, seulement une mise à jour terminologique."
            ],
            correctAnswer: "B",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: B</p>
                <p><strong>Commentaire Détaillé:</strong></p>
                <ul>
                    <li><strong>A) COBIT 2019 utilise 5 niveaux, tandis que COBIT 5 en utilisait 6:</strong> Les deux utilisent 6 niveaux (0 à 5). Ce n'est pas la différence principale.</li>
                    <li><strong>B) Le modèle COBIT 2019 est plus orienté sur l'évaluation de la performance réelle du processus, tandis que COBIT 5 était plus axé sur la capacité:</strong> C'est la distinction clé. COBIT 2019 utilise le modèle de capacité des processus basé sur ISO/IEC 33000 (anciennement ISO/IEC 15504 ou SPICE), qui évalue la capacité d'un processus à atteindre ses objectifs. COBIT 5 utilisait un modèle de maturité basé sur CMMI, qui était plus global sur la maturité de l'organisation. L'accent de COBIT 2019 est mis sur la performance du processus.</li>
                    <li><strong>C) COBIT 2019 se concentre sur l'efficacité, et COBIT 5 sur l'efficience:</strong> Non, les deux versions considèrent l'efficacité et l'efficience.</li>
                    <li><strong>D) Il n'y a pas de différence significative, seulement une mise à jour terminologique:</strong> Il y a une différence fondamentale dans l'approche d'évaluation et la norme sous-jacente.</li>
                </ul>
                <p><strong>Nuance pour l'examen:</strong> La transition de COBIT 5 à COBIT 2019 a apporté des changements importants dans l'évaluation des capacités/maturité. Comprenez que COBIT 2019 utilise une approche plus axée sur le processus et conforme aux normes internationales pour l'évaluation de la capacité.</p>
            `
        },
        // Question 5
        {
            question: "5. Dans la cascade des objectifs de COBIT 2019, quel est le niveau qui se situe directement entre les objectifs d'entreprise et les objectifs de gouvernance et de management des TI ?",
            options: [
                "A) Les facteurs de conception.",
                "B) Les objectifs liés aux TI.",
                "C) Les composants de gouvernance.",
                "D) Les objectifs des processus."
            ],
            correctAnswer: "B",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: B</p>
                <p><strong>Commentaire Détaillé:</strong></p>
                <ul>
                    <li><strong>A) Les facteurs de conception:</strong> Les facteurs de conception sont des éléments qui influencent la conception du système de gouvernance, mais ils ne sont pas un niveau intermédiaire dans la cascade des objectifs.</li>
                    <li><strong>B) Les objectifs liés aux TI:</strong> La cascade des objectifs de COBIT 2019 est structurée comme suit:
                        <ol>
                            <li>Objectifs d'entreprise (Business Goals)</li>
                            <li>Objectifs liés aux TI (Alignment Goals / IT-Related Goals)</li>
                            <li>Objectifs de gouvernance et de management des TI (Governance and Management Objectives)</li>
                            <li>Composants de gouvernance (Governance Components)</li>
                        </ol>
                        Les objectifs liés aux TI sont le maillon qui traduit les objectifs d'entreprise en termes plus spécifiques aux TI, avant de les lier aux objectifs de gouvernance et de management concrets.
                    </li>
                    <li><strong>C) Les composants de gouvernance:</strong> Ce sont les éléments (processus, structures, etc.) qui aident à atteindre les objectifs de gouvernance et de management, pas un niveau intermédiaire dans la cascade elle-même.</li>
                    <li><strong>D) Les objectifs des processus:</strong> Ce sont des objectifs plus granulaires qui décrivent ce que chaque processus spécifique cherche à atteindre, situés à un niveau inférieur après les objectifs de gouvernance et de management.</li>
                </ul>
                <p><strong>Nuance pour l'examen:</strong> La cascade des objectifs est un concept fondamental pour comprendre comment COBIT assure l'alignement. Mémorisez l'ordre et la relation entre ces différents niveaux.</p>
            `
        },
        // Question 6
        {
            question: "6. Quel rôle joue le 'Responsible' dans une matrice RACI selon COBIT?",
            options: [
                "A) La personne en charge de la décision finale.",
                "B) La personne qui exécute la tâche.",
                "C) La personne qui doit être consultée.",
                "D) La personne qui doit être informée."
            ],
            correctAnswer: "B",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: B</p>
                <p><strong>Commentaire Détaillé:</strong> Dans une matrice RACI, le 'Responsible' (R) est la personne ou le rôle qui effectue la tâche ou le travail. Il peut y avoir plusieurs 'Responsibles' pour une même tâche, mais un seul 'Accountable'.</p>
                <p><strong>Nuance pour l'examen:</strong> Ne confondez pas 'Responsible' avec 'Accountable'. L'Accountable (A) est le propriétaire du résultat final et est responsable devant les supérieurs, tandis que le Responsible fait le travail effectif. Consulted (C) est consulté avant la décision, Informed (I) est informé après la décision.</p>
            `
        },
        // Question 7
        {
            question: "7. Quel est l'objectif du domaine 'MEA' (Monitor, Evaluate and Assess) dans COBIT 2019?",
            options: [
                "A) Construire et acquérir des solutions TI.",
                "B) Fournir et supporter les services TI.",
                "C) Alignement, planification et organisation des TI.",
                "D) Surveiller la performance, évaluer la conformité et évaluer les résultats."
            ],
            correctAnswer: "D",
            explanation: `
                <p class="text-success fw-bold">Réponse Correcte: D</p>
                <p><strong>Commentaire Détaillé:</strong> MEA (Monitor, Evaluate and Assess) est le dernier des quatre domaines d'objectifs de management de COBIT 2019. Son rôle est de s'assurer que les processus et les objectifs sont atteints, que la conformité est respectée, et que les performances sont mesurées pour l'amélioration continue.</p>
                <p><strong>Nuance pour l'examen:</strong> Les quatre domaines de management (APO, BAI, DSS, MEA) couvrent l'ensemble du cycle de vie du management des TI. MEA est crucial pour le feedback et l'amélioration continue, bouclant la boucle avec la gouvernance (EDM).</p>
            `
        },
        // --- START OF PLACEHOLDER QUESTIONS (ADD YOUR REAL CONTENT HERE) ---
        // You MUST replace these placeholders with actual COBIT 2019 questions and detailed explanations.
        // There are 33 placeholder questions here to reach the total of 40.
        {
            question: "8. Placeholder Question 8: This is a placeholder question. Replace me with real COBIT content.",
            options: [
                "A) Placeholder option A",
                "B) Placeholder option B",
                "C) Placeholder option C",
                "D) Placeholder option D"
            ],
            correctAnswer: "A", // Adjust this as needed for your real question
            explanation: `<p class="text-info">Placeholder Explanation 8: This explanation needs to be replaced with detailed commentary and nuances for the real question. Ensure it explains why the correct answer is right and others are wrong.</p>`
        },
        {
            question: "9. Placeholder Question 9: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "B",
            explanation: `<p class="text-info">Placeholder Explanation 9.</p>`
        },
        {
            question: "10. Placeholder Question 10: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "C",
            explanation: `<p class="text-info">Placeholder Explanation 10.</p>`
        },
        {
            question: "11. Placeholder Question 11: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "D",
            explanation: `<p class="text-info">Placeholder Explanation 11.</p>`
        },
        {
            question: "12. Placeholder Question 12: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "A",
            explanation: `<p class="text-info">Placeholder Explanation 12.</p>`
        },
        {
            question: "13. Placeholder Question 13: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "B",
            explanation: `<p class="text-info">Placeholder Explanation 13.</p>`
        },
        {
            question: "14. Placeholder Question 14: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "C",
            explanation: `<p class="text-info">Placeholder Explanation 14.</p>`
        },
        {
            question: "15. Placeholder Question 15: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "D",
            explanation: `<p class="text-info">Placeholder Explanation 15.</p>`
        },
        {
            question: "16. Placeholder Question 16: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "A",
            explanation: `<p class="text-info">Placeholder Explanation 16.</p>`
        },
        {
            question: "17. Placeholder Question 17: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "B",
            explanation: `<p class="text-info">Placeholder Explanation 17.</p>`
        },
        {
            question: "18. Placeholder Question 18: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "C",
            explanation: `<p class="text-info">Placeholder Explanation 18.</p>`
        },
        {
            question: "19. Placeholder Question 19: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "D",
            explanation: `<p class="text-info">Placeholder Explanation 19.</p>`
        },
        {
            question: "20. Placeholder Question 20: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "A",
            explanation: `<p class="text-info">Placeholder Explanation 20.</p>`
        },
        {
            question: "21. Placeholder Question 21: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "B",
            explanation: `<p class="text-info">Placeholder Explanation 21.</p>`
        },
        {
            question: "22. Placeholder Question 22: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "C",
            explanation: `<p class="text-info">Placeholder Explanation 22.</p>`
        },
        {
            question: "23. Placeholder Question 23: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "D",
            explanation: `<p class="text-info">Placeholder Explanation 23.</p>`
        },
        {
            question: "24. Placeholder Question 24: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "A",
            explanation: `<p class="text-info">Placeholder Explanation 24.</p>`
        },
        {
            question: "25. Placeholder Question 25: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "B",
            explanation: `<p class="text-info">Placeholder Explanation 25.</p>`
        },
        {
            question: "26. Placeholder Question 26: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "C",
            explanation: `<p class="text-info">Placeholder Explanation 26.</p>`
        },
        {
            question: "27. Placeholder Question 27: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "D",
            explanation: `<p class="text-info">Placeholder Explanation 27.</p>`
        },
        {
            question: "28. Placeholder Question 28: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "A",
            explanation: `<p class="text-info">Placeholder Explanation 28.</p>`
        },
        {
            question: "29. Placeholder Question 29: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "B",
            explanation: `<p class="text-info">Placeholder Explanation 29.</p>`
        },
        {
            question: "30. Placeholder Question 30: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "C",
            explanation: `<p class="text-info">Placeholder Explanation 30.</p>`
        },
        {
            question: "31. Placeholder Question 31: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "D",
            explanation: `<p class="text-info">Placeholder Explanation 31.</p>`
        },
        {
            question: "32. Placeholder Question 32: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "A",
            explanation: `<p class="text-info">Placeholder Explanation 32.</p>`
        },
        {
            question: "33. Placeholder Question 33: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "B",
            explanation: `<p class="text-info">Placeholder Explanation 33.</p>`
        },
        {
            question: "34. Placeholder Question 34: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "C",
            explanation: `<p class="text-info">Placeholder Explanation 34.</p>`
        },
        {
            question: "35. Placeholder Question 35: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "D",
            explanation: `<p class="text-info">Placeholder Explanation 35.</p>`
        },
        {
            question: "36. Placeholder Question 36: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "A",
            explanation: `<p class="text-info">Placeholder Explanation 36.</p>`
        },
        {
            question: "37. Placeholder Question 37: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "B",
            explanation: `<p class="text-info">Placeholder Explanation 37.</p>`
        },
        {
            question: "38. Placeholder Question 38: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "C",
            explanation: `<p class="text-info">Placeholder Explanation 38.</p>`
        },
        {
            question: "39. Placeholder Question 39: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "D",
            explanation: `<p class="text-info">Placeholder Explanation 39.</p>`
        },
        {
            question: "40. Placeholder Question 40: Replace with real COBIT content.",
            options: ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
            correctAnswer: "A",
            explanation: `<p class="text-info">Placeholder Explanation 40.</p>`
        }
        // --- END OF PLACEHOLDER QUESTIONS ---
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null; // To track the user's current selection

    // Get references to HTML elements
    const quizContainer = document.getElementById('quizContainer');
    const questionDisplay = document.getElementById('questionDisplay');
    const explanationDisplay = document.getElementById('explanationDisplay');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    const restartQuizBtn = document.getElementById('restartQuizBtn'); // Button during quiz

    const quizResults = document.getElementById('quizResults');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const totalQuestionsFinalDisplay = document.getElementById('totalQuestionsFinalDisplay'); // Renamed ID
    const progressBarScore = document.getElementById('progressBarScore');
    const recommendationsDiv = document.getElementById('recommendations');
    const retakeQuizBtn = document.getElementById('retakeQuizBtn'); // Button in results

    // Elements for question tracking
    const currentQuestionNumberSpan = document.getElementById('currentQuestionNumber');
    const totalQuestionsCountSpan = document.getElementById('totalQuestionsCount');


    // Function to load a question
    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];

            // Update question counter
            currentQuestionNumberSpan.textContent = currentQuestionIndex + 1;
            totalQuestionsCountSpan.textContent = questions.length;

            questionDisplay.innerHTML = `
                <p class="fw-bold">${q.question}</p>
                <div class="options-container">
                    ${q.options.map((option, index) => `
                        <div class="quiz-option" data-option="${String.fromCharCode(65 + index)}">${option}</div>
                    `).join('')}
                </div>
            `;
            explanationDisplay.style.display = 'none';
            explanationDisplay.innerHTML = '';
            nextQuestionBtn.style.display = 'none'; // Hide next button until an answer is selected
            restartQuizBtn.style.display = 'none'; // Hide restart during quiz
            selectedOption = null; // Reset selected option

            addOptionClickListeners();
        } else {
            showResults();
        }
    }

    // Function to add click listeners to options
    function addOptionClickListeners() {
        const options = questionDisplay.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', function() {
                // Only allow selection if an option hasn't been selected yet for this question
                if (selectedOption === null) {
                    options.forEach(opt => {
                        opt.classList.remove('selected', 'correct', 'incorrect');
                    });
                    this.classList.add('selected');
                    selectedOption = this; // Store the selected option

                    checkAnswer(this);
                    nextQuestionBtn.style.display = 'block'; // Show next button
                }
            });
        });
    }

    // Function to check the answer
    function checkAnswer(selectedDiv) {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedValue = selectedDiv.dataset.option;

        if (selectedValue === currentQuestion.correctAnswer) {
            selectedDiv.classList.add('correct');
            score++;
        } else {
            selectedDiv.classList.add('incorrect');
            // Highlight the correct answer if the user was wrong
            const correctOptionDiv = questionDisplay.querySelector(`.quiz-option[data-option="${currentQuestion.correctAnswer}"]`);
            if (correctOptionDiv) {
                correctOptionDiv.classList.add('correct');
            }
        }
        explanationDisplay.innerHTML = currentQuestion.explanation;
        explanationDisplay.style.display = 'block';
    }

    // Event listener for the "Next Question" button
    nextQuestionBtn.addEventListener('click', function() {
        currentQuestionIndex++;
        loadQuestion();
    });

    // Function to show results
    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreDisplay.textContent = score;
        totalQuestionsFinalDisplay.textContent = questions.length; // Use the new ID

        const percentage = (score / questions.length) * 100;
        progressBarScore.style.width = percentage + '%';
        progressBarScore.setAttribute('aria-valuenow', percentage);

        let recommendationsText = "";
        let recommendationClass = "";

        // COBIT Foundation passing score is 65% (26/40 questions)
        if (percentage >= 90) {
            recommendationsText = `<p><i class='fas fa-check-circle me-2'></i>Excellent travail! Vous avez une excellente maîtrise des concepts de COBIT Foundation. Vous êtes très bien préparé(e) pour l'examen.</p><p><strong>Recommandations:</strong> Continuez à réviser les nuances et les cas pratiques. Faites des examens blancs chronométrés pour gérer le temps.</p>`;
            recommendationClass = "alert-success";
        } else if (percentage >= 75) {
            recommendationsText = `<p><i class='fas fa-info-circle me-2'></i>Bonne performance! Vous avez une bonne compréhension des concepts de COBIT Foundation. Vous êtes sur la bonne voie.</p><p><strong>Recommandations:</strong> Revoyez les chapitres où vous avez eu des difficultés. Concentrez-vous sur les détails des objectifs de gouvernance et de management (EDM, APO, BAI, DSS, MEA) et leurs interconnexions.</p>`;
            recommendationClass = "alert-info";
        } else if (percentage >= 65) {
            recommendationsText = `<p><i class='fas fa-exclamation-triangle me-2'></i>Performance correcte. Vous avez atteint le seuil de réussite minimal, mais des améliorations sont possibles pour assurer votre succès.</p><p><strong>Recommandations:</strong> Concentrez-vous sur les principes fondamentaux, la cascade des objectifs et les facteurs de conception. Revoyez tous les domaines où vous avez des doutes et refaites les exercices. Visez une plus grande marge de sécurité.</p>`;
            recommendationClass = "alert-warning";
        } else {
            recommendationsText = `<p><i class='fas fa-times-circle me-2'></i>Votre score est insuffisant pour l'examen de certification. Une révision approfondie est nécessaire (le seuil de réussite est de 65%).</p><p><strong>Recommandations:</strong> Reprenez l'ensemble du matériel de cours depuis le début. Concentrez-vous sur la compréhension des définitions clés, des rôles, des responsabilités et des objectifs de chaque processus. N'hésitez pas à demander de l'aide si certains concepts restent flous.</p>`;
            recommendationClass = "alert-danger";
        }
        recommendationsDiv.innerHTML = recommendationsText;
        recommendationsDiv.className = `alert ${recommendationClass} mt-4`; // Apply Bootstrap alert class
    }

    // Restart Quiz functionality (from results screen)
    retakeQuizBtn.addEventListener('click', startQuiz);

    // Function to initialize/reset the quiz
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        selectedOption = null;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        nextQuestionBtn.style.display = 'none';
        restartQuizBtn.style.display = 'none';
        explanationDisplay.style.display = 'none';
        explanationDisplay.innerHTML = '';
        
        loadQuestion(); // Load the first question
    }

    // Attach event listener to the "Quiz Learn" tab button
    const quizLearnTabBtn = document.getElementById('quiz-learn-tab');
    if (quizLearnTabBtn) {
        quizLearnTabBtn.addEventListener('shown.bs.tab', function (event) {
            // This event fires when the tab has been made active
            startQuiz(); // Start the quiz when the tab is shown
        });
    }

    // Initial load if the tab is already active when page loads (e.g., if page refreshed on this tab)
    // This handles cases where the user might refresh the page while on the Quiz Learn tab.
    if (document.getElementById('quiz-learn').classList.contains('active')) {
        startQuiz();
    }
});