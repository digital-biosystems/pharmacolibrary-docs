<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;nadroparin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nadroparin_Piwowarczyk2023_reference&quot;,&quot;label&quot;:&quot;Piwowarczyk_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nadroparin

- **generic name:** nadroparin
- **ATC codes:** `B01AB06`
- **DrugBank:** [DB08813](https://go.drugbank.com/drugs/DB08813) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Nadroparin is an anticoagulant of the heparin group used to prevent and treat blood clots. It is an approved medicine and is used in clinical practice, mainly in Europe.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817257](https://www.wikidata.org/wiki/Q20817257) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:14 | 2:32 | 2/3/2 | 0/0/0 | 0/0/0 | 151,357/7,329 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857), gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Chen_2024_reference](drugs/drug_nadroparin/Nadroparin_Chen2024_reference.md) | held back | 1-compartment, oral | 3 | Chen Y et al., Is the current therapeutic dosage of na…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1331673](https://doi.org/10.3389/fphar.2024.1331673) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909), gpt-oss:120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Piwowarczyk_2023_reference](drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Piwowarczyk P et al., Population Pharmacokinetics and Probabi…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01244-4](https://doi.org/10.1007/s40262-023-01244-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.917), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Jaspers_2022_reference](drugs/drug_nadroparin/Nadroparin_Jaspers2022_reference.md) | — | 1-compartment (no model) | 2 (+2 cov.) | Jaspers TCC et al., Optimising the Nadroparin Dose for Thro…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01162-x](https://doi.org/10.1007/s40262-022-01162-x) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Mast_2023_final](drugs/drug_nadroparin/Nadroparin_Mast2023_final.md) | held back | 1-compartment, oral | 4 (+1 cov.) | Mast L et al., The effect of renal impairment and obes…, European journal of clinica… (2023) | [10.1007/s00228-023-03558-5](https://doi.org/10.1007/s00228-023-03558-5) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Diepstraten_2023_reference](drugs/drug_nadroparin/Nadroparin_Diepstraten2023_reference.md) | — | 1-compartment (no model) | 3 | Diepstraten J et al., Low and Highly Variable Exposure to Pro…, Clinical pharmacokinetics (2023) | [10.1007/s40262-022-01202-6](https://doi.org/10.1007/s40262-022-01202-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4), gpt-oss:120b (primary re-run, agreement 0.2). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Laporte_1999_reference](drugs/drug_nadroparin/Nadroparin_Laporte1999_reference.md) | — | 1-compartment (no model) | 0 | Laporte S et al., Population pharmacokinetic of nadropari…, European journal of pharmac… (1999) | [10.1016/s0928-0987(98)00064-5](https://doi.org/10.1016/s0928-0987(98)00064-5) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mast_2023_base](drugs/drug_nadroparin/Nadroparin_Mast2023_base.md) | — | 1-compartment (no model) | 0 | Mast L et al., The effect of renal impairment and obes…, European journal of clinica… (2023) | [10.1007/s00228-023-03558-5](https://doi.org/10.1007/s00228-023-03558-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 8  ·  **relevant:** 6
- **records:** 7  ·  extracted 2  ·  needs_review 2  ·  rejected 3  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Laporte_1999.pdf` | Laporte S et al., Population pharmacokinetic of nadropari…, European journal of pharmac… (1999) | popPK | 10 | [10.1016/s0928-0987(98)00064-5](https://doi.org/10.1016/s0928-0987(98)00064-5) | [10210734](https://pubmed.ncbi.nlm.nih.gov/10210734) | The paper reports a population PK model with specific numeric formulas for clearance and volume of distribution for nadroparin in children. |

<sub>queue written 2026-10-07T18:12:23.966373+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Diepstraten_2015 | irrelevant | 2 | 4 | The study develops a population pharmacodynamic model for nadroparin (using anti-Xa as endpoint), not a population pharmacokinetic model, and the reported parameters are PK parameters embedded within a PD context, not primary PK estimations of the drug itself. |
| popPK | Jaspers_2022 | relevant | 4 | 8 | The study develops a population pharmacodynamic model using anti-Xa levels as the response; while it reports numeric PK parameters (CL, V1, Q, V2) in Table 2, these represent the apparent kinetics of the pharmacodynamic response (anticoagulation) rather than direct drug concentration data, which falls into a borderline category for pure PK parameter extraction. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:12 UTC</sub>
