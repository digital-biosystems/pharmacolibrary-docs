<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;fleroxacin&quot;,&quot;href&quot;:&quot;drugs/drug_fleroxacin/&quot;},{&quot;label&quot;:&quot;Uehlinger_1996 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fleroxacin — `Fleroxacin_Uehlinger1996_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="fleroxacin" model-id="Fleroxacin_Uehlinger1996_reference" status="needs_review" stale="false" population="patients receiving regular hemodialysis" measured-compound="fleroxacin" parameterization="mechanistic" topology="1C"></div>

## Citation
Uehlinger DE, Schaedeli F, Kinzig M, Sörgel F, Frey FJ. Pharmacokinetics of fleroxacin after multiple oral dosing in patients receiving regular hemodialysis. Antimicrobial agents and chemotherapy 40(8):1903–1909 (1996).
  ·  DOI: [10.1128/AAC.40.8.1903](https://doi.org/10.1128/AAC.40.8.1903)

## Population and dosing

**Population:** patients receiving regular hemodialysis · age group elderly · n = ,
  "condition": "end-stage renal disease",
  "species": "human",
  "compounds": [
    {
      "name": "fleroxacin",
      "role": "parent",
      "dosed": "yes",
      "measured": "yes",
      "has_parameters": "yes"
    },
    {
      "name": "N-demethylfleroxacin",
      "role": "metabolite",
      "dosed": "no",
      "measured": "yes",
      "has_parameters": "yes"
    },
    {
      "name": "fleroxacin N-oxide",
      "role": "metabolite",
      "dosed": "no",
      "measured": "yes",
      "has_parameters": "yes"
    }
  ],
  "links": [
    {
      "from": "fleroxacin",
      "to": "N-demethylfleroxacin",
      "relation": "metabolism",
      "link_parameter": "formation clearance"
    },
    {
      "from": "fleroxacin",
      "to": "fleroxacin N-oxide",
      "relation": "metabolism",
      "link_parameter": "formation clearance"
    }
  ]
}.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Dialysis clearances (mean +/- standard deviation) calculated from the amount of drug recovered in the dialysate | CL_HD | 126 | ml/min |
| those calculated from rates of extraction from plasma | Q | 73 | ml/min |
| calculated steady-state volume of distribution | Vss | 84 | liters |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — fleroxacin: CL_HD 126 ml/min, Q 73 ml/min, Vss 84 liters.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fleroxacin, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Dialysis clearances (mean +/- standard deviation) calculated from the amount of drug recovered in the dialysate | `Q356` · CL_HD | 126 | ml/min | 2.1e-06 | m3/s | ml/min | llm (0.6) | Uehlinger_1996:abstract, Uehlinger_1996:abstract, Uehlinger_1996:abstract |
| those calculated from rates of extraction from plasma | `Q30` · Q | 73 | ml/min | 1.217e-06 | m3/s | ml/min | llm (0.6) | Uehlinger_1996:abstract, Uehlinger_1996:abstract, Uehlinger_1996:abstract |
| calculated steady-state volume of distribution | `Q65` · Vss | 84 | liters | 0.084 | m3 | l | llm_corrected (0.6) | Uehlinger_1996:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'estimated metabolic clearance' — extend the ontology if this is a real PK parameter (source ['Uehlinger_1996:abstract'])
- dropped unlinked row (NIL): 'coefficient of variation' — extend the ontology if this is a real PK parameter (source ['Uehlinger_1996:abstract', 'Uehlinger_1996:abstract'])
- dropped unlinked row (NIL): 'Formation clearances' — extend the ontology if this is a real PK parameter (source ['Uehlinger_1996:abstract', 'Uehlinger_1996:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fleroxacin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Uehlinger_1996_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[calculated steady-state volume of distribution]` | 84 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[dialysis clearances (mean +/- standard deviation) calculated from the amount of drug recovered in the dialysate]` | 126 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[estimated metabolic clearance]` |  | 25 | only_one_extracted |
| `gpt-oss-120b` | `parameters[formation clearance of fleroxacin n-oxide]` |  | 33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[formation clearance of n-demethylfleroxacin]` |  | 54 | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` |  | 84 | only_one_extracted |
| `gpt-oss-120b` | `parameters[those calculated from rates of extraction from plasma]` | 73 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | fleroxacin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | fleroxacin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Uehlinger_1996:abstract', 'Uehlinger_1996:abstract', 'Uehlinger_1996:abstract'] |
| C5_dimension_Q356 | pass | [length] ** 3 / [time] |  | ['Uehlinger_1996:abstract', 'Uehlinger_1996:abstract', 'Uehlinger_1996:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Uehlinger_1996:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 84 L | ['Uehlinger_1996:abstract'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfleroxacin%5D%20Fleroxacin_Uehlinger1996_reference&body=Drug%3A%20fleroxacin%0ARecord%3A%20Fleroxacin_Uehlinger1996_reference%0APaper%3A%20Uehlinger_1996%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fleroxacin/Fleroxacin_Uehlinger1996_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:53 UTC</sub>
