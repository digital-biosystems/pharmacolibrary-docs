<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;benralizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benralizumab_Cheung2023_reference&quot;,&quot;label&quot;:&quot;Cheung_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benralizumab/Benralizumab_Cheung2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benralizumab_Yan2019_final&quot;,&quot;label&quot;:&quot;Yan_2019_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benralizumab/Benralizumab_Yan2019_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# benralizumab

- **generic name:** benralizumab
- **ATC codes:** `R03DX10`
- **DrugBank:** [DB12023](https://go.drugbank.com/drugs/DB12023) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Benralizumab is a monoclonal antibody used as an antiasthmatic drug for obstructive airway disease, and has also been studied for chronic spontaneous urticaria. It is authorised in the European Union for asthma and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3638304](https://www.wikidata.org/wiki/Q3638304) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 00:28 | 7:21 | 0/1/4 | 1/0/0 | 0/0/0 | 172,010/9,938 | ollama / glm-5.3-flash | 6 | 0/6 | 6/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Cheung_2023_reference](drugs/drug_benralizumab/Benralizumab_Cheung2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Cheung TT et al., Safety, Tolerability, and Pharmacokinet…, Drug design, development an… (2023) | [10.2147/DDDT.S392155](https://doi.org/10.2147/DDDT.S392155) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.556). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Wedner_2024_reference](drugs/drug_benralizumab/Benralizumab_Wedner2024_reference.md) | — | 1-compartment (no model) | 3 | Wedner HJ et al., Benralizumab in children with severe eo…, Pediatric allergy and immun… (2024) | [10.1111/pai.14092](https://doi.org/10.1111/pai.14092) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Yan_2019_base](drugs/drug_benralizumab/Benralizumab_Yan2019_base.md) | — | 2-compartment (no model) | 7 | Yan L et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00738-4](https://doi.org/10.1007/s40262-019-00738-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Yan_2019_final](drugs/drug_benralizumab/Benralizumab_Yan2019_final.md) | ▶ model + simulator | 2-compartment, IV | 7 (+3 cov.) | Yan L et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00738-4](https://doi.org/10.1007/s40262-019-00738-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper (the values present come f…</sub><br><sub>route_to: `human_review`</sub> | [Wang_2017_reference](drugs/drug_benralizumab/Benralizumab_Wang2017_reference.md) | — | 1-compartment (no model) | 2 | Wang B et al., Population Pharmacokinetics and Pharmac…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12160](https://doi.org/10.1002/psp4.12160) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Jin_2025_AAER](drugs/drug_benralizumab/pd_Jin_2025_AAER.md) | annual asthma exacerbation rate (AAER) ratio ← benralizumab · direct Emax (saturable) effect | — | Jin Y et al., Population Pharmacokinetics and Exposur…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01538-9](https://doi.org/10.1007/s40262-025-01538-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Jin_2025_FEV1](drugs/drug_benralizumab/pd_Jin_2025_FEV1.md) | pre-bronchodilator forced expiratory volume in 1 second ← benralizumab · model not identified | — | Jin Y et al., Population Pharmacokinetics and Exposur…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01538-9](https://doi.org/10.1007/s40262-025-01538-9) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=benralizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: FCGR3A (binding), IL5 (modulator), IL5RA (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 4  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wedner_2024.pdf` | Wedner HJ et al., Benralizumab in children with severe eo…, Pediatric allergy and immun… (2024) | popPK | 10 | [10.1111/pai.14092](https://doi.org/10.1111/pai.14092) | [38491795](https://pubmed.ncbi.nlm.nih.gov/38491795) | Population PK analysis in children reports numeric CL (0.257 L/day), t1/2 (14.5 days), and Cmax values directly in the abstract. |

<sub>queue written 2026-10-08T00:21:51.713978+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chupp_2019 | irrelevant | 0 | 0 | Efficacy study of PEF onset with a disease-response model, not a PK study reporting benralizumab disposition parameters. |
| popPK | Jin_2025 | relevant | 10 | 4 | A population-PK model of benralizumab in humans is described, but most parameter estimates (CL, V2, ka, covariate effects) are in ESM Resources not provided; only absorption half-life (2.82 days), terminal half-life (15.5 days), and residual error values appear in text. |
| popPK | Leander_2022 | irrelevant | 0 | 0 | This is a stochastic mixed-effects model of peak expiratory flow (PD/efficacy), not a PK model of benralizumab; no CL, V, ka, or half-life parameters for benralizumab appear. |
| popPK | Matera_2017 | irrelevant | 3 | 1 | A narrative review of benralizumab's PK/PD with no numeric disposition parameters; any values would be in cited sources not provided. |
| popPK | Vergles_2026 | irrelevant | 0 | 0 | Clinical remission/dose-interval tapering study with no PK parameters (no CL, V, ka, half-life, or population-PK model) for benralizumab; only clinical/biomarker outcomes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-08 00:22 UTC</sub>
