gsap.from('.portfolio', { duration: 1, y: '-100%' });
gsap.from('.cards', { duration: 2, y: "70%", delay :1});
gsap.fromTo('.card img', { opacity: 0, scale :0, rotation: 720 }, {duration:1,delay: 3, opacity: 1, scale :1, rotation: 0});