<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;polatuzumab vedotin&quot;,&quot;href&quot;:&quot;drugs/drug_polatuzumab_vedotin/&quot;},{&quot;label&quot;:&quot;Shemesh_2020 \u00b7 dose_escalation_b_nhl&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# polatuzumab vedotin — `PolatuzumabVedotin_Shemesh2020_dose_escalation_b_nhl`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="polatuzumab vedotin" model-id="PolatuzumabVedotin_Shemesh2020_dose_escalation_b_nhl" status="rejected" stale="false" population="patients with B-cell non-Hodgkin lymphoma" measured-compound="acMMAE" parameterization="mechanistic" topology="1C"></div>

## Citation
Shemesh CS, Agarwal P, Lu T, Lee C, Dere RC, Li X et al. Pharmacokinetics of polatuzumab vedotin in combination with R/G-CHP in patients with B-cell non-Hodgkin lymphoma. Cancer chemotherapy and pharmacology 85(5):831–842 (2020).
  ·  DOI: [10.1007/s00280-020-04054-8](https://doi.org/10.1007/s00280-020-04054-8)

## Population and dosing

**Population:** patients with B-cell non-Hodgkin lymphoma · age group adult.

**Dosing:** 70, 126 mg, iv, multiple, every 168 h.

**Dosed compound ≠ measured compound:** dosed polatuzumab vedotin, measured acMMAE.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 350 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Cmax), so that value has no SI equivalent. None of the extracted parameters is polatuzumab vedotin's own; they describe acMMAE.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has polatuzumab vedotin, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 350 | ng/mL | ng/ml | exact (1) | Shemesh_2020_table_1:row2:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Cohort' — extend the ontology if this is a real PK parameter (source ['Shemesh_2020_table_1:row0:col2'])
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['Shemesh_2020_table_1:row1:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acMMAE
- population split: 'dose escalation/b-nhl' subgroup of Shemesh_2020 (paper reports 9 populations: dose escalation/b-nhl, expansion/dlbcl, g-chp + pola 1.4 mg/kg, g-chp + pola 1.8 mg/kg, geometric mean (% cv), go27834 (pola + r) fl, go29044 (pola + r-chp) dlbcl, r-chp + pola 1.4 mg/kg, r-chp + pola 1.8 mg/kg)
- molar mass: no plausible PubChem entry for 'acMMAE' ('antibody-conjugated monomethyl auristatin E') — left in mass units
- molar mass: none found for 'polatuzumab_vedotin' — its concentrations stay mass-only
- molar mass: none found for 'acMMAE' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'acMMAE', not polatuzumab_vedotin — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab3:row2:col4 = '0.92 (0.89–0.96)'
- unparsed cell Tab3:row3:col3 = '0.85 (0.82–0.88)'
- unparsed cell Tab3:row4:col4 = '0.74 (0.68–0.80)'
- unparsed cell Tab3:row5:col3 = '0.74 (0.68–0.80)'
- transposed table Shemesh_2020_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Shemesh_2020_table_1:row2:col3 = '1490 (24.0)a'
- unparsed cell Shemesh_2020_table_1:row2:col8 = '1890 (23.7)c'
- unparsed cell Shemesh_2020_table_1:row3:col2 = '1300 (1.70)a'
- unparsed cell Shemesh_2020_table_1:row3:col3 = '4.82 (15.0)a'
- unparsed cell Shemesh_2020_table_1:row3:col7 = '1800 (28.5)b'
- unparsed cell Shemesh_2020_table_1:row3:col8 = '5.45 (14.2)c'
- unparsed cell Shemesh_2020_table_1:row4:col2 = '4.99 (18.2)a'
- unparsed cell Shemesh_2020_table_1:row4:col3 = '80.0 (12.5)a'
- unparsed cell Shemesh_2020_table_1:row4:col7 = '4.99 (13.2)b'
- unparsed cell Shemesh_2020_table_1:row4:col8 = '95.6 (29.8)c'
- unparsed cell Shemesh_2020_table_1:row5:col2 = '57.7 (17.3)a'
- unparsed cell Shemesh_2020_table_1:row5:col3 = '17.0 (24.7)a'
- unparsed cell Shemesh_2020_table_1:row5:col7 = '91.6 (33.1)b'
- unparsed cell Shemesh_2020_table_1:row5:col8 = '17.3 (23.4)c'
- companion parameter table 1 transcribed (28 record(s))
- unparsed cell Shemesh_2020_table_2:row0:col6 = '0.646 (0.576–0.724)'
- unparsed cell Shemesh_2020_table_2:row1:col5 = '0.711 (0.616–0.820)'
- unparsed cell Shemesh_2020_table_2:row2:col6 = '1.39 (1.11–1.73)'
- unparsed cell Shemesh_2020_table_2:row3:col5 = '1.43 (1.15–1.78)'
- companion parameter table 2 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (1/6 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['polatuzumab vedotin', 'acmmae', 'metabolism'], ['acmmae', 'unconjugated mmae', 'hydrolysis']] | mismatch |
| `gpt-oss-120b` | `parameters[cmax]` | 350 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 350 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | polatuzumab vedotin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | acMMAE | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Shemesh_2020_table_1:row2:col2'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpolatuzumab_vedotin%5D%20PolatuzumabVedotin_Shemesh2020_dose_escalation_b_nhl&body=Drug%3A%20polatuzumab_vedotin%0ARecord%3A%20PolatuzumabVedotin_Shemesh2020_dose_escalation_b_nhl%0APaper%3A%20Shemesh_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Shemesh2020_dose_escalation_b_nhl%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 19:11 UTC</sub>
