<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;radium (223Ra) dichloride&quot;,&quot;href&quot;:&quot;drugs/drug_radium_223ra_dichloride/&quot;},{&quot;label&quot;:&quot;H\u00f6llriegl_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# radium (223Ra) dichloride — `Radium223raDichloride_Hllriegl2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.143), gpt-oss:120b (primary re-run, agreement 0.333). Primary extraction retained.">cross-check: partial 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model; c5 dimension mismatch on a structural parameter (+1 more).**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Q, Q3 and Css), so that value has no SI equivalent. Extracted — radium 223ra dichloride: Q 0.0046 d−1, Q3 0.00038 d−1, Css 0.0019 d−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has radium_223ra_dichloride, the second reading radium-223 dichloride; it also differs on 5 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `radium_223ra_dichloride`, measured `radium_223ra`.

## Citation
Höllriegl V et al., Radiopharmacokinetic modelling and radi…, EJNMMI physics (2021)
  ·  DOI: [10.1186/s40658-021-00388-1](https://doi.org/10.1186/s40658-021-00388-1)

<div class="pk-model-meta" hidden drug="radium (223Ra) dichloride" model-id="Radium223raDichloride_Hllriegl2021_reference" status="rejected" stale="false" population="patients with metastatic castration-resistant prostate cancer" measured-compound="radium_223ra" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Exch trabecular bone volume | `Q30` · Q | 0.0046 | d−1 | not captured | [1] / [d] | not captured | llm_corrected (0.6) | Tab2:row23:col2, Tab2:row24:col2 | — | not captured |
| Trabecular marrow 2 | `Q308` · Q3 | 0.00038 | d−1 | not captured | [1] / [d] | not captured | llm (0.6) | Tab2:row28:col2 | — | not captured |
| Kidneys 2 | `Q34` · Css | 0.0019 | d−1 | not captured | [1] / [d] | not captured | llm (0.6) | Tab2:row58:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Blood'; source reconciliation required
- table representations disagree for 'Liver 1'; source reconciliation required
- table representations disagree for 'Liver 2'; source reconciliation required
- table representations disagree for 'ST0'; source reconciliation required
- table representations disagree for 'ST1'; source reconciliation required
- table representations disagree for 'ST2'; source reconciliation required
- table representations disagree for 'Cortical bone surface'; source reconciliation required
- table representations disagree for 'Exch cortical bone volume'; source reconciliation required
- table representations disagree for 'Nonexch cortical bone volume'; source reconciliation required
- table representations disagree for 'Trabecular bone surface'; source reconciliation required
- table representations disagree for 'Exch trabecular bone volume'; source reconciliation required
- table representations disagree for 'Nonexch trabecular bone volume'; source reconciliation required
- table representations disagree for 'Trabecular marrow 0'; source reconciliation required
- table representations disagree for 'Trabecular marrow 1'; source reconciliation required
- table representations disagree for 'Trabecular marrow 2'; source reconciliation required
- table representations disagree for 'Cortical marrow 0'; source reconciliation required
- table representations disagree for 'Cortical marrow 1'; source reconciliation required
- table representations disagree for 'Cortical marrow 2'; source reconciliation required
- table representations disagree for 'Skin 0'; source reconciliation required
- table representations disagree for 'Skin 1'; source reconciliation required
- table representations disagree for 'Skin 2'; source reconciliation required
- table representations disagree for 'Spleen 0'; source reconciliation required
- table representations disagree for 'Spleen 1'; source reconciliation required
- table representations disagree for 'Spleen 2'; source reconciliation required
- table representations disagree for 'Testes 0'; source reconciliation required
- table representations disagree for 'Testes 1'; source reconciliation required
- table representations disagree for 'Testes 2'; source reconciliation required
- table representations disagree for 'Kidneys 1'; source reconciliation required
- table representations disagree for 'Kidneys 2'; source reconciliation required
- table representations disagree for 'Right colon content'; source reconciliation required
- table representations disagree for 'Left colon content'; source reconciliation required
- table representations disagree for 'Recto sigmoid content'; source reconciliation required
- table representations disagree for 'Urinary bladder content'; source reconciliation required
- dropped unlinked row (NIL): 'Blood' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col2', 'Tab2:row2:col2', 'Tab2:row3:col2', 'Tab2:row4:col2', 'Tab2:row5:col2', 'Tab2:row6:col2', 'Tab2:row7:col2', 'Tab2:row8:col2', 'Tab2:row9:col2', 'Tab2:row29:col2', 'Tab2:row30:col2', 'Tab2:row31:col2', 'Tab2:row35:col2', 'Tab2:row36:col2', 'Tab2:row37:col2', 'Tab2:row38:col2', 'Tab2:row39:col2', 'Tab2:row40:col2', 'Tab2:row41:col2', 'Tab2:row42:col2', 'Tab2:row43:col2', 'Tab2:row44:col2', 'Tab2:row45:col2', 'Tab2:row46:col2'])
- dropped unlinked row (NIL): 'Liver 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col2', 'Tab2:row12:col2'])
- dropped unlinked row (NIL): 'Liver 2' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col2'])
- dropped unlinked row (NIL): 'ST0' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col2'])
- dropped unlinked row (NIL): 'ST1' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col2'])
- dropped unlinked row (NIL): 'ST2' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col2'])
- dropped unlinked row (NIL): 'Cortical bone surface' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col2', 'Tab2:row17:col2'])
- dropped unlinked row (NIL): 'Exch cortical bone volume' — extend the ontology if this is a real PK parameter (source ['Tab2:row18:col2', 'Tab2:row19:col2'])
- dropped unlinked row (NIL): 'Nonexch cortical bone volume' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col2'])
- dropped unlinked row (NIL): 'Trabecular bone surface' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col2', 'Tab2:row22:col2'])
- unit_dimension_mismatch: 'Exch trabecular bone volume' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Nonexch trabecular bone volume' — extend the ontology if this is a real PK parameter (source ['Tab2:row25:col2'])
- dropped unlinked row (NIL): 'Trabecular marrow 0' — extend the ontology if this is a real PK parameter (source ['Tab2:row26:col2'])
- dropped unlinked row (NIL): 'Trabecular marrow 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row27:col2'])
- unit_dimension_mismatch: 'Trabecular marrow 2' → Q308 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Cortical marrow 0' — extend the ontology if this is a real PK parameter (source ['Tab2:row32:col2'])
- dropped unlinked row (NIL): 'Cortical marrow 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row33:col2'])
- dropped unlinked row (NIL): 'Cortical marrow 2' — extend the ontology if this is a real PK parameter (source ['Tab2:row34:col2'])
- dropped unlinked row (NIL): 'Skin 0' — extend the ontology if this is a real PK parameter (source ['Tab2:row47:col2'])
- dropped unlinked row (NIL): 'Skin 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row48:col2'])
- dropped unlinked row (NIL): 'Skin 2' — extend the ontology if this is a real PK parameter (source ['Tab2:row49:col2'])
- unit_dimension_mismatch: 'Spleen 0' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('Spleen 0', value '6.98') — already have one for this compound
- dropped unlinked row (NIL): 'Spleen 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row51:col2'])
- dropped unlinked row (NIL): 'Spleen 2' — extend the ontology if this is a real PK parameter (source ['Tab2:row52:col2'])
- dropped unlinked row (NIL): 'Testes 0' — extend the ontology if this is a real PK parameter (source ['Tab2:row53:col2'])
- dropped unlinked row (NIL): 'Testes 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row54:col2'])
- dropped unlinked row (NIL): 'Testes 2' — extend the ontology if this is a real PK parameter (source ['Tab2:row55:col2'])
- dropped unlinked row (NIL): 'Kidneys 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row56:col2', 'Tab2:row57:col2'])
- unit_dimension_mismatch: 'Kidneys 2' → Q34 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Right colon content' — extend the ontology if this is a real PK parameter (source ['Tab2:row59:col2'])
- dropped unlinked row (NIL): 'Left colon content' — extend the ontology if this is a real PK parameter (source ['Tab2:row60:col2'])
- dropped unlinked row (NIL): 'Recto sigmoid content' — extend the ontology if this is a real PK parameter (source ['Tab2:row61:col2'])
- dropped unlinked row (NIL): 'Urinary bladder content' — extend the ontology if this is a real PK parameter (source ['Tab2:row62:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=radium_223ra
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 6 first-order transfer(s) across 7 compounds → general_linear
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=pbpk; 33/33 row label(s) assigned, 0 linked by role
- molar mass: no plausible PubChem entry for 'radon_219' ('Radon 219') — left in mass units
- molar mass: no plausible PubChem entry for 'polonium_215' ('Polonium 215') — left in mass units
- molar mass: no plausible PubChem entry for 'polonium_211' ('Polonium 211') — left in mass units
- molar mass: none found for 'radon_219' — its concentrations stay mass-only
- molar mass: none found for 'polonium_215' — its concentrations stay mass-only
- molar mass: none found for 'polonium_211' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'radium_223ra', not radium_223ra_dichloride — the review values are the parent's

**Extraction notes:**
- table Tab2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | primary re-run | 0.143 (1/7 fields) | 6 |
| `gpt-oss:120b` | primary re-run | 0.333 (3/9 fields) | 6 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['radium_223ra_dichloride', 'radon_219', 'metabolism'], ['radon_219', 'polonium_215', 'metabolism'], ['polonium_215', 'lead_211', 'metabolism'], ['lead_211', 'bismuth_211', 'metabolism'], ['bismuth_211', 'polonium_211', 'metabolism'], ['polonium_211', 'thallium_207', 'metabolism']] | [['radium-223', '219rn', 'interconversion'], ['219rn', '215po', 'interconversion'], ['215po', '211pb', 'interconversion'], ['211pb', '211bi', 'interconversion'], ['211bi', '211po', 'interconversion'], ['211po', '207tl', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[blood]` | not captured | 0.000041 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cortical bone surface]` | not captured | 0.116 | only_one_extracted |
| `gpt-oss-120b` | `parameters[urinary bladder content]` | not captured | 12.0 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | radium_223ra_dichloride | radium-223 dichloride | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | radium_223ra_dichloride | radium-223 | mismatch |
| `gpt-oss:120b` | `model.links` | [['radium_223ra_dichloride', 'radon_219', 'metabolism'], ['radon_219', 'polonium_215', 'metabolism'], ['polonium_215', 'lead_211', 'metabolism'], ['lead_211', 'bismuth_211', 'metabolism'], ['bismuth_211', 'polonium_211', 'metabolism'], ['polonium_211', 'thallium_207', 'metabolism']] | [['radium_223ra_dichloride', '219rn', 'interconversion'], ['219rn', '215po', 'interconversion'], ['215po', '211pb', 'interconversion'], ['211pb', '211bi', 'interconversion'], ['211bi', '211po', 'interconversion'], ['211po', '207tl', 'interconversion']] | mismatch |
| `gpt-oss:120b` | `parameters[cortical bone volume]` | not captured | 14.14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cortical marrow]` | not captured | 0.04 | only_one_extracted |
| `gpt-oss:120b` | `parameters[liver]` | not captured | 5.12 | only_one_extracted |
| `gpt-oss:120b` | `parameters[skin]` | not captured | 0.43 | only_one_extracted |
| `gpt-oss:120b` | `parameters[urinary bladder content]` | not captured | 0.04 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | fail | 1 / [time] | d−1 | not captured | not captured | ['Tab2:row23:col2', 'Tab2:row24:col2'] |
| C5_dimension_Q308 | fail | 1 / [time] | d−1 | not captured | not captured | ['Tab2:row28:col2'] |
| C5_dimension_Q34 | fail | 1 / [time] | d−1 | not captured | not captured | ['Tab2:row58:col2'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_radium_223ra_dichloride/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Höllriegl_2021` / `Höllriegl_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:01 UTC</sub>
