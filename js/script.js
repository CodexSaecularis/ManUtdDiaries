// PARALLAX
// window.addEventListener('scroll', e => {
// 	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
// })
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// ScrollSmoother.create({
// 	wrapper: '.wrapper',
// 	content: '.content',
// })

// https://stackoverflow.com/questions/54142435/href-link-target-open-in-same-tab-in-mobile-view

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById("links").target = "_self";     //change target
}