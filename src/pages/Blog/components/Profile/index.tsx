import { ProfileAvatar, ProfileContainer, ProfileInfo } from './styles'
import avatar from '../../../../assets/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar src={avatar} alt="" />
      <ProfileInfo>
        <header>
          <h1>Cameron Williamson</h1>
          <a href="">
            Github
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </li>
        </ul>
      </ProfileInfo>
    </ProfileContainer>
  )
}
