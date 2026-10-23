<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;disopyramide&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/&quot;},{&quot;label&quot;:&quot;Thibonnier_1984 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Disopyramide_Bryson1978_reference&quot;,&quot;label&quot;:&quot;Bryson_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/Disopyramide_Bryson1978_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Disopyramide_Aso2001_reference&quot;,&quot;label&quot;:&quot;Aso_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/Disopyramide_Aso2001_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# disopyramide — `Disopyramide_Thibonnier1984_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The disopyramide record was rejected because the elimination rate constant and unbound clearance were both extracted, causing a double correction error in the model.

<div class="pk-model-meta" hidden drug="disopyramide" model-id="Disopyramide_Thibonnier1984_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="disopyramide" parameterization="apparent" topology="1C"></div>

## Citation
Thibonnier M, Holford NH, Upton RA, Blume CD, Williams RL. Pharmacokinetic-pharmacodynamic analysis of unbound disopyramide directly measured in serial plasma samples in man. Journal of pharmacokinetics and biopharmaceutics 12(6):559–573 (1984).
  ·  DOI: [10.1007/BF01059552](https://doi.org/10.1007/BF01059552)

## Population and dosing

**Population:** healthy volunteers · age group adult · n = &gt;.

**Dosing:** 300 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V/F (l) | V/F | 266 | l |
| k (min⁻¹) | kel | 0.0033 | min⁻¹ |
| tlag (min) | tlag | 22 | min |
| CLu/F (l/min) | CLu | 0.86 | l/min |
| Half-life (min) | t1/2z | 218 | min |
| f | Fab | 0.04 |  |
| VAR | equation variable | 0.4 |  |
| Hinderling and Garrett's (27) estimate of 83% bioavailability | FG | 83 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The disopyramide record was rejected because the elimination rate constant and unbound clearance were both extracted, causing a double correction error in the model.**

The record lists both an elimination rate constant of 0.0033 min⁻¹ and an unbound clearance of 0.86 l/min. The presence of both parameters in a single-compartment model structure creates a double correction violation. Additionally, the percentage unit for the gut-wall bioavailability parameter could not be converted to standard SI units. Extracted — disopyramide: V/F 266 l, kel 0.0033 min⁻¹, tlag 22 min, CLu 0.86 l/min, t1/2z 218 min, Fab 0.04, FG 83 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has disopyramide, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V/F (l) | `Q76` · V/F | 266 | l | 0.266 | m3 | l | exact (1) | Thibonnier_1984_table_1:row0:col1, Thibonnier_1984_table_1:row0:col2, Thibonnier_1984_table_1:row0:col3, Thibonnier_1984_table_1:row0:col4 |
| k (min⁻¹) | `Q47` · kel | 0.0033 | min⁻¹ | 5.5e-05 | 1/s | 1/min | exact (1) | Thibonnier_1984_table_1:row1:col1, Thibonnier_1984_table_1:row1:col2, Thibonnier_1984_table_1:row1:col3, Thibonnier_1984_table_1:row1:col4 |
| tlag (min) | `Q83` · tlag | 22 | min | 1320 | s | min | exact (1) | Thibonnier_1984_table_1:row3:col1, Thibonnier_1984_table_1:row3:col2, Thibonnier_1984_table_1:row3:col3, Thibonnier_1984_table_1:row3:col4 |
| CLu/F (l/min) | `Q24` · CLu | 0.86 | l/min | 1.433e-05 | m3/s | l/min | llm (0.6) | Thibonnier_1984_table_1:row4:col1, Thibonnier_1984_table_1:row4:col2, Thibonnier_1984_table_1:row4:col3, Thibonnier_1984_table_1:row4:col4 |
| Half-life (min) | `Q57` · t1/2z | 218 | min | 1.308e+04 | s | min | llm (0.6) | Thibonnier_1984_table_1:row5:col1, Thibonnier_1984_table_1:row5:col2, Thibonnier_1984_table_1:row5:col3, Thibonnier_1984_table_1:row5:col4 |
| f | `Q40` · Fab | 0.04 |  |  |  |  | exact (1) | Thibonnier_1984_table_1:row7:col1, Thibonnier_1984_table_1:row7:col2, Thibonnier_1984_table_1:row7:col3, Thibonnier_1984_table_1:row7:col4 |
| VAR | `Q900` · equation variable | 0.4 |  |  |  |  | llm (0.6) | Thibonnier_1984_table_1:row8:col1, Thibonnier_1984_table_1:row8:col2, Thibonnier_1984_table_1:row8:col3, Thibonnier_1984_table_1:row8:col4 |
| Hinderling and Garrett's (27) estimate of 83% bioavailability | `Q41` · FG | 83 | % |  |  |  | llm_corrected (0.6) | fig_4:caption |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'a' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'b' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'c' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'd' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'TKO (min)' — extend the ontology if this is a real PK parameter (source ['Thibonnier_1984_table_1:row2:col1', 'Thibonnier_1984_table_1:row2:col2', 'Thibonnier_1984_table_1:row2:col3', 'Thibonnier_1984_table_1:row2:col4'])
- dropped unlinked row (NIL): 'PWR' — extend the ontology if this is a real PK parameter (source ['Thibonnier_1984_table_1:row6:col1', 'Thibonnier_1984_table_1:row6:col2', 'Thibonnier_1984_table_1:row6:col3', 'Thibonnier_1984_table_1:row6:col4'])
- dropped unlinked row (NIL): 'Log-likelihood estimates' — extend the ontology if this is a real PK parameter (source ['Thibonnier_1984_table_1:row9:col1', 'Thibonnier_1984_table_1:row9:col2', 'Thibonnier_1984_table_1:row9:col3', 'Thibonnier_1984_table_1:row9:col4'])
- dropped value-less row: 'Cunningham et aL, 10.41/hr'
- dropped value-less row: 'Bryson et al., 6.2 1/hr'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 300 (source ['fig_4:caption']); the table cell was unparseable — needs review
- covariate category for CLu from footnote/prose kept as documentation only (['fig_4:caption'])
- dropped duplicate Q24 ('unbound clearance', value 39.5) — already have one for this compound
- documentation only: 'Clu/F reported by Lima et al. (4)' → Q27 (CL/F) comes from ['fig_4:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'Clu/F reported by Cunningham et al. (20)' → Q27 (CL/F) comes from ['fig_4:caption'], not from a located parameter table — not emitted as a model parameter
- dropped duplicate Q24 ('Clu reported by Giacomini et aL (6)', value 25) — already have one for this compound
- documentation only: 'Bryson et al. (23)' → Q49 (kabs) comes from ['fig_4:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'Hinderling and Garrett (27)' → Q95 (t1/2ka ) comes from ['fig_4:caption'], not from a located parameter table — not emitted as a model parameter
- dropped value-less row: 'Clu estimate'
- dropped unlinked row (NIL): 'Meffin et al. (8)' — extend the ontology if this is a real PK parameter (source ['fig_4:caption'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=disopyramide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.571 (8/14 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailability]` |  | 83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t_lag]` | 22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tko]` |  | 62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[var]` | 0.4 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | disopyramide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | disopyramide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 218 | 214.4 | 0.9834 | 0.25 | reported t½β |
| C5_dimension_Q24 | pass | [length] ** 3 / [time] |  |  |  | ['Thibonnier_1984_table_1:row4:col1', 'Thibonnier_1984_table_1:row4:col2', 'Thibonnier_1984_table_1:row4:col3', 'Thibonnier_1984_table_1:row4:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['Thibonnier_1984_table_1:row1:col1', 'Thibonnier_1984_table_1:row1:col2', 'Thibonnier_1984_table_1:row1:col3', 'Thibonnier_1984_table_1:row1:col4'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Thibonnier_1984_table_1:row5:col1', 'Thibonnier_1984_table_1:row5:col2', 'Thibonnier_1984_table_1:row5:col3', 'Thibonnier_1984_table_1:row5:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Thibonnier_1984_table_1:row0:col1', 'Thibonnier_1984_table_1:row0:col2', 'Thibonnier_1984_table_1:row0:col3', 'Thibonnier_1984_table_1:row0:col4'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Thibonnier_1984_table_1:row3:col1', 'Thibonnier_1984_table_1:row3:col2', 'Thibonnier_1984_table_1:row3:col3', 'Thibonnier_1984_table_1:row3:col4'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.04 with apparent parameterization |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q24 | pass | clearance within physiological range | 51.6 L/h |  |  | ['Thibonnier_1984_table_1:row4:col1', 'Thibonnier_1984_table_1:row4:col2', 'Thibonnier_1984_table_1:row4:col3', 'Thibonnier_1984_table_1:row4:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 266 L |  |  | ['Thibonnier_1984_table_1:row0:col1', 'Thibonnier_1984_table_1:row0:col2', 'Thibonnier_1984_table_1:row0:col3', 'Thibonnier_1984_table_1:row0:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdisopyramide%5D%20Disopyramide_Thibonnier1984_reference&body=Drug%3A%20disopyramide%0ARecord%3A%20Disopyramide_Thibonnier1984_reference%0APaper%3A%20Thibonnier_1984%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_disopyramide/Disopyramide_Thibonnier1984_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 13:25 UTC</sub>
