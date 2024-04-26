
import './No_bg.css';
import upload_img from './assets/img_1.png'
import warning from './assets/warning.png'
import { useRef } from "react";

function No_bg(props) {

    const inputElement = useRef();

    function choose_color_func() {
        inputElement.current.click();
    }

    return (
        
        <div className='no_bg_cont'>
                {props.title==="no_bg" ? <><div className='no_bg_title'> אל תשכח להוריד את הקבצים, הם ימחקו אוטומטית כשתצא מהדף</div> 
                
                    <img className="warning" alt='סימן אזהרה' src={warning}/>
                    
                        <button className='choose_color' onClick={choose_color_func}> צבע רקע </button>
                        <input type="color" ref={inputElement} className='input_color'/>   

                    </>
                : <></>}

                <img className="uploaded_img" alt='העלה תמונה' src={upload_img} />

        </div>

    );
}

export default No_bg;
