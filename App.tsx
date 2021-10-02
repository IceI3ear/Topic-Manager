import React from 'react';
import MainNavigation from './src/routers/main-navigation';
import NavigationService from './src/routers/navigation-services';

const App = () => {
  return (
    <MainNavigation
      ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
    />
  );
};

export default App;
