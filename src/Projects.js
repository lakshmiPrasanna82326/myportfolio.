import React from 'react'
import bookshell1 from "./images/bookshell1.png";
import student from './images/student.png';
import poolmyride from './images/poolmyride.png';
import myportfolio from './images/myportfolio.png';

const Projects = () => {
  return (
    <>
       <hr className='w-[70px] mx-auto bg-purple-800 h-2 border-spacing-0 rounded-lg mt-[100px]'/>
      <h1 id="projects-heading" className='bg-black text-white m-0 pt-0 text-center h-20 text-[40px]'>My Projects</h1>
      <section className="projects-container h-[100vh] flex-column mb-80   " id="myprojects">
       
        <div className="projects  myprojects" id="project1">
          <div>
          <h1 className='text-center text-[25px] '>Pool My Ride</h1>
          <p className='w-[550px] ml-8'>
            Pool My Ride is a platform for sharing a ride,here in this website users can login and view the details of the ride like car details,date and time  of the ride, car owner details, etc., this idea of sharing ride can show impact on traffic problems and can lead to less fuel consumption by the people. 
          </p>
          <div className='ml-8 mt-6'>
            <p>Skills used:  <p className='ml-6 inline'>HTML, CSS, Tailwind CSS, ReactJS</p></p>
          <p>Website:
          <a className="ml-12 text-green-600 hover:text-green-400 hover:underline" href="https://lakshmiprasanna82326.github.io/poolmyride./" target="blank">poolmyride.com</a></p>
          <p>Github code:
          <a className="ml-3 text-green-600 hover:text-green-400 hover:underline" href=" https://github.com/lakshmiPrasanna82326/poolmyride." target="blank">Github/lakshmiprasanna/poolmyride</a></p>
          </div>
          </div>
          <div className='m-0'><img  className="h-[260px] w-[400px] "  src={poolmyride} alt="poolmyride.com"/></div>
        </div>

        <div className="projects h-[320px] w-[1200px] ml-[150px] mt-4 text-left p-6 flex items-stretch space-x-52" id="project2">
          <div className=''>
          <h1 className='text-center text-[25px]'>Book shell</h1>
          <p className='ml-8 w-[550px]'>Bookshell is a website  for sellling and buying books of many types like academic books,self help books and many more,users can login and check various types of books available on the website.</p>
          
          <div className='ml-8 mt-6'>
          <p>Skills used:<p className='ml-8 inline'>HTML,CSS, TAilwind CSS, ReactJs</p></p>  
          <p>Website: <a className="ml-12 text-green-600 hover:text-green-400 hover:underline" href="https://lakshmiprasanna82326.github.io/bookshell./" target="blank">bookshell.com</a></p>
          <p>Github Code:<a className="ml-5 text-green-600 hover:text-green-400 hover:underline"href="https://github.com/lakshmiPrasanna82326/bookshel." target="blank">Github/lakshmiprasanna/bookshell</a></p>
           
          </div>
          </div>
          <div className=''>
          <img  className="h-[260px] w-[400px] "  src={bookshell1} alt="bookshell.com"/></div>
        </div>

        <div className="projects myprojects" id="project3">
          <div>
          <h1 className='text-center text-[25px]'>Student</h1>
          <p className='ml-8 w-[550px]'>
            Student is a website for KITS engineering college,here in this users can view all the details about the college like available courses, events happened in the college, placements and many more.
          </p>
          
          <div className='ml-8 mt-6'>
          <p>Skills used:<p className='ml-8 inline'>HTML,CSS, TAilwind CSS, ReactJs</p></p>  
         <p>Website:<a className='ml-12  text-green-600 hover:text-green-400 hover:underline ' href=" https://lakshmiprasanna82326.github.io/student./
" target="blank">student.com</a></p>
          
<p>Github_code:<a  className="ml-4 text-green-600 hover:text-green-400 hover:underline" href="https://github.com/lakshmiPrasanna82326/student." target="blank">Github/lakshmiprasanna/student</a></p>

</div>
        </div>
        <div><img  className="h-[260px] w-[400px] "  src={student} alt="student.com"/></div>
        </div>


        <div className="projects  myprojects" id="project1">
          <div>
          <h1 className='text-center text-[25px] '>My Portfolio</h1>
          <p className='w-[550px] ml-8'>
            MY Portfolio is my own website that contains all my projects, skill set, my resume and my contact information, I build this website for my own to showcasing all my projects and skills. 
          </p>
          <div className='ml-8 mt-6'>
            <p>Skills used:  <p className='ml-6 inline'>HTML, CSS, Tailwind CSS, ReactJS</p></p>
          <p>Website:
          <a className="ml-12 text-green-600 hover:text-green-400 hover:underline" href="https://lakshmiprasanna82326.github.io/myportfolio./" target="blank">lakshmiPrasanna.com</a></p>
          <p>Github code:
          <a className="ml-3 text-green-600 hover:text-green-400 hover:underline" href=" https://github.com/lakshmiPrasanna82326/myportfolio." target="blank">Github/lakshmiprasanna</a></p>
          </div>
          </div>
          <div className='m-0'><img  className="h-[260px] w-[400px] "  src={myportfolio} alt="myportfolio.com"/></div>
        </div>
       
      </section>
      </>
  )
}

export default Projects
