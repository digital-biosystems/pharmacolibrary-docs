<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;necitumumab&quot;}]"></div>

# necitumumab

- **generic name:** necitumumab
- **ATC codes:** `L01FE03`
- **DrugBank:** [DB09559](https://go.drugbank.com/drugs/DB09559) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Necitumumab is an EGFR-inhibiting monoclonal antibody used as an anticancer drug, notably for non-small-cell lung carcinoma. It is approved in some countries, mainly the United States, but its European Union marketing authorisation has been withdrawn, so it is not available there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6985503](https://www.wikidata.org/wiki/Q6985503) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:31 | 8:31 | 0/1/0 | 1/0/0 | 0/0/0 | 70,773/27,377 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5), gpt-oss:120b (partly confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: partial 0/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Long_2017_reference](drugs/drug_necitumumab/Necitumumab_Long2017_reference.md) | — | 2-compartment (no model) | 3 | Long A et al., Population Pharmacokinetics of Necitumu…, Clinical pharmacokinetics (2017) | [10.1007/s40262-016-0452-x](https://doi.org/10.1007/s40262-016-0452-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Chigutsa_2017_Shrink](drugs/drug_necitumumab/pd_Chigutsa_2017_Shrink.md) | Shrink rate of tumor ← necitumumab · direct sigmoid Emax (Hill) effect | — | Chigutsa E et al., Exposure-Response Analysis of Necitumum…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12209](https://doi.org/10.1002/psp4.12209) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Chigutsa_2017_Basehaz](drugs/drug_necitumumab/pd_Chigutsa_2017_Basehaz.md) | Baseline hazard ← necitumumab · direct sigmoid Emax (Hill) effect | — | Chigutsa E et al., Exposure-Response Analysis of Necitumum…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12209](https://doi.org/10.1002/psp4.12209) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=necitumumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: EGFR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chigutsa_2017 | irrelevant | 2 | 0 | The paper is an exposure-response (PD) analysis that uses PK parameters from a separate study and does not report quantitative PK disposition parameters (CL, V, etc.) for necitumumab in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:23 UTC</sub>
