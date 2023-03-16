import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'main',
  repo: 'https://github.com/EliasSabja/la-montanesa', // Update to point to your repository
  user: {
   name: 'Elias', // update to use your name
   email: 'elias.sabja@uc.cl' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
