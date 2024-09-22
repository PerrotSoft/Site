document.addEventListener('DOMContentLoaded', () => {
    let Login = document.querySelector('#login');
    let Emeil = document.querySelector('#Emeil');
    let Password = document.querySelector('#password');
    let button = document.querySelector('#reg');

    let users = {};

    function User(Login, Emeil, Password) {
        this.Login = Login;
        this.Emeil = Emeil;
        this.Password = Password;
    }

    function SetCookie(name,value){
        document.cookie = name+"="+value;
    }
    function createID(users) {
        return Object.keys(users).length;
    }

    button.addEventListener('click', () => {
        const user = new User(Login.value, Emeil.value, Password.value);
        users['User' + createID(users)] = user;
        SetCookie('user','1');
        SetCookie('Login',Login.value);
        SetCookie('Emeil',Emeil.value);
        SetCookie('Password',Password.value);
        console.log(users);
        fs.writeFile(path.join(__dirname, 'output.txt'), newData + Login.value + "|" + Emeil.value+"|"+Password.value+"\n", (err) => {
            if (err) {
                console.error('Ошибка при записи в файл:', err);
                return;
            }
            console.log('Данные успешно записаны в output.txt');
        });
        alert(document.cookie);
    });
});
// Функция для добавления ячейки данных
function addProject(project) {
    // Получаем текущие данные из localStorage
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    // Добавляем новый проект
    projects.push(project);

    // Сохраняем обновленные данные в localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Функция для чтения всех ячеек данных
//function getProjects() {
    // Получаем данные из localStorage
   // let projects = JSON.parse(localStorage.getItem('projects')) || [];
   // return projects;
}

