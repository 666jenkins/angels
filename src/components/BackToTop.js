import React from 'react'

const BackToTop = () => {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        const back2top = document.getElementById("backToTop");

        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            back2top.style.display = "block";
        } else {
            back2top.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button id="backToTop">
            <i className="fas fa-chevron-circle-up" onClick={topFunction}></i>
        </button>
    )
}

export default BackToTop