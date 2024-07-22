import Menurestro from "./MenuRestro"
import Header from "./Header"
import Mood from "./Mood"
import Button from "./Button"
import ButtonLike from "./ButtonLike"
import ButtonLikes from "./ButtonLikes"
import Memo from "./Memo"
import UseCallback from "./UseCallback"
import UseRef from "./UseRef"
import UseContext from "./UseContext"

function App(){
  return (
    <>
      <Header text="Looping"/>
      <Menurestro/>
      <Header text="Props"/>
      <Mood day="Senin" mood="😂"/>
      <Mood day="Selasa" mood="😭"/>
      <Mood day="Rabu" mood="🥰"/>
      <Header text="useState"/>
      <Button />
      <Header text="useEffect"/>
      <ButtonLike />
      <Header text="useMemo"/>
      <ButtonLikes />
      <Header text="Memo"/>
      <Memo/>
      <Header text="useCallback"/>
      <UseCallback/>
      <Header text="useRef"/>
      <UseRef/>
      <Header text="useContext"/>
      <UseContext/>
    </>
  )
}

export default App