<template>
  <div>
    <div class="slider">
      <div
        class="slick-slide"
        :style="{ transform: `translateX(${translate[index]}px)` }"
        v-for="(slide, index) in slides"
        :key="`${index}-slide`"
      >
        <div class="avatar">
          <img :src="slide.image" alt="">
        </div>
        <div class="blank">
          <h5 class="name">
            {{ slide.name }}
          </h5>
          <h6 class="job">{{ slide.job }}</h6>
          <div class="socials">
            <a :href="slide.github" class="social">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slider",

  data() {
    return {
      slides: [
        {
          name: "Matt Wisniewski",
          job: "Lead Developer",
          github: "https://github.com/RetroPronghorn",
          image: "https://gateway.pinata.cloud/ipfs/QmWaXhrzJkYrhR4vF4cHqhQs3M7LW9zMdChV8S7wJ2RaVP"
        },
        {
          name: "Manuel Tumiati",
          job: "Blockchain Developer",
          github: "https://github.com/iltumio",
          image: "https://gateway.pinata.cloud/ipfs/Qma6gqqtLCs1CrtgAcJjEoFLDQKjM7Gaa6jS3hDtDHksm8"
        },
        {
          name: "Jason Panay",
          job: "Developer",
          github: "https://github.com/jpanay",
          image: "https://gateway.pinata.cloud/ipfs/QmZqg7JJmeXcfYow5d4BQ9RzTqYMsULRurMVBaXJ3527Vr"
        },
        {
          name: "Kathy Chan",
          job: "Front-End Developer",
          github: "https://github.com/KemoPaw",
          image: "https://gateway.pinata.cloud/ipfs/QmSvdifA7TFb4MmatqgbpkTQSpzRkZkj33RcroQX5TudGF"
        },
        {
          name: "Dina Brodsky",
          job: "Art Director",
          github: "https://en.wikipedia.org/wiki/Dina_Brodsky",
          image: "https://gateway.pinata.cloud/ipfs/Qma1YnNDffkpHQoKAmwrVfLH77QzLimSwu9yZUKeCHwYZf"
        },
        {
          name: "Lauren Harrington",
          job: "Digital Design",
          github: "",
          image: "https://gateway.pinata.cloud/ipfs/QmPm3wLNuc5S6rZBfNP8HxWkoaLQDvhfEry9MXDBMGYbwB"
        }
      ],
      current: 0,
    };
  },

  computed: {
    translate() {
      return this.slides.map((item, index) => {
        return index + this.current * 100;
      });
    },
  },

  methods: {

  },
};
</script>

<style scoped>

.slider {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  min-width: 0;
  width: 100%;
  justify-content: center;
}

.slick-slide {
  height: 300px; 
  width: 14.25%;
  border-radius: 10px;
  background-color: #e8e8fa;
  padding: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: 15px;
  vertical-align: middle;
}

.slick-slide .avatar {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  margin-bottom: 20px;
  color: #16161e;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar i {
  font-size: 3rem;
}

.avatar img {
  border-radius: 5px;
}

.slick-slide .name {
  font-family: "Space Mono", monospace;
  color: #16161e;
}

.slick-slide .job {
  text-align: center;
  font-size: 14px;
  position: relative;
}
.job:after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  background-color: #3a3870;
  height: 2px;
  width: 70px;
  border-radius: 5px;
  bottom: -5px;
}

.socials {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

.socials .social {
  color: #16161e;
}

.slider-wrapper {
  position: relative;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  margin-top: 2rem;
  width: 100%;
  margin: 3rem auto;
}

@media (max-width: 768px) {
  .slider-wrapper .slider .slick-slide {
    margin-right: 30px;
    width: calc(100vw - 110px);
  }

  .slider-wrapper .prev {
    left: -8px;
  }

  .slider-wrapper .next {
    right: -8px;
  }
}
</style>