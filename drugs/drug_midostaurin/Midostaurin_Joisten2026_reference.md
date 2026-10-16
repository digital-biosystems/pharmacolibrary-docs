<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;midostaurin&quot;,&quot;href&quot;:&quot;drugs/drug_midostaurin/&quot;},{&quot;label&quot;:&quot;Joisten_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# midostaurin — `Midostaurin_Joisten2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — midostaurin: CL 0.52 L/h, kabs 0.0304 1/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has midostaurin and posaconazole, the second reading midostaurin. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `midostaurin and posaconazole`, measured `midostaurin`.

## Citation
Joisten CS et al., Clinical impact of potential drug-drug…, Antimicrobial agents and ch… (2026)
  ·  DOI: [10.1128/aac.01951-25](https://doi.org/10.1128/aac.01951-25)

<div class="pk-model-meta" hidden drug="midostaurin" model-id="Midostaurin_Joisten2026_reference" status="needs_review" stale="false" population="patients with FLT3-mutated AML receiving concomitant midostaurin and posaconazole" measured-compound="midostaurin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| clearance (Cl) | `Q22` · CL | 0.52 | L/h | 1.4444444444444445e-07 | L/h | not captured | exact (1.0) | Joisten_2026:results_prose | — | not captured |
| Ka | `Q49` · kabs | 0.0304 | 1/h | 8.444444444444444e-06 | 1/h | not captured | exact (1.0) | Joisten_2026:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Any' — extend the ontology if this is a real PK parameter (source ['T3:row1:col1', 'T3:row1:col2'])
- dropped unlinked row (NIL): 'Hematological AEs' — extend the ontology if this is a real PK parameter (source ['T3:row2:col1', 'T3:row2:col2'])
- dropped unlinked row (NIL): 'Leukocytopenia' — extend the ontology if this is a real PK parameter (source ['T3:row3:col1', 'T3:row3:col2'])
- dropped unlinked row (NIL): 'Thrombocytopenia' — extend the ontology if this is a real PK parameter (source ['T3:row4:col1', 'T3:row4:col2'])
- dropped unlinked row (NIL): 'Anemia' — extend the ontology if this is a real PK parameter (source ['T3:row5:col1', 'T3:row5:col2'])
- dropped unlinked row (NIL): 'Febrile neutropenia' — extend the ontology if this is a real PK parameter (source ['T3:row6:col1', 'T3:row6:col2'])
- dropped unlinked row (NIL): 'Gastrointestinal AEs' — extend the ontology if this is a real PK parameter (source ['T3:row7:col1', 'T3:row7:col2'])
- dropped unlinked row (NIL): 'Diarrhea' — extend the ontology if this is a real PK parameter (source ['T3:row8:col1', 'T3:row8:col2'])
- dropped unlinked row (NIL): 'Constipation' — extend the ontology if this is a real PK parameter (source ['T3:row9:col1', 'T3:row9:col2'])
- dropped unlinked row (NIL): 'Nausea' — extend the ontology if this is a real PK parameter (source ['T3:row10:col1', 'T3:row10:col2'])
- dropped unlinked row (NIL): 'Mucositis/neutropenic enterocolitis' — extend the ontology if this is a real PK parameter (source ['T3:row11:col1', 'T3:row11:col2'])
- dropped unlinked row (NIL): 'Ileitis terminalis' — extend the ontology if this is a real PK parameter (source ['T3:row12:col1', 'T3:row12:col2'])
- dropped unlinked row (NIL): 'Infectionsc' — extend the ontology if this is a real PK parameter (source ['T3:row13:col1', 'T3:row13:col2'])
- dropped unlinked row (NIL): 'Device-related infection' — extend the ontology if this is a real PK parameter (source ['T3:row14:col1', 'T3:row14:col2'])
- dropped unlinked row (NIL): 'Upper respiratory tract infection' — extend the ontology if this is a real PK parameter (source ['T3:row15:col1', 'T3:row15:col2'])
- dropped unlinked row (NIL): 'Pneumonia' — extend the ontology if this is a real PK parameter (source ['T3:row16:col1', 'T3:row16:col2'])
- dropped unlinked row (NIL): 'Fungal infectiond' — extend the ontology if this is a real PK parameter (source ['T3:row17:col1', 'T3:row17:col2'])
- dropped unlinked row (NIL): 'Bacteremia' — extend the ontology if this is a real PK parameter (source ['T3:row18:col1', 'T3:row18:col2'])
- dropped unlinked row (NIL): 'Viremia' — extend the ontology if this is a real PK parameter (source ['T3:row19:col1', 'T3:row19:col2'])
- dropped unlinked row (NIL): 'Herpes simplex infection' — extend the ontology if this is a real PK parameter (source ['T3:row20:col1', 'T3:row20:col2'])
- dropped unlinked row (NIL): 'Clostridioides difficile infection' — extend the ontology if this is a real PK parameter (source ['T3:row21:col1', 'T3:row21:col2'])
- dropped unlinked row (NIL): 'Wound infection' — extend the ontology if this is a real PK parameter (source ['T3:row22:col1', 'T3:row22:col2'])
- dropped unlinked row (NIL): 'Neutropenic sepsis' — extend the ontology if this is a real PK parameter (source ['T3:row23:col1', 'T3:row23:col2'])
- dropped unlinked row (NIL): 'Septic shock' — extend the ontology if this is a real PK parameter (source ['T3:row24:col1', 'T3:row24:col2'])
- dropped unlinked row (NIL): 'Pulmonary AEs' — extend the ontology if this is a real PK parameter (source ['T3:row25:col1', 'T3:row25:col2'])
- dropped unlinked row (NIL): 'Pulmonary edema' — extend the ontology if this is a real PK parameter (source ['T3:row26:col1', 'T3:row26:col2'])
- dropped unlinked row (NIL): 'Pleural effusion' — extend the ontology if this is a real PK parameter (source ['T3:row27:col1', 'T3:row27:col2'])
- dropped unlinked row (NIL): 'Atelectasis' — extend the ontology if this is a real PK parameter (source ['T3:row28:col1', 'T3:row28:col2'])
- dropped unlinked row (NIL): 'Cardiac AEs' — extend the ontology if this is a real PK parameter (source ['T3:row29:col1', 'T3:row29:col2'])
- dropped unlinked row (NIL): 'QTc prolongatione' — extend the ontology if this is a real PK parameter (source ['T3:row30:col1', 'T3:row30:col2'])
- dropped unlinked row (NIL): 'Bradycardia' — extend the ontology if this is a real PK parameter (source ['T3:row31:col1', 'T3:row31:col2'])
- dropped unlinked row (NIL): 'Hypertension' — extend the ontology if this is a real PK parameter (source ['T3:row32:col1', 'T3:row32:col2'])
- dropped unlinked row (NIL): 'Troponinemia' — extend the ontology if this is a real PK parameter (source ['T3:row33:col1', 'T3:row33:col2'])
- dropped unlinked row (NIL): 'Pericardial effusion' — extend the ontology if this is a real PK parameter (source ['T3:row34:col1', 'T3:row34:col2'])
- dropped unlinked row (NIL): 'Hydropic decompensation' — extend the ontology if this is a real PK parameter (source ['T3:row35:col1', 'T3:row35:col2'])
- dropped unlinked row (NIL): 'Chest pain' — extend the ontology if this is a real PK parameter (source ['T3:row36:col1', 'T3:row36:col2'])
- dropped unlinked row (NIL): 'Perimyocarditis' — extend the ontology if this is a real PK parameter (source ['T3:row37:col1', 'T3:row37:col2'])
- dropped unlinked row (NIL): 'Sudden cardiac death' — extend the ontology if this is a real PK parameter (source ['T3:row38:col1', 'T3:row38:col2'])
- dropped unlinked row (NIL): 'Laboratory abnormalitiesf' — extend the ontology if this is a real PK parameter (source ['T3:row39:col1', 'T3:row39:col2'])
- dropped unlinked row (NIL): 'Acute liver failure' — extend the ontology if this is a real PK parameter (source ['T3:row40:col1', 'T3:row40:col2'])
- dropped unlinked row (NIL): 'Acute kidney failure' — extend the ontology if this is a real PK parameter (source ['T3:row41:col1', 'T3:row41:col2'])
- dropped unlinked row (NIL): 'Urinary tract obstruction' — extend the ontology if this is a real PK parameter (source ['T3:row42:col1', 'T3:row42:col2'])
- dropped unlinked row (NIL): 'Neurological AEs' — extend the ontology if this is a real PK parameter (source ['T3:row43:col1', 'T3:row43:col2'])
- dropped unlinked row (NIL): 'Vascular AEs' — extend the ontology if this is a real PK parameter (source ['T3:row44:col1', 'T3:row44:col2'])
- dropped unlinked row (NIL): 'Bleeding AEs' — extend the ontology if this is a real PK parameter (source ['T3:row45:col1', 'T3:row45:col2'])
- dropped unlinked row (NIL): 'Skin and subcutaneous tissue AEs' — extend the ontology if this is a real PK parameter (source ['T3:row46:col1', 'T3:row46:col2'])
- dropped unlinked row (NIL): 'Ophthalmological AEs' — extend the ontology if this is a real PK parameter (source ['T3:row47:col1', 'T3:row47:col2'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 12.9 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 5.7 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 66 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 29 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 18 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 11 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 7 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 420 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 435 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 5 (source ['T3:footnote']); the table cell was unparseable — needs review
- table mostly unlinked (47/47 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('clearance (Cl)'=0.52) from results prose — parameter table was unreadable
- salvaged Q49 ('Ka'=0.0304) from results prose — parameter table was unreadable
- implicit units: 'Ka' → 1/h (from the paper text: 'The paper states that the absorption constant Ka has units of “(1/h).”')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (clearance (Cl))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=midostaurin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.833 (5/6 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `screen.dose_compound` | midostaurin and posaconazole | midostaurin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Joisten_2026:results_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.52 | not captured | not captured | ['Joisten_2026:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.52 L/h | not captured | not captured | ['Joisten_2026:results_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_midostaurin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Joisten_2026` / `Joisten_2026::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 02:52 UTC</sub>
