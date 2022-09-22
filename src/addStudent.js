
import { useAddStudentMutation } from "./rtk/studentsAPI"
import { useState } from 'react'

export default function AddStudent() {

   const [name, setName] = useState('')
   const [surname, setSurname] = useState('')

   const [addStudent, result] = useAddStudentMutation()

   const add = async () => {
      const task = {
         firstname: name,
         lastname: surname
      }
      await addStudent(task)
   }

   return (
      <div>
         <input
            placeholder="firstname"
            onChange={e => setName(e.target.value)}
         />
         <input
            placeholder="lastname"
            onChange={e => setSurname(e.target.value)}
         />
         <button onClick={() => add()}>add</button>
      </div>
   )
}