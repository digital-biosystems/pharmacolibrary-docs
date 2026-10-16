<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;belimumab&quot;}]"></div>

# belimumab

- **generic name:** belimumab
- **ATC codes:** `L04AG04`
- **DrugBank:** [DB08879](https://go.drugbank.com/drugs/DB08879) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Belimumab is a monoclonal antibody immunosuppressant used to treat systemic lupus erythematosus, including lupus nephritis. It is authorised in the European Union and is an approved medicine, used mainly for lupus.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1996249](https://www.wikidata.org/wiki/Q1996249) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:59 | 4:08 | 0/4/1 | 1/1/0 | 0/0/0 | 183,542/10,682 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.538). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Zhou_2021_reference](drugs/drug_belimumab/Belimumab_Zhou2021_reference.md) | — | 2-compartment (no model) | 4 | Zhou X et al., Prediction of Belimumab Pharmacokinetic…, Drugs in R&D (2021) | [10.1007/s40268-021-00363-2](https://doi.org/10.1007/s40268-021-00363-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.333). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Brunner_2025_reference](drugs/drug_belimumab/Belimumab_Brunner2025_reference.md) | — | 1-compartment (no model) | 0 | Brunner HI et al., Pharmacokinetics, Pharmacodynamics, and…, Arthritis care & research (2026) | [10.1002/acr.25700](https://doi.org/10.1002/acr.25700) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Dimelow_2021_reference](drugs/drug_belimumab/Belimumab_Dimelow2021_reference.md) | — | 1-compartment (no model) | 0 | Dimelow R et al., Pharmacokinetics of Belimumab in Childr…, Clinical pharmacology in dr… (2021) | [10.1002/cpdd.889](https://doi.org/10.1002/cpdd.889) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.556). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Struemper_2013_reference](drugs/drug_belimumab/Belimumab_Struemper2013_reference.md) | — | 1-compartment (no model) | 0 | Struemper H et al., Population pharmacokinetics of belimuma…, Journal of clinical pharmac… (2013) | [10.1002/jcph.104](https://doi.org/10.1002/jcph.104) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.364). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Struemper_2018_reference](drugs/drug_belimumab/Belimumab_Struemper2018_reference.md) | — | 1-compartment (no model) | 0 | Struemper H et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0586-5](https://doi.org/10.1007/s40262-017-0586-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Vaskeikina_2026_FVC](drugs/drug_belimumab/pd_Vaskeikina_2026_FVC.md) | forced vital capacity ← treatment arm (belimumab) · direct Emax (saturable) effect | — | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wu_2025_SRI_response](drugs/drug_belimumab/pd_Wu_2025_SRI_response.md) | 52-week SRI response ← belimumab · direct Emax (saturable) effect | — | Wu J et al., Inter-regional pharmacokinetics and exp…, British journal of clinical… (2025) | [10.1111/bcp.16263](https://doi.org/10.1111/bcp.16263) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=belimumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TNFSF13B (blocker).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 15 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 5  ·  extracted 0  ·  needs_review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Struemper_2013.pdf` | Struemper H et al., Population pharmacokinetics of belimuma…, Journal of clinical pharmac… (2013) | popPK | 10 | [10.1002/jcph.104](https://doi.org/10.1002/jcph.104) | [23681782](https://pubmed.ncbi.nlm.nih.gov/23681782) | The paper reports quantitative population PK parameters (CL, Vss, half-life) for belimumab in humans, with key values explicitly stated in the provided abstract text. |
| `Liu_2022.pdf` | Liu T et al., Clinical pharmacology considerations fo…, Lupus (2022) | popPK | 8 | [10.1177/09612033221079771](https://doi.org/10.1177/09612033221079771) | [35238725](https://pubmed.ncbi.nlm.nih.gov/35238725) | The paper describes a population PK model and clearance relationships for belimumab, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-14T20:56:09.117597+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Balevic_2023 | irrelevant | 2 | 0 | The study focuses on exposure-response and efficacy extrapolation using non-compartmental analysis (AUE) and pharmacodynamic modeling, rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, Ka, t1/2) for belimumab. |
| popPK | Brunner_2025 | relevant | 9 | 4 | The study reports population PK derived exposure metrics (AUC, Cmax, Cmin) for belimumab in humans, but specific rate constants (CL, V, Q, ka) are not explicitly listed in the provided text and are likely in supplementary material. |
| popPK | Dimelow_2024 | relevant | 7 | 1 | The paper uses a population pharmacokinetic model for belimumab to extrapolate dosing in children, but specific numeric disposition parameters (e.g., clearance, volume of distribution) are not reported in the provided text, appearing only as referenced citations or in supplementary material. |
| popPK | Halpern_2006 | irrelevant | 1 | 0 | The study is a repeat-dose toxicology and pharmacodynamic investigation in cynomolgus monkeys; while PK is mentioned in the title, the abstract describes only biological effects (B-lymphocyte depletion) and safety, with no quantitative PK parameters (CL, V, etc.) reported in the evidence. |
| popPK | Kojima_2025 | irrelevant | 0 | 0 | The study is a clinical efficacy/retrospective analysis of SLE disease activity scores (SELENA-SLEDAI) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Kowalczyk-Quintas_2018 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of belimumab's binding to membrane-bound BAFF, reporting no pharmacokinetic parameters. |
| popPK | Liu_2022 | relevant | 8 | 1 | The paper describes a population PK model and clearance relationships for belimumab, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| popPK | Maeda_2023 | irrelevant | 0 | 0 | This is an immunological study analyzing T-cell subpopulations and immune profiles using mass cytometry, not a pharmacokinetic study, and contains no disposition parameters (CL, V, etc.) for belimumab. |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy (mRSS and FVC) for systemic sclerosis and does not report pharmacokinetic parameters for belimumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:56 UTC</sub>
