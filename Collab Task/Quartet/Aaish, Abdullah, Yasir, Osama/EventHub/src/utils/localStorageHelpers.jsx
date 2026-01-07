export const getEvents = () => {
    try {
      const events = localStorage.getItem('eventhub_events');
      return events ? JSON.parse(events) : [];
    } catch (error) {
      console.error('Error loading events from localStorage:', error);
      return [];
    }
  };
  
  export const saveEvents = (events) => {
    try {
      localStorage.setItem('eventhub_events', JSON.stringify(events));
    } catch (error) {
      console.error('Error saving events to localStorage:', error);
    }
  };
  
  export const clearEvents = () => {
    try {
      localStorage.removeItem('eventhub_events');
    } catch (error) {
      console.error('Error clearing events from localStorage:', error);
    }
  };
  

  export const getThemePreference = () => {
    try {
      const savedTheme = localStorage.getItem('eventhub_theme');
      if (savedTheme !== null) {
        return JSON.parse(savedTheme);
      }
      
     
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (error) {
      console.error('Error loading theme preference:', error);
      return false;
    }
  };
  
  export const saveThemePreference = (isDarkMode) => {
    try {
      localStorage.setItem('eventhub_theme', JSON.stringify(isDarkMode));
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  };

  export const getUserData = () => {
    try {
      const userData = localStorage.getItem('eventhub_user');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error loading user data:', error);
      return null;
    }
  };
  
  export const saveUserData = (userData) => {
    try {
      localStorage.setItem('eventhub_user', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };
  
 
  export const getSettings = () => {
    try {
      const settings = localStorage.getItem('eventhub_settings');
      return settings ? JSON.parse(settings) : {
        notifications: true,
        emailUpdates: true,
        timeFormat: '12h',
        dateFormat: 'MM/DD/YYYY'
      };
    } catch (error) {
      console.error('Error loading settings:', error);
      return {
        notifications: true,
        emailUpdates: true,
        timeFormat: '12h',
        dateFormat: 'MM/DD/YYYY'
      };
    }
  };
  
  export const saveSettings = (settings) => {
    try {
      localStorage.setItem('eventhub_settings', JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };
  

  export const backupData = () => {
    try {
      const data = {
        events: getEvents(),
        theme: getThemePreference(),
        user: getUserData(),
        settings: getSettings(),
        timestamp: new Date().toISOString()
      };
      
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `eventhub-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error('Error creating backup:', error);
      return false;
    }
  };
  
  export const restoreData = (jsonData) => {
    try {
      const data = JSON.parse(jsonData);
      
      if (data.events) saveEvents(data.events);
      if (data.theme !== undefined) saveThemePreference(data.theme);
      if (data.user) saveUserData(data.user);
      if (data.settings) saveSettings(data.settings);
      
      return true;
    } catch (error) {
      console.error('Error restoring data:', error);
      return false;
    }
  };
  
  
  export const clearAllData = () => {
    try {
      localStorage.removeItem('eventhub_events');
      localStorage.removeItem('eventhub_theme');
      localStorage.removeItem('eventhub_user');
      localStorage.removeItem('eventhub_settings');
      return true;
    } catch (error) {
      console.error('Error clearing all data:', error);
      return false;
    }
  };