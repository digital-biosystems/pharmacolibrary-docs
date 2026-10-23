<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ticlopidine&quot;,&quot;href&quot;:&quot;drugs/drug_ticlopidine/&quot;},{&quot;label&quot;:&quot;Ashraf_2018 \u00b7 nonmem&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ticlopidine — `Ticlopidine_Ashraf2018_nonmem`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:32 UTC (Rejected), but the paper was screened again on 2026-10-05 16:43 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The record for S-ketamine (from Ashraf_2018, mislabeled as ticlopidine) was rejected because the estimates table was mis-split so the 'nonmem' column was read as a study population, and a structural parameter failed a dimension check with a unit that could not be converted to SI.

<div class="pk-model-meta" hidden drug="ticlopidine" model-id="Ticlopidine_Ashraf2018_nonmem" status="rejected" stale="true" population="healthy adults" measured-compound="S-ketamine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Ashraf MW, Peltoniemi MA, Olkkola KT, Neuvonen PJ, Saari TI. Semimechanistic Population Pharmacokinetic Model to Predict the Drug-Drug Interaction Between S-ketamine and Ticlopidine in Healthy Human Volunteers. CPT: pharmacometrics & systems pharmacology 7(10):687–697 (2018).
  ·  DOI: [10.1002/psp4.12346](https://doi.org/10.1002/psp4.12346)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 41.

**Dosing:** 25 mg, oral, multiple, every 8 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CLINT,H,SK (L/h) | CLint | 301 | L/h | 0.25 (None% RSE) |
| V C,SK (L) | V | 14.4 | L |  |
| Q PER1,SK (L/h) | Q | 287 | L/h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record for S-ketamine (from Ashraf_2018, mislabeled as ticlopidine) was rejected because the estimates table was mis-split so the 'nonmem' column was read as a study population, and a structural parameter failed a dimension check with a unit that could not be converted to SI.**

The paper's estimates table was split into one record per column, and the 'nonmem' column — a table statistic/structure column, not a second set of estimates — was treated as a study population. A structural parameter (among CLint 301 L/h, V 14.4 L, Q 287 L/h) failed a dimension check, and one reported unit could not be expressed in SI units, so that parameter reached the model builder without an SI value. The drug listed is ticlopidine while the measured compound is S-ketamine, a parent–metabolite structure with S-ketamine metabolized to norketamine via rate constant Kfm. Extracted — ticlopidine: CLint 301 L/h, V 14.4 L, Q 287 L/h.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CLINT,H,SK (L/h) | `Q3` · CLint | 301 | L/h |  |  | l/h | llm_confirmed (0.6) | psp412346-tbl-0002:row3:col2, psp412346-tbl-0002:row3:col3 | 0.25 (None% RSE) |
| V C,SK (L) | `Q61` · V | 14.4 | L | 0.0144 | m3 | l | llm (0.6) | psp412346-tbl-0002:row6:col2, psp412346-tbl-0002:row6:col3 |  |
| Q PER1,SK (L/h) | `Q30` · Q | 287 | L/h | 7.972e-05 | m3/s | l/h | llm (0.6) | psp412346-tbl-0002:row8:col2, psp412346-tbl-0002:row8:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'nonmem' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'CLINT,H,SK (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- unit_dimension_mismatch: 'CLINT,GW,SK (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,GW,SK (L/h)', value '1.19') — already have one for this compound
- dropped unlinked row (NIL): 'K a,SK (/h)' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row5:col2', 'psp412346-tbl-0002:row5:col3'])
- dropped duplicate Q61 ('V PER1,SK (L)', value '102') — already have one for this compound
- dropped duplicate Q61 ('V PER2,SK (L)', value '180') — already have one for this compound
- dropped duplicate Q30 ('Q PER2,SK (L/h)', value '22.4') — already have one for this compound
- dropped unlinked row (NIL): 'RVSK,PLAC' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row15:col2', 'psp412346-tbl-0002:row15:col3'])
- dropped unlinked row (NIL): 'RVSK,TICLO' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row16:col2', 'psp412346-tbl-0002:row16:col3'])
- unit_dimension_mismatch: 'CLINT,H,NK (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,H,NK (L/h)', value '73.5') — already have one for this compound
- unit_dimension_mismatch: 'CLINT,GW,NK (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,GW,NK (L/h)', value '44.4') — already have one for this compound
- dropped duplicate Q61 ('V C,NK (L)', value '88.4') — already have one for this compound
- dropped duplicate Q30 ('Q PER1,NK (L/h)', value '19.9') — already have one for this compound
- dropped duplicate Q61 ('V PER1,NK (L)', value '88.9') — already have one for this compound
- dropped unlinked row (NIL): 'RVNK,PLAC' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row24:col2', 'psp412346-tbl-0002:row24:col3'])
- dropped unlinked row (NIL): 'RVNK,TICLO' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row25:col2', 'psp412346-tbl-0002:row25:col3'])
- unit_dimension_mismatch: 'CLINT,H,TIC (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,H,TIC (L/h)', value '1505') — already have one for this compound
- unit_dimension_mismatch: 'CLINT,GW,TIC (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,GW,TIC (L/h)', value '0') — already have one for this compound
- dropped unlinked row (NIL): 'K a,TIC (/h)' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row29:col2'])
- dropped duplicate Q61 ('V C,TIC (L)', value '50.3') — already have one for this compound
- dropped duplicate Q61 ('V PER1,TIC (L)', value '191') — already have one for this compound
- dropped duplicate Q30 ('Q PER1,TIC (L/h)', value '26.3') — already have one for this compound
- dropped unlinked row (NIL): 'RVTICLO' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row34:col2', 'psp412346-tbl-0002:row34:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=S-ketamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'nonmem' subgroup of Ashraf_2018 (paper reports 2 populations: nonmem, sir‐resultsa)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | L/h | ['psp412346-tbl-0002:row3:col2', 'psp412346-tbl-0002:row3:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412346-tbl-0002:row8:col2', 'psp412346-tbl-0002:row8:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['psp412346-tbl-0002:row6:col2', 'psp412346-tbl-0002:row6:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.4 L | ['psp412346-tbl-0002:row6:col2', 'psp412346-tbl-0002:row6:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bticlopidine%5D%20Ticlopidine_Ashraf2018_nonmem&body=Drug%3A%20ticlopidine%0ARecord%3A%20Ticlopidine_Ashraf2018_nonmem%0APaper%3A%20Ashraf_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ticlopidine/Ticlopidine_Ashraf2018_nonmem%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 16:43 UTC</sub>
