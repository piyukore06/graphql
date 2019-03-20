// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Layout,
  Fill,
  Text,
  Fit,
} from 'spectacle';
import Particles from 'react-particles-js';
import Slide from './octocat';
// Import theme
import createTheme from 'spectacle/lib/themes/default';

import imageSrc from './assets/222.jpg';
import logo from './assets/logo.png';
import github from './assets/github.png';
import twitter from './assets/twitter.png';

import img from './assets/twitter-img.png';
import basic from './assets/tweet-basic.png';
import zero from './assets/tweet.png';
import one from './assets/tweet-1.png';
import two from './assets/tweet-2.png';
import three from './assets/tweet-3.png';
import four from './assets/tweet-4.png';

import graphql from './assets/graphql.png';
import apolloDevtools from './assets/apolloDevtools.png';
import deprecations from './assets/deprecations.png';
import graphiql from './assets/graphiql.png';
import mutation from './assets/mutation.png';
import mutationResolver from './assets/mutationResolver.png';
import query from './assets/query.png';
import schema from './assets/schema.png';
import queryResolver from './assets/queryResolver.png';
import refetchQueries from './assets/refetchQueries.png';
import tweetQuery from './assets/tweetQuery.png';
import graphql1 from './assets/graphql1.png';
import './app.css';
import './../node_modules/prismjs/themes/prism.css';
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
        transitionDuration={500}
        theme={theme}
        progress="none"
        showFullscreenControl={false}
      >
        <Slide>
          <Text style={{fontSize: '60px'}}>Intro to</Text>
          <Heading size={1} className="name">
            GraphQL
          </Heading>
        </Slide>
        <Slide>
          <h3>What this talk is about</h3>
          <br />
          <Layout>
            <Fill>
              <span role="img" aria-label="yes">✅</span>
              <List>
                <ListItem>Basic concepts</ListItem>
                <ListItem>Is it a good fit for your project</ListItem>
              </List>  
            </Fill>
            <Fill><span role="img" aria-label="no"></span>
            
            </Fill>
          </Layout>
        </Slide>
        <Slide>
        <h3>What this talk is about</h3>
        <br />
          <Layout>
            <Fill><span role="img" aria-label="yes">✅</span>
            <List>
              <ListItem>Basic concepts</ListItem>
              <ListItem>Is it a good fit for your project</ListItem>
            </List> 
            </Fill>
            <Fill><span role="img" aria-label="no">🚫</span>
            <List>
              <ListItem>Deep dive</ListItem>
            </List> 
            </Fill>
          </Layout>
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
            </Fill>
            <Fill>
              <img src={imageSrc} alt="Priyanka" width="250" className="border-all" />
            </Fill>
          </Layout>

        </Slide>
        <Slide>
          <Heading size={6}>
            So, I'm building this <span className="underline">application</span>
          </Heading>
        </Slide>
        <Slide>
          <img src={img} alt="" width="1000" />
        </Slide>
        <Slide>
          <img src={basic} alt="" width="600" />
        </Slide>
        <Slide>
          <Layout>
            <Fill><img src={zero} alt="" width="400" /></Fill>
            <Fill>
              <List ordered={false} style={{ listStyleType: 'none' }}>
                <ListItem margin="4"> <span role="img" aria-label="next">👉🏻</span> /tweets</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Layout>
            <Fill><img src={one} alt="" width="400" /></Fill>
            <Fill>
              <List ordered={false} style={{ listStyleType: 'none' }}>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweets</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Layout>
            <Fill><img src={two} alt="" width="400" /></Fill>
            <Fill>
              <List ordered={false} style={{ listStyleType: 'none' }}>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweets</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /user/:id</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Layout>
            <Fill><img src={three} alt="" width="400" /></Fill>
            <Fill>
              <List ordered={false} style={{ listStyleType: 'none' }}>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweets</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /user/:id</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id/likes</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id/retweets</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Layout>
            <Fill><img src={four} alt="" width="400" /></Fill>
            <Fill>
              <List ordered={false} style={{ listStyleType: 'none' }}>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweets</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /user/:id</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id/likes</ListItem>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id/retweets</ListItem>
                <ListItem margin=""> <span role="img" aria-label="next">👉🏻</span> /tweet/:id/comments</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <List ordered={false} style={{ listStyleType: 'none', transform: 'scale(0.8)' }}>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> v-22/tweets/</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id/with-likes-n-comments</ListItem>
          </List>
        </Slide>
        <Slide>
          <List ordered={false} style={{ listStyleType: 'none', transform: 'scale(0.8)' }}>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> v-22/tweets/</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id/with-likes-n-comments</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id/with-likes-n-comments-likes-on-comments</ListItem>
          </List>
        </Slide>
        <Slide>
          <List ordered={false} style={{ listStyleType: 'none', transform: 'scale(0.8)' }}>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> v-22/tweets/</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id/with-likes-n-comments</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id/with-likes-n-comments-likes-on-comments</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /tweet/:id/with-likes-n-comments-likes-n-replies-on-comments</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3}>
            <span role="img" aria-label="no">👎🏻</span>
          </Heading>
        </Slide>

        <Fill>
          <Particles className="particles-js" style={{ background: 'linear-gradient(to top, rgb(218, 68, 83), rgb(137, 33, 107))'}} params={{
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
        <Slide>
            <img src={graphql1} width="1000" alt="GraphQL"/>
        </Slide>
        {/* <Slide>
            <img src={graphql} width="1000" alt="GraphQL"/>
        </Slide> */}
        <Slide>
          <Layout>
            <Fill><img src={four} alt="" width="400" /></Fill>
            <Fill>
              <List ordered={false} style={{ listStyleType: 'none', transform: 'scale(0.8)', marginTop: '40%' }}>
                <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> /graphql</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Layout>
            <Fill><img src={two} alt="" width="400" /></Fill>
            <Fill>
              <img src={tweetQuery} alt="tweetQuery" width="500"/>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={3}>
            <span role="img" aria-label="super">👌🏻</span>
          </Heading>
        </Slide>

        <Slide>
          <Text>
            <span className="underline">Client</span>&nbsp; driven development
          </Text>
        </Slide>
        <Slide>
          <Text>
            Language&nbsp;<span className="underline">agnostic</span>
          </Text>
        </Slide>
        <Slide>
          <Text>
            <span className="underline">Concepts</span>
          </Text>
          <List ordered={false} style={{ listStyleType: 'none', transform: 'scale(0.8)' }} >
            <ListItem margin="8"> <span role="img" aria-label="next">☀️</span> Schema</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">✨</span> Query</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">⭐️</span> Mutation</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">💫</span> Resolvers</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">⚡️</span> Subscriptions</ListItem>
          </List>
          
        </Slide>
        <Slide>
          <Text><span role="img" aria-label="next">☀️</span><span className="underline">Schema</span></Text>
          <br />  
          <img src={schema} alt="schema" width="400" />
        </Slide>
        
        
        <Slide>
          <Text><span role="img" aria-label="next">✨</span><span className="underline">Query & it's Resolver</span></Text>
          <br />
          <Layout>
            <Fit style={{margin: '10px'}}>
            <img src={query} alt="query"  width="500"/>
            </Fit>
            <Fit style={{margin: '10px'}}>
            <img src={queryResolver} alt="queryResolver"  width="550"/>
            </Fit>
          </Layout>
        </Slide>

        <Slide>
          <Text><span role="img" aria-label="next">⭐️</span><span className="underline">Mutation & it's Resolver</span></Text>
          <br />
          <Layout>
            <Fit style={{margin: '10px'}}>
            <img src={mutation} alt="mutation"  width="550"/>
            </Fit>
            <Fit style={{margin: '10px'}}>
            <img src={mutationResolver} alt="mutationResolver"  width="550"/>
            </Fit>
          </Layout>
        </Slide>

        <Slide>
          <Text>But, is that really</Text>
            <Heading size={4} caps> <span>enough</span></Heading>
            <Text>to start using</Text>
            <Heading size={3} caps> <span className="name">GraphQL</span></Heading>
        </Slide>
        <Slide>
          <Text>What are the constraints&nbsp;
            <span className="underline">Modern APIs</span>&nbsp; generally concerned with?
          </Text>
          <List ordered={false} style={{ listStyleType: 'none', transform: 'scale(0.8)' }}>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> Efficiency</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> Predictability</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> Versioning</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> Security</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> Caching</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> Tooling</ListItem>
            <ListItem margin="8"> <span role="img" aria-label="next">👉🏻</span> Documentation</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>1. Efficiency</Text>
          <br />
          <Layout>
            <Fit>
            <img src={graphql} alt="query"  width="600" />
            </Fit>
            <Fit>
            <img src={refetchQueries} alt="queryResolver"  style={{margin: '10px'}} width="500" />
            </Fit>
          </Layout>
        </Slide>
        <Slide>
          <Text>2. Predictability</Text>
        </Slide>
        <Slide>
          <Text>3. Versioning</Text>
          <br />
          <img src={deprecations} alt="query" />
        </Slide>
        <Slide>
          <Text>4. Security</Text>
        </Slide>
        <Slide>
          <Text>5. Caching</Text>
        </Slide>
        <Slide>
          <Text>6. Tooling & 7. Documentation</Text>
          <br />
          <Layout>
            <Fit>
            <img src={graphiql} alt="query" style={{margin: '10px'}} width="600"  />
            </Fit>
            <Fit>
            <img src={apolloDevtools} alt="queryResolver"  style={{margin: '10px'}} width="600" />
            </Fit>
          </Layout>
        </Slide>
        <Slide>
          <Text>
            Showing is better than talking
          </Text>
          <Heading caps size={3}>
            <span className="underline">Demo <span role="img" aria-label="Demo">💁🏻‍♀️</span></span>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3}><span role="img" aria-label="namaste">🙏🏻</span></Heading>
          <Text>Thank you!</Text>
          <p>http://intro-to-graphql.surge.sh</p>
        </Slide>
      </Deck>
    );
  }
}
