<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;chlortetracycline&quot;,&quot;href&quot;:&quot;drugs/drug_chlortetracycline/&quot;},{&quot;label&quot;:&quot;Reinbold_2010 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# chlortetracycline — `Chlortetracycline_Reinbold2010_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Needs review), but the paper was screened again on 2026-10-04 00:02 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The chlortetracycline record was held back because the absorption rate constant ka was not reported in the paper and a default value was invented, alongside other unreported assumptions (Tlag, F=1).

<div class="pk-model-meta" hidden drug="chlortetracycline" model-id="Chlortetracycline_Reinbold2010_reference" status="needs_review" stale="true" population="group fed, ruminating, Holstein steers" measured-compound="chlortetracycline" parameterization="apparent" topology="1C"></div>

## Citation
Reinbold JB, Coetzee JF, Gehring R, Havel JA, Hollis LC, Olson KC et al. Plasma pharmacokinetics of oral chlortetracycline in group fed, ruminating, Holstein steers in a feedlot setting. Journal of veterinary pharmacology and therapeutics 33(1):76–83 (2010).
  ·  DOI: [10.1111/j.1365-2885.2009.1116.x](https://doi.org/10.1111/j.1365-2885.2009.1116.x)

## Population and dosing

**Population:** group fed, ruminating, Holstein steers · condition healthy · age group adult · n = &gt;=18.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| volume of distribution (V/F | V/F | 40.9 | L/kg) |
| rate constant (k | kel | 0.0478 | 1/h |
| dose-normalized area under the curve (AUC/D | AUC/dose | 0.29 | h x microg/L) |
| clearance (Cl/F | CL/F | 1.8 | L/kg/h) |
| elimination half-life (t(1/2) | t1/2z | 16.2 | h) |
| C(max/Dose) | Cmax/dose | 4.5 | ng/mL) |
| time of C(max) (T(max) | tmax | 23.3 | h) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The chlortetracycline record was held back because the absorption rate constant ka was not reported in the paper and a default value was invented, alongside other unreported assumptions (Tlag, F=1).**

The record was built from the abstract only, so reported summary statistics (V/F 40.9 L/kg, kel 0.0478 h⁻¹, CL/F 1.8 L/kg/h, t1/2z 16.2 h, Cmax/dose 4.5 ng/mL, tmax 23.3 h, AUC/dose 0.29 h·µg/L) stood in for a fitted model. The source never reports ka or Tlag, so library defaults were substituted, and the invented absorption constant was judged not acceptable. Because the parameters are apparent (/F) values, bioavailability was assumed to be 1 with no molar correction, and a first-order depot input was assumed for the extravascular dosing. Extracted — chlortetracycline: V/F 40.9 L/kg, kel 0.0478 h(-1), AUC/dose 0.29 h x microg/L, CL/F 1.8 L/kg/h, t1/2z 16.2 h, Cmax/dose 4.5 ng/mL, tmax 23.3 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has chlortetracycline, the second reading chlortetracycline HCl; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| volume of distribution (V/F | `Q76` · V/F | 40.9 | L/kg) | 2.863 | m3 | l/kg | llm_corrected (0.6) | Reinbold_2010:abstract |
| rate constant (k | `Q47` · kel | 0.0478 | 1/h | 1.328e-05 | 1/s | 1/h | llm (0.6) | Reinbold_2010:abstract |
| dose-normalized area under the curve (AUC/D | `Q189` · AUC/dose | 0.29 | h x microg/L) |  |  | (h·µg)/l | llm_corrected (0.6) | Reinbold_2010:abstract |
| clearance (Cl/F | `Q27` · CL/F | 1.8 | L/kg/h) | 3.5e-05 | m3/s | l/(h·kg) | llm_corrected (0.6) | Reinbold_2010:abstract |
| elimination half-life (t(1/2) | `Q57` · t1/2z | 16.2 | h) | 5.832e+04 | s | h | llm (0.6) | Reinbold_2010:abstract |
| C(max/Dose) | `Q174` · Cmax/dose | 4.5 | ng/mL) |  |  | ng/ml | llm (0.6) | Reinbold_2010:abstract |
| time of C(max) (T(max) | `Q56` · tmax | 23.3 | h) | 8.388e+04 | s | h | llm (0.6) | Reinbold_2010:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'L/kg)' (V/F)
- unit_dimension_unknown: 'h(-1))' (kel)
- unit_dimension_unknown: 'h x microg/L)' (AUC/dose)
- unit_dimension_unknown: 'L/kg/h)' (CL/F)
- unit_dimension_unknown: 'h)' (t1/2z)
- unit_dimension_unknown: 'ng/mL)' (Cmax/dose)
- unit_dimension_unknown: 'h)' (tmax)
- implicit units: 'rate constant (k' → 1/h (from the popPK convention: 'Elimination rate constants are first-order rate constants, conventionally expressed in reciprocal time units (1/h) in po')
- implicit units: 'dose-normalized area under the curve (AUC/D' — the LLM proposed 'L/h', whose dimension does not fit Q189; left unset
- implicit units: 'C(max/Dose)' — the LLM proposed 'L', whose dimension does not fit Q174; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=chlortetracycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Reinbold_2010_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc/d]` |  | 0.29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 1.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance (cl/f]` | 1.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose-normalized area under the curve (auc/d]` | 0.29 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 16.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k]` |  | 0.0478 | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate constant (k]` | 0.0478 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t]` |  | 16.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time of c(max)]` | 23.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  | 40.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution (v/f]` | 40.9 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | chlortetracycline | chlortetracycline HCl | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Reinbold_2010:abstract'] |
| C5_unit_missing_Q174 | fail | [mass] / [length] ** 3 | ng/mL) | ['Reinbold_2010:abstract'] |
| C5_unit_missing_Q189 | fail | [mass] * [time] / [length] ** 3 | h x microg/L) | ['Reinbold_2010:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 126 L/h | ['Reinbold_2010:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.86e+03 L | ['Reinbold_2010:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=chlortetracycline) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference/Chlortetracycline_Reinbold2010_reference_modelica.zip" download>Chlortetracycline_Reinbold2010_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference/Chlortetracycline_Reinbold2010_reference_fmi.zip" download>Chlortetracycline_Reinbold2010_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference/Chlortetracycline_Reinbold2010_reference_matlab.zip" download>Chlortetracycline_Reinbold2010_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference/Chlortetracycline_Reinbold2010_reference_matlab_simbio.zip" download>Chlortetracycline_Reinbold2010_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference/Chlortetracycline_Reinbold2010_reference_sbml.zip" download>Chlortetracycline_Reinbold2010_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference/Chlortetracycline_Reinbold2010_reference_cellml.zip" download>Chlortetracycline_Reinbold2010_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Reinbold JB, Coetzee JF, Gehring R, Havel JA, Hollis LC, Olson KC et al. Plasma pharmacokinetics of oral chlortetracycline in group fed, ruminating, Holstein steers in a feedlot setting. Journal of veterinary pharmacology and therapeutics 33(1):76–83 (2010). [doi:10.1111/j.1365-2885.2009.1116.x](https://doi.org/10.1111/j.1365-2885.2009.1116.x)

**This record:** Pharmacolibrary v26.09, model `Chlortetracycline_Reinbold2010_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference>

```bibtex
@misc{pharmacolibrary_ChlortetracyclineReinbold2010reference,
  title  = {{Pharmacolibrary model Chlortetracycline_Reinbold2010_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference},
  note   = {Parameters from doi:10.1111/j.1365-2885.2009.1116.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchlortetracycline%5D%20Chlortetracycline_Reinbold2010_reference&body=Drug%3A%20chlortetracycline%0ARecord%3A%20Chlortetracycline_Reinbold2010_reference%0APaper%3A%20Reinbold_2010%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-04 00:02 UTC</sub>
