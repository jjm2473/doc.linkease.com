import pic1 from "../.vuepress/public/downloads/pic1.png"
import pic2 from "../.vuepress/public/downloads/pic2.png"
import pic3 from "../.vuepress/public/downloads/pic3.png"
import pic4 from "../.vuepress/public/downloads/pic4.png"
import pic5 from "../.vuepress/public/downloads/pic5.png"

import IosQrcode from "../.vuepress/public/downloads/ios.png"
import AndroidQrcode from "../.vuepress/public/downloads/android.png"

const LinkeaseStore = {
    title: "易有云存储端",
    guide: "/zh/guide/linkease_storage/ ",
    thumbnail: pic1,
    list: [
        {
            title: "群晖Synology",
            url: "https://fw.koolcenter.com/binary/LinkEase/Synology/",
        },
        {
            title: "Qnap",
            url: "https://fw.koolcenter.com/binary/LinkEase/QNAP/",
        },
        {
            title: "Openwrt",
            url: "https://fw.koolcenter.com/binary/LinkEase/Openwrt/",
        },
        {
            title: "Linux",
            url: "https://fw.koolcenter.com/binary/LinkEase/LinuxStorage/",
        },
        {
            title: "脚本/Docker",
            url: "/zh/guide/linkease_storage/store.html#_10-docker",
        },
        {
            title: "更多",
            url: "https://www.ddnsto.com/linkease/download/#/disk",
        },
    ]
}
const LinkeaseClient = {
    title: "易有云APP",
    thumbnail: pic2,
    guide: "/zh/guide/linkease_app/",
    list: [
        {
            title: "Windows",
            url: "http://fw.koolcenter.com/binary/LinkEase/Client/LinkEaseWin.zip",
        },
        {
            title: "Mac",
            url: "http://fw.koolcenter.com/binary/LinkEase/Client/LinkEase.dmg",
        },
        {
            title: "iOS",
            url: "https://apps.apple.com/cn/app/id1526441128",
            qrcode: IosQrcode,
        },
        {
            title: "Android",
            url: "http://fw.koolcenter.com/binary/LinkEase/Client/linkease.apk",
            qrcode: AndroidQrcode,
        },
        {
            title: "TV",
            url: "http://fw.koolcenter.com/binary/LinkEase/Client/Android-tv.apk",
        },
    ]
}
const DDNSTO = {
    title: "DDNSTO",
    guide: "/zh/guide/ddnsto/",
    thumbnail: pic3,
    list: [
        {
            title: "群晖Synology",
            url: "https://fw.koolcenter.com/binary/ddnsto/synology/",
        },
        {
            title: "Qnap",
            url: "https://fw.koolcenter.com/binary/ddnsto/qnap/",
        },
        {
            title: "Openwrt",
            url: "https://fw.koolcenter.com/binary/ddnsto/openwrt/",
        },
        {
            title: "Readynas",
            url: "http://fw.koolcenter.com/binary/ddnsto/readynas/",
        },
        {
            title: "脚本/Docker",
            url: "/zh/guide/ddnsto/koolshare_merlin.html#_6-unraid-%E7%88%B1%E5%BF%AB-docker",
        },
    ]
}
const IStore = {
    title: "iStore",
    guide: "/zh/guide/istore/",
    thumbnail: pic4,
    list: [
        {
            title: "最新固件",
            url: "/zh/guide/istore/"
        }
    ]
}
const EasePi = {
    title: "EasePi",
    guide: "/zh/guide/easepi/",
    thumbnail: pic5,
    list: [
        {
            title: "最新固件",
            url: "https://fw.koolcenter.com/binary/ars2/"
        }
    ]
}
export default [
    LinkeaseClient,
    LinkeaseStore,
    DDNSTO,
    IStore,
    EasePi,
]