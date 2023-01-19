const taskList = document.getElementById('task-list');
const createTask = document.getElementById('create-task');
const inputText = document.getElementById('input-text')
const taskComplate = document.getElementById('task-complate');

// 클릭하면 할일 목록 생기는 이벤트 만들기
createTask.addEventListener('click',()=>{
// 디브 생성하고 거기에 클레스 부여해 주기
    const task = document.createElement('div');
    task.classList.add('task');
// 체크박스 만들기 / 체크되는 박스를 만들기 위해 setAttribute사용하기 
    const chkInput = document.createElement('input');
    chkInput.setAttribute('type','checkbox');
// 클릭됐을 때 
    chkInput.addEventListener('change', (e) => {
        console.log(e);
// 체크되었으면 완료됨에 들어가고 체크안되면 학일목록에 들어가게
        if(chkInput.checked){            
            taskComplate.insertBefore(task,taskComplate.firstElementChild);
            taskList.removeChild(task);
        }else {
            taskComplate.removeChild(task);
            taskList.appendChild(task);

        }
    })

    const pInput = document.createElement('p');
    pInput.innerText = inputText.value;

    const delButton = document.createElement('div');
    delButton.innerText = `삭제`;
    delButton.addEventListener('click', () => {
        task.remove();
    })
    
    task.appendChild(chkInput);
    task.appendChild(pInput);
    task.appendChild(delButton);

    taskList.appendChild(task);

    inputText.value = ''
})
