import React from "react";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/Scrolltotop";

const MeetTheTeam = () => {
  const officeBearers = [
    { role: "President", name: "Moosa Ashfaq", class: "SMC Class of 2026" },
    { role: "Vice President", name: "Aliza Asad", class: "SMC Class of 2026" },
    {
      role: "General Secretary",
      name: "Suha Mahar",
      class: "SMC Class of 2026",
    },
    { role: "Joint Secretary", name: "Aysha Khan", class: "SMC Class of 2026" },
    { role: "Treasurer", name: "Ali Abdullah", class: "SMC Class of 2026" },
  ];

  const departments = [
    {
      name: "Project Operations Department",
      members: [
        { role: "Director", name: "Zainab Wahaj", class: "SMC Class of 2026" },
        {
          role: "Co-director",
          name: "Syed Areeb Mahmood",
          class: "SMC Class of 2028",
        },
        {
          role: "Field Chief",
          name: "M. Saad Hashmi",
          class: "SMC Class of 2028",
        },
      ],
    },
    {
      name: "Finance Department",
      members: [
        { role: "Director", name: "Tooba Ashraf", class: "SMC Class of 2028" },
        {
          role: "Co-Director",
          name: "S.M. Ali Khalid",
          class: "SMC Class of 2029",
        },
        {
          role: "Joint Treasurer",
          name: "M. Hammad Ali",
          class: "SMC Class of 2028",
        },
      ],
    },
    {
      name: "Media and Creative",
      members: [
        {
          role: "Director",
          name: "Anoushey Batool",
          class: "SMC Class of 2028",
        },
        {
          role: "Co-Director",
          name: "Fatima Ahsan",
          class: "SMC Class of 2027",
        },
      ],
    },
    {
      name: "Marketing & Outreach",
      members: [
        {
          role: "Director",
          name: "Malaika Aqueel",
          class: "SMC Class of 2028",
        },
        {
          role: "Co-Director",
          name: "M. Abubakar Amjad",
          class: "SMC Class of 2029",
        },
      ],
    },
  ];

  const foundingMembers = [
    {
      name: "Dr. Syed Osama Zohaib Ullah",
      info: "Chairman, Board of Governors | SMC Class of 2012",
    },
    { name: "Dr. Mustafa Tai", info: "SMC Class of 2014" },
    {
      name: "Dr. Mohammad Fahad Nasser",
      info: "SMC Class of 2012",
    },
    { name: "Dr. Hassan Ahmed", info: "SMC Class of 2012" },
    { name: "Dr. Ahmer Mansuri", info: "SMC Class of 2014" },
    {
      name: "Dr. Muhammad Fahad Javed",
      info: "SMC Class of 2012",
    },
    {
      name: "Dr. Mohammad Zeeshan Nasser",
      info: "SMC Class of 2012",
    },
    {
      name: "Dr. Syed Saad Nizami",
      info: "SMC Class of 2014",
    },
    {
      name: "Dr. Syed Sohaib Nizami",
      info: "SMC Class of 2014",
    },
    { name: "Dr. Muhammad Zaid", info: "SMC Class of 2013" },
    { name: "Dr. Ahzam Arif", info: "SMC Class of 2016" },
    {
      name: "Dr. Mohammed Ali Alvi",
      info: "SMC Class of 2016",
    },
  ];

  return (
    <div className="">
      <ScrollToTop />
      <Navbar variant="donate" />
      <section className="pt-16 sm:pt-28 px-6 py-12 bg-gradient-to-b from-lime-50 via-white to-lime-100 text-primary min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl mt-10 md:text-4xl font-bold mb-10">
            Meet the Team
          </h1>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 bg-primary">
              Founder and Chairman
            </h2>
            <h3 className="text-lg font-medium text-primary">
              Dr Syed Osama Zohaib Ullah
            </h3>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 bg-primary">
              Office Bearers ( 2025 - 26 )
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {officeBearers.map(({ role, name, class: classYear }) => (
                <div
                  key={role}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
                >
                  <h3 className="text-lg font-medium text-primary">{role}</h3>
                  <p className="text-gray-700 text-sm font-semibold">{name}</p>
                  <p className="text-gray-500 text-xs">{classYear}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white mb-10 bg-primary">
            Executive Council Members ( 2025 - 26 )
          </h2>

          {departments.map(({ name, members }) => (
            <div key={name} className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                {name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {members.map(({ role, name, class: classYear }) => (
                  <div
                    key={role + name}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
                  >
                    <h3 className="text-lg font-medium text-primary">{role}</h3>
                    <p className="text-gray-700 text-sm font-semibold">
                      {name}
                    </p>
                    <p className="text-gray-500 text-xs">{classYear}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mb-10 mt-16">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 bg-primary">
              Founding Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {foundingMembers.map(({ name, info }) => (
                <div
                  key={name}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
                >
                  <p className="text-gray-700 text-sm font-semibold">{name}</p>
                  <p className="text-gray-500 text-xs">{info}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-lg text-gray-600 font-semibold mb-2">
              Website Developer
            </h2>
            <p className="text-black font-normal">
              <a
                href="https://www.ahamednajman.me"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={(e) => {
                  const win = window.open(
                    "https://www.ahamednajman.me",
                    "_blank"
                  );
                  if (!win || win.closed || typeof win.closed === "undefined") {
                    window.location.href = "mailto:najmanmna@gmail.com";
                  }
                }}
              >
                Ahamed Najman
              </a>{" "}
              (<span className="">najman.dev@gmail.com</span>)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetTheTeam;
