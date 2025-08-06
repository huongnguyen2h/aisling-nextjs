import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import SimpleImage from '../simple-image/simple-image'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../button'
import defaultBlock from './defaultBlock.json'
// const initEditor = () => {
//   const editor = new EditorJS({
//     /**
//      * Id of Element that should contain Editor instance
//      */
//     holder: 'editorjs',

//     /**
//      * Available Tools list.
//      * Pass Tool's class or Settings object for each Tool you want to use
//      */
//     tools: {
//       header: Header,
//       list: List,
//     },
//     placeholder: 'Let`s write an awesome story!',
//     readOnly: false,
//     autofocus: true,
//   })
// }
export default function Editor(): JSX.Element {
    const elmtRef = useRef<HTMLDivElement>();
    const [output, setOutput] = useState<string>('');
    let editorJsState

    useEffect(() => {
      if (!elmtRef.current) {
        return;
      }

      let editorJs;
  
      (async () => {
        const { default: EditorJS } = await import("@editorjs/editorjs");
        const editorJs = new EditorJS({
          /**
           * Id of Element that should contain Editor instance
           */
          holder: 'editorjs',
      
          /**
           * Available Tools list.
           * Pass Tool's class or Settings object for each Tool you want to use
           */
          tools: {
            header: Header,
            list: List,
            image: SimpleImage
          },
          placeholder: 'Let`s write an awesome story!',
          readOnly: false,
          autofocus: true,

          /**
           * Previously saved data that should be rendered
           */
          data: {
              blocks: defaultBlock
          } 
        })
        editorJsState = editorJs
      })().catch((error): void => console.error(error));
  
      return (): void => {
        editorJsState?.destroy();
      };
    });

    function onSave(): void {
        console.log("onSave editorJs");
        console.log(editorJsState);
        editorJsState?.save().then( savedData => {
          setOutput(JSON.stringify(savedData, null, 4));
        })
  
    }
    
  return (
    <>
      <div>
        <div id="editorjs"></div>
        <div
        ref={(elmt: HTMLDivElement | null): void => {
            if (elmt) {
                elmtRef.current = elmt;
            }
        }}
        />
        <Button onClick={() => onSave()}>Save</Button>
        <div>{output}</div>
      </div>
    </>
  )
}
