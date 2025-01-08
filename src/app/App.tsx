import { AppleBtn } from "@features/authViaSocialsButtons/authViaApple"
import { FacebookBtn } from "@features/authViaSocialsButtons/authViaFacebook"
import { GitHubBtn } from "@features/authViaSocialsButtons/authViaGitHub"
import { GoogleBtn } from "@features/authViaSocialsButtons/authViaGoogle"
import { SocialAuthPanel } from "@widgets/authViaSocial"

function App() {

  return (
    <div>
      <SocialAuthPanel/>
      <GoogleBtn/>
      <AppleBtn/>
      <GitHubBtn/>
      <FacebookBtn/>
    </div>
  )
}

export default App
