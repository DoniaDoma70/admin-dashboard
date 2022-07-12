/* Charts */
window.onload = function () {

    /* Column Chart */
    //Better to construct options first and then pass it as a parameter
    var options = {
        animationEnabled: true,
        backgroundColor: "transparent",
        title: {
            text: "Conversions This Year",
            //horizontalAlign : "left",
            color: "rgb(128, 126, 126)",
            fontSize: "19"
        },
        data: [
            {
                type: "column",
                color: "#0e9f6e",
                name: "Fresh Vegetable",
                legendText: "Fresh Vegetable",
                showInLegend: true,
                dataPoints: [
                    { label: "January", y: 15 },
                    { label: "February", y: 35 },
                    { label: "March", y: 45 },
                    { label: "Abril", y: 40 },
                    { label: "May", y: 70 },
                    { label: "June", y: 85 },
                    { label: "July", y: 90 }
                ]
            },
            {
                type: "column",
                color: "rgb(47, 69, 165)",
                name: "Cooking Essentials",
                legendText: "Cooking Essentials",
                showInLegend: true,
                dataPoints: [
                    { label: "January", y: 5 },
                    { label: "February", y: 25 },
                    { label: "March", y: 50 },
                    { label: "Abril", y: 35 },
                    { label: "May", y: 24 },
                    { label: "June", y: 32 },
                    { label: "July", y: 84 }
                ]
            },
            {
                type: "column",
                color: "rgb(230, 77, 21)",
                name: "Drinks",
                legendText: "Drinks",
                showInLegend: true,
                dataPoints: [
                    { label: "January", y: 10 },
                    { label: "February", y: 45 },
                    { label: "March", y: 52 },
                    { label: "Abril", y: 74 },
                    { label: "May", y: 33 },
                    { label: "June", y: 50 },
                    { label: "July", y: 70 }
                ]
            },
            {
                type: "column",
                color: "#3498db",
                name: "Organic Food",
                legendText: "Organic Food",
                showInLegend: true,
                dataPoints: [
                    { label: "January", y: 20 },
                    { label: "February", y: 35 },
                    { label: "March", y: 30 },
                    { label: "Abril", y: 74 },
                    { label: "May", y: 33 },
                    { label: "June", y: 40 },
                    { label: "July", y: 70 }
                ]
            }
        ]
    };

    $("#ColumnchartContainer").CanvasJSChart(options);

    /* Donut Chart */
    var options = {
        animationEnabled: true,
        backgroundColor: "transparent",
        title: {
            text: "Top Revenue Product",
            fontSize: "19"
        },
        data: [{
            type: "doughnut",
            innerRadius: "40%",
            showInLegend: true,
            legendText: "{label}",
            indexLabel: "{label}: #percent%",
            dataPoints: [
                { label: "Fresh Vegetable", y: 35, color: "#0e9f6e" },
                { label: "Cooking Essentials", y: 30, color: "rgb(47, 69, 165)" },
                { label: "Drinks", y: 15, color: "rgb(230, 77, 21)" },
                { label: "Organic Food", y: 20, color: "#3498db" }
            ]
        }]
    };
    $("#DonutchartContainer").CanvasJSChart(options);
    
    
    

};
/* Data Table */
$(document).ready(function () {

    let localSTheme = localStorage.getItem("isDarkMode");
    //debugger
    if (localSTheme == null) {
        window.localStorage.setItem('isDarkMode', false);

    } else if (localSTheme == "true") {
        document.body.classList.toggle("dark-mode"); //add

    }else if (localSTheme == "false") {
        document.body.remove.classList.toggle("dark-mode"); ///remove

    }


    $('#dashboardDataTable').DataTable();

});
/*dark mode*/
function changeToDarkMode() {
    const currentTheme = localStorage.getItem("isDarkMode");
    if (currentTheme == "true") {
        window.localStorage.setItem('isDarkMode', false);
    } else {
        window.localStorage.setItem('isDarkMode', true);
    }
    // window.localStorage.setItem('isDarkMode',);
    //console.log(window.localStorage.getItem("dark-mode"));
    document.body.classList.toggle("dark-mode");
    //document.body.classList.toggle(window.localStorage.getItem("dark-mode"));
    var img = document.getElementById("sidebarlogoImg");
    var headerElements = document.getElementsByTagName("h3");
    var paragraphElements = document.getElementsByTagName("p");
    var tableRowsElements = document.getElementsByTagName("tr");
    var tableHeadElements = document.getElementsByTagName("th");
    var inputElements = document.getElementsByTagName("input");
    var dropDowns = document.getElementsByClassName("dropdown-menu");
    const newThem = localStorage.getItem("isDarkMode");
    console.log(newThem)
    /*const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark-mode") {
        document.body.classList.toggle("dark-mode");
    } else {
        document.body.classList.toggle("light-mode");
    }*/

    if (document.body.classList.contains("dark-mode")) {
        img.src = "img/logo-dashboardSidebarDarkmode.svg";
        document.getElementById("darkModeIcon").style.display = "none";
        document.getElementById("lightModeIcon").style.display = "inline";
        //document.getElementById("dashboardDataTable_info").style.color = "#fff";
        //document.getElementById("newProductSidebar").style.color = "#fff";
        //document.getElementById("newProductSidebar").style.backgroundColor = "#212529";
        for (let index = 0; index < headerElements.length; index++) {
            headerElements[index].style.color = "#fff";
        }
        for (let index = 0; index < paragraphElements.length; index++) {
            paragraphElements[index].style.color = "#fff";
        }
        for (let index = 0; index < tableRowsElements.length; index++) {
            tableRowsElements[index].style.color = "#fff";
        }
        for (let index = 0; index < tableHeadElements.length; index++) {
            tableHeadElements[index].style.backgroundColor = "#212529";
            tableHeadElements[index].style.color = "#fff";
        }
        for (let index = 0; index < inputElements.length; index++) {
            inputElements[index].style.color = "#fff";
            inputElements[index].style.backgroundColor = "#212529";
        }
        for (let index = 0; index < dropDowns.length; index++) {
            dropDowns[index].style.color = "#fff";
            dropDowns[index].style.backgroundColor = "#212529";
        }
    } else {
        img.src = "img/logo-dashboardSidebar.svg";
        document.getElementById("darkModeIcon").style.display = "inline";
        document.getElementById("lightModeIcon").style.display = "none";
        //document.getElementById("dashboardDataTable_info").style.color = "#212529";
        //document.getElementById("newProductSidebar").style.color = "#212529";
        //document.getElementById("newProductSidebar").style.backgroundColor = "#fff";
        for (let index = 0; index < headerElements.length; index++) {
            headerElements[index].style.color = "#212529";
        }
        for (let index = 0; index < paragraphElements.length; index++) {
            paragraphElements[index].style.color = "#212529";
        }
        for (let index = 0; index < tableRowsElements.length; index++) {
            tableRowsElements[index].style.color = "#212529";
        }
        for (let index = 0; index < tableHeadElements.length; index++) {
            tableHeadElements[index].style.backgroundColor = "#fff";
            tableHeadElements[index].style.color = "#212529";
        }
        for (let index = 0; index < inputElements.length; index++) {
            inputElements[index].style.color = "#212529";
            inputElements[index].style.backgroundColor = "#fff";
        }
        for (let index = 0; index < dropDowns.length; index++) {
            dropDowns[index].style.color = "#212529";
            dropDowns[index].style.backgroundColor = "#fff";
        }
    }
};

/* open sidebar */
function openSidebar() {
    document.getElementById("dashboardSidebar").style.display = "block";
    document.getElementById("dashboardSidebar").style.width = "250px";
}
/* close sidebar */
function closesidebar() {
    document.getElementById("dashboardSidebar").style.display = "none";
}
/* add product */
function addProduct() {

    document.getElementById("newProductSidebar").style.width = "600px";
};
function closeProductSidebar() {
    document.getElementById("newProductSidebar").style.width = "0px";
    /*document.getElementsByClassName("productSideFooter").style.width= "0px";*/
};
function editProduct() {
    document.getElementById("neweditProductSidebar").style.width = "600px";
};
function closeProducteditSidebar() {
    document.getElementById("neweditProductSidebar").style.width = "0px";
}
function editFunc() {
    document.getElementById("neweditProductSidebar").style.width = "600px";
}



