import react from "react"

function Post(props) {
  const [like, setLike] = react.useState();
  const [salvar, setSalvar] = react.useState();
  function clickFoto () {
    if (!like) {
      setLike(true);
    }

  }


  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgUsuario} onClick={clickFoto}/>
          {props.nomeUsuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imgPost} /> 
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {like ? <ion-icon name="heart" style={{color: 'red'}} onClick={() => setLike(!like)}></ion-icon> : 
            <ion-icon name="heart-outline" onClick={() => setLike(!like)}></ion-icon> }
            
            <ion-icon name="chatbubble-outline"></ion-icon>

            
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
          {like ? <ion-icon name="bookmark" style={{color: 'black'}} onClick={() => setSalvar(!salvar)}></ion-icon> : 
            <ion-icon name="bookmark-outline" onClick={() => setSalvar(!salvar)}></ion-icon> }
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgCurtiu} />
          <div class="texto">
            Curtido por <strong>{props.nomeCurtiu}</strong> e <strong>outras {props.qtdCurtida} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

const post = [
  {
    imgUsuario: "assets/img/meowed.svg",
    nomeUsuario: "meowed",
    imgPost: "assets/img/gato-telefone.svg",
    imgCurtiu: "assets/img/respondeai.svg",
    nomeCurtiu: "respondeai",
    qtdCurtida: "101.523"
  },
  {
    imgUsuario: "assets/img/barked.svg",
    nomeUsuario: "barked",
    imgPost: "assets/img/dog.svg",
    imgCurtiu: "assets/img/adorable_animals.svg",
    nomeCurtiu: "adorable_animals",
    qtdCurtida: "91.159"
  },
  {
    imgUsuario: "assets/img/meowed.svg",
    nomeUsuario: "meowed",
    imgPost: "assets/img/gato-telefone.svg",
    imgCurtiu: "assets/img/respondeai.svg",
    nomeCurtiu: "respondeai",
    qtdCurtida: "101.523"
  },
]


export default function Feed() {
  const postComponents = post.map (post => <Post imgUsuario={post.imgUsuario} 
    nomeUsuario={post.nomeUsuario} imgPost={post.imgPost} imgCurtiu={post.imgCurtiu} 
    nomeCurtiu={post.nomeCurtiu} qtdCurtida={post.qtdCurtida}/>)
  return (
    <div class="posts">
      {postComponents}
    </div>
  )
}