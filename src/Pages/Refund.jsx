import React from "react";
import pcBanner from "../Assets/website-banner/About.png";
import mobileBanner from "../Assets/website-banner/mobile-About.png";
import { Link } from "react-router-dom";

const Refund = () => {
  return (
    <div>
      <div className="pt-20 bg-green-800"></div>
      <div className="overflow-x-hidden relative">
        <img
          className="w-full hidden md:flex mb-7"
          src={pcBanner}
          alt="Facebook Marketing Banner"
        />
        <img
          className="w-full md:hidden mb-7 -mt-14"
          src={mobileBanner}
          alt="Facebook Marketing Banner"
        />
      </div>

      <div className="flex justify-center gap-4 mb-4">
        <Link
          to={"/about"}
          className="btn bg-primary hover:bg-[#056739] border-0 text-white"
        >
          About Us
        </Link>
        <Link
          to={"/privacy_policy"}
          className="btn bg-primary hover:bg-[#056739] border-0 text-white"
        >
          Privacy Policy
        </Link>
        <Link
          to={"/refund_policy"}
          className="btn bg-[#056739] hover:bg-[#056739] border-0 text-white"
        >
          Refund Policy
        </Link>
      </div>

      <div className="my-10 mx-5 md:mx-10 2xl:mx-40 duration-500">
        <p className="text-justify mt-5 text-xl font-extralight text-gray-500">
          At ashrafs.care, we strive to provide exceptional marketing services
          to our clients. We understand that situations may arise where a refund
          is required. This refund policy outlines the terms and conditions
          under which refunds will be issued.
        </p>

        <p className="underline underline-offset-1 mt-5 text-2xl">
          Refund Eligibility:
        </p>
        <ol className="list-decimal list-inside text-justify text-xl font-extralight text-gray-500">
          <li>
            Refunds will be considered only for services that are not running or
            completed.
          </li>
          <li>
            No refunds will be given for any work already completed or delivered
            to the client.
          </li>
          <li>No refunds are provided during the boost period.</li>
          <li>
            If Boost rejects, we'll see why it's rejecting. If there is a
            resolvable reason, we will resolve it. I will refund if it is
            unsolvable.
          </li>
          <li>No refunds are given for designs.</li>
          <li>Refunds are not given on page setup.</li>
          <li>
            If appeal is rejected in case of Facebook Page, ID or Business
            Manager Verify, then refund will be given.
          </li>
        </ol>

        <p className="underline underline-offset-1 mt-5 text-2xl">
          A refund request:
        </p>
        <ol className="list-decimal list-inside text-justify text-xl font-extralight text-gray-500">
          <li>
            To request a refund, the client must submit the request stating his
            page name, phone number, order ID and transaction ID, detailing the
            reasons for the refund and providing any relevant supporting
            documentation.
          </li>
          <li>Refund requests must specify the date of service.</li>
        </ol>

        <p className="underline underline-offset-1 mt-5 text-2xl">
          Refund Evaluation and Approval:
        </p>
        <ol className="list-decimal list-inside text-justify text-xl font-extralight text-gray-500">
          <li>
            Each refund request will be carefully evaluated by our management
            team.
          </li>
          <li>
            We reserve the right to request additional information or
            clarification regarding refund requests.
          </li>
          <li>
            Refunds will be approved or denied at our sole discretion, based on
            the merits of the request and the circumstances involved.
          </li>
        </ol>

        <p className="underline underline-offset-1 mt-5 text-2xl">
          Refund Processing:
        </p>
        <ol className="list-decimal list-inside text-justify text-xl font-extralight text-gray-500">
          <li>
            If a refund request is approved, we will begin the refund process
            within 3-5.
          </li>
          <li>
            If there is any cost in the field of service, the rest is refunded
            after deducting the cost.
          </li>
          <li>Mobile banking charges are non-refundable.</li>
          <li>
            Depending on the payment method and financial institution, it may
            take additional time for the refund to appear in the client's
            account.
          </li>
        </ol>

        <p className="underline underline-offset-1 mt-5 text-2xl">
          Refund Processing:
        </p>
        <ol className="list-decimal list-inside text-justify text-xl font-extralight text-gray-500">
          <li>
            There are certain circumstances where a refund will not be granted,
            including but not limited to:
          </li>
          <ol className="list-[lower-roman] list-inside text-justify text-xl font-extralight text-gray-500 mx-5">
            <li>No refunds are given if the client's product is not sold.</li>
            <li>
              Dissatisfaction with the creative or subjective aspects of a given
              job.
            </li>
            <li>
              Failure on the part of the client to provide necessary information
              or cooperation which may hinder the completion of the project.
            </li>
            <li>
              Termination of contract by client after commencement of project.
            </li>
          </ol>
          <li>Disputes and Arbitration:</li>
          <ol className="list-[lower-roman] list-inside text-justify text-xl font-extralight text-gray-500 mx-5">
            <li>
              In the event of a dispute regarding a refund request, both parties
              agree to engage in good faith negotiations to reach a resolution.
            </li>
            <li>
              If a settlement cannot be reached through negotiation, the dispute
              shall be referred to binding arbitration in accordance with
              [jurisdiction] law.
            </li>
          </ol>
        </ol>

        <p className="text-justify mt-5 text-xl font-extralight text-gray-500">
          Please note that this refund policy applies only to services provided
          by ashrafs.care and does not cover any third party products or
          services recommended or used in conjunction with our services.
        </p>

        <p className="text-justify mt-5 text-xl font-extralight text-gray-500">
          We recommend that clients review this return policy carefully before
          engaging in our services. By engaging our services, the client
          acknowledges and agrees to abide by the terms and conditions set forth
          in this Refund Policy.
        </p>

        <p className="text-justify mt-5 text-xl font-extralight text-gray-500">
          If you have any queries or need further clarification on our refund
          policy, please contact us at ashrafs.care@gmail.com.
        </p>

        <p className="text-justify mt-5 text-xl font-extralight text-gray-500">
          ashrafs.care
        </p>
        <p className="text-justify text-xl font-extralight text-gray-500">
          Purba Naodoba, Jazira, Shariatpur.
        </p>
        <p className="text-justify text-xl font-extralight text-gray-500">
          01970349129
        </p>
        <p className="text-justify text-xl font-extralight text-gray-500">
          ashrafs.care@gmail.com
        </p>
        <p className="text-justify text-xl font-extralight text-gray-500">
          www.ashrafs.care
        </p>
      </div>
    </div>
  );
};

export default Refund;
