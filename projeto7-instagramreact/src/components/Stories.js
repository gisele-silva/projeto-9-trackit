function Story (props) {
    return (
        <div class="story">
        <div class="imagem">
          <img src={props.pastaDaImg} />
        </div>
        <div class="usuario">{props.nomeDoPerfil}</div>
      </div>
    )
}
const stories = [
    { caminho: 'assets/img/9gag.svg', perfil: '9gag' },
    { caminho: 'assets/img/meowed.svg', perfil: 'meowed' },
    { caminho: 'assets/img/barked.svg', perfil: 'barked' },
    {
      caminho: 'assets/img/nathanwpylestrangeplanet.svg',
      perfil: 'nathanwpylestrangeplanet',
    },
    {
      caminho: 'assets/img/wawawicomics.svg',
      perfil: 'wawawicomics',
    },
    {
      caminho: 'assets/img/respondeai.svg',
      perfil: 'respondeai',
    },
    {
      caminho: 'assets/img/filomoderna.svg',
      perfil: 'filomoderna',
    },
    {
      caminho: 'assets/img/memeriagourmet.svg',
      perfil: 'memeriagourmet',
    },
  ];
  
export default function Stories () {
    return (
    <div class="stories">
      {stories.map((story) => (
        <Story pastaDaImg={story.caminho} nomeDoPerfil={story.perfil} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
    )
}