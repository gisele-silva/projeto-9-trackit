    import erro from "./assets/img/icone_erro.png"
    import quase from "./assets/img/icone_quase.png"
    import desvirar from "./assets/img/seta_virar.png"
    import certo from "./assets/img/icone_certo.png"
    import play from "./assets/img/seta_play.png"

export default function Icones ({status}) {
      if (status === 'certo' ) {
        return <img src={certo} alt="" />
      }
      if (status === 'erro' ) {
        return <img src={erro} alt="" />
      }
      if (status ===  'quase' ) {
        return <img src={quase} alt="" />
      }
      if (status === 'play' ) {
        return <img src={play} alt="" />
      }
      if (status === 'desvirar' ) {
        return <img src={desvirar} alt="" />
      }
}