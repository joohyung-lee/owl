function mainTree(id) {
    this.mainTree = {
        svg: Snap(id),
        play: function () {
            var body=this.svg.path(`M86.6,152.4C86.6,152.4,86.6,152.4,86.6,152.4 M57.9,142.3c2.2,25.5,12.5,69.5,57.6,76.7v-6.9V148v-5.7
            M86.6,152.4L86.6,152.4L86.6,152.4 M70.4,164.1c0,3,2.4,5.4,5.4,5.4c3,0,5.4-2.4,5.4-5.4c0,3,2.4,5.4,5.4,5.4c3,0,5.4-2.4,5.4-5.4
           c0,3,2.4,5.4,5.4,5.4c3,0,5.4-2.4,5.4-5.4 M76.5,178c0,3,2.4,5.4,5.4,5.4c3,0,5.4-2.4,5.4-5.4c0,3,2.4,5.4,5.4,5.4
           c3,0,5.4-2.4,5.4-5.4 M115.6,142.3c0.9-10.7,0.1-18.1,0.1-18.1v-0.8c0-8.1-3.4-15.5-8.8-20.8c-5.2-5.1-12.4-6.5-20.3-6.5h-0.1
           c-7.9,0-15,1.4-20.3,6.5c-5.4,5.3-8.8,12.6-8.8,20.8v0.8c0,0-0.5,7.4,0.4,18.1 M75,109.5c-2.5-2.3-5.4-4.7-8.7-6.9
           c-3.8-2.5-8.1-4.9-13-6.7l4.3,27.5 M115.6,123.6c0-0.1,0-0.2,0-0.2 M115.6,124.1c0-0.2,0-0.3,0-0.5 M115.6,123.4l4.3-27.5
           c-4.9,1.8-9.2,4.2-13,6.7c-3.3,2.2-6.2,4.6-8.7,6.9 M86.5,123.3L86.5,123.3c-0.5-0.8-4.2-7-11.5-13.7c-1-0.2-2-0.3-3-0.3
           c-8,0-14.4,6.4-14.5,14.4c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0,0.4c0.2,7.8,6.6,14.1,14.5,14.1c5.4,0,10.2-3,12.6-7.4 M88.6,131
           c2.5,4.3,7.2,7.2,12.5,7.2c7.9,0,14.3-6.3,14.5-14.1c0-0.1,0-0.2,0-0.4c0,0,0-0.1,0-0.1c-0.1-8-6.5-14.4-14.5-14.4
           c-1,0-2,0.1-3,0.3c-7.2,6.7-11,13-11.5,13.7l0,0.2 M88.6,131l1.1-3.8l-3-3.7 M86.5,123.3l-2.9,3.7l1.1,3.8 M84.7,130.8l2,6.9
           l1.9-6.7 M86.7,123.5l-0.2-0.2l0,0 M57.9,142.3c2.4-0.2,4.7,0,6.9,0.2c12.8,1.7,21.8,9.8,21.8,9.8l0,0c0,0,8.9-8.1,21.8-9.8
           c2.3-0.3,4.7-0.4,7.3-0.2 M109.3,217.7v14.7`);
            var wings=this.svg.path(`M115.6,152v-4c-34.1,7.3-27,43.2-11.3,57c3.6,3.2,7.6,5.5,11.3,7c7.5,3.2,13.9,3.5,13.9,3.5
            c-10.7-19.6-13.4-40.5-13.9-53.8C115.4,157.7,115.5,154.4,115.6,152z`);
            var owlGroup=this.svg.group(body,wings);
            var eyesLine=this.svg.path(`M79.4,123.5c0,4-3.3,7.3-7.3,7.3s-7.3-3.3-7.3-7.3s3.3-7.3,7.3-7.3S79.4,119.5,79.4,123.5z M101.1,116.2
            c4,0,7.3,3.3,7.3,7.3s-3.3,7.3-7.3,7.3c-4,0-7.3-3.3-7.3-7.3S97.1,116.2,101.1,116.2z`);
            var eyes=this.svg.path(`M72,120.4c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1S73.8,120.4,72,120.4z M98,123.5
            c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1C99.4,120.4,98,121.8,98,123.5z`);
            owlGroup.attr({
                fill:mainFill,
                stroke:mainColor,
                strokeWidth:1.5,
                strokeLinecap:'round',
                strokeLinejoin:'round',
                strokeMiterlimit:10,
                strokeDasharray:300,
                strokeDashoffset:300
            });
            wings.attr({
                fill:mainColor,
                stroke:'none'
            })
            eyes.attr({
                fill:mainBack
            })
            eyesLine.attr({
                fill:'#fff',
                strokeLinecap:'round',
                strokeLinejoin:'round',
                strokeMiterlimit:10
            })
            
            
            var treePath=this.svg.polygon(`266.3,845.4 209.1,845.4 165.4,845.4 165.4,-7.4 209.5,-7.4 266.3,-7.4`);
            var treeStem=this.svg.path(`M176.7,233.6H18.2L6.6,222 M108.3,233.6L90.9,251 M18.2,233.6l-8.7,8.7 M35.5,206.4l27.2,27.2`);
            var str_gradient = `l(0,0,0,1)${mainColor}:20-#0e1961:80`;
            var gradient = this.svg.gradient(str_gradient);
            treePath.attr({
                stroke:'none',
                fill:gradient,
                strokeWidth:2,
            })
            treeStem.attr({
                fill:'none',
                stroke:mainTreeColor,
                strokeWidth:6,
                strokeLinecap:'round',
                strokeLinejoin:'round',
                strokeMiterlimit:10
            });
            var treeGroup=this.svg.group(treePath,treeStem);
            treeGroup.attr({
                opacity:0.4
            })
            this.motion(eyesLine);
            setTimeout(()=>{
                this.appear(owlGroup)
            },1500)
        },
        appear:function(owlGroup){
            owlGroup.animate({
                strokeDashoffset:0
            },1000,mina.easeout);
        },
        motion: function (eyesLine) {
            eyesLine.animate({
                d:`M79.4,123.5c0,0.8-3.3,1.5-7.3,1.5s-7.3-0.7-7.3-1.5s3.3-1.5,7.3-1.5S79.4,122.7,79.4,123.5z M101.1,122.1
                c4,0,7.3,0.7,7.3,1.5s-3.3,1.5-7.3,1.5c-4,0-7.3-0.7-7.3-1.5S97.1,122.1,101.1,122.1z`
            },100,mina.linear,()=>{
                
                eyesLine.animate({
                    d:`M79.4,123.5c0,4-3.3,7.3-7.3,7.3s-7.3-3.3-7.3-7.3s3.3-7.3,7.3-7.3S79.4,119.5,79.4,123.5z M101.1,116.2
                    c4,0,7.3,3.3,7.3,7.3s-3.3,7.3-7.3,7.3c-4,0-7.3-3.3-7.3-7.3S97.1,116.2,101.1,116.2z`
                },500,mina.bounce,()=>{
                    
                    setTimeout(()=>{
                        this.motion(eyesLine)
                    },500)
                })
            })
        }
    }
}