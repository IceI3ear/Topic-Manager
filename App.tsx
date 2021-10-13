import React from 'react';
import {RecoilRoot} from 'recoil';
import MainNavigation from './src/routers/main-navigation';
import NavigationService from './src/routers/navigation-services';

const App = () => {
  return (
    <RecoilRoot>
      <MainNavigation
        ref={navigatorRef =>
          NavigationService.setTopLevelNavigator(navigatorRef)
        }
      />
    </RecoilRoot>
  );
};

export default App;
