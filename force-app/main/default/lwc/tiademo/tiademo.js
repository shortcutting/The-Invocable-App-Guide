import { LightningElement, wire } from "lwc";
import apexCall from "@salesforce/apex/I1.SystemStringSubstringAfterc4983.callAuraEnabled";
import apexCallCacheable from "@salesforce/apex/I1.SystemStringSubstringAfterc4983.callAuraEnabledCacheable";

export default class Tiademo extends LightningElement {
    separator = "Hello ";
    variableToApplyMethodOn = "Hello World";
    inputs = [
        {
            separator: this.separator,
            variableToApplyMethodOn: this.variableToApplyMethodOn
        }
    ];

    async handleAuraEnabledClick() {
        try {
            let result = await apexCall({ inputs: this.inputs });
            console.log("apexCall result", result);
        } catch (error) {
            console.log("apexCall error", error);
        }
    }

    async handleAuraEnabledCacheableClick() {
        try {
            let result = await apexCallCacheable({
                inputs: this.inputs
            });
            console.log("apexCallCacheable result", result);
        } catch (error) {
            console.log("apexCallCacheable error", error);
        }
    }

    errorstring = "";
    datastring = "";
    @wire(apexCallCacheable, { inputs: "$inputs" })
    apexCallCacheableWired({ error, data }) {
        if (error) {
            this.errorstring = JSON.stringify(error);
            console.log("apexCallCacheableWired error", error);
        } else if (data) {
            this.datastring = JSON.stringify(data);
            console.log("apexCallCacheableWired data", data);
        }
    }

    handleSeparatorChange(event) {
        this.separator = event.detail.value;
        this.setInputs();
    }

    handleVariableToApplyMethodOnChange(event) {
        this.variableToApplyMethodOn = event.detail.value;
        this.setInputs();
    }

    setInputs() {
        this.inputs = [
            {
                separator: this.separator,
                variableToApplyMethodOn: this.variableToApplyMethodOn
            }
        ];
    }
}
