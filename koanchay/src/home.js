function execute() {
    return Response.success([
        {title: "Chương mới", script: "gen.js", input: "https://koanchay.net/chuong-moi"},
        {title: "Bảng xếp hạng", script: "gen.js", input: "https://koanchay.net/bang-xep-hang"}
    ]);
}