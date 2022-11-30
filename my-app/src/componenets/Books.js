import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
 
export default function book(props){

    const bookInfo = props.bookInfo;

    const onBookDelete = props.onBookDelete
    //console.log(bookInfo);

    return (
        <div>
            <li key={bookInfo.id} className="content-list">
                {bookInfo.name}
                <button className="remove" onClick= { () => onBookDelete(props.bookInfo.id) }>

                    <FontAwesomeIcon icon={faTrash} />

                </button>

            </li>
        </div>
    )

} 
