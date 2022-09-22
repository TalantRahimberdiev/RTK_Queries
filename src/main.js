
import { useSelector, useDispatch } from "react-redux"
import AddStudent from "./addStudent"

import { useListQuery, useDeleteStudentMutation } from "./rtk/studentsAPI"
import { update } from "./rtk/studentsSlice"
import UpdateStudent from "./updateStudent"

export default function Main() {

   const dispatch = useDispatch()
   const updated = useSelector(state => state.studentsR.updating)

   const { data, error, isLoading } = useListQuery()
   const [deleteStudent] = useDeleteStudentMutation()
   return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
         {
            <table border={''}>
               <thead>
                  <tr>
                     <th>update</th>
                     <th>firstname</th>
                     <th>lastname</th>
                     <th>delete</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     data?.map(bb => <tr key={bb.id}>
                        <td onClick={() => dispatch(update(bb.id))}>{bb.id}</td>
                        <td>{bb.firstname}</td>
                        <td>{bb.lastname}</td>
                        <td onClick={() => deleteStudent(bb.id)}>delete</td>
                     </tr>)
                  }
               </tbody>
            </table>
         }
         <div>
            {
               data && updated ? <UpdateStudent data={data} /> : <AddStudent />
            }
         </div>
      </div>
   )
}