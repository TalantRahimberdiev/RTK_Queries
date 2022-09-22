
import { useSelector } from 'react-redux'
import { useEffect, useState, } from 'react'
import { useUpdateStudentMutation } from './rtk/studentsAPI'
import { useDispatch } from "react-redux"
import { clean } from './rtk/studentsSlice'

export default function UpdateStudent({ data }) {

   const updated = useSelector(state => state.studentsR.updating)
   const student = data.find(bb => bb.id === updated)
   const [updateStudent] = useUpdateStudentMutation()
   const dispatch = useDispatch()

   const [name, setName] = useState('')
   const [surname, setSurname] = useState('')

   useEffect(() => {
      if (updated) {
         setName(student.firstname)
         setSurname(student.lastname)
      }
   }, [updated])

   const update = async () => {
      const task = {
         details: student.id,
         firstname: name,
         lastname: surname
      }
      await updateStudent(task)
   }

   return (
      <div>
         <input
            value={name}
            onChange={e => setName(e.target.value)}
         />
         <input
            value={surname}
            onChange={e => setSurname(e.target.value)}
         />
         <button onClick={() => {
            update()
            dispatch(clean())
         }}>update</button>
      </div>
   )
}