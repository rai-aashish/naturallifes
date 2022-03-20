//animation variants

export const animateFromRight = {
    from: {
        opacity: 0,
        translateX: 50
    },
    to: {
        opacity: 1,
        translateX: 0,
        transition: {
            duration: 0.9,
            ease:'easeIn'
        }
    }
}

export const animateFromLeft = {
    from: {
        opacity: 0,
        translateX: -50
    },
    to: {
        opacity: 1,
        translateX: 0,
        transition: {
            duration: 0.9,
            ease:'easeIn'
        }
    }
}