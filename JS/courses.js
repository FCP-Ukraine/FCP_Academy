// ==========================
// FIREBASE — ЛІЧИЛЬНИК ПЕРЕГЛЯДІВ
// ==========================
import { incrementCourseViews } from "./firebase-config.js";

// ==========================
// МАСИВ КУРСІВ
// ==========================
const courses = [
    {
        id: 1,
        title: "Структура програми",
        language: "C++",
        img: "images/ISO_C++_Logo.svg.png",
        text: `
            <div class="course-card1">
                    <img src="images/ISO_C++_Logo.svg.png">
                    <h2>Структура програми</h2>
            </div>
            <br><br>
            <div class="course-text">
                <p>Зазвичай шлях у C++ починають із базового шаблону програми, який є універсальним.</p>
<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    return 0;
}
</code></pre>
            <p>Тепер розберемо кожен з цих рядків послідовно.</p>
            <p class="course-text1">Перший рядок:</p>
            <pre><code>#include &lt;iostream&gt;</code></pre>
            <p>Тільки що ми вказали бібліотеку. Бібліотека - це готовий набір інструментів. Підключаючи її ми можемо користуватися цими інструментами. Бібліотека iostream дозволяє приймати дані, які вводить користувач, та виводити дані користувачу.</p>
            <p class="course-text1">Другий рядок:</p>
            <pre><code>using namespace std;</code></pre>
            <p>Додаючи цей рядок, більшу частину коду не треба буде записувати через префікс std::</p>
            <p class="course-text1">Третій рядок:</p>
            <pre><code>int main() {</code></pre>
            <p>main() – це функція, яка є точкою входу в програму. Саме цю функцію комп’ютер починає обробляти першою. Увесь наступний код ми записуємо в середині фігурних дужок.</p>
            <p class="course-text1">Четвертий рядок:</p>
            <pre><code>return 0;</code></pre>
            <p>Саме цей рядок є виходом з функції main().</p>
            <br><br><br><br><br><br>
            </div>
        `
    },
    {
        id: 2,
        title: "Типи даних",
        language: "Python",
        img: "images/Python-logo-notext.svg.png",
        text: `
            <div class="course-card1">
                    <img src="images/Python-logo-notext.svg.png">
                    <h2>Типи даних</h2>
            </div>
            <br><br>
            <div class="course-text">
                <p>У Python ми просто називаємо змінну та вказуємо її значення. Наприклад ось так:</p>
<pre><code>number = 123 # ціле число (int)</code></pre>
<pre><code>number = 123.45 # десяткове число (float)</code></pre>
<pre><code>text = "Hello, World" # символьний рядок (str)</code></pre>
<pre><code>TF = True # приймає значення True або False (bool)</code></pre>
                <br>
                <p>На відміну від C++, у Python не потрібно вказувати тип даних під час створення змінної. Python сам визначає тип за значенням, яке ми присвоюємо змінній.</p>
            <br><br><br><br><br><br>
            </div>
        `
    },
    {
        id: 3,
        title: "Типи даних",
        language: "C++",
        img: "images/ISO_C++_Logo.svg.png",
        text: `
            <div class="course-card1">
                    <img src="images/ISO_C++_Logo.svg.png">
                    <h2>Типи даних</h2>
            </div>
            <br><br>
            <div class="course-text">
                <p>Змінні оголошують різними типами данних. Основні типи даних – це числові, текстові та логічний.</p>
                <p>Почнемо з числових типів даних:</p>
                <p class="course-text1">Цілі числа:</p>
                <pre><code>int number; // ціле число від -10<sup>9</sup> до 10<sup>9</sup></code></pre>
                <pre><code>long long int number; // ціле число від -10<sup>18</sup> до 10<sup>18</sup></code></pre>
                <pre><code>short int number; // ціле число від -32768 до 32767</code></pre>
                <pre><code>unsigned int number; // ціле невід’ємне число</code></pre>
                <p>long long, short та unsigned додають для економії або розширення пам’яті комп'ютера.</p>
                <p class="course-text1">Десяткове число:</p>
                <pre><code>float number; // десяткове число до 7 знаків після коми</code></pre>
                <pre><code>double number; // десяткове число до 17 знаків після коми</code></pre>
                <p class="course-text1">Перейдемо до символьних типів даних:</p>
                <pre><code>char text; // зберігає 1 символ</code></pre>
                <pre><code>string text; // зберігає рядок символів до пробілу</code></pre>
                <p class="course-text1">Логічний тип даних:</p>
                <pre><code>bool True_or_False; // приймає значення  true (1) або false (0)</code></pre>
                <p>Виводить 1 при значенні true або 0 при значенні false. Це пов’язано з двійковою системою числення.</p>
                <br>
                <p class="course-text1">Приклади вказування типу даних та присвоєння значення:</p>
<pre><code>#include&lt;iostream&gt;
#include&lt;string&gt;
using namespace std;
int main(){
    int number = 5;
    char symbol =  'H';
    string text =  "Hello";
    bool TF = true;
    return 0;
}
</code></pre>
                <p>*Для string треба підключати бібліотеку string.</p>
            <br><br><br><br><br><br>
            </div>
            
        `
    },
    {
        id: 4,
        title: "Введення та виведення даних",
        language: "Python",
        img: "images/Python-logo-notext.svg.png",
        text: `
            <div class="course-card1">
                    <img src="images/Python-logo-notext.svg.png">
                    <h2>Введення та виведення даних</h2>
            </div>
            <br><br>
            <div class="course-text">
                <p>Спочатку Python приймає дані у вигляді символів. Тож для прийняття символів ми пишемо <span class="text-color">input()</span>. Приймаємо дані завжди в якусь змінну. Наприклад:</p>
<pre><code>text = input() </code></pre>
                <p>Символьний тип даних приймає увесь текст до переходу на новий рядок.</p>
                <br>
                <p>Потім ми перетворюємо цей символьний рядок в той тип даних, який нам потрібний.</p>
<pre><code>number = int(input()) # для цілого числа
number = float(input()) # для десяткового числа</code></pre>
                <br>
                <p>Для введення двох і більше даних одного типу в одному рядку, наприклад:</p>
                <pre><code>4 6</code></pre>
                <p>ми вводимо за допомогою:</p>
<pre><code>num1, num2 = map(int, input().split()) # цілі числа
num1, num2 = map(float, input().split()) # десяткові числа
text1, text2 = map(str, input().split()) # символьні рядки</code></pre>
                <br>
                <p>Для того, щоб вивести дані, треба прописати їх у print(). Наприклад змінну, рядок чи число.</p>
<pre><code>print("Hello, World")</code></pre>
                <br>
                <p>Щоб вивести декілька даних треба прописати їх через кому.</p>
<pre><code>print("Hello", 123)</code></pre>
                <br>
                <p>У Python автоматично виводяться дані через пробіл. Щоб прибрати пробіл треба прописати <span class="text-color">sep=""</span>. І якщо потрібен не один пробіл, то прописуємо <span class="text-color">sep</span> і в лапках кількість пробілів.</p>
<pre><code>print("Hello", 123, sep="")</code></pre>
                <br>
                <p>Також прописуючи print та дані в них два рядки підряд, тобто</p>
<pre><code>print("Hello")
print("World")</code></pre>
                <p>Отримаємо:</p>
<pre><code>Hello
World</code></pre>
                <br>
                <p>Щоб обидва print були в одному рядку треба прописати <span class="text-color">end=""</span>. </p>
<pre><code>print("Hello", end="")
print("World")</code></pre>
                <p>Отримаємо:</p>
<pre><code>HelloWorld</code></pre>
                <p>Також в лапках можна прописати те, що вам потрібно. </p>
                <br>
                <p>Набір задач з eolymp, які допоможуть вам закріпити навички введення та виведення даних:</p>
                <p><a href="https://www.e-olymp.com/uk/problems/1024" target="_blank" class="text-color">https://eolymp.com/uk/problems/1024</a></p>
                <p><a href="https://eolymp.com/uk/problems/8800" target="_blank" class="text-color">https://eolymp.com/uk/problems/8800</a></p>
                <p><a href="https://www.e-olymp.com/uk/problems/4718" target="_blank" class="text-color">https://eolymp.com/uk/problems/4718</a></p>
                <p><a href="https://eolymp.com/uk/problems/5133" target="_blank" class="text-color">https://eolymp.com/uk/problems/5133</a></p>
                <p><a href="https://eolymp.com/uk/problems/990" target="_blank" class="text-color">https://eolymp.com/uk/problems/990</a></p>
    
                <br>
                <details>
                <summary class="course-text1">Додатково</summary>
                <br>
                <p>Якщо потрібно ввести дуже велике число, то імпортуємо бібліотеку <span class="text-color">sys</span>.</p>
<pre><code>import sys
sys.set_int_max_str_digits(n)</code></pre>
                <p>n – максимальна кількість цифр у числі.</p>
                </details>
                <br><br><br><br><br><br>
            </div>
        `
    },
    {
        id: 5,
        title: "Введення та виведення даних",
        language: "C++",
        img: "images/ISO_C++_Logo.svg.png",
        text: `
            <div class="course-card1">
                    <img src="images/ISO_C++_Logo.svg.png">
                    <h2>Введення та виведення даних</h2>
            </div>
            <br><br>
            <div class="course-text">
            <p>Раніше ми говорили про бібліотеку iostream, яка дозволяє вводити дані та їх виводити. Тож тепер з’ясуємо, що потрібно написати для введення та виведення даних у програмі.</p>
            <br>
            <p class="course-text1">Для введення даних ми маємо ввести змінну з відповідним типом даних. А потім ми вводимо дані через <span class="text-color">cin</span> (command in). Наприклад:</p>
<pre><code>#include&lt;iostream&gt;
using namespace std; 
int main(){
    int a;
    cin >> a;
    return 0;
}</code></pre>
            <br>
            <p>Для введення декількох даних ми прописуємо</p>
<pre><code>int a, b;
cin >> a >> b;</code></pre>
            <p>*Дані присвоюються у порядку, вказаному в cin.</p>

            <br><br>
            <p class="course-text1">Для виведення даних ми використовуємо <span class="text-color">cout</span> (command out).  Наприклад:</p>
<pre><code>cout << "Hello, World";</code></pre>
            <br>
            <p>Для виведення значення змінної достатньо вказати її назву. Для виведення декількох даних ми записуємо усе через <span class="text-color"> << </span>.</p>
<pre><code>cout << a << b << "Hello, World ";</code></pre>
            <br>
            <p>Під час використання cout у C++ дані виводяться без пробілу, тому ми вказуємо його самостійно. Наприклад, ось так:</p>
<pre><code>cout << a << " " << b;</code></pre>
            <br>
            <p>Для переносу на новий рядок варто використовувати <span class="text-color">endl</span>.</p>
<pre><code>cout << a << endl; </code></pre>
            <br>
            Набір задач з eolymp, які допоможуть вам закріпити навички введення та виведення даних:
            <p><a href="https://www.e-olymp.com/uk/problems/1024" target="_blank" class="text-color">https://eolymp.com/uk/problems/1024</a></p>
            <p><a href="https://www.e-olymp.com/uk/problems/4718" target="_blank" class="text-color">https://eolymp.com/uk/problems/4718</a></p>
            <p><a href="https://eolymp.com/uk/problems/990" target="_blank" class="text-color"> https://eolymp.com/uk/problems/990 </a></p>
            <p><a href="https://eolymp.com/uk/problems/5133" target="_blank" class="text-color"> https://eolymp.com/uk/problems/5133 </a></p>
            <br>
            <details>
            <summary class="course-text1">Додатково</summary>
            <br>
            <p>Для виведення числа з певною кількістю цифр після коми підключаємо бібліотеку <span class="text-color">iomanip</span>. А також прописуємо:</p>
<pre><code>cout << fixed << setprecision(n) << a;</code></pre>
            <p>n – кількість цифр після коми;</p>
            <p>a – число, яке виводимо.</p>
            <br><br>
            <p>Наприклад:</p>
<pre><code>#include &lt;iostream&gt;
#include &lt;iomanip&gt;

using namespace std;
int main() {
    double a = 3.14159265;
    cout << fixed << setprecision(2) << a;
    return 0;
}</code></pre>
            <p>У результаті отримаємо:</p>
<pre><code>3.14</code></pre>
            </details>
            <br><br><br><br><br><br><br>
            </div>

            
        `
    },
    {
        id: 6,
        title: "Арифметичні операції",
        language: "Python",
        img: "images/Python-logo-notext.svg.png",
        text: `
            <div class="course-card1">
                    <img src="images/Python-logo-notext.svg.png">
                    <h2>Арифметичні операції</h2>
            </div>
            <br><br>
            <div class="course-text">
                <p>Арифметичні операції використовуються майже в кожній задачі з олімпіадного програмування. Тож розглянемо основні арифметичні операції в Python.</p>
                <p class="course-text1">Арифметичні операції:</p>
<pre><code>a+b # додавання (7+2 = 9)
a-b # віднімання (7-2 = 5)
a*b # множення (7*2 = 14)
a/b # ділення (7/2 = 3.5)
a//b # ділення націло (7//2 = 3)
a%b # остача від ділення  (7%2 = 1)
a**b # a в степені b (7**2 = 49)</code></pre>
                <br>

                <p class="course-text1">Ви вже можете розв’язувати перші задачі з олімпіадного програмування. Наприклад, цей набір задач з eolymp:</p>
                <details>
                <summary class="course-text1">Обов'язкові задачі</summary>
                <p><a href="https://eolymp.com/uk/problems/6277" target="_blank" class="text-color">6277</a></p>
                <p><a href="https://eolymp.com/uk/problems/1286" target="_blank" class="text-color">1286</a></p>
                <p><a href="https://eolymp.com/uk/problems/6272" target="_blank" class="text-color">6272</a></p>
                <p><a href="https://eolymp.com/uk/problems/67" target="_blank" class="text-color">67</a></p>
                <p><a href="https://eolymp.com/uk/problems/519" target="_blank" class="text-color">519</a></p>
                <p><a href="https://eolymp.com/uk/problems/7943" target="_blank" class="text-color">7943</a></p>
                <p><a href="https://eolymp.com/uk/problems/7944" target="_blank" class="text-color">7944</a></p>
                <p><a href="https://eolymp.com/uk/problems/4716" target="_blank" class="text-color">4716</a></p>
                <p><a href="https://eolymp.com/uk/problems/4717" target="_blank" class="text-color">4717</a></p>
                <p><a href="https://eolymp.com/uk/problems/1" target="_blank" class="text-color">1</a></p>
                <p><a href="https://eolymp.com/uk/problems/906" target="_blank" class="text-color">906</a></p>
                <p><a href="https://eolymp.com/uk/problems/949" target="_blank" class="text-color">949</a></p>
                <p><a href="https://eolymp.com/uk/problems/943" target="_blank" class="text-color">943</a></p>
                <p><a href="https://eolymp.com/uk/problems/6276" target="_blank" class="text-color">6276</a></p>
                <p><a href="https://eolymp.com/uk/problems/7336" target="_blank" class="text-color">7336</a></p>
                </details>
                <details>
                    <summary class="course-text1">Інші цікаві задачі середнього рівня</summary>
                    <p><a href="https://eolymp.com/uk/problems/955" target="_blank" class="text-color">955</a></p>
                    <p><a href="https://eolymp.com/uk/problems/7460" target="_blank" class="text-color">7460</a></p>
                    <p><a href="https://eolymp.com/uk/problems/2400" target="_blank" class="text-color">2400</a></p>
                    <p><a href="https://eolymp.com/uk/problems/248" target="_blank" class="text-color">248</a></p>
                    <p><a href="https://eolymp.com/uk/problems/157" target="_blank" class="text-color">157</a></p>
                    <p><a href="https://eolymp.com/uk/problems/63" target="_blank" class="text-color">63</a></p>
                    <p><a href="https://eolymp.com/uk/problems/2806" target="_blank" class="text-color">2806</a></p>
                    <p><a href="https://eolymp.com/uk/problems/1355" target="_blank" class="text-color">1355</a></p>
                    <p><a href="https://eolymp.com/uk/problems/7817" target="_blank" class="text-color">7817</a></p>
                    <p><a href="https://eolymp.com/uk/problems/478" target="_blank" class="text-color">478</a></p>
                </details>
                <details>
                <summary class="course-text1">Додаткові задачі</summary>
                <p>8801-8860</p>           
                </details>
                <br><br><br><br><br><br><br><br>
            </div>
        `
    },
    {
        id: 7,
        title: "Арифметичні операції",
        language: "C++",
        img: "images/ISO_C++_Logo.svg.png",
        text: `
            <div class="course-card1">
                    <img src="images/ISO_C++_Logo.svg.png">
                    <h2>Арифметичні операції</h2>
            </div>
            <br><br>
            <div class="course-text">
            <p>Без використання арифметичних операцій у C++ неможливо зробити більшість задач. Тож розглянемо основні арифметичні операції в C++. </p>
            <p class="course-text1">Арифметичні операції:</p>
<pre><code>a+b // додавання
a-b // віднімання
a*b // множення
a/b // ділення націло (якщо a і b – цілі числа, інакше це звичайне ділення)
(float)a/b // звичайне ділення
a%b // остача від ділення </code></pre>
            <br>
            <p class="course-text1">Ви вже можете розв’язувати перші задачі з олімпіадного програмування. Наприклад, цей набір задач з eolymp:</p>
            <details>
                <summary class="course-text1">Обов'язкові задачі</summary>
                <p><a href="https://eolymp.com/uk/problems/6277" target="_blank" class="text-color">6277</a></p>
                <p><a href="https://eolymp.com/uk/problems/1286" target="_blank" class="text-color">1286</a></p>
                <p><a href="https://eolymp.com/uk/problems/6272" target="_blank" class="text-color">6272</a></p>
                <p><a href="https://eolymp.com/uk/problems/67" target="_blank" class="text-color">67</a></p>
                <p><a href="https://eolymp.com/uk/problems/519" target="_blank" class="text-color">519</a></p>
                <p><a href="https://eolymp.com/uk/problems/7943" target="_blank" class="text-color">7943</a></p>
                <p><a href="https://eolymp.com/uk/problems/7944" target="_blank" class="text-color">7944</a></p>
                <p><a href="https://eolymp.com/uk/problems/4716" target="_blank" class="text-color">4716</a></p>
                <p><a href="https://eolymp.com/uk/problems/4717" target="_blank" class="text-color">4717</a></p>
                <p><a href="https://eolymp.com/uk/problems/1" target="_blank" class="text-color">1</a></p>
                <p><a href="https://eolymp.com/uk/problems/906" target="_blank" class="text-color">906</a></p>
                <p><a href="https://eolymp.com/uk/problems/949" target="_blank" class="text-color">949</a></p>
                <p><a href="https://eolymp.com/uk/problems/943" target="_blank" class="text-color">943</a></p>
                <p><a href="https://eolymp.com/uk/problems/6276" target="_blank" class="text-color">6276</a></p>
                <p><a href="https://eolymp.com/uk/problems/7336" target="_blank" class="text-color">7336</a></p>
                </details>
                <details>
                    <summary class="course-text1">Інші цікаві задачі середнього рівня</summary>
                    <p><a href="https://eolymp.com/uk/problems/955" target="_blank" class="text-color">955</a></p>
                    <p><a href="https://eolymp.com/uk/problems/7460" target="_blank" class="text-color">7460</a></p>
                    <p><a href="https://eolymp.com/uk/problems/2400" target="_blank" class="text-color">2400</a></p>
                    <p><a href="https://eolymp.com/uk/problems/248" target="_blank" class="text-color">248</a></p>
                    <p><a href="https://eolymp.com/uk/problems/157" target="_blank" class="text-color">157</a></p>
                    <p><a href="https://eolymp.com/uk/problems/63" target="_blank" class="text-color">63</a></p>
                    <p><a href="https://eolymp.com/uk/problems/2806" target="_blank" class="text-color">2806</a></p>
                    <p><a href="https://eolymp.com/uk/problems/1355" target="_blank" class="text-color">1355</a></p>
                    <p><a href="https://eolymp.com/uk/problems/7817" target="_blank" class="text-color">7817</a></p>
                    <p><a href="https://eolymp.com/uk/problems/478" target="_blank" class="text-color">478</a></p>
                </details>
                <details>
                <summary class="course-text1">Додаткові задачі</summary>
                <p>8800-8860</p>           
                </details>
            <br>
            <details>
            <summary class="course-text1">Додатково</summary>
            <br>
            <p>Щоб відняти або додати одиницю, можна прописати:</p>
<pre><code>a--; // відняти одиницю (те саме, що a = a - 1;)
a++; // додати одиницю (те саме, що a = a + 1;) </code></pre>
            <br>
            <p>Наприклад:</p>
<pre><code>#include &lt;iostream&gt;
using namespace std;
int main(){
    int a, b;
    cin >> a >> b;
    a--; 
    b++;
    cout << a << " " << b;
    return 0;
} </code></pre>
            <br>
            <p>Вхідні дані:</p>
            <pre><code>1 6</code></pre>
            <p>Вихідні дані:</p>
            <pre><code>0 7</code></pre>
            </details>
            <br><br><br><br><br><br>
            </div>
        `
    },
    {
        id: 8,
        title: "Математичні функції",
        language: "Python",
        img: "images/Python-logo-notext.svg.png",
        text: `
            <div class="course-card1">
                    <img src="images/Python-logo-notext.svg.png">
                    <h2>Математичні функції</h2>
            </div>
            <br><br>
            <div class="course-text">
                <p>Математичні функції часто використовуються в задачах з олімпіадного програмування, тому це необхідна тема для вивчення.</p>
                <br>
                <p>Математичні функції — це функції Python, які дозволяють виконувати обчислення (корінь, округлення, модуль та інше).</p>
<pre><code>abs(a) # модуль
min(a,b) # мінімальне число
max(a,b) # максимальне число
round(a) # округлення до найближчого цілого числа</code></pre>
                <br>
                <p>Для наступних функцій ми імпортуємо бібліотеку <span class="text-color">math</span>.</p>
<pre><code>math.sqrt(a) # корінь квадратний
math.ceil(a) # округлення вгору до цілого числа
math.floor(a) # округлення вниз до цілого числа
math.pi # число π</code></pre>
                <br>
                <p>Для засвоєння цієї теми розв'яжіть наступні задачі з eolymp:</p>
                <br>
                <p><a href="https://eolymp.com/uk/problems/3867" target="_blank" class="text-color">3867</a></p>
                <p><a href="https://eolymp.com/uk/problems/2606" target="_blank" class="text-color">2606</a></p>
                <p><a href="https://eolymp.com/uk/problems/108" target="_blank" class="text-color">108</a></p>
                <p><a href="https://eolymp.com/uk/problems/935" target="_blank" class="text-color">935</a></p>
                <p><a href="https://eolymp.com/uk/problems/933" target="_blank" class="text-color">933</a></p>
                <p><a href="https://eolymp.com/uk/problems/7459" target="_blank" class="text-color">7459</a></p>
                <p><a href="https://eolymp.com/uk/problems/946" target="_blank" class="text-color">946</a></p>
                <p><a href="https://eolymp.com/uk/problems/6273" target="_blank" class="text-color">6273</a></p>
                <p><a href="https://eolymp.com/uk/problems/926" target="_blank" class="text-color">926</a></p>
                <p><a href="https://eolymp.com/uk/problems/924" target="_blank" class="text-color">924</a></p>
                <p><a href="https://eolymp.com/uk/problems/57" target="_blank" class="text-color">57</a></p>
                <p><a href="https://eolymp.com/uk/problems/942" target="_blank" class="text-color">942</a></p>
                <p><a href="https://eolymp.com/uk/problems/1359" target="_blank" class="text-color">1359</a></p>
                <br>
                <details>
                <summary class="course-text1">Додатково</summary>
                <br>
                <p>Додаткові функції, які також використовують в задачах:</p>
<pre><code>math.factorial(a) # факторіал a
math.gcd(a,b) # НСД чисел a та b</code></pre>
                </details>
                <br><br><br><br><br><br>
            </div>

        `
    },
    {
        id: 9,
        title: "Математичні функції",
        language: "C++",
        img: "images/ISO_C++_Logo.svg.png",
        text: `
            <div class="course-card1">
                    <img src="images/ISO_C++_Logo.svg.png">
                    <h2>Математичні функції</h2>
            </div>
            <br><br>
            <div class="course-text">
            <p>Математичні функції часто використовуються в задачах з олімпіадного програмування, тому це необхідна тема для вивчення.</p>
            <br>
            <p>Математичні функції — це вбудовані функції C++, які дозволяють знаходити корені, підносити числа до степеня, знаходити модуль числа та інше. Для цих функцій ми підключаємо бібліотеку cmath. </p>
<pre><code>#include &lt;cmath&gt;</code></pre>
            <br>
            <p>Математичні функції:</p>
<pre><code>sqrt(a) // корінь квадратний
cbrt(a) // корінь кубічний
pow(a, b) // a в степені b
abs(a) // модуль |a|
min(a, b) // мінімальне число з a та b
max(a, b) // максимальне число з a та b
ceil(a) // округлення вгору до цілого числа
floor(a) // округлення вниз до цілого числа
round(a) // округлення до найближчого цілого числа</code></pre>
            <br>
            <p>Якщо треба знайти мінімальне чи максимальне число серед 3 і більше чисел, то прописуємо декілька min чи max, щоб функція порівнювала пари.</p>
<pre><code>min(a, min(b, c));
max(a, max(b, c));</code></pre>
            <br>
            <p>Ось набір задач з eolymp, які допоможуть вам закріпити роботу з математичними функціями:</p>
            <br>
            <p><a href="https://eolymp.com/uk/problems/3867" target="_blank" class="text-color">3867</a></p>
            <p><a href="https://eolymp.com/uk/problems/2606" target="_blank" class="text-color">2606</a></p>
            <p><a href="https://eolymp.com/uk/problems/108" target="_blank" class="text-color">108</a></p>
            <p><a href="https://eolymp.com/uk/problems/935" target="_blank" class="text-color">935</a></p>
            <p><a href="https://eolymp.com/uk/problems/933" target="_blank" class="text-color">933</a></p>
            <p><a href="https://eolymp.com/uk/problems/7459" target="_blank" class="text-color">7459</a></p>
            <p><a href="https://eolymp.com/uk/problems/946" target="_blank" class="text-color">946</a></p>
            <p><a href="https://eolymp.com/uk/problems/6273" target="_blank" class="text-color">6273</a></p>
            <p><a href="https://eolymp.com/uk/problems/926" target="_blank" class="text-color">926</a></p>
            <p><a href="https://eolymp.com/uk/problems/924" target="_blank" class="text-color">924</a></p>
            <p><a href="https://eolymp.com/uk/problems/57" target="_blank" class="text-color">57</a></p>
            <p><a href="https://eolymp.com/uk/problems/942" target="_blank" class="text-color">942</a></p>
            <p><a href="https://eolymp.com/uk/problems/1359" target="_blank" class="text-color">1359</a></p>
            <br><br><br><br><br><br>
            </div>

        `
    }
];

// ==========================
// СТАН ФІЛЬТРІВ (index.html)
// ==========================
let currentLanguage = null; // null = усі мови
let currentSearch = "";     // порожній рядок = без фільтра за назвою

// ==========================
// РЕНДЕР КАРТОК НА ГОЛОВНІЙ (index.html)
// ==========================
function renderCourseCards(list = courses) {
    const container = document.querySelector(".courses");
    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding: 20px 0; grid-column: 1 / -1;">Курсів не знайдено.</p>`;
        return;
    }

    list.forEach(course => {
        const link = document.createElement("a");
        link.href = `courses.html?id=${course.id}`;

        const card = document.createElement("div");
        card.className = "course-card";

        const img = document.createElement("img");
        img.src = course.img;
        img.alt = course.title;

        const title = document.createElement("h2");
        title.textContent = course.title;

        card.appendChild(img);
        card.appendChild(title);
        link.appendChild(card);
        container.appendChild(link);
    });
}

// ==========================
// ФІЛЬТРАЦІЯ (мова + пошук)
// ==========================
function applyFilters() {
    const search = currentSearch.trim().toLowerCase();

    const filtered = courses.filter(course => {
        const matchesLanguage = !currentLanguage || course.language === currentLanguage;
        const matchesSearch = !search || course.title.toLowerCase().includes(search);
        return matchesLanguage && matchesSearch;
    });

    renderCourseCards(filtered);
}

// ==========================
// ОБРОБНИКИ ПОШУКУ ТА ФІЛЬТРА ЗА МОВОЮ
// ==========================
function initFilters() {
    const searchInput = document.getElementById("name_course_input");
    const searchForm = document.getElementById("name_course");
    const dropdown = document.querySelector(".language-menu .dropdown");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearch = e.target.value;
            applyFilters();
        });
    }

    // Запобігаємо перезавантаженню сторінки при Enter
    if (searchForm) {
        searchForm.addEventListener("submit", (e) => e.preventDefault());
    }

    if (dropdown) {
        const links = dropdown.querySelectorAll("a");

        // За замовчуванням підсвічуємо "Усі"
        links.forEach(a => {
            if (a.dataset.lang === "all") {
                a.classList.add("active-filter");
            }
        });

        links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();

                const lang = link.dataset.lang;

                currentLanguage = (lang === "all") ? null : lang;

                // Підсвічуємо активний пункт меню
                links.forEach(a => a.classList.remove("active-filter"));
                link.classList.add("active-filter");

                applyFilters();
            });
        });
    }
}

// ==========================
// РЕНДЕР КОНТЕНТУ КУРСУ (courses.html)
// ==========================
function renderCoursePage() {
    const container = document.getElementById("course-container");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    const course = courses.find(c => c.id === id);

    if (course) {
        container.innerHTML = course.text;
        document.title = `FCP_Academy - ${course.title}`;

        // Блок лічильника переглядів
        const viewsBlock = document.createElement("div");
        viewsBlock.id = "views-counter";
        viewsBlock.style.textAlign = "center";
        viewsBlock.style.padding = "10px 0 30px";
        viewsBlock.style.fontSize = "18px";
        viewsBlock.style.opacity = "0.8";
        viewsBlock.textContent = "Перегляди: ...";
        container.appendChild(viewsBlock);

        // Оновлюємо лічильник через Firebase
        incrementCourseViews(course.id).then(views => {
            if (views !== null) {
                viewsBlock.textContent = `Перегляди: ${views}`;
            } else {
                viewsBlock.textContent = "Перегляди: недоступно";
            }
        });
    } else {
        container.innerHTML = `<p style="text-align:center; padding: 40px 0;">Курс не знайдено.</p>`;
    }
}

// ==========================
// ІНІЦІАЛІЗАЦІЯ
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    renderCourseCards();
    renderCoursePage();
    initFilters();
});