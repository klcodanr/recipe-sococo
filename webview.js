/* eslint-env node, es6, browser */
module.exports = (Franz) => {
    const getMessages = function getMessages() {
        let indirect = document.querySelectorAll('.new-messages');
        let direct = 0;
        document.querySelectorAll('.people-pane .badge').forEach(function(badge){
            direct += parseInt(badge.innerText,10);
        });
        Franz.setBadge(direct, indirect);
    };
    Franz.loop(getMessages);
};