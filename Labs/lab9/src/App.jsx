import College from "./components/College"
import Student from "./components/Student"

const title = "React using Vite"
const titleStyle = { Color: "green" }
const courses = ["Javascript", "React", "Node.js"]

function App(){

  return (
    <section>
      <h1 style={titleStyle}>{title}</h1>

      <ul>
        {courses.map((course) => 
          <li key={course}>{course}</li>
        )}
      </ul>

      <College name="GBP" city="Toronto"></College>
      <Student firstName="Amine" lastName="OUATAR"></Student>
    </section>
  )
}

export default App