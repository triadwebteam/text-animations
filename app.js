gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char, i) => {

    const bg = char.dataset.bgColor;
    const fg = char.dataset.fgColor;

    console.log(char);
    const text = new SplitType(char, {types: 'words'});
    // gsap.from(text.chars, {
    //     scrollTrigger: {
    //         trigger:char,
    //         start:'top 90%',
    //         end: 'top 30%',
    //         scrub: true,
    //         markers: true
    //     },
    //     opacity:0,
    //     scaleY:0,
    //     y:100,
    //     stagger:0.01,
    // })

    gsap.fromTo(text.words, {
            color:bg,
            opacity:0.01
        }, {
            color:fg,
            scrollTrigger: {
                trigger:char,
                start:'top 80%',
                end: 'top 20%',
                scrub:true,
                markers:false
            },
            duration:0.1,
            stagger:0.01,
            opacity:1
        })

})


// LENIS
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);