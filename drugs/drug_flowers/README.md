<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V01A&quot;,&quot;href&quot;:&quot;atc/V01A.md&quot;},{&quot;label&quot;:&quot;flowers&quot;}]"></div>

# flowers

- **generic name:** flowers
- **ATC codes:** `V01AA10`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Flower allergen extracts are used in allergy immunotherapy to desensitise people with allergies to pollen. They are classified as allergen preparations and are used in allergy diagnosis and treatment, generally under specialist supervision.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:14 | 1:48 | 0/0/0 | 2/0/0 | 0/0/0 | 130,844/2,741 | ollama / glm-5.3-flash | 10 | 0/10 | 10/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Risener_2023_CC50](drugs/drug_flowers/pd_Risener_2023_CC50.md) | Cell viability / cytotoxicity (HEK-293T-hACE2, PBM, Vero cells) ← Solidago altissima flowers extract (extract 1428) · direct sigmoid Emax (Hill) effect | — | Risener CJ et al., Botanical inhibitors of SARS-CoV-2 vira…, Scientific reports (2023) | [10.1038/s41598-023-28303-x](https://doi.org/10.1038/s41598-023-28303-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Risener_2023_RNA_copy_number](drugs/drug_flowers/pd_Risener_2023_RNA_copy_number.md) | SARS-CoV-2 RNA copy number in supernatant (infectious virus yield reduction, Vero cells) ← Solidago altissima flowers extract (extract 1428) · direct sigmoid Emax (Hill) effect | — | Risener CJ et al., Botanical inhibitors of SARS-CoV-2 vira…, Scientific reports (2023) | [10.1038/s41598-023-28303-x](https://doi.org/10.1038/s41598-023-28303-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Risener_2023_inhibition](drugs/drug_flowers/pd_Risener_2023_inhibition.md) | SARS-CoV-2 pseudotyped viral entry inhibition (wild-type and variants) ← Solidago altissima flowers extract (extract 1428) · direct sigmoid Emax (Hill) effect | — | Risener CJ et al., Botanical inhibitors of SARS-CoV-2 vira…, Scientific reports (2023) | [10.1038/s41598-023-28303-x](https://doi.org/10.1038/s41598-023-28303-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Torres-Ortiz_2020_vasorelaxation_of_isolated_rat_aortic_rings](drugs/drug_flowers/pd_Torres_Ortiz_2020_vasorelaxation_of_isolated_rat_aortic_ring.md) | vasorelaxation of isolated rat aortic rings ← methanol extract of Crataegus gracilior flowers · direct Emax (saturable) effect | — | Torres-Ortiz DA et al., Vasorelaxing effect and possible chemic…, Natural product research (2020) | [10.1080/14786419.2019.1577833](https://doi.org/10.1080/14786419.2019.1577833) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 93 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barceló_2024 | irrelevant | 0 | 0 | This is an entomology study of mosquito oviposition behavior; "flowers" refers to plant flowering, not a drug, and no pharmacokinetic parameters exist. |
| popPK | Behbahani_2014 | irrelevant | 0 | 0 | In-vitro anti-HIV activity study of honey constituents; no PK disposition parameters (CL, V, half-life) for flowers are reported anywhere. |
| popPK | Braguini_2019 | irrelevant | 0 | 0 | Toxicity study of lavender extracts with no pharmacokinetic disposition parameters (CL, V, half-life, or PK model) for flowers. |
| popPK | Buck_2019 | irrelevant | 0 | 0 | This is an education study on students' plant identification knowledge, not a pharmacokinetic study of any drug. |
| popPK | Esterio_2020 | irrelevant | 0 | 0 | This is a plant pathology study of Botrytis species in grape flowers, not a pharmacokinetic study of a drug called flowers. |
| popPK | Gautam_2020 | irrelevant | 0 | 0 | In-vitro phytochemical/antioxidant/antimutagenic study of Rhododendron extracts with no PK parameters for flowers. |
| popPK | Gelain_2023 | irrelevant | 0 | 0 | This is a plant pathology/fungicide sensitivity study; "flowers" refers to apple flower tissue as inoculum source, not the drug flowers, and no PK parameters are reported. |
| popPK | Hanson_1975 | irrelevant | 0 | 0 | This is a plant physiology study of ethylene effects on morning glory flower tissue, not a pharmacokinetic study of a drug. |
| popPK | Kiełtyk_2024 | irrelevant | 0 | 0 | This is a plant ecology study of Soldanella carpatica morphology along an elevation gradient, with no pharmacokinetic parameters for any drug. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | This is a horticultural study of vase life in cut lisianthus flowers with no pharmacokinetic parameters for any drug. |
| popPK | Nieuwland_2016 | irrelevant | 0 | 0 | This is an ERP psycholinguistics study; "flowers" appears only as a word in example sentences, with no pharmacokinetic data. |
| popPK | Nyayiru_2020 | irrelevant | 0 | 0 | This is a phytochemistry/antioxidant study of coconut cotyledon with no pharmacokinetic parameters for any drug. |
| popPK | Risener_2023 | irrelevant | 0 | 0 | In vitro antiviral screening of botanical extracts with no pharmacokinetic disposition parameters for any drug; "flowers" refers to plant tissue, not a drug. |
| popPK | Roemmich_2025 | irrelevant | 0 | 0 | This is a behavioral nutrition RCT protocol; flowers appear only as sham-training control images, with no pharmacokinetic data. |
| popPK | Tanaka_2024 | irrelevant | 0 | 0 | Natural-product chemistry study of Hypericum flowers with no pharmacokinetic parameters for any drug. |
| popPK | Torres-Ortiz_2020 | irrelevant | 0 | 0 | In-vitro pharmacology (vasorelaxation) of a plant extract with no PK parameters for flowers. |
| popPK | Wix_2019 | irrelevant | 0 | 0 | This is an ecology study of butterflies in flower strips; no pharmacokinetic parameters for any drug are reported. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | This is a fungicide synthesis/SAR paper; "flowers" refers to tomato plant tissue, not a drug subject, and no PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
