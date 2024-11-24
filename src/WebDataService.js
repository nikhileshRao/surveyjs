const STORAGE_KEY = "surveys";

function getStoredSurveys() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    return [];
  }
  return JSON.parse(stored);
}

function setStoredSurveys(surveys) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(surveys));
}

export const getSurveyItems = (onCallback) => {
  setTimeout(() => {
    const surveys = getStoredSurveys().map(({ id, name, json }) => ({
      id,
      name,
      json,
    }));
    onCallback(surveys);
  }, 500);
};

export const createSurvey = (onCallback) => {
  setTimeout(() => {
    const surveys = getStoredSurveys(); // Always returns a valid array
    const newSurvey = {
      id: Date.now().toString(),
      name: "New Survey",
      json: {},
    };
    surveys.push(newSurvey);
    setStoredSurveys(surveys); // Update localStorage with the new survey list
    onCallback(newSurvey);
  }, 500);
};
