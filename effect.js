AFRAME.registerComponent("bb",{
    init:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key === "Enter" || e.key === " "){
                console.log(e.key + "pressed")
                const particles = document.querySelector("#bb");
                particles.setAttribute("spe-particles",{
                    particleCount:200000
                });
                const skyel = document.querySelector("#sky");
                skyel.setAttribute("material", {
                    color:"white",
                    src:"./bg.jpg",
                })
                document.querySelector("#sin").setAttribute("visible",false)
                document.querySelector("#msg").setAttribute("visible",false)
            }
        })
    },
})