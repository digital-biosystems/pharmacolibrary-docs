<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;sulbactam&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/&quot;},{&quot;label&quot;:&quot;Zhou_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulbactam_Abouelhassan2024v2_100_mg_kg&quot;,&quot;label&quot;:&quot;Abouelhassan_2024_2_100_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/Sulbactam_Abouelhassan2024v2_100_mg_kg.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulbactam_Abouelhassan2024v2_10_mg_kg&quot;,&quot;label&quot;:&quot;Abouelhassan_2024_2_10_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/Sulbactam_Abouelhassan2024v2_10_mg_kg.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulbactam_Abouelhassan2024v2_200_mg_kg&quot;,&quot;label&quot;:&quot;Abouelhassan_2024_2_200_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/Sulbactam_Abouelhassan2024v2_200_mg_kg.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulbactam_Onita2025_reference&quot;,&quot;label&quot;:&quot;Onita_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/Sulbactam_Onita2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulbactam_Cammarata2025_reference&quot;,&quot;label&quot;:&quot;Cammarata_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/Sulbactam_Cammarata2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulbactam_Jaruratanasirikul2019_reference&quot;,&quot;label&quot;:&quot;Jaruratanasirikul_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulbactam/Sulbactam_Jaruratanasirikul2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulbactam — `Sulbactam_Zhou2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Sulbactam's bioavailability, clearance, volume of distribution, lag time, and intercompartmental rate had no extracted values, so placeholders replaced them and the model was quarantined.

<div class="pk-model-meta" hidden drug="sulbactam" model-id="Sulbactam_Zhou2022_reference" status="model_quarantined" stale="false" population="adults with hospital-acquired or ventilator-associated pneumonia caused by Acinetobacter baumannii" measured-compound="cefoperazone/sulbactam" parameterization="mechanistic" topology="2C"></div>

## Citation
Zhou Y, Zhang J, Chen Y, Wu J, Guo B, Wu X et al. Combined PK/PD Index May Be a More Appropriate PK/PD Index for Cefoperazone/Sulbactam against. Antibiotics (Basel, Switzerland) 11(5) (2022).
  ·  DOI: [10.3390/antibiotics11050703](https://doi.org/10.3390/antibiotics11050703)

## Population and dosing

**Population:** adults with hospital-acquired or ventilator-associated pneumonia caused by Acinetobacter baumannii · condition hospital-acquired pneumonia · age group adult · n = ... (Note: The provided text does not explicitly state the number of subjects in the PPK analysis, although the abstract mentions a trial in 54 patients. Based strictly on the provided text for the PPK section, this number is not explicitly stated for the final model, but usually these match. However, 'unknown' is safer if not explicitly linked in the methods section provided. Let's look closely. The methods say '54 patients' in the abstract. I will use 54 as it is the only number provided for the study population.).

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h) | CL | 15.8 | L/h | 0.272 (None% RSE) |
| V1 (L) | V1 | 18.0 | L | 0.270 (None% RSE) |
| Q (L/h) | Q | 2.91 | L/h |  |
| V2 (L) | V2 | 5.39 | L | 0.327 (None% RSE) |
| K a | kabs | 8.28 | 1/h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Sulbactam's bioavailability, clearance, volume of distribution, lag time, and intercompartmental rate had no extracted values, so placeholders replaced them and the model was quarantined.**

The record lists specific values for sulbactam clearance, central volume, intercompartmental clearance, peripheral volume, and absorption rate, yet the review found no valid estimates for these core pharmacokinetic descriptors. Because these parameters were missing, a library placeholder was used for sulbactam's elimination and distribution terms. Consequently, the model was held back rather than published with invented numbers. Extracted — sulbactam: CL 15.8 L/h, V1 18 L, Q 2.91 L/h, V2 5.39 L; cefoperazone/sulbactam: kabs 8.28 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has cefoperazone/sulbactam, the second reading sulbactam; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 15.8 | L/h | 4.389e-06 | m3/s | l/h | exact (1) | antibiotics-11-00703-t002:row2:col4, antibiotics-11-00703-t002:row2:col5 | 0.272 (None% RSE) |
| V1 (L) | `Q63` · V1 | 18.0 | L | 0.018 | m3 | l | exact (1) | antibiotics-11-00703-t002:row3:col4, antibiotics-11-00703-t002:row3:col5 | 0.270 (None% RSE) |
| Q (L/h) | `Q30` · Q | 2.91 | L/h | 8.083e-07 | m3/s | l/h | exact (1) | antibiotics-11-00703-t002:row4:col4, antibiotics-11-00703-t002:row4:col5 |  |
| V2 (L) | `Q64` · V2 | 5.39 | L | 0.00539 | m3 | l | exact (1) | antibiotics-11-00703-t002:row5:col4, antibiotics-11-00703-t002:row5:col5 | 0.327 (None% RSE) |
| K a | `Q49` · kabs | 8.28 | 1/h | 0.0023 | 1/s | 1/h | review_gapfill (0.7) | Abouelhassan_2024_2:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'sulbactam' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q22 ('πCL', value '0.204') — already have one for this compound
- dropped unlinked row (NIL): 'CL=4.45 (L/h)V1=7.97 (L)Q=12.0 (L/h)V2=9.03×1.44(if High BP) (L)' — extend the ontology if this is a real PK parameter (source ['antibiotics-11-00703-t002:row15:col3', 'antibiotics-11-00703-t002:row15:col4', 'antibiotics-11-00703-t002:row15:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefoperazone/sulbactam
- molar mass: none found for 'cefoperazone/sulbactam' — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Abouelhassan_2024_2's review values (primary lacked it)

**Extraction notes:**
- unparsed cell antibiotics-11-00703-t002:row3:col3 = 'V1 (L)'
- unparsed cell antibiotics-11-00703-t002:row5:col3 = 'V2 (L)'
- unparsed cell antibiotics-11-00703-t002:row9:col3 = 'ωV1'
- unparsed cell antibiotics-11-00703-t002:row10:col3 = 'ωV2'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k a]` | 8.28 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | cefoperazone/sulbactam | sulbactam | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['antibiotics-11-00703-t002:row2:col4', 'antibiotics-11-00703-t002:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['antibiotics-11-00703-t002:row4:col4', 'antibiotics-11-00703-t002:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Abouelhassan_2024_2:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['antibiotics-11-00703-t002:row3:col4', 'antibiotics-11-00703-t002:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['antibiotics-11-00703-t002:row5:col4', 'antibiotics-11-00703-t002:row5:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 15.8 | ['antibiotics-11-00703-t002:row2:col4', 'antibiotics-11-00703-t002:row2:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 15.8 L/h | ['antibiotics-11-00703-t002:row2:col4', 'antibiotics-11-00703-t002:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 18 L | ['antibiotics-11-00703-t002:row3:col4', 'antibiotics-11-00703-t002:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.39 L | ['antibiotics-11-00703-t002:row5:col4', 'antibiotics-11-00703-t002:row5:col5'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sulbactam/Sulbactam_Zhou2022_reference/Sulbactam_Zhou2022_reference_matlab.zip" download>Sulbactam_Zhou2022_reference_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sulbactam/Sulbactam_Zhou2022_reference/Sulbactam_Zhou2022_reference_matlab_simbio.zip" download>Sulbactam_Zhou2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sulbactam/Sulbactam_Zhou2022_reference/Sulbactam_Zhou2022_reference_sbml.zip" download>Sulbactam_Zhou2022_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sulbactam/Sulbactam_Zhou2022_reference/Sulbactam_Zhou2022_reference_cellml.zip" download>Sulbactam_Zhou2022_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Zhou Y, Zhang J, Chen Y, Wu J, Guo B, Wu X et al. Combined PK/PD Index May Be a More Appropriate PK/PD Index for Cefoperazone/Sulbactam against. Antibiotics (Basel, Switzerland) 11(5) (2022). [doi:10.3390/antibiotics11050703](https://doi.org/10.3390/antibiotics11050703)

**This record:** Pharmacolibrary v26.09, model `Sulbactam_Zhou2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_sulbactam/Sulbactam_Zhou2022_reference>

```bibtex
@misc{pharmacolibrary_SulbactamZhou2022reference,
  title  = {{Pharmacolibrary model Sulbactam_Zhou2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_sulbactam/Sulbactam_Zhou2022_reference},
  note   = {Parameters from doi:10.3390/antibiotics11050703},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulbactam%5D%20Sulbactam_Zhou2022_reference&body=Drug%3A%20sulbactam%0ARecord%3A%20Sulbactam_Zhou2022_reference%0APaper%3A%20Zhou_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulbactam/Sulbactam_Zhou2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:29 UTC</sub>
