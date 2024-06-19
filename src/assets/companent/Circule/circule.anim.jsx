
import '../../css/style.css'
const Circule = ({backgroundL,classname}) => {
  return (
    <div className="inline-block center-all">
      <div className={classname}  style={{background:backgroundL,width:"20px", height:"20px",borderRadius:"50%"}}></div>
    </div>
  );
};

export default Circule;
