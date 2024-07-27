package ma.zs.zyn.unit.dao.facade.core.packaging;

import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup;
import ma.zs.zyn.dao.facade.core.packaging.PackagingDetailGroupDao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.BeforeEach;

import java.math.BigDecimal;
import java.util.List;

import java.util.stream.Collectors;
import java.util.stream.LongStream;
import java.util.stream.IntStream;
import java.time.LocalDateTime;


import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class PackagingDetailGroupDaoTest {

@Autowired
    private PackagingDetailGroupDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        PackagingDetailGroup entity = new PackagingDetailGroup();
        entity.setCode(code);
        underTest.save(entity);
        PackagingDetailGroup loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        PackagingDetailGroup loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        PackagingDetailGroup entity = new PackagingDetailGroup();
        entity.setId(id);
        underTest.save(entity);
        PackagingDetailGroup loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        PackagingDetailGroup entity = new PackagingDetailGroup();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        PackagingDetailGroup loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<PackagingDetailGroup> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<PackagingDetailGroup> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        PackagingDetailGroup given = constructSample(1);
        PackagingDetailGroup saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private PackagingDetailGroup constructSample(int i) {
		PackagingDetailGroup given = new PackagingDetailGroup();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        given.setSeeMore(false);
        return given;
    }

}
