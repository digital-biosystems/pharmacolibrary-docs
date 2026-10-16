<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;abemaciclib&quot;,&quot;href&quot;:&quot;drugs/drug_abemaciclib/&quot;},{&quot;label&quot;:&quot;Chigutsa_2020 \u00b7 estimate_see&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abemaciclib — `Abemaciclib_Chigutsa2020_estimate_see`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.406). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Abemaciclib Fab, the fraction reaching systemic circulation, is 0.868 with an unconvertible %SEE unit, causing a structural-parameter dimension mismatch and rejection.**

The record gives Fab as 0.868 with unit %SEE, although its meaning is absolute bioavailability—the fraction reaching systemic circulation. That reported unit could not be converted to SI, leaving the structural parameter without an SI value and producing the dimension mismatch. Extracted — abemaciclib: Fab 0.868 %SEE, R1 91.1 µmol/h, MTT 1.44 h, V1 588 L, Q 4.57 L/h, V2 159 L, D1 3.18 h, tlag 1.74 h, … (+1); M2 (LSN2839567): CLfm 280 L/h, CL 254 L/h; M20 (LSN3106726): CLfm 705 L/h, CL 431 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the links between molecules: this record has abemaciclib → m2 (lsn2839567) (metabolism); abemaciclib → m20 (lsn3106726) (metabolism), the second reading abemaciclib → m2 (metabolism); abemaciclib → m20 (metabolism); it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Chigutsa E et al., Development and Application of a Mechan…, CPT: pharmacometrics & syst… (2020)
  ·  DOI: [10.1002/psp4.12544](https://doi.org/10.1002/psp4.12544)

<div class="pk-model-meta" hidden drug="abemaciclib" model-id="Abemaciclib_Chigutsa2020_estimate_see" status="rejected" stale="false" population="healthy subjects and patients with cancer" measured-compound="abemaciclib" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 13 extracted, plus 6 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Fraction of dose entering gut compartment, F a | `Q40` · Fab | 0.868 | %SEE | not captured | [s] · [%] · [ee] | not captured | llm (0.6) | psp412544-tbl-0002:row1:col1 | — | not captured |
| Maximum rate of absorption, ka,max (µmol/h) | `Q307` · R1 | 91.1 | µmol/h | not captured | [[µM] · [ol]] / [h] | not captured | llm_corrected (0.6) | psp412544-tbl-0002:row3:col1 | — | not captured |
| MTT (h) | `Q81` · MTT | 1.44 | h | not captured | [h] | not captured | exact (1.0) | psp412544-tbl-0002:row5:col1 | — | not captured |
| Central volume (L) | `Q63` · V1 | 588 | L | 0.588 | [l] | not captured | exact (1.0) | psp412544-tbl-0002:row6:col1 | — | not captured |
| Intercompartmental clearance (L/h) | `Q30` · Q | 4.57 | L/h | 1.2694444444444445e-06 | [l] / [h] | not captured | exact (1.0) | psp412544-tbl-0002:row7:col1 | — | not captured |
| Peripheral volume (L) | `Q64` · V2 | 159 | L | 0.159 | [l] | not captured | exact (1.0) | psp412544-tbl-0002:row8:col1 | — | not captured |
| Zero‐order absorption duration (h) | `Q310` · D1 | 3.18 | h | 11448.0 | [h] | not captured | llm_corrected (0.6) | psp412544-tbl-0002:row9:col1 | — | not captured |
| Absorption lag time (h) | `Q83` · tlag | 1.74 | h | 6264.0 | [h] | not captured | exact (1.0) | psp412544-tbl-0002:row10:col1 | — | not captured |
| CLint to form M2 in liver (L/h) c , c | `Q370` · CLfm | 280 | L/h | 7.777777777777778e-05 | L/h | not captured | exact (1.0) | psp412544-tbl-0002:row13:col1 | — | not captured |
| CLint to form M20 in liver (L/h) c , c | `Q370` · CLfm | 705 | L/h | 0.00019583333333333331 | L/h | not captured | exact (1.0) | psp412544-tbl-0002:row14:col1 | — | not captured |
| CLint of M2 in liver (L/h) | `Q22` · CL | 254 | L/h | 7.055555555555556e-05 | [l] / [h] | not captured | exact (1.0) | psp412544-tbl-0002:row15:col1 | — | not captured |
| CLint of M20 in liver (L/h) | `Q22` · CL | 431 | L/h | 0.00011972222222222222 | [l] / [h] | not captured | exact (1.0) | psp412544-tbl-0002:row16:col1 | — | not captured |
| theta_q1_category | `Q900` · theta_q1_category | 52.7 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412544-tbl-0002:row4:col1 | — | not captured |
| theta_q305_category | `Q900` · theta_q305_category | 0.361 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412544-tbl-0002:row11:col1 | — | not captured |
| theta_q305_category | `Q900` · theta_q305_category | 0.284 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412544-tbl-0002:row12:col1 | — | not captured |
| theta_tlag_formulation | `Q900` · theta_tlag_formulation | 0.846 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412544-tbl-0002:row19:col1 | — | not captured |
| theta_tlag_formulation | `Q900` · theta_tlag_formulation | 0.968 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412544-tbl-0002:row20:col1 | — | not captured |
| theta_q49_formulation | `Q900` · theta_q49_formulation | -0.513 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412544-tbl-0002:row21:col1 | — | not captured |
| ka | `Q49` · kabs | 0.31 | 1/h) | 8.61111111111111e-05 | 1/h | not captured | review_gapfill (0.7) | Fleisher_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'estimate (%see)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- unit_dimension_unknown: '%SEE' (Fab)
- dropped duplicate Q40 ('Fraction of F a absorbed via transit compartment', value '0.458') — already have one for this compound
- unit_dimension_mismatch: 'Maximum rate of absorption, ka,max (µmol/h)' → Q307 (unit '[substance] / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_unknown: '%SEE' (CLfm)
- dropped unlinked row (NIL): 'Box‐cox shape for zero‐order duration ETAs' — extend the ontology if this is a real PK parameter (source ['psp412544-tbl-0002:row17:col1'])
- dropped duplicate Q40 ('Diarrhea effect on Fa d', value '-0.417') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.846' (source ['psp412544-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number '0.968' (source ['psp412544-tbl-0002:footnote', 'psp412544-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '6' (source ['psp412544-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q305 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CLint to form M2 in liver (L/h) c , c' → L/h (from the paper text: 'The parameter is listed as “CLint to form M2 in liver (L/h).”')
- implicit units: 'CLint to form M20 in liver (L/h) c , c' → L/h (from the paper text: 'The parameter is listed as “CLint to form M20 in liver (L/h).”')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abemaciclib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0, 0]
- status held at route_to_review — not promoted
- population split: 'estimate (%see)' subgroup of Chigutsa_2020 (paper reports 5 populations: % variability a , a (%see), estimate (%see), external validation with phase iii data, nca(200 mg), semimechanistic model development)
- row roles (LLM): model_class=compartmental; 35/35 row label(s) assigned, 44 linked by role; re-tagged parent→M2 (LSN2839567) ×39, parent→M20 (LSN3106726) ×6, abemaciclib→parent ×4
- molar mass: no plausible PubChem entry for 'M2 (LSN2839567)' ('no full name in the paper') — left in mass units
- molar mass: no plausible PubChem entry for 'M20 (LSN3106726)' ('no full name in the paper') — left in mass units
- molar mass: none found for 'M2 (LSN2839567)' — its concentrations stay mass-only
- molar mass: none found for 'M20 (LSN3106726)' — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Fleisher_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell psp412544-tbl-0002:row1:col2 = '7.08 (fixed) b , b'
- unparsed cell psp412544-tbl-0002:row1:col3 = '0.882 (0.874–0.890)'
- unparsed cell psp412544-tbl-0002:row1:col4 = '7.08 (fixed) b , b'
- unparsed cell psp412544-tbl-0002:row2:col3 = '0.479 (0.453–0.507)'
- unparsed cell psp412544-tbl-0002:row3:col3 = '97.6 (85.0–111)'
- unparsed cell psp412544-tbl-0002:row3:col4 = '71.5 (60.6–83.7)'
- unparsed cell psp412544-tbl-0002:row4:col3 = '51.8 (47.8–56.2)'
- unparsed cell psp412544-tbl-0002:row5:col3 = '1.52 (1.43–1.62)'
- unparsed cell psp412544-tbl-0002:row5:col4 = '70.1 (64.2–77.9)'
- unparsed cell psp412544-tbl-0002:row6:col3 = '604 (563–635)'
- unparsed cell psp412544-tbl-0002:row6:col4 = '65.7 (59.9–72.8)'
- unparsed cell psp412544-tbl-0002:row7:col3 = '3.66 (3.10–4.29)'
- unparsed cell psp412544-tbl-0002:row8:col3 = '152 (132–184)'
- unparsed cell psp412544-tbl-0002:row9:col3 = '3.04 (2.52–3.84)'
- unparsed cell psp412544-tbl-0002:row9:col4 = '810 (533–1278)'
- unparsed cell psp412544-tbl-0002:row10:col3 = '1.76 (1.69–1.80)'
- unparsed cell psp412544-tbl-0002:row11:col3 = '0.401 (0.366–0.432)'
- unparsed cell psp412544-tbl-0002:row12:col3 = '0.306 (0.276–0.339)'
- unparsed cell psp412544-tbl-0002:row13:col2 = 'BSV of 44.9 (27.1) for healthy and 57.9 (39.5) for patients. WSV of 68.1 (5.12) for patients'
- unparsed cell psp412544-tbl-0002:row13:col3 = '235 (199–284)'
- unparsed cell psp412544-tbl-0002:row13:col4 = 'BSV of 44.3 (36.1–54.5) for healthy and 56.7 (44.8–71.2) for patients. WSV of 68.7 (59.6–80.7) for patients'
- unparsed cell psp412544-tbl-0002:row14:col2 = 'BSV of 44.9 (27.1) for healthy and 57.9 (39.5) for patients. WSV of 68.1 (5.12) for patients'
- unparsed cell psp412544-tbl-0002:row14:col3 = '700 (627–775)'
- unparsed cell psp412544-tbl-0002:row14:col4 = 'BSV of 44.3 (36.1–54.5) for healthy and 56.7 (44.8–71.2) for patients. WSV of 68.7 (59.6–80.7) for patients'
- unparsed cell psp412544-tbl-0002:row15:col3 = '241 (218–271)'
- unparsed cell psp412544-tbl-0002:row15:col4 = '42.2 (32.9–50.4)'
- unparsed cell psp412544-tbl-0002:row16:col3 = '454 (417–489)'
- unparsed cell psp412544-tbl-0002:row16:col4 = '42.1 (32.6–51.4)'
- unparsed cell psp412544-tbl-0002:row17:col3 = '0.145 (0.116–0.184)'
- unparsed cell psp412544-tbl-0002:row18:col3 = '−0.0079 (−1.29, 2.65 × 10−7)'
- unparsed cell psp412544-tbl-0002:row19:col3 = '0.872 (0.618–1.06)'
- unparsed cell psp412544-tbl-0002:row20:col3 = '0.982 (0.770–1.12)'
- unparsed cell psp412544-tbl-0002:row21:col3 = '−0.487 (−0.587 to −0.376)'
- unparsed cell psp412544-tbl-0002:row23:col4 = '0.908 (0.869–0.927)'
- companion parameter table 3 transcribed (95 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.406 (13/32 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['abemaciclib', 'm2 (lsn2839567)', 'metabolism'], ['abemaciclib', 'm20 (lsn3106726)', 'metabolism']] | [['abemaciclib', 'm2', 'metabolism'], ['abemaciclib', 'm20', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[clint of m2 in liver]` | not captured | 254 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clint of m2 in liver]` | 254 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[clint of m20 in liver]` | not captured | 431 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clint of m20 in liver]` | 431 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[clint to form m2 in liver (l/h) c , c]` | not captured | 280 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clint to form m2 in liver (l/h) c , c]` | 280 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[clint to form m20 in liver (l/h) c , c]` | not captured | 705 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clint to form m20 in liver (l/h) c , c]` | 705 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[fraction of dose entering gut compartment, f a].parameter_id` | Q40 | Q44 | mismatch |
| `qwen3.8-27b` | `parameters[ka]` | 0.31 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[maximum rate of absorption, ka,max].parameter_id` | Q307 | Q49 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q305_category]` | not captured | 0.361 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q305_category]` | 0.361 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q305_category]` | not captured | 0.284 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q305_category]` | 0.284 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q315_category]` | not captured | 0.19 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q49_formulation]` | -0.513 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[zero‐order absorption duration]` | 3.18 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row15:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row16:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row7:col1'] |
| C5_dimension_Q307 | fail | [substance] / [time] | µmol/h | not captured | not captured | ['psp412544-tbl-0002:row3:col1'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row9:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row13:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row14:col1'] |
| C5_dimension_Q49 | pass | not captured | not captured | not captured | not captured | ['Fleisher_2021:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412544-tbl-0002:row6:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412544-tbl-0002:row8:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row10:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 254.0 | not captured | not captured | ['psp412544-tbl-0002:row15:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 254 L/h | not captured | not captured | ['psp412544-tbl-0002:row15:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 431 L/h | not captured | not captured | ['psp412544-tbl-0002:row16:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 588 L | not captured | not captured | ['psp412544-tbl-0002:row6:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 159 L | not captured | not captured | ['psp412544-tbl-0002:row8:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_abemaciclib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chigutsa_2020` / `Chigutsa_2020::estimate_see`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 20:15 UTC</sub>
