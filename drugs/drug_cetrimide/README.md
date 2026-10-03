<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;cetrimide&quot;}]"></div>

# cetrimide

- **generic name:** cetrimide
- **ATC codes:** `D08AJ04`, `D11AC01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 18:03 | 0:42 | 0/0/0 | 1/0/0 | 0/0/0 | 1,738/112 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/4 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdelaziz_2022_MCF_7_cell_viability_MTT](drugs/drug_cetrimide/pd_Abdelaziz_2022_MCF_7_cell_viability_MTT.md) | MCF-7 cell viability (MTT) ← pyocyanin · direct Emax (saturable) effect | — | Abdelaziz AA et al., A purified and lyophilized Pseudomonas…, Microbial cell factories (2022) | [10.1186/s12934-022-01988-x](https://doi.org/10.1186/s12934-022-01988-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdelaziz_2022_apoptotic_necrotic_cell_fraction_flow_cytometry](drugs/drug_cetrimide/pd_Abdelaziz_2022_apoptotic_necrotic_cell_fraction_flow_cytomet.md) | apoptotic/necrotic cell fraction (flow cytometry) ← pyocyanin · direct Emax (saturable) effect | — | Abdelaziz AA et al., A purified and lyophilized Pseudomonas…, Microbial cell factories (2022) | [10.1186/s12934-022-01988-x](https://doi.org/10.1186/s12934-022-01988-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdelaziz_2022_caspase_3_protein_level](drugs/drug_cetrimide/pd_Abdelaziz_2022_caspase_3_protein_level.md) | caspase-3 protein level ← pyocyanin · direct Emax (saturable) effect | — | Abdelaziz AA et al., A purified and lyophilized Pseudomonas…, Microbial cell factories (2022) | [10.1186/s12934-022-01988-x](https://doi.org/10.1186/s12934-022-01988-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdelaziz_2022_fold_change](drugs/drug_cetrimide/pd_Abdelaziz_2022_fold_change.md) | fold change ← pyocyanin · direct Emax (saturable) effect | — | Abdelaziz AA et al., A purified and lyophilized Pseudomonas…, Microbial cell factories (2022) | [10.1186/s12934-022-01988-x](https://doi.org/10.1186/s12934-022-01988-x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd-AlGhafar_2026 | irrelevant | 0 | 0 | The paper is an analytical chemistry study on caffeic acid and curcumin, where cetrimide is only mentioned as a surfactant excipient, and no pharmacokinetic parameters for cetrimide are reported. |
| PD | Abd-AlGhafar_2026 | not_relevant | 0 | 0 | The paper describes a spectrofluorimetric analytical method for caffeic acid and curcumin; cetrimide is only listed as a reagent/surfactant, and no pharmacodynamic or exposure-response data are reported. |
| popPK | Abdelaziz_2022 | irrelevant | 0 | 0 | The paper studies the anticancer activity of pyocyanin, using cetrimide only as a component of the growth medium for P. aeruginosa, and contains no pharmacokinetic data for cetrimide. |
| popPK | Aguirre_2009 | irrelevant | 0 | 0 | The paper uses cetrimide as a reagent for polysaccharide extraction and does not report any pharmacokinetic parameters for cetrimide. |
| PD | Aguirre_2009 | not_relevant | 0 | 0 | The paper uses cetrimide as a chemical reagent for polysaccharide extraction, not as a drug, and reports no pharmacodynamic or exposure-response relationship for cetrimide. |
| popPK | El-Zahed_2026 | irrelevant | 0 | 0 | The paper is a materials science study on zinc oxide nanocomposites against P. aeruginosa, where cetrimide is only mentioned as a component of an agar plate for bacterial isolation, not as a subject drug for pharmacokinetic analysis. |
| PD | El-Zahed_2026 | not_relevant | 0 | 0 | The paper studies a zinc oxide/chitosan/amoxicillin nanocomposite, not the drug cetrimide, and reports no cetrimide pharmacodynamic data. |
| popPK | Leung_1975 | irrelevant | 0 | 0 | The paper is an in-vitro cytotoxicity study where cetrimide is used only as a reagent in a cell counting method, not as the subject drug for pharmacokinetic analysis. |
| popPK | Majtán_1999 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial efficacy study on bacteria, not a pharmacokinetic study, and reports no disposition parameters for cetrimide. |
| popPK | Majtán_2003 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial study of disinfectants on bacteria, not a pharmacokinetic study of cetrimide in humans or animals. |
| popPK | Maris_1991 | irrelevant | 0 | 0 | The paper is a microbiological study on bacterial resistance to cetrimide, not a pharmacokinetic study. |
| PD | Maris_1991 | not_relevant | 1 | 0 | The paper reports MIC distributions and resistance correlations for bacterial strains, which is antimicrobial susceptibility testing, not a pharmacodynamic exposure-response or dose-response analysis of drug effect in a biological system with derivable PD parameters. |
| popPK | Ravinanthanan_2018 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity evaluation of dental irrigants and does not report any pharmacokinetic parameters for cetrimide. |
| PD | Ravinanthanan_2018 | not_relevant | 0 | 0 | The study reports qualitative cytotoxicity comparisons of fixed combination regimens, not a concentration- or dose-response relationship for cetrimide with numeric PD parameters. |
| popPK | Zborowsky_2025 | irrelevant | 0 | 0 | The paper studies bacteriophage therapy for P. aeruginosa pneumonia and does not involve the drug cetrimide. |
| PD | Zborowsky_2025 | not_relevant | 0 | 0 | The paper focuses on bacteriophage therapy and immune dynamics; cetrimide is mentioned only as a component of the agar used for plating bacteria, with no pharmacodynamic or exposure-response analysis performed for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
