<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;alirocumab&quot;,&quot;href&quot;:&quot;drugs/drug_alirocumab/&quot;},{&quot;label&quot;:&quot;Djebli_2017 \u00b7 inter_individual_variability_estimate_cv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alirocumab_Lunven2014_reference&quot;,&quot;label&quot;:&quot;Lunven_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alirocumab/Alirocumab_Lunven2014_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Nolain_2022_LDL_C&quot;,&quot;label&quot;:&quot;Nolain_2022 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_alirocumab/pd_Nolain_2022_LDL_C.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alirocumab — `Alirocumab_Djebli2017_inter_individual_variability_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

Extracted — alirocumab: Q 0.173 L/day, V1 0.139 L, kabs 0.486 1/day.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Djebli N et al., Target-Mediated Drug Disposition Popula…, Clinical pharmacokinetics (2017)
  ·  DOI: [10.1007/s40262-016-0505-1](https://doi.org/10.1007/s40262-016-0505-1)

<div class="pk-model-meta" hidden drug="alirocumab" model-id="Alirocumab_Djebli2017_inter_individual_variability_estimate" status="rejected" stale="false" population="healthy volunteers and patients" measured-compound="alirocumab" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Q | `Q30` · Q | 0.173 | L/day | 2.002314814814815e-09 | L/h | not captured | exact (1.0) | Djebli_2017:results_prose | — | not captured |
| V c | `Q63` · V1 | 0.139 | L | 0.00013900000000000002 | L | not captured | space_fold (0.95) | Djebli_2017:results_prose | — | not captured |
| K a | `Q49` · kabs | 0.486 | 1/day | 5.6249999999999995e-06 | 1/h | not captured | space_fold (0.95) | Djebli_2017:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLL' routed out of structural estimates ('Inter-individual variability Estimate (CV%)')
- table section iiv: 'CLL' routed out of structural estimates ('Inter-individual variability % RSE')
- table section iiv: 'Kint' routed out of structural estimates ('Inter-individual variability Estimate (CV%)')
- table section iiv: 'Kint' routed out of structural estimates ('Inter-individual variability % RSE')
- table section iiv: 'Kdeg' routed out of structural estimates ('Inter-individual variability Estimate (CV%)')
- table section iiv: 'Kdeg' routed out of structural estimates ('Inter-individual variability % RSE')
- table section iiv: 'Q' routed out of structural estimates ('Inter-individual variability Estimate (CV%)')
- table section iiv: 'Q' routed out of structural estimates ('Inter-individual variability % RSE')
- table section iiv: 'Vc' routed out of structural estimates ('Inter-individual variability Estimate (CV%)')
- table section iiv: 'Vc' routed out of structural estimates ('Inter-individual variability % RSE')
- table section iiv: 'Ka' routed out of structural estimates ('Inter-individual variability Estimate (CV%)')
- table section iiv: 'Ka' routed out of structural estimates ('Inter-individual variability % RSE')
- table section iiv: 'F1' routed out of structural estimates ('Inter-individual variability Estimate (CV%)')
- table section iiv: 'F1' routed out of structural estimates ('Inter-individual variability % RSE')
- table section residual_error: 'Proportional term' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive term (nM)' routed out of structural estimates ('Residual variability')
- NIL: refused to back-fill base 'V1' from footnote/prose loose number None (source ['Tab4:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['Tab4:footnote']); the table cell was unparseable — needs review
- salvaged Q30 ('Q'=0.173) from results prose — parameter table was unreadable
- salvaged Q63 ('V c'=0.139) from results prose — parameter table was unreadable
- salvaged Q49 ('K a'=0.486) from results prose — parameter table was unreadable
- implicit units: 'Q' → L/day (from the paper text: "The paper text states: 'the two compartments were linked by an inter-compartmental clearance (Q, L/day)'. Table 4 also l")
- implicit units: 'V c' → L (from the paper text: "The paper text states: 'the central compartment (V c, L)' and 'peripheral compartment (V p, L)'.")
- implicit units: 'K a' → 1/day (from the paper text: "The paper text states: 'a first-order absorption rate constant from the depot to the central compartment (K a, day−1)'. ")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q30 (Q); Q63 (V c)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alirocumab
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- population split: 'inter-individual variability estimate (cv%)' subgroup of Djebli_2017 (paper reports 5 populations: estimate (cv%), final model of expanded data set (n = 2870) estimate, final model with covariates (n = 527) estimate, inter-individual variability estimate (cv%), pharmacostatistical model (n = 527) estimate)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Djebli_2017_table_4: ambiguous_uncertainty_binding
- table Djebli_2017_table_4: unparsed_numeric_cell
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q30 | fail | 0.173 | 0.459 | 2.6532 | 0.05 | footnote reference category |
| C2_base_Q49 | fail | 0.486 | 0.697 | 1.4342 | 0.05 | footnote reference category |
| C2_base_Q63 | fail | 0.139 | 3.99 | 28.705 | 0.05 | footnote reference category |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Djebli_2017:results_prose'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Djebli_2017:results_prose'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Djebli_2017:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.139 L | not captured | not captured | ['Djebli_2017:results_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_alirocumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Djebli_2017` / `Djebli_2017::inter_individual_variability_estimate_cv`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:47 UTC</sub>
