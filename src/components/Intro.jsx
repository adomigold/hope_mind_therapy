import Image from "next/image"

export default function Intro() {
    return (
        <section id="1" className="container mb-3 my-md-0 py-5 py-md-6">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 order-md-1 order-2 text-md-start text-center">
                    <h1 className="display-5 mb-lg-4 mb-3">Welcome to Hope Mind Therapy.</h1>
                    <p className="mb-lg-5 mb-4 text-muted">
                        We are psychologist, specialize in working with anxiety, depression, relationships,
                        trauma, and life transitions. I work both dynamically and collaboratively,
                        incorporating CBT, DBT, and mindfulness in a psychodynamic framework.
                        I approach each relationship uniquely given the presenting concerns and needs.
                        Please feel free to read more about me and my approach and reach out to me for
                        a 15 minute consultation to see if we could be a good match.
                    </p>
                </div>
                <div className="col-lg-8 col-md-7 order-md-2 order-1 mb-md-0 mb-grid-gutter">
                    <div className="card card-hover h-100 border-0 shadow">
                        <Image className="card-img-top card-img-bottom" src="/img/logo/intro.png" alt="Illustration" width={'500px'} height={'400px'} />
                    </div>
                </div>
            </div>
        </section>
    )
}