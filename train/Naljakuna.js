/**
 * https://ntws.kr/modelpack/detail/?pack_code=nopk
 * sound_nopkr/train/rtm_Naljakuna
 */

importPackage(Packages.jp.ngt.rtm);
importPackage(Packages.net.minecraft.util);

function doThat(tile, train, first) { 
    if (first) 
    {
        var sa = ["sound_nopkr", "train.rtm_Naljakuna"];
        var entries = train.getFormation().entries;
        for (var i = 0; i < entries.length; i++) 
        {
            RTMCore.proxy.playSound(entries[i].train, new ResourceLocation(sa[0], sa[1]), 1.0, 1.0);
        }
    }
}