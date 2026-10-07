<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;mycophenolic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MycophenolicAcid_Wei2022_reference&quot;,&quot;label&quot;:&quot;Wei_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# mycophenolic acid

- **generic name:** mycophenolic acid
- **ATC codes:** `L04AA06`
- **DrugBank:** [DB01024](https://go.drugbank.com/drugs/DB01024) · **PubChem:** [CID 446541](https://pubchem.ncbi.nlm.nih.gov/compound/446541)
- **molar mass:** 320.3371 g/mol (C17H20O6) — DrugBank
- **groups:** approved, investigational

## About

Mycophenolic acid is an immunosuppressant used to prevent organ transplant rejection and, according to Wikidata, also to treat lupus nephritis. It is an approved medicine, widely used in transplant medicine, and has also been studied for other investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420553](https://www.wikidata.org/wiki/Q420553) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mycophenolic acid (mycophenolic_acid) | parent | 320.337 | C17H20O6 | DrugBank | [446541](https://pubchem.ncbi.nlm.nih.gov/compound/446541) | Heida_2024, Kauv_2025, Wei_2022 |
| mycophenolate mofetil | metabolite | 433.501 | C23H31NO7 | PubChem | [5281078](https://pubchem.ncbi.nlm.nih.gov/compound/5281078) | Wei_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:37 | 1:42 | 2/0/1 | 1/0/1 | 0/0/0 | 165,869/9,467 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Heida_2024_reference](drugs/drug_mycophenolic_acid/MycophenolicAcid_Heida2024_reference.md) | held back | 2-compartment, oral | 3 (+1 cov.) | Heida A et al., Model-informed dose optimization of myc…, European journal of clinica… (2024) | [10.1007/s00228-024-03743-0](https://doi.org/10.1007/s00228-024-03743-0) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wei_2022_reference](drugs/drug_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Wei Y et al., Population pharmacokinetics of mycophen…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1002628](https://doi.org/10.3389/fphar.2022.1002628) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Kauv_2025_reference](drugs/drug_mycophenolic_acid/MycophenolicAcid_Kauv2025_reference.md) | — | 1-compartment (no model) | 3 | Kauv J et al., Population pharmacokinetics of mycophen…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107290](https://doi.org/10.1016/j.ejps.2025.107290) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tang_2017_IMPDH](drugs/drug_mycophenolic_acid/pd_Tang_2017_IMPDH.md) | IMPDH activity ← mycophenolic acid · direct Emax (saturable) effect | — | Tang JT et al., The pharmacokinetics and pharmacodynami…, British journal of clinical… (2017) | [10.1111/bcp.13154](https://doi.org/10.1111/bcp.13154) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hale_1998_rejection](drugs/drug_mycophenolic_acid/pd_Hale_1998_rejection.md) | likelihood of rejection ← mycophenolic acid · categorical (graded) response model | — | Hale MD et al., The pharmacokinetic-pharmacodynamic rel…, Clinical pharmacology and t… (1998) | [10.1016/S0009-9236(98)90058-3](https://doi.org/10.1016/S0009-9236(98)90058-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mycophenolic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` substrate, `UGT1A6` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` substrate, `UGT1A6` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IMPDH1 (inhibitor), IMPDH2 (inhibitor), UGT1A10 (substrate), UGT1A7 (substrate), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 166 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Deng_2025.pdf` | Deng K et al., Population Pharmacokinetics and Limited…, Clinical transplantation (2025) | popPK | 10 | [10.1111/ctr.70275](https://doi.org/10.1111/ctr.70275) | [40802254](https://pubmed.ncbi.nlm.nih.gov/40802254) | The study is a population PK analysis of mycophenolic acid, but the specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided abstract evidence. |
| `Han_2025.pdf` | Han LY et al., Applying exposure-response analysis to…, European journal of pharmac… (2025) | popPK | 9 | [10.1016/j.ejps.2025.107146](https://doi.org/10.1016/j.ejps.2025.107146) | [40447059](https://pubmed.ncbi.nlm.nih.gov/40447059) | The paper describes a population PK model for mycophenolic acid in humans, but specific parameter estimates (CL, V, etc.) are not present in the provided abstract/evidence. |
| `Tang_2017.pdf` | Tang JT et al., The pharmacokinetics and pharmacodynami…, British journal of clinical… (2017) | popPK | 9 | [10.1111/bcp.13154](https://doi.org/10.1111/bcp.13154) | [27753146](https://pubmed.ncbi.nlm.nih.gov/27753146) | The study reports the pharmacokinetics of mycophenolic acid, but the provided evidence contains only qualitative statements and summary metrics (AUC differences) without specific numeric parameter values like clearance or half-life. |

<sub>queue written 2026-10-07T00:36:02.916887+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd_2013 | irrelevant | 3 | 2 | This is a review article that summarizes existing literature without presenting original primary data or specific parameter estimates from a single cohort, although it mentions typical ranges from other studies. |
| popPK | Balevic_2023 | irrelevant | 1 | 0 | The study focuses on exposure-response (pharmacodynamic) analysis and efficacy extrapolation, not on the estimation of population pharmacokinetic parameters (CL, V, ka, etc.) for mycophenolic acid. |
| popPK | Chen_2020 | relevant | 7 | 3 | The study reports exposure-response modeling and AUC/Ctrough statistics for mycophenolic acid, but it uses Bayesian estimation from a prior model rather than reporting new structural PK parameter estimates (CL, V, Q, ka) directly in the text. |
| popPK | Deng_2025 | relevant | 10 | 2 | The study is a population PK analysis of mycophenolic acid, but the specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided abstract evidence. |
| popPK | Dong_2014 | irrelevant | 2 | 0 | The paper is a review summarizing recent progress in pharmacometrics for MPA and does not report original quantitative PK parameter values or specific model results in the provided evidence. |
| popPK | Fang_2023 | irrelevant | 0 | 0 | This is a medicinal chemistry and fungicidal bioassay study regarding synthetic derivatives of mycophenolic acid, not a pharmacokinetic study of the drug itself. |
| popPK | Golubovic_2016 | irrelevant | 1 | 0 | The paper is explicitly described as a review of available models and does not present original quantitative parameter values for mycophenolic acid. |
| popPK | Hale_1998 | irrelevant | 4 | 0 | The study reports pharmacokinetic-pharmacodynamic (PK-PD) relationships and AUC targets for mycophenolic acid but does not report specific population pharmacokinetic parameters (CL, V, Q, ka) or a compartmental PK model. |
| popPK | Han_2025 | relevant | 9 | 1 | The paper describes a population PK model for mycophenolic acid in humans, but specific parameter estimates (CL, V, etc.) are not present in the provided abstract/evidence. |
| popPK | Kiang_2018 | irrelevant | 2 | 0 | The text is a review summarizing trends in population PK modeling without providing original quantitative parameter values. |
| popPK | Rong_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of UGT enzymes metabolizing p-cresol, where mycophenolic acid serves only as a probe substrate for UGT1A9 activity rather than the subject drug for pharmacokinetic parameter estimation. |
| popPK | Rong_2021 | irrelevant | 2 | 0 | The paper is a narrative review summarizing 11 separate studies and does not report original quantitative population PK parameter values for mycophenolic acid. |
| popPK | Shaw_2001 | irrelevant | 3 | 0 | The text is a review discussing the rationale for therapeutic drug monitoring and cites qualitative findings (e.g., "10-fold variation") but does not provide specific quantitative PK parameter values (CL, V, ka, etc.) for extraction. |
| popPK | Tang_2017 | relevant | 9 | 2 | The study reports the pharmacokinetics of mycophenolic acid, but the provided evidence contains only qualitative statements and summary metrics (AUC differences) without specific numeric parameter values like clearance or half-life. |
| popPK | Thi_2015 | irrelevant | 2 | 0 | The study is primarily pharmacodynamic (IMPDH inhibition) and reports no quantitative compartmental PK parameters (CL, V, Q, ka) for mycophenolic acid, with any numeric values likely residing in unprovided figures or tables. |
| popPK | Xu_2017 | irrelevant | 0 | 0 | The paper is a natural product isolation and structure elucidation study (NMR/ECD) with no pharmacokinetic data for mycophenolic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:36 UTC</sub>
