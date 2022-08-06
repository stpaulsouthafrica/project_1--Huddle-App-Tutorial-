import { StyledHeader, StyledNav, StyledLogo, StyledImage } from './Styles/StyledHeader';
import { StyledContainer } from './Styles/StyledContainer';
import { StyledButton } from './Styles/StyledButton';
import { StyledFlex } from './Styles/StyledFlex';


export default function header(){
    return(
        <StyledHeader>
            <StyledContainer>
                <StyledNav>
                    <StyledLogo src='./images/logo.svg'/>
                    <StyledButton>Try for free</StyledButton>
                </StyledNav>

                <StyledFlex>

                    <div>
                        <h1>
                            Almost before we knew it, we left the ground!
                        </h1>
                        <p>
                            Almost before we knew it, we left the ground!,
                            The quick brown fox, we left the ground!,
                            Almost before we knew it, we left the ground!,
                            Almost before we knew it, The quick brown fox!
                        </p>
                        <StyledButton bg='#ff0099' color='#fff'>
                          Get Started For Free
                        </StyledButton>                        
                    </div>

                    <StyledImage src='./images/illustration-mockups.svg' alt='' />

                </StyledFlex>

            </StyledContainer>
        </StyledHeader>
    )

}