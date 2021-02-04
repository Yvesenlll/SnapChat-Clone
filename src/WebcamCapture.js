import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from "react-redux";
import {setCameraImage} from "./features/cameraSlice"
import { useHistory } from "react-router-dom";
import './WebcamCapture.css';

const videoConstrains = {
    width: 250,
    height: 400,
    facingMode: "user",
};

function WebcamCapture() {
    const webcamRef = useRef(null);
    // const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    // BEM naming 
    const history = useHistory();


    const capture = useCallback(() =>{
        const imageSrc = webcamRef.current.getScreenshot();
        // console.log(imageSrc);
        // setImage(imageSrc)
        dispatch(setCameraImage(imageSrc));
        history.push("/preview")

    }, [webcamRef])

    return <div className="webcamCapture">
        <Webcam
            audio={false}
            height={videoConstrains.height}
            ref = {webcamRef}
            screenshotFormat="image/jpeg"
            width={videoConstrains.width}
            videoConstraints={videoConstrains}
        />

        <RadioButtonUncheckedIcon 
            className="webcamCapture_button"
            onClick={capture}
            fontSize="large"
        />
        {/* <img src={image}></img> */}
    </div>
}


export default WebcamCapture;