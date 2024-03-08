const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      book: "The Alchemist",
      author: "Paulo water",
      age: 43,
      x: 0,
      y: 0,
      books: [
        {
          book: "name of the wind",
          author: "patrick gear",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          book: "the way of kings",
          author: "brandon metal",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          book: "the final empire",
          author: "brandon fellas",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle() {
      this.book = "The Lord of the Rings";
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent() {
      console.log("event");
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return "hello";
    },
  },
});

app.mount("#app");
