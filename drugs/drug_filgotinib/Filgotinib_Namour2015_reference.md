<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;filgotinib&quot;,&quot;href&quot;:&quot;drugs/drug_filgotinib/&quot;},{&quot;label&quot;:&quot;Namour_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# filgotinib — `Filgotinib_Namour2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C7 apparent-parameter coherence violated (double correction).**

Extracted — filgotinib: kabs -0.733 /h, CL/F 3.97 L/h, V/F 3.08 L, Q/F 2.02 L/h, FH 0.216; active metabolite: CL/F 1.04 L/h, V1/F 4.36 L.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Namour F et al., Pharmacokinetics and Pharmacokinetic/Ph…, Clinical pharmacokinetics (2015)
  ·  DOI: [10.1007/s40262-015-0240-z](https://doi.org/10.1007/s40262-015-0240-z)

<div class="pk-model-meta" hidden drug="filgotinib" model-id="Filgotinib_Namour2015_reference" status="rejected" stale="false" population="healthy male volunteers and rheumatoid arthritis patients" measured-compound="filgotinib" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 7 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, Q/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka a (/h) | `Q49` · kabs | -0.733 | /h | -0.00020361111111111112 | [1] / [h] | 5.64 | llm_confirmed (0.6) | Tab4:row1:col1 | — | not captured |
| CLP/F a (L/h) | `Q27` · CL/F | 3.97 | L/h | 1.1027777777777779e-06 | [l] / [h] | 1.04 | llm_confirmed (0.6) | Tab4:row2:col1 | — | 0.102 (19.9% RSE) |
| effect_of_weight | `Q900` · effect_of_weight | 0.679 | not captured | not captured | not captured | 32.5 | not captured (not captured) | Tab4:row3:col1 | — | not captured |
| V C/Fa (L) | `Q76` · V/F | 3.08 | L | 0.0030800000000000003 | [l] | 9.77 | llm (0.6) | Tab4:row4:col1 | — | not captured |
| effect_of_sex | `Q900` · effect_of_sex | 2.95 | not captured | not captured | not captured | 47.7 | not captured (not captured) | Tab4:row5:col1 | — | not captured |
| Q/F a (L/h) | `Q69` · Q/F | 2.02 | L/h | 5.611111111111111e-07 | [l] / [h] | 7.16 | llm_confirmed (0.6) | Tab4:row6:col1 | — | not captured |
| CLM/F a (L/h) | `Q27` · CL/F | 1.04 | L/h | 2.888888888888889e-07 | [l] / [h] | 3.44 | exact (1.0) | Tab4:row8:col1 | — | not captured |
| V M/F a (L) | `Q290` · V1/F | 4.36 | L | 0.00436 | [l] | 0.813 | exact (1.0) | Tab4:row9:col1 | — | not captured |
| Relative increase in bioavailability in RA patients vs healthy volunteers | `Q42` · FH | 0.216 | not captured | not captured | not captured | 39.0 | llm_corrected (0.6) | Tab4:row12:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLP/F a (L/h)' routed out of structural estimates ('BSV variance (% RSE)')
- table section iiv: 'V C/Fa (L)' routed out of structural estimates ('BSV variance (% RSE)')
- table section iiv: 'CLM/F a (L/h)' routed out of structural estimates ('BSV variance (% RSE)')
- table section iiv: 'V M/F a (L)' routed out of structural estimates ('BSV variance (% RSE)')
- covariate level 'Effect of weight' → Q900:effect_of_weight = 0.679 (linear_fractional on Q27)
- covariate level 'Effect of sex' → Q900:effect_of_sex = 2.95 (linear_fractional on Q27)
- dropped duplicate Q76 ('V P/F a (L)', value '4.72') — already have one for this compound
- dropped unlinked row (NIL): 'FRAC300 mg b' — extend the ontology if this is a real PK parameter (source ['Tab4:row10:col1'])
- dropped unlinked row (NIL): 'FRAC450 mg b' — extend the ontology if this is a real PK parameter (source ['Tab4:row11:col1'])
- routed 'Variance of unexplained variability on filgotinib concentration (σP,prop2)' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- routed 'Variance of unexplained variability on metabolite concentration (σM,prop2)' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=filgotinib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at route_to_review — not promoted
- row roles: 2 per-group rows of filgotinib fraction_metabolized but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 11 linked by role; re-tagged parent→active metabolite ×5
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab4: unparsed_numeric_cell
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row2:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row8:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab4:row1:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row6:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row4:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.216 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.97 L/h | not captured | not captured | ['Tab4:row2:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.04 L/h | not captured | not captured | ['Tab4:row8:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 4.36 L | not captured | not captured | ['Tab4:row9:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 3.08 L | not captured | not captured | ['Tab4:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_filgotinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Namour_2015` / `Namour_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 22:08 UTC</sub>
