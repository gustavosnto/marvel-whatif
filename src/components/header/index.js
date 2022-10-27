import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../images/marvel-logo.png'
import LogoCodeboost from '../../images/codeboost.svg'
import { HeaderStyle } from './styles'
import { Container } from '../../styles/global'

export function Header() {
    return <HeaderStyle>
        <Container>
            <div className="logo">
                <Link href="/">
                    <Image src={Logo} alt="Logo Marvel Studios" />
                </Link>
            </div>
            <div className="code">
                <Image src={LogoCodeboost} alt="Logo CodeBoost" />
            </div>
        </Container>
    </HeaderStyle>
}