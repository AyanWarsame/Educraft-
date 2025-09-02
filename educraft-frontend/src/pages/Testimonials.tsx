import Card from "../components/Cards"
import Woman from "../assets/woman.jpg";
import Woman1 from "../assets/woman1.jpg";
import Man from "../assets/man.jpg"


const Testimonials = () => {
  return (

      <div className="bg-blue-100">

         <div className="text-center mb-8 mt-4">
            <h1 className="text-3xl font-bold pt-4 mt-8 text-indigoDeep ">What Our Students Say</h1>
            <p className="text-gray-800 mt-4 mb-4">Hear directly from our students about their experiences and successes.</p>
         </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4" id='Testimonials'>
            <Card
                variant="testimonial"
                title="Life-changing experience"
                description="This platform completely transformed my career path. The instructors are knowledgeable and the community is incredibly supportive."
                imageUrl={Woman1}
                imageAlt="Student testimonial"
                author="Sarah Johnson"
                role="Software Engineer at TechCorp"
                rating={5}
                className="my-4"
            />

            <Card
                variant="testimonial"
                title="Incredible Support"
                description="The support I received during my learning journey was phenomenal. The team is always ready to help."
                imageUrl={Man}
                imageAlt="Student testimonial"
                author="Michael Smith"
                role="Data Scientist at DataCorp"
                rating={4}
                className="my-4"
            />

            <Card
                variant="testimonial"
                title="Highly Recommend"
                description="I highly recommend this platform to anyone looking to enhance their skills. The courses are top-notch!"
                imageUrl={Woman}
                imageAlt="Student testimonial"
                author="Emily Davis"
                role="Product Manager at ProductCo"
                rating={5}
                className="my-4"
            />

        </div>

    </div>
  )
}

export default Testimonials