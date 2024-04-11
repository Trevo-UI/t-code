import logoPath from '@/assets/brand/logo-svg.svg';

interface logoProps {
    width: number;
    height: number;
}

function Logo({width, height}: logoProps) {
    return (
        <>
            <img src={logoPath} alt="logo" width={width} height={height}/>
        </>
    );
}

export default Logo;