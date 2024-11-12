"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function downloadImage(url) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("foto");
        try {
            const response = yield fetch(url);
            if (!response.ok)
                throw new Error(`Failed to fetch image: ${response.statusText}`);
            const blob = yield response.blob();
            const link = document.createElement("a");
            const urlObject = URL.createObjectURL(blob);
            link.href = urlObject;
            link.download = getImageFilename(url);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(urlObject);
        }
        catch (error) {
            console.error(`Error while downloading image from ${url}: `, error);
        }
    });
}
function getImageFilename(url) {
    return url.substring(url.lastIndexOf('/') + 1);
}
