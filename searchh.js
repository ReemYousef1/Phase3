let search = document.getElementById('search');
let search_icon = document.getElementById('search_icon');

search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input');
})

let cato_bx = document.getElementById('cato_bx');

left_scroll.addEventListener('click', () => {
    cato_bx.scrollLeft -= 100;
})
right_scroll.addEventListener('click', () => {
    cato_bx.scrollLeft += 100;
})




const slider_load = () => {
    setTimeout(() => {
        header.style.background = "url('img/121213.jpg') no-repeat center center/cover";
        header_dur.innerText = "1h 47min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>6.5
        <span>Action / Adventure / Sci-Fi</span>`;
        header_title.innerText = "Rampage";
        header_pra.innerText = "From Wikipedia, the free encyclopedia Rampage is a series of video games released by Midway (1986–2009) and Warner Bros. Interactive Entertainment (2009–present) for the arcade and various consoles. The basic premise of the games is that, due to experiment-related accidents, the player controls a human transformed into a giant monster.";
        slider_btn[0].style.background = "#fff";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    }, 0000);
    setTimeout(() => {
        header.style.background = "url('img/121214.jpg') no-repeat center center/cover";
        header_dur.innerText = "1h 57min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>8.5
        <span>Comady / Action / Sci-Fi</span>`;
        header_title.innerText = "Ant-Man";
        header_pra.innerText = "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 12th film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed from a screenplay by the writing teams of Edgar Wright and Joe Cornish, and Adam McKay";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "#fff";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    }, 5000);
    setTimeout(() => {
        header.style.background = "url('img/121215.jpg') no-repeat center center/cover";
        header_dur.innerText = "2h 10min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>9.2
        <span>Comady / Action / Drama</span>`;
        header_title.innerText = "Pirates of the Caribbean";
        header_pra.innerText = "Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "#fff";
    }, 10000);
}

setInterval(slider_load, 15000);
slider_load();

// video controal start 

let plays = document.getElementById('play');
let videos = document.getElementById('video');
let play_btn = document.getElementById('play_btn');



const searches = [{
            title: "لجنة الأعذار",
            letter: "لج",
            email:"Ccis.excuse@imamu.edu.sa",
            url: "LogInpage.html",
        
        },
        {
            title: " د. نجود العشبان",
            letter: "نج",
            email:"nashban@imamu.edu.sa",
            url: "LogInpage.html",
        
        },
        {
            title: "متعاونات",
            letter: "مت",
            email:"",
            url: "LogInpage.html",
        
        },
        {
            title: "أ. حنان الوادي ",
            letter: "حن",
            email:"it.office.f@imamu.edu.sa",
            url: "LogInpage.html",
        
        },
        {
            title: "أ.نوره محمد الغامدي ",
            letter: "نو",
            email:"nmalghamdi@imamu.edu.sa",
            url: "LogInpage.html",
        
        },
        {
            title: " ذهب منصور البحيري",
            letter: "ذه",
            email:"amalbuhairi@imamu.edu.sa",
            url: "LogInpage.html",
        
        },
        {
            title: "ريم يحيى عسيري",
            letter: "ري",
            email:"ryassiri@imamu.edu.sa",
            url: "LogInpage.html",
        
        },
        {
            title: "أ.سهى صالح الثنيان",
            letter: "سه",
            email:"sthunyyan@imamu.edu.sa",
            url: "LogInpage.html",
        
        },
        {
            title: " فاطمة ناصر أبا الخيل",
            letter: "فا",
            email:"fnhkhail@imamu.edu.sa",
            url: "LogInpage.html",
        },
              {
            title: "د.راوية محمد بن شيحه",
            letter: "را",
            email:"rmsheha@imamu.edu.sa",
            url: "t1.html",
        
        },
        {
            title: "أ.نجلاء عبدالرحمن الحسون",
            letter: "نج",
            letter: "نجل",
             email:"naahasson@imamu.edu.sa",
            url: "LogInpage.html",
               },
               {
                title: " أ.هيفاء عبدالعزيز الحسيني",
                letter: "هي",
                email:" haalhussaini@imamu.edu.sa",
                url: "LogInpage.html",
               },
               {
                title: " د.صالحة فرحان العتيبي",
                letter: "صا",
                email:"sfosimi@imamu.edu.sa",
                url: "LogInpage.html",
                      },

                      {
                        title: " أ.بسمة عبدالعزيز الصولي",
                        letter: "بس",
                        email:"basoli@imamu.edu.sa",
                        url: "LogInpage.html",
                    
                    },
                    {
                        title: " د.أمل سليمان السيف",
                        letter: "ام",
                        email:"asmalsaif@imamu.edu.sa",
                        url: "LogInpage.html",
                               },
                               {
                                title: " أ.منيرة عبدالرحمن الشبل",
                                letter: "من",
                                email:"maalshebel@imamu.edu.sa",
                                url: "LogInpage.html",
                                      },
                                      {
                                        title: " د.تهاني فهد البلوي",
                                        letter: "ته",
                                        email:"tfalbalawi@imamu.edu.sa",
                                        url: "LogInpage.html",
                                   },
                                   {
                                    title: " د.منال السبهان",
                                    letter: "من",
                                    email:"mksabhan@imamu.edu.sa",
                                    url: "T2.html",  
                                },
                                {
                                    title: " وكيلة قسم إدارة المعلومات",
                                    letter: "ادا",
                                    email:"",
                                    url: "LogInpage.html",
                                
                                },
      
                                {
                                    title: " وكيلة قسم نظم المعلومات",
                                    letter: "نظ",
                                    email:"",
                                    url: "LogInpage.html",
                              },
                              {
                                title: " شؤون الطالبات",
                                letter: "شو",
                                letter: "شؤ",
                                 email:"",
                                url: "LogInpage.html",
                           },
                           {
                            title: " الأخصائية النفسية",
                            letter: "الاخصائية",
                            email:"",
                            url: "LogInpage.html",
                        
                        },
    ]
  

let search_bx2 = document.getElementsByClassName('search_bx2')[0];


window.addEventListener('load', () => {
    searches.forEach(element => {
        const { img, title, email, url } = element;

        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = ` <img src="${img}" alt="">
        <div class="content2">
            <h6>${title}</h6>
            <p>${email}</p>
        </div>`;
        search_bx2.appendChild(card);
    });
});


search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content2')[0];
        let c = b.getElementsByTagName('h6')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_bx2.style.visibility = "visible";
            search_bx2.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0) {
            search_bx2.style.visibility = "hidden";
            search_bx2.style.opacity = 0;
        }
    }
})