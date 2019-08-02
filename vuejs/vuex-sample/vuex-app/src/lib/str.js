
/**
 * ランダム文字列生成 (英数字)
 * $length: 生成する文字数
 */
export default function makeRandStr() {
    var $r_str = ''
    $r_str = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5)
    return $r_str;
}
