<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;emicizumab&quot;}]"></div>

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
| 2026-09-18 21:29 | 2:11 | 0/0/4 | 0/0/0 | 0/0/0 | 63,275/3,835 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Retout_2020_1_5_mg_kg_qw](drugs/drug_emicizumab/Emicizumab_Retout2020_1_5_mg_kg_qw.md) | held back | 1-compartment, oral | 8 | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Retout_2020_3_mg_kg_q2w](drugs/drug_emicizumab/Emicizumab_Retout2020_3_mg_kg_q2w.md) | held back | 1-compartment, oral | 8 | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Retout_2020_6_mg_kg_q4w](drugs/drug_emicizumab/Emicizumab_Retout2020_6_mg_kg_q4w.md) | held back | 1-compartment, oral | 8 | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Retout_2020_estimate](drugs/drug_emicizumab/Emicizumab_Retout2020_estimate.md) | held back | 1-compartment, oral | 3 | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |

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
- **records:** 4  ·  extracted 0  ·  needs_review 4  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yoneyama_2022.pdf` | Yoneyama K et al., A Model-Based Framework to Inform the D…, Journal of clinical pharmac… (2022) | popPK | 9 | [10.1002/jcph.1968](https://doi.org/10.1002/jcph.1968) | [34545950](https://pubmed.ncbi.nlm.nih.gov/34545950) | The paper describes a population PK model for emicizumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Yoneyama_2018.pdf` | Yoneyama K et al., A Pharmacometric Approach to Substitute…, Clinical pharmacokinetics (2018) | popPK | 8 | [10.1007/s40262-017-0616-3](https://doi.org/10.1007/s40262-017-0616-3) | [29214439](https://pubmed.ncbi.nlm.nih.gov/29214439) | The paper describes a population PK study for emicizumab, but the specific quantitative disposition parameters (CL, V, etc.) are not present in the provided evidence, which only reports efficacy thresholds and dosing regimens. |

<sub>queue written 2026-09-18T21:27:19.154163+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Donners_2021 | irrelevant | 2 | 0 | The paper is a systematic review that summarizes findings from other studies rather than reporting original quantitative PK parameters (CL, V, etc.) for emicizumab. |
| popPK | Jonsson_2021 | irrelevant | 2 | 0 | The study is an exposure-response analysis that uses a previously developed PK model rather than reporting new quantitative PK parameters (CL, V, etc.) for emicizumab. |
| popPK | Schmitt_2021 | irrelevant | 2 | 0 | The paper describes a PK/PD study but only reports qualitative findings (e.g., trough concentrations ≥ 50 µg/mL) and references population PK models without providing specific quantitative disposition parameters (CL, V, ka) in the evidence. |
| popPK | Yoneyama_2018 | relevant | 8 | 0 | The paper describes a population PK study for emicizumab, but the specific quantitative disposition parameters (CL, V, etc.) are not present in the provided evidence, which only reports efficacy thresholds and dosing regimens. |
| popPK | Yoneyama_2022 | relevant | 9 | 0 | The paper describes a population PK model for emicizumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Yu_2021 | irrelevant | 2 | 0 | The paper is a simulation study using a previously published model and does not report original quantitative PK parameter values (CL, V, etc.) for emicizumab in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 21:27 UTC</sub>
