import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

import {
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export const socialData = [
  // {
  //   name: "YouTube",
  //   link: "http://youtube.com/@mahad.08",
  //   Icon: RiYoutubeLine,
  // },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/ensemble-ai-co",
    Icon: FaLinkedin,
  },
  {
    name: "Instagram",
    // link: "https://instagram.com/mahad.08",
    link: "https://www.instagram.com/ensembleaico1",
    Icon: RiInstagramLine,
  },
  {
    name: "Email",
    link: "mailto:ensembleaico1@gmail.com",
    Icon: FaEnvelope,
  },
  // {
  //   name: "Facebook",
  //   link: "https://facebook.com",
  //   Icon: RiFacebookLine,
  // },
  // {
  //   name: "Dribbble",
  //   link: "https://dribbble.com",
  //   Icon: RiDribbbleLine,
  // },
  // {
  //   name: "Pinterest",
  //   link: "https://pinterest.com",
  //   Icon: RiPinterestLine,
  // },
  // {
  //   name: "Github",
  //   link: "https://github.com/mahad002",
  //   Icon: RiGithubLine,
  // },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
