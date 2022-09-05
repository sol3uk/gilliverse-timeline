import { ReactComponent as BCSLogo } from '../../assets/bcs.svg';
import { ReactComponent as BrBaLogo } from '../../assets/brba.svg';
import { LogoWrapper } from './styles';

export const Header = () => {
    return (<LogoWrapper>
        <BCSLogo />
        <BrBaLogo />
    </LogoWrapper>);
};
