import React, { FC } from 'react'

import { HighlightText } from '../styled/Typography';
import { StyledAvatarContainer, StyledImage } from './styles';


interface AvatarProps {
  url: string;
  name: string;
  imageUrl: string;
}

const Avatar:FC<AvatarProps> = ({url, name, imageUrl}) => {
  return (
    <StyledAvatarContainer>
      <StyledImage width={27} height={27} alt="user_avatar" src={imageUrl} loader={() => `${imageUrl}&s=27`} priority/>
      <a href={url} target="_blank" rel="noreferrer">
        <HighlightText>{name}</HighlightText>
      </a>
    </StyledAvatarContainer>
   )
 }

 export default Avatar