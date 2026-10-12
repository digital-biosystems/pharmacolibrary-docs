<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;liraglutide&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/&quot;},{&quot;label&quot;:&quot;Overgaard_2016 \u00b7 trial_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Liraglutide_Carlsson2021_reference&quot;,&quot;label&quot;:&quot;Carlsson_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Liraglutide_Woodward2014_reference&quot;,&quot;label&quot;:&quot;Woodward_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Woodward2014_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Guo_2025_Weight&quot;,&quot;label&quot;:&quot;Guo_2025 \u00b7 \u0394\u0394Weight&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/pd_Guo_2025_Weight.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# liraglutide — `Liraglutide_Overgaard2016_trial_2`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No model parameters were extracted from this paper.**

Nothing in the extracted data describes the drug's disposition, so there is no model to build.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of 1.8: this record has none, the second reading 191; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:29.636327+00:00) predates the upstream re-run (2026-10-04 22:40:13.084063+00:00). Current validate status: `needs_review`.

## Citation
Overgaard RV et al., Liraglutide 3.0 mg for Weight Managemen…, Clinical pharmacokinetics (2016)
  ·  DOI: [10.1007/s40262-016-0410-7](https://doi.org/10.1007/s40262-016-0410-7)

<div class="pk-model-meta" hidden drug="liraglutide" model-id="Liraglutide_Overgaard2016_trial_2" status="needs_review" stale="true" population="overweight and obese adults" measured-compound="liraglutide" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 1 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 78 | % | not captured | % | not captured | exact (1.0) | Overgaard_2016:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '[N = 2339]' — extend the ontology if this is a real PK parameter (source ['Tab1:row1:col2'])
- dropped unlinked row (NIL): '1.8' — extend the ontology if this is a real PK parameter (source ['Tab1:row3:col2'])
- dropped unlinked row (NIL): '3.0' — extend the ontology if this is a real PK parameter (source ['Tab1:row4:col2'])
- dropped unlinked row (NIL): 'Female' — extend the ontology if this is a real PK parameter (source ['Tab1:row6:col2'])
- dropped unlinked row (NIL): 'Male' — extend the ontology if this is a real PK parameter (source ['Tab1:row7:col2'])
- dropped unlinked row (NIL): 'Mean (SD)' — extend the ontology if this is a real PK parameter (source ['Tab1:row9:col2', 'Tab1:row24:col2', 'Tab1:row27:col2', 'Tab1:row30:col2', 'Tab1:row34:col2', 'Tab1:row37:col2', 'Tab1:row40:col2'])
- dropped unlinked row (NIL): '≥75' — extend the ontology if this is a real PK parameter (source ['Tab1:row10:col2'])
- dropped unlinked row (NIL): '70–74' — extend the ontology if this is a real PK parameter (source ['Tab1:row11:col2'])
- dropped unlinked row (NIL): '65–69' — extend the ontology if this is a real PK parameter (source ['Tab1:row12:col2'])
- dropped unlinked row (NIL): '18–64' — extend the ontology if this is a real PK parameter (source ['Tab1:row13:col2'])
- dropped unlinked row (NIL): 'White' — extend the ontology if this is a real PK parameter (source ['Tab1:row15:col2'])
- dropped unlinked row (NIL): 'Black/African American' — extend the ontology if this is a real PK parameter (source ['Tab1:row16:col2'])
- dropped unlinked row (NIL): 'Asian' — extend the ontology if this is a real PK parameter (source ['Tab1:row17:col2'])
- dropped unlinked row (NIL): 'Other' — extend the ontology if this is a real PK parameter (source ['Tab1:row18:col2'])
- dropped unlinked row (NIL): 'Hispanic or Latino' — extend the ontology if this is a real PK parameter (source ['Tab1:row20:col2'])
- dropped unlinked row (NIL): 'Non-Hispanic or -Latino' — extend the ontology if this is a real PK parameter (source ['Tab1:row21:col2'])
- dropped unlinked row (NIL): 'Range' — extend the ontology if this is a real PK parameter (source ['Tab1:row25:col2', 'Tab1:row28:col2', 'Tab1:row31:col2', 'Tab1:row35:col2', 'Tab1:row38:col2', 'Tab1:row41:col2'])
- dropped unlinked row (NIL): '&lt;29.9' — extend the ontology if this is a real PK parameter (source ['Tab1:row43:col2'])
- dropped unlinked row (NIL): '30–34.9' — extend the ontology if this is a real PK parameter (source ['Tab1:row44:col2'])
- dropped unlinked row (NIL): '35–39.9' — extend the ontology if this is a real PK parameter (source ['Tab1:row45:col2'])
- dropped unlinked row (NIL): '≥40' — extend the ontology if this is a real PK parameter (source ['Tab1:row46:col2'])
- dropped unlinked row (NIL): 'Normoglycaemic' — extend the ontology if this is a real PK parameter (source ['Tab1:row48:col2'])
- dropped unlinked row (NIL): 'Prediabetic' — extend the ontology if this is a real PK parameter (source ['Tab1:row49:col2'])
- dropped unlinked row (NIL): 'Type 2 diabetes' — extend the ontology if this is a real PK parameter (source ['Tab1:row50:col2'])
- dropped unlinked row (NIL): '≥90 (normal)' — extend the ontology if this is a real PK parameter (source ['Tab1:row52:col2'])
- dropped unlinked row (NIL): '≥60 and &lt;90 (mild)' — extend the ontology if this is a real PK parameter (source ['Tab1:row53:col2'])
- dropped unlinked row (NIL): '≥30 and &lt;60 (moderate)' — extend the ontology if this is a real PK parameter (source ['Tab1:row54:col2'])
- dropped unlinked row (NIL): '&lt;30 (severe)' — extend the ontology if this is a real PK parameter (source ['Tab1:row55:col2'])
- table mostly unlinked (28/28 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q27 ('CL/F'=78) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=liraglutide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'trial 2' subgroup of Overgaard_2016 (paper reports 3 populations: total, trial 1, trial 2)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) S1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.714 (5/7 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[1.8]` | not captured | 191 | only_one_extracted |
| `gpt-oss:120b` | `parameters[normoglycaemic]` | not captured | 0 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | % | not captured | not captured | ['Overgaard_2016:other_prose'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_liraglutide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Overgaard_2016` / `Overgaard_2016::trial_2`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 22:40 UTC</sub>
