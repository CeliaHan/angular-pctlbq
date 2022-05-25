import { Component } from '@angular/core';

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

  getUser() {
    this.user = DATA_SET.filter((item) => item.id === this.input)[0];
  }

  print() {
    this.isPrint = true;
    window.setTimeout(() => {
      window.print();
      this.isPrint = false;
    }, 500);
  }
}

const USER_LIST = [
  { id: '124444', name: '111', number: '011' },
  { id: '224444', name: '222', number: '222' },
];

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
  { number: '028', name: '张家齐', id: '340903200607300410' },
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
];
