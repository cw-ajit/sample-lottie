import React, { Component } from 'react';
import lottie from 'lottie-web';
import animationData from "./CarLoan.json";

class Desktop extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.lottieAnimation = lottie.loadAnimation({
            container: document.querySelector(".animation-wrapper"),
            renderer: "svg",
            loop: 1,
            autoplay: true,
            animationData: animationData,
        });
    }

    render() {
        return <>
            <div style={{height:"200px", width:"200px"}} className='animation-wrapper' onMouseEnter={() => { this.lottieAnimation.goToAndPlay(1, false) }} onMouseLeave={() => { lottie.goToAndStop(1600, false) }}>
            </div>
        </>
    }
}

export default Desktop;