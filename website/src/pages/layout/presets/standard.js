import React from 'react';
import { WindowProvider } from '@mui-treasury/layout';

import BrowserIFrame from 'components/layout/BrowserIFrame';
import SourceFileDrawer from 'containers/SourceFileDrawer';
import StandardLayout from 'docs/layout/presets/standard';

const StandardLayoutDemo = () => {
  return (
    <>
      <BrowserIFrame>
        {({ window, container }) => {
          return (
            <WindowProvider value={{ iWindow: window, iBody: container }}>
              <StandardLayout />
            </WindowProvider>
          );
        }}
      </BrowserIFrame>
      <SourceFileDrawer
        source={StandardLayout.raw_js}
        metadata={StandardLayout.metadata}
      />
    </>
  );
};

export default StandardLayoutDemo;
