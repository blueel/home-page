        var sections = document.querySelectorAll('#content section');
        for(let i=0;i<sections.length;i++){
            // console.log(sections[i].offsetTop);
        }
        //头部注册点击事件
        // var nav = doccuent.querySelector('.show')
        var lis = document.querySelectorAll('.show li');
        var phone_lis = document.querySelectorAll('.phone li');
        var currentShow = (index) => {
            for (let j=0;j<lis.length;j++){
                lis[j].className="";
            }
            lis[index].className='current';
        }
        for (let i=0 ;i <lis.length ;i++){
            lis[i].addEventListener('click',function(){
                window.scrollTo(0,lis[i].dataset.scroll2);
                currentShow(i);
            })
        }
        //手机屏幕下的样式
        console.log(phone_lis);
        var img_show = document.querySelector('.img_show');
        var nav_show = document.querySelector('.show ul');
        var scroll_top = 0;
        for (let i=0 ;i <phone_lis.length ;i++){
            phone_lis[i].addEventListener('click',function(){
                window.scrollTo(0,phone_lis[i].dataset.scroll);
                // currentShow(i);
                for (let j=0;j<phone_lis.length;j++){
                    phone_lis[j].className="";
                }
                phone_lis[i].className='current';
            })
        }
        if(window.screen.width <400){
            var _phone = document.querySelector('.phone');
            var flag_ = true ;
            nav_show.style.display = 'none';
            img_show.addEventListener('click',function (){
                if(flag_){
                   _phone.style.transform = 'translate(0)';
                   flag_ = false ; 
                }else{
                   _phone.style.transform = 'translate(100%)'
                   flag_ = true ;
                }
            })
            document.addEventListener('scroll',() => {
                if(window.pageYOffset==0){
                    _phone.style.transform = 'translate(100%)'
                }else if(window.pageYOffset >0){
                    img_show.style.display = 'block';

                }
            })
        }else{
            nav_show.style.display = 'block';
            img_show.style.display = 'none';
        }

        //头部样式控制
        var header = document.querySelector('#header');
        var cat = document.querySelector('#bongo-cat');
        cat.addEventListener('click',() => {
            window.scrollTo(0,0);
        })
        document.addEventListener('scroll',function(){
            let distance = window.pageYOffset;
            // console.log(distance);
            if(distance == 0){
                header.style.backgroundColor = 'transparent';
                img_show.style.display = 'none';
                cat.style.display = 'none';
                // _phone.style.transform = 'translate(100%)'
            }else if(distance<800){
                currentShow(0);
                header.style.opacity = 0.5;
                header.style.backgroundColor = 'black';
                // img_show.style.display = 'block';
            }
            else if(distance >=800 && distance<1600){
                currentShow(1);
                header.style.opacity = 1;
                cat.style.display = 'block';
            }else if(distance >=1600 && distance<2400){
                currentShow(2);
                header.style.opacity = 1;

            }else if(distance >=2400){
                currentShow(3);
                header.style.opacity = 1;
            }
        })
         //悬浮箭头
         var down = document.querySelector('.down');
         var flag = true;
         var fn = function(){
            if(flag==true){
                down.style.top = '90%';
                flag = false;
             }else{
                down.style.top = '85%';
                flag = true;
             }
         }
         setInterval(fn,1500);
         //点击开始浏览按钮
         var btn = document.querySelector('.button');
         btn.addEventListener('click',function(){
             window.scrollTo(0,800);
         })


         
         