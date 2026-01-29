"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function WhyAutobon() {
  return (
    <div className="py-8 md:py-12 ">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-10">
        Why Buy Your Next Car From Autonbon?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Overview Column */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
            Autobon isn&apos;t a classifieds marketplace and it&apos;s not a
            traditional dealership—
            <span className="font-semibold ">
              {" "}
              we own every vehicle we sell
            </span>
            . We purchase cars directly from their previous owners, then put
            each one through professional reconditioning and a meticulous
            210-point inspection so it meets our strict standards for quality
            and safety. By skipping auctions and middlemen, we deliver
            transparent pricing, quality vehicles, and zero surprises.
          </p>

          <ul className="space-y-4 text-sm md:text-base">
            <li className="text-gray-600">
              <span className="font-bold ">Direct-from-owner sourcing</span> –
              Better vehicle histories and tighter quality control from day one.
            </li>
            <li className="text-gray-600">
              <span className="font-bold ">In-house reconditioning</span> –
              Professional detailing, OEM-grade parts, and strict quality
              standards.
            </li>
            <li className="text-gray-600">
              <span className="font-bold ">Convenient at-home delivery</span> –
              Pick a time and place, and we&apos;ll bring the car to your door
              (delivery fees vary by location).
            </li>
            <li className="text-gray-600">
              <span className="font-bold ">10-Day Money-Back Guarantee</span> –
              Drive it for up to 10 days or 750 km; return it if it&apos;s not
              the right fit.
            </li>
            <li className="text-gray-600">
              <span className="font-bold ">
                Optional 3-month warranty & additional protection plans
              </span>{" "}
              – Add extra coverage and roadside assistance for additional peace
              of mind.
            </li>
          </ul>
        </div>

        {/* Key Benefits Column */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
            Choosing a pre-owned vehicle lets you maximize value, upgrade
            features, and keep more money in your pocket from day one.
          </p>

          <ul className="space-y-4 text-sm md:text-base">
            <li className="text-gray-600">
              <span className="font-bold ">Lower depreciation</span> – Skip the
              first-owner drop and lock in better resale value.
            </li>
            <li className="text-gray-600">
              <span className="font-bold ">More car for your budget</span> –
              Stretch your dollar into a higher trim, luxury badge, or EV.
            </li>
            <li className="text-gray-600">
              <span className="font-bold ">Proven reliability</span> – Research
              real-world owner reviews before you buy.
            </li>
            <li className="text-gray-600">
              <span className="font-bold ">Lower insurance costs</span> –
              Premiums are typically lower on pre-owned vehicles.
            </li>
          </ul>
        </div>
      </div>

      {/* Potential Trade-offs Section */}
      <div className="mt-8 md:mt-12">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Potential Trade-offs
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
          Buying used offers big savings, but it&apos;s smart to weigh a few
          considerations before you purchase.
        </p>

        <ul className="space-y-4 text-sm md:text-base">
          <li className="text-gray-600">
            <span className="font-bold ">Previous Ownership History</span> –
            Every pre-owned vehicle has a unique story. Reviewing service
            records and vehicle-history reports helps you understand how the car
            was maintained before it reached you.
          </li>
          <li className="text-gray-600">
            <span className="font-bold ">Financing Rate Differences</span> –
            Auto loans for used cars sometimes carry higher APRs than
            promotional rates on new vehicles, but the lower purchase price
            usually keeps the total cost of ownership in check.
          </li>
          <li className="text-gray-600">
            <span className="font-bold ">Evolving Tech & Safety Features</span>{" "}
            – Older model years may not include the very latest
            driver-assistance suites, wireless updates, or infotainment upgrades
            found on brand-new releases.
          </li>
          <li className="text-gray-600">
            <span className="font-bold ">High-Demand Models Sell Fast</span> –
            Popular picks like the Toyota RAV4, Honda CR-V, and Ford F-150 move
            quickly. If you spot the right fit at the right price, be ready to
            act.
          </li>
        </ul>
      </div>
    </div>
  );
}
