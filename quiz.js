const quizzes = {
  capm: [
    {
      question: "Que signifie CAPM ?",
      options: ["Certified Associate in Project Management", "Certified Agile Project Manager", "Controlled Agile Planning Model", "Centralized Analytical Performance Metrics"],
      answer: 0,
      explanation: "CAPM signifie 'Certified Associate in Project Management', une certification d'entrée de gamme du PMI pour les professionnels débutants en gestion de projet."
    },
    {
      question: "Combien d'heures de formation sont nécessaires pour le CAPM ?",
      options: ["15", "23", "35", "60"],
      answer: 1,
      explanation: "23 heures de formation en gestion de projet sont requises pour pouvoir passer l'examen CAPM."
    },
    {
      question: "Quel guide est la base du CAPM ?",
      options: ["Agile Practice Guide", "Scrum Guide", "PMBOK Guide", "PRINCE2 Manual"],
      answer: 2,
      explanation: "Le CAPM est basé sur le PMBOK (Project Management Body of Knowledge) Guide du PMI."
    },
    {
      question: "Quelle est la durée de l'examen CAPM ?",
      options: ["2 heures", "3 heures", "4 heures", "2.5 heures"],
      answer: 1,
      explanation: "L'examen CAPM dure 3 heures."
    },
    {
      question: "Combien de questions contient l'examen CAPM ?",
      options: ["100", "150", "200", "75"],
      answer: 1,
      explanation: "L'examen CAPM comporte 150 questions à choix multiples."
    },
    {
      question: "Quel est le principal objectif du CAPM ?",
      options: ["Démontrer une expertise avancée", "Valider les compétences managériales", "Reconnaître une compréhension des fondamentaux de la gestion de projet", "Certifier les chefs de projet expérimentés"],
      answer: 2,
      explanation: "Le CAPM vise à reconnaître la compréhension des principes fondamentaux et de la terminologie de la gestion de projet."
    },
    {
      question: "Lesquels des éléments suivants ne sont PAS un groupe de processus du PMBOK ?",
      options: ["Planification", "Exécution", "Analyse", "Clôture"],
      answer: 2,
      explanation: "Les cinq groupes de processus du PMBOK sont : Initiation, Planification, Exécution, Surveillance et Maîtrise, et Clôture. L'analyse n'est pas un groupe de processus distinct, mais une activité transversale."
    },
    {
      question: "Quelle est la validité de la certification CAPM ?",
      options: ["3 ans", "5 ans", "1 an", "Illimitée"],
      answer: 1,
      explanation: "La certification CAPM est valide pour 5 ans et peut être renouvelée."
    },
    {
      question: "Un 'Deliverable' est :",
      options: ["Un jalon important", "Un résultat ou un produit unique et vérifiable", "Une phase de projet", "Un membre de l'équipe"],
      answer: 1,
      explanation: "Un livrable est un résultat, un produit ou une capacité unique et vérifiable de fournir un service, qui doit être produit pour compléter un processus, une phase ou un projet."
    },
    {
      question: "Lequel des éléments suivants est un document clé de l'initiation de projet ?",
      options: ["Le plan de gestion des risques", "La charte de projet", "Le registre des parties prenantes", "Le calendrier du projet"],
      answer: 1,
      explanation: "La charte de projet (Project Charter) est le document qui autorise formellement un projet ou une phase et documente les exigences initiales qui satisfont les besoins et les attentes des parties prenantes."
    },
    {
      question: "Quel domaine de connaissances gère les ressources humaines du projet ?",
      options: ["Gestion de l'intégration", "Gestion des ressources du projet", "Gestion des communications", "Gestion de l'approvisionnement"],
      answer: 1,
      explanation: "La gestion des ressources du projet (Project Resource Management) couvre les processus pour identifier, acquérir et gérer les ressources nécessaires à la réalisation du projet."
    },
    {
      question: "L'approche 'Top-Down' pour l'estimation des coûts est utilisée quand :",
      options: ["Le projet est détaillé", "Il y a peu d'informations disponibles", "La précision est la priorité", "L'équipe est très expérimentée"],
      answer: 1,
      explanation: "L'estimation 'Top-Down' (ou analogique) est utilisée au début du projet, quand peu d'informations détaillées sont disponibles, en se basant sur des projets similaires."
    },
    {
      question: "Qu'est-ce qu'un WBS ?",
      options: ["Work Breakdown Structure", "Work Budget System", "Workflow Baseline Schedule", "Weighted Business Score"],
      answer: 0,
      explanation: "WBS signifie Work Breakdown Structure, une décomposition hiérarchique orientée livrables du travail que l'équipe de projet doit exécuter."
    },
    {
      question: "Quel processus permet de formaliser l'acceptation des livrables complétés ?",
      options: ["Valider le périmètre", "Maîtriser la qualité", "Clôturer le projet ou la phase", "Exécuter les acquisitions"],
      answer: 0,
      explanation: "Valider le périmètre (Validate Scope) est le processus d'acceptation formalisée des livrables du projet qui ont été achevés."
    },
    {
      question: "Un registre des risques contient :",
      options: ["Les budgets du projet", "Les parties prenantes clés", "Les risques identifiés et leurs attributs", "Les ressources allouées"],
      answer: 2,
      explanation: "Le registre des risques est un document qui contient les résultats de l'analyse des risques et de la planification des réponses aux risques, y compris les risques identifiés, leurs causes, leurs réponses potentielles, etc."
    },
    {
      question: "La 'baseline' du projet est :",
      options: ["Le plan de communication", "Le point de départ approuvé du plan de projet", "L'équipe de projet initiale", "Le budget total dépensé"],
      answer: 1,
      explanation: "La baseline (ligne de base) est la version approuvée d'un plan de gestion de projet, par rapport à laquelle la performance du projet est comparée."
    },
    {
      question: "Quel est le rôle du sponsor de projet ?",
      options: ["Exécuter les tâches", "Gérer les réunions", "Fournir les ressources et le soutien", "Rédiger les rapports détaillés"],
      answer: 2,
      explanation: "Le sponsor de projet est la personne ou le groupe qui fournit les ressources et le soutien au projet et est responsable des objectifs du projet."
    },
    {
      question: "Un 'jallon' (milestone) est :",
      options: ["Une longue tâche", "Un événement significatif dans le projet", "Un type de ressource", "Un problème à résoudre"],
      answer: 1,
      explanation: "Un jalon est un événement significatif dans le calendrier du projet, souvent la fin d'une phase ou la livraison d'un livrable majeur."
    },
    {
      question: "Le 'procurement management' concerne :",
      options: ["La gestion des ressources internes", "L'acquisition de biens et services externes", "La communication interne de l'équipe", "La gestion de la qualité"],
      answer: 1,
      explanation: "Le 'procurement management' (gestion des acquisitions) est le processus d'achat ou d'acquisition de produits, services ou résultats nécessaires en dehors de l'équipe du projet."
    },
    {
      question: "Quel est l'objectif principal de la phase de clôture du projet ?",
      options: ["Démarrer le prochain projet", "Obtenir l'acceptation finale des livrables et libérer les ressources", "Planifier les prochaines étapes", "Identifier de nouveaux risques"],
      answer: 1,
      explanation: "La clôture du projet ou de la phase consiste à finaliser toutes les activités pour clore formellement le projet, la phase ou le contrat."
    }
  ],
  pmp: [
    {
      question: "La triple contrainte en gestion de projet traditionnelle comprend :",
      options: ["Temps, coût, qualité", "Temps, budget, sécurité", "Qualité, risques, communication", "Portée, coût, ressources"],
      answer: 0,
      explanation: "La triple contrainte en gestion de projet traditionnelle comprend le temps (délai), le coût (budget) et la qualité (ou portée)."
    },
    {
      question: "Quel est le pourcentage de questions sur le domaine 'People' dans l'examen PMP ?",
      options: ["42%", "50%", "8%", "35%"],
      answer: 0,
      explanation: "Le domaine 'People' représente 42% des questions de l'examen PMP."
    },
    {
      question: "Qu'est-ce qu'un PMO (Project Management Office) ?",
      options: ["Un logiciel de gestion de projet", "Un groupe ou un département qui définit et maintient les standards de gestion de projet au sein d'une organisation", "Un type de chef de projet", "Un document de planification"],
      answer: 1,
      explanation: "Un PMO est une entité organisationnelle qui supervise, centralise et standardise la gestion des projets au sein d'une organisation."
    },
    {
      question: "Un 'Earned Value (EV)' est :",
      options: ["Le coût réel du travail effectué", "La valeur budgétisée du travail effectué", "La valeur budgétisée du travail planifié", "La différence entre le budget et le coût réel"],
      answer: 1,
      explanation: "L'Earned Value (EV) est la valeur budgétisée du travail réellement effectué à un moment donné."
    },
    {
      question: "La technique de 'Critical Path Method (CPM)' est utilisée pour :",
      options: ["Gérer les risques", "Déterminer la durée la plus courte du projet", "Estimer les coûts", "Planifier les ressources humaines"],
      answer: 1,
      explanation: "La Critical Path Method (CPM) est une technique d'ordonnancement de projet pour déterminer la séquence des activités la plus longue, et donc la durée minimale du projet."
    },
    {
      question: "Quel type d'organisation est caractérisé par des employés rapportant à la fois à un responsable fonctionnel et à un chef de projet ?",
      options: ["Organisation fonctionnelle", "Organisation matricielle", "Organisation par projet", "Organisation hybride"],
      answer: 1,
      explanation: "L'organisation matricielle est celle où les employés ont deux supérieurs, un fonctionnel et un chef de projet."
    },
    {
      question: "Le 'Risk Register' (Registre des Risques) est un document qui contient :",
      options: ["Les leçons apprises", "Les risques identifiés, leurs attributs et les réponses planifiées", "Les informations financières du projet", "Le statut des livrables"],
      answer: 1,
      explanation: "Le Registre des Risques est un document clé de la gestion des risques, listant tous les risques avec leurs détails et les stratégies de réponse."
    },
    {
      question: "Les PDU (Professional Development Units) sont nécessaires pour :",
      options: ["Devenir membre du PMI", "Passer l'examen PMP", "Maintenir sa certification PMP", "Obtenir un diplôme universitaire"],
      answer: 2,
      explanation: "Les PDU sont des unités de développement professionnel requises pour maintenir sa certification PMP tous les trois ans."
    },
    {
      question: "Quelle est la principale différence entre la PMP et la CAPM ?",
      options: ["Le coût de la certification", "Le format de l'examen", "Le niveau d'expérience requis", "Les domaines de connaissances couverts"],
      answer: 2,
      explanation: "La PMP est destinée aux chefs de projet expérimentés, tandis que la CAPM est pour les débutants, nécessitant moins ou pas d'expérience préalable."
    },
    {
      question: "Quand un projet doit-il créer un 'Project Charter' ?",
      options: ["À la fin du projet", "Pendant la phase de planification", "Au début du projet, durant l'initiation", "Après l'approbation du budget"],
      answer: 2,
      explanation: "Le Project Charter est créé au début du projet, lors du processus d'initiation, pour l'autoriser formellement."
    },
    {
      question: "La 'qualité' en PMP est définie comme :",
      options: ["L'absence de défauts", "La conformité aux exigences et l'aptitude à l'emploi", "La satisfaction du client à tout prix", "La livraison rapide des produits"],
      answer: 1,
      explanation: "En PMP, la qualité est définie par la conformité aux exigences (conformance to requirements) et l'aptitude à l'emploi (fitness for use)."
    },
    {
      question: "Quel est l'objectif du processus 'Close Project or Phase' ?",
      options: ["Démarrer le prochain projet", "Finaliser toutes les activités et libérer les ressources", "Planifier les prochaines étapes", "Identifier de nouveaux risques"],
      answer: 1,
      explanation: "Le processus 'Close Project or Phase' vise à finaliser toutes les activités pour clore formellement le projet ou la phase et obtenir l'acceptation formelle."
    },
    {
      question: "L'outil 'Pareto Chart' est utilisé pour :",
      options: ["Représenter la ligne de temps du projet", "Identifier les 20% des causes qui génèrent 80% des problèmes", "Analyser les risques", "Suivre les coûts"],
      answer: 1,
      explanation: "Un diagramme de Pareto est un graphique à barres qui représente les facteurs par ordre de fréquence, aidant à identifier les causes les plus significatives d'un problème (le principe des 80/20)."
    },
    {
      question: "Quelle est la caractéristique principale d'un projet par rapport aux opérations ?",
      options: ["Il est répétitif et continu", "Il est temporaire et produit un résultat unique", "Il ne nécessite pas de planification", "Il gère uniquement les ressources humaines"],
      answer: 1,
      explanation: "Un projet est temporaire et vise à créer un produit, un service ou un résultat unique. Les opérations sont continues et répétitives."
    },
    {
      question: "Qu'est-ce qu'un 'stakeholder' (partie prenante) ?",
      options: ["Un membre de l'équipe de projet", "Une personne ou organisation dont les intérêts peuvent être affectés par un projet", "Un fournisseur externe", "Un client final"],
      answer: 1,
      explanation: "Une partie prenante est une personne, un groupe ou une organisation qui peut affecter, être affecté(e) par, ou se percevoir comme affecté(e) par une décision, une activité ou un résultat de projet."
    },
    {
      question: "L'analyse des valeurs acquises (EVM) combine quel ensemble de variables ?",
      options: ["Planified Value, Actual Cost, Earned Value", "Budget, Scope, Time", "Risks, Issues, Changes", "Resources, Quality, Communications"],
      answer: 0,
      explanation: "L'EVM (Earned Value Management) combine la valeur planifiée (PV), le coût réel (AC) et la valeur acquise (EV) pour évaluer la performance du projet."
    },
    {
      question: "Quel est le rôle du 'Project Manager' ?",
      options: ["Financer le projet", "Gérer l'équipe, le budget, le calendrier et le périmètre pour atteindre les objectifs du projet", "Réaliser toutes les tâches techniques", "Être le client du projet"],
      answer: 1,
      explanation: "Le chef de projet (Project Manager) est la personne désignée par l'organisation pour diriger l'équipe qui est responsable de l'atteinte des objectifs du projet."
    },
    {
      question: "Qu'est-ce qu'un 'Change Request' ?",
      options: ["Une demande d'informations", "Une demande formelle pour modifier un document, un livrable ou une baseline", "Un rapport de statut", "Une suggestion d'amélioration"],
      answer: 1,
      explanation: "Une demande de changement (Change Request) est une proposition formelle de modifier n'importe quel document, livrable ou ligne de base de projet."
    },
    {
      question: "La méthode 'Bottom-Up' pour l'estimation des coûts est :",
      options: ["Moins précise mais rapide", "Plus précise mais prend plus de temps", "Utilisée uniquement en début de projet", "Basée sur l'analogie"],
      answer: 1,
      explanation: "L'estimation 'Bottom-Up' est plus précise car elle estime les coûts de chaque tâche détaillée avant de les agréger, mais elle est plus longue et nécessite plus d'informations."
    },
    {
      question: "Quel document décrit comment le périmètre du projet sera défini, validé et contrôlé ?",
      options: ["Le plan de gestion des risques", "Le plan de gestion des coûts", "Le plan de gestion du périmètre", "Le plan de gestion des communications"],
      answer: 2,
      explanation: "Le plan de gestion du périmètre (Scope Management Plan) est un composant du plan de gestion de projet qui décrit comment le périmètre sera défini, développé, surveillé, maîtrisé et validé."
    }
  ],
  prince2: [
    {
      question: "Combien y a-t-il de principes dans PRINCE2 ?",
      options: ["5", "7", "9", "10"],
      answer: 1,
      explanation: "PRINCE2 est basé sur 7 principes, 7 thèmes et 7 processus."
    },
    {
      question: "Quel organisme certifie PRINCE2 ?",
      options: ["PMI", "Scrum.org", "AXELOS / PeopleCert", "ISACA"],
      answer: 2,
      explanation: "AXELOS est le propriétaire de PRINCE2, et PeopleCert est un de leurs partenaires d'examen accrédités."
    },
    {
      question: "Quel est le niveau d'examen PRINCE2 qui atteste de la capacité à appliquer la méthode ?",
      options: ["Foundation", "Practitioner", "Agile", "Master"],
      answer: 1,
      explanation: "Le niveau Practitioner atteste de la capacité à appliquer la méthode PRINCE2 dans un environnement de projet réel."
    },
    {
      question: "L'un des thèmes de PRINCE2 est :",
      options: ["Gestion des parties prenantes", "Cas d'affaires", "Gestion du temps", "Performance de l'équipe"],
      answer: 1,
      explanation: "Le 'Cas d'affaires' (Business Case) est l'un des 7 thèmes de PRINCE2, justifiant la raison d'être du projet."
    },
    {
      question: "Qu'est-ce que la 'gestion par exception' dans PRINCE2 ?",
      options: ["Gérer les exceptions du client", "Gérer le projet uniquement quand il y a des problèmes", "Définir des tolérances pour la gestion des écarts", "Ignorer les problèmes mineurs"],
      answer: 2,
      explanation: "La gestion par exception permet de déléguer l'autorité de gestion en fixant des tolérances claires, et en n'intervenant que lorsque ces tolérances sont dépassées."
    },
    {
      question: "Combien de processus y a-t-il dans PRINCE2 ?",
      options: ["5", "7", "9", "12"],
      answer: 1,
      explanation: "PRINCE2 comprend 7 processus : Démarrer un projet, Diriger un projet, Initier un projet, Contrôler une phase, Gérer la livraison des produits, Gérer les limites de phase, Clôturer un projet."
    },
    {
      question: "Quel document PRINCE2 fournit la justification continue du projet ?",
      options: ["Plan de projet", "Registre des risques", "Cas d'affaires", "Journal de bord"],
      answer: 2,
      explanation: "Le Cas d'affaires (Business Case) fournit la justification continue du projet, confirmant qu'il reste désirable, réalisable et viable."
    },
    {
      question: "La validité de la certification PRINCE2 Practitioner est de :",
      options: ["1 an", "3 ans", "5 ans", "Illimitée"],
      answer: 1,
      explanation: "La certification PRINCE2 Practitioner est valide pendant 3 ans."
    },
    {
      question: "Quel est le but de la phase 'Contrôler une phase' (Controlling a Stage) ?",
      options: ["Démarrer une nouvelle phase", "Suivre les progrès, gérer les problèmes et les risques, prendre des mesures correctives", "Clôturer le projet", "Planifier la phase suivante"],
      answer: 1,
      explanation: "Ce processus a pour but de suivre les progrès réalisés dans la phase, d'identifier les problèmes et de prendre des mesures correctives."
    },
    {
      question: "Le principe 'Focalisation produit' signifie :",
      options: ["Se concentrer uniquement sur les besoins du client", "Définir les produits avant de planifier les activités", "Privilégier la vitesse de livraison", "Minimiser la documentation"],
      answer: 1,
      explanation: "La 'Focalisation produit' implique de définir clairement ce que le projet doit produire avant de déterminer comment il sera réalisé."
    },
    {
      question: "Quel est le rôle du 'Project Board' dans PRINCE2 ?",
      options: ["Gérer les tâches quotidiennes", "Fournir des conseils techniques", "Superviser le projet et prendre les décisions clés", "Réaliser l'audit qualité"],
      answer: 2,
      explanation: "Le Project Board est responsable de la supervision générale et de la direction du projet, prenant les décisions clés et approuvant les plans."
    },
    {
      question: "Un 'Work Package' est un :",
      options: ["Groupe de travail", "Ensemble d'activités à réaliser par une équipe de livraison", "Document de synthèse du projet", "Outil de planification des risques"],
      answer: 1,
      explanation: "Un Work Package est un ensemble d'informations concernant un ou plusieurs produits spécialisés, rassemblé dans un paquet, par un chef de phase ou le chef de projet."
    },
    {
      question: "Quelle est la principale différence entre PRINCE2 et le PMBOK (PMI) ?",
      options: ["PRINCE2 est plus axé sur les rôles et processus, PMBOK sur les connaissances", "PMBOK est une méthodologie, PRINCE2 un guide", "PRINCE2 est propriétaire, PMBOK est open source", "Il n'y a pas de différences significatives"],
      answer: 0,
      explanation: "PRINCE2 est une méthodologie prescriptive axée sur les processus et les rôles, tandis que le PMBOK est un guide de connaissances non prescriptif."
    },
    {
      question: "Le 'Produit spécialisé' dans PRINCE2 est :",
      options: ["Un livrable technique", "Le produit unique qui découle du projet", "Un rapport de progression", "Une ressource humaine clé"],
      answer: 0,
      explanation: "Un Produit spécialisé est un composant de livrable technique créé par les équipes de livraison, et qui s'intègre dans les Produits finaux du projet."
    },
    {
      question: "Quel document est utilisé pour enregistrer les risques dans PRINCE2 ?",
      options: ["Journal de bord", "Registre des risques", "Rapport d'exception", "Registre des problèmes"],
      answer: 1,
      explanation: "Le registre des risques (Risk Register) est utilisé pour enregistrer et suivre les risques du projet."
    },
    {
      question: "Le principe 'Apprendre des expériences' (Learn from Experience) implique :",
      options: ["Ignorer les échecs passés", "Maintenir un journal des leçons apprises et les appliquer", "Se fier uniquement aux nouvelles méthodes", "Ne jamais documenter les erreurs"],
      answer: 1,
      explanation: "Ce principe souligne l'importance d'apprendre des projets passés, à la fois des succès et des échecs, et d'intégrer ces leçons dans les projets futurs."
    },
    {
      question: "Quel rôle est responsable de la supervision quotidienne d'une phase dans PRINCE2 ?",
      options: ["Executive", "Senior User", "Project Manager", "Team Manager"],
      answer: 3,
      explanation: "Le Team Manager est responsable de la gestion quotidienne de la création des produits livrables d'une phase."
    },
    {
      question: "Le 'Quality Theme' dans PRINCE2 se concentre sur :",
      options: ["La qualité des livrables finaux uniquement", "La planification, le contrôle et l'assurance qualité des produits du projet", "La qualité de l'équipe de projet", "Le respect des délais de livraison"],
      answer: 1,
      explanation: "Le thème Qualité (Quality Theme) traite de la manière dont les produits du projet seront livrés pour satisfaire les exigences de qualité."
    },
    {
      question: "Qu'est-ce qu'un 'End Stage Assessment' (Bilan de fin de phase) ?",
      options: ["Une réunion de l'équipe", "Une revue formelle par le Project Board à la fin d'une phase de management", "Un audit financier", "Une évaluation des performances de l'équipe"],
      answer: 1,
      explanation: "Un End Stage Assessment est une revue par le Project Board pour évaluer la fin d'une phase et décider de passer à la suivante."
    },
    {
      question: "L'objectif principal du processus 'Démarrer un projet' (Starting up a Project) est de :",
      options: ["Planifier le projet en détail", "S'assurer qu'il y a une justification valable pour démarrer et qu'il est faisable", "Exécuter les tâches initiales", "Recruter l'équipe de projet"],
      answer: 1,
      explanation: "Ce processus vise à s'assurer qu'il y a une justification valable pour lancer le projet et qu'il peut être démarré de manière viable."
    }
  ],
  scrum: [
    {
      question: "Qu'est-ce qu'un 'Sprint' dans Scrum ?",
      options: ["Une longue phase de développement", "Une période de temps fixe pendant laquelle un incrément est créé", "Une réunion quotidienne", "Le travail à faire par le Product Owner"],
      answer: 1,
      explanation: "Un Sprint est une itération à durée fixe (typiquement 1 à 4 semaines) pendant laquelle l'équipe Scrum construit un incrément du produit."
    },
    {
      question: "Qui est responsable de maximiser la valeur du produit résultant du travail de l'équipe de développement ?",
      options: ["Scrum Master", "Développeurs", "Product Owner", "Chef de projet"],
      answer: 2,
      explanation: "Le Product Owner est responsable de la maximisation de la valeur du produit."
    },
    {
      question: "Combien de rôles y a-t-il dans une équipe Scrum ?",
      options: ["2", "3", "4", "5"],
      answer: 1,
      explanation: "L'équipe Scrum se compose de trois rôles : le Product Owner, le Scrum Master et les Développeurs (ou Équipe de Développement)."
    },
    {
      question: "Quel événement Scrum a pour objectif d'inspecter l'incrément et d'adapter le Product Backlog si nécessaire ?",
      options: ["Daily Scrum", "Sprint Planning", "Sprint Review", "Sprint Retrospective"],
      answer: 2,
      explanation: "Le Sprint Review (Revue de Sprint) est un événement où l'équipe et les parties prenantes inspectent l'incrément et ajustent le Product Backlog."
    },
    {
      question: "Qu'est-ce qu'un 'Product Backlog' ?",
      options: ["La liste des tâches terminées", "Une liste ordonnée des fonctionnalités, corrections et améliorations pour le produit", "Le calendrier des réunions", "Un rapport de bug"],
      answer: 1,
      explanation: "Le Product Backlog est une liste ordonnée et priorisée de tout ce qui pourrait être nécessaire au produit."
    },
    {
      question: "Quel rôle aide l'équipe Scrum à adhérer aux valeurs et aux pratiques de Scrum ?",
      options: ["Product Owner", "Développeurs", "Scrum Master", "Manager"],
      answer: 2,
      explanation: "Le Scrum Master est le facilitateur qui s'assure que Scrum est bien compris et appliqué par l'équipe et l'organisation."
    },
    {
      question: "La durée d'un Daily Scrum ne doit pas dépasser :",
      options: ["15 minutes", "30 minutes", "1 heure", "45 minutes"],
      answer: 0,
      explanation: "Le Daily Scrum est une réunion de 15 minutes pour l'équipe de développement afin de synchroniser les activités et de créer un plan pour les prochaines 24 heures."
    },
    {
      question: "Quel est l'artefact principal qui contient le travail sélectionné pour le Sprint en cours ?",
      options: ["Product Backlog", "Sprint Backlog", "Incrément", "Burndown Chart"],
      answer: 1,
      explanation: "Le Sprint Backlog est la liste des éléments du Product Backlog sélectionnés pour le Sprint, ainsi que le plan pour les livrer."
    },
    {
      question: "Les trois piliers de l'empirisme dans Scrum sont :",
      options: ["Transparence, Inspection, Adaptabilité", "Planification, Exécution, Contrôle", "Rôles, Événements, Artefacts", "Rapidité, Flexibilité, Qualité"],
      answer: 0,
      explanation: "L'empirisme dans Scrum repose sur la Transparence, l'Inspection et l'Adaptabilité."
    },
    {
      question: "Qui est le seul responsable de la gestion du Product Backlog ?",
      options: ["L'équipe de développement", "Le Scrum Master", "Le Product Owner", "Le Chef de projet"],
      answer: 2,
      explanation: "Le Product Owner est le seul responsable de la gestion du Product Backlog, y compris sa priorisation et son contenu."
    },
    {
      question: "Quel est le but de la 'Sprint Retrospective' ?",
      options: ["Démontrer le travail accompli", "Planifier le prochain Sprint", "Inspecter la façon dont le dernier Sprint s'est déroulé et identifier les améliorations", "Discuter des problèmes techniques"],
      answer: 2,
      explanation: "La Sprint Retrospective est une opportunité pour l'équipe Scrum de s'inspecter et de créer un plan d'améliorations pour le prochain Sprint."
    },
    {
      question: "La définition de 'Done' (terminé) est créée par :",
      options: ["Le Product Owner", "Le Scrum Master", "L'équipe de développement", "Les parties prenantes"],
      answer: 2,
      explanation: "La définition de 'Done' est créée par l'équipe de développement pour assurer une compréhension commune de ce que signifie la complétion du travail."
    },
    {
      question: "Un 'Incrément' dans Scrum est :",
      options: ["Un nouvel élément du Product Backlog", "Une somme de toutes les tâches non terminées", "Un morceau de produit potentiellement livrable", "Un rapport de progression"],
      answer: 2,
      explanation: "Un Incrément est la somme de tous les éléments du Sprint Backlog achevés pendant un Sprint et des incréments des Sprints précédents, et est potentiellement livrable."
    },
    {
      question: "Quel principe Agile est le plus lié à l'adaptabilité de Scrum ?",
      options: ["Les individus et leurs interactions plus que les processus et les outils", "La collaboration avec les clients plus que la négociation contractuelle", "L'accueil favorable au changement plus que le suivi d'un plan", "Les logiciels opérationnels plus qu'une documentation exhaustive"],
      answer: 2,
      explanation: "Le principe 'Accueillir favorablement le changement, même tard dans le développement. Les processus Agiles exploitent le changement pour l'avantage compétitif du client' est directement lié à l'adaptabilité."
    },
    {
      question: "Quelle est la responsabilité principale du Scrum Master vis-à-vis du Product Owner ?",
      options: ["Écrire les User Stories", "S'assurer que le Product Owner connaît les techniques de maximisation de la valeur", "Gérer le budget du projet", "Diriger les réunions de planification"],
      answer: 1,
      explanation: "Le Scrum Master sert le Product Owner en aidant à trouver des techniques pour gérer efficacement le Product Backlog."
    },
    {
      question: "Quel est le rôle du 'Burndown Chart' dans Scrum ?",
      options: ["Montrer les dépenses du projet", "Visualiser le travail restant par rapport au temps dans un Sprint", "Suivre la progression de l'équipe au quotidien", "Mesurer la satisfaction client"],
      answer: 1,
      explanation: "Un Burndown Chart est un graphique qui affiche la quantité de travail restant par rapport au temps disponible dans un Sprint, ou sur un projet entier."
    },
    {
      question: "Un 'User Story' est :",
      options: ["Un bug à corriger", "Une description simple et concise d'une fonctionnalité du point de vue de l'utilisateur", "Un rapport de performance", "Un jalon du projet"],
      answer: 1,
      explanation: "Une User Story est une brève description d'une fonctionnalité du point de vue de l'utilisateur final ou d'un stakeholder, décrivant ce qu'il veut et pourquoi."
    },
    {
      question: "Qui participe au 'Sprint Planning' ?",
      options: ["Product Owner et Scrum Master uniquement", "Product Owner, Scrum Master et l'équipe de développement", "L'équipe de développement uniquement", "Toutes les parties prenantes"],
      answer: 1,
      explanation: "Le Sprint Planning est collaboratif, avec la participation du Product Owner, du Scrum Master et de l'équipe de développement."
    },
    {
      question: "Combien de Sprints forment généralement un 'Release' (version) ?",
      options: ["1", "2-3", "Plusieurs Sprints", "Toujours 4"],
      answer: 2,
      explanation: "Un Release (version) est une collection d'Incréments de plusieurs Sprints qui sont livrés aux utilisateurs finaux."
    },
    {
      question: "Quelle est la principale source de feedback et d'inspection pour l'équipe Scrum à la fin d'un Sprint ?",
      options: ["Daily Scrum", "Sprint Review et Sprint Retrospective", "Sprint Planning", "Réunion du Product Owner"],
      answer: 1,
      explanation: "Le Sprint Review permet d'inspecter l'incrément et d'obtenir des retours, tandis que la Sprint Retrospective permet d'inspecter le processus et d'identifier les améliorations pour l'équipe elle-même."
    }
  ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let userAnswers = [];

function startQuiz(cert) {
  currentQuiz = quizzes[cert];
  currentQuestionIndex = 0;
  userAnswers = [];

  if (!currentQuiz || currentQuiz.length === 0) {
    alert("Aucun quiz disponible pour cette certification.");
    return;
  }

  renderQuestion();
}

function renderQuestion() {
  const quizContainer = document.getElementById('quiz-container');
  const question = currentQuiz[currentQuestionIndex];

  if (!question) {
    showResults();
    return;
  }

  let optionsHtml = question.options.map((option, index) => `
    <li class="list-group-item list-group-item-action" onclick="selectAnswer(${index})">
      ${String.fromCharCode(65 + index)}. ${option}
    </li>
  `).join('');

  quizContainer.innerHTML = `
    <div class="card shadow">
      <div class="card-header bg-primary text-white">
        <h4 class="card-title mb-0">Question ${currentQuestionIndex + 1}/${currentQuiz.length}</h4>
      </div>
      <div class="card-body">
        <p class="lead">${question.question}</p>
        <ul class="list-group list-group-flush">
          ${optionsHtml}
        </ul>
      </div>
      <div class="card-footer bg-white d-flex justify-content-between align-items-center">
        <button class="btn btn-outline-secondary" onclick="prevQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>
          <i class="fas fa-arrow-left me-2"></i>Précédent
        </button>
        <button class="btn btn-primary" onclick="nextQuestion()">
          ${currentQuestionIndex === currentQuiz.length - 1 ? 'Terminer le Quiz' : 'Suivant'} <i class="fas fa-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  `;
}

function selectAnswer(answerIndex) {
  userAnswers[currentQuestionIndex] = answerIndex;
  // Optional: Add visual feedback to selected option
  const options = document.querySelectorAll('#quiz-container .list-group-item');
  options.forEach((opt, index) => {
    if (index === answerIndex) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });
}

function nextQuestion() {
  if (userAnswers[currentQuestionIndex] === undefined) {
    alert("Veuillez sélectionner une réponse avant de passer à la question suivante.");
    return;
  }
  currentQuestionIndex++;
  renderQuestion();
}

function prevQuestion() {
  currentQuestionIndex--;
  renderQuestion();
}

function showResults() {
  let score = 0;
  let reviewHTML = `
    <div class="card shadow">
      <div class="card-header bg-success text-white text-center">
        <h3 class="card-title mb-0"><i class="fas fa-check-circle me-2"></i>Résultats du Quiz</h3>
      </div>
      <div class="card-body">
        <h4 class="text-center mb-4">Votre Score : <span class="text-success">${score} / ${currentQuiz.length}</span></h4>
        <div class="list-group mb-4">
  `;

  currentQuiz.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const correctAnswer = question.answer;
    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
      score++;
    }

    reviewHTML += `
      <div class="card mb-3 ${isCorrect ? 'border-success' : 'border-danger'}">
        <div class="card-header bg-light">
          <h5 class="card-title mb-0">Question ${index + 1}</h5>
        </div>
        <div class="card-body">
          <p class="fw-bold">${question.question}</p>
          <div class="options-review">
            ${question.options.map((option, i) => `
              <div class="p-2 mb-2 rounded 
                ${i === correctAnswer ? 'bg-success text-white' : ''}
                ${i === userAnswer && !isCorrect ? 'bg-danger text-white' : ''}
              ">
                ${String.fromCharCode(65 + i)}. ${option}
                ${i === correctAnswer ? ' <i class="fas fa-check-circle"></i>' : ''}
                ${i === userAnswer && !isCorrect ? ' <i class="fas fa-times-circle"></i>' : ''}
              </div>
            `).join('')}
          </div>
          ${question.explanation ? `
            <div class="alert alert-info mt-3">
              <i class="fas fa-info-circle me-2"></i>
              ${question.explanation}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  });

  // Update score in the HTML after calculating
  reviewHTML = reviewHTML.replace(`<span class="text-success">${score} / ${currentQuiz.length}</span>`, `<span class="text-success">${score} / ${currentQuiz.length}</span>`);

  reviewHTML += `
      </div>
      <div class="card-footer bg-white text-center">
        <button onclick="renderQuizSelection(true)" class="btn btn-primary">
          <i class="fas fa-home me-2"></i>Retour à l'accueil
        </button>
      </div>
    </div>
  `;

  document.getElementById('quiz-container').innerHTML = reviewHTML;
  // Manually update the score as it's part of the generated HTML
  document.querySelector('#quiz-container .card-body h4').innerHTML = `Votre Score : <span class="text-success">${score} / ${currentQuiz.length}</span>`;
}


// Function to render the initial quiz selection screen (from index.html quiz tab)
function renderQuizSelection(reset = false) {
  if (reset) {
    const quizContainerDiv = document.getElementById('quiz-container');
    quizContainerDiv.innerHTML = `
      <div class="card shadow">
        <div class="card-header bg-white">
          <h3 class="card-title mb-0"><i class="fas fa-lightbulb me-2 text-primary"></i>Guide du Quiz</h3>
        </div>
        <div class="card-body">
          <div class="alert alert-info">
            <h5><i class="fas fa-info-circle me-2"></i>Comment utiliser les quiz ?</h5>
            <ul class="mb-0">
              <li>Sélectionnez une certification dans la colonne de gauche</li>
              <li>Chaque quiz contient des questions aléatoires</li>
              <li>Temps limité: environ 30 secondes par question</li>
              <li>Obtenez des explications détaillées après chaque réponse</li>
            </ul>
          </div>

          <div class="row mt-4">
            <div class="col-md-6 mb-3">
              <div class="card h-100 border-start border-3 border-primary">
                <div class="card-body">
                  <h5><i class="fas fa-tachometer-alt text-primary me-2"></i>Mode Pratique</h5>
                  <p class="small text-muted">Entraînez-vous sans limite de temps et avec des explications détaillées.</p>
                  <button class="btn btn-sm btn-outline-primary">Activer</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="card h-100 border-start border-3 border-danger">
                <div class="card-body">
                  <h5><i class="fas fa-stopwatch text-danger me-2"></i>Mode Examen</h5>
                  <p class="small text-muted">Simulez les conditions réelles d'examen avec chronomètre.</p>
                  <button class="btn btn-sm btn-outline-danger">Activer</button>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h5><i class="fas fa-medal text-warning me-2"></i>Classement</h5>
            <div class="table-responsive">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Quiz</th>
                    <th>Score</th>
                    <th>Temps</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CAPM</td>
                    <td>85%</td>
                    <td>12:30</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>PMP</td>
                    <td>72%</td>
                    <td>18:45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// Initialiser la sélection de quiz au chargement, si l'onglet quiz est actif
document.addEventListener('DOMContentLoaded', () => {
    // Check if the quiz tab is the active one when the page loads, and render the selection.
    // This assumes the 'Guide' tab is active by default. The quiz selection content will only be generated
    // when the user clicks on the quiz tab.
    // However, the initial HTML of the quiz-container already contains the selection guide.
    // So, this function is primarily called after a quiz finishes to return to the selection.
});

// Update the question count badges dynamically when the page loads
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.list-group-item button[onclick="startQuiz(\'capm\')"] .badge').textContent = `${quizzes.capm.length} questions`;
  document.querySelector('.list-group-item button[onclick="startQuiz(\'pmp\')"] .badge').textContent = `${quizzes.pmp.length} questions`;
  document.querySelector('.list-group-item button[onclick="startQuiz(\'prince2\')"] .badge').textContent = `${quizzes.prince2.length} questions`;
  document.querySelector('.list-group-item button[onclick="startQuiz(\'scrum\')"] .badge').textContent = `${quizzes.scrum.length} questions`;

  const totalQuestions = Object.keys(quizzes).reduce((acc, key) => acc + quizzes[key].length, 0);
  document.querySelector('.card-footer .text-primary').textContent = `${totalQuestions} questions disponibles`;
});