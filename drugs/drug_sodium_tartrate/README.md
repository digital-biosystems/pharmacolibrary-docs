<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;sodium tartrate&quot;}]"></div>

# sodium tartrate

- **generic name:** sodium tartrate
- **ATC codes:** `A06AD21`
- **DrugBank:** [DB13707](https://go.drugbank.com/drugs/DB13707)
- **groups:** approved, withdrawn

## About

**Description.** Sodium tartrate is a disodium salt of l-( + )-tartaric acid that is identified by transparent, colorless, and odorless crystals. It is obtained as a byproduct of wine manufacturing. Sodium tartrate is generally recognized as safe (GRAS) as a direct human food ingredient. It acts as an emulsifier and pH control agent in food products [L2590].

This compound is commonly used as an emulsifier in cheese/cheese spread products and is not to exceed 4% concentration, according to Health Canada regulations [L2594].

**Indication.** It acts as an emulsifier and pH control agent in food products [L2590], [L2598].
In the laboratory, it is used while performing the Karl Fischer equation, which is used to determine the water content of various substances [F18], [L2590].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 23:57 | 1:46 | 0/0/0 | 1/0/0 | 0/0/0 | 45,852/1,445 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Singh_2021](drugs/drug_sodium_tartrate/pd_Singh_2021_mitophagy.md) | Singh F et al., Pharmacological rescue of impaired mito…, eLife (2021) | [10.7554/elife.67604](https://doi.org/10.7554/elife.67604) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coveney_1987 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the radiotracer technetium-99m MAG3, with sodium tartrate serving only as an excipient in the kit formulation. |
| popPK | Gharge_2025 | irrelevant | 0 | 0 | The paper focuses on in-vitro antidiabetic activity and computational ADMET analysis of rhodanine-thiazole hybrids, not sodium tartrate pharmacokinetics. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses the concept of iodine allergy in nuclear medicine and does not contain any pharmacodynamic or exposure-response data for sodium tartrate. |
| popPK | Ha_1996 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study investigating the effects of ammonium salts on GABAA receptors, not a pharmacokinetic study of sodium tartrate. |
| popPK | Nicholson_1938 | irrelevant | 0 | 0 | Sodium tartrate is used as a nephrotoxic agent to induce kidney damage, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Singh_2021 | irrelevant | 0 | 0 | The paper investigates mitophagy in Parkinson's disease models using LRRK2 inhibitors and does not study sodium tartrate or report any pharmacokinetic parameters. |
| popPK | Suborna_2024 | irrelevant | 0 | 0 | The paper is a food science study on solar drying of country bean seeds where sodium tartrate is used only as a pretreatment agent, not as a subject drug for pharmacokinetic analysis. |
| PD | Suborna_2024 | not_relevant | 0 | 0 | The paper is a food science study on solar drying techniques and pretreatments for beans, reporting no pharmacodynamic or exposure-response relationships for sodium tartrate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
