package ma.zs.zyn.unit.dao.facade.core.packaging;

import ma.zs.zyn.bean.core.packaging.PackagingDetail;
import ma.zs.zyn.dao.facade.core.packaging.PackagingDetailDao;

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

import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup ;
import ma.zs.zyn.bean.core.packaging.Packaging ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class PackagingDetailDaoTest {

@Autowired
    private PackagingDetailDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        PackagingDetail entity = new PackagingDetail();
        entity.setId(id);
        underTest.save(entity);
        PackagingDetail loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        PackagingDetail entity = new PackagingDetail();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        PackagingDetail loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<PackagingDetail> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<PackagingDetail> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        PackagingDetail given = constructSample(1);
        PackagingDetail saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private PackagingDetail constructSample(int i) {
		PackagingDetail given = new PackagingDetail();
        given.setPackaging(new Packaging(1L));
        given.setName("name-"+i);
        given.setExist(false);
        given.setDescription("description-"+i);
        given.setPackagingDetailGroup(new PackagingDetailGroup(1L));
        return given;
    }

}
