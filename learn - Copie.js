const learnContents = {
  'pm-concepts': {
    title: "Concepts de base en gestion de projet",
    content: `
      <h4>Les 5 groupes de processus</h4>
      <ol>
        <li><strong>Initiation :</strong> Définir le projet à haut niveau</li>
        <li><strong>Planification :</strong> Établir le scope, délais, coûts</li>
        <li><strong>Exécution :</strong> Mettre en œuvre le projet</li>
        <li><strong>Surveillance :</strong> Suivre et contrôler</li>
        <li><strong>Clôture :</strong> Finaliser toutes les activités</li>
      </ol>
      
      <h4 class="mt-4">Conseils pratiques</h4>
      <div class="alert alert-info">
        <strong>Astuce :</strong> Utilisez toujours une charte de projet pour formaliser l'accord entre parties prenantes.
      </div>
    `
  },
  'agile-method': {
    title: "Méthodes Agile",
    content: `
      <h4>Principes clés</h4>
      <ul>
        <li>Priorité à la satisfaction client</li>
        <li>Accueillir les changements</li>
        <li>Livraison fréquente de logiciels opérationnels</li>
      </ul>
      
      <h4 class="mt-4">Comparaison Agile vs Traditionnel</h4>
      <table class="table table-bordered">
        <thead>
          <tr><th>Critère</th><th>Agile</th><th>Traditionnel</th></tr>
        </thead>
        <tbody>
          <tr><td>Flexibilité</td><td>Haute</td><td>Faible</td></tr>
          <tr><td>Documentation</td><td>Minimale</td><td>Détaillée</td></tr>
        </tbody>
      </table>
    `
  },
  'risk-management': {
    title: "Gestion des risques",
    content: `
      <h4>Processus de gestion des risques</h4>
      <ol>
        <li>Identification</li>
        <li>Analyse qualitative/quantitative</li>
        <li>Planification des réponses</li>
        <li>Mise en œuvre et suivi</li>
      </ol>
      
      <h4 class="mt-4">Exemple de matrice de risques</h4>
      <img src="https://via.placeholder.com/600x200?text=Matrice+Probabilite%2FImpact" alt="Matrice risque" class="img-fluid">
    `
  }
};

function showLearnContent(topic) {
  const content = learnContents[topic];
  const container = document.getElementById('learn-content');
  
  container.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">${content.title}</h3>
        <div class="card-text">${content.content}</div>
        <div class="mt-3 p-3 bg-light rounded">
          <h5><i class="fas fa-lightbulb"></i> Bon à savoir</h5>
          <p>Ces concepts sont fondamentaux pour toutes les certifications en gestion de projet.</p>
        </div>
      </div>
    </div>
  `;
}