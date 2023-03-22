import Herolapi from '../images/heroimg.jpg';

const Hero = () => {

    return (
        <div className="hero my-4">
            <div className="container box">
                <div className="hero__pad flex spc-btw gap-3">
                    <div className="hero__intro w-50">
                        <span className="txt-primary size-2 text-500">We are Creative</span>
                        <h3 style={{lineHeight:'1'}} className="size-4 text-900">Best IT <span className="txt-grad">Solution</span>
                        <br/><span className="size-5 text-900">Company</span>
                        </h3>
                        <p className="my-2 size-1 text-500 txt-black">
                            Get the most intuitive and durable software and apps from us; and have a reason to be happy as you grow.
                        </p>
                        <div className="flex gap-1">
                            <a href="#aboutus" className="btn text-500 lg primary">About Us &nbsp; &nbsp; + </a>
                            <a href="#whatwedo" className="btn lg secondary">Our Services &nbsp; &nbsp; +</a>
                        </div>
                    </div>
                    <div className="w-50 left-cast hero__right br-2 hero-pik-hang" style={{overflow:'hidden', minHeight:'500px'}}>
                        <img src={Herolapi} className="w-100" style={{objectFit:'cover', height:'100%'}}alt="Heor image"/>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Hero;