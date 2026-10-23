<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07B&quot;,&quot;href&quot;:&quot;atc/C07B.md&quot;},{&quot;label&quot;:&quot;metipranolol&quot;,&quot;href&quot;:&quot;drugs/drug_metipranolol/&quot;},{&quot;label&quot;:&quot;Abshagen_1982 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# metipranolol — `Metipranolol_Abshagen1982_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-10-05 09:27 UTC) predates the latest extraction (2026-10-07 01:42 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="metipranolol" model-id="Metipranolol_Abshagen1982_reference" status="extracted" stale="true" population="normal volunteers" measured-compound="deacetyl metipranolol" parameterization="apparent" topology="1C"></div>

## Citation
Abshagen U, Betzien G, Kaufmann B, Endele G. Pharmacokinetics of metipranolol in normal man. European journal of clinical pharmacology 21(4):293–301 (1982).
  ·  DOI: [10.1007/BF00637616](https://doi.org/10.1007/BF00637616)

## Population and dosing

**Population:** normal volunteers · condition healthy · age group adult · n = &gt;=47.

**Dosed compound ≠ measured compound:** dosed metipranolol, measured deacetyl metipranolol.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| lag-time | tlag | 7.3 | min |
| tmax | tmax | 50 | min |
| invasion half-life | t1/2z | 6.3 | min |
| urinary excretion of unchanged drug | fe | 4 | % of the dose |
| total ... clearances | CLm/F | 1237 | ml/min |
| renal ... clearances | CLR | 149 | ml/min |
| extra-renal ... clearances | CLNR | 1068 | ml/min |
| distribution coefficient | V | 3.5 | l/kg |
| protein binding | fu | 70 | % |
| Absolute bioavailability | Fab | 50 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.12). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; the clearance plausibility check could not be computed.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — metipranolol: tlag 7.3 min, tmax 50 min, t1/2z 6.3 min, fe 4 % of the dose, CL 1.24e+03 ml/min, CLR 149 ml/min, CLNR 1.07e+03 ml/min, fu 70 %, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has metipranolol, the second reading metipranolol; deacetyl metipranolol; it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| lag-time | `Q83` · tlag | 7.3 | min | 438 | s | min | llm (0.6) | Abshagen_1982:abstract |
| tmax | `Q56` · tmax | 50 | min | 3000 | s | min | exact (1) | Abshagen_1982:abstract |
| invasion half-life | `Q57` · t1/2z | 6.3 | min | 378 | s | min | llm (0.6) | Abshagen_1982:abstract |
| urinary excretion of unchanged drug | `Q44` · fe | 4 | % of the dose |  |  | %·ofthedose | llm_confirmed (0.6) | Abshagen_1982:abstract |
| total ... clearances | `Q351` · CLm/F | 1237 | ml/min | 2.062e-05 | m3/s | ml/min | llm (0.6) | Abshagen_1982:abstract |
| renal ... clearances | `Q26` · CLR | 149 | ml/min | 2.483e-06 | m3/s | ml/min | llm (0.6) | Abshagen_1982:abstract |
| extra-renal ... clearances | `Q79` · CLNR | 1068 | ml/min | 1.78e-05 | m3/s | ml/min | llm (0.6) | Abshagen_1982:abstract |
| distribution coefficient | `Q61` · V | 3.5 | l/kg | 0.245 | m3 | l/kg | exact (1) | Abshagen_1982:abstract |
| protein binding | `Q46` · fu | 70 | % |  |  | % | exact (1) | Abshagen_1982:abstract |
| Absolute bioavailability | `Q40` · Fab | 50 | % |  |  |  | exact (1) | Abshagen_1982:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('elimination half-life', value 3) — already have one for this compound
- unit_dimension_unknown: '% of the dose' (fe)
- linked 'distribution coefficient' as 'Vc' → Q63 (V1) for  — compound marker removed
- metabolite deacetyl metipranolol: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=deacetyl metipranolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'distribution coefficient' is the general volume)
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 11/11 row label(s) assigned, 6 linked by role; re-tagged deacetyl metipranolol→parent ×11
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Abshagen_1982_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.12 (3/25 fields) | 22 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[absolute bioavailability]` | 50 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absolute bioavailability]` |  | 50 | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution coefficient]` | 3.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution coefficient]` |  | 3.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[extra-renal ... clearances]` | 1068 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[extra-renal clearance]` |  | 1068 | only_one_extracted |
| `gpt-oss-120b` | `parameters[invasion half-life]` | 6.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[invasion half-life]` |  | 6.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag-time]` | 7.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag-time]` |  | 7.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[protein binding]` | 70 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[protein binding]` |  | 70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal ... clearances]` | 149 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` |  | 149 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 50 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` |  | 50 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total ... clearances]` | 1237 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clearance]` |  | 1237 | only_one_extracted |
| `gpt-oss-120b` | `parameters[urinary excretion of unchanged drug]` | 4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[urinary excretion of unchanged drug]` |  | 4 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | metipranolol | metipranolol; deacetyl metipranolol | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Abshagen_1982:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Abshagen_1982:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Abshagen_1982:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Abshagen_1982:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Abshagen_1982:abstract'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['Abshagen_1982:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Abshagen_1982:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 245 L | ['Abshagen_1982:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmetipranolol%5D%20Metipranolol_Abshagen1982_reference&body=Drug%3A%20metipranolol%0ARecord%3A%20Metipranolol_Abshagen1982_reference%0APaper%3A%20Abshagen_1982%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_metipranolol/Metipranolol_Abshagen1982_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 01:42 UTC</sub>
