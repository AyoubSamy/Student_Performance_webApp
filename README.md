# 🎓 Students Performance APP  

## 📖 Description  
Ce projet vise à analyser et prédire la performance des étudiants aux examens en utilisant l'apprentissage automatique. L'application permet d'évaluer l'impact des antécédents familiaux et des autres facteurs sur les notes des étudiants et fournit un outil analytique pour aider les éducateurs à mieux comprendre les déterminants de la réussite académique.  

## 🚀 Fonctionnalités  
- 📊 **Prédiction des notes finales** des étudiants.  
- 🔍 **Analyse des facteurs influençant la réussite scolaire**.  
- 📈 **Visualisation des données** et des corrélations.  
- ⚙️ **Déploiement d’un modèle de machine learning**.  

## 🛠️ Technologies Utilisées  
- **Backend**: Python, Flask  
- **Machine Learning**: Scikit-learn, Pandas, NumPy  
- **Frontend**: React.js, Tailwind CSS  
  

## 📂 Structure du Projet  
/students-performance │── backend/ # Code du backend (Flask API) │── frontend/ # Code du frontend (React) │── data/ # Fichiers de données (CSV, JSON) │── models/ # Modèles de machine learning │── notebooks/ # Analyses et expérimentations en Jupyter Notebook │── README.md # Documentation du projet


## 🏗️ Installation et Exécution  
### 🖥️ Prérequis  
- Python 3.8+  
- Node.js  
- PostgreSQL  
- Docker (optionnel pour le déploiement)  

### 💻 Installation  
1. **Cloner le dépôt**  
   ```sh
   git clone https://github.com/votre-profil/students-performance.git
   cd students-performance
Installation des dépendances

Backend
sh
Copy
Edit
cd backend
pip install -r requirements.txt
python app.py
Frontend
sh
Copy
Edit
cd frontend
npm install
npm start
Accéder à l'application

Frontend : http://localhost:3000
API Backend : http://localhost:5000
🏆 Modèles de Machine Learning
Nous avons testé plusieurs algorithmes de machine learning pour la prédiction des performances des étudiants :

Régression linéaire
Gradient Boosting
Random Forest
K-Nearest Neighbors (KNN)
Régression Logistique
Le Gradient Boosting a donné les meilleures performances avec un RMSE de 0.425 et un R² de 0.817.

📊 Résultats et Visualisations
Heatmap des corrélations entre les notes et les facteurs influents.
Courbes ROC pour l’évaluation des modèles.
Comparaison des algorithmes selon RMSE et R².
🚀 Déploiement
L’application peut être déployée sur un serveur en utilisant Docker et AWS.

sh
Copy
Edit
docker-compose up --build
📜 Auteurs
👨‍💻 Ayoub Samy & Salah Eddine Chaari
Encadré par : Pr. Younes Regragui

📝 Licence
Ce projet est sous licence MIT.
