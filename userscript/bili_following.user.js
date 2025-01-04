// ==UserScript==
// @name         B站关注列表导出
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  导出B站用户关注列表到Excel
// @author       fangd123
// @match        https://space.bilibili.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js
// ==/UserScript==

(function() {
    'use strict';

    // 添加导出按钮
    function addExportButton() {
        const btnContainer = document.createElement('div');
        btnContainer.style.position = 'fixed';
        btnContainer.style.bottom = '20px';
        btnContainer.style.right = '20px';
        btnContainer.style.zIndex = '9999';

        const exportBtn = document.createElement('button');
        exportBtn.textContent = '导出关注列表';
        exportBtn.style.padding = '10px 20px';
        exportBtn.style.backgroundColor = '#00a1d6';
        exportBtn.style.color = 'white';
        exportBtn.style.border = 'none';
        exportBtn.style.borderRadius = '4px';
        exportBtn.style.cursor = 'pointer';

        exportBtn.addEventListener('click', startExport);
        btnContainer.appendChild(exportBtn);
        document.body.appendChild(btnContainer);
    }

    // 获取关注列表数据
    async function getFollowingList(vmid, page = 1, allFollowings = []) {
        const url = `https://api.bilibili.com/x/relation/followings?vmid=${vmid}&ps=50&pn=${page}`;
        
        try {
            const response = await fetch(url, {
                credentials: 'include'
            });
            const data = await response.json();

            if (data.code !== 0) {
                throw new Error(data.message);
            }

            const followings = data.data.list;
            if (!followings || followings.length === 0) {
                return allFollowings;
            }

            const followingData = followings.map(following => ({
                'UID': following.mid.toString(),
                '用户名': following.uname,
                '签名': following.sign,
                '关注时间': new Date(following.mtime * 1000).toLocaleString(),
                '是否认证': following.official_verify.type === 0 || following.official_verify.type === 1 ? '是' : '否',
                '认证信息': following.official_verify.desc,
                '是否为大会员': following.vip.vipStatus === 1 ? '是' : '否'
            }));

            allFollowings.push(...followingData);

            // 添加延迟避免请求过快
            await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

            // 递归获取下一页
            return getFollowingList(vmid, page + 1, allFollowings);
        } catch (error) {
            console.error('获取数据失败:', error);
            return allFollowings;
        }
    }

    // 导出到Excel
    function exportToExcel(data) {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "关注列表");

        // 生成文件名
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const fileName = `bilibili_followings_${timestamp}.xlsx`;

        // 导出文件
        XLSX.writeFile(workbook, fileName);
    }

    // 开始导出流程
    async function startExport() {
        const vmid = window.location.pathname.split('/')[1];
        if (!vmid) {
            alert('请在用户空间页面使用此功能');
            return;
        }

        const exportBtn = document.querySelector('button');
        exportBtn.textContent = '导出中...';
        exportBtn.disabled = true;

        try {
            const followingList = await getFollowingList(vmid);
            if (followingList.length > 0) {
                exportToExcel(followingList);
                alert(`成功导出 ${followingList.length} 条关注数据`);
            } else {
                alert('未获取到数据');
            }
        } catch (error) {
            console.error('导出失败:', error);
            alert('导出失败，请查看控制台了解详情');
        }

        exportBtn.textContent = '导出关注列表';
        exportBtn.disabled = false;
    }

    // 初始化
    addExportButton();
})();