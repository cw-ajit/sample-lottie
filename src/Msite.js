import React, { Component } from 'react';
import lottie from 'lottie-web';
import animationData from "./CarLoan.json";

const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
class CHomeMsite extends Component {
    constructor(props) {
        super(props);
        this.lootieRef = React.createRef();
    }

    componentDidMount() {
        this.container = document.querySelector(".animation-wrapper");

        this.animation = lottie.loadAnimation({
            container: this.container,
            renderer: "svg",
            loop: 1,
            autoplay: false,
            animationData: animationData,
        });

        document.addEventListener('scroll', function () {
            isInViewport(document.querySelector(".animation-wrapper")) ? lottie.play() : lottie.stop();
        });

    }

    render() {
        return <>
            <div style={{height:"1000px", backgroundColor:"skyblue"}}>Scroll down to see animation</div>
            <div className='animation-wrapper' ref={this.lootieRef}>
            </div>
        </>
    }
}

export default CHomeMsite;