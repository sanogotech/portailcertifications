const learnContents = {
  'pm-concepts': {
    title: "Concepts de base en gestion de projet",
    content: `
      <h4>Les 5 groupes de processus</h4>
      <ol>
        <li><strong>Initiation :</strong> Définir le projet à haut niveau, créer la charte de projet.</li>
        <li><strong>Planification :</strong> Établir le scope, délais, coûts, ressources, risques, et définir les lignes de base.</li>
        <li><strong>Exécution :</strong> Mettre en œuvre le plan de gestion de projet, diriger et gérer le travail.</li>
        <li><strong>Surveillance et Maîtrise :</strong> Suivre, examiner et réguler l'avancement et la performance du projet, identifier les domaines où des changements sont nécessaires, et initier les changements correspondants.</li>
        <li><strong>Clôture :</strong> Finaliser toutes les activités pour clore formellement le projet ou la phase.</li>
      </ol>
      
      <h4 class="mt-4">Conseils pratiques</h4>
      <div class="alert alert-info">
        <strong>Astuce :</strong> Utilisez toujours une charte de projet pour formaliser l'accord entre parties prenantes et donner le coup d'envoi officiel au projet. Elle valide l'existence du projet et donne l'autorité au chef de projet.
      </div>
      <p>La compréhension de ces groupes de processus est fondamentale pour toutes les certifications en gestion de projet, car ils représentent les étapes logiques par lesquelles un projet progresse.</p>
    `
  },
  'agile-method': {
    title: "Méthodes Agile",
    content: `
      <h4>Principes clés du Manifeste Agile</h4>
      <ul>
        <li>Priorité à la satisfaction client par des livraisons rapides et continues de produits de valeur.</li>
        <li>Accueillir les changements, même tard dans le développement. Les processus Agiles exploitent le changement pour l'avantage compétitif du client.</li>
        <li>Livraison fréquente de logiciels opérationnels, de quelques semaines à quelques mois, avec une préférence pour les courtes périodes.</li>
        <li>Collaboration quotidienne entre les développeurs et les parties prenantes métier.</li>
        <li>Les individus et leurs interactions priment sur les processus et les outils.</li>
        <li>Les logiciels opérationnels priment sur une documentation exhaustive.</li>
        <li>La collaboration avec les clients prime sur la négociation contractuelle.</li>
        <li>L'adaptation au changement prime sur le suivi d'un plan.</li>
      </ul>
      
      <h4 class="mt-4">Comparaison Agile vs Traditionnel (Cascade)</h4>
      <table class="table table-bordered table-striped">
        <thead>
          <tr><th>Critère</th><th>Agile</th><th>Traditionnel (Cascade)</th></tr>
        </thead>
        <tbody>
          <tr><td>Flexibilité au changement</td><td>Haute et encouragée</td><td>Faible, changements coûteux en fin de cycle</td></tr>
          <tr><td>Documentation</td><td>Minimale et juste suffisante</td><td>Détaillée et planifiée à l'avance</td></tr>
          <tr><td>Livraisons</td><td>Fréquentes, petites itérations</td><td>Unique, à la fin du projet</td></tr>
          <tr><td>Implication client</td><td>Continue et étroite</td><td>Limitée aux phases initiales et finales</td></tr>
          <tr><td>Approche</td><td>Itérative et incrémentale</td><td>Séquentielle et linéaire</td></tr>
        </tbody>
      </table>
      <p>L'Agilité est particulièrement adaptée aux projets dont les exigences sont évolutives ou peu claires au départ, favorisant une approche collaborative et flexible.</p>
    `
  },
  'risk-management': {
    title: "Gestion des risques",
    content: `
      <h4>Processus de gestion des risques (selon le PMBOK)</h4>
      <ol>
        <li><strong>Planifier la gestion des risques :</strong> Décider comment aborder, planifier et exécuter les activités de gestion des risques pour un projet.</li>
        <li><strong>Identifier les risques :</strong> Déterminer les risques qui pourraient affecter le projet et documenter leurs caractéristiques. (Ex: Brainstorming, analyse SWOT, listes de contrôle)</li>
        <li><strong>Réaliser l'analyse qualitative des risques :</strong> Prioriser les risques pour une analyse ou une action ultérieure en évaluant leur probabilité d'occurrence et leur impact. (Ex: Matrice Probabilité/Impact)</li>
        <li><strong>Réaliser l'analyse quantitative des risques :</strong> Analyser numériquement l'effet des risques identifiés sur les objectifs généraux du projet (coût, durée). (Ex: Analyse de Monte Carlo, arbre de décision)</li>
        <li><strong>Planifier les réponses aux risques :</strong> Développer des options et déterminer les actions pour augmenter les opportunités et réduire les menaces pour les objectifs du projet. (Ex: Stratégies d'évitement, transfert, acceptation, mitigation)</li>
        <li><strong>Mettre en œuvre les réponses aux risques :</strong> Mettre en œuvre les plans de réponse aux risques approuvés.</li>
        <li><strong>Surveiller les risques :</strong> Suivre les risques identifiés, surveiller les risques résiduels, identifier les nouveaux risques, et évaluer l'efficacité du processus de gestion des risques.</li>
      </ol>
      
      <h4 class="mt-4">Exemple de matrice de probabilité/impact (Analyse Qualitative)</h4>
      <img src="https://via.placeholder.com/600x250?text=Matrice+Probabilite%2FImpact" alt="Matrice risque" class="img-fluid rounded shadow-sm">
      <p class="small text-muted mt-2">La matrice aide à prioriser les risques : ceux avec une haute probabilité et un fort impact sont les plus critiques.</p>
    `
  },
  'stakeholder-management': {
    title: "Gestion des Parties Prenantes",
    content: `
      <h4>Qu'est-ce qu'une partie prenante ?</h4>
      <p>Une <strong>partie prenante</strong> est une personne, un groupe ou une organisation qui peut affecter, être affecté(e) par, ou se percevoir comme affecté(e) par une décision, une activité ou un résultat d'un projet.</p>
      
      <h4 class="mt-4">Processus clés de gestion des parties prenantes</h4>
      <ol>
        <li><strong>Identifier les parties prenantes :</strong> Identifier toutes les parties prenantes du projet et analyser leurs intérêts, attentes, influence et impact potentiel sur le projet. (Ex: Registre des parties prenantes)</li>
        <li><strong>Planifier l'engagement des parties prenantes :</strong> Développer des approches pour impliquer efficacement les parties prenantes du projet en fonction de leurs besoins, intérêts et impact. (Ex: Plan d'engagement des parties prenantes)</li>
        <li><strong>Gérer l'engagement des parties prenantes :</strong> Communiquer et travailler avec les parties prenantes pour satisfaire leurs attentes et résoudre les problèmes.</li>
        <li><strong>Surveiller l'engagement des parties prenantes :</strong> Surveiller les relations globales des parties prenantes du projet et ajuster les stratégies d'engagement si nécessaire.</li>
      </ol>
      
      <h4 class="mt-4">Matrice Puissance/Intérêt (ou Puissance/Influence)</h4>
      <img src="https://via.placeholder.com/600x300?text=Matrice+Puissance%2FInteret" alt="Matrice Puissance Interet" class="img-fluid rounded shadow-sm">
      <p class="small text-muted mt-2">Cette matrice aide à classer les parties prenantes et à définir la stratégie d'engagement :</p>
      <ul>
        <li><strong>Haute Puissance / Fort Intérêt :</strong> Gérer de près, impliquer activement.</li>
        <li><strong>Haute Puissance / Faible Intérêt :</strong> Maintenir satisfaites, ne pas les ennuyer avec trop de détails.</li>
        <li><strong>Faible Puissance / Fort Intérêt :</strong> Les tenir informées, les consulter.</li>
        <li><strong>Faible Puissance / Faible Intérêt :</strong> Surveiller, un effort minimal.</li>
      </ul>
    `
  },
  'pm-tools': {
    title: "Outils du chef de projet",
    content: `
      <h4>Outils essentiels pour la gestion de projet</h4>
      <p>Un chef de projet efficace utilise une variété d'outils pour planifier, exécuter, surveiller et clôturer les projets.</p>
      
      <h5 class="mt-4">1. Logiciels de gestion de projet</h5>
      <ul>
        <li><strong>Microsoft Project :</strong> Pour la planification détaillée, les dépendances, le suivi des ressources.</li>
        <li><strong>Jira (Atlassian) :</strong> Populaire pour les projets Agile, le suivi des tâches et des bugs.</li>
        <li><strong>Asana / Trello / Monday.com :</strong> Outils collaboratifs pour la gestion des tâches, les tableaux Kanban.</li>
        <li><strong>Primavera P6 :</strong> Pour les projets complexes et de grande envergure, gestion de portefeuille.</li>
      </ul>

      <h5 class="mt-4">2. Outils de communication et collaboration</h5>
      <ul>
        <li><strong>Slack / Microsoft Teams :</strong> Messagerie instantanée et collaboration d'équipe.</li>
        <li><strong>Zoom / Google Meet :</strong> Conférences vidéo pour les réunions d'équipe et avec les parties prenantes.</li>
        <li><strong>Confluence (Atlassian) :</strong> Pour la documentation collaborative et le partage de connaissances.</li>
      </ul>

      <h5 class="mt-4">3. Techniques de planification et d'analyse</h5>
      <ul>
        <li><strong>Gantt Charts :</strong> Représentation visuelle du calendrier du projet, des tâches et de leurs dépendances.</li>
        <li><strong>PERT (Program Evaluation and Review Technique) :</strong> Pour estimer la durée des activités avec incertitude.</li>
        <li><strong>WBS (Work Breakdown Structure) :</strong> Décomposition hiérarchique du travail du projet en livrables gérables.</li>
        <li><strong>Matrice de traçabilité des exigences :</strong> Pour s'assurer que toutes les exigences sont couvertes par les livrables du projet.</li>
      </ul>
      <p class="small text-muted mt-3">Le choix de l'outil dépendra de la taille du projet, de la méthodologie (Agile/Traditionnel), de la taille de l'équipe et des exigences spécifiques de l'organisation.</p>
    `
  }
};

// New object for interactive learn questions
const learnQuestions = {
  capm: [
    {
      question: "Selon le PMBOK Guide, quel groupe de processus inclut le développement de la Charte de Projet ?",
      options: ["Planification", "Exécution", "Initiation", "Clôture"],
      answer: 2,
      explanation: "La Charte de Projet est développée durant le groupe de processus d'Initiation. Elle autorise formellement l'existence du projet et donne l'autorité au chef de projet."
    },
    {
      question: "Quelle est la principale fonction d'une structure de découpage du travail (WBS) ?",
      options: ["Définir le calendrier du projet", "Allouer les ressources aux tâches", "Décomposer les livrables du projet en éléments plus petits et gérables", "Gérer les risques du projet"],
      answer: 2,
      explanation: "Le WBS (Work Breakdown Structure) décompose le travail du projet en éléments plus petits et gérables orientés livrables, facilitant la planification, l'estimation et le contrôle."
    },
    {
      question: "Quel document sert de base pour mesurer la performance du projet par rapport au temps et au coût ?",
      options: ["Le registre des risques", "Le plan de communication", "La baseline de performance", "Le registre des problèmes"],
      answer: 2,
      explanation: "La baseline de performance (performance baseline) est une combinaison des baselines du périmètre, du calendrier et des coûts, servant de référence pour mesurer la performance réelle du projet."
    },
    {
      question: "Dans le PMBOK, quelle est la différence entre un 'risque' et un 'problème' (issue) ?",
      options: ["Un risque est positif, un problème est négatif", "Un risque est un événement incertain futur, un problème est un événement actuel qui s'est produit", "Il n'y a pas de différence", "Un risque est géré par l'équipe, un problème par le sponsor"],
      answer: 1,
      explanation: "Un risque est une incertitude qui peut se produire ou non et qui, si elle se produit, aura un impact sur le projet. Un problème (issue) est un événement ou une condition qui est déjà survenu et qui nécessite une action immédiate."
    },
    {
      question: "Quelle technique est utilisée pour estimer la durée d'une activité en utilisant les estimations optimiste, pessimiste et la plus probable ?",
      options: ["Analyse du chemin critique", "Méthode des trois points (PERT)", "Analyse des réserves", "Analyse de Monte Carlo"],
      answer: 1,
      explanation: "La méthode des trois points (Three-Point Estimation), souvent associée au PERT (Program Evaluation and Review Technique), utilise des estimations optimiste, pessimiste et la plus probable pour calculer une estimation pondérée plus réaliste."
    },
    {
      question: "Quel rôle est typiquement responsable de la gestion quotidienne de l'équipe de projet ?",
      options: ["Le Sponsor du Projet", "Le Chef de Projet", "Le client", "Les parties prenantes clés"],
      answer: 1,
      explanation: "Le Chef de Projet est le principal responsable de la gestion quotidienne de l'équipe, de la communication, et de la résolution des problèmes opérationnels."
    },
    {
      question: "Le diagramme de Gantt est un outil de :",
      options: ["Gestion des risques", "Planification des ressources", "Planification du calendrier", "Suivi du budget"],
      answer: 2,
      explanation: "Le diagramme de Gantt est un outil visuel couramment utilisé pour représenter le calendrier du projet, les tâches, leurs durées et leurs dépendances."
    },
    {
      question: "Qu'est-ce qu'un jalon (milestone) dans la gestion de projet ?",
      options: ["Une tâche de très courte durée", "Un point significatif ou un événement clé dans le calendrier du projet", "Une période de révision du budget", "Un risque majeur du projet"],
      answer: 1,
      explanation: "Un jalon est un point ou un événement significatif dans le projet, souvent utilisé pour marquer l'achèvement d'une phase ou d'un livrable important."
    },
    {
      question: "Quel est le but principal de l'énoncé du périmètre du projet (Project Scope Statement) ?",
      options: ["Décrire les critères de succès du projet", "Documenter le processus de gestion des risques", "Définir ce qui est inclus et ce qui n'est PAS inclus dans le projet", "Lister toutes les ressources nécessaires"],
      answer: 2,
      explanation: "L'énoncé du périmètre du projet (Project Scope Statement) est un document clé qui définit clairement les limites du projet, y compris les livrables, les exclusions et les critères d'acceptation."
    },
    {
      question: "Quelle est la dernière phase du cycle de vie d'un projet ?",
      options: ["Exécution", "Surveillance et Maîtrise", "Clôture", "Planification"],
      answer: 2,
      explanation: "La phase de Clôture est la dernière phase où toutes les activités sont formalisées pour terminer le projet ou la phase."
    },
    {
      question: "Quel est l'objectif principal du Plan de Gestion des Communications ?",
      options: ["Définir les canaux de communication externes", "Décrire comment, quand, par qui et à qui les informations du projet seront communiquées", "Établir les réunions d'équipe quotidiennes", "Gérer les conflits entre parties prenantes"],
      answer: 1,
      explanation: "Le Plan de Gestion des Communications détaille la stratégie de communication du projet, assurant que les bonnes informations sont transmises aux bonnes personnes, au bon moment et via le bon canal."
    },
    {
      question: "Qu'est-ce que l'Earned Value (Valeur Acquise - EV) ?",
      options: ["Le coût total du projet", "Le coût réel du travail effectué", "La valeur du travail accompli exprimée en budget alloué", "Le budget total alloué au projet"],
      answer: 2,
      explanation: "L'Earned Value (EV) est la valeur budgétisée du travail réellement accompli à un moment donné. C'est une mesure clé de la performance du projet."
    },
    {
      question: "Quelle est la formule du Cost Variance (CV) ?",
      options: ["EV - AC", "BAC - EV", "EV / AC", "AC - EV"],
      answer: 0,
      explanation: "Le Cost Variance (CV) est la différence entre la valeur acquise (EV) et le coût réel (AC). Un CV positif indique que le projet est sous le budget."
    },
    {
      question: "Un plan de gestion des risques doit inclure :",
      options: ["Uniquement les risques négatifs", "Les risques, leurs probabilités, leurs impacts et les réponses planifiées", "Seulement les risques majeurs identifiés par le sponsor", "Une liste des problèmes déjà survenus"],
      answer: 1,
      explanation: "Le plan de gestion des risques inclut l'identification des risques (menaces et opportunités), leur analyse, les réponses planifiées, les propriétaires de risques, et les déclencheurs."
    },
    {
      question: "Qu'est-ce que l'analyse des parties prenantes (Stakeholder Analysis) ?",
      options: ["La création d'un organigramme", "Le processus d'identification des individus, groupes ou organisations qui peuvent être affectés ou influencer le projet", "Une méthode de communication avec le client", "L'évaluation des compétences de l'équipe"],
      answer: 1,
      explanation: "L'analyse des parties prenantes est le processus d'identification de toutes les personnes ou groupes ayant un intérêt ou une influence sur le projet, ainsi que de leurs attentes et impact potentiel."
    },
    {
      question: "Quel est l'objectif d'une réunion de leçon apprise (Lessons Learned Meeting) ?",
      options: ["Planifier le prochain projet", "Discuter des performances individuelles de l'équipe", "Documenter les succès et les échecs du projet pour les futurs projets", "Négocier des contrats"],
      answer: 2,
      explanation: "Les leçons apprises sont documentées tout au long du projet et particulièrement lors des réunions de clôture pour améliorer les futurs projets et processus organisationnels."
    },
    {
      question: "La méthode du chemin critique (CPM) permet de déterminer :",
      options: ["Le budget total du projet", "La durée la plus courte pour terminer le projet", "Le nombre de ressources nécessaires", "La probabilité de succès du projet"],
      answer: 1,
      explanation: "Le chemin critique est la séquence d'activités qui représente le chemin le plus long à travers un projet, déterminant la durée minimale possible du projet."
    },
    {
      question: "Quelle est la différence entre 'validation du périmètre' et 'contrôle du périmètre' ?",
      options: ["Validation est interne, contrôle est externe", "Validation est l'acceptation formelle des livrables, contrôle gère les changements au périmètre", "Validation est continue, contrôle est ponctuel", "Il n'y a pas de différence significative"],
      answer: 1,
      explanation: "La validation du périmètre (Validate Scope) est le processus d'obtention de l'acceptation formelle des livrables complétés par le client ou le sponsor. Le contrôle du périmètre (Control Scope) est le processus de surveillance de l'état du périmètre du projet et du produit, et de gestion des changements à la baseline du périmètre."
    },
    {
      question: "Quel processus implique l'acquisition des ressources nécessaires pour exécuter le travail du projet ?",
      options: ["Estimer les coûts", "Développer le calendrier", "Acquérir les ressources", "Planifier la gestion des ressources"],
      answer: 2,
      explanation: "Le processus 'Acquérir les ressources' consiste à obtenir l'équipe de projet (humaine) et les ressources physiques nécessaires (matériel, installations, infrastructure, logiciels, etc.)."
    },
    {
      question: "Qu'est-ce qu'une hypothèse de projet ?",
      options: ["Un facteur qui est considéré comme vrai, réel ou certain sans preuve ou démonstration", "Un risque identifié par le chef de projet", "Une exigence non fonctionnelle", "Un livrable clé du projet"],
      answer: 0,
      explanation: "Une hypothèse est un facteur supposé être vrai, réel ou certain, et sur lequel le plan de projet est basé. Si une hypothèse s'avère fausse, elle peut avoir un impact significatif sur le projet."
    },
    {
      question: "L'objectif principal du processus de clôture du projet est de :",
      options: ["Obtenir l'approbation du client pour le produit final", "S'assurer que toutes les activités du projet sont terminées et que le projet est formellement clos", "Faire une fête de fin de projet", "Planifier la transition vers les opérations"],
      answer: 1,
      explanation: "La clôture du projet ou de la phase implique de finaliser toutes les activités dans tous les groupes de processus pour clore formellement le projet ou la phase."
    },
    {
      question: "Quel type de contrat transfère le risque le plus élevé au vendeur ?",
      options: ["Contrat à prix fixe (Fixed-Price)", "Contrat à coût remboursable (Cost-Reimbursable)", "Contrat à temps et matériel (Time & Material)", "Contrat incitatif"],
      answer: 0,
      explanation: "Dans un contrat à prix fixe, le vendeur s'engage à livrer le travail pour un prix défini, absorbant ainsi la plupart des risques de surcoût."
    },
    {
      question: "Lorsqu'un projet dévie de sa baseline, quelle est la première étape à entreprendre ?",
      options: ["Modifier la baseline", "Ignorer la déviation si elle est mineure", "Analyser la cause de la déviation et déterminer les actions correctives ou préventives", "Informer le sponsor uniquement"],
      answer: 2,
      explanation: "Toute déviation significative par rapport à la baseline doit être analysée pour comprendre sa cause profonde et pour déterminer si des actions correctives ou préventives sont nécessaires."
    },
    {
      question: "Quelle est la définition d'un livrable ?",
      options: ["Une réunion d'équipe importante", "Un résultat, un produit ou une capacité unique et vérifiable qui doit être produit pour compléter un processus, une phase ou un projet", "Le budget total du projet", "Une phase de planification"],
      answer: 1,
      explanation: "Un livrable est un résultat tangible ou intangible, unique et vérifiable, qui doit être produit pour compléter un projet ou une partie de celui-ci."
    },
    {
      question: "Qui est le principal responsable de l'approbation de la Charte de Projet ?",
      options: ["Le Chef de Projet", "L'équipe de projet", "Le Sponsor du Projet", "Le client"],
      answer: 2,
      explanation: "Le Sponsor du Projet est la personne ou le groupe qui fournit les ressources et le soutien au projet, et qui est le principal propriétaire de la charte de projet."
    }
  ],
  pmp: [
    {
      question: "Quel domaine de performance du projet met l'accent sur l'inspiration et la motivation de l'équipe ?",
      options: ["Processus", "Business Environment", "People", "Planification"],
      answer: 2,
      explanation: "Le domaine de performance 'People' (Les Gens) se concentre sur les compétences interpersonnelles et la capacité du chef de projet à diriger et à motiver son équipe."
    },
    {
      question: "Qu'est-ce que le CPI (Cost Performance Index) et que signifie un CPI < 1 ?",
      options: ["Indice de performance de calendrier, le projet est en avance", "Indice de performance des coûts, le projet est en dessous du budget", "Indice de performance des coûts, le projet est au-dessus du budget", "Indice de performance de calendrier, le projet est en retard"],
      answer: 2,
      explanation: "Le CPI (Cost Performance Index) est le ratio EV/AC (Earned Value / Actual Cost). Un CPI < 1 signifie que le coût réel est supérieur à la valeur acquise, indiquant que le projet est au-dessus du budget."
    },
    {
      question: "La méthode agile se distingue de la méthode traditionnelle par sa capacité à :",
      options: ["Mieux contrôler le budget initial", "Accueillir et s'adapter aux changements tout au long du projet", "Fournir une documentation exhaustive avant le démarrage", "Réduire le nombre de réunions"],
      answer: 1,
      explanation: "L'une des valeurs clés du manifeste Agile est 'L'adaptation au changement plus que le suivi d'un plan', rendant les méthodes agiles très flexibles."
    },
    {
      question: "Quelle est la principale différence entre un PMO de type 'Supportif' et un PMO de type 'Directif' ?",
      options: ["Le supportif gère les projets, le directif conseille", "Le supportif fournit des modèles et des outils, le directif impose la conformité et gère directement les projets", "Le supportif est temporaire, le directif est permanent", "Il n'y a pas de différence majeure"],
      answer: 1,
      explanation: "Un PMO Supportif fournit des modèles, des bonnes pratiques et de la formation. Un PMO Directif impose la conformité aux processus et peut même gérer directement des projets."
    },
    {
      question: "Le diagramme d'Ishikawa est un outil pour :",
      options: ["Mesurer la satisfaction client", "Visualiser les causes et effets d'un problème", "Planifier les ressources", "Estimer les délais"],
      answer: 1,
      explanation: "Le diagramme d'Ishikawa, aussi appelé diagramme en arête de poisson ou diagramme de cause à effet, est utilisé pour identifier les causes profondes d'un problème."
    },
    {
      question: "Quel est le but d'une analyse des causes profondes (Root Cause Analysis - RCA) ?",
      options: ["Identifier les symptômes d'un problème", "Trouver la cause fondamentale d'un problème ou d'un incident", "Évaluer les performances de l'équipe", "Déterminer le budget d'un projet"],
      answer: 1,
      explanation: "La RCA est une méthode utilisée pour identifier les causes fondamentales d'un événement indésirable, afin de mettre en œuvre des actions correctives durables."
    },
    {
      question: "Dans un environnement Agile, qui est responsable de la valeur métier du produit ?",
      options: ["Le Scrum Master", "L'équipe de développement", "Le Product Owner", "Les parties prenantes"],
      answer: 2,
      explanation: "Le Product Owner est le principal et unique responsable de maximiser la valeur du produit résultant du travail de l'équipe de développement."
    },
    {
      question: "Qu'est-ce qu'une baseline de performance intégrée (Integrated Performance Baseline) ?",
      options: ["La somme des coûts du projet", "La combinaison des baselines de périmètre, de calendrier et de coût", "Un document des exigences du client", "Le plan de gestion des risques"],
      answer: 1,
      explanation: "La baseline de performance intégrée est utilisée pour mesurer la performance du projet par rapport aux objectifs fixés en termes de périmètre, de calendrier et de coût."
    },
    {
      question: "Quelle est la principale sortie du processus 'Diriger et Gérer le Travail du Projet' ?",
      options: ["Plan de gestion du projet", "Livrables du projet", "Rapports de performance", "Mises à jour des actifs organisationnels"],
      answer: 1,
      explanation: "Le processus 'Diriger et Gérer le Travail du Projet' produit les livrables du projet qui seront ensuite soumis à la validation du périmètre."
    },
    {
      question: "Quel est le but de la Matrice RACI ?",
      options: ["Planifier les jalons du projet", "Assigner les rôles et responsabilités pour les activités", "Gérer les problèmes de qualité", "Suivre les dépendances entre tâches"],
      answer: 1,
      explanation: "La Matrice RACI (Responsible, Accountable, Consulted, Informed) est un outil de clarification des rôles et responsabilités pour les activités ou livrables du projet."
    },
    {
      question: "Quel est l'un des principaux outils pour la planification des ressources dans un projet ?",
      options: ["La décomposition", "La matrice des affectations de ressources (RAM)", "L'analyse des valeurs acquises", "Le registre des risques"],
      answer: 1,
      explanation: "La Matrice des Affectations de Ressources (RAM) est une grille qui permet de visualiser l'affectation des ressources aux différents éléments de la WBS ou aux activités."
    },
    {
      question: "Dans la gestion des risques, qu'est-ce qu'une stratégie de réponse 'Mitiger' (Mitigate) ?",
      options: ["Éliminer la menace", "Réduire la probabilité et/ou l'impact d'une menace", "Partager le risque avec un tiers", "Accepter le risque tel quel"],
      answer: 1,
      explanation: "Mitiger un risque consiste à prendre des mesures pour réduire sa probabilité d'occurrence ou son impact s'il se produit."
    },
    {
      question: "Quelle est la principale utilité du diagramme de réseau (Network Diagram) ?",
      options: ["Visualiser la hiérarchie de l'équipe", "Représenter les dépendances logiques entre les activités du projet", "Analyser les coûts du projet", "Suivre la communication entre les parties prenantes"],
      answer: 1,
      explanation: "Le diagramme de réseau (ou diagramme de séquencement des activités) montre l'ordre séquentiel des activités du projet, leurs dépendances et les chemins possibles."
    },
    {
      question: "Selon le PMBOK 7ème édition, quel principe met l'accent sur la création de valeur ?",
      options: ["Leadership", "Valeur", "Système", "Parties prenantes"],
      answer: 1,
      explanation: "Le principe de 'Valeur' met l'accent sur la maximisation de la valeur des livrables et des résultats du projet pour les parties prenantes et l'organisation."
    },
    {
      question: "Quel est le principal objectif d'un processus de contrôle des changements intégré ?",
      options: ["Approuver tous les changements demandés sans examen", "S'assurer que tous les changements sont évalués et gérés de manière cohérente", "Éviter tout changement au projet", "Minimiser la documentation des changements"],
      answer: 1,
      explanation: "Le contrôle des changements intégré (Integrated Change Control) garantit que les changements proposés sont évalués pour leur impact global sur le projet avant d'être approuvés ou rejetés."
    },
    // Ajoutez ici les 10 questions restantes pour PMP
    {
      question: "Qu'est-ce que la loi de Parkinson en gestion de projet ?",
      options: ["Le travail s'étend pour remplir le temps disponible pour son achèvement", "La complexité d'un projet augmente avec le nombre de ses parties prenantes", "Plus il y a de personnes sur un projet, moins il est efficace", "Les retards dans les projets sont inévitables"],
      answer: 0,
      explanation: "La loi de Parkinson énonce que le travail s'étend pour occuper le temps disponible pour son exécution, soulignant l'importance de délais réalistes et d'une gestion efficace du temps."
    },
    {
      question: "Quel est le rôle du 'Plan de gestion des exigences' ?",
      options: ["Documenter les exigences spécifiques du projet", "Décrire comment les exigences du projet seront collectées, analysées, documentées et gérées", "Prioriser les exigences du client", "Valider les exigences avec les parties prenantes"],
      answer: 1,
      explanation: "Le Plan de gestion des exigences (Requirements Management Plan) décrit la manière dont les exigences seront gérées tout au long du cycle de vie du projet, y compris la traçabilité et le contrôle des modifications."
    },
    {
      question: "Qu'est-ce qu'une 'Structure Organisationnelle Matricielle Forte' ?",
      options: ["Une structure où le chef de projet a une faible autorité", "Une structure où le chef de projet a une autorité élevée et des ressources à plein temps", "Une structure où l'autorité est divisée également entre le chef de projet et les managers fonctionnels", "Une structure hiérarchique traditionnelle"],
      answer: 1,
      explanation: "Dans une matrice forte, le chef de projet a un rôle important, souvent à temps plein, avec un personnel de projet dédié et un contrôle significatif sur les ressources."
    },
    {
      question: "Quel est le but principal de l'Indice de Performance du Calendrier (SPI) ?",
      options: ["Mesurer la rentabilité du projet", "Évaluer l'efficacité de l'équipe", "Mesurer l'efficacité du projet à respecter le calendrier", "Prévoir la date de fin du projet"],
      answer: 2,
      explanation: "Le SPI (Schedule Performance Index) est le ratio EV/PV (Earned Value / Planned Value). Un SPI < 1 indique que le projet est en retard par rapport au calendrier, tandis qu'un SPI > 1 signifie qu'il est en avance."
    },
    {
      question: "Lorsqu'un chef de projet applique des règles et des procédures pour assurer la conformité, il exerce quel type de pouvoir ?",
      options: ["Pouvoir référent", "Pouvoir de récompense", "Pouvoir formel (légitime)", "Pouvoir d'expert"],
      answer: 2,
      explanation: "Le pouvoir formel ou légitime est dérivé de la position officielle d'une personne dans l'organisation, comme l'autorité accordée à un chef de projet pour appliquer des procédures."
    },
    {
      question: "Un facteur environnemental de l'entreprise (EEF) est :",
      options: ["Une sortie du processus de planification", "Un intrant pour la plupart des processus de gestion de projet, représentant des conditions non contrôlables", "Un type de risque externe", "Un outil et technique spécifique au projet"],
      answer: 1,
      explanation: "Les EEF sont des conditions, non sous le contrôle de l'équipe de projet, qui influencent, contraignent ou dirigent le projet. Ils peuvent être internes ou externes à l'organisation."
    },
    {
      question: "Qu'est-ce qu'un registre des problèmes (Issue Log) ?",
      options: ["Un document listant tous les risques potentiels", "Un journal des problèmes qui se sont produits et doivent être résolus", "Une liste des actions à suivre pour la communication", "Un répertoire des leçons apprises"],
      answer: 1,
      explanation: "Le registre des problèmes est un document du projet utilisé pour enregistrer et suivre les problèmes identifiés, y compris leur description, leur propriétaire, leur statut et leur résolution."
    },
    {
      question: "Le coût réel (AC) est :",
      options: ["Le coût budgétisé du travail effectué", "Le coût réel encouru pour le travail effectué", "Le coût total prévu du projet", "Le coût de clôture du projet"],
      answer: 1,
      explanation: "Le coût réel (Actual Cost - AC) est le coût total réel encouru pour le travail accompli au cours d'une période donnée."
    },
    {
      question: "Quel est le principal objectif du processus de 'Gestion de la Qualité' ?",
      options: ["Garantir que le projet est terminé à temps et dans le budget", "S'assurer que les exigences de qualité du projet et du produit sont satisfaites", "Minimiser le nombre de défauts après la livraison", "Implémenter de nouveaux outils de qualité"],
      answer: 1,
      explanation: "La gestion de la qualité se concentre sur l'assurance que les produits, services ou résultats du projet répondent aux exigences de qualité spécifiées."
    },
    {
      question: "Quelle technique aide à résoudre les conflits en trouvant une solution qui satisfait partiellement toutes les parties ?",
      options: ["Retrait/Évitement", "Aplanissement/Accommodement", "Compromis/Conciliation", "Forçage/Direction"],
      answer: 2,
      explanation: "Le compromis est une technique de résolution des conflits où chaque partie renonce à quelque chose pour trouver une solution mutuellement acceptable, bien que pas toujours optimale pour tous."
    }
  ],
  prince2: [
    {
      question: "Quel principe de PRINCE2 garantit que le projet reste viable et pertinent tout au long de son cycle de vie ?",
      options: ["Apprendre des expériences", "Gérer par exception", "Justification continue", "Se concentrer sur les produits"],
      answer: 2,
      explanation: "Le principe de 'Justification continue' (Continued Business Justification) exige qu'il y ait une raison d'être au projet, qui doit être vérifiée et rester valable à chaque étape."
    },
    {
      question: "Le document 'Business Case' (Cas d'affaires) est examiné et mis à jour durant quel processus PRINCE2 ?",
      options: ["Démarrer un projet", "Initier un projet", "Contrôler une phase", "Clôturer un projet"],
      answer: 2,
      explanation: "Le Business Case est examiné et mis à jour lors du processus 'Contrôler une phase' pour s'assurer que la justification est toujours valable et que le projet continue à être désirable, réalisable et viable."
    },
    {
      question: "Dans PRINCE2, qui est responsable de la supervision quotidienne de la création d'un produit ?",
      options: ["Le Chef de Projet", "L'Executive", "Le Senior User", "Le Chef d'Équipe (Team Manager)"],
      answer: 3,
      explanation: "Le Team Manager est responsable de la gestion quotidienne de l'équipe et de la livraison des Work Packages assignés par le Chef de Projet."
    },
    {
      question: "Quel thème PRINCE2 se concentre sur les rôles et responsabilités pour le projet ?",
      options: ["Progression", "Organisation", "Qualité", "Plans"],
      answer: 1,
      explanation: "Le thème 'Organisation' définit les rôles et responsabilités de l'équipe de management de projet, assurant que toutes les parties prenantes clés sont bien représentées et que la structure de gouvernance est claire."
    },
    {
      question: "L'approche 'Management by Exception' dans PRINCE2 repose sur l'établissement de :",
      options: ["Rapports détaillés", "Tolérances de performance", "Processus de validation externes", "Réunions hebdomadaires"],
      answer: 1,
      explanation: "La gestion par exception implique la fixation de tolérances (sur le temps, le coût, la qualité, le périmètre, les risques et les bénéfices) pour chaque niveau de management, de sorte que les problèmes ne soient escaladés au niveau supérieur que si ces tolérances sont dépassées."
    },
    {
      question: "Quel est l'objectif principal du processus 'Diriger un Projet' (Directing a Project) ?",
      options: ["Produire les livrables du projet", "Donner le coup d'envoi et la supervision générale au projet par le comité de pilotage", "Gérer les problèmes quotidiens de l'équipe", "Clôturer le projet formellement"],
      answer: 1,
      explanation: "Le processus 'Diriger un Projet' est la responsabilité du Comité de Pilotage du Projet. Il donne l'autorisation de démarrer, d'initier, et de progresser d'une phase à l'autre, et de clôturer le projet."
    },
    {
      question: "Un 'Work Package' (Lot de travaux) dans PRINCE2 est :",
      options: ["Un rapport de progression hebdomadaire", "Un ensemble de produits à livrer par une équipe", "Un groupe de risques liés", "Un jalon du projet"],
      answer: 1,
      explanation: "Un Work Package est la description d'un ensemble de produits à produire par une équipe ou un individu, avec les tolérances et les exigences définies."
    },
    {
      question: "Quel document PRINCE2 décrit les besoins des utilisateurs et les critères d'acceptation du produit ?",
      options: ["Product Description (Description de Produit)", "Business Case", "Project Brief", "Quality Management Strategy"],
      answer: 0,
      explanation: "La 'Description de Produit' (Product Description) est un document clé qui spécifie le but, la composition, les critères de qualité et les compétences requises pour un produit PRINCE2."
    },
    {
      question: "Le principe 'Apprendre des expériences' (Learn from Experience) de PRINCE2 implique :",
      options: ["De ne jamais répéter les erreurs passées", "De documenter et d'utiliser les leçons apprises des projets précédents et en cours", "De suivre une formation continue", "De ne faire confiance qu'à l'expérience personnelle"],
      answer: 1,
      explanation: "Ce principe souligne l'importance d'apprendre des succès et des échecs des projets passés pour améliorer les performances futures du projet et de l'organisation."
    },
    {
      question: "Quel est le but du processus 'Clôturer un Projet' (Closing a Project) ?",
      options: ["Mettre fin aux activités du projet de manière contrôlée", "S'assurer que tous les bénéfices ont été réalisés", "Gérer les risques résiduels", "Planifier la phase suivante"],
      answer: 0,
      explanation: "Le processus 'Clôturer un Projet' vise à mettre fin au projet de manière ordonnée, y compris la confirmation que les produits ont été acceptés, que les leçons apprises sont documentées et que les ressources sont libérées."
    },
    {
      question: "Quel document PRINCE2 est créé au début d'un projet pour fournir une vue d'ensemble et être la base de la décision d'initiation ?",
      options: ["Business Case", "Project Initiation Document (PID)", "Project Brief", "Stage Plan"],
      answer: 2,
      explanation: "Le 'Project Brief' est un document de haut niveau créé au début du projet (processus 'Démarrer un Projet') pour fournir un aperçu et servir de base au Comité de Pilotage pour décider d'initier le projet."
    },
    {
      question: "Le thème 'Risques' dans PRINCE2 exige :",
      options: ["Uniquement l'identification des menaces", "L'identification, l'évaluation et le contrôle des menaces et opportunités", "La seule gestion des risques financiers", "La délégation de tous les risques au sponsor"],
      answer: 1,
      explanation: "Le thème 'Risques' traite de la manière dont les risques du projet (à la fois les menaces et les opportunités) sont identifiés, évalués, planifiés et gérés tout au long du cycle de vie du projet."
    },
    {
      question: "Quel niveau de certification PRINCE2 permet à un individu d'appliquer la méthodologie dans des scénarios de projet réels ?",
      options: ["Foundation", "Practitioner", "Advanced", "Professional"],
      answer: 1,
      explanation: "La certification PRINCE2 Practitioner démontre la capacité d'appliquer et d'adapter la méthodologie PRINCE2 à des scénarios de projet réels."
    },
    {
      question: "Le 'Registre des Problèmes' (Issue Register) PRINCE2 enregistre :",
      options: ["Seulement les problèmes techniques", "Tous les problèmes, préoccupations et demandes de changement qui surviennent", "Les risques identifiés", "Les décisions prises lors des réunions"],
      answer: 1,
      explanation: "Le Registre des Problèmes est un journal pour enregistrer et suivre tous les problèmes qui nécessitent une gestion formelle, y compris les problèmes, les préoccupations et les demandes de changement."
    },
    {
      question: "Dans PRINCE2, l'approbation d'un 'End Stage Report' (Rapport de Fin de Phase) est une décision de quel processus ?",
      options: ["Contrôler une phase", "Gérer la livraison des produits", "Diriger un projet", "Clôturer un projet"],
      answer: 2,
      explanation: "Le Comité de Pilotage, dans le processus 'Diriger un Projet', examine le Rapport de Fin de Phase pour décider si le projet doit passer à la phase suivante ou être arrêté."
    },
    // Ajoutez ici les 10 questions restantes pour PRINCE2
    {
      question: "Quel rôle est responsable de s'assurer que le projet répond aux besoins des utilisateurs métier ?",
      options: ["L'Executive", "Le Senior User", "Le Senior Supplier", "Le Chef de Projet"],
      answer: 1,
      explanation: "Le rôle de 'Senior User' représente les intérêts des utilisateurs qui utiliseront les produits du projet et s'assure que les besoins de l'entreprise sont satisfaits."
    },
    {
      question: "Le thème 'Plans' dans PRINCE2 met l'accent sur la planification par :",
      options: ["Itérations", "Exceptions", "Produits", "Fonctions"],
      answer: 2,
      explanation: "La 'planification par produits' (Product-based Planning) est une caractéristique clé de PRINCE2, où l'on identifie et définit d'abord les produits à livrer avant de planifier les activités."
    },
    {
      question: "Combien de rôles y a-t-il au sein du Comité de Pilotage de Projet PRINCE2 ?",
      options: ["1", "2", "3", "4"],
      answer: 2,
      explanation: "Le Comité de Pilotage de Projet est composé de trois rôles : l'Executive, le Senior User et le Senior Supplier."
    },
    {
      question: "Quel document fournit la base pour la mesure et l'évaluation de la progression du projet ?",
      options: ["Daily Log", "Checkpoint Report", "Highlight Report", "Baselines de performance"],
      answer: 3,
      explanation: "Les baselines de performance (pour le temps, le coût, la qualité, le périmètre) sont établies dans les plans et sont utilisées pour mesurer la progression réelle du projet."
    },
    {
      question: "Lequel des éléments suivants N'EST PAS un processus de PRINCE2 ?",
      options: ["Démarrer un projet", "Exécuter un projet", "Contrôler une phase", "Gérer la livraison des produits"],
      answer: 1,
      explanation: "Bien que l'exécution se produise dans PRINCE2, 'Exécuter un projet' n'est pas un nom de processus formel. Les processus sont : Démarrer un Projet, Diriger un Projet, Initier un Projet, Contrôler une Phase, Gérer la Livraison des Produits, Gérer une Limite de Phase, Clôturer un Projet."
    },
    {
      question: "Les tolérances définies dans PRINCE2 sont là pour :",
      options: ["Permettre au Chef de Projet de prendre des décisions sans consulter le Comité de Pilotage", "Définir les limites de variation acceptables pour le projet ou une phase", "Limiter le budget du projet", "Fixer les performances minimales de l'équipe"],
      answer: 1,
      explanation: "Les tolérances sont des marges de manœuvre acceptables par rapport aux baselines, et si elles sont dépassées, une 'Exception' est déclenchée, nécessitant une escalade."
    },
    {
      question: "Quel processus PRINCE2 autorise la transition vers la phase suivante ?",
      options: ["Clôturer un projet", "Gérer une limite de phase", "Contrôler une phase", "Initier un projet"],
      answer: 1,
      explanation: "Le processus 'Gérer une Limite de Phase' (Managing a Stage Boundary) est là où le Comité de Pilotage examine la fin de la phase actuelle et autorise (ou non) le passage à la phase suivante."
    },
    {
      question: "Quel est le but du thème 'Qualité' dans PRINCE2 ?",
      options: ["S'assurer que les produits répondent aux spécifications et aux attentes", "Réduire les coûts de production", "Améliorer la vitesse de livraison", "Gérer les problèmes de l'équipe"],
      answer: 0,
      explanation: "Le thème 'Qualité' s'assure que les produits développés sont conformes aux exigences et qu'ils sont adaptés à l'usage."
    },
    {
      question: "Lequel des éléments suivants est un type de plan PRINCE2 ?",
      options: ["Plan de communication", "Plan d'exceptions", "Plan de risques", "Plan de projet"],
      answer: 3,
      explanation: "Les types de plans PRINCE2 incluent le Plan de Projet, le Plan de Phase et le Plan d'Équipe. Un Plan d'Exceptions est créé suite à une exception."
    },
    {
      question: "Qui est responsable de la signature du 'Statement of Work' (Énoncé des Travaux) ?",
      options: ["Le Chef de Projet", "Le Sponsor du Projet", "Le client", "Non applicable en PRINCE2, c'est un concept du PMBOK"],
      answer: 3,
      explanation: "Le 'Statement of Work' est un concept plus spécifique au PMBOK/PMI, qui décrit en détail les travaux à réaliser dans le cadre d'un contrat ou d'un projet. PRINCE2 utilise des 'Descriptions de Produits' et des 'Work Packages'."
    }
  ],
  scrum: [
    {
      question: "Quel rôle est le 'servant-leader' de l'équipe Scrum et de l'organisation ?",
      options: ["Product Owner", "Développeurs", "Scrum Master", "Manager Fonctionnel"],
      answer: 2,
      explanation: "Le Scrum Master est un servant-leader qui aide l'équipe à adhérer aux valeurs et pratiques de Scrum, et supprime les obstacles."
    },
    {
      question: "Lequel des éléments suivants est un artéfact Scrum ?",
      options: ["Diagramme de Gantt", "Product Backlog", "Registre des risques", "Charte de projet"],
      answer: 1,
      explanation: "Les trois artefacts de Scrum sont le Product Backlog, le Sprint Backlog et l'Incrément."
    },
    {
      question: "Quel événement Scrum permet à l'équipe d'inspecter le passé et de planifier des améliorations pour le prochain Sprint ?",
      options: ["Daily Scrum", "Sprint Planning", "Sprint Review", "Sprint Retrospective"],
      answer: 3,
      explanation: "La Sprint Retrospective a pour but d'inspecter la manière dont l'équipe a travaillé et d'identifier les améliorations du processus."
    },
    {
      question: "La principale raison de maintenir les Sprints à une durée fixe est de :",
      options: ["Respecter le budget", "Permettre une planification plus détaillée", "Faciliter l'apprentissage et l'adaptation grâce à la régularité", "Minimiser le besoin de tests"],
      answer: 2,
      explanation: "Les Sprints à durée fixe (Time-Boxed) favorisent la régularité et l'inspection fréquente, ce qui est essentiel pour l'adaptation et l'amélioration continue en Agile."
    },
    {
      question: "Qui est le seul responsable de la priorisation des éléments du Product Backlog ?",
      options: ["L'équipe de développement", "Le Scrum Master", "Le Product Owner", "Les parties prenantes"],
      answer: 2,
      explanation: "Le Product Owner est l'unique responsable du Product Backlog, y compris de son contenu, sa disponibilité et son ordonnancement."
    },
    {
      question: "Combien de temps dure généralement un Sprint en Scrum ?",
      options: ["1 semaine", "2 à 4 semaines", "1 à 2 mois", "Plus de 4 mois"],
      answer: 1,
      explanation: "Un Sprint est une itération de durée fixe, généralement de 2 à 4 semaines, durant laquelle un incrément 'Potentiellement Livrable' est créé."
    },
    {
      question: "Quel est l'objectif du Daily Scrum (Mêlée Quotidienne) ?",
      options: ["Faire un rapport au Scrum Master", "Planifier le travail pour les prochaines 24 heures de l'équipe de développement", "Résoudre tous les problèmes de l'équipe", "Revoir le Product Backlog"],
      answer: 1,
      explanation: "Le Daily Scrum est une réunion de 15 minutes pour l'équipe de développement afin de synchroniser les activités et de créer un plan pour les prochaines 24 heures."
    },
    {
      question: "Qu'est-ce qu'un 'Definition of Done' (DoD) ?",
      options: ["Une liste de tâches terminées", "Une description formelle de l'état des Incréments lorsque le travail est 'fait'", "Un critère pour accepter un Sprint", "La fin du projet"],
      answer: 1,
      explanation: "Le 'Definition of Done' est une liste de critères de qualité que tous les éléments du Product Backlog doivent satisfaire pour être considérés comme 'faits' et inclus dans l'Incrément."
    },
    {
      question: "L'équipe de développement Scrum est :",
      options: ["Dirigée par le Scrum Master", "Dirigée par le Product Owner", "Auto-organisée et inter-fonctionnelle", "Composée d'experts d'un seul domaine"],
      answer: 2,
      explanation: "L'équipe de développement est auto-organisée, ce qui signifie qu'elle décide de la meilleure façon d'accomplir son travail, et inter-fonctionnelle, possédant toutes les compétences nécessaires pour livrer un incrément."
    },
    {
      question: "Quel est le but de la Sprint Review ?",
      options: ["Inspecter l'Incrément et adapter le Product Backlog si nécessaire", "Discuter des performances individuelles de l'équipe", "Résoudre les conflits de l'équipe", "Estimer les User Stories"],
      answer: 0,
      explanation: "La Sprint Review est une réunion où l'équipe présente l'Incrément aux parties prenantes, recueille les commentaires et adapte le Product Backlog en fonction."
    },
    {
      question: "Les trois piliers de l'empirisme en Scrum sont :",
      options: ["Planification, Exécution, Clôture", "Transparence, Inspection, Adaptation", "Coût, Temps, Périmètre", "Communication, Collaboration, Coordination"],
      answer: 1,
      explanation: "Scrum repose sur l'empirisme, qui se base sur la Transparence (rendre le travail visible), l'Inspection (examiner fréquemment les artefacts et la progression) et l'Adaptation (ajuster le processus si nécessaire)."
    },
    {
      question: "Qui est responsable de la gestion de la valeur métier du produit ?",
      options: ["Scrum Master", "Équipe de développement", "Product Owner", "Tous les rôles Scrum collectivement"],
      answer: 2,
      explanation: "Le Product Owner est le responsable unique de la maximisation de la valeur du produit résultant du travail de l'équipe de développement."
    },
    {
      question: "Quel est l'objectif du Sprint Backlog ?",
      options: ["Contenir toutes les fonctionnalités du produit", "Décrire le travail que l'équipe de développement prévoit d'accomplir pendant le Sprint pour livrer l'Incrément et atteindre l'objectif du Sprint", "Lister les obstacles à supprimer par le Scrum Master", "Servir de plan de communication pour le Sprint"],
      answer: 1,
      explanation: "Le Sprint Backlog est l'ensemble des éléments du Product Backlog sélectionnés pour le Sprint actuel, ainsi que le plan pour les livrer."
    },
    {
      question: "L'auto-organisation de l'équipe de développement signifie que :",
      options: ["Chaque membre travaille de manière indépendante", "L'équipe décide elle-même de la meilleure façon de transformer les éléments du Product Backlog en Incréments fonctionnels", "Le Scrum Master leur dit ce qu'ils doivent faire", "Le Product Owner leur dit comment faire le travail"],
      answer: 1,
      explanation: "L'auto-organisation est une caractéristique clé des équipes Scrum, où elles décident collectivement comment accomplir le travail du Sprint."
    },
    {
      question: "Un 'User Story' est une description de fonctionnalité du point de vue de :",
      options: ["L'équipe de développement", "Le Product Owner", "L'utilisateur final ou client", "Le Scrum Master"],
      answer: 2,
      explanation: "Une User Story est une brève description d'une fonctionnalité du point de vue de l'utilisateur final, souvent formatée comme 'En tant que [rôle], je veux [action] afin de [bénéfice]'."
    },
    {
      question: "Quel est le rôle des 'valeurs' Scrum (Engagement, Focus, Ouverture, Respect, Courage) ?",
      options: ["Elles sont optionnelles et peuvent être ignorées", "Elles sont le fondement du travail d'équipe et des interactions en Scrum", "Elles sont seulement pertinentes pour le Scrum Master", "Elles définissent les exigences du produit"],
      answer: 1,
      explanation: "Les valeurs Scrum sont essentielles pour le succès de l'implémentation de Scrum, car elles guident les comportements et la culture de l'équipe."
    },
    {
      question: "Le 'Burndown Chart' est un outil souvent utilisé pour suivre :",
      options: ["La satisfaction client", "La progression du travail restant dans un Sprint ou sur le produit", "Le budget du projet", "Les heures travaillées par chaque membre de l'équipe"],
      answer: 1,
      explanation: "Le Burndown Chart (ou Sprint Burndown Chart) est un graphique qui affiche la quantité de travail restant au cours d'un Sprint par rapport au temps."
    },
    {
      question: "Quel événement Scrum n'a pas de 'Time-Box' (durée fixe) ?",
      options: ["Sprint Planning", "Daily Scrum", "Sprint Review", "Tous les événements Scrum ont une Time-Box"],
      answer: 3,
      explanation: "Tous les événements Scrum sont 'time-boxed', ce qui signifie qu'ils ont une durée maximale fixe pour garantir la concentration et l'efficacité."
    },
    {
      question: "Qu'est-ce que le 'Product Goal' (Objectif Produit) ?",
      options: ["Un objectif à court terme pour le Sprint actuel", "Un jalon pour la fin du projet", "Un état futur à long terme du produit que l'équipe Scrum veut atteindre", "La vision de l'organisation"],
      answer: 2,
      explanation: "Le Product Goal décrit un état futur du produit, servant de cible à long terme pour l'équipe Scrum, et les Sprints sont des étapes vers cet objectif."
    },
    {
      question: "Quel est le rôle du Scrum Master dans la gestion des obstacles (impediments) ?",
      options: ["Les ignorer si l'équipe peut se débrouiller", "Les résoudre lui-même sans aide", "Aider l'équipe à les identifier et les supprimer", "Les déléguer au Product Owner"],
      answer: 2,
      explanation: "Le Scrum Master est un facilitateur et un servant-leader, dont l'une des responsabilités est d'aider l'équipe à identifier et à supprimer les obstacles qui l'empêchent de progresser."
    },
    {
      question: "La planification de la version (Release Planning) en Scrum se produit :",
      options: ["Uniquement au début du projet", "Après chaque Sprint", "Continuellement en fonction de la valeur délivrée", "À la discrétion du Scrum Master"],
      answer: 2,
      explanation: "La planification de la version est un processus continu en Scrum, où le Product Owner et l'équipe décident quand et comment les incréments seront livrés aux clients, en fonction de la valeur métier."
    },
    {
      question: "Le 'Sprint Goal' (Objectif de Sprint) est défini pendant :",
      options: ["Le Daily Scrum", "Le Sprint Planning", "La Sprint Review", "La Sprint Retrospective"],
      answer: 1,
      explanation: "L'objectif de Sprint est créé collectivement par l'équipe Scrum pendant la réunion de Sprint Planning, donnant une direction claire au Sprint."
    },
    {
      question: "Quel artefact représente le 'quoi' du travail à faire ?",
      options: ["Sprint Backlog", "Incrément", "Product Backlog", "Definition of Done"],
      answer: 2,
      explanation: "Le Product Backlog est la liste ordonnée de tout ce qui est connu pour être nécessaire dans le produit, représentant le 'quoi' du travail."
    },
    {
      question: "Comment l'équipe de développement estime-t-elle généralement le travail dans Scrum ?",
      options: ["En heures exactes", "En points de story (Story Points)", "En jours de calendrier", "En coût monétaire"],
      answer: 1,
      explanation: "Les Story Points sont une unité de mesure abstraite utilisée en Scrum pour estimer l'effort relatif nécessaire pour implémenter un élément du Product Backlog."
    },
    {
      question: "Qui est responsable de l'adaptation du processus pour améliorer l'efficacité de l'équipe Scrum ?",
      options: ["Le Product Owner", "Le Scrum Master", "Les développeurs", "Le Manager fonctionnel"],
      answer: 1,
      explanation: "Le Scrum Master est responsable de l'efficacité de l'équipe Scrum et de son amélioration continue, y compris l'adaptation du processus."
    }
  ],
  itil: [
      {
        question: "Quel est l'objectif principal d'ITIL ?",
        options: ["Gérer les projets informatiques", "Aligner les services IT sur les besoins métier", "Développer des logiciels", "Assurer la sécurité des données"],
        answer: 1,
        explanation: "ITIL (Information Technology Infrastructure Library) est un cadre de bonnes pratiques pour la gestion des services informatiques (ITSM), visant à aligner les services IT sur les besoins de l'entreprise et à en améliorer la valeur."
      },
      {
        question: "Combien de dimensions de gestion des services y a-t-il dans ITIL 4 ?",
        options: ["3", "4", "5", "6"],
        answer: 1,
        explanation: "ITIL 4 introduit quatre dimensions de la gestion des services : Organisations et personnes, Information et technologie, Partenaires et fournisseurs, et Flux de valeur et processus. Elles sont cruciales pour assurer une approche holistique de la gestion des services."
      },
      {
        question: "Lequel des éléments suivants est un principe directeur d'ITIL 4 ?",
        options: ["Se concentrer sur le coût", "Commencer où vous êtes", "Éviter les erreurs", "Planifier tous les risques"],
        answer: 1,
        explanation: "Le principe 'Commencer où vous êtes' (Start where you are) encourage à évaluer la situation actuelle plutôt que de tout recommencer à zéro, en reconnaissant que des éléments utiles existent déjà."
      },
      {
        question: "Quelle pratique ITIL est responsable de la gestion des changements apportés aux services IT ?",
        options: ["Gestion des incidents", "Gestion des problèmes", "Gestion des changements (Change Enablement)", "Gestion des requêtes de service"],
        answer: 2,
        explanation: "La pratique de la 'Gestion des changements' (Change Enablement) vise à maximiser le nombre de changements réussis en garantissant que les risques sont évalués, que les parties prenantes sont informées et que l'impact est géré de manière contrôlée."
      },
      {
        question: "L'objectif principal de la pratique de 'Gestion des incidents' est de :",
        options: ["Trouver la cause profonde des erreurs", "Restaurer le service aussi rapidement que possible", "Prévenir les futurs problèmes", "Implémenter de nouveaux services"],
        answer: 1,
        explanation: "La 'Gestion des incidents' (Incident Management) a pour objectif de restaurer les opérations de service normales aussi rapidement que possible et de minimiser l'impact négatif sur les opérations métier."
      },
      {
        question: "Quel est le rôle du 'Service Desk' dans ITIL ?",
        options: ["Développer de nouvelles applications", "Point de contact unique entre l'utilisateur et les services IT", "Gérer l'infrastructure réseau", "Créer des rapports financiers"],
        answer: 1,
        explanation: "Le Service Desk est le point de contact principal entre le fournisseur de services et les utilisateurs, gérant les incidents et les requêtes de service."
      },
      {
        question: "Qu'est-ce qu'une 'Problème' (Problem) dans le contexte ITIL ?",
        options: ["Un incident qui ne peut pas être résolu", "Une cause ou la cause potentielle d'un ou plusieurs incidents", "Une demande de nouvelle fonctionnalité", "Une erreur système mineure"],
        answer: 1,
        explanation: "Un 'Problème' est la cause sous-jacente d'un ou plusieurs incidents. La gestion des problèmes vise à identifier ces causes profondes et à les éliminer pour prévenir la récurrence des incidents."
      },
      {
        question: "Le 'Continual Improvement' (Amélioration Continue) est une pratique transversale qui vise à :",
        options: ["Réduire les coûts IT uniquement", "Assurer que le fournisseur de services aligne continuellement ses pratiques et services sur l'évolution des besoins de l'entreprise", "Développer de nouvelles technologies", "Gérer les fournisseurs tiers"],
        answer: 1,
        explanation: "L'amélioration continue est un principe directeur et une pratique clé d'ITIL 4, axée sur l'amélioration des produits, des services et des pratiques à tous les niveaux."
      },
      {
        question: "Quel est l'objectif de la 'Gestion des Niveaux de Service' (Service Level Management) ?",
        options: ["Gérer les contrats avec les fournisseurs", "Définir, documenter et gérer les niveaux de service attendus avec les clients", "Mesurer la performance financière des services", "Gérer les actifs logiciels"],
        answer: 1,
        explanation: "La 'Gestion des Niveaux de Service' vise à définir des niveaux de service réalistes et à s'assurer qu'ils sont atteints, en équilibrant les attentes des clients et la capacité du fournisseur."
      },
      {
        question: "La 'Chaîne de Valeur des Services' (Service Value Chain - SVC) d'ITIL 4 se compose de combien d'activités ?",
        options: ["4", "5", "6", "7"],
        answer: 2,
        explanation: "La Chaîne de Valeur des Services comprend six activités : Plan, Améliorer, Engager, Concevoir et Transférer, Obtenir/Construire, Livrer et Supporter."
      },
      {
        question: "Quel principe directeur ITIL 4 suggère de créer quelque chose de petit, d'itératif et d'apprendre rapidement ?",
        options: ["Collaborer et promouvoir la visibilité", "Penser et travailler de manière holistique", "Progresser de manière itérative avec le feedback", "Garder les choses simples et pratiques"],
        answer: 2,
        explanation: "Le principe 'Progresser de manière itérative avec le feedback' (Progress iteratively with feedback) encourage la livraison progressive et l'apprentissage continu."
      },
      {
        question: "La 'Gestion des requêtes de service' (Service Request Management) s'occupe de :",
        options: ["Les pannes de service imprévues", "Les demandes de fonctionnalités logicielles", "Les demandes standardisées de services ou d'informations", "Les changements majeurs d'infrastructure"],
        answer: 2,
        explanation: "La gestion des requêtes de service gère les demandes de services pré-approuvés et standardisés, comme l'accès à un logiciel ou une réinitialisation de mot de passe."
      },
      {
        question: "Quel est l'objectif de la pratique 'Surveillance et Événements' (Monitoring and Event Management) ?",
        options: ["Détecter les incidents avant qu'ils ne se produisent", "Observer les services et leurs composants pour identifier les changements d'état", "Gérer les alertes de sécurité", "Évaluer la satisfaction des utilisateurs"],
        answer: 1,
        explanation: "Cette pratique vise à observer les services et leurs composants, et à enregistrer et signaler les événements sélectionnés, dans le but d'identifier et de hiérarchiser les conditions qui pourraient potentiellement mener à des incidents."
      },
      {
        question: "Le 'Service Value System' (Système de Valeur du Service - SVS) d'ITIL 4 englobe :",
        options: ["Uniquement la Chaîne de Valeur des Services", "La Chaîne de Valeur des Services, les Principes Directeurs, la Gouvernance, les Pratiques et l'Amélioration Continue", "Les technologies IT et les processus uniquement", "La gestion financière des services"],
        answer: 1,
        explanation: "Le SVS est un modèle de bout en bout pour la création, la livraison et l'amélioration continue de la valeur, intégrant tous les composants et activités d'une organisation."
      },
      {
        question: "La 'Gestion des Problèmes' (Problem Management) a pour objectif de :",
        options: ["Restaurer rapidement le service", "Réduire la probabilité et l'impact des incidents en identifiant et éliminant leurs causes profondes", "Gérer les modifications de l'infrastructure", "Documenter toutes les requêtes des utilisateurs"],
        answer: 1,
        explanation: "La gestion des problèmes vise à prévenir les incidents, ou à minimiser leur impact s'ils ne peuvent être évités, en identifiant et en résolvant les causes fondamentales des incidents."
      },
      {
        question: "Qu'est-ce qu'un 'Changement Standard' dans ITIL 4 ?",
        options: ["Un changement urgent non planifié", "Un changement de faible risque, pré-autorisé, qui est souvent mis en œuvre comme une requête de service", "Un changement majeur qui nécessite une approbation formelle", "Un changement qui n'a pas d'impact sur les utilisateurs"],
        answer: 1,
        explanation: "Les changements standards sont des changements à faible risque, fréquemment mis en œuvre, qui sont pré-approuvés et suivent une procédure définie, souvent automatisée."
      },
      {
        question: "Quel principe directeur ITIL 4 met l'accent sur la compréhension du contexte complet du service ?",
        options: ["Collaborer et promouvoir la visibilité", "Penser et travailler de manière holistique", "Se concentrer sur la valeur", "Garder les choses simples et pratiques"],
        answer: 1,
        explanation: "Le principe 'Penser et travailler de manière holistique' (Think and work holistically) encourage une vue d'ensemble, en reconnaissant que tous les composants d'un service sont interdépendants."
      },
      {
        question: "La 'Gestion des connaissances' (Knowledge Management) dans ITIL vise à :",
        options: ["Stocker toutes les informations sur les clients", "Maintenir et améliorer l'utilisation et la valeur des informations et des connaissances", "Gérer les licences logicielles", "Former les utilisateurs aux nouveaux services"],
        answer: 1,
        explanation: "La gestion des connaissances est cruciale pour l'efficacité des services IT, en assurant que les bonnes informations sont disponibles pour les bonnes personnes au bon moment."
      },
      {
        question: "Quel terme ITIL décrit la capacité d'un service à fonctionner comme prévu ?",
        options: ["Utilité (Utility)", "Garantie (Warranty)", "Valeur (Value)", "Coût (Cost)"],
        answer: 0,
        explanation: "L''Utilité' (Utility) d'un service est ce qu'il fait, sa capacité à répondre à un besoin spécifique (fit for purpose)."
      },
      {
        question: "Quel terme ITIL décrit la manière dont un service fonctionne (disponibilité, capacité, continuité, sécurité) ?",
        options: ["Utilité (Utility)", "Garantie (Warranty)", "Valeur (Value)", "Coût (Cost)"],
        answer: 1,
        explanation: "La 'Garantie' (Warranty) d'un service est la manière dont il fonctionne, assurant que le service est 'fit for use' (adapté à l'usage) en termes de disponibilité, capacité, continuité et sécurité."
      },
      {
        question: "La 'Gestion de la sécurité de l'information' (Information Security Management) vise à :",
        options: ["Protéger les données uniquement", "Protéger les informations par la confidentialité, l'intégrité et la disponibilité", "Gérer les mots de passe des utilisateurs", "Assurer la conformité réglementaire seulement"],
        answer: 1,
        explanation: "La 'Gestion de la sécurité de l'information' est la pratique qui vise à protéger l'organisation par la confidentialité, l'intégrité et la disponibilité des informations."
      },
      {
        question: "Quel type de budget est le plus couramment associé à la gestion des services IT dans ITIL ?",
        options: ["Budget de projet", "Budget opérationnel", "Budget d'investissement", "Budget variable"],
        answer: 1,
        explanation: "Le budget opérationnel (Operating Budget) est généralement le plus pertinent pour la gestion des services IT, couvrant les coûts récurrents liés à la fourniture et au maintien des services."
      },
      {
        question: "Le but de la 'Gestion des actifs IT' (IT Asset Management) est de :",
        options: ["Gérer les employés du département IT", "Planifier la carrière des techniciens", "Planifier et gérer le cycle de vie complet de tous les actifs IT", "Auditer la conformité des logiciels"],
        answer: 2,
        explanation: "La 'Gestion des actifs IT' (IT Asset Management) vise à planifier et gérer le cycle de vie complet de tous les actifs IT, y compris le matériel, les logiciels, les réseaux, etc., afin d'optimiser leur valeur."
      },
      {
        question: "Quelle est la relation entre un incident et une requête de service ?",
        options: ["Ce sont les mêmes concepts", "Un incident est une interruption imprévue, une requête est une demande standardisée", "Une requête est toujours la cause d'un incident", "Un incident est toujours résolu par une requête"],
        answer: 1,
        explanation: "Un incident est une interruption non planifiée ou une dégradation d'un service. Une requête de service est une demande formelle d'informations ou pour un service standard pré-approuvé."
      },
      {
        question: "L'objectif de la 'Gestion des relations' (Relationship Management) est de :",
        options: ["Gérer les employés", "Établir et entretenir des liens entre l'organisation et ses parties prenantes", "Négocier les contrats avec les fournisseurs", "Gérer les plaintes des clients"],
        answer: 1,
        explanation: "La 'Gestion des relations' vise à établir et entretenir de bonnes relations avec les parties prenantes du service (clients, utilisateurs, fournisseurs, etc.) pour assurer la valeur et la satisfaction."
      }
  ],
  cobit: [
      {
        question: "Quel organisme est responsable de COBIT ?",
        options: ["PMI", "AXELOS", "ISACA", "The Open Group"],
        answer: 2,
        explanation: "COBIT est un cadre de gouvernance et de gestion des informations et des technologies de l'entreprise publié par l'ISACA."
      },
      {
        question: "Combien d'objectifs de gouvernance et de management y a-t-il dans COBIT 2019 ?",
        options: ["20", "30", "40", "50"],
        answer: 2,
        explanation: "COBIT 2019 propose 40 objectifs de gouvernance et de management qui couvrent les principales activités et responsabilités de l'IT au sein de l'entreprise. Ces objectifs sont organisés en domaines de gouvernance et de gestion."
      },
      {
        question: "L'un des principes clés de COBIT 2019 est :",
        options: ["Se concentrer sur les projets", "Satisfaire les besoins des parties prenantes", "Réduire les coûts IT à tout prix", "Ignorer les réglementations"],
        answer: 1,
        explanation: "Le principe 'Satisfying Stakeholder Needs' (Satisfaire les besoins des parties prenantes) est fondamental pour COBIT, car la gouvernance IT doit délivrer de la valeur à toutes les parties prenantes et équilibrer les intérêts divers."
      },
      {
        question: "Quel modèle COBIT aide à relier les objectifs d'entreprise aux objectifs IT, puis aux composants de gouvernance et de gestion ?",
        options: ["Le cycle de vie du service", "La chaîne de valeur des services", "Le modèle en cascade d'objectifs (Goals Cascade)", "Le cadre de compétences"],
        answer: 2,
        explanation: "Le modèle en cascade d'objectifs (Goals Cascade) de COBIT aide à traduire les objectifs d'entreprise en objectifs d'alignement liés à l'IT, puis en objectifs de gouvernance et de gestion, assurant une traçabilité et un alignement clairs."
      },
      {
        question: "Dans COBIT, qu'est-ce que 'APO' signifie généralement ?",
        options: ["Align, Plan, Organize", "Acquire, Produce, Operate", "Assess, Prioritize, Optimize", "Analyze, Plan, Overcome"],
        answer: 0,
        explanation: "Dans le cadre de processus COBIT (et notamment COBIT 5), APO signifiait 'Align, Plan, Organize' et regroupait les processus liés à l'alignement stratégique et à l'organisation de l'IT. Bien que COBIT 2019 réorganise, les concepts restent similaires."
      },
      {
        question: "L'objectif principal du domaine 'Évaluer, Diriger et Surveiller' (EDM) dans COBIT est de :",
        options: ["Gérer les opérations quotidiennes de l'IT", "Assurer que la gouvernance IT fournit de la valeur et répond aux attentes", "Développer de nouvelles solutions IT", "Mettre en œuvre les stratégies IT"],
        answer: 1,
        explanation: "Le domaine EDM (Evaluate, Direct, Monitor) est le domaine de gouvernance de COBIT, responsable de l'évaluation des options stratégiques, de la direction de la mise en œuvre et de la surveillance des performances."
      },
      {
        question: "Quel principe de gouvernance COBIT 2019 met l'accent sur l'approche de bout en bout de la gouvernance IT ?",
        options: ["Satisfaire les besoins des parties prenantes", "Couvrir l'entreprise de bout en bout", "Appliquer un cadre unique et intégré", "Séparer la gouvernance de la gestion"],
        answer: 1,
        explanation: "Le principe 'Couvrir l'entreprise de bout en bout' (Covering the Enterprise End-to-End) signifie que COBIT prend en compte toutes les fonctions et informations nécessaires au niveau de l'entreprise, pas seulement celles de la fonction IT."
      },
      {
        question: "Le rôle d'un 'Manager' dans le modèle de gouvernance COBIT est de :",
      options: ["Surveiller la performance et la conformité", "Planifier, construire, exécuter et surveiller les activités en ligne avec les objectifs de gouvernance", "Évaluer et diriger le système de gouvernance", "Définir la stratégie d'entreprise"],
      answer: 1,
      explanation: "Les managers sont responsables de la planification, de la construction, de l'exécution et de la surveillance des activités (domaine 'Build, Run, Monitor' ou 'Plan, Build, Run, Monitor') pour atteindre les objectifs définis par la gouvernance."
      },
      {
        question: "Qu'est-ce qu'un 'Facteur de Conception' (Design Factor) dans COBIT 2019 ?",
        options: ["Un outil de mesure de la performance", "Un élément qui influence la conception et la mise en œuvre d'un système de gouvernance sur mesure", "Un type de risque IT", "Un composant de processus"],
        answer: 1,
        explanation: "Les facteurs de conception sont des variables qui influencent la façon dont le système de gouvernance doit être adapté aux circonstances spécifiques d'une organisation, comme la stratégie, la taille ou les menaces."
      },
      {
        question: "Dans COBIT, quelle est la relation entre 'Gouvernance' et 'Gestion' ?",
        options: ["Ce sont des termes interchangeables", "La gouvernance dirige et surveille, la gestion planifie, construit et exécute", "La gestion est un sous-ensemble de la gouvernance", "La gouvernance s'occupe des opérations, la gestion de la stratégie"],
        answer: 1,
        explanation: "COBIT fait une distinction claire : la gouvernance assure que les besoins des parties prenantes sont satisfaits en évaluant, dirigeant et surveillant. La gestion planifie, construit, exécute et surveille les activités en ligne avec la direction donnée par la gouvernance."
      },
      {
        question: "Quel est l'objectif du domaine 'Planifier, Construire, Exécuter, Surveiller' (PBM) ?",
        options: ["Gouverner les informations et technologies", "Fournir des services IT en ligne avec les exigences", "Développer la stratégie d'entreprise", "Auditer les systèmes IT"],
        answer: 1,
        explanation: "Le domaine 'Planifier, Construire, Exécuter, Surveiller' (PBM - Plan, Build, Run, Monitor) était le domaine de management de COBIT 5, et ses concepts sont réintégrés dans les objectifs de management de COBIT 2019, visant la livraison de services."
      },
      {
        question: "Les objectifs en cascade dans COBIT traduisent :",
        options: ["Les objectifs IT en objectifs de processus", "Les objectifs d'entreprise en objectifs d'alignement liés à l'IT, puis en objectifs de gouvernance et de gestion", "Les risques en contrôles", "Les exigences en solutions techniques"],
        answer: 1,
        explanation: "La cascade d'objectifs est un mécanisme clé de COBIT pour s'assurer que les objectifs de l'entreprise sont liés aux objectifs IT, qui à leur tour sont liés aux objectifs de gouvernance et de gestion spécifiques."
      },
      {
        question: "COBIT peut être intégré à d'autres cadres comme ITIL et ISO 27000. Vrai ou Faux ?",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Vrai. COBIT est un cadre de gouvernance général qui peut être superposé et intégré à d'autres cadres opérationnels ou techniques comme ITIL pour la gestion des services, ou ISO 27000 pour la sécurité de l'information."
      },
      {
        question: "Quel principe COBIT 2019 met l'accent sur la distinction claire des rôles et responsabilités ?",
        options: ["Un cadre unique et intégré", "Séparer la gouvernance de la gestion", "Adapter le système de gouvernance aux besoins", "Une gouvernance dynamique"],
        answer: 1,
        explanation: "Le principe 'Séparer la gouvernance de la gestion' assure que les deux domaines sont clairs et distincts, bien qu'ils interagissent."
      },
      {
        question: "Lequel des éléments suivants est un composant de gouvernance et de gestion dans COBIT 2019 ?",
        options: ["Processus", "Structure organisationnelle", "Information", "Toutes les réponses ci-dessus"],
        answer: 3,
        explanation: "Les composants d'un système de gouvernance et de gestion incluent les processus, les structures organisationnelles, les principes, les politiques, les cadres, la culture, l'éthique, le comportement, les informations et les services, l'infrastructure et les applications, et les personnes, les compétences et les talents."
      },
      {
        question: "Le modèle de maturité de COBIT est utilisé pour :",
        options: ["Mesurer la performance financière de l'IT", "Évaluer le niveau de capacité des processus IT", "Classer les risques IT", "Définir la stratégie d'entreprise"],
        answer: 1,
        explanation: "Le modèle de maturité de COBIT (basé sur le modèle CMMI) est utilisé pour évaluer à quel point les processus d'une organisation sont définis, gérés, mesurés et optimisés."
      },
      {
        question: "Quel concept de COBIT aide à assurer que l'IT soutient les objectifs de l'entreprise ?",
        options: ["Rapports d'incidents", "Indicateurs de performance clés (KPI)", "Matrice des risques", "Plan de reprise d'activité"],
        answer: 1,
        explanation: "Les indicateurs de performance clés (KPI) et les indicateurs de succès critiques (CSFs) dans COBIT sont utilisés pour mesurer si les objectifs IT sont atteints et si la valeur est délivrée à l'entreprise."
      },
      {
        question: "COBIT est particulièrement axé sur :",
        options: ["Le développement de logiciels Agile", "La gestion de projet", "La gouvernance et la gestion des technologies de l'information de l'entreprise", "La sécurité des données personnelles"],
        answer: 2,
        explanation: "COBIT est un cadre de gouvernance des informations et des technologies, fournissant un modèle complet pour aider les entreprises à atteindre leurs objectifs en matière d'IT."
      },
      {
        question: "Un 'objectif de performance' dans COBIT est :",
        options: ["Un objectif opérationnel quotidien", "Une mesure de l'efficacité d'un processus", "Un indicateur clé de risque", "Un objectif stratégique de haut niveau"],
        answer: 1,
        explanation: "Les objectifs de performance (ou métriques) sont utilisés pour mesurer la réalisation des objectifs de gouvernance et de gestion et l'efficacité des processus."
      },
      {
        question: "Le but de la 'Gestion des Risques IT' dans COBIT est de :",
        options: ["Éliminer tous les risques IT", "Identifier, évaluer et répondre aux risques liés à l'IT qui pourraient avoir un impact sur l'entreprise", "Déléguer tous les risques aux parties prenantes externes", "Se concentrer uniquement sur les risques de cybersécurité"],
        answer: 1,
        explanation: "La gestion des risques IT est une composante essentielle de COBIT, visant à comprendre et à gérer l'exposition de l'organisation aux risques liés aux technologies de l'information."
      },
      {
        question: "Qu'est-ce qu'un 'Processus' dans le contexte COBIT ?",
        options: ["Une série d'activités séquentielles pour atteindre un objectif spécifique", "Un département IT", "Un outil logiciel", "Un type de risque"],
        answer: 0,
        explanation: "Dans COBIT, les processus sont des ensembles d'activités pour atteindre des objectifs spécifiques en matière de gouvernance et de gestion de l'IT."
      },
      {
        question: "Le principe 'Une gouvernance dynamique' de COBIT 2019 implique :",
        options: ["Que la gouvernance ne doit jamais changer", "Que le système de gouvernance doit être capable de s'adapter aux facteurs de conception changeants", "Que la gouvernance est gérée par des systèmes automatisés", "Que seul le comité de direction peut modifier la gouvernance"],
        answer: 1,
        explanation: "Une gouvernance dynamique signifie que le cadre de gouvernance doit être flexible et adaptable pour répondre aux changements internes et externes de l'organisation."
      },
      {
        question: "Les 'informations' sont considérées comme un 'actif' dans COBIT. Vrai ou Faux ?",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Vrai. Dans COBIT, l'information est un actif clé qui doit être géré et protégé pour soutenir les objectifs de l'entreprise."
      },
      {
        question: "Quel est l'objectif du domaine 'Construire, Acquérir et Implémenter' (BAI) ?",
        options: ["Définir les stratégies IT", "Fournir des solutions IT et les rendre opérationnelles", "Assurer la conformité réglementaire", "Gérer les fournisseurs IT"],
        answer: 1,
        explanation: "Le domaine BAI (Build, Acquire, Implement) de COBIT 5 (et concepts équivalents dans COBIT 2019) est axé sur la définition des exigences, l'acquisition de solutions et leur intégration dans l'environnement IT."
      },
      {
        question: "Qui est le principal public cible de COBIT ?",
        options: ["Les développeurs de logiciels", "Les auditeurs IT, les responsables de la gouvernance IT et les DSI", "Les chefs de projet", "Les utilisateurs finaux des services IT"],
        answer: 1,
        explanation: "COBIT s'adresse principalement aux auditeurs, aux responsables de la gouvernance, aux DSI et aux membres du conseil d'administration qui s'intéressent à la valeur de l'IT et à la gestion de ses risques."
      }
  ],
  togaf: [
      {
        question: "Que signifie l'acronyme TOGAF ?",
        options: ["The Open Group Agile Framework", "The Open Group Architecture Framework", "Total Organizational Global Architecture Framework", "Technological Operations and Governance Architecture Forum"],
        answer: 1,
        explanation: "TOGAF signifie 'The Open Group Architecture Framework', un cadre de référence pour l'architecture d'entreprise développé par The Open Group. Il fournit une approche structurée pour créer et gérer une architecture d'entreprise."
      },
      {
        question: "Combien de phases comporte l'ADM (Architecture Development Method) de TOGAF ?",
        options: ["6", "7", "8", "9"],
        answer: 2,
        explanation: "L'ADM de TOGAF est un processus itératif comportant 8 phases principales (A à H), précédées d'une phase préliminaire et complétées par les exigences de gestion et le Management des changements d'architecture. Elle est le cœur de TOGAF."
      },
      {
        question: "Quelle phase de l'ADM de TOGAF se concentre sur la définition de la portée de l'architecture et l'identification des parties prenantes ?",
        options: ["Phase A : Vision de l'architecture", "Phase B : Architecture métier", "Phase C : Architecture des systèmes d'information", "Phase D : Architecture technique"],
        answer: 0,
        explanation: "La Phase A, Vision de l'architecture, est la phase initiale de l'ADM qui établit le contexte du projet d'architecture, obtient l'approbation des parties prenantes et définit la vision de haut niveau de l'architecture cible."
      },
      {
        question: "Un des principaux objectifs de TOGAF est de :",
        options: ["Créer des applications logicielles", "Fournir une approche pour la conception, la planification, l'implémentation et la gouvernance d'une architecture d'entreprise", "Gérer les projets agiles", "Auditer la conformité IT"],
        answer: 1,
        explanation: "TOGAF fournit une méthodologie détaillée et un ensemble d'outils pour aider à la planification, au développement et à la gouvernance d'une architecture d'entreprise, assurant l'alignement IT-métier."
      },
      {
        question: "Quel concept de TOGAF permet de classifier les éléments d'architecture réutilisables et fournit une perspective sur leur pertinence ?",
        options: ["Architecture Capability", "Enterprise Continuum", "Architecture Repository", "Solutions Continuum"],
        answer: 1,
        explanation: "L'Enterprise Continuum est un moyen de classer et de comprendre les différents niveaux de spécificité d'une architecture, depuis les architectures fondationnelles jusqu'aux architectures spécifiques à une organisation. Il aide à la réutilisation."
      },
      {
        question: "Le 'Architecture Repository' (Dépôt d'Architecture) dans TOGAF contient :",
        options: ["Uniquement les documents de projet", "Une collection de tous les outputs du travail d'architecture de l'entreprise", "Le code source des applications", "Les CV des architectes"],
        answer: 1,
        explanation: "Le Dépôt d'Architecture est un référentiel logique et physique de toutes les données et informations relatives à l'architecture d'entreprise, y compris les modèles, vues, artefacts, etc."
      },
      {
        question: "Quelle phase de l'ADM de TOGAF se concentre sur la définition de la structure organisationnelle, des processus métier et des fonctions ?",
        options: ["Phase B : Architecture métier", "Phase C : Architecture des systèmes d'information", "Phase D : Architecture technique", "Phase E : Opportunités et solutions"],
        answer: 0,
        explanation: "La Phase B, Architecture métier, décrit la Business Architecture de l'entreprise, y compris les processus métier, les fonctions et la structure organisationnelle nécessaires pour atteindre la vision de l'architecture."
      },
      {
        question: "Quel est l'objectif de la 'Governance Architecture' dans TOGAF ?",
        options: ["Gérer le personnel IT", "S'assurer que les politiques et cadres d'architecture sont respectés et que les décisions sont cohérentes", "Développer de nouvelles stratégies métier", "Auditer les systèmes financiers"],
        answer: 1,
        explanation: "La 'Governance Architecture' (gouvernance de l'architecture) établit le cadre, les processus et les rôles pour assurer que l'architecture d'entreprise est gérée, maintenue et respectée tout au long de son cycle de vie."
      },
      {
        question: "Le 'Architecture Content Framework' (Cadre de Contenu de l'Architecture) de TOGAF fournit :",
        options: ["Une liste de technologies à utiliser", "Un modèle structuré des outputs d'architecture, y compris les livrables, les artefacts et les blocs de construction", "Une méthode de développement logiciel", "Un guide pour la gestion de projet"],
        answer: 1,
        explanation: "Le Cadre de Contenu fournit un modèle de métadonnées structuré pour décrire les outputs d'architecture, assurant la cohérence et la complétude des descriptions d'architecture."
      },
      {
        question: "Quelle phase de l'ADM est dédiée à la définition des architectures des données et des applications ?",
        options: ["Phase B : Architecture métier", "Phase C : Architecture des systèmes d'information", "Phase D : Architecture technique", "Phase E : Opportunités et solutions"],
        answer: 1,
        explanation: "La Phase C, Architecture des systèmes d'information, se divise en deux parties principales : l'architecture de données et l'architecture des applications."
      },
      {
        question: "Quel rôle est le principal responsable de la vision d'ensemble et de l'intégration de l'architecture d'entreprise ?",
        options: ["Business Architect", "Data Architect", "Application Architect", "Enterprise Architect"],
        answer: 3,
        explanation: "L'Architecte d'Entreprise est responsable de la vision globale de l'architecture, en coordonnant les différentes architectures métier, données, applications et techniques pour former un tout cohérent."
      },
      {
        question: "TOGAF est un cadre propriétaire qui nécessite une licence d'utilisation. Vrai ou Faux ?",
        options: ["Vrai", "Faux"],
        answer: 1,
        explanation: "Faux. TOGAF est un cadre de référence ouvert, géré par The Open Group, et son utilisation est libre et gratuite pour les organisations."
      },
      {
        question: "Le 'Gap Analysis' (Analyse des Écarts) dans TOGAF est utilisé pour :",
        options: ["Estimer le coût d'un projet", "Identifier les différences entre l'architecture de base et l'architecture cible", "Mesurer la satisfaction des utilisateurs", "Analyser les risques de sécurité"],
        answer: 1,
        explanation: "L'Analyse des Écarts est une technique essentielle de l'ADM pour identifier les lacunes entre la situation actuelle ('As-Is' architecture) et la situation souhaitée ('To-Be' architecture)."
      },
      {
        question: "Quelle phase de l'ADM implique la planification de l'implémentation et de la migration ?",
        options: ["Phase E : Opportunités et solutions", "Phase F : Planification de la migration", "Phase G : Gouvernance de l'implémentation", "Phase H : Gestion des changements d'architecture"],
        answer: 1,
        explanation: "La Phase F, Planification de la migration, se concentre sur la création de plans de mise en œuvre et de migration pour passer de l'architecture de base à l'architecture cible."
      },
      {
        question: "Le concept de 'Architecture Building Blocks' (Blocs de Construction d'Architecture) dans TOGAF fait référence à :",
        options: ["Des logiciels préexistants", "Des composants réutilisables d'architecture, fonctionnels ou non fonctionnels", "Des équipes de construction d'infrastructure", "Des briques de Lego pour les modèles"],
        answer: 1,
        explanation: "Les ABB sont des composants réutilisables qui peuvent être combinés pour former des architectures plus complexes, facilitant la réutilisation et la standardisation."
      },
      {
        question: "Quel est le but de la phase 'Preliminary' (Préliminaire) de l'ADM ?",
      options: ["Définir la portée et les principes d'architecture à un niveau élevé", "Commencer la conception détaillée des systèmes", "Déployer les premières solutions techniques", "Clôturer le projet d'architecture"],
      answer: 0,
      explanation: "La phase Préliminaire prépare l'organisation à l'exécution de projets d'architecture, en établissant la capacité d'architecture et les principes de gouvernance."
    },
    {
      question: "La 'Requirements Management' (Gestion des Exigences) est une phase continue de l'ADM qui vise à :",
      options: ["Développer de nouvelles exigences tout au long du cycle", "Gérer et valider toutes les exigences d'architecture et les exigences métier", "Prioriser les exigences techniques", "Réduire le nombre total d'exigences"],
      answer: 1,
      explanation: "La gestion des exigences est une activité continue qui s'étend sur toutes les phases de l'ADM, assurant que les exigences sont capturées, analysées, suivies et gérées."
    },
    {
      question: "Quelle phase de l'ADM s'assure que les plans d'implémentation sont suivis et que les projets s'alignent sur l'architecture ?",
      options: ["Phase E : Opportunités et solutions", "Phase F : Planification de la migration", "Phase G : Gouvernance de l'implémentation", "Phase H : Gestion des changements d'architecture"],
      answer: 2,
      explanation: "La Phase G, Gouvernance de l'implémentation, vise à garantir que les projets de mise en œuvre respectent l'architecture cible définie."
    },
    {
      question: "L'ADM est un processus itératif. Qu'est-ce que cela signifie ?",
      options: ["Il ne peut être exécuté qu'une seule fois", "Chaque phase doit être complétée parfaitement avant de passer à la suivante", "Il peut être répété et adapté si nécessaire, permettant des cycles d'amélioration", "Il est exclusivement linéaire"],
      answer: 2,
      explanation: "Le caractère itératif de l'ADM permet de revenir sur les phases précédentes, d'affiner l'architecture et de s'adapter aux changements, ce qui est crucial pour la complexité des architectures d'entreprise."
    },
    {
      question: "Les vues et les points de vue (Views and Viewpoints) dans TOGAF sont utilisés pour :",
      options: ["Créer des rapports financiers", "Décrire l'architecture sous différentes perspectives pour différentes parties prenantes", "Visualiser l'infrastructure physique", "Définir les étapes du projet"],
      answer: 1,
      explanation: "Une 'vue' est une représentation d'une architecture du point de vue d'une partie prenante spécifique, guidée par un 'point de vue' qui définit la perspective et les conventions de représentation."
    },
    {
      question: "Quel est l'objectif de la Phase H de l'ADM (Gestion des changements d'architecture) ?",
      options: ["Mettre fin au projet d'architecture", "Assurer que l'architecture d'entreprise est maintenue à jour et reste pertinente", "Déployer de nouvelles technologies", "Gérer les budgets des projets"],
      answer: 1,
      explanation: "La Phase H gère les changements dans l'environnement métier et technologique, et s'assure que l'architecture d'entreprise est continuellement revue et adaptée."
    },
    {
      question: "La certification TOGAF 9 Certified (Level 2) teste la capacité de l'individu à :",
      options: ["Décrire les concepts de base de TOGAF", "Appliquer et analyser les concepts de TOGAF dans des scénarios", "Développer des applications logicielles", "Gérer des projets complexes"],
      answer: 1,
      explanation: "Le niveau 2 (Certified) teste la capacité d'appliquer et d'analyser les concepts de TOGAF pour résoudre des problèmes dans des scénarios de cas d'utilisation."
    },
    {
      question: "Qu'est-ce qu'une 'Solution Architecture' dans le contexte de l'Enterprise Continuum ?",
      options: ["Une architecture abstraite et générique", "Une architecture spécifique à un besoin métier donné ou à un projet particulier", "Une architecture technologique", "Une architecture de référence industrielle"],
      answer: 1,
      explanation: "Les 'Solution Architectures' sont des architectures plus spécifiques, conçues pour répondre à des besoins métier particuliers, souvent au niveau d'un projet ou d'un système."
    },
    {
      question: "Le 'Business Scenarios' (Scénarios Métier) dans TOGAF sont utilisés pour :",
      options: ["Décrire les processus techniques", "Identifier et comprendre les exigences métier qui pilotent les architectures", "Planifier la communication du projet", "Évaluer la performance des employés"],
      answer: 1,
      explanation: "Les scénarios métier sont une technique pour capturer les exigences métier d'une manière qui peut être utilisée pour dériver des exigences d'architecture concrètes."
    },
    {
      question: "Quel domaine de l'architecture est couvert par la Phase D de l'ADM ?",
      options: ["Métier", "Données", "Applications", "Technologie"],
      answer: 3,
      explanation: "La Phase D, Architecture technologique, décrit la logique logicielle et matérielle nécessaire pour soutenir les architectures de données et d'applications."
    }
  ]
};

let currentLearnQuestions = [];
let currentLearnQuestionIndex = 0;
let learnAnswerRevealed = false;

// Function to render content for general learn modules
function showLearnContent(topic) {
  const content = learnContents[topic];
  const container = document.getElementById('learn-content');
  
  if (!content) {
    container.innerHTML = `<div class="alert alert-warning">Contenu non trouvé pour le sujet : ${topic}.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="card shadow-sm">
      <div class="card-header bg-white">
        <h4 class="card-title mb-0"><i class="fas fa-book-reader text-primary me-2"></i>${content.title}</h4>
      </div>
      <div class="card-body">
        <div class="card-text">
          ${content.content}
        </div>
        <div class="mt-4 text-center">
            <button onclick="resetLearnContent()" class="btn btn-outline-secondary">
                <i class="fas fa-arrow-left me-2"></i>Retour aux modules
            </button>
        </div>
      </div>
    </div>
  `;
}

// Function to display the initial learn selection page
function resetLearnContent() {
    const learnContentDiv = document.getElementById('learn-content');
    learnContentDiv.innerHTML = `
        <div class="card shadow-sm">
          <div class="card-header bg-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h4 class="card-title mb-0"><i class="fas fa-graduation-cap text-primary me-2"></i>Bienvenue en mode Learn</h4>
              </div>
              <div>
                <span class="badge bg-primary">CAPM</span>
                <span class="badge bg-success ms-1">PMP</span>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="text-center py-4">
              <img src="https://via.placeholder.com/300x200?text=Gestion+de+Projet" alt="Gestion de projet" class="img-fluid rounded mb-4">
              <h3>Apprenez à votre rythme</h3>
              <p class="lead">Sélectionnez un module dans le menu de gauche pour commencer votre apprentissage, ou choisissez un sujet de questions pratiques ci-dessous.</p>
              <div class="row mt-4">
                <div class="col-md-4 mb-3">
                  <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body text-center">
                      <i class="fas fa-video fa-3x text-primary mb-3"></i>
                      <h5>Cours vidéo</h5>
                      <p class="small text-muted">+50 heures de contenu</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body text-center">
                      <i class="fas fa-file-alt fa-3x text-success mb-3"></i>
                      <h5>Fiches pratiques</h5>
                      <p class="small text-muted">+120 ressources</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body text-center">
                      <i class="fas fa-chart-pie fa-3x text-warning mb-3"></i>
                      <h5>Suivi de progression</h5>
                      <p class="small text-muted">Analytiques détaillés</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <h5><i class="fas fa-fire text-danger me-2"></i>Modules populaires</h5>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="card h-100 hover-shadow" onclick="showLearnContent('agile-method')">
                    <div class="card-body">
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <i class="fas fa-arrows-rotate fa-2x text-success me-3"></i>
                        </div>
                        <div>
                          <h6 class="mb-1">Méthodes Agile</h6>
                          <p class="small text-muted mb-2">Maîtrisez Scrum, Kanban et XP</p>
                          <div class="progress" style="height: 5px;">
                            <div class="progress-bar bg-success" style="width: 65%"></div>
                          </div>
                          <small class="text-muted">65% complété</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="card h-100 hover-shadow" onclick="showLearnContent('risk-management')">
                    <div class="card-body">
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <i class="fas fa-shield-alt fa-2x text-danger me-3"></i>
                        </div>
                        <div>
                          <h6 class="mb-1">Gestion des risques</h6>
                          <p class="small text-muted mb-2">Identifiez et mitigez les risques</p>
                          <div class="progress" style="height: 5px;">
                            <div class="progress-bar bg-danger" style="width: 40%"></div>
                          </div>
                          <small class="text-muted">40% complété</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h5 class="mt-4"><i class="fas fa-question-circle text-primary me-2"></i>Questions Pratiques par Certification</h5>
            <div class="row" id="learn-practice-selection">
                <div class="col-md-6 mb-3">
                    <button class="btn btn-outline-primary w-100 h-100 py-3" onclick="startLearnPractice('capm')">
                        <i class="fas fa-certificate me-2"></i> Practice CAPM
                    </button>
                </div>
                <div class="col-md-6 mb-3">
                    <button class="btn btn-outline-danger w-100 h-100 py-3" onclick="startLearnPractice('pmp')">
                        <i class="fas fa-award me-2"></i> Practice PMP
                    </button>
                </div>
                <div class="col-md-6 mb-3">
                    <button class="btn btn-outline-purple w-100 h-100 py-3" onclick="startLearnPractice('prince2')">
                        <i class="fas fa-chess me-2"></i> Practice PRINCE2
                    </button>
                </div>
                <div class="col-md-6 mb-3">
                    <button class="btn btn-outline-success w-100 h-100 py-3" onclick="startLearnPractice('scrum')">
                        <i class="fas fa-arrows-rotate me-2"></i> Practice SCRUM
                    </button>
                </div>
                <div class="col-md-6 mb-3">
                    <button class="btn btn-outline-info w-100 h-100 py-3" onclick="startLearnPractice('itil')">
                        <i class="fas fa-server me-2"></i> Practice ITIL
                    </button>
                </div>
                <div class="col-md-6 mb-3">
                    <button class="btn btn-outline-warning w-100 h-100 py-3" onclick="startLearnPractice('cobit')">
                        <i class="fas fa-shield-alt me-2"></i> Practice COBIT
                    </button>
                </div>
                <div class="col-md-6 mb-3">
                    <button class="btn btn-outline-dark w-100 h-100 py-3" onclick="startLearnPractice('togaf')">
                        <i class="fas fa-building me-2"></i> Practice TOGAF
                    </button>
                </div>
            </div>
          </div>
        </div>
    `;
    updateLearnQuestionCounts(); // Update counts when returning to selection
}


// Functions for the interactive learn questions
function startLearnPractice(cert) {
  currentLearnQuestions = learnQuestions[cert];
  currentLearnQuestionIndex = 0;
  learnAnswerRevealed = false;

  if (!currentLearnQuestions || currentLearnQuestions.length === 0) {
    document.getElementById('learn-content').innerHTML = `
        <div class="card shadow-sm">
            <div class="card-body">
                <div class="alert alert-warning">Aucune question pratique disponible pour cette certification.</div>
                <button onclick="resetLearnContent()" class="btn btn-primary mt-3">
                    <i class="fas fa-arrow-left me-2"></i>Retour aux questions pratiques
                </button>
            </div>
        </div>
    `;
    return;
  }

  renderLearnQuestion();
}

function renderLearnQuestion() {
  const learnContent = document.getElementById('learn-content');
  const questionData = currentLearnQuestions[currentLearnQuestionIndex];

  if (!questionData) {
    learnContent.innerHTML = `
        <div class="card shadow-sm">
            <div class="card-header bg-primary text-white">
                <h4 class="card-title mb-0">Fin des questions pratiques !</h4>
            </div>
            <div class="card-body text-center">
                <p class="lead">Vous avez terminé toutes les questions pratiques pour cette certification.</p>
                <button onclick="startLearnPracticeFromBeginning()" class="btn btn-success me-2">
                    <i class="fas fa-redo me-2"></i>Recommencer
                </button>
                <button onclick="resetLearnContent()" class="btn btn-primary">
                    <i class="fas fa-home me-2"></i>Retour à la section Learn
                </button>
            </div>
        </div>
    `;
    return;
  }

  let optionsHtml = questionData.options.map((option, index) => `
    <li class="list-group-item list-group-item-action learn-option" data-index="${index}" onclick="checkLearnAnswer(${index})">
      ${String.fromCharCode(65 + index)}. ${option}
    </li>
  `).join('');

  learnContent.innerHTML = `
    <div class="card shadow">
      <div class="card-header bg-info text-white">
        <h4 class="card-title mb-0">Questions Pratiques (${currentLearnQuestionIndex + 1}/${currentLearnQuestions.length})</h4>
      </div>
      <div class="card-body">
        <p class="lead">${questionData.question}</p>
        <ul class="list-group list-group-flush mb-3">
          ${optionsHtml}
        </ul>
        <div id="learn-feedback" class="mt-3" style="display: none;"></div>
      </div>
      <div class="card-footer bg-white d-flex justify-content-between align-items-center">
        <button class="btn btn-outline-secondary" onclick="prevLearnQuestion()" ${currentLearnQuestionIndex === 0 ? 'disabled' : ''}>
          <i class="fas fa-arrow-left me-2"></i>Précédent
        </button>
        <button id="nextLearnQuestionBtn" class="btn btn-info" onclick="nextLearnQuestion()" disabled>
          Suivant <i class="fas fa-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  `;
  learnAnswerRevealed = false;
}

function checkLearnAnswer(selectedIndex) {
  if (learnAnswerRevealed) return; // Prevent multiple clicks

  const questionData = currentLearnQuestions[currentLearnQuestionIndex];
  const correctAnswerIndex = questionData.answer;
  const feedbackDiv = document.getElementById('learn-feedback');
  const options = document.querySelectorAll('.learn-option');
  const nextButton = document.getElementById('nextLearnQuestionBtn');

  options.forEach((option, index) => {
    option.classList.remove('list-group-item-action'); // Remove hover effect once answered
    option.onclick = null; // Disable further clicks
    if (index === correctAnswerIndex) {
      option.classList.add('bg-success', 'text-white');
    } else if (index === selectedIndex) {
      option.classList.add('bg-danger', 'text-white');
    }
  });

  if (selectedIndex === correctAnswerIndex) {
    feedbackDiv.innerHTML = `
      <div class="alert alert-success">
        <h5 class="alert-heading"><i class="fas fa-check-circle me-2"></i>Bonne réponse !</h5>
        <p>${questionData.explanation}</p>
      </div>
    `;
  } else {
    feedbackDiv.innerHTML = `
      <div class="alert alert-danger">
        <h5 class="alert-heading"><i class="fas fa-times-circle me-2"></i>Mauvaise réponse.</h5>
        <p>La bonne réponse était : <strong>${String.fromCharCode(65 + correctAnswerIndex)}. ${questionData.options[correctAnswerIndex]}</strong></p>
        <p>${questionData.explanation}</p>
      </div>
    `;
  }
  feedbackDiv.style.display = 'block';
  nextButton.disabled = false; // Enable next button
  learnAnswerRevealed = true;
}

function nextLearnQuestion() {
  currentLearnQuestionIndex++;
  renderLearnQuestion();
}

function prevLearnQuestion() {
  currentLearnQuestionIndex--;
  renderLearnQuestion();
}

function startLearnPracticeFromBeginning() {
    // This function will restart the practice for the *currently selected* certification
    // To restart from the beginning of a specific cert, you'd need to know which one was selected.
    // For simplicity, we can restart the current practice set.
    // If you want to restart the first available, uncomment the line below:
    // startLearnPractice(Object.keys(learnQuestions)[0]);
    // For now, let's just re-render the current question (effectively restarting the current set if on the last question)
    currentLearnQuestionIndex = 0;
    renderLearnQuestion();
}

// Function to update the badge counts for learn questions
function updateLearnQuestionCounts() {
    document.querySelectorAll('.learn-question-count').forEach(badge => {
        const cert = badge.dataset.cert;
        if (learnQuestions[cert]) {
            badge.textContent = `${learnQuestions[cert].length} questions`;
        } else {
            badge.textContent = `0 questions`; // Or 'N/A'
        }
    });
}

// Ensure initial learn content is loaded and question counts are updated
document.addEventListener('DOMContentLoaded', () => {
    // This will ensure the initial welcome message is shown in the learn tab
    // and the practice selection buttons are visible.
    // No need to call resetLearnContent() explicitly here as the HTML already provides the initial view.
    updateLearnQuestionCounts();
});