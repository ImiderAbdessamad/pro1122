package ma.zs.zyn.unit.dao.facade.core.support;

import ma.zs.zyn.bean.core.support.CustumorSupportConversationMessage;
import ma.zs.zyn.dao.facade.core.support.CustumorSupportConversationMessageDao;

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

import ma.zs.zyn.bean.core.support.CustumorSupportConversation ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class CustumorSupportConversationMessageDaoTest {

@Autowired
    private CustumorSupportConversationMessageDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        CustumorSupportConversationMessage entity = new CustumorSupportConversationMessage();
        entity.setId(id);
        underTest.save(entity);
        CustumorSupportConversationMessage loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        CustumorSupportConversationMessage entity = new CustumorSupportConversationMessage();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        CustumorSupportConversationMessage loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<CustumorSupportConversationMessage> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<CustumorSupportConversationMessage> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        CustumorSupportConversationMessage given = constructSample(1);
        CustumorSupportConversationMessage saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private CustumorSupportConversationMessage constructSample(int i) {
		CustumorSupportConversationMessage given = new CustumorSupportConversationMessage();
        given.setContent("content-"+i);
        given.setCollaborator(false);
        given.setCreationDate(LocalDateTime.now());
        given.setCustumorSupportConversation(new CustumorSupportConversation(1L));
        return given;
    }

}
