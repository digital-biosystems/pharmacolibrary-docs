<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;moxidectin&quot;,&quot;href&quot;:&quot;drugs/drug_moxidectin/&quot;},{&quot;label&quot;:&quot;Wood_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moxidectin_Chhonker2023_reference&quot;,&quot;label&quot;:&quot;Chhonker_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxidectin/Moxidectin_Chhonker2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moxidectin_Smit2022_reference&quot;,&quot;label&quot;:&quot;Smit_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxidectin/Moxidectin_Smit2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# moxidectin — `Moxidectin_Wood2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CLint and CLNR have no unit.

<div class="pk-model-meta" hidden drug="moxidectin" model-id="Moxidectin_Wood2024_reference" status="needs_review" stale="false" population="healthy lactating women (with PBPK predictions in neonates/infants)" measured-compound="moxidectin" parameterization="apparent" topology="1C"></div>

## Citation
Wood ND, Smith D, Kinrade SA, Sullivan MT, Rayner CR, Wesche D et al. The use of quantitative clinical pharmacology approaches to support moxidectin dosing recommendations in lactation. PLoS neglected tropical diseases 18(8):e0012351 (2024).
  ·  DOI: [10.1371/journal.pntd.0012351](https://doi.org/10.1371/journal.pntd.0012351)

## Population and dosing

**Population:** healthy lactating women (with PBPK predictions in neonates/infants) · condition healthy (lactating) · age group adult · n = 12.

**Dosing:** 8 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Physicochemical/binding propertiesMolecular Weight (g/mol) | MW | 639.8 | g/mol |
| fu | fu | 0.00078 |  |
| Vss (L/kg) | Vss | 16.85 | L/kg |
| Pt:p adipose | Kp | 57.85 |  |
| CL/F (L/h) | CL/F | 2.0 | L/h |
| CLint (μL/min/mg protein) | CLint | 517 | μL/min/mg protein |
| Biliary (μl/min/mg protein) | CLNR | 481 | μl/min/mg protein |
| V/F (MOX, mean) | V/F | 410.8 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CLint and CLNR have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (MW, CLint and CLNR), so that value has no SI equivalent. Extracted — moxidectin: MW 640 g/mol, fu 0.00078, Vss 16.9 L/kg, Kp 57.9, CL/F 2 L/h, CLint 517 μL/min/mg protein, CLNR 481 μl/min/mg protein, V/F 411 L.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Physicochemical/binding propertiesMolecular Weight (g/mol) | `Q374` · MW | 639.8 | g/mol |  |  | g/(m·ol) | llm (0.6) | pntd.0012351.t001:row1:col1 |
| fu | `Q46` · fu | 0.00078 |  |  |  |  | exact (1) | pntd.0012351.t001:row5:col1 |
| Vss (L/kg) | `Q65` · Vss | 16.85 | L/kg | 1.179 | m3 | l/kg | exact (1) | pntd.0012351.t001:row8:col1 |
| Pt:p adipose | `Q410` · Kp | 57.85 |  |  |  |  | llm (0.6) | pntd.0012351.t001:row10:col1 |
| CL/F (L/h) | `Q27` · CL/F | 2.0 | L/h | 5.556e-07 | m3/s | l/h | exact (1) | pntd.0012351.t001:row13:col1 |
| CLint (μL/min/mg protein) | `Q3` · CLint | 517 | μL/min/mg protein |  |  | µl/(min·mg·protein) | exact (1) | pntd.0012351.t001:row14:col1, pntd.0012351.t001:row14:col2 |
| Biliary (μl/min/mg protein) | `Q79` · CLNR | 481 | μl/min/mg protein |  |  | µl/(min·mg·protein) | llm (0.6) | pntd.0012351.t001:row16:col1 |
| V/F (MOX, mean) | `Q76` · V/F | 410.8 | L | 0.4108 | m3 | L | review_gapfill (0.7) | Chhonker_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'clog P' — extend the ontology if this is a real PK parameter (source ['pntd.0012351.t001:row2:col1'])
- dropped unlinked row (NIL): 'Blood to plasma ratio' — extend the ontology if this is a real PK parameter (source ['pntd.0012351.t001:row4:col1'])
- dropped duplicate Q410 ('Kp Scalar', value '0.3') — already have one for this compound
- unit_dimension_unknown: 'μL/min/mg protein' (CLint)
- unit_dimension_unknown: 'μl/min/mg protein' (CLNR)
- implicit units: 'CLint (μL/min/mg protein)' — the LLM proposed 'μL/min/mg protein', whose dimension does not fit Q3; left unset
- implicit units: 'Biliary (μl/min/mg protein)' — the LLM proposed 'μL/min/mg protein', whose dimension does not fit Q79; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=moxidectin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q76 (V/F) from Chhonker_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell pntd.0012351.t001:row5:col2 = 'Measured [35]'
- unparsed cell pntd.0012351.t001:row8:col2 = 'Predicted [38]'
- unparsed cell pntd.0012351.t001:row10:col2 = 'Fitted based on clinical data in healthy male subjects [32]'
- unparsed cell pntd.0012351.t001:row13:col2 = 'Clinical data [32]'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pntd.0012351.t001:row13:col1'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['pntd.0012351.t001:row1:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['pntd.0012351.t001:row8:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Chhonker_2023:review'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] | μL/min/mg protein | ['pntd.0012351.t001:row14:col1', 'pntd.0012351.t001:row14:col2'] |
| C5_unit_missing_Q79 | fail | [length] ** 3 / [time] | μl/min/mg protein | ['pntd.0012351.t001:row16:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2 L/h | ['pntd.0012351.t001:row13:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 1.18e+03 L | ['pntd.0012351.t001:row8:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 411 L | ['Chhonker_2023:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmoxidectin%5D%20Moxidectin_Wood2024_reference&body=Drug%3A%20moxidectin%0ARecord%3A%20Moxidectin_Wood2024_reference%0APaper%3A%20Wood_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_moxidectin/Moxidectin_Wood2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:54 UTC</sub>
