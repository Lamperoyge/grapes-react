import './App.css';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js';
import { useEffect, Fragment } from 'react';

function App() {
  useEffect(() => {
    grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      plugins: ['gjs-preset-webpage'],

      blockManager: {
        appendTo: '#myblocks',
        blocks: [
          {
            id: 'image',
            label: 'Image222',
            media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
            </svg>`,
            // Use `image` component
            content: { type: 'image' },
            // The component `image` is activatable (shows the Asset Manager).
            // We want to activate it once dropped in the canvas.
            activate: true,
            // select: true, // Default with `activate: true`
          },
        ],
      },
      // pageManager: {
      //   pages: [
      //     {
      //       id: 'page-id',
      //       styles: `.my-class { color: red }`, // or a JSON of styles
      //       component: '<div class="my-class">My element</div>', // or a JSON of components
      //     },
      //   ],
      // },

      // Get the content for the canvas directly from the element
      // // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      // fromElement: true,
      // // Size of the editor
      // height: '300px',
      // width: 'auto',
      // // Disable the storage manager for the moment
      // storageManager: false,
      // // Avoid any default panel
      // panels: { defaults: [] },
    });
  }, []);
  return (
    <Fragment>
      <div id='gjs'>...</div>
      <div id='myblocks'></div>
    </Fragment>
  );
}

export default App;
