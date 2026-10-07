<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ixekizumab&quot;}]"></div>

# ixekizumab

- **generic name:** ixekizumab
- **ATC codes:** `L04AC13`
- **DrugBank:** [DB11569](https://go.drugbank.com/drugs/DB11569) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ixekizumab is a monoclonal antibody used to treat psoriasis, psoriatic arthritis, axial spondyloarthritis, and juvenile arthritis. It is an approved interleukin inhibitor authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q13574436](https://www.wikidata.org/wiki/Q13574436) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:58 | 0:49 | 0/0/0 | 0/2/1 | 0/0/0 | 60,067/2,217 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chigutsa_2018_PASI](drugs/drug_ixekizumab/pd_Chigutsa_2018_PASI.md) | Psoriasis Activity and Severity Index [PASI] scores ← ixekizumab · categorical (graded) response model | — | Chigutsa E et al., Exposure-Response Modeling to Character…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1268](https://doi.org/10.1002/jcph.1268) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chigutsa_2018_sPGA](drugs/drug_ixekizumab/pd_Chigutsa_2018_sPGA.md) | static Physician Global Assessment [sPGA] (sPGA(0,1) response) ← ixekizumab · categorical (graded) response model | — | Chigutsa E et al., Exposure-Response Modeling to Character…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1268](https://doi.org/10.1002/jcph.1268) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Liu_2026_PASI75](drugs/drug_ixekizumab/pd_Liu_2026_PASI75.md) | PASI 75 ← ixekizumab · direct sigmoid Emax (Hill) effect | — | Liu Y et al., Model-Based Meta-Analysis of IL-17 A In…, Clinical reviews in allergy… (2026) | [10.1007/s12016-025-09123-5](https://doi.org/10.1007/s12016-025-09123-5) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Liu_2026_PASI90](drugs/drug_ixekizumab/pd_Liu_2026_PASI90.md) | PASI 90 ← ixekizumab · direct sigmoid Emax (Hill) effect | — | Liu Y et al., Model-Based Meta-Analysis of IL-17 A In…, Clinical reviews in allergy… (2026) | [10.1007/s12016-025-09123-5](https://doi.org/10.1007/s12016-025-09123-5) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tham_2014_PASI](drugs/drug_ixekizumab/pd_Tham_2014_PASI.md) | absolute Psoriasis Area and Severity Index (PASI) scores ← ixekizumab · indirect response — drug inhibits the production of absolute Psoriasis Area and Severity Index (PASI) scores | — | Tham LS et al., Population exposure-response model to s…, Journal of clinical pharmac… (2014) | [10.1002/jcph.312](https://doi.org/10.1002/jcph.312) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ixekizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL17A (inhibitor), IL17A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tham_2014.pdf` | Tham LS et al., Population exposure-response model to s…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.312](https://doi.org/10.1002/jcph.312) | [24752880](https://pubmed.ncbi.nlm.nih.gov/24752880) | The paper describes a population pharmacokinetic model for ixekizumab, but the specific numeric parameter values are not provided in the extracted evidence. |

<sub>queue written 2026-10-06T23:57:45.810738+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chigutsa_2018 | irrelevant | 1 | 0 | The study is an exposure-response modeling analysis that characterizes the relationship between drug concentration and efficacy, but it does not report the underlying pharmacokinetic disposition parameters (CL, V, Q, t1/2, or PK model parameters) for ixekizumab. |
| popPK | Deodhar_2021 | irrelevant | 0 | 0 | The paper is a clinical trial analysis of patient-reported outcomes and efficacy, reporting no pharmacokinetic parameters (CL, V, ka) for ixekizumab. |
| popPK | Deodhar_2021_2 | irrelevant | 0 | 0 | The study reports patient-reported outcomes (sleep, work productivity) for ixekizumab in nr-axSpA, not pharmacokinetic parameters. |
| popPK | Deodhar_2021_3 | irrelevant | 0 | 0 | This is a clinical efficacy study of ixekizumab in axial spondyloarthritis that reports patient-reported outcomes and ASAS responses, containing no pharmacokinetic parameters or disposition data. |
| popPK | Liu_2026 | irrelevant | 2 | 0 | This is an exposure-response modeling study using PK parameters extracted from external documents, and no quantitative PK parameter values (CL, V, ka, etc.) for ixekizumab are present in the provided evidence. |
| popPK | Mease_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy analysis of patient-reported outcomes (pain, fatigue, sleep) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life for ixekizumab. |
| popPK | Paci_2026 | irrelevant | 0 | 0 | The paper is a real-world clinical effectiveness study comparing disease activity scores and does not report any pharmacokinetic parameters. |
| popPK | Rodríguez-Fernández_2022 | irrelevant | 2 | 0 | The paper is a review that summarizes PK/PD models for ixekizumab, but the specific quantitative disposition parameters (CL, V) for ixekizumab are not present in the provided text (only EC50 PD parameters are mentioned, and CL/V values are referenced as being in a table not included in the evidence). |
| popPK | Tham_2014 | relevant | 10 | 2 | The paper describes a population pharmacokinetic model for ixekizumab, but the specific numeric parameter values are not provided in the extracted evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
