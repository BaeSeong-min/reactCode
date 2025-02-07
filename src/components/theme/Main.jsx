import Card2 from '../Card2';
import { DarkModeProvider } from '../../context/DarkModeContext';
export default function Main() {
  return (
    <main>
      <DarkModeProvider initDarkMode={true}>
        <Card2 title="제목">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus iste laborum iusto ipsa cum est dolorum pariatur eaque ipsam at, sunt exercitationem dolor magnam, et esse. Porro laborum eligendi nemo.
        </Card2>
      </DarkModeProvider>
    </main>
  );
}