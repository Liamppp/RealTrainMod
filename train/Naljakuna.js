/**
 * https://ntws.kr/modelpack/detail/?pack_code=nopk
 * sound_nopkr/train/rtm_Naljakuna
 */

importPackage(Packages.jp.ngt.rtm);
importPackage(Packages.net.minecraft.util);

function doThat(tile, train, first) { 
    if (first) 
    {
        const sound = ["sound_nopkr", "train.rtm_Naljakuna"];
        const entries = train.getFormation().entries;
        for (let i = 0; i < entries.length; i++) 
        {
            RTMCore.proxy.playSound(entries[i].train, new ResourceLocation(sound[0], sound[1]), 1.0, 1.0);
        }
    }
}