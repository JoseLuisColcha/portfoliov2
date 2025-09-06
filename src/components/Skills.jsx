import { SkillsCard } from './SkillsCard'
import { TitleSection } from './TitleSection'
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5'
import {
  SiCplusplus,
  SiApachecouchdb,
  SiPostman,
  SiGreensock,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { DiMysql, DiMongodb, DiPhotoshop, DiIllustrator } from 'react-icons/di'
import { RiTailwindCssFill, RiSupabaseFill } from 'react-icons/ri'
import { BsFiletypeSql } from 'react-icons/bs'

import {
  FaPython,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaAngular,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaGitkraken,
  FaDocker,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa'

export const Skills = () => {
  const SKILLS_OPTIONS = [
    {
      title: 'LENGUAJES DE PROGRAMACIÓN',
      items: [
        {
          icon: <IoLogoJavascript />,
          title: 'JavaScript',
        },
        {
          icon: <FaJava />,
          title: 'Java',
        },

        {
          icon: <FaPhp />,
          title: 'Php',
        },
        {
          icon: <SiCplusplus />,
          title: 'C++',
        },
        {
          icon: <TbBrandCSharp />,
          title: 'C#',
        },
        {
          icon: <BsFiletypeSql />,
          title: 'SQL',
        },
        {
          icon: <FaPython />,
          title: 'Python',
        },
      ],
    },
    {
      title: 'TECNOLOGÍAS Y FRAMEWORKS FRONTEND',
      items: [
        {
          icon: <FaHtml5 />,
          title: 'HTML',
        },
        {
          icon: <FaCss3Alt />,
          title: 'CSS',
        },

        {
          icon: <FaBootstrap />,
          title: 'Bootstrap',
        },
        {
          icon: <FaReact />,
          title: 'React',
        },
        {
          icon: <FaAngular />,
          title: 'Angular',
        },
        {
          icon: <RiTailwindCssFill />,
          title: 'TailwindCss',
        },
        {
          icon: <SiGreensock />,
          title: 'GSAP',
        },
      ],
    },
    {
      title: 'TECNOLOGÍAS Y FRAMEWORKS BACKEND',
      items: [
        {
          icon: <FaLaravel />,
          title: 'Laravel',
        },
        {
          icon: <DiMongodb />,
          title: 'MongoDB',
        },
        {
          icon: <DiMysql />,
          title: 'MySQL',
        },
        {
          icon: <SiApachecouchdb />,
          title: 'CouchDB',
        },
        {
          icon: <IoLogoFirebase />,
          title: 'Firebase',
        },
        {
          icon: <RiSupabaseFill />,
          title: 'Supabase',
        },
      ],
    },
    {
      title: 'CONTROL DE VERSIONES',
      items: [
        {
          icon: <FaGitAlt />,
          title: 'Git',
        },
        {
          icon: <FaGithub />,
          title: 'Github',
        },

        {
          icon: <FaGitkraken />,
          title: 'Gitkraken',
        },
      ],
    },
    {
      title: 'OTROS',
      items: [
        {
          icon: <FaDocker />,
          title: 'Docker',
        },
        {
          icon: <SiPostman />,
          title: 'Postman',
        },

        {
          icon: <FaWordpress />,
          title: 'Wordpress',
        },
        {
          icon: <FaFigma />,
          title: 'Figma ',
        },
        {
          icon: <DiPhotoshop />,
          title: 'Photoshop',
        },

        {
          icon: <DiIllustrator />,
          title: 'Illustrator',
        },
      ],
    },
  ]

  return (
    <div className="col-center px-[8vw] sm:px-0">
      <TitleSection title="HABILIDADES" subtitle="MI STACK" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS_OPTIONS.map((skill, index) => (
          <SkillsCard key={index} title={skill.title} skills={skill.items} />
        ))}
      </section>
    </div>
  )
}
