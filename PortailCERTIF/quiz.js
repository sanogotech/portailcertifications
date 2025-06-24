const quizzes = {
  capm: [
    { question: "Que signifie CAPM ?", options: ["Certified Associate in Project Management", "Certified Agile Project Manager", "Controlled Agile Planning Model"], answer: 0 },
    { question: "Combien d'heures de formation sont nécessaires pour le CAPM ?", options: ["15", "23", "35"], answer: 1 },
    { question: "CAPM est proposé par :", options: ["AXELOS", "PMI", "Scrum.org"], answer: 1 },
    { question: "Quel est le principal objectif du CAPM ?", options: ["Diriger une équipe", "Comprendre les bases de la gestion de projet", "Développer un logiciel"], answer: 1 },
    { question: "Le CAPM est destiné aux :", options: ["Experts", "Débutants", "Scrum Masters"], answer: 1 },
    { question: "La certification CAPM expire après :", options: ["2 ans", "3 ans", "5 ans"], answer: 2 },
    { question: "Le CAPM nécessite :", options: ["Expérience en gestion de projet", "Un diplôme d'ingénieur", "Aucun prérequis formel"], answer: 2 },
    { question: "La gestion de projet inclut :", options: ["Initiation, planification, exécution, clôture", "Analyse, tests, déploiement", "Support, maintenance, backup"], answer: 0 },
    { question: "Le chef de projet est responsable de :", options: ["Réaliser les tâches techniques", "Planifier et coordonner les activités", "Acheter le matériel"], answer: 1 },
    { question: "Une partie prenante est :", options: ["Un membre de l'équipe seulement", "Toute personne impactée par le projet", "Uniquement le client"], answer: 1 },
    { question: "Une contrainte projet n'est PAS :", options: ["Coût", "Délais", "Langue"], answer: 2 },
    { question: "Le cycle de vie d'un projet commence par :", options: ["Clôture", "Planification", "Initiation"], answer: 2 },
    { question: "Quel outil est souvent utilisé pour le suivi planning ?", options: ["Word", "Excel", "MS Project"], answer: 2 },
    { question: "Que signifie le terme 'livrable' ?", options: ["Un document d'achat", "Un résultat tangible ou intangible livré au client", "Un coût du projet"], answer: 1 },
    { question: "La meilleure façon d'éviter les risques est de :", options: ["Ignorer les problèmes", "Planifier et anticiper les risques", "Réagir après coup"], answer: 1 }
  ],
  pmp: [
    { question: "La triple contrainte comprend :", options: ["Temps, coût, qualité", "Temps, budget, sécurité", "Qualité, risques, communication"], answer: 0 },
    { question: "Combien de domaines de performance sont définis par le PMBOK 7 ?", options: ["5", "8", "12"], answer: 1 },
    { question: "Le PMP est délivré par :", options: ["PMI", "AXELOS", "ISACA"], answer: 0 },
    { question: "Le PMP est recommandé pour :", options: ["Assistants de projet", "Chefs de projet expérimentés", "Développeurs"], answer: 1 },
    { question: "La gestion des risques comprend :", options: ["Suppression totale des risques", "Identification, évaluation, réponse", "Utilisation de VPN"], answer: 1 },
    { question: "Une charte de projet est utilisée pour :", options: ["Démarrer officiellement un projet", "Lister les tâches", "Créer un diagramme"], answer: 0 },
    { question: "Le PMBOK est :", options: ["Un logiciel", "Un guide de bonnes pratiques", "Un langage de programmation"], answer: 1 },
    { question: "Une WBS permet :", options: ["De créer un organigramme des tâches", "D'acheter du matériel", "D'affecter les équipes"], answer: 0 },
    { question: "Qui approuve la charte du projet ?", options: ["Le client", "Le sponsor", "L'équipe projet"], answer: 1 },
    { question: "Un KPI est :", options: ["Un mot de passe", "Un indicateur clé de performance", "Un outil de communication"], answer: 1 },
    { question: "Le périmètre du projet définit :", options: ["Les limites et contenus du projet", "Le budget", "Les risques"], answer: 0 },
    { question: "Le PMP est valide pendant :", options: ["1 an", "3 ans", "5 ans"], answer: 1 },
    { question: "Que signifie RACI ?", options: ["Responsable, Approuve, Consulté, Informé", "Risque, Action, Contrôle, Impact", "Régulation, Analyse, Contrôle, Implémentation"], answer: 0 },
    { question: "La méthode de planification critique est :", options: ["PERT", "CPM", "Kanban"], answer: 1 },
    { question: "Le budget du projet est :", options: ["La somme des dépenses autorisées", "Le prix du logiciel utilisé", "Le coût du matériel"], answer: 0 }
  ],
  prince2: [
    { question: "Que signifie PRINCE2 ?", options: ["PRojects IN Controlled Environments", "Project Integration and Control Environment", "Process Innovation for New Corporate Environments"], answer: 0 },
    { question: "PRINCE2 est développé par :", options: ["PMI", "AXELOS", "Scrum Alliance"], answer: 1 },
    { question: "Combien de principes PRINCE2 existe-t-il ?", options: ["5", "7", "10"], answer: 1 },
    { question: "Quel est l'un des thèmes PRINCE2 ?", options: ["Business Case", "Backlog", "Burn-down Chart"], answer: 0 },
    { question: "Quel est le document principal qui définit comment le projet sera géré ?", options: ["Product Description", "Project Brief", "Project Initiation Documentation"], answer: 2 },
    { question: "Qui est responsable de la gestion quotidienne du projet ?", options: ["Project Board", "Project Manager", "Team Manager"], answer: 1 },
    { question: "Quelle est la première étape du processus PRINCE2 ?", options: ["Starting up a Project", "Initiating a Project", "Directing a Project"], answer: 0 },
    { question: "Quel rôle représente l'intérêt business dans PRINCE2 ?", options: ["Executive", "Senior User", "Senior Supplier"], answer: 0 },
    { question: "Quel est le principal avantage de PRINCE2 ?", options: ["Flexibilité", "Approche contrôlée", "Livraison rapide"], answer: 1 },
    { question: "Combien de processus PRINCE2 existe-t-il ?", options: ["5", "7", "9"], answer: 1 },
    { question: "Quel document autorise formellement un projet ?", options: ["Project Brief", "Project Mandate", "Project Product Description"], answer: 0 },
    { question: "Quelle technique PRINCE2 est utilisée pour évaluer les produits ?", options: ["Quality Review", "Risk Review", "Stakeholder Analysis"], answer: 0 },
    { question: "Quel est le niveau le plus élevé de gestion dans PRINCE2 ?", options: ["Corporate Management", "Project Board", "Project Assurance"], answer: 1 },
    { question: "Quel thème PRINCE2 traite des changements ?", options: ["Change", "Progress", "Risk"], answer: 0 },
    { question: "Quel est le principal artefact PRINCE2 ?", options: ["Product Breakdown Structure", "Work Package", "Product Description"], answer: 2 }
  ],
  scrum: [
    { question: "Scrum est un :", options: ["Processus", "Cadre", "Méthodologie"], answer: 1 },
    { question: "Quel est le rôle principal du Scrum Master ?", options: ["Gérer l'équipe", "Faciliter le processus Scrum", "Définir les exigences"], answer: 1 },
    { question: "Qui est responsable du Product Backlog ?", options: ["Scrum Master", "Product Owner", "Équipe de développement"], answer: 1 },
    { question: "Quelle est la durée maximale d'un Sprint ?", options: ["1 semaine", "2 semaines", "1 mois"], answer: 2 },
    { question: "Quel événement Scrum sert à inspecter l'incrément ?", options: ["Daily Scrum", "Sprint Review", "Sprint Retrospective"], answer: 1 },
    { question: "Quel artefact montre le travail restant ?", options: ["Product Backlog", "Sprint Backlog", "Burndown Chart"], answer: 2 },
    { question: "Quelle cérémonie Scrum est quotidienne ?", options: ["Sprint Planning", "Daily Scrum", "Backlog Refinement"], answer: 1 },
    { question: "Qui peut annuler un Sprint ?", options: ["Product Owner", "Scrum Master", "Équipe de développement"], answer: 0 },
    { question: "Quelle est la taille idéale d'une équipe Scrum ?", options: ["3-5", "5-9", "9-12"], answer: 1 },
    { question: "Quel principe Agile est au cœur de Scrum ?", options: ["Documentation complète", "Livraison fréquente", "Négociation contractuelle"], answer: 1 },
    { question: "Quel événement permet d'améliorer le processus ?", options: ["Sprint Review", "Sprint Retrospective", "Daily Scrum"], answer: 1 },
    { question: "Qui décide comment faire le travail ?", options: ["Product Owner", "Scrum Master", "Équipe de développement"], answer: 2 },
    { question: "Quel est le principal avantage de Scrum ?", options: ["Prévisibilité", "Flexibilité", "Documentation"], answer: 1 },
    { question: "Quel rôle n'existe pas dans Scrum ?", options: ["Product Owner", "Project Manager", "Scrum Master"], answer: 1 },
    { question: "Quelle métrique mesure la vélocité ?", options: ["Heures travaillées", "Points d'histoire complétés", "Tâches terminées"], answer: 1 }
  ],
  itil: [
    { question: "Que signifie ITIL ?", options: ["Information Technology Infrastructure Library", "International Technology Integration Layer", "Integrated Technical Implementation Logic"], answer: 0 },
    { question: "Quelle version d'ITIL est la plus récente ?", options: ["ITIL v3", "ITIL 4", "ITIL 2018"], answer: 1 },
    { question: "Quel est le concept central d'ITIL 4 ?", options: ["Processus", "Service Value System", "Configuration Items"], answer: 1 },
    { question: "Quelle pratique ITIL gère les incidents ?", options: ["Incident Management", "Problem Management", "Change Control"], answer: 0 },
    { question: "Quelle est la première étape du cycle de vie des services ?", options: ["Service Strategy", "Service Design", "Service Operation"], answer: 0 },
    { question: "Quel document enregistre tous les incidents ?", options: ["Service Catalog", "CMDB", "Incident Register"], answer: 2 },
    { question: "Qui est responsable de la gestion des changements ?", options: ["Change Advisory Board", "Service Desk", "Incident Manager"], answer: 0 },
    { question: "Quelle pratique gère les demandes de service ?", options: ["Request Fulfillment", "Event Management", "Access Management"], answer: 0 },
    { question: "Quel est le but du Service Desk ?", options: ["Résoudre les incidents", "Fournir un point de contact unique", "Gérer les fournisseurs"], answer: 1 },
    { question: "Quel concept ITIL représente des actifs ?", options: ["CI", "KPI", "SLA"], answer: 0 },
    { question: "Quelle pratique gère les problèmes récurrents ?", options: ["Incident Management", "Problem Management", "Knowledge Management"], answer: 1 },
    { question: "Quel document définit les attentes de service ?", options: ["SLA", "OLP", "UC"], answer: 0 },
    { question: "Quelle dimension ITIL couvre les partenariats ?", options: ["Organizations and People", "Partners and Suppliers", "Value Streams"], answer: 1 },
    { question: "Quel principe guide ITIL 'Commencez là où vous êtes' ?", options: ["Focus on Value", "Start Where You Are", "Progress Iteratively"], answer: 1 },
    { question: "Quelle pratique améliore continuellement ?", options: ["Continual Improvement", "Service Level Management", "Capacity Management"], answer: 0 }
  ],
  cobit: [
    { question: "Que signifie COBIT ?", options: ["Control Objectives for Information and Related Technologies", "Corporate Objectives for IT", "Compliance Objectives for Business IT"], answer: 0 },
    { question: "Qui publie COBIT ?", options: ["ISACA", "PMI", "AXELOS"], answer: 0 },
    { question: "Quelle est la dernière version de COBIT ?", options: ["COBIT 4.1", "COBIT 5", "COBIT 2019"], answer: 2 },
    { question: "Combien de principes de gouvernance COBIT 2019 a-t-il ?", options: ["5", "6", "7"], answer: 1 },
    { question: "Quel domaine COBIT traite de la stratégie ?", options: ["Align, Plan and Organize", "Evaluate, Direct and Monitor", "Deliver, Service and Support"], answer: 0 },
    { question: "Quel composant du système de gouvernance inclut les processus ?", options: ["Processes", "Organizational Structures", "Culture"], answer: 0 },
    { question: "Quel objectif traite de la gestion des risques ?", options: ["EDM03", "APO12", "DSS05"], answer: 1 },
    { question: "Quel concept COBIT relie les objectifs d'entreprise et IT ?", options: ["Cascade", "Framework", "Governance System"], answer: 0 },
    { question: "Quelle certification COBIT est pour les fondations ?", options: ["COBIT Foundation", "COBIT Implementer", "COBIT Assessor"], answer: 0 },
    { question: "Quel domaine traite de la surveillance continue ?", options: ["Monitor, Evaluate and Assess", "Evaluate, Direct and Monitor", "Align, Plan and Organize"], answer: 0 },
    { question: "Quel principe COBIT met l'accent sur la valeur ?", options: ["Holistic Approach", "Dynamic Governance System", "Provide Stakeholder Value"], answer: 2 },
    { question: "Quel composant inclut la culture et l'éthique ?", options: ["Processes", "Information", "Culture, Ethics and Behavior"], answer: 2 },
    { question: "Quel objectif traite de la conformité ?", options: ["APO01", "BAI06", "MEA02"], answer: 2 },
    { question: "Quelle approche COBIT recommande-t-il ?", options: ["Top-down", "Bottom-up", "Les deux"], answer: 2 },
    { question: "Quel outil aide à évaluer les capacités ?", options: ["Process Assessment Model", "Maturity Model", "Capability Assessment"], answer: 0 }
  ],
  togaf: [
    { question: "Que signifie TOGAF ?", options: ["The Open Group Architecture Framework", "Technical and Organizational Governance Assessment Framework", "Total Organizational Governance Architecture Framework"], answer: 0 },
    { question: "Quelle partie de TOGAF décrit la méthode ADM ?", options: ["Part I", "Part II", "Part III"], answer: 1 },
    { question: "Combien de phases l'ADM a-t-il ?", options: ["7", "9", "10"], answer: 2 },
    { question: "Quelle est la première phase de l'ADM ?", options: ["Preliminary", "Architecture Vision", "Business Architecture"], answer: 0 },
    { question: "Quel concept TOGAF stocke les artefacts ?", options: ["Architecture Repository", "Enterprise Continuum", "Architecture Content Framework"], answer: 0 },
    { question: "Quelle phase crée l'Architecture Vision ?", options: ["Phase A", "Phase B", "Phase C"], answer: 0 },
    { question: "Quelle certification TOGAF est de niveau 1 ?", options: ["Foundation", "Certified", "Practitioner"], answer: 0 },
    { question: "Quel domaine traite des applications ?", options: ["Business Architecture", "Data Architecture", "Application Architecture"], answer: 2 },
    { question: "Quel concept TOGAF classe les solutions ?", options: ["Architecture Building Blocks", "Solutions Building Blocks", "Les deux"], answer: 2 },
    { question: "Quelle phase gère les exigences ?", options: ["Phase H", "Requirements Management", "Phase E"], answer: 1 },
    { question: "Quel document décrit l'état cible ?", options: ["Architecture Definition Document", "Architecture Roadmap", "Architecture Contract"], answer: 0 },
    { question: "Quelle technique identifie les parties prenantes ?", options: ["Stakeholder Map", "Business Scenario", "Capability Assessment"], answer: 1 },
    { question: "Quelle phase traite de la migration ?", options: ["Phase D", "Phase E", "Phase F"], answer: 2 },
    { question: "Quel concept relie les artefacts aux processus ?", options: ["Content Metamodel", "Enterprise Continuum", "Architecture Repository"], answer: 0 },
    { question: "Quelle certification TOGAF nécessite la Foundation ?", options: ["Certified", "Master", "Distinguished"], answer: 0 }
  ]
};

// Gestionnaire principal du quiz
class QuizManager {
  constructor() {
    this.quizContainer = null;
    this.currentQuiz = null;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.initialize();
  }

  initialize() {
    this.createQuizContainer();
    this.setupEventListeners();
  }

  createQuizContainer() {
    this.quizContainer = document.getElementById('quiz-main-container');
    
    if (!this.quizContainer) {
      this.quizContainer = document.createElement('div');
      this.quizContainer.id = 'quiz-main-container';
      this.quizContainer.className = 'quiz-container';
      
      const rightColumn = document.querySelector('.col-lg-8.col-md-7');
      if (rightColumn) {
        rightColumn.prepend(this.quizContainer);
      }
    }
  }

  setupEventListeners() {
    document.querySelectorAll('[data-quiz]').forEach(button => {
      button.addEventListener('click', (e) => {
        const quizName = e.currentTarget.getAttribute('data-quiz');
        this.startQuiz(quizName);
      });
    });

    document.querySelectorAll('[onclick^="startQuiz("]').forEach(btn => {
      const match = btn.getAttribute('onclick').match(/startQuiz\('([^']+)'/);
      if (match && match[1]) {
        const quizName = match[1];
        btn.onclick = null;
        btn.setAttribute('data-quiz', quizName);
        btn.addEventListener('click', () => this.startQuiz(quizName));
      }
    });
  }

  startQuiz(quizName) {
    if (!quizzes[quizName]) {
      this.showError(`Le quiz ${quizName} n'est pas disponible`);
      return;
    }

    this.currentQuiz = quizzes[quizName];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.displayQuestion();
  }

  displayQuestion() {
    if (this.currentQuestionIndex >= this.currentQuiz.length) {
      this.showResults();
      return;
    }

    const question = this.currentQuiz[this.currentQuestionIndex];
    const questionNumber = this.currentQuestionIndex + 1;
    
    this.quizContainer.innerHTML = `
      <div class="card shadow-sm">
        <div class="card-header bg-white d-flex justify-content-between align-items-center">
          <h5 class="mb-0">
            <i class="fas fa-question-circle text-primary me-2"></i>
            Question ${questionNumber}/${this.currentQuiz.length}
          </h5>
          <span class="badge bg-primary">Score: ${this.score}</span>
        </div>
        <div class="card-body">
          <p class="lead">${question.question}</p>
          <div class="d-grid gap-2">
            ${question.options.map((option, index) => `
              <button class="btn btn-outline-primary text-start answer-btn" 
                      data-answer="${index}">
                ${option}
              </button>
            `).join('')}
          </div>
          <div id="quiz-feedback" class="mt-3"></div>
        </div>
      </div>
    `;

    this.quizContainer.querySelectorAll('.answer-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.checkAnswer(parseInt(e.currentTarget.getAttribute('data-answer')));
      });
    });
  }

  checkAnswer(selectedIndex) {
    const question = this.currentQuiz[this.currentQuestionIndex];
    const feedback = this.quizContainer.querySelector('#quiz-feedback');
    
    if (selectedIndex === question.answer) {
      feedback.innerHTML = `<div class="alert alert-success">✅ Bonne réponse!</div>`;
      this.score++;
    } else {
      feedback.innerHTML = `
        <div class="alert alert-danger">
          ❌ Faux. La bonne réponse était: <strong>${question.options[question.answer]}</strong>
        </div>
      `;
    }

    this.currentQuestionIndex++;
    setTimeout(() => this.displayQuestion(), 1500);
  }

  showResults() {
    const percentage = Math.round((this.score / this.currentQuiz.length) * 100);
    const resultClass = percentage >= 70 ? 'text-success' : 'text-danger';
    
    this.quizContainer.innerHTML = `
      <div class="card shadow-sm">
        <div class="card-header bg-white">
          <h5 class="mb-0">
            <i class="fas fa-trophy text-warning me-2"></i>
            Résultats du quiz
          </h5>
        </div>
        <div class="card-body text-center">
          <div class="display-4 mb-3 ${resultClass}">
            ${percentage}%
          </div>
          <p class="lead">Vous avez ${this.score} bonnes réponses sur ${this.currentQuiz.length}</p>
          
          <div class="progress mb-4" style="height: 10px;">
            <div class="progress-bar ${resultClass}" 
                 style="width: ${percentage}%"></div>
          </div>
          
          <button class="btn btn-primary me-2" id="restart-quiz">
            <i class="fas fa-redo me-2"></i>Recommencer
          </button>
          <button class="btn btn-outline-secondary" id="choose-another">
            <i class="fas fa-list me-2"></i>Choisir un autre quiz
          </button>
        </div>
      </div>
    `;

    this.quizContainer.querySelector('#restart-quiz').addEventListener('click', () => {
      this.startQuiz(Object.keys(quizzes).find(key => quizzes[key] === this.currentQuiz));
    });

    this.quizContainer.querySelector('#choose-another').addEventListener('click', () => {
      this.quizContainer.innerHTML = `
        <div class="alert alert-info">
          <i class="fas fa-info-circle me-2"></i>
          Sélectionnez un quiz dans la colonne de gauche
        </div>
      `;
    });
  }

  showError(message) {
    this.quizContainer.innerHTML = `
      <div class="alert alert-danger">
        <i class="fas fa-exclamation-triangle me-2"></i>
        ${message}
      </div>
    `;
  }
}

// Initialisation du quiz
document.addEventListener('DOMContentLoaded', () => {
  new QuizManager();
});