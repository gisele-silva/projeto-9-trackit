import Feed from "./Feed"
import Sidebar from "./Sidebar"
import Stories from "./Stories"

export default function Corpo () {
    return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Feed />
      </div>

      <Sidebar />
    </div>
    )
}