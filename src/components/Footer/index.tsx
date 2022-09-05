import styled from "styled-components"

const StyledFooter = styled.footer`
    background-color: #20202b;
    height: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    font-weight: 600;
`
const StyledAnchor = styled.a`
    display: flex;
    padding: 0 5px;
    color: skyblue;
`
export const Footer = () => {
    return (
        <StyledFooter>
            Built by
            <StyledAnchor target="_blank" href="https://github.com/sol3uk/gilliverse-timeline">@sol3uk</StyledAnchor>
        </StyledFooter>
    )
}
