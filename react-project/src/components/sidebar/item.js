import'./Body.css'
import'./ItemIconDuration.css'
function Item({icon,text,duration})
{
    return(
<div className="item">
    <span class="icon">{icon}</span>
    <span class="text">
        <span class="title">{text}</span>
        <span class="duration">{duration}</span>
    </span>
</div>
    )
}
export default Item;