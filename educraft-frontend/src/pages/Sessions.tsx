import SessionCard from "../components/SessionCard"
import Navbar from "../components/Navbar";
const Sessions = () => {
  return (

    <>
      <Navbar />
      <div className=" bg-blue-100  mt-8 p-4" id="Sessions" >

        <div className="text-center pt-20 pb-10">
                    <h1 className='text-3xl text-indigoDeep font-bold mb-4'>Active Sessions</h1>
                    <h2 className='text-lg h-20 text-gray-700 mx-auto text-center leading-relaxed tracking-wide'>
                            Explore Engaging Lessons, Tailored Programs,
                            and Hands-on Learning Experiences that Empower <br/>  
                            You to Unlock Your Full Potential and Achieve Success in
                            Your Educational Journey.
                    </h2>
            </div>
    

          <div className="grid grid-col-1 md:grid-cols-3 gap-4  bg-blue-100">
           <SessionCard
              title="Frappe Framework"
              duration="Jan 5 – Apr 30, 2025"
              studyPeriod="May 5 – Aug 30 (12 weeks)"
              exams="Aug 15 – 30"
              status="Past"
              level="Intermediate"
              actionText="Join Us"
             coursePath="/Courses"
            />

      
            <SessionCard
              title="Web Development Fundamentals"
              duration="Feb 1 – Apr 20, 2025"
              studyPeriod="Apr 25 – July 15 (12 weeks)"
              exams="July 20 – 30"
              status="Upcoming"
              level="Beginner"
              actionText="Join Us"
              coursePath="/Courses"
            />

        
            <SessionCard
              title="Machine Learning Bootcamp"
              duration="Mar 10 – Jun 30, 2025"
              studyPeriod="Jul 5 – Sept 25 (12 weeks)"
              exams="Oct 1 – 10"
              status="Ongoing"
              level="Advanced"
              actionText="Join Us"
             coursePath="/Courses"
            />


                

          </div>
        </div>
    </>
    
  )
}

export default Sessions;