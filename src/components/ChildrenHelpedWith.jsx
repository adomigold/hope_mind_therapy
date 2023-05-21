import React from "react";

export default function ChildrenHelpedWith() {
    return (
        <>
            <div className="col-lg-4 col-md-5 order-md-2 text-center text-md-start mb-5 mb-md-0">
                <h2 className="mb-3">Succesful Stories</h2>
                <p className="text-muted mb-4 pb-2">
                    These quotes represent a few of the many positive reviews that we have received for
                    therapists who work with Hope Mind Therapy.
                </p>
                <p>
                    <strong>Convenient and affordable therapy with Hope Mind Therapy:</strong>
                </p>
                <ul className="list-unstyled fs-sm pb-1 d-table mx-auto mx-md-0">
                    <li className="d-flex mb-2"><i className="ai-check-circle text-success fs-lg me-3"></i><span>All therapists are licensed, accredited professionals. BetterHelp allows you to connect with them in a safe and convenient online environment.</span></li>
                    <li className="d-flex mb-2"><i className="ai-check-circle text-success fs-lg me-3"></i><span>Pay a low flat fee for unlimited therapy with your therapist. Therapy doesn't have to be expensive.</span></li>
                    <li className="d-flex mb-2"><i className="ai-check-circle text-success fs-lg me-3"></i><span>Do it at your own time and at your own pace. Communicate with your therapist as often as you want and whenever you feel it's needed</span></li>
                    <li className="d-flex mb-2"><i className="ai-check-circle text-success fs-lg me-3"></i><span>Thousands of people have benefitted from therapy (just check out their reviews!) With BetterHelp, you can switch therapists at any point if you don't feel you are getting enough benefit.</span></li>
                </ul>
            </div>
        </>
    )
}