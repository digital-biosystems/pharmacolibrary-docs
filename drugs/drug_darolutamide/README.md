<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;darolutamide&quot;}]"></div>

# darolutamide

- **generic name:** darolutamide
- **ATC codes:** `L02BB06`
- **DrugBank:** [DB12941](https://go.drugbank.com/drugs/DB12941) · **PubChem:** [CID 67171867](https://pubchem.ncbi.nlm.nih.gov/compound/67171867)
- **molar mass:** 398.85 g/mol (C19H19ClN6O2) — DrugBank
- **groups:** approved, investigational

## About

Darolutamide is an anti-androgen cancer medicine used to treat prostate cancer that no longer responds to hormone therapy. It is approved and authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25091391](https://www.wikidata.org/wiki/Q25091391) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:18 | 5:17 | 0/0/0 | 0/0/0 | 0/0/0 | 108,022/1,330 | einfracz / qwen3.8-27b | 13 | 3/5 | 13/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=darolutamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` unknown | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A9` unknown | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: PGR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 34 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bolek_2024 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and efficacy of androgen receptor pathway inhibitors but does not report pharmacogenomic effects of gene variants on PK/PD parameters for darolutamide. |
| PGx | Buchler_2025 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between relugolix and other drugs, not the pharmacogenomic (gene variant) effects on darolutamide's PK or PD parameters. |
| popPK | Carrot_2024 | irrelevant | 0 | 0 | The study models PSA kinetics in prostate cancer patients and mentions darolutamide only as a context in a different trial (ARASENS), providing no PK parameters for darolutamide. |
| PGx | Duong_2026 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between antiandrogens and anticoagulants, not pharmacogenomic effects of gene variants on darolutamide's PK/PD. |
| PGx | Lipp_2026 | not_relevant | 0 | 0 | The text discusses drug-drug interactions via CYP enzymes and transporters (like BCRP) for darolutamide, not the influence of a gene variant/genotype on its PK/PD parameters. |
| popPK | Myint_2020 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis of fall and fracture risks, reporting no pharmacokinetic parameters for darolutamide. |
| popPK | Rathkopf_2025 | irrelevant | 0 | 0 | The study focuses on the safety and clinical efficacy of BMS-986365, not the pharmacokinetic parameters of darolutamide. |
| popPK | Shore_2019 | relevant | 8 | 1 | The paper describes a population pharmacokinetic analysis of darolutamide, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, with details and results deferred to the Electronic Supplementary Material. |
| PGx | Sutaria_2022 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (DAR/DDI) between ipatasertib and darolutamide, not a pharmacogenomic effect (gene variant) on pharmacokinetics or pharmacodynamics. |
| PGx | Taavitsainen_2021 | not_relevant | 0 | 0 | The paper describes general metabolism and mass balance in healthy volunteers without analyzing specific genetic variants or their impact on PK/PD parameters. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper is a computational study on drug-food interaction prediction and mentions darolutamide only as an example in a dataset description, containing no pharmacokinetic data. |
| PGx | Xiao_2024 | not_relevant | 0 | 0 | The study focuses on the drug-drug interaction potential of darolutamide as a UGT inhibitor, not on the impact of genetic variants on its pharmacokinetics or pharmacodynamics. |
| PGx | Zurth_2019 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (DDI) involving CYP and transporters, not pharmacogenomic effects of genetic variants. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
