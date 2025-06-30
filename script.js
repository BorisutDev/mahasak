        function showSection(id) {
            const sections = document.querySelectorAll('section');
            sections.forEach(sec => sec.classList.remove('visible'));
            document.getElementById(id).classList.add('visible');
        }

        function toggleImage(div) {
            const img = div.querySelector('img');

            // เก็บรูปเดิมครั้งแรก (หากยังไม่มี)
            if (!img.getAttribute('data-original')) {
                img.setAttribute('data-original', img.src);
            }

            const original = img.getAttribute('data-original');
            const after = img.getAttribute('data-after');
            const current = img.src;

            // สลับไปมาระหว่าง original และ after
            img.src = (current === original) ? after : original;
        }


        // เริ่มต้นแสดงหมวด A
        document.addEventListener('DOMContentLoaded', () => {
            showSection('A');
        });