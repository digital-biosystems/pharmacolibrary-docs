<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;baricitinib&quot;,&quot;href&quot;:&quot;drugs/drug_baricitinib/&quot;},{&quot;label&quot;:&quot;Decker_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baricitinib — `Baricitinib_Decker2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (theta_d1_category), so that value has no SI equivalent. Extracted — baricitinib: D1 0.457 h, CLNR 3.36 L/h, CL/F 6.34 L/h, V1/F 92.6 L, Qd 2.67 L/h, V2/F 25.6 L, tlag 0.147 h, allometric_exponent 0.75.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Decker RL et al., A population pharmacokinetic model usin…, CPT: pharmacometrics & syst… (2024)
  ·  DOI: [10.1002/psp4.13131](https://doi.org/10.1002/psp4.13131)

<div class="pk-model-meta" hidden drug="baricitinib" model-id="Baricitinib_Decker2024_reference" status="rejected" stale="false" population="pediatric patients with juvenile idiopathic arthritis" measured-compound="baricitinib" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| D1 (h) | `Q310` · D1 | 0.457 | h | 1645.2 | [h] | not captured | exact (1.0) | psp413131-tbl-0002:row1:col1 | — | 138.4 (None% RSE) |
| CLnr/F(L/h) b | `Q79` · CLNR | 3.36 | L/h | 9.333333333333333e-07 | [l] / [h] | not captured | llm (0.6) | psp413131-tbl-0002:row3:col1 | — | not captured |
| CLr/F (L/h) b | `Q27` · CL/F | 6.34 | L/h | 1.7611111111111112e-06 | [l] / [h] | not captured | llm (0.6) | psp413131-tbl-0002:row4:col1 | — | not captured |
| V1/F (L) c | `Q290` · V1/F | 92.6 | L | 0.0926 | [l] | not captured | llm_confirmed (0.6) | psp413131-tbl-0002:row5:col1 | — | 33.8 (None% RSE) |
| Q (L/h) d | `Q364` · Qd | 2.67 | L/h | 7.416666666666667e-07 | [l] / [h] | not captured | space_fold (0.95) | psp413131-tbl-0002:row6:col1 | — | 15.1 (None% RSE) |
| V2/F (L) e | `Q82` · V2/F | 25.6 | L | 0.0256 | [l] | not captured | llm_confirmed (0.6) | psp413131-tbl-0002:row7:col1 | — | 56.5 (None% RSE) |
| LAG (h) | `Q83` · tlag | 0.147 | h | 529.1999999999999 | [h] | not captured | llm (0.6) | psp413131-tbl-0002:row8:col1 | — | not captured |
| Allometric Scaling CL b | `Q319` · allometric_exponent | 0.75 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | psp413131-tbl-0002:row9:col1 | — | not captured |
| theta_d1_category | `Q900` · theta_d1_category | 0.501 | h | not captured | not captured | not captured | not captured (not captured) | psp413131-tbl-0002:row2:col1 | — | not captured |
| theta_q314_egfr | `Q900` · theta_q314_egfr | 0.00586 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413131-tbl-0002:row11:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |
| Q | Q30 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'D1 (h)' routed out of structural estimates ('BSV a (%SEE)')
- table section iiv: 'CLnr/F(L/h) b' routed out of structural estimates ('BSV a (%SEE)')
- table section iiv: 'CLr/F (L/h) b' routed out of structural estimates ('BSV a (%SEE)')
- table section iiv: 'V1/F (L) c' routed out of structural estimates ('BSV a (%SEE)')
- table section iiv: 'Q (L/h) d' routed out of structural estimates ('BSV a (%SEE)')
- table section iiv: 'V2/F (L) e' routed out of structural estimates ('BSV a (%SEE)')
- table section iiv: 'Covariance for CLnr/F and CLr/F g' routed out of structural estimates ('BSV a (%SEE)')
- table section iiv: 'Covariance for CLr and V1/F g' routed out of structural estimates ('BSV a (%SEE)')
- dropped duplicate Q319 ('Allometric Scaling V c , e', value '1') — already have one for this compound
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baricitinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q40 (Fab): F = (CLnr/F + CLr/F)*((WTE/74)^
- bound model equation to Q30 (Q): Q = 2.67*((WTE/74)^
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Q'; equation kept verbatim
- status held at route_to_review — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 2
- captured model equation F = (CLnr/F + CLr/F)*((WTE/74)^
- captured model equation Q = 2.67*((WTE/74)^

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413131-tbl-0002:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413131-tbl-0002:row5:col1'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['psp413131-tbl-0002:row1:col1'] |
| C5_dimension_Q364 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413131-tbl-0002:row6:col1'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413131-tbl-0002:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413131-tbl-0002:row7:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp413131-tbl-0002:row8:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.34 L/h | not captured | not captured | ['psp413131-tbl-0002:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 92.6 L | not captured | not captured | ['psp413131-tbl-0002:row5:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 25.6 L | not captured | not captured | ['psp413131-tbl-0002:row7:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_baricitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Decker_2024` / `Decker_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:41 UTC</sub>
