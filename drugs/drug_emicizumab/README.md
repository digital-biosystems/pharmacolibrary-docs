<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;emicizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Emicizumab_Retout2020_estimate&quot;,&quot;label&quot;:&quot;Retout_2020_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_emicizumab/Emicizumab_Retout2020_estimate.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# emicizumab

- **generic name:** emicizumab
- **ATC codes:** `B02BX06`
- **DrugBank:** [DB13923](https://go.drugbank.com/drugs/DB13923) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Emicizumab, a monoclonal antibody, is used to treat hemophilia A. It is an approved medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27155409](https://www.wikidata.org/wiki/Q27155409) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 18:52 | 8:38 | 1/0/3 | 2/0/0 | 0/0/0 | 135,696/27,673 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Retout_2020_estimate](drugs/drug_emicizumab/Emicizumab_Retout2020_estimate.md) | ▶ model + simulator | 1-compartment, oral | 3 | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.091). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q18, Q27, Q76 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Retout_2020_1_5_mg_kg_qw](drugs/drug_emicizumab/Emicizumab_Retout2020_1_5_mg_kg_qw.md) | — | 1-compartment (no model) | 9 | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.091). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q18, Q27, Q76 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Retout_2020_3_mg_kg_q2w](drugs/drug_emicizumab/Emicizumab_Retout2020_3_mg_kg_q2w.md) | — | 1-compartment (no model) | 9 | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.091). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q18, Q27, Q76 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Retout_2020_6_mg_kg_q4w](drugs/drug_emicizumab/Emicizumab_Retout2020_6_mg_kg_q4w.md) | — | 1-compartment (no model) | 9 | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Donners_2021_ABR](drugs/drug_emicizumab/pd_Donners_2021_ABR.md) | annualized bleeding rate of treated [joint] bleeds ← emicizumab · direct Emax (saturable) effect | — | Donners AAMT et al., Pharmacokinetics and Associated Efficac…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01042-w](https://doi.org/10.1007/s40262-021-01042-w) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jonsson_2021_ABR](drugs/drug_emicizumab/pd_Jonsson_2021_ABR.md) | bleeding frequency ← emicizumab · direct Emax (saturable) effect | — | Jonsson F et al., Exposure-Bleeding Count Modeling of Emi…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01006-0](https://doi.org/10.1007/s40262-021-01006-0) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=emicizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F10 (activator), F9 (cofactor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 1  ·  needs_review 3  ·  rejected 0  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yoneyama_2022.pdf` | Yoneyama K et al., A Model-Based Framework to Inform the D…, Journal of clinical pharmac… (2022) | popPK | 9 | [10.1002/jcph.1968](https://doi.org/10.1002/jcph.1968) | [34545950](https://pubmed.ncbi.nlm.nih.gov/34545950) | The paper describes a population PK model for emicizumab in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Yoneyama_2018.pdf` | Yoneyama K et al., A Pharmacometric Approach to Substitute…, Clinical pharmacokinetics (2018) | popPK | 8 | [10.1007/s40262-017-0616-3](https://doi.org/10.1007/s40262-017-0616-3) | [29214439](https://pubmed.ncbi.nlm.nih.gov/29214439) | The paper describes a population PK model for emicizumab, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-05T18:44:34.970021+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Donners_2021 | irrelevant | 2 | 0 | This is a systematic review that synthesizes data from other studies and does not report original quantitative PK parameter values (such as CL, V, or ka) in the provided evidence. |
| popPK | Jonsson_2021 | irrelevant | 2 | 0 | The study is an exposure-response analysis that uses predicted concentrations from a previously developed PK model rather than reporting new quantitative PK parameters (CL, V, etc.) for emicizumab. |
| popPK | Schmitt_2021 | irrelevant | 2 | 0 | The paper describes a clinical study with PK/PD biomarkers but does not report quantitative compartmental PK parameters (CL, V, Q, ka) or a population PK model in the provided text. |
| popPK | Yoneyama_2018 | relevant | 8 | 2 | The paper describes a population PK model for emicizumab, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Yoneyama_2022 | relevant | 9 | 2 | The paper describes a population PK model for emicizumab in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Yu_2021 | irrelevant | 2 | 0 | The study is a simulation using a previously published model and reports cost/dosing implications rather than original quantitative PK parameter values (CL, V, etc.) for emicizumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 18:44 UTC</sub>
