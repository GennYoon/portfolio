import desktop from "../assets/developer-desktop.jpg";

export default function AboutMeSection() {
  return (
    <div role="about_me" className="md:grid md:grid-cols-2 items-start gap-8">
      <div className="rounded-lg overflow-hidden pb-8">
        <img src={desktop} alt="desktop" />
      </div>
      <div className="pb-8">
        <h3 className="text-[24px] font-bold">About Me</h3>
        <p className="break-words">저는 FullStack Web Developer 입니다.</p>
      </div>

      {/* <div> */}
      {/*   <div>Skills</div> */}
      {/*   <div> */}
      {/*     <ul> */}
      {/*       <li>JavaScript</li> */}
      {/*       <li>TypeScript</li> */}
      {/*       <li>React</li> */}
      {/*       <li>Vite</li> */}
      {/*       <li>Next.js</li> */}
      {/*       <li>Tailwind</li> */}
      {/*       <li>Node.js</li> */}
      {/*       <li>Express</li> */}
      {/*       <li>Nest.js</li> */}
      {/*       <li>PostgreSQL</li> */}
      {/*       <li>TypeORM</li> */}
      {/*       <li>Prisma</li> */}
      {/*       <li>Flutter</li> */}
      {/*       <li>Terraform</li> */}
      {/*     </ul> */}
      {/*   </div> */}
      {/*   <div>Certifications</div> */}
      {/*   <div> */}
      {/*     <ul> */}
      {/*       <li>AWS Cloud Practitioner</li> */}
      {/*     </ul> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
}
