import React from 'react';

const Faqs = () => {
    return (
        <div className="container mt-5">
            <h2 className="font-oswald fw-bold fs-1"><span className="color-reguler">Frequently</span> Asked Question</h2>

            <div class="accordion my-5" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        A good test could save your eye vision
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        There are countless reasons why you should attend regular eye examinations - not just for the obvious reasons such as to determine what prescription you need, but also because an eye check can potentially save your life. In fact, hundreds of lives could be saved each and every year if more people just attended regular, routine eye exams.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Service that’ll make you see us with your eyes
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Suspendisse finibus urna mauris, lorem ipsum is simply free text vitae consequat quam vel. Vestibulum leo ligula, available to the market for the new stuff vitae commodo nisl.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        We’re ready to protect your vision
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        You already know that spending too much time in the sun can damage unprotected skin and increase your risk of developing skin cancer. That’s why you use sunscreen, cover your skin, and try to avoid the strong midday sunlight.But did you know that exposing your unprotected eyes to too much ultraviolet (UV) radiation can also damage the sensitive cells in your retinas, leaving them vulnerable to developing serious conditions that can lead to long-term vision loss?
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;