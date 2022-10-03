import { Variants } from 'framer-motion'

export const fadeInUp = {
    initial: {
        y: 80,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
}

export const fadeInDown = {
    initial: {
        y: -60,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
}

export const fadeInRight = {
    initial: {
        y: "100%",
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
}

export const fadeInLeft = {
    initial: {
        x: "100%",
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
}
