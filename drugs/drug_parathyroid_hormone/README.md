<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05A&quot;,&quot;href&quot;:&quot;atc/H05A.md&quot;},{&quot;label&quot;:&quot;parathyroid hormone&quot;}]"></div>

# parathyroid hormone

- **generic name:** parathyroid hormone
- **ATC codes:** `H05AA03`
- **DrugBank:** [DB05829](https://go.drugbank.com/drugs/DB05829) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Parathyroid hormone is used to treat hypoparathyroidism. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72499539](https://www.wikidata.org/wiki/Q72499539) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:02 | 4:27 | 0/1/0 | 1/1/0 | 0/0/0 | 275,400/23,438 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Visscher_2025_reference](drugs/drug_parathyroid_hormone/ParathyroidHormone_Visscher2025_reference.md) | — | 1-compartment (no model) | 0 | Visscher M et al., Personalized parathyroid hormone therap…, British journal of clinical… (2025) | [10.1111/bcp.16342](https://doi.org/10.1111/bcp.16342) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Visscher_2025_Ca_clearance](drugs/drug_parathyroid_hormone/pd_Visscher_2025_Ca_clearance.md) | calcium clearance biomarker turnover ← parathyroid hormone | — | Visscher M et al., Personalized parathyroid hormone therap…, British journal of clinical… (2025) | [10.1111/bcp.16342](https://doi.org/10.1111/bcp.16342) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> | [Visscher_2025_P_clearance](drugs/drug_parathyroid_hormone/pd_Visscher_2025_P_clearance.md) | phosphate clearance biomarker turnover ← parathyroid hormone | — | Visscher M et al., Personalized parathyroid hormone therap…, British journal of clinical… (2025) | [10.1111/bcp.16342](https://doi.org/10.1111/bcp.16342) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Endlich_1995_GBF](drugs/drug_parathyroid_hormone/pd_Endlich_1995_GBF.md) | glomerular blood flow ← parathyroid hormone · direct Emax (saturable) effect | — | Endlich K et al., Vascular effects of parathyroid hormone…, The Journal of physiology 4… (1995) | [10.1113/jphysiol.1995.sp020599](https://doi.org/10.1113/jphysiol.1995.sp020599) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Endlich_1995_preglomerular_vasodilatation](drugs/drug_parathyroid_hormone/pd_Endlich_1995_preglomerular_vasodilatation.md) | preglomerular vasodilatation ← parathyroid hormone · direct Emax (saturable) effect | — | Endlich K et al., Vascular effects of parathyroid hormone…, The Journal of physiology 4… (1995) | [10.1113/jphysiol.1995.sp020599](https://doi.org/10.1113/jphysiol.1995.sp020599) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=parathyroid_hormone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTH1R (activator), PTH2R (activator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 220 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abraham_2011 | irrelevant | 2 | 1 | The study focuses on the pharmacodynamics of a CaR modulator; while PTH concentrations are modeled to describe the response, specific quantitative PTH pharmacokinetic parameters (CL, V) are not reported in the evidence, only noted as comparable to previous reports. |
| popPK | Basu_2020 | irrelevant | 1 | 0 | The study models the PK/PD of the drug cinacalcet, using parathyroid hormone only as a pharmacodynamic endpoint for efficacy, not as the subject drug for PK parameter estimation. |
| popPK | Chen_2018 | irrelevant | 1 | 2 | The study reports population PK parameters for etelcalcetide (the subject drug), with PTH acting only as the pharmacodynamic biomarker/comparator rather than the pharmacokinetic subject. |
| popPK | Chen_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug cinacalcet, not parathyroid hormone (PTH), which serves only as a pharmacodynamic biomarker in the study. |
| popPK | Endlich_1995 | irrelevant | 0 | 0 | The study investigates the vascular pharmacodynamics of PTH (vasodilation/blood flow) and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Fu_2022 | irrelevant | 0 | 0 | The study models the pharmacokinetics of nifedipine (a CYP3A substrate) to evaluate the effect of PTH as a covariate, rather than reporting the PK parameters of parathyroid hormone itself. |
| popPK | Fukazawa-Shinotsuka_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of maxacalcitol, with parathyroid hormone only serving as a pharmacodynamic marker. |
| popPK | Heniková_2025 | irrelevant | 0 | 0 | The paper is a cross-sectional nutritional study comparing dietary groups, and while PTH is measured as a bone turnover biomarker, no pharmacokinetic parameters (clearance, volume, half-life, etc.) for parathyroid hormone are reported. |
| popPK | Huber_2025 | irrelevant | 0 | 0 | The paper investigates the physiological mechanisms of anemia (Hb, EPO, FGF23 levels) in patients with primary hyperparathyroidism and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for parathyroid hormone. |
| popPK | Kelly_2022 | irrelevant | 0 | 0 | The study focuses on the viability and function of donor parathyroid glands for transplantation, not on the pharmacokinetic parameters of parathyroid hormone itself. |
| popPK | Pounds_1991 | irrelevant | 0 | 0 | This is a review article on lead toxicity and bone biology that discusses parathyroid hormone only as a systemic regulator of bone cell function, not as a subject drug for pharmacokinetic analysis, and contains no PK parameters for it. |
| popPK | Sahbani_2019 | irrelevant | 0 | 0 | The study investigates the bone anabolic effects and receptor signaling of parathyroid hormone analogs (abaloparatide/teriparatide) in mice and does not report any pharmacokinetic parameters (e.g., clearance, volume) for parathyroid hormone. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study models the pharmacodynamics of cinacalcet (a drug) on PTH levels, not the pharmacokinetics of parathyroid hormone itself. |
| popPK | Wu_2018 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of etelcalcetide (a calcimimetic drug), not the pharmacokinetics of parathyroid hormone itself, which is only the target biomarker. |
| popPK | Zilberman-Itskovich_2025 | irrelevant | 0 | 0 | The study is a clinical epidemiological investigation of PTH as a biomarker for bone disease and nutrition in dialysis patients, not a pharmacokinetic study of the drug parathyroid hormone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:58 UTC</sub>
