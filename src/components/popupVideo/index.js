import Image from "next/image";
import { StylePopupVideo } from "./styles";

import IconPlay from "../../images/play.svg"

export default function PopupVideo() {
    return (
        <>
            <StylePopupVideo>
                <span>ASSISTA AO TRAILER</span>
                <button>
                    <div>
                        <Image
                            src={IconPlay}
                            alt="Play button"
                        />
                    </div>
                </button>
            </StylePopupVideo>
        </>
    )}