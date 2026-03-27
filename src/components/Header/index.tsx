import BCSLogo from '../../assets/bcs.svg?react';
import BrBaLogo from '../../assets/brba.svg?react';
import { LogoWrapper } from './styles';

export const Header = () => {
    return (<LogoWrapper>
        <BCSLogo />
        <BrBaLogo />
    </LogoWrapper>);
};
