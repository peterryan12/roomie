import { Pencil } from 'lucide-react';


export const InfoItem = (props) => {
    return <div className="flex gap-10 mt-4">
      <p>{props.item}</p>
      <input type="text" placeholder="Edit..." value={props.value} className='text-ellipsis' onChange={(e) => {props.toggle(e.target.value)}}/>
      <button className='mt-3'>{<Pencil size={16} />}</button>
      
    </div>
}