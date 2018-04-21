 function RemoveHtmlTags(a) {
            return a.replace(/(<([^>]+)>)/ig, "");
        }