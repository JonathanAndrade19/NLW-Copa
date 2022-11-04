// interface HomeProps {
//   count: number;
// }
import Image from 'next/image'
import appPreviwImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import userAvatarExempleImg from '../assets/users-avatar-example.png'
import IconCheckImg from '../assets/icon-check.svg'

export default function Home() {
  return (
    <div>
      <main>
        <Image src={ logoImg } alt="Logo NLW Copa"/>
        
        <h1>
          Crie seu próprio bolão da copa compartilhe entre amigos!
        </h1>

        <div>
          <Image src={ userAvatarExempleImg } alt="Avatar"/>
          <strong>
            <span>+12.226</span> pessoas já usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder='Qual nome do seu bolão'/>
          <button type='submit'>Criar meu bolão</button>
        </form>

        <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas</p>

        <div>
          <div>
            <Image src={ IconCheckImg } alt="Icon de Check" />
            <div>
              <span>+2.026</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
            <Image src={ IconCheckImg } alt="Icon de Check" />
            <div>
              <span>+192.826</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>

      </main>

      <Image 
        src={ appPreviwImg } 
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW copa"
        quality={100}
      />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json()

//   return {
//     props: {
//       count: data.countPools,
//     }
//   }
// }