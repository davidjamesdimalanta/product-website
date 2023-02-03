import React from "react";
import ServiceCard from "./ServiceCard";
import service from "../data/service";
import 'animate.css'

function Services() {
    return (
        <div className="flex flex-col gap-3 sm:flex-col md:flex-row intersect:animate-fadeIn intersect-once">
         {service.map(service => (
          <ServiceCard
            title={service.title}
            desc={service.desc}
            imgUrl={service.imgUrl}
            bb5b={service.bb5b}
          />
        ))}
      </div>
    )
}

export default Services