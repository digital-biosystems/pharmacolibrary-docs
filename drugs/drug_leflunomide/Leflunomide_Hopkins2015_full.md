<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;leflunomide&quot;,&quot;href&quot;:&quot;drugs/drug_leflunomide/&quot;},{&quot;label&quot;:&quot;Hopkins_2015 \u00b7 full&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# leflunomide — `Leflunomide_Hopkins2015_full`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.455). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. None of the extracted parameters is leflunomide's own; they describe teriflunomide. Extracted — teriflunomide: fm 0.65, CL 176 L/day, V 7.95 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has leflunomide, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `leflunomide`, measured `teriflunomide`.

## Citation
Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015)
  ·  DOI: [10.1002/psp4.46](https://doi.org/10.1002/psp4.46)

<div class="pk-model-meta" hidden drug="leflunomide" model-id="Leflunomide_Hopkins2015_full" status="needs_review" stale="false" population="rheumatoid arthritis patients" measured-compound="teriflunomide" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| MFCLL (θ1) | `Q45` · fm | 0.65 | not captured | not captured | not captured | not captured | exact (1.0) | tbl1:row22:col6 | — | not captured |
| LGTFU (θ2) | `Q900` · equation variable | -6.15 | not captured | not captured | not captured | not captured | llm (0.6) | tbl1:row25:col6 | — | not captured |
| CLINT (θ3) (L/day/70 kg FFM) | `Q22` · CL | 176 | L/day | 2.037037037037037e-06 | L/h | not captured | exact (1.0) | tbl1:row27:col6 | — | not captured |
| VBODY (θ5) (L/70 kg FFM) | `Q61` · V | 7.95 | L | 0.00795 | L | not captured | exact (1.0) | tbl1:row29:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'OBJ' — extend the ontology if this is a real PK parameter (source ['tbl1:row1:col6'])
- unit_dimension_unknown: 'L/day/70 kg FFM' (CL)
- dropped unlinked row (NIL): 'QBILE (θ4) (L/day/70 kg FFM)' — extend the ontology if this is a real PK parameter (source ['tbl1:row28:col6'])
- unit_dimension_unknown: 'L/70 kg FFM' (V1)
- dropped unlinked row (NIL): 'COVALT(θ6)' — extend the ontology if this is a real PK parameter (source ['tbl1:row30:col6'])
- dropped unlinked row (NIL): 'FU η (η1) (ω1; SD)' — extend the ontology if this is a real PK parameter (source ['tbl1:row32:col6'])
- dropped unlinked row (NIL): 'VBODY (η3) (ω3; %CV)' — extend the ontology if this is a real PK parameter (source ['tbl1:row36:col6'])
- dropped unlinked row (NIL): '(σ1; %CV)' — extend the ontology if this is a real PK parameter (source ['tbl1:row40:col6'])
- dropped unlinked row (NIL): '(σ2; %CV)' — extend the ontology if this is a real PK parameter (source ['tbl1:row43:col6'])
- dropped unlinked row (NIL): '(σ3; %CV)' — extend the ontology if this is a real PK parameter (source ['tbl1:row46:col6'])
- implicit units: 'CLINT (θ3) (L/day/70 kg FFM)' → L/day (from the popPK convention: "The table caption and text do not explicitly state the unit for the column value. However, the text states 'The typical ")
- implicit units: 'VBODY (θ5) (L/70 kg FFM)' → L (from the popPK convention: "The table caption and text do not explicitly state the unit for the column value. The text mentions teriflunomide's volu")
- metabolite volume: 'VBODY (θ5) (L/70 kg FFM)' Q63→Q61 for teriflunomide — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=teriflunomide
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site presystemic: 'Grabar et al.11 used a one-compartment population model and data from 71 patients, showing the loss-of-function CYP2C19*')
- model-stage split: 'covariate model' is the full model of Hopkins_2015 (paper reports 4 stages: base model, covariate model, initial literature estimate, mfcll); same population, different model-building step
- row roles (LLM): model_class=pbpk; 37/37 row label(s) assigned, 25 linked by role; re-tagged leflunomide→parent ×9, leflunomide→teriflunomide ×44
- review gap-fill skipped: this record measures 'teriflunomide', not leflunomide — the review values are the parent's

**Extraction notes:**
- table tbl1: unbound_uncertainty
- table tbl1: unparsed_numeric_cell
- companion parameter table 3 transcribed (10 record(s), model stage 'base')
- LLM selected parameter table(s) 1, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.455 (5/11 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[lgtfu]` | not captured | -6.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lgtfu]` | -6.15 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mfcll].parameter_id` | Q305 | Q45 | mismatch |
| `gpt-oss-120b` | `parameters[qbile (θ4)]` | not captured | 1870 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | leflunomide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | teriflunomide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl1:row27:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl1:row29:col6'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 176.0 | not captured | not captured | ['tbl1:row27:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.33 L/h | not captured | not captured | ['tbl1:row27:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 7.95 L | not captured | not captured | ['tbl1:row29:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_leflunomide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hopkins_2015` / `Hopkins_2015::full`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 04:08 UTC</sub>
