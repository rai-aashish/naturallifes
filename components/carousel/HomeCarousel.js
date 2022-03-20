import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from './CarouselItem'
import slide1 from '../../assets/images/carousel/slide3.webp'
import slide2 from '../../assets/images/carousel/slide2.webp'
import slide3 from '../../assets/images/carousel/slide1.webp'
import slide4 from '../../assets/images/carousel/slide4.webp'

export default function HomeCarousel() {
    return (
        <div style={{marginTop:'-11rem',padding:0,maxHeight:'45rem'}}>
        <Carousel
            autoPlay={true}
            showIndicators={false}
            showStatus={false}
            emulateTouch={true}
            infiniteLoop={true}
            showThumbs={false}
            
        >

            <CarouselItem imageUrl={slide1} description="Yoga is a mirror to look at ourselves from within." />
            <CarouselItem imageUrl={slide2} description="Everyday is a great day for yoga" />
            <CarouselItem imageUrl={slide3} description="The yoga pose you avoid the most is the one that you need the most." />
            <CarouselItem imageUrl={slide4} description="Yoga takes you into the present moment. The only place where life exists." />
        </Carousel>
        </div>
    )
}
