const list = document.getElementById("list"); // список записей
const balance = document.getElementById("balance"); // итог
const count = document.getElementById("count"); // количество
const msg = document.getElementById("msg"); // сообщение об ошибке

const modal = document.getElementById("modal"); // окно
const titleInput = document.getElementById("titleInput");
const amountInput = document.getElementById("amountInput");
const typeInput = document.getElementById("typeInput");

let records = []; // массив объектов

// показать записи
function show(recordsToShow) {

    list.innerHTML = "";
    let total = 0;
    recordsToShow.forEach(function(item) {

        let div = document.createElement("div");
        div.className = "record " + item.type;

        let text = document.createElement("span");
        text.textContent = item.title + " - " + item.amount + " лей";

        let del = document.createElement("button");
        del.textContent = "Удалить";

        del.onclick = function() {
            records = records.filter(function(x) {
                return x.id !== item.id;
            });

            show(records);
        };

        div.appendChild(text);
        div.appendChild(del);

        list.appendChild(div);

        if(item.type === "income") {
            total = total + item.amount;
        } else {
            total = total - item.amount;
        }
    });

    balance.textContent = total;
    count.textContent = records.length;
}

// открыть окно
document.getElementById("openModal").onclick = function() {
    modal.classList.remove("hidden");
};
// закрыть окно
document.getElementById("closeBtn").onclick = function() {
    modal.classList.add("hidden");
};
// сохранить
document.getElementById("saveBtn").onclick = function() {

    let title = titleInput.value.trim();
    let amount = Number(amountInput.value);

    if(title === "" || amount <= 0) {
        msg.textContent = "Введите данные правильно";
        return;
    }

    msg.textContent = "";

    let obj = {
        id: Date.now(),
        title: title,
        amount: amount,
        type: typeInput.value
    };

    records.push(obj);

    titleInput.value = "";
    amountInput.value = "";

    modal.classList.add("hidden");

    show(records);
};

// фильтр
document.querySelectorAll("[data-filter]").forEach(function(btn){

    btn.onclick = function(){

        let type = btn.dataset.filter;

        if(type === "all") {
            show(records);
        } else {
            let filtered = records.filter(function(item){
                return item.type === type;
            });

            show(filtered);
        }
    };
});

// поиск
document.getElementById("searchInput").oninput = function(){

    let text = this.value.toLowerCase();

    let result = records.filter(function(item){
        return item.title.toLowerCase().includes(text);
    });

    show(result);
};

// сортировка
document.getElementById("sortAmount").onclick = function(){

    records.sort(function(a,b){
        return a.amount - b.amount;
    });

    show(records);
};
