<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lidocaine&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/&quot;},{&quot;label&quot;:&quot;Kim_2021 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lidocaine — `Lidocaine_Kim2021_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> This record was reviewed on 2026-10-05 09:27 UTC (Rejected), but the paper was screened again on 2026-10-06 03:23 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The lidocaine rat model record was rejected because apparent parameters (V1/F 2.57 L, V2/F 0.07 L, Q/F 0.13 L/h, CLm1/F 14.94 L/h) were double-corrected for bioavailability, a structural parameter had a dimension mismatch, and clearance/volume magnitudes were physiologically implausible, with one reported unit that could not be converted to SI.

<div class="pk-model-meta" hidden drug="lidocaine" model-id="Lidocaine_Kim2021_estimate" status="rejected" stale="true" population="male Sprague-Dawley rats" measured-compound="lidocaine" parameterization="apparent" topology="general_linear"></div>

## Citation
Kim JH, Kang DW, Choi GW, Lee SB, Lee S, Cho HY. Evaluation of Lidocaine and Metabolite Pharmacokinetics in Hyaluronic Acid Injection. Pharmaceutics 13(2) (2021).
  ·  DOI: [10.3390/pharmaceutics13020203](https://doi.org/10.3390/pharmaceutics13020203)

## Population and dosing

**Population:** male Sprague-Dawley rats · condition healthy · age group adult.

**Dosing:** 210, 280, 700, 2100 mg, iv, sc, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 13 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Ka1 (h−1) | kabs | 5.92 | h−1 |  |
| V1/F (L) | V1/F | 2.57 | L |  |
| V2/F (L) | V2/F | 0.07 | L |  |
| CLd/F (L/h) | Q/F | 0.13 | L/h |  |
| Fr | FR | 0.373 |  |  |
| MTT (h) | MTT | 0.64 | h |  |
| Ka2(h−1) | kabs | 1.67 | h−1 |  |
| Vmax (nmol/h) | Vmax | 423962.94 | nmol/h | 0.08 (None% RSE) |
| Km (nmol/L) | Km | 136808.67 | nmol/L | 0.17 (None% RSE) |
| CLm1/F (L/h) | CL/F | 14.94 | L/h |  |
| Fm1 | fm | 0.65 |  |  |
| CLm2/F (L/h) | CL/F | 1.09 | L/h |  |
| Fm2 | fm | 0.47 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lidocaine rat model record was rejected because apparent parameters (V1/F 2.57 L, V2/F 0.07 L, Q/F 0.13 L/h, CLm1/F 14.94 L/h) were double-corrected for bioavailability, a structural parameter had a dimension mismatch, and clearance/volume magnitudes were physiologically implausible, with one reported unit that could not be converted to SI.**

The record lists lidocaine parameters already adjusted for bioavailability (V1/F, V2/F, Q/F, CLm1/F), yet the coherence check found a double correction applied to these apparent parameters. A dimension mismatch was flagged on a structural parameter, and the clearance/volume values fell outside a physiological window, consistent with a unit or scale extraction error. One reported unit could not be converted to SI, so that parameter was carried without an SI value. The second reader additionally supplied relative standard errors absent from this record (e.g., CLd/F 0.37%, CLm1/F 15.31%, Fm1 1.06%) and classified the absorption half-life parameter (t1/2ka, 5.92 h−1) differently from this record. Extracted — lidocaine: t1/2ka 5.92 h−1, V1/F 2.57 L, V2/F 0.07 L, Q/F 0.13 L/h, FR 0.373, MTT 0.64 h, Vmax 4.24e+05 nmol/h, Km 1.37e+05 nmol/L, … (+2).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has lidocaine → monoethylglycylxylidide (metabolism); monoethylglycylxylidide → glycylxylidide (metabolism), the second reading lidocaine → megx (metabolism); megx → gx (metabolism); it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Ka1 (h−1) | `Q49` · kabs | 5.92 | h−1 | 0.001644 | 1/s | 1/h | exact (1) | pharmaceutics-13-00203-t004:row3:col2 |  |
| V1/F (L) | `Q290` · V1/F | 2.57 | L | 0.00257 | m3 | l | exact (1) | pharmaceutics-13-00203-t004:row4:col2 |  |
| V2/F (L) | `Q82` · V2/F | 0.07 | L | 7e-05 | m3 | l | exact (1) | pharmaceutics-13-00203-t004:row5:col2 |  |
| CLd/F (L/h) | `Q69` · Q/F | 0.13 | L/h | 3.611e-08 | m3/s | l/h | exact (1) | pharmaceutics-13-00203-t004:row6:col2 |  |
| Fr | `Q43` · FR | 0.373 |  |  |  |  | exact (1) | pharmaceutics-13-00203-t004:row7:col2 |  |
| MTT (h) | `Q81` · MTT | 0.64 | h |  |  | h | exact (1) | pharmaceutics-13-00203-t004:row8:col2 |  |
| Ka2(h−1) | `Q49` · kabs | 1.67 | h−1 | 0.0004639 | 1/s | 1/h | exact (1) | pharmaceutics-13-00203-t004:row10:col2 |  |
| Vmax (nmol/h) | `Q66` · Vmax | 423962.94 | nmol/h |  |  | nM/h | special_case (0.95) | pharmaceutics-13-00203-t004:row11:col2 | 0.08 (None% RSE) |
| Km (nmol/L) | `Q1` · Km | 136808.67 | nmol/L |  |  | nM/l | exact (1) | pharmaceutics-13-00203-t004:row12:col2 | 0.17 (None% RSE) |
| CLm1/F (L/h) | `Q27` · CL/F | 14.94 | L/h | 4.15e-06 | m3/s | l/h | exact (1) | pharmaceutics-13-00203-t004:row13:col2 |  |
| Fm1 | `Q45` · fm | 0.65 |  |  |  |  | exact (1) | pharmaceutics-13-00203-t004:row14:col2 |  |
| CLm2/F (L/h) | `Q27` · CL/F | 1.09 | L/h | 3.028e-07 | m3/s | l/h | exact (1) | pharmaceutics-13-00203-t004:row15:col2 |  |
| Fm2 | `Q45` · fm | 0.47 |  |  |  |  | exact (1) | pharmaceutics-13-00203-t004:row16:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'ε1' routed out of structural estimates ('Residual error')
- table section residual_error: 'ε2' routed out of structural estimates ('Residual error')
- table section residual_error: 'ε3' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'Ntr' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00203-t004:row9:col2'])
- unit_dimension_mismatch: 'Vmax (nmol/h)' → Q66 (unit '[substance] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Km (nmol/L)' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lidocaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — a metabolite is formed from another metabolite (a chain)
- status held at "Needs review" — not promoted
- population split: 'estimate' subgroup of Kim_2021 (paper reports 12 populations: (0.3% solution, iv), (0.3% solution, sc), (lha 0.3%, sc), (lha 1%, sc), (lha 3%, sc), estimate, group 1, group 2, group 3, group 4, group 5, gx)
- row roles (LLM): model_class=compartmental; 28/28 row label(s) assigned, 18 linked by role; re-tagged parent→monoethylglycylxylidide ×6, parent→glycylxylidide ×4
- fm scheme: monoethylglycylxylidide = Fm1 = 0.65 of CL, glycylxylidide = Fm1*Fm2 = 0.305 of CL
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-13-00203-t004:row3:col4 = '(5.19, 6.64)'
- unparsed cell pharmaceutics-13-00203-t004:row4:col1 = 'Apparent volume of distribution of compartment 1'
- unparsed cell pharmaceutics-13-00203-t004:row4:col4 = '(2.23, 2.89)'
- unparsed cell pharmaceutics-13-00203-t004:row5:col1 = 'Apparent volume of distribution of compartment 2'
- unparsed cell pharmaceutics-13-00203-t004:row5:col4 = '(0.06, 0.07)'
- unparsed cell pharmaceutics-13-00203-t004:row6:col4 = '(0.1323, 0.1332)'
- unparsed cell pharmaceutics-13-00203-t004:row7:col4 = '(0.371, 0.374)'
- unparsed cell pharmaceutics-13-00203-t004:row8:col4 = '(0.57, 0.70)'
- unparsed cell pharmaceutics-13-00203-t004:row9:col4 = '(4.96, 4.98)'
- unparsed cell pharmaceutics-13-00203-t004:row10:col4 = '(1.59, 1.74)'
- unparsed cell pharmaceutics-13-00203-t004:row11:col4 = '(383,479.15, 464,446.73)'
- unparsed cell pharmaceutics-13-00203-t004:row12:col4 = '(112,613.9, 161,003.44)'
- unparsed cell pharmaceutics-13-00203-t004:row13:col4 = '(12.76, 17.11)'
- unparsed cell pharmaceutics-13-00203-t004:row14:col4 = '(0.644, 0.646)'
- unparsed cell pharmaceutics-13-00203-t004:row15:col4 = '(1.04, 1.14)'
- unparsed cell pharmaceutics-13-00203-t004:row16:col4 = '(0.46, 0.47)'
- unparsed cell pharmaceutics-13-00203-t004:row18:col4 = '(0.127, 0.152)'
- unparsed cell pharmaceutics-13-00203-t004:row19:col4 = '(0.181, 0.208)'
- unparsed cell pharmaceutics-13-00203-t004:row20:col4 = '(0.077, 0.089)'
- unparsed cell pharmaceutics-13-00203-t004:row21:col4 = '(0.159, 0.183)'
- unparsed cell pharmaceutics-13-00203-t004:row22:col4 = '(0.350, 0.402)'
- unparsed cell pharmaceutics-13-00203-t004:row23:col1 = 'IIV of CLm2'
- unparsed cell pharmaceutics-13-00203-t004:row23:col4 = '(0.216, 0.248)'
- unparsed cell pharmaceutics-13-00203-t004:row25:col4 = '(0.485, 0.504)'
- unparsed cell pharmaceutics-13-00203-t004:row26:col4 = '(0.562, 0.597)'
- unparsed cell pharmaceutics-13-00203-t004:row27:col4 = '(0.399, 0.430)'
- transposed table Kim_2021_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 3 transcribed (59 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.5 (11/22 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['lidocaine', 'monoethylglycylxylidide', 'metabolism'], ['monoethylglycylxylidide', 'glycylxylidide', 'metabolism']] | [['lidocaine', 'megx', 'metabolism'], ['megx', 'gx', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[clm1/f]` |  | 14.94 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm1/f]` | 14.94 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm2/f]` |  | 1.09 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm2/f]` | 1.09 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[fm1]` |  | 0.65 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fm1]` | 0.65 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[fm2]` |  | 0.47 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fm2]` | 0.47 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka2]` | 1.67 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ntr]` |  | 4.97 | only_one_extracted |

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
| C5_dimension_Q1 | fail | [substance] / [length] ** 3 | nmol/L | ['pharmaceutics-13-00203-t004:row12:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-13-00203-t004:row13:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-13-00203-t004:row15:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['pharmaceutics-13-00203-t004:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-13-00203-t004:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-13-00203-t004:row10:col2'] |
| C5_dimension_Q66 | fail | [substance] / [time] | nmol/h | ['pharmaceutics-13-00203-t004:row11:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-13-00203-t004:row6:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['pharmaceutics-13-00203-t004:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 14.9 L/h | ['pharmaceutics-13-00203-t004:row13:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.09 L/h | ['pharmaceutics-13-00203-t004:row15:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.57 L | ['pharmaceutics-13-00203-t004:row4:col2'] |
| C9_phys_window_Q82 | fail | volume within physiological range | 0.07 L | ['pharmaceutics-13-00203-t004:row5:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blidocaine%5D%20Lidocaine_Kim2021_estimate&body=Drug%3A%20lidocaine%0ARecord%3A%20Lidocaine_Kim2021_estimate%0APaper%3A%20Kim_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lidocaine/Lidocaine_Kim2021_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 03:23 UTC</sub>
