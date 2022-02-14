const jokeContainer = document.getElementById('joke');
      const btn = document.getElementById('btn');
      const emoji = document.querySelector('.emoji');
      const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


        const getJoke = () => {
           jokeContainer.classList.remove('fade');
           emoji.classList.remove('active');
           fetch(url)
           .then(data => data.json())
           .then(item => {
              jokeContainer.textContent = `${item.joke}`;
              jokeContainer.classList.add('fade');
              emoji.classList.add('active');
           });
        }

         btn.addEventListener('click', getJoke);
         getJoke();