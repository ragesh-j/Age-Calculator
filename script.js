function calculateAge(){
    let input=document.getElementsByClassName("inputs")
    let message=document.getElementById("message-div")
     
        let dayeErr=false
        let monthErr=false
        let YearErr=false
        if((input[0].value<=0) || input[0].value>31 ){
            dayeErr=true
        }
        if(input[1].value<=0 || input[1].value>12){
            monthErr=true
        }
        if(input[2].value >parseInt(new Date().getFullYear()) || input[2]<1000 || input[2].value==0){
         YearErr=true   
        }
let messageToUi=""
        function valid(){
            if(dayeErr && monthErr && YearErr){
                messageToUi="Please input valid data for Day field , Month field and Year field"
            }
            else if(dayeErr && monthErr){
                messageToUi="Please input valid data for Day field and Month field"
            }
            else if(dayeErr && YearErr){
                messageToUi="Please input valid data for Day field and Year field"
            }
            else if(monthErr && YearErr){
                messageToUi="Please input valid data for Month field and Year field"
            }
            else if(dayeErr){
                messageToUi="Please input valid data for Day field"
            }
            else if(monthErr){
                messageToUi="Please input valid data for Month field"
            }
            else if(YearErr){
                messageToUi="Please input valid data for Year field"
            }
            else{
                let TodayDate=new Date().getDate();
                let TodayMonth=new Date().getMonth();
                let TodayYear=new Date().getFullYear()
                let dayDiff=input[0].value-TodayDate
                let monthDiff=input[1].value-(TodayMonth+1)
                let yearDiff=TodayYear-input[2].value
                
                if(dayDiff<0){
                    dayDiff=dayDiff*(-1)
                }
                if(monthDiff<0){
                    monthDiff=monthDiff*(-1)
                }
                messageToUi=`Your Age is ${yearDiff} Years ${monthDiff} Months and ${dayDiff} Days`
            }
            message.innerHTML=messageToUi
        }
        valid()

        
        
}