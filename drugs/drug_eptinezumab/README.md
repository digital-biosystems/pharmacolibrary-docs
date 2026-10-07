<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;eptinezumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eptinezumab_Baker2020_reference&quot;,&quot;label&quot;:&quot;Baker_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# eptinezumab

- **generic name:** eptinezumab
- **ATC codes:** `N02CD05`
- **DrugBank:** [DB14040](https://go.drugbank.com/drugs/DB14040) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Eptinezumab is a monoclonal antibody used to prevent migraine attacks. It is an authorised medicine in the European Union and is also approved elsewhere, given as an infusion by healthcare professionals.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28208949](https://www.wikidata.org/wiki/Q28208949) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:33 | 1:18 | 1/0/0 | 1/0/0 | 0/0/0 | 51,199/4,757 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Baker_2020_reference](drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 7 | Baker B et al., Population pharmacokinetic and exposure…, Pharmacology research & per… (2020) | [10.1002/prp2.567](https://doi.org/10.1002/prp2.567) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Baker_2020_MMD](drugs/drug_eptinezumab/pd_Baker_2020_MMD.md) | change in the frequency of monthly migraine days (MMD) over weeks 1–12 ← eptinezumab · direct Emax (saturable) effect | — | Baker B et al., Population pharmacokinetic and exposure…, Pharmacology research & per… (2020) | [10.1002/prp2.567](https://doi.org/10.1002/prp2.567) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Baker_2020_50_migraine_responder_rate_weeks_1_12](drugs/drug_eptinezumab/pd_Baker_2020_50_migraine_responder_rate_weeks_1_12.md) | ≥50% migraine responder rate (weeks 1–12) ← eptinezumab · categorical (graded) response model | — | Baker B et al., Population pharmacokinetic and exposure…, Pharmacology research & per… (2020) | [10.1002/prp2.567](https://doi.org/10.1002/prp2.567) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Baker_2020_75_migraine_responder_rate_weeks_1_12](drugs/drug_eptinezumab/pd_Baker_2020_75_migraine_responder_rate_weeks_1_12.md) | ≥75% migraine responder rate (weeks 1–12) ← eptinezumab · categorical (graded) response model | — | Baker B et al., Population pharmacokinetic and exposure…, Pharmacology research & per… (2020) | [10.1002/prp2.567](https://doi.org/10.1002/prp2.567) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Baker_2020_75_migraine_responder_rate_weeks_1_4](drugs/drug_eptinezumab/pd_Baker_2020_75_migraine_responder_rate_weeks_1_4.md) | ≥75% migraine responder rate (weeks 1–4) ← eptinezumab · categorical (graded) response model | — | Baker B et al., Population pharmacokinetic and exposure…, Pharmacology research & per… (2020) | [10.1002/prp2.567](https://doi.org/10.1002/prp2.567) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eptinezumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CALCA (antibody), CALCA (binder), CALCB (antibody), CALCB (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Areberg_2024.pdf` | Areberg J et al., Population pharmacokinetics of eptinezu…, Basic & clinical pharmacolo… (2024) | popPK | 10 | [10.1111/bcpt.14076](https://doi.org/10.1111/bcpt.14076) | [39206528](https://pubmed.ncbi.nlm.nih.gov/39206528) | The paper describes a relevant PopPK study for eptinezumab, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-07T06:32:47.055969+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Areberg_2024 | relevant | 10 | 0 | The paper describes a relevant PopPK study for eptinezumab, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract text. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects (gene variants) on the PK/PD of eptinezumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:32 UTC</sub>
