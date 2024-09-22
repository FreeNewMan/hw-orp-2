export default function attackList(obj){
  let result = []; 
 
  obj.special.forEach(elem => {
    const {id, name, icon, description = 'Описание недоступно' } = elem;
    result.push({ id, name, description, icon });
  });

  console.log(result);
 return result;
}
