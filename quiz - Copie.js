const quizzes = {
  capm: [
    { question: "Que signifie CAPM ?", options: ["Certified Associate in Project Management", "Certified Agile Project Manager", "Controlled Agile Planning Model"], answer: 0 },
    { question: "Combien d’heures de formation sont nécessaires pour le CAPM ?", options: ["15", "23", "35"], answer: 1 },
    { question: "CAPM est proposé par :", options: ["AXELOS", "PMI", "Scrum.org"], answer: 1 },
    { question: "Quel est le principal objectif du CAPM ?", options: ["Diriger une équipe", "Comprendre les bases de la gestion de projet", "Développer un logiciel"], answer: 1 },
    { question: "Le CAPM est destiné aux :", options: ["Experts", "Débutants", "Scrum Masters"], answer: 1 },
    { question: "La certification CAPM expire après :", options: ["2 ans", "3 ans", "5 ans"], answer: 2 },
    { question: "Le CAPM nécessite :", options: ["Expérience en gestion de projet", "Un diplôme d’ingénieur", "Aucun prérequis formel"], answer: 2 },
    { question: "La gestion de projet inclut :", options: ["Initiation, planification, exécution, clôture", "Analyse, tests, déploiement", "Support, maintenance, backup"], answer: 0 },
    { question: "Le chef de projet est responsable de :", options: ["Réaliser les tâches techniques", "Planifier et coordonner les activités", "Acheter le matériel"], answer: 1 },
    { question: "Une partie prenante est :", options: ["Un membre de l’équipe seulement", "Toute personne impactée par le projet", "Uniquement le client"], answer: 1 },
    { question: "Une contrainte projet n’est PAS :", options: ["Coût", "Délais", "Langue"], answer: 2 },
    { question: "Le cycle de vie d’un projet commence par :", options: ["Clôture", "Planification", "Initiation"], answer: 2 },
    { question: "Quel outil est souvent utilisé pour le suivi planning ?", options: ["Word", "Excel", "MS Project"], answer: 2 },
    { question: "Que signifie le terme 'livrable' ?", options: ["Un document d’achat", "Un résultat tangible ou intangible livré au client", "Un coût du projet"], answer: 1 },
    { question: "La meilleure façon d’éviter les risques est de :", options: ["Ignorer les problèmes", "Planifier et anticiper les risques", "Réagir après coup"], answer: 1 }
  ],
  pmp: [
    { question: "La triple contrainte comprend :", options: ["Temps, coût, qualité", "Temps, budget, sécurité", "Qualité, risques, communication"], answer: 0 },
    { question: "Combien de domaines de performance sont définis par le PMBOK 7 ?", options: ["5", "8", "12"], answer: 1 },
    { question: "Le PMP est délivré par :", options: ["PMI", "AXELOS", "ISACA"], answer: 0 },
    { question: "Le PMP est recommandé pour :", options: ["Assistants de projet", "Chefs de projet expérimentés", "Développeurs"], answer: 1 },
    { question: "La gestion des risques comprend :", options: ["Suppression totale des risques", "Identification, évaluation, réponse", "Utilisation de VPN"], answer: 1 },
    { question: "Une charte de projet est utilisée pour :", options: ["Démarrer officiellement un projet", "Lister les tâches", "Créer un diagramme"], answer: 0 },
    { question: "Le PMBOK est :", options: ["Un logiciel", "Un guide de bonnes pratiques", "Un langage de programmation"], answer: 1 },
    { question: "Une WBS permet :", options: ["De créer un organigramme des tâches", "D’acheter du matériel", "D’affecter les équipes"], answer: 0 },
    { question: "Qui approuve la charte du projet ?", options: ["Le client", "Le sponsor", "L’équipe projet"], answer: 1 },
    { question: "Un KPI est :", options: ["Un mot de passe", "Un indicateur clé de performance", "Un outil de communication"], answer: 1 },
    { question: "Le périmètre du projet définit :", options: ["Les limites et contenus du projet", "Le budget", "Les risques"], answer: 0 },
    { question: "Le PMP est valide pendant :", options: ["1 an", "3 ans", "5 ans"], answer: 1 },
    { question: "Que signifie RACI ?", options: ["Responsable, Approuve, Consulté, Informé", "Risque, Action, Contrôle, Impact", "Régulation, Analyse, Contrôle, Implémentation"], answer: 0 },
    { question: "La méthode de planification critique est :", options: ["PERT", "CPM", "Kanban"], answer: 1 },
    { question: "Le budget du projet est :", options: ["La somme des dépenses autorisées", "Le prix du logiciel utilisé", "Le coût du matériel"], answer: 0 }
  ]
};

function startQuiz(cert) {
  const container = document.getElementById(`quiz-${cert}`);
  const quiz = quizzes[cert];
  let current = 0;

  container.innerHTML = "";

  function renderQuestion() {
    if (current >= quiz.length) {
      container.innerHTML = "<div class='alert alert-success'>Quiz terminé !</div>";
      return;
    }
    const q = quiz[current];
    container.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Question ${current + 1} : ${q.question}</h5>
          ${q.options.map((opt, i) =>
            `<button class="btn btn-outline-secondary m-1" onclick="checkAnswer('${cert}', ${current}, ${i})">${opt}</button>`
          ).join("")}
          <div id="feedback-${cert}"></div>
        </div>
      </div>
    `;
  }

  window.checkAnswer = function(certId, index, selected) {
    const q = quizzes[certId][index];
    const feedback = document.getElementById(`feedback-${certId}`);
    if (selected === q.answer) {
      feedback.innerHTML = `<p class="text-success">Bonne réponse ✅</p>`;
    } else {
      feedback.innerHTML = `<p class="text-danger">Faux ❌. Réponse correcte : ${q.options[q.answer]}</p>`;
    }
    setTimeout(() => {
      current++;
      renderQuestion();
    }, 1200);
  };

  renderQuestion();
}
