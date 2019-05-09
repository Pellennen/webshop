function load(){
    let listLoad = "";
    let totalPrice = 0;
    for (var i = 0; i < localStorage.length; i++) {
    var keyLS = JSON.parse(localStorage.getItem(localStorage.key(i)));
    totalPrice += parseInt(keyLS.price * keyLS.quantity);
    listLoad += `<tr>
                 <td><img class="CheckoutIMG" src="${keyLS.link}" alt="Italian Trulli">
                 <td>${keyLS.name}</td>
                 <td>${keyLS.price}</td>
                 <td>${keyLS.quantity}</td>
                 
                 </tr>`
    
   
    }
    $("#tbodyid").html(listLoad);
    $("#TotalPrice").html("Total Price: "+totalPrice );
            }

            load();



            $(function(){
                $("#buttonMe").click(function(){
                    let $name = $("#name").val();
                    let $email = $("#email").val();
                    let $tel=$("#tf").val();
                    if($name.length && $email.length && $tel.length >= 4)
                    {
                    let text =(`<h1>Thank you <b>${$name}</b>
                                        <p>All information har skickats till <b>${$email}</b>
                                        <p>Om vi har några ytterligare frågor kommer vi kontakta dig på <b>${$tel}</b>
                                        <a href="index.html"><button class="btn btn-success">Back to Store</button></a>`);
                    localStorage.clear();
                    document.getElementById('lastText').innerHTML = text;
                    }
                    else{
                        $(".message").css("display","inline");
                    }
                })
            })