// 页面导航函数
function showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示指定页面
    document.getElementById(pageId).classList.add('active');
}

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    // 首页选项按钮事件监听
    document.querySelectorAll('[data-issue]').forEach(button => {
        button.addEventListener('click', function() {
            const issue = this.getAttribute('data-issue');
            
            if (issue === 'blue-screen') {
                // 如果选择蓝屏问题，显示蓝屏细分页面
                showPage('bsod-page');
            } else if (issue === 'slow') {
                // 如果选择运行卡顿问题，显示卡顿细分页面
                showPage('slow-page');
            } else if (issue === 'internet') {
                // 如果选择无法上网问题，显示网络细分页面
                showPage('internet-page');
            } else if (issue === 'audio') {
                // 如果选择没有声音问题，显示声音细分页面
                showPage('audio-page');
            } else if (issue === 'heat') {
                // 如果选择过热问题，显示过热细分页面
                showPage('heat-page');
            } else if (issue === 'boot') {
                // 如果选择不开机问题，显示不开机细分页面
                showPage('boot-page');
            } else {
                // 对于其他问题，显示其他问题细分页面
                showPage('other-page');
            }
        });
    });
    
    // 蓝屏细分选项按钮事件监听
    document.querySelectorAll('[data-bsod-detail]').forEach(button => {
        button.addEventListener('click', function() {
            const detail = this.getAttribute('data-bsod-detail');
            
            if (detail === 'random') {
                // 如果选择频繁随机蓝屏，进入诊断流程
                startDiagnosis('bsod');
            } else {
                // 对于其他选项，显示相应的处理建议
                showResult(detail);
            }
        });
    });
    
    // 运行卡顿细分选项按钮事件监听
    document.querySelectorAll('[data-slow-detail]').forEach(button => {
        button.addEventListener('click', function() {
            // 进入诊断流程
            startDiagnosis('slow');
        });
    });
    
    // 无法上网细分选项按钮事件监听
    document.querySelectorAll('[data-internet-detail]').forEach(button => {
        button.addEventListener('click', function() {
            // 进入诊断流程
            startDiagnosis('internet');
        });
    });
    
    // 没有声音细分选项按钮事件监听
    document.querySelectorAll('[data-audio-detail]').forEach(button => {
        button.addEventListener('click', function() {
            // 进入诊断流程
            startDiagnosis('audio');
        });
    });
    
    // 电脑过热细分选项按钮事件监听
    document.querySelectorAll('[data-heat-detail]').forEach(button => {
        button.addEventListener('click', function() {
            // 进入诊断流程
            startDiagnosis('heat');
        });
    });
    
    // 不开机细分选项按钮事件监听
    document.querySelectorAll('[data-boot-detail]').forEach(button => {
        button.addEventListener('click', function() {
            // 进入诊断流程
            startDiagnosis('boot');
        });
    });
    
    // 其他问题选项按钮事件监听
    document.querySelectorAll('[data-other-detail]').forEach(button => {
        button.addEventListener('click', function() {
            // 进入诊断流程
            startDiagnosis('other');
        });
    });
    
    // 返回按钮事件监听
    document.querySelectorAll('.back-btn').forEach(button => {
        button.addEventListener('click', function() {
            const currentPage = this.closest('.page').id;
            
            if (currentPage === 'bsod-page') {
                // 从蓝屏细分页面返回首页
                showPage('home-page');
            } else if (currentPage === 'slow-page') {
                // 从运行卡顿细分页面返回首页
                showPage('home-page');
            } else if (currentPage === 'internet-page') {
                // 从无法上网细分页面返回首页
                showPage('home-page');
            } else if (currentPage === 'audio-page') {
                // 从没有声音细分页面返回首页
                showPage('home-page');
            } else if (currentPage === 'heat-page') {
                // 从电脑过热细分页面返回首页
                showPage('home-page');
            } else if (currentPage === 'boot-page') {
                // 从不开机细分页面返回首页
                showPage('home-page');
            } else if (currentPage === 'other-page') {
                // 从其他问题细分页面返回首页
                showPage('home-page');
            } else if (currentPage === 'diagnosis-page') {
                // 从诊断流程页面返回相应的细分页面
                // 这里需要根据当前诊断类型返回相应的页面
                showPage('home-page');
            } else if (currentPage === 'result-page') {
                // 从结果页面返回首页
                showPage('home-page');
            }
        });
    });
    
    // 分享按钮事件监听
    document.querySelector('.share-btn')?.addEventListener('click', function() {
        alert('诊断结果已复制到剪贴板，您可以粘贴分享给朋友或技术支持人员。');
    });
});

// 诊断流程数据
const diagnosisSteps = {
    bsod: [
        {
            question: "电脑最近是否进行过系统更新或安装了新软件？",
            options: [
                { id: "yes", text: "是的" },
                { id: "no", text: "没有" },
                { id: "unsure", text: "我不确定" }
            ],
            advice: {
                yes: {
                    title: "可能性较高：软件冲突或系统更新问题。",
                    content: `
                        <ul>
                            <li>尝试卸载最近安装的软件：进入"设置"->"应用"，按安装日期排序，卸载可疑软件。</li>
                            <li>尝试卸载最近的质量更新：进入"设置"->"Windows更新"->"更新历史记录"->"卸载更新"。</li>
                            <li>完成操作后，重启电脑并观察是否解决。</li>
                        </ul>
                    `
                }
            }
        },
        {
            question: "蓝屏是否在您安装某个硬件（如显卡）的驱动程序后开始的？",
            options: [
                { id: "yes", text: "是的，我更新了驱动" },
                { id: "no", text: "不是，我很早就没动过驱动了" },
                { id: "unsure", text: "我不知道" }
            ],
            advice: {
                no: {
                    title: "可能性很高：驱动程序损坏或与系统不兼容。",
                    content: `
                        <ul>
                            <li>更新/回滚显卡驱动：建议使用"驱动精灵"或"360驱动大师"等工具检测并安装稳定版驱动。</li>
                            <li>或前往设备管理器：右键点击"显示适配器"下的显卡，选择"更新驱动程序"或"回退驱动程序"。</li>
                        </ul>
                    `
                },
                unsure: {
                    title: "可能性很高：驱动程序损坏或与系统不兼容。",
                    content: `
                        <ul>
                            <li>更新/回滚显卡驱动：建议使用"驱动精灵"或"360驱动大师"等工具检测并安装稳定版驱动。</li>
                            <li>或前往设备管理器：右键点击"显示适配器"下的显卡，选择"更新驱动程序"或"回退驱动程序"。</li>
                        </ul>
                    `
                }
            }
        },
        {
            question: "您的电脑使用超过两年了吗？或者机箱内灰尘很多？",
            options: [
                { id: "yes", text: "是的，用了很久/灰尘多" },
                { id: "no", text: "不是，比较新且干净" }
            ],
            advice: {
                yes: {
                    title: "可能性：硬件温度过高或接触不良。",
                    content: `
                        <ul>
                            <li>清洁与重新插拔：（请务必拔掉电源线！）打开机箱侧板，用毛刷清理灰尘，并将内存条和显卡拔下来，用橡皮擦拭金色接触部分后重新插紧。</li>
                            <li>检查温度：下载"HWMonitor"软件，查看CPU和显卡温度是否过高（待机超过60°C需注意）。</li>
                        </ul>
                    `
                }
            }
        }
    ],
    slow: [
        {
            question: "您的电脑开机时间超过5分钟吗？",
            options: [
                { id: "yes", text: "是的，开机很慢" },
                { id: "no", text: "不是，主要是运行软件时卡顿" }
            ],
            advice: {
                yes: {
                    title: "可能性：启动项过多或硬盘问题。",
                    content: `
                        <ul>
                            <li>按下Win+R键，输入msconfig，查看启动项是否过多</li>
                            <li>禁用不必要的启动项：在任务管理器的"启动"选项卡中，右键点击不需要的启动项并选择"禁用"</li>
                            <li>检查硬盘健康状态：下载CrystalDiskInfo软件检查硬盘是否有坏道或健康度下降</li>
                        </ul>
                    `
                }
            }
        },
        {
            question: "打开任务管理器(Ctrl+Shift+Esc)，查看CPU、内存或磁盘使用率是否经常达到100%？",
            options: [
                { id: "yes", text: "是的，资源占用很高" },
                { id: "no", text: "不是，资源占用看起来正常" }
            ],
            advice: {
                yes: {
                    title: "可能性：后台程序占用过多资源或硬件不足。",
                    content: `
                        <ul>
                            <li>在任务管理器的"进程"选项卡中，按CPU或内存使用率排序，找出占用资源最多的程序</li>
                            <li>右键点击占用资源过高的程序，选择"结束任务"</li>
                            <li>如果是系统进程占用过高，可能需要更新驱动或重装系统</li>
                        </ul>
                    `
                }
            }
        },
        {
            question: "您的电脑配置是否较低（如内存小于8GB，或使用机械硬盘）？",
            options: [
                { id: "yes", text: "是的，配置较低" },
                { id: "no", text: "不是，配置还可以" }
            ],
            advice: {
                yes: {
                    title: "可能性：硬件配置不足以满足当前需求。",
                    content: `
                        <ul>
                            <li>增加内存容量：如当前内存小于8GB，建议升级到16GB</li>
                            <li>更换固态硬盘：将系统盘从机械硬盘更换为固态硬盘可大幅提升系统响应速度</li>
                            <li>清理系统垃圾：使用磁盘清理工具清理临时文件和系统缓存</li>
                        </ul>
                    `
                }
            }
        }
    ],
    internet: [
        {
            question: "您的网线是否插好，或者WiFi是否已连接到网络？",
            options: [
                { id: "yes", text: "是的，已连接但无法上网" },
                { id: "no", text: "没有连接网络" }
            ],
            advice: {
                yes: {
                    title: "可能性：网络配置或驱动问题。",
                    content: `
                        <ul>
                            <li>检查网络图标是否有红叉或感叹号</li>
                            <li>尝试断开WiFi连接后重新连接</li>
                            <li>检查其他设备是否能正常上网，以确定是电脑问题还是网络问题</li>
                        </ul>
                    `
                },
                no: {
                    title: "请先连接网络。",
                    content: `
                        <ul>
                            <li>确保网线插紧，网卡指示灯正常闪烁</li>
                            <li>点击右下角网络图标，选择可用的WiFi网络并输入密码连接</li>
                            <li>如果找不到网络，检查路由器是否正常工作</li>
                        </ul>
                    `
                }
            }
        },
        {
            question: "其他设备（如手机）能否正常上网？",
            options: [
                { id: "yes", text: "是的，其他设备可以上网" },
                { id: "no", text: "不是，其他设备也无法上网" }
            ],
            advice: {
                yes: {
                    title: "可能性：本机网络设置或驱动问题。",
                    content: `
                        <ul>
                            <li>重启网络设备：断开路由器电源30秒后重新插上</li>
                            <li>重启电脑网卡：在设备管理器中禁用再启用网络适配器</li>
                            <li>运行网络疑难解答：右键点击网络图标，选择"疑难解答"</li>
                        </ul>
                    `
                },
                no: {
                    title: "可能性：网络服务提供商或路由器问题。",
                    content: `
                        <ul>
                            <li>检查路由器指示灯是否正常（通常电源灯和网络灯应常亮或闪烁）</li>
                            <li>联系网络服务提供商确认是否有网络故障</li>
                            <li>重启路由器：断开电源30秒后重新插上</li>
                        </ul>
                    `
                }
            }
        },
        {
            question: "您最近是否更改过网络设置或安装过新软件？",
            options: [
                { id: "yes", text: "是的，最近有更改" },
                { id: "no", text: "没有更改过" }
            ],
            advice: {
                yes: {
                    title: "可能性：设置错误或软件冲突。",
                    content: `
                        <ul>
                            <li>撤销最近的网络设置更改</li>
                            <li>卸载最近安装的可能影响网络的软件</li>
                            <li>重置网络设置：以管理员身份运行命令提示符，输入以下命令并回车：
                                <pre>netsh winsock reset
netsh int ip reset
ipconfig /release
ipconfig /renew
ipconfig /flushdns</pre>
                            </li>
                        </ul>
                    `
                }
            }
        }
    ],
    audio: [
        {
            question: "音量是否被静音或调至最低？",
            options: [
                { id: "yes", text: "是的，音量有问题" },
                { id: "no", text: "音量设置正常" }
            ],
            advice: {
                yes: {
                    title: "解决方案：调整音量设置。",
                    content: `
                        <ul>
                            <li>点击任务栏右下角的音量图标</li>
                            <li>确保音量滑块未调至最低且未静音</li>
                            <li>右键点击音量图标，选择"打开音量合成器"</li>
                            <li>检查各个应用程序的音量设置，确保未被静音</li>
                        </ul>
                    `
                }
            }
        },
        {
            question: "您使用的是扬声器还是耳机？设备是否正确连接？",
            options: [
                { id: "speaker", text: "使用扬声器" },
                { id: "headphone", text: "使用耳机" },
                { id: "both", text: "两种设备都试过，都没声音" }
            ],
            advice: {
                speaker: {
                    title: "检查扬声器连接。",
                    content: `
                        <ul>
                            <li>检查扬声器电源是否打开</li>
                            <li>检查音频线是否牢固连接到电脑</li>
                            <li>尝试将扬声器连接到其他设备测试是否正常工作</li>
                        </ul>
                    `
                },
                headphone: {
                    title: "检查耳机连接。",
                    content: `
                        <ul>
                            <li>检查耳机插头是否完全插入音频接口</li>
                            <li>尝试将耳机插入其他设备测试是否正常工作</li>
                            <li>如果是USB耳机，检查USB接口是否正常</li>
                        </ul>
                    `
                }
            }
        },
        {
            question: "您最近是否更新过系统或安装过新软件？",
            options: [
                { id: "yes", text: "是的，最近有更新" },
                { id: "no", text: "没有更新过" }
            ],
            advice: {
                yes: {
                    title: "可能性：驱动问题或设置更改。",
                    content: `
                        <ul>
                            <li>运行音频故障排除程序：右键点击音量图标，选择"疑难解答"</li>
                            <li>更新或回滚音频驱动：右键点击"此电脑"->"管理"->"设备管理器"->"声音、视频和游戏控制器"，右键点击音频设备选择"更新驱动程序"或"回退驱动程序"</li>
                            <li>重启Windows音频服务：按Win+R，输入services.msc，找到"Windows Audio"服务，右键点击选择"重新启动"</li>
                        </ul>
                    `
                }
            }
        }
    ],
    heat: [
        {
            question: "您的电脑使用多长时间了？机箱内是否有很多灰尘？",
            options: [
                { id: "yes", text: "使用很久了，灰尘很多" },
                { id: "no", text: "比较新，灰尘不多" }
            ],
            advice: {
                yes: {
                    title: "可能性：灰尘堆积导致散热不良。",
                    content: `
                        <ul>
                            <li>完全断电后，打开机箱侧板</li>
                            <li>使用毛刷或压缩空气罐清理风扇和散热器上的灰尘</li>
                            <li>清理CPU和显卡散热器之间的灰尘</li>
                            <li>注意不要损坏任何硬件组件</li>
                        </ul>
                    `
                }
            }
        },
        {
            question: "风扇转速是否异常高？是否有异响或震动？",
            options: [
                { id: "yes", text: "是的，风扇转速高且有异响" },
                { id: "no", text: "风扇转速正常，无异响" }
            ],
            advice: {
                yes: {
                    title: "可能性：风扇故障或轴承老化。",
                    content: `
                        <ul>
                            <li>下载HWMonitor软件检查CPU和显卡温度是否过高（待机超过60°C需注意）</li>
                            <li>给风扇轴承添加润滑油：关机后在风扇轴心处滴1-2滴缝纫机油</li>
                            <li>如噪音持续，可能需要更换风扇</li>
                        </ul>
                    `
                }
            }
        },
        {
            question: "您的电脑是否经常运行大型软件或游戏？",
            options: [
                { id: "yes", text: "是的，经常高负载运行" },
                { id: "no", text: "不经常高负载运行" }
            ],
            advice: {
                yes: {
                    title: "可能性：散热系统不足以应对高负载。",
                    content: `
                        <ul>
                            <li>改善机箱通风：增加机箱风扇或改善风道设计</li>
                            <li>更换散热硅脂：CPU和显卡温度过高时需要更换导热硅脂</li>
                            <li>考虑升级散热器：如使用更强的风冷或水冷散热器</li>
                            <li>降低负载：避免同时运行多个高负载程序</li>
                        </ul>
                    `
                }
            }
        }
    ],
    boot: [
        {
            question: "您的电脑是否完全没反应，指示灯也不亮？",
            options: [
                { id: "yes", text: "是的，完全没反应" },
                { id: "no", text: "不是，有部分反应" }
            ],
            advice: {
                yes: {
                    title: "可能性：电源或主板问题。",
                    content: `
                        <ul>
                            <li>检查电源线是否插好，尝试更换插座</li>
                            <li>检查电源供应器是否有异味或异常</li>
                            <li>如有可能，尝试更换电源供应器测试</li>
                        </ul>
                    `
                }
            }
        },
        {
            question: "风扇是否转动但显示器没信号？",
            options: [
                { id: "yes", text: "是的，风扇转动但无显示" },
                { id: "no", text: "不是这种情况" }
            ],
            advice: {
                yes: {
                    title: "可能性：内存或显卡问题。",
                    content: `
                        <ul>
                            <li>重新插拔内存条和显卡</li>
                            <li>检查显示器连接线是否松动</li>
                            <li>尝试使用集成显卡（如有）</li>
                        </ul>
                    `
                }
            }
        },
        {
            question: "是否有报警声（嘀嘀声）？",
            options: [
                { id: "yes", text: "是的，有报警声" },
                { id: "no", text: "没有报警声" }
            ],
            advice: {
                yes: {
                    title: "可能性：硬件故障。",
                    content: `
                        <ul>
                            <li>查阅主板说明书了解报警声含义</li>
                            <li>重新插拔内存条，尝试单条内存启动</li>
                            <li>移除独立显卡，使用集成显卡测试</li>
                        </ul>
                    `
                }
            }
        }
    ],
    other: [
        {
            question: "请描述您遇到的具体问题：",
            options: [
                { id: "hardware", text: "疑似硬件问题" },
                { id: "software", text: "疑似软件问题" },
                { id: "unclear", text: "不确定具体原因" }
            ],
            advice: {
                hardware: {
                    title: "建议进行硬件检查。",
                    content: `
                        <ul>
                            <li>仔细观察问题发生时的现象</li>
                            <li>记录问题发生的频率和条件</li>
                            <li>检查设备管理器中是否有硬件冲突或错误</li>
                            <li>运行系统自带的硬件诊断工具</li>
                        </ul>
                    `
                },
                software: {
                    title: "建议进行软件检查。",
                    content: `
                        <ul>
                            <li>记录问题发生时正在运行的软件</li>
                            <li>尝试在安全模式下启动电脑，看问题是否仍然存在</li>
                            <li>运行杀毒软件进行全面扫描</li>
                            <li>检查最近安装的软件或更新</li>
                        </ul>
                    `
                },
                unclear: {
                    title: "建议系统性排查。",
                    content: `
                        <ul>
                            <li>详细记录问题发生的场景和频率</li>
                            <li>尝试在安全模式下启动电脑</li>
                            <li>运行系统自带的诊断工具</li>
                            <li>如问题严重，建议寻求专业技术支持</li>
                        </ul>
                    `
                }
            }
        }
    ]
};

let currentStep = 0;
let currentDiagnosisType = 'bsod';

// 开始诊断流程
function startDiagnosis(type) {
    currentDiagnosisType = type;
    currentStep = 0;
    showPage('diagnosis-page');
    showStep(currentStep);
}

// 显示诊断步骤
function showStep(stepIndex) {
    const stepContent = document.getElementById('step-content');
    const progressBar = document.getElementById('progress');
    
    if (stepIndex < diagnosisSteps[currentDiagnosisType].length) {
        const step = diagnosisSteps[currentDiagnosisType][stepIndex];
        const progressPercent = ((stepIndex + 1) / (diagnosisSteps[currentDiagnosisType].length + 1)) * 100;
        
        progressBar.style.width = `${progressPercent}%`;
        
        let optionsHtml = '';
        step.options.forEach(option => {
            optionsHtml += `<button class="option-btn" data-answer="${option.id}">${option.text}</button>`;
        });
        
        stepContent.innerHTML = `
            <h2>步骤 ${stepIndex + 1}/${diagnosisSteps[currentDiagnosisType].length + 1}：${step.question}</h2>
            <div class="options">
                ${optionsHtml}
                ${stepIndex > 0 ? '<button class="back-btn">上一步</button>' : ''}
                <button class="next-btn" style="display:none;">已操作，问题未解决 -> 进入下一步</button>
            </div>
            <div id="advice-content"></div>
        `;
        
        // 添加选项按钮事件监听
        stepContent.querySelectorAll('[data-answer]').forEach(button => {
            button.addEventListener('click', function() {
                const answer = this.getAttribute('data-answer');
                showAdvice(stepIndex, answer);
            });
        });
        
        // 添加上一步按钮事件监听（如果不是第一步）
        if (stepIndex > 0) {
            stepContent.querySelector('.back-btn').addEventListener('click', function() {
                showStep(stepIndex - 1);
            });
        }
        
        // 添加下一步按钮事件监听
        stepContent.querySelector('.next-btn').addEventListener('click', function() {
            showStep(stepIndex + 1);
        });
    } else {
        // 诊断完成，显示最终结果
        showFinalResult();
    }
}

// 显示诊断建议
function showAdvice(stepIndex, answer) {
    const step = diagnosisSteps[currentDiagnosisType][stepIndex];
    const adviceContent = document.getElementById('advice-content');
    const nextBtn = document.querySelector('.next-btn');
    
    if (step.advice && step.advice[answer]) {
        const advice = step.advice[answer];
        adviceContent.innerHTML = `
            <div class="diagnosis-advice">
                <h3>${advice.title}</h3>
                <div>${advice.content}</div>
            </div>
        `;
        nextBtn.style.display = 'block';
    } else {
        // 如果没有特定建议，显示通用提示
        adviceContent.innerHTML = `
            <div class="diagnosis-advice">
                <h3>继续排查</h3>
                <p>请继续下一步排查以找到问题根源。</p>
            </div>
        `;
        nextBtn.style.display = 'block';
    }
}

// 显示最终结果
function showFinalResult() {
    const resultContent = document.getElementById('result-content');
    const progressBar = document.getElementById('progress');
    
    progressBar.style.width = '100%';
    
    // 使用不同类型的结果
    const result = results[currentDiagnosisType] || results['default'];
    
    let possibilitiesHtml = '';
    if (result.possibilities) {
        result.possibilities.forEach(item => {
            possibilitiesHtml += `
                <div class="possibility-item">
                    <span class="possibility-label ${item.level}">${item.text}</span>
                    <span>(${getPossibilityText(item.level)}可能性)</span>
                </div>
            `;
        });
    }
    
    resultContent.innerHTML = `
        <div class="result-summary">
            <h3>诊断总结</h3>
            <p>${result.summary}</p>
        </div>
        ${result.possibilities ? `
        <div class="possibility-list">
            <h3>最可能的故障点：</h3>
            ${possibilitiesHtml}
        </div>
        ` : ''}
        <div class="final-advice">
            <h3>最终建议方案：</h3>
            <div>${result.advice}</div>
        </div>
    `;
    
    showPage('result-page');
}

// 结果数据
const results = {
    bsod: {
        summary: "根据您的描述，经过基础排查后问题依旧，故障根源可能较深。",
        possibilities: [
            { text: "内存条故障", level: "high" },
            { text: "电源供电不稳", level: "medium" },
            { text: "主板或CPU问题", level: "low" }
        ],
        advice: `
            <ul>
                <li>🛠️ 进阶自查：如果您有动手能力，可以尝试"替换法"，比如用好的内存条替换当前的内存进行测试。</li>
                <li>📞 寻求专业帮助：鉴于问题可能涉及核心硬件，我们强烈建议您将电脑送至专业的维修店进行检测，以避免自行操作造成更大损失。</li>
                <li>💬 送修时您可以这样说："师傅，电脑频繁蓝屏，我初步排查过软件和驱动，也清洁过内存了，怀疑是内存或电源问题，请您帮忙重点检测一下。"</li>
            </ul>
        `
    },
    slow: {
        summary: "根据您的描述，经过基础排查后问题依旧，可能需要进一步优化。",
        possibilities: [
            { text: "硬件配置不足", level: "high" },
            { text: "系统垃圾过多", level: "high" },
            { text: "后台程序占用资源", level: "medium" },
            { text: "病毒或恶意软件", level: "medium" }
        ],
        advice: `
            <ul>
                <li>🧹 系统优化
                    <ul>
                        <li>清理系统垃圾文件：使用磁盘清理工具</li>
                        <li>整理硬盘碎片：机械硬盘需要定期整理碎片</li>
                        <li>卸载不必要的软件</li>
                    </ul>
                </li>
                <li>💾 硬件升级
                    <ul>
                        <li>增加内存容量：如当前内存小于8GB，建议升级到16GB</li>
                        <li>更换固态硬盘：将系统盘从机械硬盘更换为固态硬盘可大幅提升系统响应速度</li>
                    </ul>
                </li>
                <li>🔍 深度检查
                    <ul>
                        <li>运行杀毒软件全面扫描</li>
                        <li>检查启动项：禁用不必要的开机启动程序</li>
                        <li>检查计划任务：禁用不必要的计划任务</li>
                    </ul>
                </li>
                <li>🔄 系统重装
                    <ul>
                        <li>如问题严重且长期存在，可考虑备份数据后重装系统</li>
                        <li>重装前请务必备份重要数据</li>
                    </ul>
                </li>
                <li>📞 寻求专业帮助
                    <ul>
                        <li>如果以上步骤都无法解决问题，建议寻求专业技术支持</li>
                    </ul>
                </li>
            </ul>
        `
    },
    internet: {
        summary: "根据您的描述，经过基础排查后问题依旧，可能需要专业技术支持。",
        possibilities: [
            { text: "网络驱动问题", level: "high" },
            { text: "系统网络组件损坏", level: "high" },
            { text: "路由器或ISP问题", level: "medium" },
            { text: "防火墙或安全软件拦截", level: "medium" }
        ],
        advice: `
            <ul>
                <li>🔧 网络重置
                    <ul>
                        <li>重置网络设置：以管理员身份运行命令提示符，输入以下命令并回车：
                            <pre>netsh winsock reset
netsh int ip reset
ipconfig /release
ipconfig /renew
ipconfig /flushdns</pre>
                        </li>
                        <li>重启电脑后检查网络是否恢复正常</li>
                    </ul>
                </li>
                <li>🔄 驱动更新
                    <ul>
                        <li>更新网络适配器驱动：在设备管理器中找到网络适配器，右键点击选择"更新驱动程序"</li>
                        <li>如更新后问题依旧，可尝试回退到之前的驱动版本</li>
                    </ul>
                </li>
                <li>🔍 防火墙和安全软件检查
                    <ul>
                        <li>临时关闭防火墙和杀毒软件，测试网络是否恢复正常</li>
                        <li>检查安全软件的网络防护设置，确保未错误拦截网络连接</li>
                    </ul>
                </li>
                <li>📶 路由器设置
                    <ul>
                        <li>登录路由器管理界面，检查是否有MAC地址过滤等限制设置</li>
                        <li>尝试重置路由器到出厂设置后重新配置</li>
                    </ul>
                </li>
                <li>📞 寻求专业帮助
                    <ul>
                        <li>如果以上步骤都无法解决问题，建议联系网络服务提供商或寻求专业技术支持</li>
                    </ul>
                </li>
            </ul>
        `
    },
    audio: {
        summary: "根据您的描述，经过基础排查后问题依旧，可能需要进一步检查。",
        possibilities: [
            { text: "音频驱动问题", level: "high" },
            { text: "硬件故障", level: "high" },
            { text: "系统音频服务异常", level: "medium" },
            { text: "音频编解码器问题", level: "medium" }
        ],
        advice: `
            <ul>
                <li>🔧 驱动和系统检查
                    <ul>
                        <li>重新安装音频驱动：在设备管理器中卸载音频设备，重启电脑让系统重新安装</li>
                        <li>运行音频故障排除程序：右键点击音量图标，选择"疑难解答"</li>
                        <li>重启Windows音频服务：按Win+R，输入services.msc，找到"Windows Audio"服务，右键点击选择"重新启动"</li>
                    </ul>
                </li>
                <li>🔄 系统修复
                    <ul>
                        <li>运行系统文件检查：以管理员身份运行命令提示符，输入sfc /scannow并回车</li>
                        <li>检查Windows更新：确保系统已更新到最新版本</li>
                    </ul>
                </li>
                <li>🔍 硬件测试
                    <ul>
                        <li>尝试使用其他音频设备（不同耳机或扬声器）测试</li>
                        <li>检查主板上的音频接口是否有物理损坏</li>
                    </ul>
                </li>
                <li>🛠️ 进阶操作
                    <ul>
                        <li>检查BIOS中的音频设置是否启用</li>
                        <li>如使用独立声卡，检查声卡是否正确安装</li>
                    </ul>
                </li>
                <li>📞 寻求专业帮助
                    <ul>
                        <li>如果以上步骤都无法解决问题，可能是硬件故障，建议寻求专业技术支持</li>
                    </ul>
                </li>
            </ul>
        `
    },
    heat: {
        summary: "根据您的描述，经过基础排查后问题依旧，可能需要专业维护。",
        possibilities: [
            { text: "散热系统老化", level: "high" },
            { text: "风扇轴承磨损", level: "high" },
            { text: "导热硅脂干涸", level: "medium" },
            { text: "机箱风道设计不良", level: "medium" }
        ],
        advice: `
            <ul>
                <li>🧹 深度清洁
                    <ul>
                        <li>彻底清理机箱内所有风扇和散热器上的灰尘</li>
                        <li>清理CPU和显卡散热器之间的灰尘</li>
                        <li>使用压缩空气罐进行深度清洁</li>
                    </ul>
                </li>
                <li>🔧 硬件维护
                    <ul>
                        <li>更换散热硅脂：CPU和显卡温度过高时需要更换导热硅脂</li>
                        <li>给风扇轴承添加润滑油：在风扇轴心处滴1-2滴缝纫机油</li>
                        <li>检查风扇是否需要更换</li>
                    </ul>
                </li>
                <li>🌬️ 改善散热
                    <ul>
                        <li>增加机箱风扇：改善机箱内部风道</li>
                        <li>调整风扇转速曲线：在BIOS或风扇控制软件中调整</li>
                        <li>考虑升级散热器：如使用更强的风冷或水冷散热器</li>
                    </ul>
                </li>
                <li>📊 监控温度
                    <ul>
                        <li>下载HWMonitor等软件持续监控温度</li>
                        <li>记录高负载时的温度数据</li>
                    </ul>
                </li>
                <li>📞 寻求专业帮助
                    <ul>
                        <li>如果以上步骤都无法解决问题，建议寻求专业技术支持，可能需要专业清洁或更换散热设备</li>
                    </ul>
                </li>
            </ul>
        `
    },
    boot: {
        summary: "根据您的描述，经过基础排查后问题依旧，可能需要专业技术支持。",
        possibilities: [
            { text: "电源供应器故障", level: "high" },
            { text: "主板问题", level: "high" },
            { text: "内存条故障", level: "medium" },
            { text: "CPU问题", level: "medium" }
        ],
        advice: `
            <ul>
                <li>🔌 检查电源连接
                    <ul>
                        <li>检查电源线是否插好，尝试更换插座</li>
                        <li>检查电源供应器是否有异味或异常发热</li>
                        <li>如有可能，尝试更换电源供应器测试</li>
                    </ul>
                </li>
                <li>🔧 硬件检查
                    <ul>
                        <li>重新插拔内存条和显卡</li>
                        <li>检查主板24pin和CPU 8pin/4pin电源线是否插紧</li>
                        <li>检查主板上是否有明显的烧毁痕迹</li>
                    </ul>
                </li>
                <li>🎛️ BIOS设置
                    <ul>
                        <li>清除CMOS：取出主板电池等待5分钟后重新安装</li>
                        <li>或使用主板上的CLR_CMOS跳线清除设置</li>
                    </ul>
                </li>
                <li>📞 寻求专业帮助
                    <ul>
                        <li>如果以上步骤都无法解决问题，建议寻求专业技术支持</li>
                        <li>送修时可说明：电脑完全不通电/无法开机，已检查电源线和插座，怀疑电源或主板故障</li>
                    </ul>
                </li>
            </ul>
        `
    },
    other: {
        summary: "对于其他未列出的问题，建议采用系统性排查方法。",
        possibilities: [
            { text: "硬件故障", level: "medium" },
            { text: "软件冲突", level: "medium" },
            { text: "系统问题", level: "medium" }
        ],
        advice: `
            <ul>
                <li>📋 详细记录
                    <ul>
                        <li>详细记录问题发生的场景和频率</li>
                        <li>记录问题发生时正在运行的软件</li>
                        <li>截图或拍照记录错误信息</li>
                    </ul>
                </li>
                <li>🔍 系统检查
                    <ul>
                        <li>尝试在安全模式下启动电脑</li>
                        <li>运行系统自带的诊断工具</li>
                        <li>运行杀毒软件进行全面扫描</li>
                    </ul>
                </li>
                <li>🔄 软件排查
                    <ul>
                        <li>检查最近安装的软件或更新</li>
                        <li>卸载最近安装的可疑软件</li>
                        <li>运行系统文件检查：以管理员身份运行命令提示符，输入sfc /scannow并回车</li>
                    </ul>
                </li>
                <li>🛠️ 硬件排查
                    <ul>
                        <li>检查设备管理器中是否有硬件冲突或错误</li>
                        <li>重新插拔内存条和显卡</li>
                        <li>检查所有内部连线是否牢固</li>
                    </ul>
                </li>
                <li>📞 寻求专业帮助
                    <ul>
                        <li>如问题严重或无法自行解决，建议寻求专业技术支持</li>
                    </ul>
                </li>
            </ul>
        `
    },
    default: {
        summary: "根据您的描述，经过基础排查后问题依旧，建议寻求专业技术支持。",
        advice: `
            <ul>
                <li>详细记录问题发生的场景和频率</li>
                <li>尝试在安全模式下启动电脑</li>
                <li>运行系统自带的诊断工具</li>
                <li>如问题严重，建议寻求专业技术支持</li>
            </ul>
        `
    }
};

// 获取可能性文本
function getPossibilityText(level) {
    switch (level) {
        case 'high': return '高';
        case 'medium': return '中';
        case 'low': return '低';
        default: return '未知';
    }
}