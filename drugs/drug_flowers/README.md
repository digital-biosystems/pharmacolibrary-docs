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
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Risener_2023_CC50](drugs/drug_flowers/pd_Risener_2023_CC50.md) | Cell viability / cytotoxicity (HEK-293T-hACE2, PBM, Vero cells) ← Solidago altissima flowers extract (extract 1428) · direct sigmoid Emax (Hill) effect | — | Risener CJ et al., Botanical inhibitors of SARS-CoV-2 vira…, Scientific reports (2023) | [10.1038/s41598-023-28303-x](https://doi.org/10.1038/s41598-023-28303-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Risener_2023_RNA_copy_number](drugs/drug_flowers/pd_Risener_2023_RNA_copy_number.md) | SARS-CoV-2 RNA copy number in supernatant (infectious virus yield reduction, Vero cells) ← Solidago altissima flowers extract (extract 1428) · direct sigmoid Emax (Hill) effect | — | Risener CJ et al., Botanical inhibitors of SARS-CoV-2 vira…, Scientific reports (2023) | [10.1038/s41598-023-28303-x](https://doi.org/10.1038/s41598-023-28303-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Risener_2023_inhibition](drugs/drug_flowers/pd_Risener_2023_inhibition.md) | SARS-CoV-2 pseudotyped viral entry inhibition (wild-type and variants) ← Solidago altissima flowers extract (extract 1428) · direct sigmoid Emax (Hill) effect | — | Risener CJ et al., Botanical inhibitors of SARS-CoV-2 vira…, Scientific reports (2023) | [10.1038/s41598-023-28303-x](https://doi.org/10.1038/s41598-023-28303-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Torres-Ortiz_2020_vasorelaxation_of_isolated_rat_aortic_rings](drugs/drug_flowers/pd_Torres_Ortiz_2020_vasorelaxation_of_isolated_rat_aortic_ring.md) | vasorelaxation of isolated rat aortic rings ← methanol extract of Crataegus gracilior flowers · direct Emax (saturable) effect | — | Torres-Ortiz DA et al., Vasorelaxing effect and possible chemic…, Natural product research (2020) | [10.1080/14786419.2019.1577833](https://doi.org/10.1080/14786419.2019.1577833) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
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
