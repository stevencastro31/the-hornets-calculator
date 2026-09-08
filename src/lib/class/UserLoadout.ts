
import { NeedleType } from "../enums/NeedleType";
import { CrestType } from "../enums/CrestType";

class UserLoadout {
    // Attributes
    crest: CrestType = $state(CrestType.Hunter2);
    needle: NeedleType = $state(NeedleType.Needle);

    // Constructors
    constructor() { }

    // Functions
    SetCrestType(type: CrestType) {
        
    }
};