var chai=require('chai')
var axios=require('axios');
var assert=chai.assert;

  
     
     describe('Test create Pass',function(){
        it('Verify the request have values', async function(){ 
            var result=await axios.post('http://localhost:3000/api',{
                name:"Prueba",
                area:50,
                location:"c"
            
            }).then(result=>{
                assert.equal(result.data.msg,'add Location')
               
            }).catch(err=>{
                console.log(err);
            })
            
         })
    })  
    
      describe('Test find Pass',function(){
        it('Verify have data', async function(){ 
            var result=await axios.get('http://localhost:3000/api').then(result=>{
                
                var state=false
                if(result.length>0){
                   state=true
               } 
               assert.equal(state,true)
            }).catch(err=>{
                console.log(err);
            })
            
            
         })
    }) 
    
    describe('Test create Fail',function(){
        it('Verify the request have values', async function(){
              var result=await axios.post('http://localhost:3000/api').then(result=>{
                  
              }).catch(err=>{
                  console.log('ere');
                  var state=true;
                  assert.equal(state,true)
              })
              
              
          })
      })

