import Recuperacao from "./assets/icons/recuperacao.png"
import Confiavel from "./assets/icons/confiavel.png"
import Vida from "./assets/icons/vida.png"
import Liberdade from "./assets/icons/liberdade.png"
import Apoio from "./assets/icons/apoio.png"
import Facilidade from "./assets/icons/facilidade.png"
import CapaEbook from "./assets/capa.png"
import Compromisso from "./assets/icons/compromisso.png"
import Investimento from "./assets/icons/investimento.png"
import Credit from "./assets/icons/credit.png"
import Pix from "./assets/icons/icons8.svg"
import Boleto from "./assets/icons/boleto-4.png"
import './App.css'


function App() {

  return (
    <div className="flex h-[100vh] items-center justify-center
    bg-[#F5F5F5]
    max-[1080px]:flex 
    max-[1080px]:flex-col
    max-[1080px]:h-full
     ">
      <div className="pl-[4%]
          max-w-[51%]
          max-[1080px]:max-w-[100%] 
          max-[1080px]:flex 
          max-[1080px]:flex-col 
          max-[1080px]:items-center
          max-[1080px]:pl-0
          mt-[2%]
          bg-[#F5F5F5]
          text-gray-700
          ">
        <h1 className="text-[#002E22]
            text-7xl
            font-bold
            font-serif
            max-[1240px]:text-6xl
            
            ">LIBERTE-SE</h1>
        <p className="mt-[38px]
            text-xl
            font-semibold
            max-w-[76%]
            max-[1080px]:max-w-[95%]
            max-[1240px]:text-base
            ">🌿 Transforme Sua Vida com &quot;Liberte-se&quot;! 🌿</p>
        <p className="mt-[15px]
            text-sm
            max-w-[65%]
            max-[1080px]:text-center
            max-[1080px]:max-w-[95%]
            ">Você ou alguém que ama luta contra a dependência da maconha? Descubra o caminho para a sobriedade com o nosso e-book revolucionário &quot;Liberte-se: O caminho comprovado para deixar a maconha e recuperar o controle da sua vida&quot;.</p>
        <p className="mt-[15px]
            text-sm
            max-w-[65%]
            max-[1080px]:text-center
            max-[1080px]:max-w-[95%]
            ">Este guia é mais do que um livro; é um companheiro em sua jornada para uma vida mais saudável e equilibrada. Seja você um usuário buscando mudança, um profissional de saúde em busca de recursos, ou um familiar que deseja entender e apoiar, este e-book é para você.</p>
        <a target="_blank" href="https://pay.kiwify.com.br/VRFb9sv" rel="noreferrer"><button className="p-7 
          rounded-3xl
          mt-8
          text-4xl
          font-bold
          hover:bg-[#5e541d]
          shadow-xl
          hover:text-white
          bg-[#FFD700]">COMPRE AGORA</button></a>
      </div>


      <div className="w-[20%]
              mt-[0px]
              absolute
              top-[12%]
              left-[39%]
              max-[1080px]:left-[0%]
              max-[1080px]:w-[50%]
              max-[1080px]:flex
              max-[1080px]:top-[0%]
              max-[1080px]:relative
              max-[1080px]:justify-center
              max-[1080px]:mt-6
              ">
        <img src={CapaEbook} alt=""
          className="w-full
          
          max-[1080px]:w-[80%]
          max-[1080px]:mr-6"
        />
        <div className="bg-[#F5F5F5]
          p-5
          rounded-xl
          border-solid
          border-green-950
          border-2
          mt-4
          font-bold
          flex
          flex-col
          items-center
          ">
          <p className="text-center text-lg max-[1340px]:text-base">Oferta por tempo limitado</p>
          <p className="flex text-lg">de <p className="text-gray-500 line-through decoration-red-700 ml-1"> R$37</p> por R$21,90</p>
          <div className="flex
            ">
            <img className="max-w-[30px] mr-3" src={Credit} alt="" />
            <img className="max-w-[30px] mr-3" src={Boleto} alt="" />
            <img className="max-w-[30px]" src={Pix} alt="" />
          </div>
          <a target="_blank" href="https://pay.kiwify.com.br/VRFb9sv" rel="noreferrer"><button className="p-5
          rounded-3xl
          mt-2
          text-2xl
          font-bold
          hover:bg-[#5e541d]
          shadow-xl
          hover:text-white
          bg-[#FFD700]
          max-[1393px]:text-xl
          max-[1066px]:p-[0.6rem]
          ">PEGAR OFERTA</button></a>
        </div>
      </div>
      <div className="bg-green-950 
          h-full
          text-white
          pl-[10%]
          flex
          items-center
          max-[1080px]:flex 
          max-[1080px]:flex-col 
          max-[1080px]:mb-0
          max-[1080px]:items-center
          max-[1080px]:pl-0
          max-[1080px]:mt-7
          ">
        <div className="flex
          flex-col
          ">

          <div className="flex
            mb-[5%]
            max-[1080px]:flex 
            max-[1080px]:flex-col
            max-[1080px]:mb-0
            max-[1080px]:items-center
            max-[1080px]:mt-6
            ">
            <div className=" max-w-[45%] 
            max-[1080px]:max-w-[60%]
            max-[1080px]:mb-6
              flex
              flex-col
              items-center
              mr-[10%]
              max-[1080px]:mr-0">
              <img className="max-w-[20%]" src={Recuperacao} alt="" />
              <p className="text-center font-semibold mb-1">Recuperação ao seu Alcance</p>
              <p className="text-center text-xs">Passos práticos e acessíveis que você pode começar a aplicar hoje para deixar a maconha.</p>
            </div>
            <div className=" max-w-[40%]
            max-[1080px]:max-w-[60%]
            max-[1080px]:mb-6
              flex
              flex-col
              items-center">
              <img className="max-w-[20%]" src={Confiavel} alt="" />
              <p className="text-center font-semibold mb-1">Expertise Confiável</p>
              <p className="text-center text-xs">Orientações baseadas em pesquisas e experiências reais para garantir um caminho seguro e eficaz para a sobriedade.</p>
            </div>
          </div>

          <div className="flex
            mb-[5%]
            max-[1080px]:flex 
            max-[1080px]:flex-col
            max-[1080px]:mb-0
            max-[1080px]:items-center
            ">
            <div className=" max-w-[45%]
             max-[1080px]:max-w-[60%]
             max-[1080px]:mb-6
              flex
              flex-col
              items-center
              mr-[10%]
              max-[1080px]:mr-0">
              <img className="max-w-[20%]" src={Vida} alt="" />
              <p className="text-center font-semibold mb-1">Mudança de Vida</p>
              <p className="text-center text-xs">Estratégias que vão além da cessação, promovendo melhorias significativas em todos os aspectos da sua vida.</p>
            </div>
            <div className=" max-w-[40%]
            max-[1080px]:max-w-[60%]
            max-[1080px]:mb-6
              flex
              flex-col
              items-center">
              <img className="max-w-[20%]" src={Liberdade} alt="" />
              <p className="text-center font-semibold mb-1">Liberdade Emocional</p>
              <p className="text-center text-xs">Descubra como viver livre dos efeitos físicos e psicológicos da maconha.</p>
            </div>
          </div>

          <div className="flex
            mb-[5%]
            max-[1080px]:flex 
            max-[1080px]:flex-col
            max-[1080px]:mb-0
            max-[1080px]:items-center
            ">
            <div className=" max-w-[45%]
             max-[1080px]:max-w-[60%]
             max-[1080px]:mb-6
              flex
              flex-col
              items-center
              mr-[10%]
              max-[1080px]:mr-0">
              <img className="max-w-[20%]" src={Apoio} alt="" />
              <p className="text-center font-semibold mb-1">Apoio Continuado</p>
              <p className="text-center text-xs">Acesso a recursos e comunidades que oferecem suporte constante na sua jornada de recuperação.</p>
            </div>
            <div className=" max-w-[40%]
            max-[1080px]:max-w-[60%]
            max-[1080px]:mb-6
              flex
              flex-col
              items-center">
              <img className="max-w-[20%]" src={Facilidade} alt="" />
              <p className="text-center font-semibold mb-1">Facilidade de Acesso</p>
              <p className="text-center text-xs">Formatos digitais para ler onde e quando quiser, adaptando-se ao seu estilo de vida.</p>
            </div>
          </div>

          <div className="flex
            max-[1080px]:flex 
            max-[1080px]:flex-col
            max-[1080px]:mb-0
            max-[1080px]:items-center
            ">
            <div className=" max-w-[45%]
            max-[1080px]:max-w-[60%]
            max-[1080px]:mb-6
              flex
              flex-col
              items-center
              mr-[10%]
              max-[1080px]:mr-0">
              <img className="max-w-[20%]" src={Compromisso} alt="" />
              <p className="text-center font-semibold mb-1">Compromisso com Resultados</p>
              <p className="text-center text-xs">Histórias de sucesso e testemunhos que provam a eficácia do método.</p>
            </div>
            <div className=" max-w-[40%]
            max-[1080px]:max-w-[60%]
            max-[1080px]:mb-6
              flex
              flex-col
              items-center">
              <img className="max-w-[20%]" src={Investimento} alt="" />
              <p className="text-center font-semibold mb-1">Investimento na Saúde</p>
              <p className="text-center text-xs">Priorize sua saúde mental e física com um guia que entende suas necessidades.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
