let pet = document.querySelector('.pet');
    let loveBtn = document.querySelector('#send_love');
    let dumbbellBtn = document.querySelector('#dumbbell_btn');
    let flowerBtn = document.querySelector('#flower_btn');
    let heart = document.querySelector('.heart');
    let dumbbell = document.querySelector('.dumbbell');
    let flower = document.querySelector('.flower');
    let box = document.querySelector('.box');
    let clickCount = 0;
    let bookClickCount = 0;
    let talkBye = document.querySelector('.talk_bye');
    let btn = document.querySelectorAll('button');
    let bookBtn = document.querySelector('#book_btn');
    let book = document.querySelector('.book')
    let sleepBtn = document.querySelector('#sleep_btn')
    let talkBtn = document.querySelector('#talk_btn')
    let eatBtn = document.querySelector('#eat_btn')
    let gameOver = document.querySelector('.gameover')
    let gameOverTxt = document.querySelector('.gameover_txt')
    let talkWith = document.querySelector('.talk_with')
    let nextBtn = document.querySelector('.next_btn')
    let talkP = document.querySelector('.talk_with p')

    let talkClickCount = 0;


    let spaceship = document.querySelector('.spaceship')
    let light = document.querySelector('.spaceship_light')
    
    function sendSleep() {
        pet.style.transition = "all 1s ease";

            pet.style.left = '50px'
            pet.style.backgroundImage = 'url("svg/pet_3_noah_sleep.svg")'
            box.style.filter = 'brightness(60%)'

        setTimeout(() => {
            pet.style.left = '300px'
            pet.style.backgroundImage = 'url("svg/pet_3_noah_front.svg")'
            box.style.filter = 'brightness(100%)'
        }, 3500);
    }
    sleepBtn.addEventListener('click', sendSleep);


    function sendEat() {
        pet.style.animation = 'none';
        pet.offsetHeight;
        pet.style.animation = 'eating 5s ease'

        setTimeout(() => {
            pet.style.backgroundImage = 'url("svg/pet_3_noah_front.svg")'
            pet.style.animation = 'scaleAnimation 2s infinite';
        }, 3500);
    }
    eatBtn.addEventListener('click', sendEat);


    // 대화1=====================================================================
    let backgroundImages1 = [
        'svg/talk_me.svg',
        'svg/talk_noah.svg',
        'svg/talk_noah.svg'
    ]
    let textContents1 = [
        '응, 하니, 오늘도 운동 하고 있었어?',
        '그럼, 오늘은 귀 근육을 단련하는 날이야! <br> 후후후...',
        '귀를 조금 더 쫑긋 세울 수 있게 만들어서 <br> 바람의 이야기를 들을 거야♬'
    ]
    let textColor1 = [
        '#ff76b3',
        '#CF73FF',
        '#CF73FF'
    ]


    // 대화2========================================================================
    let backgroundImages2 = [
        'svg/talk_me.svg',
        'svg/talk_noah.svg',
        'svg/talk_noah.svg'
    ]
    let textContents2 = [
        '하니, 기분이 좋아 보이네?',
        '응! 오늘 비가 오잖아.',
        '비 오는 날에 이불 속에 너브리 돼서 <br> 노래를 흥얼거리면 기분이 좋아진다구 ♬'
    ]
    let textColor2 = [
        '#ff76b3',
        '#CF73FF',
        '#CF73FF'
    ]
    let petEmotions = [
        'svg/pet_3_noah_eating8.svg',
        'svg/pet_3_noah_front.svg',
        'svg/pet_3_noah_eating8.svg'
    ]


    // 대화3========================================================================
    let backgroundImages3 = [
        'svg/talk_noah.svg',
        'svg/talk_me.svg',
        'svg/talk_noah.svg',
        'svg/talk_noah.svg'
    ]
    let textContents3 = [
        '오늘은 정말 아무것도 하기 싫은 날이야!',
        '그렇지만 너, 운동하고 있는 걸?',
        '그래, 그럴수록 몸을 움직여야 돼! <br> 정말 힘이 든 날이 아니라면...',
        '운동하고, 씻고, 산책하고, 맛있는 것도 먹으면서 <br> 나 자신을 위로해 주어야지♬'
    ]
    let textColor3 = [
        '#CF73FF',
        '#ff76b3',
        '#CF73FF',
        '#CF73FF'
    ]
    let petEmotions2 = [
        'svg/pet_3_noah_sad.svg',
        'svg/pet_3_noah_front.svg',
        'svg/pet_3_noah_front.svg',
        'svg/pet_3_noah_eating8.svg'
    ]


    //대화4=================================================================================
    let backgroundImages4 = [
        'svg/talk_noah.svg',
        'svg/talk_me.svg',
        'svg/talk_noah.svg',
        'svg/talk_me.svg',
        'svg/talk_noah.svg',
        'svg/talk_me.svg',
        'svg/talk_noah.svg',
        'svg/talk_me.svg',
        'svg/talk_noah.svg',
        'svg/talk_noah.svg',
        'svg/talk_noah.svg',
        'svg/talk_me.svg',
        'svg/talk_noah.svg',
        'svg/talk_me.svg'
    ]
    let textContents4 = [
        '네게 줄게.',
        '정말? 고마워!',
        '... ... .',
        '하니, 귀가 왜 축 처졌어?',
        '내가 태어난 별에서 <br> 돌아오라는 신호를 보냈어.',
        '뭐? 정말? <br> 그러면 오늘이 마지막인 거야?',
        '응... ... .',
        '(슬프다! 보내 주기 싫어!)',
        '그렇지만 나는 언젠가 <br> 너와 다시 만날 것이라는 확신이 들어.',
        '안 된다면, 내가 어떻게 해서든 <br> 이 별에 연락할 방법을 찾아 볼게!',
        '그동안 정말 고마웠어... ... .',
        '아냐, 싫어, 가지 마!',
        '꼭 다시 만나자!',
        '안 돼!'
    ]
    
    let textColor4 = [
        '#CF73FF',
        '#ff76b3',
        '#CF73FF',
        '#ff76b3',
        '#CF73FF',
        '#ff76b3',
        '#CF73FF',
        '#ff76b3',
        '#CF73FF',
        '#CF73FF',
        '#CF73FF',
        '#ff76b3',
        '#CF73FF',
        '#ff76b3'
    ]
    let petEmotions3 = [
        'svg/pet_3_noah_front.svg',
        'svg/pet_3_noah_front.svg',
        'svg/pet_3_noah_sad.svg',
        'svg/pet_3_noah_sad.svg',
        'svg/pet_3_noah_sad.svg',
        'svg/pet_3_noah_sad.svg',
        'svg/pet_3_noah_sad.svg',
        'svg/pet_3_noah_sad.svg',
        'svg/pet_3_noah_eating8.svg',
        'svg/pet_3_noah_front.svg',
        'svg/pet_3_noah_eating8.svg',
        'svg/pet_3_noah_front.svg',
        'svg/pet_3_noah_eating8.svg',
        'svg/pet_3_noah_front.svg'
    ]

    let currentIndex = 0;
    let currentIndex2 = 0;
    let currentIndex3 = 0;
    let currentIndex4 = 0;

    // 대화 시작!!!!!!!!!=======================================================
    function sendTalk() {
        talkClickCount++;

        box.style.backgroundImage = 'url("svg/blur_bg.svg")'
        pet.style.transition = '1s ease'
        pet.style.animation = 'none';
        pet.style.transform = 'scale(3)';
        pet.style.top = '130px'
        talkWith.style.display = 'block'
        talkWith.style.backgroundImage = 'url("svg/talk_noah.svg")'
        
        // 대화 1111111111111====================================================
        if(talkClickCount === 1){

            talkP.innerText = '안녕!'
            talkP.style.color = '#CF73FF'

            nextBtn.addEventListener('click', () => {
                talkWith.style.backgroundImage = `url(${backgroundImages1[currentIndex]})`
                talkP.style.color = textColor1[currentIndex];
                talkP.innerHTML = textContents1[currentIndex];

                currentIndex++;
                if(currentIndex === 4) {
                    box.style.backgroundImage = 'url("svg/room_pet3.svg")'
                    pet.style.animation = 'scaleAnimation 2s infinite';
                    pet.style.transform = 'scale(1)';
                    pet.style.top = '320px'
                    talkWith.style.display = 'none'
                    pet.style.backgroundImage = 'url("svg/pet_3_noah_front.svg")'
                }
            })

        // 대화 222222222222222222222222222=====================================
        }else if(talkClickCount === 2) {
                
            talkP.innerText = '으음~♬ 음~ 뇨롱~ 뇽♬',
            pet.style.backgroundImage = "url('svg/pet_3_noah_eating8.svg')"

            nextBtn.addEventListener('click', () => {
                talkWith.style.backgroundImage = `url(${backgroundImages2[currentIndex2]})`
                talkP.style.color = textColor2[currentIndex2];
                talkP.innerHTML = textContents2[currentIndex2];
                pet.style.backgroundImage = `url(${petEmotions[currentIndex2]})`

                currentIndex2++;
                
                if(currentIndex2 === 4) {
                    box.style.backgroundImage = 'url("svg/room_pet3.svg")'
                    pet.style.animation = 'scaleAnimation 2s infinite';
                    pet.style.transform = 'scale(1)';
                    pet.style.top = '320px'
                    talkWith.style.display = 'none'
                    pet.style.backgroundImage = 'url("svg/pet_3_noah_front.svg")'
                }
            })

        // 대화 3333333333333333333333===================================
        }else if(talkClickCount === 3) {

            talkP.innerText = '후아아아... ~~'
            pet.style.backgroundImage = "url('svg/pet_3_noah_sad.svg')"

            nextBtn.addEventListener('click', () => {
                talkWith.style.backgroundImage = `url(${backgroundImages3[currentIndex3]})`
                talkP.style.color = textColor3[currentIndex3];
                talkP.innerHTML = textContents3[currentIndex3];
                pet.style.backgroundImage = `url(${petEmotions2[currentIndex3]})`

                currentIndex3++;
                
                if(currentIndex3 === 5) {
                    box.style.backgroundImage = 'url("svg/room_pet3.svg")'
                    pet.style.animation = 'scaleAnimation 2s infinite';
                    pet.style.transform = 'scale(1)';
                    pet.style.top = '320px'
                    talkWith.style.display = 'none'
                    pet.style.backgroundImage = 'url("svg/pet_3_noah_front.svg")'
                }
            })

        // 대화 444444444444444444444444===================================
        }else if(talkClickCount === 4) {

            talkP.innerText = '짠! 이것 봐, 빗소리를 담은 mp3!'
            
            nextBtn.addEventListener('click', () => {
                talkWith.style.backgroundImage = `url(${backgroundImages4[currentIndex4]})`
                talkP.style.color = textColor4[currentIndex4];
                talkP.innerHTML = textContents4[currentIndex4];
                pet.style.backgroundImage = `url(${petEmotions3[currentIndex4]})`

                currentIndex4++;
                
                if(currentIndex4 === 15) {
                    box.style.backgroundImage = 'url("svg/room_pet3.svg")'
                    pet.style.animation = 'scaleAnimation 2s infinite';
                    pet.style.transform = 'scale(1)';
                    pet.style.top = '320px'
                    talkWith.style.display = 'none'
                    pet.style.backgroundImage = 'url("svg/pet_3_noah_front.svg")'

                    setTimeout(() => {
                        box.style.filter = 'brightness(80%)'
                        spaceship.style.opacity = 1;
                        spaceship.style.display = 'block';
                    }, 1000)

                    setTimeout(() => {
                        light.style.opacity = 1;
                        light.style.display = 'block';
                    }, 2000)

                    setTimeout(() => {
                        pet.style.top = '120px';
                        pet.style.opacity = 0;
                    }, 3000)

                    setTimeout(() => {
                        light.style.opacity = 0;
                        spaceship.style.top = '270px';
                        spaceship.style.backgroundImage = "url('svg/end_noah_2.svg')"
                    }, 4000)

                    setTimeout(() => {
                        spaceship.style.transform = 'scale(0)';
                    }, 5000)

                    setTimeout(() => {
                        window.location.href = 'Ending_noah.html';
                    }, 6000)
                }
            })

        }
    }
    talkBtn.addEventListener('click', sendTalk);











    // =========================================버튼 안 눌렸을 경우

    let buttonClicked = false; // 버튼이 눌렸는지 여부를 추적하는 변수

    // 버튼 클릭 이벤트 핸들러
    function buttonClickHandler() {
        buttonClicked = true; // 버튼이 눌렸음을 표시
        clearTimeout(inactivityTimer3); // 타이머를 초기화하여 함수 실행 방지
        clearTimeout(inactivityTimer6);
        clearTimeout(inactivityTimer9);
        clearTimeout(inactivityTimer12);
    }

    // 버튼에 클릭 이벤트 리스너 추가
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', buttonClickHandler);
    });

    // 함수 실행을 조절하는 부분
    inactivityTimer3 = setTimeout(() => {
        // 만약 버튼이 눌리지 않았다면 함수 실행
        if (!buttonClicked) {
            talkBye.style.transition = 'all 1s ease';
            talkBye.style.opacity = 1;
            talkBye.style.backgroundImage = 'url("png/talk_alone1.png")';
            talkBye.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                talkBye.style.opacity = 0;
                talkBye.style.transform = 'scale(1)';
            }, 1000);
        }
    }, 3000);

    inactivityTimer6 = setTimeout(() => {
        if (!buttonClicked) {
            talkBye.style.transition = 'all 1s ease';
            talkBye.style.opacity = 1;
            talkBye.style.backgroundImage = 'url("png/talk_alone2.png")';
            talkBye.style.transform = 'scale(1.1)';
            pet.style.backgroundImage = 'url("svg/pet_3_noah_sad.svg")';
            pet.style.transition = 'all 1s ease'
            
            setTimeout(() => {
                talkBye.style.opacity = 0;
                talkBye.style.transform = 'scale(1)';
            }, 1000);
        }
    }, 6000);

    inactivityTimer9 = setTimeout(() => {
        talkBye.style.opacity = 1;
            talkBye.style.backgroundImage = 'url("png/talk_alone3.png")';
            talkBye.style.transform = 'scale(1.1)';
            pet.style.transition = 'all 1s ease'
            box.style.transition = 'all 1s ease'
            
            setTimeout(() => {
                talkBye.style.opacity = 0;
                talkBye.style.transform = 'scale(1)';
            }, 1000)

            setTimeout(() => {
                pet.style.backgroundImage = 'url("svg/pet_3_noah_back.svg")';
            }, 1000)

            setTimeout(() => {
                pet.style.left = 500 + 'px';
                pet.style.top = 120 + 'px';
                box.style.backgroundImage = 'url("svg/room_pet3_bye.svg")'
            }, 1000)

            pet.addEventListener('click', () => {
                clearTimeout(inactivityTimer12);
                buttonClicked = true;
                setTimeout(() => {
                    document.querySelector('.talk_back').style.opacity = 1;
                }, 1000)
                setTimeout(() => {
                    pet.style.backgroundImage = 'url("svg/pet_3_noah_front.svg")'
                }, 1500)
                setTimeout(() => {
                    document.querySelector('.talk_back').style.opacity = 0;
                    pet.style.left = '300px'
                    pet.style.top = '320px'
                    box.style.backgroundImage = 'url("svg/room_pet3.svg")'
                }, 2000)
            })

    }, 9000);

    // 함수 실행을 조절하는 부분
    inactivityTimer12 = setTimeout(() => {
        // 만약 버튼이 눌리지 않았다면 함수 실행
        if (!buttonClicked) {
            pet.style.transition = 'all 1s ease'
            box.style.transition = 'all 1s ease'
            pet.style.left = '550px'
            pet.style.transform = 'scale(0)';
            pet.style.opacity = 0;
            
            setTimeout(() => {
                box.style.backgroundImage = 'url("svg/room_pet3.svg")'
            }, 1000);
            setTimeout(() => {
                gameOver.style.transform = 'scale(1)'
                gameOver.style.opacity = '1';
            }, 2000)
            setTimeout(() => {
                gameOverTxt.style.opacity = '1';
                gameOverTxt.style.display = 'block';
            }, 2500)
        }
    }, 12000);

    // book버튼================================================
    function sendBook() {
        book.style.transition = "all 1s";
        book.style.opacity = 1;
        book.style.left = '480px';
        book.style.top = '520px';

        pet.style.backgroundImage = "url('svg/pet_3_noah_book.svg')";

        setTimeout(() => {
            book.style.opacity = 0;
            book.style.transform = 'scale(1)';
            pet.style.backgroundImage = "url('svg/pet_3_noah_front.svg')";
        }, 1000);

        bookClickCount++;

        if(bookClickCount > 5) {
            pet.style.transition = "opacity 2s";
            pet.style.opacity = 0;

            setTimeout(() => {
                window.location.href = ''
            }, 3000)
        }
    }
    bookBtn.addEventListener('click', sendBook);



    // 하트 버튼 눌렀을 경우
    function sendLove() {
        // 하트 이미지 나오게 하기
        heart.style.transition = "all 1s";
        pet.style.transition = "all .3s ease";
        heart.style.opacity = 1;
        heart.style.transform = 'scale(1.5)';
        

        pet.style.backgroundImage = "url('svg/pet_3_noah_eating8.svg')"

        setTimeout(() => {
            heart.style.opacity = 0;
            heart.style.transform = 'scale(1)';
            pet.style.backgroundImage = "url('svg/pet_3_noah_front.svg')"
        }, 1000);
    }
    loveBtn.addEventListener('click', sendLove);



    // 덤벨 버튼 눌렀을 경우
    function sendDumbbell() {
        dumbbell.style.transition = "all 1s";
        dumbbell.style.opacity = 1;
        dumbbell.style.top = '500px';
        pet.style.backgroundImage = "url('svg/pet_3_noah_eating8.svg')"

        setTimeout(() => {
            dumbbell.style.opacity = 0;
            dumbbell.style.top = '430px';
            pet.style.backgroundImage = "url('svg/pet_3_noah_front.svg')"
        }, 1000);
    }
    dumbbellBtn.addEventListener('click', sendDumbbell);
    


    // 꽃 버튼 눌렀을 경우
    function sendFlower() {
        flower.style.transition = "all 1s";
        flower.style.opacity = 1;
        flower.style.transform = 'scale(1.5)';
        pet.style.backgroundImage = "url('svg/pet_3_noah_eating8.svg')"

        setTimeout(() => {
            flower.style.opacity = 0;
            flower.style.transform = 'scale(1)';
            pet.style.backgroundImage = "url('svg/pet_3_noah_front.svg')"
        }, 1000);
    }
    flowerBtn.addEventListener('click', sendFlower);