import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil'
import './App.css';

const textState = atom({
  key: 'textState',
  default: '',
})

function TextInput() {
  const [text, setText] = useRecoilState(textState)

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

const CharCounterState = selector({
  key: 'keyCounterState',
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(CharCounterState);

  return <>Charcter Count: {count}</>;
}

function CharcterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}

function App() {
  return (
    <RecoilRoot>
      <CharcterCounter />
    </RecoilRoot>
  );
}

export default App;

