import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'toolbar-overview-example',
  templateUrl: 'toolbar-overview-example.html',
  styleUrls: ['toolbar-overview-example.css'],
})
export class ToolbarOverviewExample {
  input: string = '';
  user: People = { id: '', name: '', number: '000' };
  isPrint: boolean = false;
  count: number = 0;
  countList: number[] = [0, 1, 2, 3, 4];

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(user: People, count: number) {
    this._snackBar.open(`${user.name}没有第${count}个节目`, '关闭');
  }

  getUser() {
    const searched = DATA_SET.filter((item) => item.id === this.input);
    if (searched.length < (this.count + 1)) {
      this.user = searched[0] as People;
      this.openSnackBar(this.user, this.count + 1);
      return;
    }
    this.user = searched[this.count] as People;

  }

  print() {
    this.isPrint = true;
    window.setTimeout(() => {
      window.print();
      this.isPrint = false;
    }, 500);
  }
}

interface People {
  id: string;
  name: string;
  number: string;
}

const DATA_SET = [
  { number: '001', name: '刘洲睿', id: '371721201307090836' },
  { number: '002', name: '许翷华', id: '310101201708233711' },
  { number: '003', name: '崔佳音', id: '310107201711170422' },
  { number: '004', name: '潘思元', id: '310112201611144340' },
  { number: '005', name: '汤乐程', id: '310115201408225814' },
  { number: '006', name: '黄书瑶', id: '310112201002218121' },
  { number: '007', name: '邵馨月', id: '310112201408246624' },
  { number: '008', name: '刘隽仪', id: '310112201311197221' },
  { number: '009', name: '毛彦斐', id: '340311201302092524' },
  { number: '010', name: '王佳茗', id: '310115201406214767' },
  { number: '011', name: '陈可馨', id: '341525201406011629' },
  { number: '012', name: '王怡惠', id: '810000201201060029' },
  { number: '013', name: '范思妤', id: '41132220110610002X' },
  { number: '014', name: '陈烨轩', id: '330624201209100944' },
  { number: '015', name: '张渃薰', id: '310112201304173627' },
  { number: '016', name: '吴歆睿', id: '410727201303130423' },
  { number: '017', name: '欧滢滋', id: '310106201007082828' },
  { number: '018', name: '赵翼霖', id: '31010120130506321X' },
  { number: '019', name: '伍心灵', id: '421087199902151307' },
  { number: '020', name: '季熙媛', id: '310104201404024063' },
  { number: '021', name: '金子晏', id: '310105201106213620' },
  { number: '022', name: '张睿婕', id: '310115201301112967' },
  { number: '023', name: '彭麟媛', id: '310101201608095729' },
  { number: '024', name: '李文萱', id: '310116201511100821' },
  { number: '025', name: '顾心悦', id: '310107201011245729' },
  { number: '026', name: '陈思琪', id: '310108201112052826' },
  { number: '027', name: '何君悦', id: '31011520060322322X' },
  { number: '028', name: '张竞闻', id: '230305200403114326' },
  { number: '028', name: '张家齐', id: '340603200607300410' },
  { number: '028', name: '陈渲宜', id: '512081200709122547' },
  { number: '028', name: '印思源', id: '310104200803110829' },
  { number: '029', name: '印思源', id: '310104200803110829' },
  { number: '030', name: '张家齐', id: '340603200607300410' },
  { number: '031', name: '陈渲宜', id: '512081200709122547' },
  { number: '032', name: '张竞闻', id: '230305200403114326' },
  { number: '033', name: '付韵琪', id: '23040220110310002X' },
  { number: '034', name: '朱含丹', id: '31011420100610102X' },
  { number: '035', name: '王静', id: '360830201201135126' },
  { number: '036', name: '谢梓傲', id: '45012720110826034X' },
  { number: '037', name: '王阅', id: '310115201108300894' },
  { number: '038', name: '王籽涵', id: '310105200805041229' },
  { number: '039', name: '陆圣云', id: '310101201610201033' },
  { number: '040', name: '张钰茗', id: '310115200906070224' },
  { number: '041', name: '李鸿一', id: '310115201108070021' },
  { number: '042', name: '徐旖悦', id: '310115201204061344' },
  { number: '043', name: '应筱筱', id: '310104201405272827' },
  { number: '044', name: '高熠欣', id: '310104201004122828' },
  { number: '045', name: '程诺莎', id: 'HJ2129603' },
  { number: '046', name: '费博彦', id: '310112201207210019' },
  { number: '047', name: '王泽语', id: '310107201002053012' },
  { number: '048', name: '董倩倩', id: '340823200201013741' },
  { number: '049', name: '蒋卓霖', id: '310115201509070540' },
  { number: '050', name: '蒋卓晓', id: '310115201111110522' },
  { number: '051', name: '金霈媞', id: 'K05806479' },
  { number: '052', name: '李文祺', id: '210521201606190419' },
  { number: '053', name: '张一依', id: '341622201512218725' },
  { number: '054', name: '王韵惜', id: '371581201310240028' },
  { number: '055', name: '唐可心', id: '532627201306243128' },
  { number: '056', name: '瞿一冉', id: '310117200806072022' },
  { number: '057', name: '张昕芸', id: '31011520120516154X' },
  { number: '058', name: '张世馨', id: '231005201103230025' },
  { number: '059', name: '乐琳', id: '31011020101011002X' },
  { number: '060', name: '王妙伊', id: '310104201507180026' },
  { number: '061', name: '王妙伊', id: '310104201507180026' },
  { number: '062', name: '古原彩香', id: 'MZ2045186' },
  { number: '063', name: '钱沛琦', id: '310104201212144028' },
  { number: '064', name: '周千沂', id: '500103201010186229' },
  { number: '065', name: '陈泽天', id: '310107200903160913' },
  { number: '066', name: '周鑫志', id: '310112200810201534' },
  { number: '067', name: '丁意意', id: '310115201110156625' },
  { number: '068', name: '胡芳菲', id: '310108201208161023' },
  { number: '069', name: '刘泽屹', id: '31011720160405201X' },
  { number: '070', name: '范芮萱', id: '350703201708083744' },
  { number: '071', name: '李梓桐', id: '420106201504152087' },
  { number: '072', name: '王月', id: '310115201503174947' },
  { number: '073', name: '张恩弘', id: '310113201401130019' },
  { number: '074', name: '周宸鸿', id: '310103200803136029' },
  { number: '075', name: '刘婉菁', id: 'E03906890' },
  { number: '076', name: '汪子涵', id: '310105200810032829' },
  { number: '077', name: '崔婉瑜', id: '310115201412120046' },
  { number: '078', name: '毛钦慧', id: '31011420140305102X' },
  { number: '079', name: '徐子航', id: '310109201312221512' },
  { number: '080', name: '刘艺涵', id: '310118201208201649' },
  { number: '081', name: '朱泓洁', id: '332526200004010042' },
  { number: '082', name: '林瑶', id: '410782201408130045' },
  { number: '083', name: '陈乐怡', id: '330109201502063360' },
  { number: '084', name: '余以琳', id: '330127201012165324' },
  { number: '085', name: '邱梓熙', id: '330104201101174420' },
  { number: '086', name: '宋伊一', id: '310118201412020220' },
  { number: '087', name: '皮雅楠', id: '310109201601243523' },
  { number: '088', name: '夏雨沫', id: '310110201704200521' },
  { number: '089', name: '岑嘉怡', id: '310109200911111521' },
  { number: '090', name: '赵嘉宸', id: '310109200807283024' },
  { number: '091', name: '庄可枔', id: '31010920170112058X' },
  { number: '092', name: '周辰玥', id: '310110201312175662' },
  { number: '093', name: '张一承', id: '310115200911112644' },
  { number: '094', name: '李奕林', id: '31011320150311006X' },
  { number: '095', name: '代琳琳', id: '341324201103224929' },
  { number: '096', name: '赵一遥​', id: '220204201105303023' },
  { number: '097', name: '郭艺辰', id: '31011220120512212X' },
  { number: '098', name: '黄楚涵', id: '320483201011160228' },
  { number: '099', name: '周逸', id: '310108200912242025' },
  { number: '100', name: '张犇', id: '410105200903230078' },
  { number: '101', name: '王昀', id: '310106201306060821' },
  { number: '102', name: '李思佳', id: '310107200908274423' },
  { number: '103', name: '周宸羽', id: '310105201305302829' },
  { number: '104', name: '蔡孝杰', id: '310101201501163357' },
  { number: '105', name: '颜米娅', id: '310115201311184622' },
  { number: '106', name: '陈明泽', id: '33032420120726683X' },
  { number: '107', name: '张天心', id: '310115201312095162' },
  { number: '108', name: '叶思凡', id: '31011520161002053X' },
  { number: '109', name: '薛怿辰', id: '310115201412085172' },
  { number: '110', name: '邵梓瞳', id: '330781201108300026' },
  { number: '111', name: '费宇晨', id: '51132320111009251X' },
  { number: '112', name: '许雨晴', id: '310115201212075180' },
  { number: '113', name: '顾译涵', id: '320684201109170034' },
  { number: '114', name: '黄骐骥', id: '430421201501310176' },
  { number: '115', name: '张子睦', id: '341521201311036078' },
  { number: '116', name: '徐蕴瑶', id: '310115201103080183' },
  { number: '117', name: '俞舒媛', id: '310108201002182849' },
  { number: '118', name: '张艺馨', id: '320201201511133546' },
  { number: '119', name: '张伊萌', id: '310115201104084127' },
  { number: '120', name: '黄梦窈', id: '310115201207063089' },
  { number: '121', name: '刘艺', id: '310115200203190924' },
  { number: '122', name: '江予时', id: '310115201106222220' },
  { number: '123', name: '吴明依', id: '310115201101092228' },
  { number: '124', name: '毛子嫣', id: '310110201601152029' },
  { number: '125', name: '陈轶涵', id: '310104201207224031' },
  { number: '126', name: '陈轶涵', id: '310104201207224031' },
  { number: '127', name: '钱嘉泽', id: '310115201603231830' },
  { number: '128', name: '杨皓朗', id: '31011520110725323X' },
  { number: '129', name: '韩梓悦', id: '310115201410021167' },
  { number: '130', name: '胡绾桐', id: '310107201306155720' },
  { number: '131', name: '陈艳', id: '320922199807072420' },
  { number: '132', name: '陈思宇', id: '31011220130718492X' },
  { number: '133', name: '赖艺恩', id: '31011320140204434X' },
  { number: '134', name: '徐嘉喆', id: '411402201110270267' },
  { number: '135', name: '吴鑫子', id: 'H60087980' },
  { number: '136', name: '李若冲', id: '310105200908313637' },
  { number: '137', name: '万睿思', id: '310112201007156660' },
  { number: '138', name: '王诺一', id: '31010120110627003X' },
  { number: '139', name: '江莱', id: '310115201309274629' },
  { number: '140', name: '吴天悦', id: '310113200806276521' },
  { number: '141', name: '张紫萱', id: '310110200907160027' },
  { number: '142', name: '刘善祖', id: '31011820150609161X' },
  { number: '143', name: '朱雯希', id: '230129201507111941' },
  { number: '144', name: '韩雨萱', id: '310115200909079427' },
  { number: '145', name: '吴主亮', id: '320902201201117510' },
  { number: '146', name: '吴主光', id: '320902200602177536' },
  { number: '147', name: '毛景煜', id: '360826201505082524' },
  { number: '148', name: '蔡铭洋', id: '120103201502100048' },
  { number: '149', name: '李烨枫', id: '310110201509095615' },
];