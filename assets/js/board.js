const tbody = document.querySelector("#board > tbody");

const getList = async () => {
  let res = await axios("http://10.2.2.6:8081/list");
  let boardList = res.data;
  let resultHTML = "";

  console.log("게시글 데이터>> ", res.data);

  for (let i = 0; i < boardList.length; i++) {
    let board = boardList[i];

    console.log(board);

    resultHTML += `
        <tr>
            <td>${board.b_idx}</td>
            <td>${board.b_title}</td>
            <td>${board.b_writer}</td>
            <td>${board.b_datetime}</td>
            <td>${board.b_count}</td>
        </tr>
    `;

    tbody.innerHTML = resultHTML;
  }
};

getList();
