import { doc, onSnapshot } from 'firebase/firestore'
import React,{useEffect, useState} from 'react'
import { db } from '../firebaseConfig'

export default function Comment({id}) {

    const [comments,setComments] = useState([]);
    useEffect(() => {
        const docRef = doc(db, "Articles",id)
        onSnapshot(docRef, (snapshot) => {
            setComments(snapshot.data().comments);
        })
    },[])
  return (
    <div>Comment
        <div className="container">
        {
            comments !== null &&
            comments.map(
                (comment)=>{
                    <div key={comment.commentId}>
                        
                    </div>
                }
            )
        }
        </div>
    </div>
  )
}
