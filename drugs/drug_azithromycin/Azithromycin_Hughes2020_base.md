<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;azithromycin&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/&quot;},{&quot;label&quot;:&quot;Hughes_2020 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azithromycin_Alshehri2023_reference&quot;,&quot;label&quot;:&quot;Alshehri_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Alshehri2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azithromycin_Benn2017_reference&quot;,&quot;label&quot;:&quot;Benn_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Benn2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azithromycin_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azithromycin — `Azithromycin_Hughes2020_base`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="azithromycin" model-id="Azithromycin_Hughes2020_base" status="rejected" stale="false" population="healthy adults and patients" measured-compound="azithromycin" parameterization="apparent" topology="1C"></div>

## Citation
Hughes JH, Sweeney K, Ahadieh S, Ouellet D. Predictions of Systemic, Intracellular, and Lung Concentrations of Azithromycin With Different Dosing Regimens Used in COVID-19 Clinical Trials. CPT: pharmacometrics & systems pharmacology 9(8):435–443 (2020).
  ·  DOI: [10.1002/psp4.12537](https://doi.org/10.1002/psp4.12537)

## Population and dosing

**Population:** healthy adults and patients · condition healthy and COVID-19 · age group adult.

**Dosing:** 250, 500, 1000 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| T lag, hour | tlag | 1.45 | hour | 17.6 (None% RSE) |
| k a, hour−1 | kabs | 0.88 | hour−1 |  |
| CL/F, L/hour | CL/F | 258 | L/hour | 29.3 (None% RSE) |
| Vc/F, L | V1/F | 160 | L | 168.3 (None% RSE) |
| Q P1/F, L/hour | Q/F | 207 | L/hour |  |
| QP2/F, L/hour | Q2/F | 101 | L/hour |  |
| VP2/F, L | V3/F | 9721 | L |  |
| k on, hour−1 | kon | 0.56 | hour−1 |  |
| k off, hour−1 | koff | 0.05 | hour−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.929). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (kon), so that value has no SI equivalent. Extracted — azithromycin: tlag 1.45 hour, kabs 0.88 hour−1, CL/F 258 L/hour, V1/F 160 L, Q/F 207 L/hour, Q2/F 101 L/hour, V3/F 9.72e+03 L, kon 0.56 hour−1, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of dfmuscle: this record has none, the second reading 0.55. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| T lag, hour | `Q83` · tlag | 1.45 | hour | 5220 | s | h | space_fold (0.95) | psp412537-tbl-0002:row2:col1 | 17.6 (None% RSE) |
| k a, hour−1 | `Q49` · kabs | 0.88 | hour−1 | 0.0002444 | 1/s | 1/h | space_fold (0.95) | psp412537-tbl-0002:row3:col1 |  |
| CL/F, L/hour | `Q27` · CL/F | 258 | L/hour | 7.167e-05 | m3/s | l/h | exact (1) | psp412537-tbl-0002:row4:col1 | 29.3 (None% RSE) |
| Vc/F, L | `Q290` · V1/F | 160 | L | 0.16 | m3 | l | exact (1) | psp412537-tbl-0002:row6:col1 | 168.3 (None% RSE) |
| Q P1/F, L/hour | `Q69` · Q/F | 207 | L/hour | 5.75e-05 | m3/s | l/h | space_fold (0.95) | psp412537-tbl-0002:row8:col1 |  |
| QP2/F, L/hour | `Q80` · Q2/F | 101 | L/hour | 2.806e-05 | m3/s | l/h | special_case (0.95) | psp412537-tbl-0002:row12:col1 |  |
| VP2/F, L | `Q78` · V3/F | 9721 | L | 9.721 | m3 | l | exact (1) | psp412537-tbl-0002:row13:col1 |  |
| k on, hour−1 | `Q329` · kon | 0.56 | hour−1 |  |  | 1/h | space_fold (0.95) | psp412537-tbl-0002:row16:col1 |  |
| k off, hour−1 | `Q330` · koff | 0.05 | hour−1 | 1.389e-05 | 1/s | 1/h | space_fold (0.95) | psp412537-tbl-0002:row17:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'T lag' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Vc/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'k in' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'DFmuscle' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'DFsubcutis' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'DFPML/WBC(cytosol)' routed out of structural estimates ('Interindividual variability (%CV)')
- dropped duplicate Q290 ('VP1/F, L', value '1190') — already have one for this compound
- dropped PD-category row 'k in, hour−1' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412537-tbl-0002:row14:col1'])
- dropped PD-category row 'k out, hour−1' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412537-tbl-0002:row15:col1'])
- unit_dimension_mismatch: 'k on, hour−1' → Q329 (unit '1 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped unlinked row (NIL): 'DFmuscle' — extend the ontology if this is a real PK parameter (source ['psp412537-tbl-0002:row18:col1'])
- dropped unlinked row (NIL): 'DFsubcutis' — extend the ontology if this is a real PK parameter (source ['psp412537-tbl-0002:row19:col1'])
- dropped unlinked row (NIL): 'DFPML/WBC(cytosol)' — extend the ontology if this is a real PK parameter (source ['psp412537-tbl-0002:row20:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=azithromycin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- model-stage split: 'base model 5' is the base model of Hughes_2020 (paper reports 3 stages: base model 5, final model, hybrid model 5 , 14); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.929 (13/14 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dfmuscle]` |  | 0.55 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412537-tbl-0002:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412537-tbl-0002:row6:col1'] |
| C5_dimension_Q329 | fail | 1 / [time] | hour−1 | ['psp412537-tbl-0002:row16:col1'] |
| C5_dimension_Q330 | pass | 1 / [time] |  | ['psp412537-tbl-0002:row17:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412537-tbl-0002:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412537-tbl-0002:row8:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['psp412537-tbl-0002:row13:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['psp412537-tbl-0002:row12:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['psp412537-tbl-0002:row2:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 258 L/h | ['psp412537-tbl-0002:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 160 L | ['psp412537-tbl-0002:row6:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bazithromycin%5D%20Azithromycin_Hughes2020_base&body=Drug%3A%20azithromycin%0ARecord%3A%20Azithromycin_Hughes2020_base%0APaper%3A%20Hughes_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_azithromycin/Azithromycin_Hughes2020_base%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:33 UTC</sub>
