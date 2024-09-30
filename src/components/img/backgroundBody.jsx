/* eslint-disable */

export const ImgComponent = ({url, width, height}) => {
    return (
        <div>
            <img src={url} alt="background" width={width} height={height} className="object-cover"/>
        </div>
    );
}