// 画廊页面功能

document.addEventListener('DOMContentLoaded', function() {
    initModal();
});

// 初始化模态框
function initModal() {
    const modal = document.getElementById('workModal');
    const modalContent = document.getElementById('modalContent');

    if (!modal || !modalContent) return;

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// 打开模态框
function openModal(workId) {
    const modal = document.getElementById('workModal');
    const modalContent = document.getElementById('modalContent');

    if (!modal || !modalContent) return;

    const workInfo = getWorkInfo(workId);

    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${workInfo.title}</h2>
        </div>
        <div class="modal-body">
            <div class="modal-image">
                <img src="${workInfo.image}" alt="${workInfo.title}">
            </div>
            <div class="modal-details">
                <div class="detail-section">
                    <h3>作品信息</h3>
                    <p><strong>作者：</strong>${workInfo.author}</p>
                    <p><strong>材质：</strong>${workInfo.material}</p>
                    <p><strong>尺寸：</strong>${workInfo.size}</p>
                    <p><strong>工艺：</strong>${workInfo.technique}</p>
                </div>
                <div class="detail-section">
                    <h3>作品描述</h3>
                    <p>${workInfo.description}</p>
                </div>
                <div class="detail-section">
                    <h3>艺术特色</h3>
                    <p>${workInfo.features}</p>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';

    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    }, 10);

    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('workModal');

    if (!modal) return;

    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.9)';

    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// 获取作品信息
function getWorkInfo(workId) {
    const worksData = {
        'work_shenyun': {
            title: '神韵',
            author: '白耀华',
            material: '白水牛角',
            size: '42cm × 50cm',
            technique: '线雕、圆雕',
            description: '雕刻了8条神仙鱼在水草海带间遨游，线雕与圆雕结合，装饰性强，呈现鱼儿悠闲舒适的海底生活。',
            features: '造型灵动，线雕细腻，装饰性强，展现海底世界的生机与美感。',
            image: '../images/work_shenyun.jpg'
        },
        'work_hongyundangtou': {
            title: '鸿运当头',
            author: '白耀华',
            material: '水牛角',
            size: '36cm × 54cm',
            technique: '圆雕',
            description: '以金鱼为题材，金鱼与"金玉"谐音，寓意常行好运、富贵富足、金玉满堂、和风顺畅。',
            features: '造型优美，寓意吉祥，雕刻精细，极具观赏价值。',
            image: '../images/work_hongyundangtou.jpg'
        },
        'work_caifuzhishou': {
            title: '财富之首',
            author: '白耀华',
            material: '白水牛角',
            size: '51cm × 54cm',
            technique: '圆雕',
            description: '一群活泼老鼠前行，视觉中心老鼠背着钱袋，白菜谐音"百财"，寓意富贵富足、常行好运。',
            features: '构思巧妙，寓意丰富，雕刻技法娴熟，充满生活情趣。',
            image: '../images/work_caifuzhishou.jpg'
        },
        'work_yutiantongshou': {
            title: '与天同寿',
            author: '白耀华',
            material: '优质牛角',
            size: '34cm × 54cm',
            technique: '浮雕、圆雕',
            description: '寿桃、仙鹤、祥云、麒麟、灵芝、菊花、珊瑚等长寿元素组合，寓意延年益寿。',
            features: '元素丰富，构图饱满，雕刻精细，寓意深远。',
            image: '../images/work_yutiantongshou.jpg'
        },
        'work_huahaoyueyuan': {
            title: '花好月圆',
            author: '白耀华',
            material: '白水牛角',
            size: '36cm × 54cm',
            technique: '透雕、浮雕',
            description: '牡丹寓意富贵，水仙象征高洁，菊花喻淡泊名利，配以明月，寓意富贵富足、万事顺意、和和满满。2018年获"百花杯"金奖。',
            features: '构图精美，花鸟传神，透雕技法精湛，寓意美好。',
            image: '../images/work_huahaoyueyuan.jpg'
        },
        'work_chunchao': {
            title: '春潮',
            author: '白耀华',
            material: '白水牛角',
            size: '36cm × 50cm',
            technique: '圆雕、线雕',
            description: '一群虾蟹在水浪上戏游，刻画出春天到来虾蟹涌动的盎然景象，寓意团结拼搏、自强不息。',
            features: '动态感强，水族生物刻画传神，充满春天的生机与活力。',
            image: '../images/work_chunchao.jpg'
        },
        'work_hemingbaicai': {
            title: '和鸣百财',
            author: '白耀华',
            material: '白水牛角',
            size: '36cm × 54cm',
            technique: '圆雕、镂雕',
            description: '白菜与"百财"谐音，融合昆虫题材，喻意和气生财、共同繁荣、和风致祥、容者大成。2016年获"百花杯"金奖。',
            features: '题材新颖，寓意深刻，雕工细腻，昆虫刻画栩栩如生。',
            image: '../images/work_hemingbaicai.jpg'
        },
        'work_zhongguomeng': {
            title: '中国梦',
            author: '白耀华',
            material: '白水牛角',
            size: '58cm × 39cm',
            technique: '圆雕、浮雕',
            description: '国画形式、双面通透屏风格局，将雕刻与装饰工艺结合；虾群拼搏向前，寓意对幸福生活的不懈追求。2014年获"百花杯"金奖。',
            features: '形式新颖，构图大气，寓意深远，是传统与现代结合的典范。',
            image: '../images/work_zhongguomeng.jpg'
        },
        'work_jiuzhoutongqing': {
            title: '九州同庆',
            author: '白耀华',
            material: '牛角、玉牌',
            size: '48cm × 72cm',
            technique: '浮雕、镂空',
            description: '为中国共产党成立一百周年而作，竹篮承载百花，配以玉牌、瑞兽，寓意国泰民安、繁荣昌盛。',
            features: '主题鲜明，气势恢宏，雕刻技法多样，具有鲜明的时代特色。',
            image: '../images/work_jiuzhoutongqing.jpg'
        },
        'work_yipinqinglian': {
            title: '一品清廉',
            author: '白耀华',
            material: '盘羊角、白水牛角',
            size: '36cm × 54cm',
            technique: '圆雕、镂雕',
            description: '荷花寓清廉，虾蟹于莲间畅游寓意廉洁。盘羊角雕莲藕，白水牛角雕虾蟹、莲叶、莲花，写实传神。',
            features: '题材高雅，材质运用巧妙，写实技法精湛，寓意深远。',
            image: '../images/work_yipinqinglian.jpg'
        },
        'work_shenyoutu': {
            title: '神游图',
            author: '白耀华',
            material: '白水牛角',
            size: '36cm × 54cm',
            technique: '圆雕、镂雕',
            description: '取意庄子《逍遥游》，神仙鱼穿梭于水草海带间，描绘逍遥自在之景，寄托对精神境界的追求。',
            features: '意境深远，构图空灵，鱼虫刻画生动，充满诗意美感。',
            image: '../images/work_shenyoutu.jpg'
        },
        'work_siluguyun': {
            title: '丝路古韵',
            author: '白耀华',
            material: '黑白水牛角、山羊角',
            size: '78cm × 52cm',
            technique: '线雕、浮雕、镂空',
            description: '以合浦出土汉代文物为蓝本：铜凤灯（线雕）、玉瓶与玉牌（浮雕镂空），黑白水牛角与山羊角综合呈现两千年前的丝路繁华。',
            features: '历史底蕴深厚，材质运用丰富，技法多样，文化价值极高。',
            image: '../images/work_siluguyun.jpg'
        }
    };

    return worksData[workId] || worksData['work_shenyun'];
}
