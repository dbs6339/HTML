            var Links ={
                setColor:function(color){
                    var alist = document.querySelectorAll('a');
                    var i = 0;
                    while(i<alist.length){
                        alist[i].style.color=color ;
                        i=i+1;
                    }
                }
                
            }
            var Button={
                setColor:function(color){
                    var alist = document.querySelectorAll('input');
                    var i = 0;
                    while(i<alist.length){
                        alist[i].style.color=color ;
                        i=i+1;
                    }
                }
            }
            
            <!-- 객체 활용 4차 리팩토링 -- >
            var Body = {
                setColor:function(color){
                    document.querySelector('body').style.color = color;
                },
                setBackgroundColor:function(color){
                    document.querySelector('body').style.backgroundColor = color;
                }
            }
            
            function nightDayHandeler(self){
                var target = document.querySelector('body');
                if(self.value === 'night'){//낮-->밤
                    Body.setBackgroundColor('black');
                    Body.setColor('white');
                    self.value = 'day';
                    
                    Links.setColor('white');
                    Button.setColor('white');
                    
                } else {//밤-->낮
                    Body.setBackgroundColor('white');
                    Body.setColor('black');
                    self.value = 'night';
                    
                    Links.setColor('black');
                    Button.setColor('black');
                }
            }
            function menuMaker(){
                        var menu={};
                        var i=2;
                        while(i<11){
                            menu[i] ="ex"+i;
                            i=i+1;
                            //객체 생성방법 2 : 객체명["속성"] = "속성값";
                        }
                        menu.showAll = function(){
                            for (var key in this){
                                if(key != "showAll" ){
                                document.write("<li><a = href= ex"+key+".html>"+this[key]+"</a></li>");
                                }
                            }
                        }
                        menu.showAll();
            }