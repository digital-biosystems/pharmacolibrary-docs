<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;sunitinib&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/&quot;},{&quot;label&quot;:&quot;Valderrama_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sunitinib_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/Sunitinib_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sunitinib_Wang2020_reference&quot;,&quot;label&quot;:&quot;Wang_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/Sunitinib_Wang2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sunitinib — `Sunitinib_Valderrama2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Sunitinib’s bioavailability, clearance, distribution volume, and lag time were absent; the reported CL 223 L/h and V 46.1 L belong to 5-fluorouracil.

<div class="pk-model-meta" hidden drug="sunitinib" model-id="Sunitinib_Valderrama2025_reference" status="model_quarantined" stale="false" population="patients receiving sunitinib" measured-compound="sunitinib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Valderrama D, Teplytska O, Koltermann LM, Trunz E, Schmulenson E, Fritsch A et al. Comparing Scientific Machine Learning With Population Pharmacokinetic and Classical Machine Learning Approaches for Prediction of Drug Concentrations. CPT: pharmacometrics & systems pharmacology 14(4):759-769 (2025).
  ·  DOI: [10.1002/psp4.13313](https://doi.org/10.1002/psp4.13313)

## Population and dosing

**Population:** patients receiving sunitinib.

**Dosing:** 37.5, 50 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 223 | L/h |
| V | V | 46.1 | L |
| ka | kabs | 13.92 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.444). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Sunitinib’s bioavailability, clearance, distribution volume, and lag time were absent; the reported CL 223 L/h and V 46.1 L belong to 5-fluorouracil.**

No value was extracted for sunitinib’s bioavailability, clearance, volume of distribution, or absorption lag time, so library placeholders stood in and the model was held back rather than published with invented numbers. The listed clearance (223 L/h) and volume (46.1 L) are assigned to 5-fluorouracil, while sunitinib’s listed absorption rate constant is 13.92 h−1. Although the record describes presystemic formation of SU12662 from sunitinib, its obtained structure was one-compartment enteral rather than parent–metabolite. Extracted — 5-fluorouracil: CL 223 L/h, V 46.1 L; sunitinib: kabs 13.9 h−1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cl: this record has none, the second reading 223; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 223 | L/h | 6.194e-05 | m3/s | L/h | exact (1) | psp413313-tbl-0002:row2:col2, psp413313-tbl-0002:row2:col3, psp413313-tbl-0002:row2:col4, psp413313-tbl-0002:row2:col5 |
| V | `Q61` · V | 46.1 | L | 0.0461 | m3 | L | exact (1) | psp413313-tbl-0002:row3:col2, psp413313-tbl-0002:row3:col3, psp413313-tbl-0002:row3:col4, psp413313-tbl-0002:row3:col5 |
| ka | `Q49` · kabs | 13.92 | h−1 | 0.003867 | 1/s | 1/h | review_gapfill (0.7) | Liu_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'CL' → L/h (from the paper text: 'The paper states “a clearance above 1478 L/h,” explicitly giving the clearance unit.')
- implicit units: 'V' → L (from the popPK convention: 'The paper identifies V as the volume of distribution but states no unit; population PK distribution volumes are conventi')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sunitinib
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [0] (site presystemic: 'Presystemic formation of SU12662 was modeled via a hypothetical enzyme compartment incorporated into the central compart')
- row roles (LLM): model_class=compartmental; 2/2 row label(s) assigned, 8 linked by role; re-tagged parent→5-fluorouracil ×8
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Liu_2020's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl]` |  | 223 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | 223 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[ka]` | 13.92 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v]` |  | 46.1 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v]` | 46.1 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp413313-tbl-0002:row2:col2', 'psp413313-tbl-0002:row2:col3', 'psp413313-tbl-0002:row2:col4', 'psp413313-tbl-0002:row2:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Liu_2020:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['psp413313-tbl-0002:row3:col2', 'psp413313-tbl-0002:row3:col3', 'psp413313-tbl-0002:row3:col4', 'psp413313-tbl-0002:row3:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 223 L/h | ['psp413313-tbl-0002:row2:col2', 'psp413313-tbl-0002:row2:col3', 'psp413313-tbl-0002:row2:col4', 'psp413313-tbl-0002:row2:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 46.1 L | ['psp413313-tbl-0002:row3:col2', 'psp413313-tbl-0002:row3:col3', 'psp413313-tbl-0002:row3:col4', 'psp413313-tbl-0002:row3:col5'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sunitinib/Sunitinib_Valderrama2025_reference/Sunitinib_Valderrama2025_reference_matlab.zip" download>Sunitinib_Valderrama2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sunitinib/Sunitinib_Valderrama2025_reference/Sunitinib_Valderrama2025_reference_matlab_simbio.zip" download>Sunitinib_Valderrama2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sunitinib/Sunitinib_Valderrama2025_reference/Sunitinib_Valderrama2025_reference_sbml.zip" download>Sunitinib_Valderrama2025_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sunitinib/Sunitinib_Valderrama2025_reference/Sunitinib_Valderrama2025_reference_cellml.zip" download>Sunitinib_Valderrama2025_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Valderrama D, Teplytska O, Koltermann LM, Trunz E, Schmulenson E, Fritsch A et al. Comparing Scientific Machine Learning With Population Pharmacokinetic and Classical Machine Learning Approaches for Prediction of Drug Concentrations. CPT: pharmacometrics & systems pharmacology 14(4):759-769 (2025). [doi:10.1002/psp4.13313](https://doi.org/10.1002/psp4.13313)

**This record:** Pharmacolibrary v26.09, model `Sunitinib_Valderrama2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_sunitinib/Sunitinib_Valderrama2025_reference>

```bibtex
@misc{pharmacolibrary_SunitinibValderrama2025reference,
  title  = {{Pharmacolibrary model Sunitinib_Valderrama2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_sunitinib/Sunitinib_Valderrama2025_reference},
  note   = {Parameters from doi:10.1002/psp4.13313},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsunitinib%5D%20Sunitinib_Valderrama2025_reference&body=Drug%3A%20sunitinib%0ARecord%3A%20Sunitinib_Valderrama2025_reference%0APaper%3A%20Valderrama_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sunitinib/Sunitinib_Valderrama2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:31 UTC</sub>
