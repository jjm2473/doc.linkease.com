<template>
    <div id="page" class="mobile">
        <div class="_header">
            <h1 class="title">
                <span>文档中心</span>
            </h1>
            <div class="block"></div>
        </div>
        <div class="containers">
            <ul class="items">
                <div class="_title" title="1 选择硬件">
                    <span class="number">1</span>
                    <span class="text"> 选择硬件</span>
                </div>
                <div class="_content">
                    <div class="_box">
                        <router-link to="/zh/guide/easepi/">
                            <span class="_title" title="EasePi">EasePi</span>
                            <span class="_text" title="性能强劲/接口丰富/带存储的软路由">
                                性能强劲/接口丰富/带存储的软路由
                            </span>
                        </router-link>
                    </div>
                </div>
            </ul>
            <ul class="items">
                <div class="_title" title="2 选择软件">
                    <span class="number">2</span>
                    <span class="text"> 选择软件</span>
                </div>
                <div class="_content">
                    <div class="_box">
                        <router-link to="/zh/guide/linkease_storage/">
                            <span class="_title" title="易有云存储端">易有云存储端</span>
                            <span class="_text" title="跨平台设备传输/文件管理/相册备份/多种网络协议">
                                跨平台设备传输/文件管理/相册备份/多种网络协议
                            </span>
                        </router-link>
                    </div>
                    <div class="_box">
                        <router-link to="/zh/guide/linkease_app/">
                            <span class="_title" title="易有云APP">易有云APP</span>
                            <span class="_text" title="全平台客户端/多设备文件管理/增量传输不限速">
                                全平台客户端/多设备文件管理/增量传输不限速
                            </span>
                        </router-link>
                    </div>
                </div>
            </ul>
            <ul class="items">
                <div class="_title" title="3 应用市场">
                    <span class="number">3</span>
                    <span class="text">应用市场</span>
                </div>
                <div class="_content">
                    <div class="_box">
                        <router-link to="/zh/guide/istore/">
                            <span class="_title" title="iStore">iStore</span>
                            <span class="_text" title="简易开源市场，带你发现更多好玩的应用">
                                简易开源市场，带你发现更多好玩的应用
                            </span>
                        </router-link>
                    </div>
                </div>
            </ul>
            <ul class="items">
                <div class="_title" title="4 添加插件">
                    <span class="number">4</span>
                    <span class="text">添加插件</span>
                </div>
                <div class="_content">
                    <div class="_box">
                        <router-link to="/zh/guide/ddnsto/">
                            <span class="_title" title="DDNSTO">DDNSTO</span>
                            <span class="_text" title="内网穿透，一个浏览器搞定远程桌面等多种远程应用">
                                内网穿透，一个浏览器搞定远程桌面等多种远程应用
                            </span>
                        </router-link>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
* {
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    word-wrap: break-word;
    outline: none;
}
#page.mobile {
    display: none;
    width: 100%;
    padding: 0 0.625rem;
    padding-bottom: 6.25rem;
    ._header {
        width: 100%;
        margin-top: 6.25rem;
        margin-bottom: 1.25rem;
        h1.title {
            text-align: center;
            span {
                height: 40px;
                font-size: 28px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #000000;
                line-height: 40px;
            }
        }
        .block {
            width: 313px;
            height: 1px;
            background: #000000;
            margin: 0 auto;
        }
    }
    .containers {
        ul.items {
            padding: 0;
            margin: 0;
            div._title {
                span.number {
                    font-size: 60px;
                    font-family: Apple-Chancery, Apple;
                    font-weight: normal;
                    color: #0060ff;
                    margin-right: 1.875rem;
                }

                span.text {
                    font-size: 1.5rem;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #0060ff;
                }
            }
            ._content {
                ._box {
                    background: rgba(255, 255, 255, 0.6);
                    box-shadow: 0px 2px 8px 4px rgb(231 231 231 / 50%);
                    border-radius: 2px;
                    padding: 0.625rem 1.25rem;
                    margin-bottom: 0.625rem;
                    span._title {
                        font-size: 1.5rem;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #000000;
                        width: 100%;
                        display: block;
                    }
                    span._text {
                        font-size: 0.875rem;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #000000;
                        line-height: 1.25rem;
                        width: 100%;
                        display: block;
                    }
                }
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and(max-width: 719px) {
    #page.desktop {
        display: none;
    }
    #page.mobile {
        display: block;
    }
}
</style>