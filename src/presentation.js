// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Layout,
  Fill,
  Text,
} from 'spectacle';
import Particles from 'react-particles-js';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import imageSrc from './assets/222.jpg'
import logo from './assets/logo.png'
import github from './assets/github.png'
import twitter from './assets/twitter.png'

import fb from './assets/fb.png'
import one from './assets/11.png'
import two from './assets/21.png'
import './app.css'
// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#e00083',
    tertiary: '#171E26',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} className="name">
            GraphQL
          </Heading>
        </Slide>
        <Slide>
          <Layout>
            <Fill style={{ position: 'relative', width: 600 }}>
              <Heading
                size={6}
                margin={10}>
                Priyanka Kore
              </Heading>
              <p style={{ color: '#1F2022' }}>Senior Software Developer </p>
              <img src={logo} href="img.ly" style={{ paddingRight: '3px' }} width="120" alt="" />
              <p className="underline" style={{ width: '50%', left: '25%' }}></p>
              <p style={{ color: '#1F2022' }}>@piyukore06</p>
              <span>
                <img src={twitter} href="https://twitter.com/piyukore06" target="_blank" width="40" alt="" />
                <img src={github} href="https://github.com/piyukore06" target="_blank" width="40" alt="" />
              </span>
              <div className="border-all"></div>
            </Fill>
            <Fill>
              <img src={imageSrc} alt="Priyanka" width="200" style={{ transform: 'rotate(45deg)' }} />
            </Fill>
          </Layout>

        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6}>
            So, I'm building this <span className="underline">application</span>
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <img src={fb} alt="" width="800" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <img src={one} alt="" width="400" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Layout>
            <Fill><img src={one} alt="" width="400" /></Fill>
            <Fill>
              <List ordered={false} style={{ listStyleType: 'none' }}>
                <ListItem margin="4"> <span role="img" aria-label="next">👉🏻</span> /posts</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Layout>
            <Fill><img src={one} alt="" width="400" /></Fill>
            <Fill>
              <List ordered={false} style={{ listStyleType: 'none' }}>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /posts</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /post/:id</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Layout>
            <Fill><img src={two} alt="" width="400" /></Fill>
            <Fill>
              <List ordered={false} style={{ listStyleType: 'none' }}>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /posts</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /post/:id</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /post/:id/likes</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /user/:id</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /post/:id/comments</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /post/:id/blaahh</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <List ordered={false} style={{ listStyleType: 'none', transform: 'scale(0.8)' }}>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> v-22/posts/</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /post/:id/with-likes-n-comments</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <List ordered={false} style={{ listStyleType: 'none', transform: 'scale(0.8)' }}>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> v-22/posts/</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /post/:id/with-likes-n-comments</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /post/:id/with-likes-n-comments-likes-on-comments</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <List ordered={false} style={{ listStyleType: 'none', transform: 'scale(0.8)' }}>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> v-22/posts/</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /post/:id/with-likes-n-comments</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /post/:id/with-likes-n-comments-likes-on-comments</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /post/:id/with-likes-n-comments-likes-n-replies-on-comments</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3}>
            <span role="img" aria-label="no">👎🏻</span>
          </Heading>
        </Slide>

        <Fill>
          <Particles style={{ background: 'linear-gradient(to top, rgb(218, 68, 83), rgb(137, 33, 107))' }} params={{
            "particles": {
              "number": {
                "value": 250,
                "density": {
                  "enable": true,
                  "value_area": 1803.4120608655228
                }
              },
              "color": {
                "value": "#171E26"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 2,
                  "color": "#171E26"
                },
                "polygon": {
                  "nb_sides": 4
                },
                // "image": {
                //     "src": "img/github.svg",
                //     "width": 100,
                //     "height": 100
                // }
              },
              "opacity": {
                "value": 0.4008530152163807,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 1.5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "opacity": 0.2,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "window",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": false,
                  "mode": "bubble"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 100,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}> </Particles>
          <div className="text-on">
            <p>Enter</p>
            <h1>GraphQL</h1>
          </div>
        </Fill>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Layout>
            <Fill><img src={two} alt="" width="400" /></Fill>
            <Fill>
              <List ordered={false} style={{ listStyleType: 'none', transform: 'scale(0.8)', marginTop: '40%' }}>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /posts/all-the-things-i-want</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} >
          <Heading size={3}>
            <span role="img" aria-label="super">👌🏻</span>
          </Heading>
        </Slide>

        <Slide transition={['fade']} textColor="tertiary">
          <Text>
            <span className="underline">Concepts</span>
          </Text>
          <List ordered={false} style={{ listStyleType: 'none', transform: 'scale(0.8)' }} >
            <ListItem margin="8"> <span role="img" aria-label="next">✨</span> Query</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">⭐️</span> Mutation</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">💫</span> Resolvers</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} textColor="tertiary">
          <Text>
            <span className="underline">Client</span>
            &nbsp;Driven Development
          </Text>
        </Slide>
        <Slide transition={['fade']} textColor="tertiary">
          <Text>
            End to end&nbsp;
            <span className="underline">type</span>
            &nbsp;safety
          </Text>
        </Slide>
        <Slide transition={['fade']} textColor="tertiary">
          <Text>TODO:  GraphQL&nbsp;
            <span className="underline">Subscriptions</span>
          </Text>
        </Slide>
        <Slide transition={['fade']} textColor="tertiary">
          <Text> Automatic&nbsp;
          <span className="underline">documentation </span>&nbsp;📝
          </Text>
        </Slide>
        <Slide transition={['fade']} textColor="tertiary">
          <Text>
            Dev Tools ⚒
          </Text>
        </Slide>
        <Slide transition={['fade']} textColor="tertiary">
          <Text>
            Showing is better than talking
          </Text>
          <Heading caps size={3}>
            <span className="underline">Demo</span>
          </Heading>
        </Slide>
        <Slide transition={['fade']} textColor="tertiary">
          <Text>TODO: Security</Text>
        </Slide>
        <Slide transition={['fade']} textColor="tertiary">
          <Text>TODO: Caching</Text>
        </Slide>
        <Slide transition={['fade']} textColor="tertiary">
          <Text>TODO: Performance</Text>
        </Slide>
        <Slide transition={['fade']} textColor="tertiary">
          <Text><span className="underline">Disadvantages</span></Text>
          <List ordered={false} style={{ listStyleType: 'none', transform: 'scale(0.8)' }} >
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> Paradigm Shift</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} textColor="tertiary">
          <Heading size={3}>🙏🏻</Heading>
          <Text>Thank you!</Text>
        </Slide>
      </Deck>
    );
  }
}
