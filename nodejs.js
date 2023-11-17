import { fork } from 'node:child_process'
import { stream } from 'undici-types'

// ===========BUFFER==========
1) Що  таке  бафер  і  для чого  використовується
 To work  with  and  represent  binary  data  in memory
 is subclass of Uint8Array . All TypedArray methods 
 are available in Buffer
 const buf = Buffer.from('hello world', 'utf8');
2) Яка  стандартна  кодiровка  бафера
   utf8
3)Як  бафер  декодувати  в  стрінгу 
  buf.toString('hex')
4) Blob
    Binary  large object . Represented  as immutable rowdata.
    used to  store  mediadata (images, sounds, videos)
5) як  можна створити  бафер 
    Buffer.alloc()
    Buffer.from() 
    Buffer.allocUnsafe()
6) Різниця між alloc() allocUnsafe(). Що  швидше;
Buffer.alloc() is safe and initializes the buffer with zeros or a specified value.
Buffer.allocUnsafe() is faster but does not guarantee safe 
initialization and may contain arbitrary data.
7) Як  перевірити  чи  певні  дані  є  бафером
    Buffer.isBuffer(buffer)


8) What are the potential security concerns related to Buffers, and how can they be mitigated
    Buffer Overflow: Buffer overflow occurs when you write more data 
    into a Buffer than its allocated size.This can lead to memory
    corruption and potentially allow attackers to execute arbitrary code.

    Inadequate Input Validation: When creating Buffers from untrusted
     data sources, such as user input or external network data, 
     failing to validate and sanitize the input can lead to vulnerabilities 
     like code injection or data leakage.

     Content-Type Mismatch: When working with Buffers, ensure that the content 
     type and encoding are properly set to prevent issues like 
     Cross-Site Scripting (XSS) when rendering data in web applications.


// ===========FILE SYSTEM==========
1) Що таке мождуль  fs;
2) Як визначити  чи  я  маю доступ  до  читання писання  в  файл
  fs.access('file', constants.R_OK | constants.W_OK)
3) Як  отримати  дескриптор  файлу  і для  чого  
    fs.open() if you want to perform several actions on that file. 
    blocks file  for  other  processes
4) Записати файл або 
   fs.appendFile
   fsPromises.writeFile  і яка  між  ними  різниця
5) Як  змінити  пермішени  до  файлу  
    fs.chmod()
6)  Як скопіювати  файл 
    fs.copyFile()
7) Як  створити  папку 
    fs.mkDir()
8) Як  перейменувати папку файл 
fsPromises.rename(oldPath, newPath)
9) як видалити  папку файл
    fsPromises.rm()
10) Як  створити  Symlink
    fsPromises.symlink(target, path[, type])
11) Як  створити  файл ватчери
    fsPromises.watch(filename[, options])



// ===========Stream==========
1) Що таке стрім . Назвіть  приклади
    A stream is an abstract interface for working with streaming data in Node.js. 
2)Які  є типи  стрімів  
    Readable writable Duplex transform
3) Як спіймати  ерорки  в  стрімах 
     on('error') try catch
4) що  таке  on  drain event
5) Що таке  стрім пайпінг 
6) Як викинути  в  потоці  ерорку 
    myStream.destroy(fooErr);
7) Як завершити  Writable stream
    Writable.end();
8) Які івенти  можна  хендлити  для  Writable stream
 error, drain, close finish
9) Які івенти  можна  хендлити  для  Readable stream
 error, drain, close data end
10) Що  таке  backpresuure
11)Що таке high-water mark
    is a concept that defines the maximum amount
    of data that can be buffered 


// ===========EVENTS==========
1) Що таке Event Emitter та  як  використовується 
    Клас який  дозволяє  використати  EventDriven архітектуру
    Навішати  евент - event.on('name');
    Вистрілити event.emit("name")
2)В  якому  порядку  викликаються  функції колбеки 
    якщо  навішані  на один  евент 
    Одна  за одною  асинхронно
3) Як  викликати  евент  з  аргументами 
    event.emit("name", arg1, arg2)
4) Різниця  між  
    event.on(),event.once()
5) Як  Хендлити  ерорки  в  евент  емітері  
6) Навіщо  використовуєтсья   errorMonitor
  Щоб  промоніторити  ерорку  але  не  злапати її
7) Для  чого  є  флаг  captureRejections 
  Для  асинхронник  колбеків  евентів . Навішуєж  then на  хендлер 
  ee2[Symbol.for("nodejs.rejection")] = () => {
  };
8) Як  видалити  ліснер 
    myEmitter.removeAllListeners("event");
    myEmitter.removeListener("event", () => {});



// ===========CHILD PROCESS==========
1)Що  таке  child process in Node.js?
    A child process is a spawned operating system process
    created by another process, referred to as the parent process.
2) Як  можна  сторити  child process in Node.js?
     spawn or exec functions from the child_process module.
3)Яка різниця  між  spawn exec fork
    spawn is used for running large amounts of data (streams of data),
    exec is used for running commands with large amounts of textual output.
    fork method is a variation of spawn used to spawn Node.js processes
    .It is specifically designed for creating child processes running Node.js scripts.
4) чм відрізняється spawn від  spawnSync
    spawnSync - блокує основний  допоки  не  закінчитьтся  
5)Як  можна  комуныкувати мыж parent and child processes in Node.js?
    Communication between parent and child processes can be achieved 
    using inter process communication (IPC), which involves sending
    messages via the send method and listening for messages using the message event.
6)Що таке  "stdio" в  контексті child processes.
"stdio" stands for standard input/output. Child processes can share
 their standard input, output, and error streams with the parent process.
7)Коли  викличеться  евент  disconnect
 when manuall call process.disconnect(), 