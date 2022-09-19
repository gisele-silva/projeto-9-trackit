const sugestaoUsuario  = [
  {
    imgUsuario: "assets/img/catanacomics.svg", 
    nome: "bad.vibes.memes"
  },
  {
    imgUsuario: "assets/img/chibirdart.svg", 
    nome: "chibirdart"
  },
  {
    imgUsuario: "assets/img/razoesparaacreditar.svg", 
    nome: "razoesparaacreditar"
  },
  {
    imgUsuario: "assets/img/adorable_animals.svg", 
    nome: "adorable_animals"
  },
  {
    imgUsuario: "assets/img/smallcutecats.svg", 
    nome: "smallcutecats"
  },
]

function Sugestao (props) {
  return (
    <div class="sugestao">
            <div class="usuario">
              <img src={props.imgUsuario} />
              <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
  )
}

export default function Sidebar () {
  const sugestaoComponents = sugestaoUsuario.map (sugestaoUsuario => 
  <Sugestao imgUsuario={sugestaoUsuario.imgUsuario} nome={sugestaoUsuario.nome}/>)
  
  function mudarNome () {
    let nome = prompt("Qual seu nome?")
  }  

  
  return (
    
        <div class="sidebar">
        <div class="usuario">
          <img src="assets/img/catanacomics.svg" />
          <div class="texto">
            <strong>catanacomics</strong>
            <span>
              Catana 
              <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
            </span>
          </div>
        </div>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          
          {sugestaoComponents}
          
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}