<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G01A&quot;,&quot;href&quot;:&quot;atc/G01A.md&quot;},{&quot;label&quot;:&quot;azanidazole&quot;}]"></div>

# azanidazole

- **generic name:** azanidazole
- **ATC codes:** `G01AF13`, `P01AB04`
- **DrugBank:** [DB13350](https://go.drugbank.com/drugs/DB13350) · **PubChem:** not captured
- **molar mass:** 246.23 g/mol (C10H10N6O2) — DrugBank
- **groups:** experimental

## About

Azanidazole is a nitroimidazole compound classified as a gynecological antiinfective and antiprotozoal agent against amoebiasis and other protozoal diseases. It appears only as an experimental drug, with no authorisation records, so its current use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q523771](https://www.wikidata.org/wiki/Q523771) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:46 | 3:15 | 0/0/0 | 1/0/0 | 0/0/0 | 132,008/3,478 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Watson_2019_ALT](drugs/drug_azanidazole/pd_Watson_2019_ALT.md) | peak observed serum ALT ← M2 · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/aac.02515-18](https://doi.org/10.1128/aac.02515-18) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Watson_2019_ALT_2](drugs/drug_azanidazole/pd_Watson_2019_ALT_2.md) | maximum observed relative percent increase in ALT ← M2 · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/aac.02515-18](https://doi.org/10.1128/aac.02515-18) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Watson_2019_AST](drugs/drug_azanidazole/pd_Watson_2019_AST.md) | peak observed serum AST ← M2 · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/aac.02515-18](https://doi.org/10.1128/aac.02515-18) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Watson_2019_AST_2](drugs/drug_azanidazole/pd_Watson_2019_AST_2.md) | maximum observed relative percent increase in AST ← M2 · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/aac.02515-18](https://doi.org/10.1128/aac.02515-18) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Watson_2019_neutrophils](drugs/drug_azanidazole/pd_Watson_2019_neutrophils.md) | nadir observed blood neutrophil counts ← M2 · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/aac.02515-18](https://doi.org/10.1128/aac.02515-18) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Watson_2019_neutrophils_2](drugs/drug_azanidazole/pd_Watson_2019_neutrophils_2.md) | maximum observed relative percent decrease in neutrophil counts ← M2 · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/aac.02515-18](https://doi.org/10.1128/aac.02515-18) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Watson_2019_platelets](drugs/drug_azanidazole/pd_Watson_2019_platelets.md) | nadir observed platelet counts ← M2 · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/aac.02515-18](https://doi.org/10.1128/aac.02515-18) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Watson_2019_platelets_2](drugs/drug_azanidazole/pd_Watson_2019_platelets_2.md) | maximum observed relative percent decrease in platelet counts ← M2 · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/aac.02515-18](https://doi.org/10.1128/aac.02515-18) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kang_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for morinidazole, not azanidazole. |
| popPK | Nicco_2025 | irrelevant | 0 | 0 | The study evaluates acoziborole for human African trypanosomiasis, not azanidazole, and contains no pharmacokinetic parameters for azanidazole. |
| popPK | Pedron_2020 | irrelevant | 0 | 0 | The paper studies new 8-nitroquinolinone derivatives for antiparasitic use, not the drug azanidazole. |
| popPK | Torrico_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of fexinidazole, not azanidazole. |
| popPK | Tulloch_2023 | irrelevant | 0 | 0 | The paper describes an in-vitro drug resistance screening method for Leishmania parasites and does not contain any pharmacokinetic data for azanidazole. |
| popPK | Verrest_2024 | irrelevant | 0 | 0 | The paper describes a pharmacokinetic-pharmacodynamic model for Leishmania parasite dynamics using fexinidazole and miltefosine, but azanidazole is not the subject drug and no parameters for it are reported. |
| popPK | Watson_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fexinidazole (a nitroimidazole trypanocide), not azanidazole, and azanidazole is not mentioned as the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
