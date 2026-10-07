<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ramucirumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ramucirumab_Marachelian2016_reference&quot;,&quot;label&quot;:&quot;Marachelian_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ramucirumab/Ramucirumab_Marachelian2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ramucirumab_OBrien2017_reference&quot;,&quot;label&quot;:&quot;OBrien_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ramucirumab/Ramucirumab_OBrien2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ramucirumab

- **generic name:** ramucirumab
- **ATC codes:** `L01FG02`
- **DrugBank:** [DB05578](https://go.drugbank.com/drugs/DB05578) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ramucirumab is a monoclonal antibody used as an anticancer treatment for tumours such as gastric, lung, and colon cancer. It is an approved medicine, with products authorised in the European Union, and is used in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7290345](https://www.wikidata.org/wiki/Q7290345) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:28 | 6:41 | 2/0/1 | 0/0/0 | 0/0/0 | 196,198/10,179 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 1/8 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Marachelian_2016_reference](drugs/drug_ramucirumab/Ramucirumab_Marachelian2016_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Marachelian A et al., Comparative pharmacokinetics, safety, a…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-015-2955-9](https://doi.org/10.1007/s00280-015-2955-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [OBrien_2017_reference](drugs/drug_ramucirumab/Ramucirumab_OBrien2017_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+2 cov.) | O'Brien L et al., Population pharmacokinetic meta-analysi…, British journal of clinical… (2017) | [10.1111/bcp.13403](https://doi.org/10.1111/bcp.13403) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Kaneko_2023_reference](drugs/drug_ramucirumab/Ramucirumab_Kaneko2023_reference.md) | — | 1-compartment (no model) | 2 | Kaneko T et al., Effect of massive ascites on ramuciruma…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04568-x](https://doi.org/10.1007/s00280-023-04568-x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ramucirumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: KDR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 16 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kaneko_2023.pdf` | Kaneko T et al., Effect of massive ascites on ramuciruma…, Cancer chemotherapy and pha… (2023) | popPK | 10 | [10.1007/s00280-023-04568-x](https://doi.org/10.1007/s00280-023-04568-x) | [37458784](https://pubmed.ncbi.nlm.nih.gov/37458784) | The study is a population pharmacokinetic analysis of ramucirumab in humans and reports specific numeric values for clearance (L/h) and trough concentrations (μg/mL) in the abstract. |
| `Tabernero_2017.pdf` | Tabernero J et al., Exposure-Response Analyses of Ramucirum…, Molecular cancer therapeuti… (2017) | popPK | 8 | [10.1158/1535-7163.MCT-16-0895](https://doi.org/10.1158/1535-7163.MCT-16-0895) | [28716815](https://pubmed.ncbi.nlm.nih.gov/28716815) | The paper describes a population pharmacokinetic analysis and exposure-response relationships for ramucirumab, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-07T19:23:56.925304+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arnold_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis of safety and adverse events, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Cohn_2017 | irrelevant | 4 | 0 | The paper describes a population PK model and exposure-response analysis but does not report specific quantitative disposition parameters (CL, V, Q, ka) in the provided text, referring instead to predicted Cmin,ss quartiles and supplementary material. |
| popPK | Gao_2021 | relevant | 9 | 2 | The paper describes a population PK model for ramucirumab, but the specific numeric parameter values (CL, V, etc.) are explicitly stated to be in the online Supplementary Material (Table S1) which is not provided in the evidence. |
| popPK | Kim_2018 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses population PK predictions (Cmin,ss) but does not report the underlying quantitative PK parameters (CL, V, Q, ka) or the PK model structure itself. |
| popPK | Marachelian_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ch14.18 (dinutuximab), not ramucirumab. |
| popPK | Nakagawa_2022 | relevant | 8 | 2 | The paper describes a population PK model for ramucirumab and reports exposure metrics (Cmin quartiles, steady-state concentrations), but the specific numeric values for the model parameters (CL, V1, V2, Q) are not provided in the text, likely residing in the referenced supplementary material or previous publications. |
| popPK | Pilbeam_2024 | irrelevant | 2 | 0 | The study reports only a single concentration metric (Cmin) for dose selection and does not provide quantitative disposition parameters (CL, V, t1/2) or a population PK model. |
| popPK | Saleh_1992 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the monoclonal antibody ch14.18, not ramucirumab. |
| popPK | Smit_2018 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses predicted PK values (Cmin, Cave) for efficacy/safety correlation but does not report the underlying quantitative PK model parameters (CL, V, etc.) in the provided text. |
| popPK | Tabernero_2017 | relevant | 8 | 0 | The paper describes a population pharmacokinetic analysis and exposure-response relationships for ramucirumab, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Yen_2018 | irrelevant | 0 | 0 | The paper is a safety meta-analysis reporting adverse event rates and relative risks, containing no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | de_2022 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses a pre-existing population PK model but does not report the quantitative PK parameter values (CL, V, Q, etc.) for ramucirumab in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:24 UTC</sub>
