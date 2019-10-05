import server from "./app";

if (process.env.NODE_ENV === "development") {
    require("@babel/register");
}

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;


server.listen(port, () => {
    console.log("Server running on port: %d", port);
});
