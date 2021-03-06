import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { chromeTabsStylesHook } from '@mui-treasury/styles';
import Prism from 'components/molecules/Prism';

const ModuleProjector = ({ demoSource, files }) => {
  const [sourceDisplayed, setSourceDisplayed] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    if (!files.length) {
      setTabIndex(0);
    }
  }, [files]);
  const chromeTabsStyles = chromeTabsStylesHook.useTabs();
  const chromeTabItemStyles = chromeTabsStylesHook.useTabItem();
  const file = files[tabIndex];
  return (
    <>
      <Box py={2} px={3}>
        <FormControlLabel
          value="start"
          control={
            <Switch
              color="primary"
              value={sourceDisplayed}
              onChange={e => {
                setSourceDisplayed(e.target.checked);
                setTabIndex(0);
              }}
            />
          }
          label="Source Code"
          labelPlacement="end"
        />
      </Box>
      {sourceDisplayed ? (
        <>
          {files.length > 0 && (
            <Tabs
              variant={'scrollable'}
              scrollButtons="auto"
              value={tabIndex > files.length - 1 ? 0 : tabIndex}
              classes={chromeTabsStyles}
              onChange={(e, index) => setTabIndex(index)}
            >
              {files.map(({ name }) => (
                <Tab key={name} label={name} classes={chromeTabItemStyles} />
              ))}
            </Tabs>
          )}
          {file ? (
            <Prism code={file.source} fileName={file.name} />
          ) : (
            <Box bgcolor={'rgb(40, 44, 52)'} color={'#777777'} p={2}>
              {'// No Source code'}
            </Box>
          )}
        </>
      ) : (
        demoSource
      )}
    </>
  );
};

ModuleProjector.propTypes = {
  demoSource: PropTypes.node,
  files: PropTypes.arrayOf(PropTypes.shape({})),
};
ModuleProjector.defaultProps = {
  demoSource: null,
  files: [],
};

export default ModuleProjector;
