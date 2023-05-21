import React from "react";
import ReactReadMoreReadLess from 'react-read-more-read-less'

export default function CurriculumList() {
    return (
        <>
            <div className="col-lg-8 col-md-7 order-md-1 bg-position-start-bottom bg-repeat-0" style={{ "backgroundImage": "url(img/logo/bg-shape.svg)" }}>
                <div className="mx-auto mx-md-0 ms-xl-7" style={{ "maxWidth": "600px" }}>
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="bg-light shadow-lg rounded-3 p-4 mb-grid-gutter text-center text-sm-start">
                                <h3 className="h5 mb-2">Janeth, Mikocheni</h3>
                                <p className="fs-sm">
                                    <ReactReadMoreReadLess
                                        charLimit={100}
                                        readMoreText={"Read more"}
                                        readLessText={"Read less"}
                                        readMoreStyle={{ color: "#00A3EA" }}
                                        readLessStyle={{ color: "#00A3EA" }}>
                                        Hope Mind's support during a difficult time in my life was essential
                                        for my emotional well-being. We used a few fun, artful methods
                                        that brought me clarity and comfort. I really appreciate their
                                        help and would highly recommend her to others.
                                    </ReactReadMoreReadLess>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="bg-light shadow-lg rounded-3 p-4 mb-grid-gutter text-center text-sm-start">
                                <h3 className="h5 mb-2">Clement, Makumbusho</h3>
                                <p className="fs-sm">
                                    <ReactReadMoreReadLess
                                        charLimit={100}
                                        readMoreText={"Read more"}
                                        readLessText={"Read less"}
                                        readMoreStyle={{ color: "#49D5AD" }}
                                        readLessStyle={{ color: "#49D5AD" }}>
                                        Really enjoying speaking with Hope Mind and working through my issues.
                                        He’s great to talk to, listens well, and finds light hearted ways
                                        to help me deal with my frustrations. I will continue my therapy
                                        with Hope Mind and would highly suggest Hope Mind and Better help
                                    </ReactReadMoreReadLess>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mx-md-0" style={{ "maxWidth": "600px" }}>
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="bg-light shadow-lg rounded-3 p-4 mb-grid-gutter text-center text-sm-start">
                                <h3 className="h5 mb-2">Anneth, Kawe</h3>
                                <p className="fs-sm">
                                    <ReactReadMoreReadLess
                                        charLimit={100}
                                        readMoreText={"Read more"}
                                        readLessText={"Read less"}
                                        readMoreStyle={{ color: "#FFBD5C" }}
                                        readLessStyle={{ color: "#FFBD5C" }}>
                                        Hope Mind Therapy always listens to me and makes me think outside of the box.
                                        They make me realize things in a different light. They always
                                        makes me feel comfortable and reassured that my feelings are aloud
                                        and are understandable. Thank you for having such a great caring
                                        person on your team.
                                    </ReactReadMoreReadLess>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="bg-light shadow-lg rounded-3 p-4 mb-grid-gutter text-center text-sm-start">
                                <h3 className="h5 mb-2">Anna, Makumbusho</h3>
                                <p className="fs-sm">
                                    <ReactReadMoreReadLess
                                        charLimit={100}
                                        readMoreText={"Read more"}
                                        readLessText={"Read less"}
                                        readMoreStyle={{ color: "#F75A80" }}
                                        readLessStyle={{ color: "#F75A80" }}>
                                        Warm and down-to-earth, but smart and a good listener who
                                        does not take offense at any misunderstandings as my
                                        situation is hard to deal with my most people I know.
                                    </ReactReadMoreReadLess>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}