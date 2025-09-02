import Card from "../components/Cards"
const Sessions = () => {
  return (
    <div className=" bg-blue-100" id="Sessions" >

        <div className="text-center pt-20 pb-10">
                    <h1 className='text-3xl text-indigoDeep font-bold'>Active Sessions</h1>
                    <h2 className='text-lg text-gray-700 mx-auto text-center leading-relaxed tracking-wide'>
                            Explore Engaging Lessons, Tailored Programs,
                            and Hands-on Learning Experiences that Empower <br/>  
                            You to Unlock Your Full Potential and Achieve Success in
                            Your Educational Journey.
                    </h2>
            </div>
    

          <div className="grid grid-col-1 md:grid-cols-3 gap-4  bg-blue-100">

                <Card
                        variant="session"
                        title="Live Python Workshop"
                        description="Join our interactive Python workshop where we'll build a data visualization application together."
                        date="Today, 3:00 PM"
                        duration="2 hours"
                        tags={["Live", "Python", "Intermediate"]}
                        actionText="Join Now"
                        onAction={() => console.log("Join session")}
                        className="my-4 leading-relaxed tracking-wide mt-4"
                />

                <Card
                    variant="session"
                    title="Live Python Workshop"
                    description="Join our interactive Python workshop where we'll build a data visualization application together."
                    date="Today, 3:00 PM"
                    duration="2 hours"
                    tags={["Live", "Python", "Intermediate"]}
                    actionText="Join Now"
                    onAction={() => console.log("Join session")}
                    className="my-4 leading-relaxed tracking-wide mt-4"
                    />

                    <Card
                        variant="session"
                        title="Live Python Workshop"
                        description="Join our interactive Python workshop where we'll build a data visualization application together."
                        date="Today, 3:00 PM"
                        duration="2 hours"
                        tags={["Live", "Python", "Intermediate"]}
                        actionText="Join Now"
                        onAction={() => console.log("Join session")}
                        className="my-4 leading-relaxed tracking-wide mt-4  "
                        />


          </div>
        </div>
  )
}

export default Sessions;