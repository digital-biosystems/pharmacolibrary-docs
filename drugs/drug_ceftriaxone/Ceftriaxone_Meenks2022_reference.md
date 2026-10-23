<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceftriaxone&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/&quot;},{&quot;label&quot;:&quot;Meenks_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ceftriaxone_Alonso2021_reference&quot;,&quot;label&quot;:&quot;Alonso_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_Alonso2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ceftriaxone_Kumar2010_reference&quot;,&quot;label&quot;:&quot;Kumar_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ceftriaxone_RoubaudBaudron2025_reference&quot;,&quot;label&quot;:&quot;Roubaud-Baudron_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ceftriaxone — `Ceftriaxone_Meenks2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="ceftriaxone" model-id="Ceftriaxone_Meenks2022_reference" status="needs_review" stale="false" population="critically ill patients" measured-compound="unbound ceftriaxone" parameterization="mechanistic" topology="1C"></div>

## Citation
Meenks SD, le Noble JLML, Foudraine NA, de Vries F, Neef K, Janssen PKC. Population pharmacokinetics of unbound ceftriaxone in a critically ill population. International journal of clinical pharmacology and therapeutics 60(9):373–383 (2022).
  ·  DOI: [10.5414/CP204181](https://doi.org/10.5414/CP204181)

## Population and dosing

**Population:** critically ill patients · condition critically ill · age group adult · n = # This was a prospective, single-center, observational study of critically ill patients treated with ceftriaxone. Unbound serum ceftriaxone concentrations were measured using validated ultrafiltration and ultra-performance liquid chromatography-tandem mass spectrometry. PK analysis and dosing simulations were performed using an iterative 2-stage Bayesian fitting procedure and Monte Carlo simulations. The PK/pharmacodynamics (PD) target was attained when unbound serum ceftriaxone concentrations exceeded 4 times the minimum inhibitory concentration (MIC) for ≥ 60% of the dosing interval (ƒT&gt;4xMIC ≥ 60%). RESULTS: 91 patients were enrolled, and 173 unbound ceftriaxone concentrations were acquired. The population PK parameter estimates were hepatic clearance 5.2 ± 0.9 L/h/1.85m2, the unbound renal clearance of ceftriaxone divided by the creatinine clearance 0.61 ± 0.24, lean body mass corrected volume of distribution of the central compartment 0.82 ± 0.21 L/kg, and intercompartmental distribution rate constant from central to peripheral compartment 0.18 ± 0.08 h-1. Dosing simulations predicted ƒT&gt;4 mg/L of 88% (95% CI: 69 - 100%) for 2,000 mg ceftriaxone once daily and ƒT&gt;4 mg/L of 100% (95% CI: 100 - 100%) both for 1,000 mg twice daily and continuous infusion of 2,000 mg daily. CONCLUSION: We developed a reliable population PK model for unbound ceftriaxone in a critically ill population. Dosing simulations revealed ƒT&gt;4 mg/L ≥ 60% for 1,000 mg twice daily and 2,000 mg once daily or by continuous infusion..

**Dosed compound ≠ measured compound:** dosed ceftriaxone, measured unbound ceftriaxone.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| hepatic clearance | CLH | 5.2 | L/h |
| lean body mass corrected volume of distribution of the central compartment | V | 0.82 | L/kg |
| intercompartmental distribution rate constant from central to peripheral compartment | kcomp | 0.18 | h-1 |
| Ka (h−1)   1 0.55 | kabs | 1.0 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is ceftriaxone's own; they describe unbound ceftriaxone. Extracted — unbound ceftriaxone: CLH 5.2 L/h, V 0.82 L/kg, kcomp 0.18 h-1, kabs 1 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has unbound ceftriaxone, the second reading ceftriaxone; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| hepatic clearance | `Q25` · CLH | 5.2 | L/h | 1.444e-06 | m3/s | L/h | exact (1) | Meenks_2022:abstract |
| lean body mass corrected volume of distribution of the central compartment | `Q61` · V | 0.82 | L/kg | 0.0574 | m3 | l/kg | boundary_compartment (0.9) | Meenks_2022:abstract |
| intercompartmental distribution rate constant from central to peripheral compartment | `Q48` · kcomp | 0.18 | h-1 | 5e-05 | 1/s | 1/h | boundary_llm_dim_refused (0.8) | Meenks_2022:abstract |
| Ka (h−1)   1 0.55 | `Q49` · kabs | 1.0 | h−1 | 0.0002778 | 1/s | 1/h | review_gapfill (0.7) | Alonso_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'L/h/1.85m2' (CLH)
- dropped unlinked row (NIL): 'the unbound renal clearance of ceftriaxone divided by the creatinine clearance' — extend the ontology if this is a real PK parameter (source ['Meenks_2022:abstract'])
- implicit units: 'hepatic clearance' → L/h (from the popPK convention: 'Clearance parameters in population pharmacokinetics are conventionally expressed in L/h. A value of 5.2 is consistent wi')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=unbound ceftriaxone
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'lean body mass corrected volume of distribution of the central compartment' is the general volume)
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Alonso_2021's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Meenks_2022_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[hepatic clearance]` |  | 5.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[hepatic clearance]` | 5.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental distribution rate constant from central to peripheral compartment]` |  | 0.18 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental distribution rate constant from central to peripheral compartment]` | 0.18 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka (h-1) 1 0.55]` | 1.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lean body mass corrected volume of distribution of the central compartment]` |  | 0.82 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lean body mass corrected volume of distribution of the central compartment]` | 0.82 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[unbound renal clearance of ceftriaxone divided by the creatinine clearance]` |  | 0.61 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | unbound ceftriaxone | ceftriaxone | mismatch |

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
| C5_dimension_Q25 | pass | [length] ** 3 / [time] |  | ['Meenks_2022:abstract'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Meenks_2022:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Alonso_2021:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Meenks_2022:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 57.4 L | ['Meenks_2022:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bceftriaxone%5D%20Ceftriaxone_Meenks2022_reference&body=Drug%3A%20ceftriaxone%0ARecord%3A%20Ceftriaxone_Meenks2022_reference%0APaper%3A%20Meenks_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ceftriaxone/Ceftriaxone_Meenks2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:45 UTC</sub>
