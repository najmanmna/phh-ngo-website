import React from "react";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/Scrolltotop";

const MeetTheTeam = () => {
  const officeBearers = [
    { role: "President", name: "Moosa Ashfaq" },
    { role: "Vice President", name: "Aliza Asad" },
    { role: "General Secretary", name: "Suha Mahar" },
    { role: "Joint Secretary", name: "Aysha Khan" },
    { role: "Treasurer", name: "Ali Abdullah" },
  ];

  const departments = [
    {
      name: "Project Operations Department",
      members: [
        { role: "Director", name: "Zainab Wahaj" },
        { role: "Co-director", name: "Syed Areeb Mahmood" },
        { role: "Field Chief", name: "M. Saad Hashmi" },
      ],
    },
    {
      name: "Finance Department",
      members: [
        { role: "Director", name: "Tooba Ashraf" },
        { role: "Co-Director", name: "S.M. Ali Khalid" },
        { role: "Joint Treasurer", name: "M. Hammad Ali" },
      ],
    },
    {
      name: "Media and Creative",
      members: [
        { role: "Director", name: "Anoushey Batool" },
        { role: "Co-Director", name: "Fatima Ahsan" },
      ],
    },
    {
      name: "Marketing & Outreach",
      members: [
        { role: "Director", name: "Malaika Aqueel" },
        { role: "Co-Director", name: "M. Abubakar Amjad" },
      ],
    },
  ];

  return (
    <div className="">
      <ScrollToTop />
      <Navbar variant="donate" />
      <section className="pt-16 sm:pt-28 px-6 py-12 bg-gradient-to-b from-lime-50 via-white to-lime-100 text-primary min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className=" text-2xl mt-10 md:text-4xl font-bold mb-10">
            Meet the team behind our website.
          </h1>
          {/* <p className="text-sm text-lime-300 mb-8">
            Dedicated minds working to serve the cause
          </p> */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 bg-primary">
              Founder and Chairman
            </h2>
            <h3 className="text-lg font-medium text-primary">
              Dr Syed Osama Zohaib Ullah
            </h3>
          </div>
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 bg-primary">
              Office Bearers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {officeBearers.map(({ role, name }) => (
                <div
                  key={role}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
                >
                  <h3 className="text-lg font-medium text-primary">{role}</h3>
                  <p className="text-gray-500 text-sm">{name}</p>
                </div>
              ))}
            </div>
          </div>
          <h2 className=" text-xl md:text-2xl font-semibold text-white mb-10 bg-primary ">
            Executive Council Members
          </h2>

          {departments.map(({ name, members }) => (
            <>
              <div key={name} className="mb-10">
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                  {name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {members.map(({ role, name }) => (
                    <div
                      key={role + name}
                      className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
                    >
                      <h3 className="text-lg font-medium text-primary">
                        {role}
                      </h3>
                      <p className="text-black text-sm">{name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}

          <div className="mt-16">
            {/* <h2 className="text-xl text-lime-300 font-semibold mb-2">
              Website Developer
            </h2> */}
            {/* <p className="text-white">
              Ahamed Najman (<span className="underline">your@email.com</span>)
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetTheTeam;
