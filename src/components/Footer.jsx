// src/components/Footer.js
import GmailIcon from "../assets/gmail.png";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";

const Footer = ({ teamMembers, email }) => {
  return (
    <div className="w-[100%] flex flex-col gap-8 justify-center items-center">
      {/* Heading and Email */}
      <div className="w-[100%] md:w-[80%] lg:w-[60%] flex justify-between items-center px-4">
        <h3 className="text-2xl font-semibold">Let&apos;s Work Together -</h3>
        <a href={`mailto:${email}`} className="flex gap-2 items-center justify-center py-2 px-4 border border-[#484E53] rounded-full">
          <img src={GmailIcon} alt="Gmail" className="w-6" />
          <p className="text-xs">{email}</p>
        </a>
      </div>

      {/* Divider */}
      <div className="w-[100%] h-[1px] bg-[#484E53]"></div>

      {/* Links */}
      <div className="w-[100%] flex flex-col gap-2 self-start px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-[100%] flex justify-between sm:gap-10 sm:justify-center"
          >
            <div className="w-[200px] flex gap-2 items-center">
              <img src={GithubIcon} alt="Github" className="px-2 py-2" />
              <a target="_blank" href={member.githubLink} className="text-xs">
                {member.githubUsername}
              </a>
            </div>
            <div className="w-[200px] flex gap-2 items-center">
              <img src={LinkedinIcon} alt="Linkedin" className="px-2 py-2" />
              <a target="_blank" href={member.linkedinLink} className="text-xs">
                {member.linkedinName}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer End */}
      <div className="text-xs mb-6">©️ 2024 all rights reserved.</div>
    </div>
  );
};

export default Footer;
