// Service API pour communiquer avec le backend Django
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

class ApiService {
  // Récupérer toutes les solutions
  static async getSolutions() {
    try {
      const response = await fetch(`${API_BASE_URL}/solutions/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des solutions:', error);
      throw error;
    }
  }



  // Créer une nouvelle solution
  static async createSolution(solutionData) {
    try {
      const response = await fetch(`${API_BASE_URL}/solutions/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(solutionData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la création de la solution:', error);
      throw error;
    }
  }

  // Récupérer toutes les idées fausses
  static async getIdeesFausses() {
    try {
      const response = await fetch(`${API_BASE_URL}/idees_fausses/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des idées fausses:', error);
      throw error;
    }
  }

  // Récupérer tous les quiz
  static async getQuiz() {
    try {
      const response = await fetch(`${API_BASE_URL}/quiz/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des quiz:', error);
      throw error;
    }
  }
}

export default ApiService;