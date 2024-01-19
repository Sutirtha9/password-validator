                                                                                                                                                document.querySelector('body').innerHTML+='<p id="creator">By Sutirtha</p>';
document.querySelector('#inputbox').addEventListener("keyup",function(){


    document.querySelector('#a').name="close";
    document.querySelector('#a').style.color="#ff6d6d";

    document.querySelector('#b').name="close";
    document.querySelector('#b').style.color="#ff6d6d";

    document.querySelector('#c').name="close";
    document.querySelector('#c').style.color="#ff6d6d";

    document.querySelector('#d').name="close";
    document.querySelector('#d').style.color="#ff6d6d";

    document.querySelector('#e').name="close";
    document.querySelector('#e').style.color="#ff6d6d";


    var inputValue = document.querySelector('#inputbox').value;

    if(inputValue.length >= 8)
    {
        document.querySelector('#a').name="checkmark";
        document.querySelector('#a').style.color="lime";
         
    }

    for(var i=0;i<inputValue.length;i++)
    {
        var letter=inputValue.charAt(i);

        var pattern=letter.match("[abcdefghijklmnopqrstuvwxyz]"); //Returns the matched character
        if(pattern != null)
        {
            var type="small";
        }
        else
        {
            pattern=letter.match("[ABCDEFGHIJKLMNOPQRSTUVWXYZ]");
            if(pattern != null)
            {
                var type="capital";
            }
            else
            {
                pattern=letter.match("[0-9]");
                if(pattern != null)
                {
                    var type="number";
                }
                else
                {
                    pattern=letter.match("[!@#$%^&*()_-~`+={}:;'<?/>.,]");
                    if(pattern != null)
                    {
                        var type="special";
                    }
                    else
                    {
                        var type="false";
                    }
                }
            }
        }

        switch(type)
        {
            case "small":
                document.querySelector('#b').name="checkmark";
                document.querySelector('#b').style.color="lime";
            break;

            case "capital":
                document.querySelector('#c').name="checkmark";
                document.querySelector('#c').style.color="lime";
            break;

            case "number":
                document.querySelector('#d').name="checkmark";
                document.querySelector('#d').style.color="lime";
            break;

            case "special":
                document.querySelector('#e').name="checkmark";
                document.querySelector('#e').style.color="lime";
            break;
        }
    }
    if(document.querySelector('#a').name == "checkmark" && document.querySelector('#b').name == "checkmark" && document.querySelector('#c').name == "checkmark" && document.querySelector('#d').name == "checkmark" && document.querySelector('#e').name == "checkmark")
    {
        document.querySelector('#valid').name="checkmark-circle-outline";
        document.querySelector('#validText').innerHTML="Your Password Is Valid";
        document.querySelector('.status').style.color="#008f00";
        document.querySelector('.status').style.backgroundColor="#91ffa0c2";
        document.querySelector('.status').style.borderColor="#1fa02a";
    }
    else
    {
        document.querySelector('#valid').name="close-circle-outline";
        document.querySelector('#validText').innerHTML="Your Password Is Not Valid";
        document.querySelector('.status').style.color="#8f0000";
        document.querySelector('.status').style.backgroundColor="#ff9191c2";
        document.querySelector('.status').style.borderColor="#a01f1f";
    }


//Function Closing Bracket
});
