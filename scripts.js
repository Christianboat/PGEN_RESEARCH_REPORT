
// Gender distribution pie
new Chart(document.getElementById('genderChart'),{
    type:'pie',
    data:{labels:['Female','Male'],datasets:[{data:[70,34],backgroundColor:['#f59e0b','#06b6d4']}]},
    options:{plugins:{legend:{labels:{color:'white'}}}}
});

// Academic performance bar
new Chart(document.getElementById('performanceChart'),{
    type:'bar',
    data:{labels:['Excellent','Very Good','Good','Satisfactory'],datasets:[{data:[65,20,17,2],backgroundColor:['#f59e0b','#06b6d4','#10b981','#ef4444']}]},
    options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:'white'}},y:{ticks:{color:'white'}}}}
});

// Career chart horizontal bar
new Chart(document.getElementById('careerChart'),{
    type:'bar',
    data:{labels:['Medicine/Health','Education/Teaching','Engineering/Technology','Arts/Creative','Business/Entrepreneurship'],datasets:[{data:[53,19,17,8,4],backgroundColor:['#f59e0b','#06b6d4','#10b981','#a78bfa','#fb7185']}]},
    options:{indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{ticks:{color:'white'}},y:{ticks:{color:'white'}}}}
});

// Skills chart horizontal bar
new Chart(document.getElementById('skillsChart'),{
    type:'bar',
    data:{labels:['Public Speaking','Digital Skills','Leadership','Problem-Solving','Teamwork'],datasets:[{data:[39,26,16,13,9],backgroundColor:['#f59e0b','#06b6d4','#34d399','#60a5fa','#a78bfa']}]},
    options:{indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{ticks:{color:'white'}},y:{ticks:{color:'white'}}}}
});

// Alignment chart
new Chart(document.getElementById('alignmentChart'),{
    type:'doughnut',
    data:{labels:['Aligned','Misaligned'],datasets:[{data:[44,60],backgroundColor:['#10b981','#ef4444']}]},
    options:{plugins:{legend:{labels:{color:'white'}}}}
});

// accordion toggle
document.querySelectorAll('.acc-head').forEach(h=>{
    h.addEventListener('click',()=>{
    const body = h.nextElementSibling;
    body.style.display = body.style.display === 'block' ? 'none' : 'block';
    })
})

// print
document.getElementById('printBtn').addEventListener('click',()=>window.print());

// download CSV summary
document.getElementById('downloadBtn').addEventListener('click',()=>{
    const csvHeader = ['Metric','Value'];
    const rows = [
    ['Total',104],['Female',70],['Male',34],['Medicine/Health',53],['Education/Teaching',19],['Engineering/Technology',17],['Public Speaking',39],['Digital/Computer Skills',26],['Alignment','42% aligned']
    ];
    const csv = [csvHeader.join(','), ...rows.map(r=>r.join(','))].join('\n');
    const blob = new Blob([csv],{type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download='PGEN_summary.csv'; a.click(); URL.revokeObjectURL(url);
});

