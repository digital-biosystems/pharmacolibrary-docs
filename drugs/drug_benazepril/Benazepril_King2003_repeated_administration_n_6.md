<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;benazepril&quot;,&quot;href&quot;:&quot;drugs/drug_benazepril/&quot;},{&quot;label&quot;:&quot;King_2003 \u00b7 repeated_administration_n_6&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# benazepril — `Benazepril_King2003_repeated_administration_n_6`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.846), gpt-oss:120b (not confirmed, agreement 0.786). The first reading is what the record holds.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: cat.** This record comes from an animal study (cat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**Rejected for a dimension mismatch on a structural parameter: benazeprilat's elimination rate constant kel is recorded as 0.0001 with unit h, a half-life unit rather than inverse time, in this linear cat model.**

The same half-life-versus-rate-constant confusion affects absorption, where kabs is labelled T 1/2 K a with value 0.62 h although it is meant as an absorption rate constant. The bioavailability parameter Fab (9.4 %) carries the garbled unit 'n ¼ 6', which could not be converted to SI, so the parameter reached the record without an SI value. The AUC∞ label embeds the figures 152 ± 85 while the extracted value is 1139 ng·h/mL, and TMDD-type parameters (Bmax 74 ng/mL, KD 0.0019 ng/mL) sit in a general linear structure; a second reader additionally extracted values for several parameters that the first reader left unset. Extracted — benazeprilat: V1/F 1.95 L/kg, kel 0.0001 h, Bmax 74 ng/mL, Cmax 17.2 nmol/L, KD 0.0019 ng/mL, Fab 9.4 n ¼ 6, kabs 0.62 h, AUC∞ 1.14e+03 ng·h/mL.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of t 1/2 k a: this record has none, the second reading 0.62; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:24:11.767547+00:00) predates the upstream re-run (2026-10-07 05:02:33.667430+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `benazepril`, measured `benazeprilat`.

## Citation
King JN et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of veterinary pharm… (2003)
  ·  DOI: [10.1046/j.1365-2885.2003.00468.x](https://doi.org/10.1046/j.1365-2885.2003.00468.x)

## Model component
<dbs-pgx drug="benazepril" model-id="Benazepril_King2003_repeated_administration_n_6" status="rejected" stale="true" population="cats" measured-compound="benazeprilat" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V c /F (L/kg) | `Q76` · V/F | 1.95 | L/kg | 0.13649999999999998 | [l] / [kg] | not captured | exact (1.0) | tab_1:row4:col2, tab_1:row4:col4 | — | not captured |
| T 1/2 K 10 (h) | `Q47` · kel | 0.0001 | h | not captured | [h] | not captured | exact (1.0) | tab_1:row6:col5 | — | not captured |
| B max (ng/mL) | `Q332` · Bmax | 74 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | tab_1:row7:col2, tab_1:row7:col4, tab_1:row7:col5, tab_1:row7:col6, tab_1:row7:col8 | — | not captured |
| P max (nmol/L) | `Q32` · Cmax | 17.2 | nmol/L | not captured | [nM] / [l] | not captured | llm (0.6) | tab_1:row9:col2, tab_1:row9:col4, tab_1:row9:col5, tab_1:row9:col6, tab_1:row9:col8 | — | not captured |
| K d (ng/mL) | `Q331` · KD | 0.0019 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | tab_1:row10:col5 | — | not captured |
| F circ (%) | `Q40` · Fab | 9.4 | n ¼ 6 | not captured | [n¼6] | not captured | llm (0.6) | tab_1:row12:col2, tab_1:row12:col4, tab_1:row12:col5, tab_1:row12:col6, tab_1:row12:col8 | — | not captured |
| T 1/2 K a (h) | `Q49` · kabs | 0.62 | h | not captured | [h] | not captured | exact (1.0) | tab_1:row13:col5 | — | not captured |
| AUC free(0-inf) (ng h/mL) 152 ± 85 | `Q17` · AUC∞ | 1139 | n ¼ 6 | not captured | [n¼6] | not captured | llm_corrected (0.6) | tab_1:row14:col2, tab_1:row14:col4, tab_1:row14:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameters (units)' — extend the ontology if this is a real PK parameter (source ['tab_1:row3:col2', 'tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row3:col7'])
- unit_dimension_mismatch: 'T 1/2 K 10 (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q332 ('B max (nmol/L)', value '186') — already have one for this compound
- unit_dimension_mismatch: 'P max (nmol/L)' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'K d (nmol/L)' → Q331 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q331 ('K d (nmol/L)', value '3.50') — already have one for this compound
- unit_dimension_unknown: 'n ¼ 6' (Fab)
- unit_dimension_mismatch: 'T 1/2 K a (h)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: 'n ¼ 6' (AUC∞)
- dropped duplicate Q17 ('AUC tot(0-inf) (ng h/mL) 409 ± 128', value '1351') — already have one for this compound
- implicit units: 'AUC free(0-inf) (ng h/mL) 152 ± 85' — the LLM proposed 'ng h/mL', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=benazeprilat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V c /F (L/kg)' is the general volume)
- status held at route_to_review — not promoted
- population split: 'repeated administration (n ¼ 6)' subgroup of King_2003 (paper reports 2 populations: repeated administration (n ¼ 6), single administration (n ¼ 5))
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.846 (11/13 fields) | 2 |
| `gpt-oss:120b` | not confirmed | 0.786 (11/14 fields) | 3 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t 1/2 k a]` | not captured | 0.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 k a]` | 0.62 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 k 10].parameter_id` | Q47 | Q60 | mismatch |
| `gpt-oss:120b` | `parameters[t 1/2 k a]` | not captured | 0.62 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 k a]` | 0.62 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | fail | [substance] / [length] ** 3 | nmol/L | not captured | not captured | ['tab_1:row9:col2', 'tab_1:row9:col4', 'tab_1:row9:col5', 'tab_1:row9:col6', 'tab_1:row9:col8'] |
| C5_dimension_Q331 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row10:col5'] |
| C5_dimension_Q47 | fail | [time] | h | not captured | not captured | ['tab_1:row6:col5'] |
| C5_dimension_Q49 | fail | [time] | h | not captured | not captured | ['tab_1:row13:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row4:col2', 'tab_1:row4:col4'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | n ¼ 6 | not captured | not captured | ['tab_1:row14:col2', 'tab_1:row14:col4', 'tab_1:row14:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 136 L | not captured | not captured | ['tab_1:row4:col2', 'tab_1:row4:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_benazepril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `King_2003` / `King_2003::repeated_administration_n_6`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:02 UTC</sub>
