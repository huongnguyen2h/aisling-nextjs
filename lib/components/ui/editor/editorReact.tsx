import { createReactEditorJS } from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './tools'
import defaultBlock from './defaultBlock.json'

const ReactEditorJS = createReactEditorJS()

export default function Editor(): JSX.Element {
  return (
    <>
      <div>
        <ReactEditorJS
          tools={EDITOR_JS_TOOLS as any}
          placeholder="Let`s write an awesome story!"
          readOnly={false}
          autofocus={true}
          defaultValue={{
            time: 1635603431943,
            blocks: defaultBlock,
          }}
        />
      </div>
    </>
  )
}
