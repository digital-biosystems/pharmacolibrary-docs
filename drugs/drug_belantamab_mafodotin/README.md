<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;belantamab mafodotin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BelantamabMafodotin_FerronBrady2021_reference&quot;,&quot;label&quot;:&quot;Ferron-Brady_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/BelantamabMafodotin_FerronBrady2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# belantamab mafodotin

- **generic name:** belantamab mafodotin
- **ATC codes:** `L01FX15`, `L01XC39`
- **DrugBank:** [DB15719](https://go.drugbank.com/drugs/DB15719) · **PubChem:** not captured
- **groups:** approved, investigational, withdrawn

## About

Belantamab mafodotin, a monoclonal antibody drug conjugate, was used to treat multiple myeloma. It is no longer in use: its marketing authorisation in the European Union has expired, and it is listed as withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q98139657](https://www.wikidata.org/wiki/Q98139657) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cys-mcMMAF | metabolite | 1046.33 | C52H83N7O13S | PubChem | [86278355](https://pubchem.ncbi.nlm.nih.gov/compound/86278355) | Rathi_2021 |
| total_mAb | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:17 | 5:52 | 1/0/3 | 0/0/2 | 0/0/0 | 266,869/18,105 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Ferron-Brady_2021_reference](drugs/drug_belantamab_mafodotin/BelantamabMafodotin_FerronBrady2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ferron-Brady G et al., Exposure-Response Analyses for Therapeu…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2409](https://doi.org/10.1002/cpt.2409) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Papathanasiou_2025_cys_mcmmaf_final_model](drugs/drug_belantamab_mafodotin/BelantamabMafodotin_Papathanasiou2025_cys_mcmmaf_final_model.md) | — | 1-compartment (no model) | 0 | Papathanasiou T et al., Population Pharmacokinetics for Belanta…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01508-1](https://doi.org/10.1007/s40262-025-01508-1) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q64 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Papathanasiou_2025_estimate](drugs/drug_belantamab_mafodotin/BelantamabMafodotin_Papathanasiou2025_estimate.md) | — | 2-compartment (no model) | 3 (+4 cov.) | Papathanasiou T et al., Population Pharmacokinetics for Belanta…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01508-1](https://doi.org/10.1007/s40262-025-01508-1) |
| <span class="pk-badge pk-badge--neutral">not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Rathi_2021_reference](drugs/drug_belantamab_mafodotin/BelantamabMafodotin_Rathi2021_reference.md) | model (no simulator) | 2-compartment general linear | 5 (+1 cov.) | Rathi C et al., Population pharmacokinetics of belantam…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12660](https://doi.org/10.1002/psp4.12660) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [Collins_2023_KVA](drugs/drug_belantamab_mafodotin/pd_Collins_2023_KVA.md) | ocular events ← belantamab mafodotin · categorical (graded) response model | — | Collins J et al., Longitudinal efficacy and safety modeli…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13016](https://doi.org/10.1002/psp4.13016) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span> | [Collins_2023_M_protein](drugs/drug_belantamab_mafodotin/pd_Collins_2023_M_protein.md) | serum M-protein concentration ← belantamab mafodotin · disease-progression model | model (no simulator) | Collins J et al., Longitudinal efficacy and safety modeli…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13016](https://doi.org/10.1002/psp4.13016) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Ferron-Brady_2021_PoR](drugs/drug_belantamab_mafodotin/pd_Ferron_Brady_2021_PoR.md) | Probability of response (PoR) ← belantamab mafodotin · categorical (graded) response model | — | Ferron-Brady G et al., Exposure-Response Analyses for Therapeu…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2409](https://doi.org/10.1002/cpt.2409) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Ferron-Brady_2021_Probability_of_grade_2_corneal_event](drugs/drug_belantamab_mafodotin/pd_Ferron_Brady_2021_Probability_of_grade_2_corneal_event.md) | Probability of grade ≥ 2 corneal event ← belantamab mafodotin · categorical (graded) response model | — | Ferron-Brady G et al., Exposure-Response Analyses for Therapeu…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2409](https://doi.org/10.1002/cpt.2409) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Ferron-Brady_2021_Probability_of_grade_3_corneal_event](drugs/drug_belantamab_mafodotin/pd_Ferron_Brady_2021_Probability_of_grade_3_corneal_event.md) | Probability of grade ≥ 3 corneal event ← belantamab mafodotin · categorical (graded) response model | — | Ferron-Brady G et al., Exposure-Response Analyses for Therapeu…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2409](https://doi.org/10.1002/cpt.2409) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=belantamab_mafodotin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| metabolism | liver | `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` substrate, `ABCC3` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate, `ABCC3` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TNFRSF17 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2026.pdf` | Chen X et al., Pharmacokinetics and Safety of Belantam…, Clinical lymphoma, myeloma… (2026) | popPK | 10 | [10.1016/j.clml.2026.05.009](https://doi.org/10.1016/j.clml.2026.05.009) | [42297668](https://pubmed.ncbi.nlm.nih.gov/42297668) | The study reports population pharmacokinetic parameters for belantamab mafodotin, but the specific numeric values are not present in the provided text and are likely in supplementary material or figures. |

<sub>queue written 2026-10-14T18:13:00.432350+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carreño_2026 | irrelevant | 5 | 1 | The paper uses a previously developed population PK model for belantamab mafodotin as a driver for efficacy and safety simulations, but does not report new quantitative PK parameters (CL, Vd, etc.) for the drug itself in the provided text. |
| popPK | Chen_2026 | relevant | 10 | 2 | The study reports population pharmacokinetic parameters for belantamab mafodotin, but the specific numeric values are not present in the provided text and are likely in supplementary material or figures. |
| popPK | Collins_2023 | irrelevant | 2 | 0 | The study focuses on efficacy and safety modeling (M-protein and ocular events) using a pre-existing PK model, and while it references updated PK parameter estimates in Table S1, the supplementary material containing these values is not provided in the evidence. |
| popPK | Hanafin_2025 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that references a separate population PK study but does not report the actual quantitative PK parameter values (CL, V, Q, t1/2). |
| popPK | Papathanasiou_2026 | irrelevant | 2 | 0 | The paper is an exposure-response analysis using PK-derived exposure metrics (Cavg, Cmax) as covariates for efficacy and safety, rather than a study reporting the quantitative compartmental PK parameters (CL, V, Q, t1/2) for belantamab_mafodotin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:13 UTC</sub>
