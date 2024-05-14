count=0;
document.getElementById('club').addEventListener('submit',function(event){
          var studentName=document.getElementById('studentName').value;
          var StudentEmail=document.getElementById('StudentEmail').value;
          var yearofStudy=document.getElementById('yearofStudy').value;
          var dept =document.getElementById('dept').value;
          var studentPhone=document.getElementById('studentPhone').value;
          var clubName=document.getElementById('clubName').value;
          if(studentName === ''||StudentEmail===''|| yearofStudy===''|| dept===''||studentPhone===''||clubName==='')
          {
            event.preventDefault();
            alert("Fill the form and submit");
          }
          else
          {
            count+=1;
            func(count);
            alert("You registered successfully");
           

          }

            });

function func(cnt){
    console.log(cnt);
}






