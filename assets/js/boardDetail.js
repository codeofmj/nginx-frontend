const getBoardDetail = async () => {
  try {
    // URL에서 b_idx 읽어오기
    const params = new URLSearchParams(window.location.search);
    const b_idx = params.get("b_idx");

    if (!b_idx) {
      console.log("b_idx가 없습니다.");
      return;
    }

    // let res = await axios.get(`http://localhost:8081/api/board/${b_idx}`);
    let res = await axios.get(`/api/board/${b_idx}`);
    let board = res.data;
    console.log(res.data);

    let title = document.getElementById("title");
    let writer = document.getElementById("writer");
    let content = document.getElementById("content");
    let fileLink = document.getElementById("file-link");

    title.innerText = board.b_title;
    writer.innerText = board.b_writer;
    content.innerText = board.b_content;

    //첨부파일 없을 때
    if (board.b_file_path) {
      //   fileLink.href = `http://localhost:8081/api/board/${b_idx}/download`;
      fileLink.href = `/api/board/${b_idx}/download`;

      //CrossOrigin에서 download가 무시될 수 있으니 UX보강
      //   fileLink.target = "_blank";
      //   fileLink.rel = "nooener noreferrer";
    } else {
      fileLink.style.display = "none";
    }
  } catch (err) {
    console.log(err);
  }
};

getBoardDetail();
