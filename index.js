var esdoc = require('esdoc');

module.exports = {
    /**
     * 初始化的时候生成 api 的专门文档
     * 然后通过 include 的方式去重新组织应用
     */
    init: function(navObject) {
        esdoc.default.generate(this.options);
    }
};
