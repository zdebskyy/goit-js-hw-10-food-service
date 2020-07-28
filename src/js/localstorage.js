const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme'
};

const switchBtn = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');

switchBtn.addEventListener('input', changeTheme);


function setBasicTheme (){
  const getTheme = localStorage.getItem('Theme')

  if (!getTheme) {
    localStorage.setItem('Theme', Theme.LIGHT)
    body.classList.add('light-theme')
  }else {
    body.classList.add(getTheme)
  }
  
  if(getTheme === Theme.LIGHT) {
    switchBtn.checked = false;
  } else {
    switchBtn.checked = true; 
  }
}
setBasicTheme()


function changeTheme (event){

  const isOn = event.target.checked;
  if(isOn){
    localStorage.setItem('Theme', Theme.DARK)
    body.classList.replace('light-theme', 'dark-theme')
  }else{
    body.classList.replace('dark-theme', 'light-theme')
    localStorage.setItem('Theme', Theme.LIGHT)
  }
}
