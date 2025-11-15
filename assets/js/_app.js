new Vue({
  el: "#app",
  data() {
    return {
      date: this.getQuery("date"),
      view: this.getQuery("view") || "north",
    };
  },
  computed: {
    photoUrl() {
      const map = {
        north: "north.jpg",
        east: "east.jpg",
        south: "south.jpg",
        west: "west.jpg",
        pressure: "pressure.png",
      };
      return `/photos/${this.date}/${map[this.view]}`;
    },
  },
  methods: {
    getQuery(key) {
      const params = new URLSearchParams(window.location.search);
      return params.get(key);
    },
  },
});
