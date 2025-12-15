import React,{useState} from 'react'

export const InputDemo3 = () => {
    
    const [selectDate, setselectDate] = useState()
    const [IsSubmited, setIsSubmited] = useState(false)

    const getDateLable = (date) =>{
        const today = new Date()
        const chooseDate = new Date(date)

        today.setHours(0,0,0,0)
        chooseDate.setHours(0,0,0,0)

        const diffDays = Math.round((chooseDate.getTime()-today.getTime())/(1000*60*60*24))
        console.log(diffDays)
        switch(diffDays)
        {
            case -2 : 
                return 'Day before yesterDay'
            case -1 :
                return 'yesterDay'
            case 0 : 
                return 'today'
                
            case 1 :
                return 'tomorrow'
            case 2:
                return 'Day after Tomorrow' 
            default:
                if(diffDays>0)
                {
                    return `After ${diffDays} days`
                }
                else
                {
                    return `Before ${diffDays} days`
                }
        }
    }

    return (
    <div style={{textAlign:'center'}}>
        <h1>InputData 3</h1>
        <div>
            <label>Date</label>
            <input type='date' onChange={(event)=>{setselectDate(event.target.value)}}></input>
            {selectDate}
        </div>
        <div>
            <button onClick={()=>{setIsSubmited(true)}}>Submite</button>
        </div>
        {
            IsSubmited && <div>
                <h1>date = {selectDate}</h1>
                <h1>{getDateLable(selectDate)}</h1>
            </div>
        }
    </div>
  )
}
