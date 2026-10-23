<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;lamotrigine&quot;,&quot;href&quot;:&quot;drugs/drug_lamotrigine/&quot;},{&quot;label&quot;:&quot;Karanam_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lamotrigine_Huo2025_base&quot;,&quot;label&quot;:&quot;Huo_2025_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lamotrigine/Lamotrigine_Huo2025_base.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lamotrigine_Huo2025_final&quot;,&quot;label&quot;:&quot;Huo_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lamotrigine/Lamotrigine_Huo2025_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lamotrigine — `Lamotrigine_Karanam2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:38 UTC) predates the latest extraction (2026-10-07 07:02 UTC); the status shown comes from the current checks. The lamotrigine record was held back because the absorption rate constant ka was not reported in the source and a default was invented, alongside other builder deviations.

<div class="pk-model-meta" hidden drug="lamotrigine" model-id="Lamotrigine_Karanam2025_reference" status="needs_review" stale="true" population="women with epilepsy (pregnant and nonpregnant)" measured-compound="lamotrigine" parameterization="mechanistic" topology="1C"></div>

## Citation
Karanam A, Pennell PB, Meador KJ, Long Y, Birnbaum AK. Characterization of lamotrigine disposition changes during and after pregnancy in women with epilepsy. Pharmacotherapy 45(1):33–42 (2025).
  ·  DOI: [10.1002/phar.4640](https://doi.org/10.1002/phar.4640)

## Population and dosing

**Population:** women with epilepsy (pregnant and nonpregnant) · condition epilepsy · age group mixed · n = , 221.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLBL (L/hour) | CL | 2.79 | L/hour | 3 |
| P2 (%) | equation variable | 9.04 |  | 30 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lamotrigine record was held back because the absorption rate constant ka was not reported in the source and a default was invented, alongside other builder deviations.**

The model builder substituted library defaults for the missing absorption rate constant ka and lag time Tlag, and the invented absorption was judged not acceptable. The clearance parameter 'nonpregnant clearance' is reported as 0.33 fold, a unit that could not be converted to SI, so it entered the model without an SI value. The model also assumes F=1 and Fm=1 with no molar correction, giving an apparent (/F) parameterization with first-order depot input. A second reader disagreed on several parameter entries, reading 2.9 and 130 as ranges and leaving the clearance values null. Extracted — lamotrigine: V/F 130 L, CL/F 2.9 L/hour, CL 0.33 fold.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lamotrigine, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLBL (L/hour) | `Q22` · CL | 2.79 | L/hour | 7.75e-07 | m3/s | l/h | 3 | llm (0.6) | phar4640-tbl-0002:row1:col1, phar4640-tbl-0002:row1:col3 |
| P2 (%) | `Q900` · equation variable | 9.04 |  |  |  |  | 30 | llm (0.6) | phar4640-tbl-0002:row5:col1, phar4640-tbl-0002:row5:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Emax (L/hour)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['phar4640-tbl-0002:row2:col1', 'phar4640-tbl-0002:row2:col3'])
- dropped PD-category row 'EC50 (weeks)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['phar4640-tbl-0002:row3:col1', 'phar4640-tbl-0002:row3:col3'])
- dropped PD-category row 'Kdeg (1/weeks)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['phar4640-tbl-0002:row4:col1'])
- dropped unlinked row (NIL): 'Estrogen‐based medications (%)' — extend the ontology if this is a real PK parameter (source ['phar4640-tbl-0002:row6:col1', 'phar4640-tbl-0002:row6:col3'])
- dropped diagnostic row 'Enzyme‐inducing ASM (%)' → Q318 (shrinkage) — reported statistic, not a parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lamotrigine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clbl].parameter_id` | Q22 | Q23 | mismatch |
| `gpt-oss-120b` | `parameters[p2]` | 9.04 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | lamotrigine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lamotrigine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['phar4640-tbl-0002:row1:col1', 'phar4640-tbl-0002:row1:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.79 | ['phar4640-tbl-0002:row1:col1', 'phar4640-tbl-0002:row1:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.79 L/h | ['phar4640-tbl-0002:row1:col1', 'phar4640-tbl-0002:row1:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=lamotrigine) | central.C | output must be the measured/analyte compartment |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference/Lamotrigine_Karanam2025_reference_modelica.zip" download>Lamotrigine_Karanam2025_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference/Lamotrigine_Karanam2025_reference_fmi.zip" download>Lamotrigine_Karanam2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference/Lamotrigine_Karanam2025_reference_matlab.zip" download>Lamotrigine_Karanam2025_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference/Lamotrigine_Karanam2025_reference_matlab_simbio.zip" download>Lamotrigine_Karanam2025_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference/Lamotrigine_Karanam2025_reference_sbml.zip" download>Lamotrigine_Karanam2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference/Lamotrigine_Karanam2025_reference_cellml.zip" download>Lamotrigine_Karanam2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Karanam A, Pennell PB, Meador KJ, Long Y, Birnbaum AK. Characterization of lamotrigine disposition changes during and after pregnancy in women with epilepsy. Pharmacotherapy 45(1):33–42 (2025). [doi:10.1002/phar.4640](https://doi.org/10.1002/phar.4640)

**This record:** Pharmacolibrary v26.09, model `Lamotrigine_Karanam2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference>

```bibtex
@misc{pharmacolibrary_LamotrigineKaranam2025reference,
  title  = {{Pharmacolibrary model Lamotrigine_Karanam2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference},
  note   = {Parameters from doi:10.1002/phar.4640},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blamotrigine%5D%20Lamotrigine_Karanam2025_reference&body=Drug%3A%20lamotrigine%0ARecord%3A%20Lamotrigine_Karanam2025_reference%0APaper%3A%20Karanam_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:02 UTC</sub>
