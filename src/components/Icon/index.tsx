import React from 'react';
import {ReactComponent as Logo} from "../../media/img/logo.svg";
import {ReactComponent as ArrowDown} from "../../media/img/arrow__down.svg";

type TIconProps = {
    id:string,
    className?: string,
    width?:number,
    height?:number,
    fill?:string
}

const Icon = ({id,className,width,height}:TIconProps) => {
    const Icons:Record<any, any> = {
        "logo" : <Logo className={className} width={width} height={height}/>,
        "arrow__down" : <ArrowDown className={className} width={width} height={height}/>,
    }
    return (
        <>
            {
                Icons[id]
            }
        </>
    );
};

export default Icon;