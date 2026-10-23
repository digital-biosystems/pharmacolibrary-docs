<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;benazepril&quot;,&quot;href&quot;:&quot;drugs/drug_benazepril/&quot;},{&quot;label&quot;:&quot;King_2003 \u00b7 single_administration_n_5&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# benazepril — `Benazepril_King2003_single_administration_n_5`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span>

> This record was reviewed on 2026-10-05 09:24 UTC (Rejected), but the paper was screened again on 2026-10-07 05:02 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The benazeprilat record was rejected because the central volume V1/F (0.0005 L/kg) and the elimination rate constant kel (0.0001, taken from a half-life label in h) are dimensionally mismatched and physiologically implausible, indicating unit/scale extraction errors.

<div class="pk-model-meta" hidden drug="benazepril" model-id="Benazepril_King2003_single_administration_n_5" status="rejected" stale="true" population="cats" measured-compound="benazeprilat" parameterization="apparent" topology="1C"></div>

## Citation
King JN, Maurer M, Toutain PL. Pharmacokinetic/pharmacodynamic modelling of the disposition and effect of benazepril and benazeprilat in cats. Journal of veterinary pharmacology and therapeutics 26(3):213–224 (2003).
  ·  DOI: [10.1046/j.1365-2885.2003.00468.x](https://doi.org/10.1046/j.1365-2885.2003.00468.x)

## Population and dosing

**Population:** cats · condition healthy.

**Dosing:** 17.5, 35, 70 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed benazepril, measured benazeprilat.

> **Species: cat.** This record comes from an animal study (cat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V c /F (L/kg) | V/F | 0.0005 | L/kg |
| T 1/2 K 10 (h) | kel | 0.0001 | h |
| B max (ng/mL) | Bmax | 104 | ng/mL |
| P max (nmol/L) | Cmax | 25.1 | nmol/L |
| K d (ng/mL) | KD | 0.0019 | ng/mL |
| F circ (%) | Fab | 10.4 | n ¼ 5 |
| T 1/2 K a (h) | kabs | 0.62 | h |
| AUC free(0-inf) (ng h/mL) 152 ± 85 | AUC∞ | 434 | n ¼ 5 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.846). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The benazeprilat record was rejected because the central volume V1/F (0.0005 L/kg) and the elimination rate constant kel (0.0001, taken from a half-life label in h) are dimensionally mismatched and physiologically implausible, indicating unit/scale extraction errors.**

The parameter labelled 'T 1/2 K 10 (h)' — a half-life in hours — was recorded as the elimination rate constant kel with value 0.0001, a dimension mismatch on a structural parameter, and together with V1/F of 0.0005 L/kg both fall far outside plausible physiological magnitudes. The units recorded for Fab and AUC∞ are 'n ¼ 5', a sample-size notation rather than a unit, and one reported unit could not be converted to SI, so that parameter was carried forward without a value in standard units. A second reader independently extracted the same values (kel 0.0001, V1/F 0.0005, AUC∞ 434, Fab 10.4, Bmax 104, KD 0.0019, Cmax 25.1, kabs 0.62) but disagreed with recording the benazepril-to-benazeprilat hydrolysis link in the model structure. Extracted — benazeprilat: V1/F 0.0005 L/kg, kel 0.0001 h, Bmax 104 ng/mL, Cmax 25.1 nmol/L, KD 0.0019 ng/mL, Fab 10.4 n ¼ 5, kabs 0.62 h, AUC∞ 434 n ¼ 5.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of t 1/2 k a: this record has none, the second reading 0.62; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V c /F (L/kg) | `Q76` · V/F | 0.0005 | L/kg | 3.5e-05 | m3 | l/kg | exact (1) | tab_1:row4:col4 |
| T 1/2 K 10 (h) | `Q47` · kel | 0.0001 | h |  |  | h | exact (1) | tab_1:row6:col5 |
| B max (ng/mL) | `Q332` · Bmax | 104 | ng/mL |  |  | ng/ml | space_fold (0.95) | tab_1:row7:col1, tab_1:row7:col4, tab_1:row7:col5, tab_1:row7:col6, tab_1:row7:col8 |
| P max (nmol/L) | `Q32` · Cmax | 25.1 | nmol/L |  |  | nM/l | llm (0.6) | tab_1:row9:col1, tab_1:row9:col4, tab_1:row9:col5, tab_1:row9:col6, tab_1:row9:col8 |
| K d (ng/mL) | `Q331` · KD | 0.0019 | ng/mL |  |  | ng/ml | space_fold (0.95) | tab_1:row10:col5 |
| F circ (%) | `Q40` · Fab | 10.4 | n ¼ 5 |  |  | n¼5 | llm (0.6) | tab_1:row12:col1, tab_1:row12:col4, tab_1:row12:col5, tab_1:row12:col6, tab_1:row12:col8 |
| T 1/2 K a (h) | `Q49` · kabs | 0.62 | h |  |  | h | exact (1) | tab_1:row13:col5 |
| AUC free(0-inf) (ng h/mL) 152 ± 85 | `Q17` · AUC∞ | 434 | n ¼ 5 |  |  | n¼5 | llm_corrected (0.6) | tab_1:row14:col1, tab_1:row14:col4, tab_1:row14:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameters (units)' — extend the ontology if this is a real PK parameter (source ['tab_1:row3:col1', 'tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row3:col7'])
- unit_dimension_mismatch: 'T 1/2 K 10 (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q332 ('B max (nmol/L)', value '263') — already have one for this compound
- unit_dimension_mismatch: 'P max (nmol/L)' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'K d (nmol/L)' → Q331 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q331 ('K d (nmol/L)', value '4.35') — already have one for this compound
- unit_dimension_unknown: 'n ¼ 5' (Fab)
- unit_dimension_mismatch: 'T 1/2 K a (h)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: 'n ¼ 5' (AUC∞)
- dropped duplicate Q17 ('AUC tot(0-inf) (ng h/mL) 409 ± 128', value '647') — already have one for this compound
- implicit units: 'AUC free(0-inf) (ng h/mL) 152 ± 85' — the LLM proposed 'ng h/mL', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=benazeprilat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V c /F (L/kg)' is the general volume)
- status held at "Needs review" — not promoted
- population split: 'single administration (n ¼ 5)' subgroup of King_2003 (paper reports 2 populations: repeated administration (n ¼ 6), single administration (n ¼ 5))
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 7 linked by role
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row4:col1 = '1.09 ± 0.66 0.975 ± 0.412 1.30 ± 1.60 2.65 ± 0.66 1.74 ± 0.67'
- unparsed cell tab_1:row4:col3 = '2.39 (1.6, 3.6)'
- unparsed cell tab_1:row5:col1 = '2.02 ± 1.54 1.04 ± 0.24 0.825 ± 0.290 0.94 ± 0.36 0.826 ± 0.280 0.622 ± 0.134'
- unparsed cell tab_1:row5:col2 = '0.65 (0.49, 0.87)'
- unparsed cell tab_1:row6:col1 = '0.44 ± 0.26 0.65 ± 0.20'
- unparsed cell tab_1:row6:col2 = '0.90 ± 0.76 2.09 ± 0.48 1.62 ± 0.75'
- unparsed cell tab_1:row6:col4 = '3.67 (2.3, 5.9)'
- unparsed cell tab_1:row7:col7 = '0.59 (0.49, 0.71)'
- unparsed cell tab_1:row8:col7 = '0.59 (0.49, 0.71)'
- unparsed cell tab_1:row9:col7 = '0.62 (0.35, 1.1)'
- unparsed cell tab_1:row10:col1 = '1.09 ± 0.24 1.17 ± 0.31'
- unparsed cell tab_1:row10:col2 = '1.39 ± 0.70 2.48 ± 0.99 1.73 ± 0.43'
- unparsed cell tab_1:row10:col4 = '1.51 (1.2, 1.9)'
- unparsed cell tab_1:row11:col1 = '2.75 ± 0.61 2.95 ± 0.78'
- unparsed cell tab_1:row11:col6 = '1.51 (1.2, 1.9)'
- unparsed cell tab_1:row12:col7 = '1.05 (0.64, 1.7)'
- unparsed cell tab_1:row13:col1 = '1.65 ± 0.52 2.17 ± 0.99'
- unparsed cell tab_1:row13:col2 = '2.81 ± 1.65 1.90 ± 1.66 2.53 ± 1.65'
- unparsed cell tab_1:row13:col4 = '0.90 (0.57, 1.4)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.846 (11/13 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t 1/2 k a]` |  | 0.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 k a]` | 0.62 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | fail | [substance] / [length] ** 3 | nmol/L | ['tab_1:row9:col1', 'tab_1:row9:col4', 'tab_1:row9:col5', 'tab_1:row9:col6', 'tab_1:row9:col8'] |
| C5_dimension_Q331 | pass | [mass] / [length] ** 3 |  | ['tab_1:row10:col5'] |
| C5_dimension_Q47 | fail | [time] | h | ['tab_1:row6:col5'] |
| C5_dimension_Q49 | fail | [time] | h | ['tab_1:row13:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab_1:row4:col4'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | n ¼ 5 | ['tab_1:row14:col1', 'tab_1:row14:col4', 'tab_1:row14:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | fail | volume within physiological range | 0.035 L | ['tab_1:row4:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenazepril%5D%20Benazepril_King2003_single_administration_n_5&body=Drug%3A%20benazepril%0ARecord%3A%20Benazepril_King2003_single_administration_n_5%0APaper%3A%20King_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_benazepril/Benazepril_King2003_single_administration_n_5%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:02 UTC</sub>
