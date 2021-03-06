import React from 'react';
import { Location } from '@reach/router';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import GitHubButton from 'react-github-btn';
import Box from '@material-ui/core/Box';
// import InputBase from '@material-ui/core/InputBase';
import { HorzMenuList } from '@mui-treasury/components';
// import { useContrastInputBaseStyles } from '@mui-treasury/styles/inputBase';
import MENUS, { PKG } from 'constants/menus';

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const { logo } = data;
  // const inputBaseStyles = useContrastInputBaseStyles();
  return (
    <Location>
      {({ location }) => (
        <Box
          display={'flex'}
          alignItems={'center'}
          alignSelf={'stretch'}
          width={'100%'}
        >
          <Box
            mr={4}
            component={Link}
            to={'/'}
            borderBottom={'none !important'}
            css={{
              '& img': {
                margin: 0,
              },
            }}
            aria-label={'go to home page'}
          >
            <Image fixed={logo.childImageSharp.fixed} />
          </Box>
          <HorzMenuList
            Link={Link}
            selectedKey={key => location.pathname.includes(key)}
            menus={MENUS[PKG.nav]}
          />
          <Box ml={'auto'} mr={2}>
            {/* <InputBase classes={inputBaseStyles} placeholder={'search...'} /> */}
          </Box>
          <Box lineHeight={0}>
            <GitHubButton
              href="https://github.com/siriwatknp/mui-treasury"
              data-size="large"
              data-show-count="true"
              aria-label="Star siriwatknp/mui-treasury on GitHub"
            >
              Star
            </GitHubButton>
          </Box>
        </Box>
      )}
    </Location>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
