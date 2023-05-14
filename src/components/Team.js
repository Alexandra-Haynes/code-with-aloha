import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'

const TeamMember =({src, name})=> {
   return (
     <div className="flex flex-col justify-center m-8 text-center hover:scale-105">
       <img
         alt=""
         className="self-center  flex-shrink-0 w-32 h-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
         src={src}
       />
       <p className="text-xl font-semibold leading-tight">{name}</p>
      
     </div>
   );
}

const Team = () => {
  return (
    <>
      <h4 className=" text-4xl lg:text-6xl font-semibold font-satisfy w-2/3 text-center pt-40 xl:pt-20 mb-8 ">
        Be part of our story
      </h4>
      <p className="text-lg font-semibold py-4 text-center xl:w-1/2">
        You can join any
        <a
          href="#join"
          className="text-cyan-400 hover:text-orange-500 hover:underline underline-offset-4 px-2"
        >
          MeetUp
        </a>{" "}
        event and be part of the Code with Aloha team. We meet the first three
        Mondays of every month. Join us, even just to say Aloha!
      </p>
      <div className="flex flex-row items-center justify-center py-4">
        <AiOutlineMail fontSize="2rem" />

        <h2 className="pl-2">
          Email:
          <span className="text-xl hover:underline underline-offset-4 px-2">
            info@codeforhawaii.org
          </span>{" "}
        </h2>
      </div>

      <div className="container flex flex-col items-center justify-center  mx-auto pt-10 pb-20">
        <div className="flex flex-row flex-wrap justify-center ">
          <TeamMember src="./assets/TreyGordner.jpeg/" name="Trey Gordner" />
          <TeamMember src="./assets/TylerChong.jpeg/" name="Tyler Chong" />
          <TeamMember src="./assets/MikeAvendano.jpeg/" name="Mike Avendano" />
          <TeamMember src="./assets/KurtMalley.jpeg/" name="Kurt Malley" />
        </div>
      </div>
    </>
  );
}

export default Team
