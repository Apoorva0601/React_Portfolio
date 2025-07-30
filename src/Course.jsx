import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import c1 from "./assets/image.png";
import c2 from "./assets/image2.jpg";
import c3 from './assets/image1.png';
import "./Course.css"; // Import the CSS file

const Course = () => {
    const sections = [ 
        {'img': c1, "heading": "MongoDB - The Complete Guide", "dis": "Learned core MongoDB concepts like CRUD, schema design, and aggregation. Integrated MongoDB with Node.js and optimized queries for real-world applications."},
        {'img': c2, "heading": "Wiki E-Learning", "dis": "Gained hands-on experience in creating and editing Wikipedia articles, learned wiki markup language, and contributed to open knowledge platforms as part of the Karavali Wikimedians initiative."},
        {'img': c3, "heading": "Computer Architecture & Organization", "dis": "Explored CPU design, memory hierarchy, and instruction cycles. Understood how hardware components coordinate to execute programs efficiently."},
    ];

    // Duplicate sections for seamless loop
    const duplicatedSections = [...sections, ...sections];

    const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { 
            loop: false, // Disable Embla's loop since we're using CSS animation
            dragFree: true,
            containScroll: false
        },
        []
    );

    const onInit = useCallback((emblaApi) => {
        // Any additional initialization can be done here
    }, []);

    useEffect(() => {
        if (emblaApi) {
            onInit(emblaApi);
        }
    }, [emblaApi, onInit]);

    if (!sections || sections.length === 0) {
        return <p>No sections available</p>;
    }

    return (
        <>
            <h3 className="course-title">
                Courses & Certifications
            </h3>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {duplicatedSections.map((data, index) => (
                            <div className="embla__slide" key={index}>
                                <div className="slide-content">
                                    <div className="slide-inner">
                                        <div className="image-container">
                                            <img 
                                                className="course-image" 
                                                src={data.img} 
                                                alt={`Certificate for ${data.heading}`}
                                                loading="lazy"
                                            /> 
                                        </div>
                                        <div className="text-content">
                                            <h2 className="course-heading">{data.heading}</h2>
                                            <p className="course-description">{data.dis || ''}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Course;