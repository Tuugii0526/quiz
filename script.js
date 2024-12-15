const form =document.getElementById('form')
const textArea=document.getElementById('textarea')
const submitButton=document.getElementById('button')
const loading=document.getElementById('loading')
const error=document.getElementById('error')
const success=document.getElementById('success')
const hide=(el)=>{
    el.style.display='none'
}
const show=(el)=>{
    el.style.display=''
}
const enable=(el)=>{
el.disabled=false
}
const disable=(el)=>{
    el.disabled=true
}

const submitForm=(value)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(value.toLowerCase()==='ulaanbaatar' || value.toLowerCase()==='ub')
        {
            resolve();
        }
        else
        {
            reject(new Error('Good guess but a wrong answer.Try again!'));
        }
        },1500)
    })
}
const handleFormSubmit= async (e)=>{
    e.preventDefault()
    disable(textArea)
    disable(button)
    show(loading)
    try
    {
      await submitForm(textArea.value)
      show(success)
      hide(form)
    }
    catch(err)
    {
      show(error)
      error.textContent=err.message
    }
    finally
    {
      hide(loading)
      enable(textArea)
      enable(button)
    }
  }
const handleTextAreaChange=()=>{
    if(textArea.value.length===0)
    {
        disable(button)
    }
    else
    {
        enable(button)
    }
}
form.onsubmit=handleFormSubmit
textArea.oninput=handleTextAreaChange