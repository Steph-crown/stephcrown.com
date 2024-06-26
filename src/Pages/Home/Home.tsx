import { APP_ROUTES } from 'Constants'
import { ArrowRightIcon } from 'Assets/Svgs'
import { ImageHoverSwitch } from 'Components'
import { Link } from 'react-router-dom'
import { PersonViewingMicroscope } from 'Assets/Pngs'

const Home = () => {
  const visualMetaphorAlt = 'Visual metaphor: Examining details closely like a detective scrutinizing evidence in a case'

  return (
    <div className='h-full flex-col justify-between flex'>
      <div className='mb-10'>
        <h1 className='h1'>{'</>'}</h1>

        <article className='max-w-[757px]'>
          <h1 className='my-2 h1' data-aos='fade-up'>
            <span className='h1-alt'>Hey there, I am</span>
            <br />
            Stephen Emmanuel<span className='h1-alt'>.</span>
          </h1>
          {/*  */}

          <p className='font-MSXenonMediumItalic text-sm text-fg/40-light dark:text-fg/40-dark'>
            {'{/*'} also known as <span className='text-fg/60-light dark:text-fg/60-dark font-MSXenonMediumItalic'>Steph Crown</span> {'*/}'}
          </p>

          <p className='p' data-aos='fade-up'>
            I&apos;m a software engineer with over 5 years of experience. I love building cool and useful digital products. I&apos;m a problem-solver
            and enjoy finding clever and simple ways to make things work well for users. I can work on all parts of a software project, from the user
            interface to the inner workings. My goal is to create well-built systems that people love to use. I&apos;m always learning new things, and
            I&apos;m especially interested in machine learning, artificial intelligence, and the Internet of Things.
          </p>

          <p className='p'>I write articles, text-based courses, and build software applications.</p>
        </article>

        <Link to={APP_ROUTES.Contact} className='btn w-max'>
          Send a message <ArrowRightIcon />
        </Link>
      </div>

      <div className='tooltip'>
        <ImageHoverSwitch imgSrc={PersonViewingMicroscope} alt={visualMetaphorAlt} />

        <p className='tooltip-content p'>{visualMetaphorAlt}</p>
      </div>
    </div>
  )
}

export default Home
