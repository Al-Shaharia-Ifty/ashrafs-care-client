import React, { useState } from "react";

const QNA = () => {
  const [close, setClose] = useState("");
  return (
    <div className="py-5">
      <h2 className="text-center text-3xl md:text-4xl text-primary pt-16 pb-10">
        Frequently Asked Question
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 px-10 gap-5 pb-16">
        <div
          onClick={() => setClose(<input type="checkbox" />)}
          onBlur={() => setClose("")}
          className=""
        >
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-2xl bg-[#C7EAFB94]"
          >
            {close}
            <div className="collapse-title text-xl font-medium">
              পেজ সেটআপ এর প্যাকেজ সম্পর্কে জানতে চাই?
            </div>
            <div className="collapse-content">
              <p>আমরা আপনার পেজকে প্রফেশনালি সেটআপ করে দিব।</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setClose(<input type="checkbox" />)}
          onBlur={() => setClose("")}
          className=""
        >
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-2xl bg-[#C7EAFB94]"
          >
            {close}
            <div className="collapse-title text-xl font-medium">
              প্রোমোট করতে চাই। কিভাবে করব?
            </div>
            <div className="collapse-content">
              <p>আপনার কত হাজার লাইক লাগবে?</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setClose(<input type="checkbox" />)}
          onBlur={() => setClose("")}
          className=""
        >
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-2xl bg-[#C7EAFB94]"
          >
            {close}
            <div className="collapse-title text-xl font-medium">
              পেজ সেটআপ এর প্যাকেজ সম্পর্কে জানতে চাই?
            </div>
            <div className="collapse-content">
              <p>আমরা আপনার পেজকে প্রফেশনালি সেটআপ করে দিব।</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setClose(<input type="checkbox" />)}
          onBlur={() => setClose("")}
          className=""
        >
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-2xl bg-[#C7EAFB94]"
          >
            {close}
            <div className="collapse-title text-xl font-medium">
              প্রোমোট করতে চাই। কিভাবে করব?
            </div>
            <div className="collapse-content">
              <p>আপনার কত হাজার লাইক লাগবে?</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setClose(<input type="checkbox" />)}
          onBlur={() => setClose("")}
          className=""
        >
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-2xl bg-[#C7EAFB94]"
          >
            {close}
            <div className="collapse-title text-xl font-medium">
              প্রোডাক্ট ডিজাইন চার্জ কত?
            </div>
            <div className="collapse-content">
              <p>৫০০-৮০০/-টাকা</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setClose(<input type="checkbox" />)}
          onBlur={() => setClose("")}
          className=""
        >
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-2xl bg-[#C7EAFB94]"
          >
            {close}
            <div className="collapse-title text-xl font-medium">
              কিভাবে পেইজের এর এডিটর বানাবো?
            </div>
            <div className="collapse-content">
              <p>
                পেজের এডিটর বানানোর নিয়ম পেজের সেটিং, পেজ রুলস, পাসওয়ার্ড চাইতে
                পারে, এড পারসন।
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setClose(<input type="checkbox" />)}
          onBlur={() => setClose("")}
          className=""
        >
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-2xl bg-[#C7EAFB94]"
          >
            {close}
            <div className="collapse-title text-xl font-medium">
              কিভাবে পেইজের এর এডিটর বানাবো?
            </div>
            <div className="collapse-content">
              <p>
                পেজের এডিটর বানানোর নিয়ম পেজের সেটিং, পেজ রুলস, পাসওয়ার্ড চাইতে
                পারে, এড পারসন।
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setClose(<input type="checkbox" />)}
          onBlur={() => setClose("")}
          className=""
        >
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-2xl bg-[#C7EAFB94]"
          >
            {close}
            <div className="collapse-title text-xl font-medium">
              আপনাদের পেমেন্ট সিস্টেম কি?
            </div>
            <div className="collapse-content">
              <p>বিকাশ/নগদ/ব্যাংক</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QNA;
/*

        
        
        
        
        
*/
