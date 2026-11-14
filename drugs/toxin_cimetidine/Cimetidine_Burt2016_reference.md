<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Cimetidine&quot;,&quot;href&quot;:&quot;drugs/toxin_cimetidine/&quot;},{&quot;label&quot;:&quot;Burt_2016 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cimetidine — `Cimetidine_Burt2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Cimetidine" model-id="Cimetidine_Burt2016_reference" status="rejected" stale="false" population="healthy volunteers (Caucasian and Chinese healthy populations simulated)" measured-compound="Cimetidine and Metformin" parameterization="mechanistic" topology="1C"></div>

## Citation
Burt HJ, Neuhoff S, Almond L, Gaohua L, Harwood MD, Jamei M et al. Metformin and cimetidine: Physiologically based pharmacokinetic modelling to investigate transporter mediated drug-drug interactions. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 88:70–82 (2016).
  ·  DOI: [10.1016/j.ejps.2016.03.020](https://doi.org/10.1016/j.ejps.2016.03.020)

## Population and dosing

**Population:** healthy volunteers (Caucasian and Chinese healthy populations simulated) · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed Cimetidine (co-administered with metformin), measured Cimetidine and Metformin.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 14 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight | MW | 252.34 |  |
| fu | fu | 0.8 |  |
| B/P | Kp | 0.97 |  |
| ka (h−1) | kabs | 0.7 | h−1 |
| tlag (h) | tlag | 0.15 | h |
| fa | Fab | 0.92 |  |
| Vss (L/kg) | Vss | 0.60 | L/kg |
| OCT2 Jmax (pmol·min−1·106 PTC−1) | Vmax | 2170 | pmol·min−1·106 PTC−1 |
| OCT2 Km (μM) | Km | 72.6 | μM |
| OCT2 RAF | CLint | 3 |  |
| OAT3 RAF | Frel | 3 |  |
| MATE1 RAF | FR | 3 |  |
| fu,kidney cell | fu_tissue | 1 |  |
| mean Vz | V | 160.0 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.069). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Cimetidine (co-administered with metformin), the second reading cimetidine; it also differs on 26 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight | `Q374` · MW | 252.34 |  |  |  |  | exact (1) | Burt_2016_table_p5_1:row1:col1 |
| fu | `Q46` · fu | 0.8 |  | 0.8 |  |  | exact (1) | Burt_2016_table_p5_1:row5:col1 |
| B/P | `Q410` · Kp | 0.97 |  |  |  |  | llm (0.6) | Burt_2016_table_p5_1:row6:col1 |
| ka (h−1) | `Q49` · kabs | 0.7 | h−1 | 0.0001944 | 1/s | 1/h | exact (1) | Burt_2016_table_p5_1:row8:col1 |
| tlag (h) | `Q83` · tlag | 0.15 | h | 540 | s | h | exact (1) | Burt_2016_table_p5_1:row9:col1 |
| fa | `Q40` · Fab | 0.92 |  | 0.92 |  |  | llm (0.6) | Burt_2016_table_p5_1:row10:col1 |
| Vss (L/kg) | `Q65` · Vss | 0.60 | L/kg | 0.042 | m3 | l/kg | exact (1) | Burt_2016_table_p5_1:row13:col1 |
| OCT2 Jmax (pmol·min−1·106 PTC−1) | `Q66` · Vmax | 2170 | pmol·min−1·106 PTC−1 |  |  | pM/(min·106·ptc) | llm (0.6) | Burt_2016_table_p5_1:row16:col1 |
| OCT2 Km (μM) | `Q1` · Km | 72.6 | μM |  |  | µM | llm_confirmed (0.6) | Burt_2016_table_p5_1:row17:col1 |
| OCT2 RAF | `Q3` · CLint | 3 |  |  |  |  | llm (0.6) | Burt_2016_table_p5_1:row18:col1 |
| OAT3 RAF | `Q87` · Frel | 3 |  | 3 |  |  | llm (0.6) | Burt_2016_table_p5_1:row21:col1 |
| MATE1 RAF | `Q43` · FR | 3 |  | 0.03 |  |  | llm (0.6) | Burt_2016_table_p5_1:row24:col1 |
| fu,kidney cell | `Q413` · fu_tissue | 1 |  |  |  |  | llm_corrected (0.6) | Burt_2016_table_p5_1:row32:col1 |
| mean Vz | `Q61` · V | 160.0 | L | 0.16 | m3 | L | review_gapfill (0.7) | Choules_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['Burt_2016_table_p5_1:row3:col1'])
- dropped unlinked row (NIL): 'logP' — extend the ontology if this is a real PK parameter (source ['Burt_2016_table_p5_1:row4:col1'])
- unit_dimension_unknown: 'pmol·min−1·106 PTC−1' (Vmax)
- unit_dimension_mismatch: 'OCT2 Km (μM)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q66 ('OAT3 Jmax (pmol·min−1·106 PTC−1)', value '1232') — already have one for this compound
- unit_dimension_mismatch: 'OAT3 Km (μM)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('OAT3 Km (μM)', value '161.5') — already have one for this compound
- dropped duplicate Q66 ('MATE1 Jmax (pmol·min−1·106 PTC−1)', value '135.5') — already have one for this compound
- unit_dimension_mismatch: 'MATE1 Km (μM)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('MATE1 Km (μM)', value '7.7') — already have one for this compound
- 'MATE1 RAF' → Q43: printed without a unit and above 1 — read as a percentage
- dropped duplicate Q66 ('MATE2-K Jmax (pmol·min−1·106 PTC−1)', value '216') — already have one for this compound
- unit_dimension_mismatch: 'MATE2-K Km (μM)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('MATE2-K Km (μM)', value '18.2') — already have one for this compound
- dropped unlinked row (NIL): 'MATE2-K RAF' — extend the ontology if this is a real PK parameter (source ['Burt_2016_table_p5_1:row27:col1'])
- dropped PD-category row 'OCT1 Ki (μM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Burt_2016_table_p5_1:row28:col1'])
- dropped PD-category row 'OCT2 Ki (μM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Burt_2016_table_p5_1:row29:col1'])
- dropped PD-category row 'MATE1/MATE2-K Ki (μM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Burt_2016_table_p5_1:row30:col1'])
- unit_dimension_unknown: 'μL·min−1·mg protein−1' (CLint)
- dropped duplicate Q3 ('HLM CLint (μL·min−1·mg protein−1)', value '2.87') — already have one for this compound
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 7 column 4 (char 268)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cimetidine and Metformin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- gap-filled Q61 (V) from Choules_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- table Burt_2016_table_p5_1: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.069 (2/29 fields) | 27 |

<details><summary>27 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[b/p]` | 0.97 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[b/p]` |  | 0.97 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fa]` | 0.92 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[fa]` |  | 0.92 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fu,kidney cell]` | 1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[fu,kidney cell]` |  | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fu]` | 0.8 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[fu]` |  | 0.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[hlm clint]` |  | 2.87 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` |  | 0.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mate1 raf]` | 3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[molecular weight]` | 252.34 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[molecular weight]` |  | 252.34 | only_one_extracted |
| `gpt-oss:120b` | `parameters[oat3 raf]` | 3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[oct2 jmax]` | 2170 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[oct2 jmax]` |  | 2170 | only_one_extracted |
| `gpt-oss:120b` | `parameters[oct2 ki]` |  | 124 | only_one_extracted |
| `gpt-oss:120b` | `parameters[oct2 km]` | 72.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[oct2 km]` |  | 72.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[oct2 raf]` | 3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag]` | 0.15 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag]` |  | 0.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vss]` | 0.60 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vss]` |  | 0.60 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Cimetidine (co-administered with metformin) | cimetidine | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Cimetidine and Metformin | metformin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 13 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | μM ([length]) | ['Burt_2016_table_p5_1:row17:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Burt_2016_table_p5_1:row8:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Choules_2025:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Burt_2016_table_p5_1:row13:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Burt_2016_table_p5_1:row9:col1'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [mass] / [time] |  | ['Burt_2016_table_p5_1:row18:col1'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] |  | ['Burt_2016_table_p5_1:row1:col1'] |
| C5_unit_missing_Q66 | fail | [mass] / [time] | pmol·min−1·106 PTC−1 | ['Burt_2016_table_p5_1:row16:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 160 L | ['Choules_2025:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 42 L | ['Burt_2016_table_p5_1:row13:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcimetidine%5D%20Cimetidine_Burt2016_reference&body=Drug%3A%20cimetidine%0ARecord%3A%20Cimetidine_Burt2016_reference%0APaper%3A%20Burt_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cimetidine/Cimetidine_Burt2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 07:13 UTC</sub>
