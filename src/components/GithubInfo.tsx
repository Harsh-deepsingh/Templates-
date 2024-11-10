import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import GithubGraph from "./GithubGraph";

const GithubInfo = async () => {
  const res = await fetch("https://api.github.com/users/Harsh-deepsingh");
  const githubInfo = await res.json();

  return (
    <div className="flex gap-2">
      <Link href={githubInfo.html_url} target="blank">
        <FiGithub></FiGithub>
        {githubInfo.name}

        <Image
          src={githubInfo.avatar_url}
          alt={githubInfo.name}
          width={100}
          height={100}
          className="rounded-full "
        />
        <GithubGraph></GithubGraph>
        <ul>
          <li></li>
          <li>{githubInfo.location}</li>
          <li>{githubInfo.hireable}</li>
          <li>{githubInfo.followers}</li>
          <li>{githubInfo.following}</li>
          <li>{githubInfo.bio}</li>
        </ul>
      </Link>
    </div>
  );
};

export default GithubInfo;
