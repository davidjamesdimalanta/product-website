import React from "react";
import ServiceCard from "./ServiceCard";
import service from "../data/service";
import 'animate.css'

function Services() {
    return (
        <div className="flex flex-col gap-2 sm:flex-col md:flex-row intersect:animate-fadeIn intersect-once">
         {service.map(service => (
          <ServiceCard
            title={service.title}
            desc={service.desc}
            imgUrl={service.imgUrl}
            link={service.link}
          />
        ))}
      </div>
    )
}

export default Services