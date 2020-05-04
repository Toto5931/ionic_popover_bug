import React, { useState } from 'react';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPopover
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { mailOutline, ellipsisVerticalOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [showPopover, setShowPopover] = useState<{ open: boolean, event: Event | undefined }>({
    open: false,
    event: undefined,
  });

  return (
    <IonApp>
       <IonReactRouter> 
        <IonTabs>

          <IonRouterOutlet>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">

            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={mailOutline} />
            </IonTabButton>

            <IonTabButton onClick={(e) => {setShowPopover({ open: true, event: e.nativeEvent });}} >
              <IonIcon icon={ellipsisVerticalOutline} />
            </IonTabButton>

          </IonTabBar>

        </IonTabs>

        <IonPopover
          isOpen={showPopover.open}
          event={showPopover.event}
          onDidDismiss={() => setShowPopover({ open: false, event: undefined })}
        >
          Text
        </IonPopover>

      </IonReactRouter>
    </IonApp>
  );
};

export default App;
