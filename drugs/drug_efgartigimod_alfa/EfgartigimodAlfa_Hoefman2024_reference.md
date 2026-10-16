<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;efgartigimod alfa&quot;,&quot;href&quot;:&quot;drugs/drug_efgartigimod_alfa/&quot;},{&quot;label&quot;:&quot;Hoefman_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# efgartigimod alfa — `EfgartigimodAlfa_Hoefman2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.00).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (equation variable, kabs, CL and Q), so that value has no SI equivalent. Extracted — efgartigimod alfa: kabs 0.0174 C, CL 0.143 C, Q 0.0944 C, Q2 0.245 C, KD 2.1 C, allometric_exponent 0.75, Fab 1.72 T.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Hoefman S et al., Translational population target binding…, Journal of pharmacokinetics… (2024)
  ·  DOI: [10.1007/s10928-024-09952-5](https://doi.org/10.1007/s10928-024-09952-5)

<div class="pk-model-meta" hidden drug="efgartigimod alfa" model-id="EfgartigimodAlfa_Hoefman2024_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="efgartigimod_alfa" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F human [C] | `Q900` · equation variable | 0.472 | C | not captured | [c] | 13.3 | llm (0.6) | Tab1:row1:col1 | — | not captured |
| ka human (/h) [C] | `Q49` · kabs | 0.0174 | C | not captured | [c] | 13.5 | llm_confirmed (0.6) | Tab1:row3:col1 | — | 0.115 (None% RSE) |
| CL human (L/h) [C] | `Q22` · CL | 0.143 | C | not captured | [c] | 2.31 | llm_confirmed (0.6) | Tab1:row4:col1 | — | 0.0323 (None% RSE) |
| Q human (L/h) [C] | `Q30` · Q | 0.0944 | C | not captured | [c] | 11.9 | llm (0.6) | Tab1:row6:col1 | — | not captured |
| Q2 human (L/h) [C] | `Q99` · Q2 | 0.245 | C | not captured | [c] | 5.03 | llm_confirmed (0.6) | Tab1:row8:col1 | — | not captured |
| In vivo KD (factor) [C] | `Q331` · KD | 2.10 | C | not captured | [c] | 5.57 | llm_confirmed (0.6) | Tab1:row14:col1 | — | not captured |
| BW scaling CL/Q/Q2 | `Q319` · allometric_exponent | 0.75 | not captured | not captured | not captured | not captured | llm (0.6) | Tab1:row21:col1 | — | not captured |
| F Monkey (factor) [T] | `Q40` · Fab | 1.72 | T | not captured | [t] | 10.6 | llm (0.6) | Tab1:row30:col1 | — | not captured |
| theta_q335_category | `Q900` · theta_q335_category | -0.000695 | not captured | not captured | not captured | 2.33 | not captured (not captured) | Tab1:row36:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 ka [C]' routed out of structural estimates ('Inter individual variability Estimate Standard error RSE (%) %CV / Corr. b')
- table section iiv: 'ω2 D [C]' routed out of structural estimates ('Inter individual variability Estimate Standard error RSE (%) %CV / Corr. b')
- table section iiv: 'ω2 F [C]' routed out of structural estimates ('Inter individual variability Estimate Standard error RSE (%) %CV / Corr. b')
- table section iiv: 'ω2 CL [C]' routed out of structural estimates ('Inter individual variability Estimate Standard error RSE (%) %CV / Corr. b')
- table section iiv: 'ω CL x ω VP/VP2 [C]' routed out of structural estimates ('Inter individual variability Estimate Standard error RSE (%) %CV / Corr. b')
- table section iiv: 'ω2 VP/VP2 [C]' routed out of structural estimates ('Inter individual variability Estimate Standard error RSE (%) %CV / Corr. b')
- table section iiv: 'ω2 VC [C]' routed out of structural estimates ('Inter individual variability Estimate Standard error RSE (%) %CV / Corr. b')
- table section iiv: 'ω2 R0 [C]' routed out of structural estimates ('Inter individual variability Estimate Standard error RSE (%) %CV / Corr. b')
- table section iiv: 'ω2 kin tIgG [C]' routed out of structural estimates ('Inter individual variability Estimate Standard error RSE (%) %CV / Corr. b')
- table section iiv: 'ω2 Emax [C]' routed out of structural estimates ('Inter individual variability Estimate Standard error RSE (%) %CV / Corr. b')
- dropped unlinked row (NIL): 'D human (h) [C]' — extend the ontology if this is a real PK parameter (source ['Tab1:row2:col1'])
- unit_dimension_mismatch: 'ka human (/h) [C]' → Q49 (unit '[length] / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'CL human (L/h) [C]' → Q22 (unit '[length] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'VC human (L) [C]' — extend the ontology if this is a real PK parameter (source ['Tab1:row5:col1'])
- unit_dimension_mismatch: 'Q human (L/h) [C]' → Q30 (unit '[length] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'VP human (L) [C]' — extend the ontology if this is a real PK parameter (source ['Tab1:row7:col1'])
- unit_dimension_mismatch: 'Q2 human (L/h) [C]' → Q99 (unit '[length] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'VP2 human (L) [C]' — extend the ontology if this is a real PK parameter (source ['Tab1:row9:col1'])
- dropped PD-category row 'R0 human (nM) [C]' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row10:col1'])
- dropped PD-category row 'kin IgG human (µM/h) [C]' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row11:col1'])
- dropped PD-category row 'kout IgG human (/h) [C]' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row12:col1'])
- dropped PD-category row 'Emax IgG human (/h) [C]' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row13:col1'])
- unit_dimension_mismatch: 'In vivo KD (factor) [C]' → Q331 (unit '[length] / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Human in vitro KD pH 7.4 (nM)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q331 ('Human in vitro KD pH 7.4 (nM)', value '8.56') — already have one for this compound
- unit_dimension_mismatch: 'Monkey in vitro KD pH 7.4 (nM)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q331 ('Monkey in vitro KD pH 7.4 (nM)', value '14.5') — already have one for this compound
- unit_dimension_mismatch: 'Rabbit in vitro KD pH 7.4 (nM)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q331 ('Rabbit in vitro KD pH 7.4 (nM)', value '310') — already have one for this compound
- unit_dimension_mismatch: 'Rat in vitro KD pH 7.4 (nM)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q331 ('Rat in vitro KD pH 7.4 (nM)', value '1.89') — already have one for this compound
- unit_dimension_mismatch: 'Mouse in vitro KD pH 7.4 (nM)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q331 ('Mouse in vitro KD pH 7.4 (nM)', value '0.64') — already have one for this compound
- dropped duplicate Q319 ('BW scaling VC/VP/VP2', value '1') — already have one for this compound
- dropped PD-category row 'BW scaling R0' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row23:col1'])
- dropped PD-category row 'BW scaling kout/Emax IgG' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row24:col1'])
- dropped PD-category row 'kin IgG Monkey (factor)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row25:col1'])
- dropped PD-category row 'kin IgG Rabbit (factor)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row26:col1'])
- dropped PD-category row 'kin IgG Rat (factor)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row27:col1'])
- dropped PD-category row 'kin IgG Mouse (factor)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row28:col1'])
- unit_dimension_mismatch: 'ka Monkey (factor) [T]' → Q49 (unit '[mass]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('ka Monkey (factor) [T]', value '1.78') — already have one for this compound
- dropped PD-category row 'R0 Monkey (factor) [T]' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row31:col1'])
- unit_dimension_mismatch: 'CL Rabbit (factor) [T]' → Q22 (unit '[mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CL Rabbit (factor) [T]', value '0.677') — already have one for this compound
- unit_dimension_mismatch: 'CL Rat and Mouse (factor) [T]' → Q22 (unit '[mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CL Rat and Mouse (factor) [T]', value '2.11') — already have one for this compound
- dropped duplicate Q900 ('VP/VP2 Rat (factor) [T]', value '0.310') — already have one for this compound
- dropped unlinked row (NIL): 'VP/VP2 Mouse (factor) [T]' — extend the ontology if this is a real PK parameter (source ['Tab1:row35:col1'])
- dropped unlinked row (NIL): 'PK preclinical error (factor) [T]' — extend the ontology if this is a real PK parameter (source ['Tab1:row38:col1'])
- dropped unlinked row (NIL): 'IgG preclinical error (factor) [T]' — extend the ontology if this is a real PK parameter (source ['Tab1:row40:col1'])
- NIL: refused to back-fill base 'sigma' from footnote/prose loose number None (source ['Tab1:footnote']); the table cell was unparseable — needs review
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=efgartigimod_alfa
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'efgartigimod_alfa' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab1: unbound_uncertainty
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | [length] / [time] | C | not captured | not captured | ['Tab1:row4:col1'] |
| C5_dimension_Q30 | fail | [length] / [time] | C | not captured | not captured | ['Tab1:row6:col1'] |
| C5_dimension_Q331 | fail | [length] / [time] | C | not captured | not captured | ['Tab1:row14:col1'] |
| C5_dimension_Q49 | fail | [length] / [time] | C | not captured | not captured | ['Tab1:row3:col1'] |
| C5_dimension_Q99 | fail | [length] / [time] | C | not captured | not captured | ['Tab1:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.143 | not captured | not captured | ['Tab1:row4:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_efgartigimod_alfa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hoefman_2024` / `Hoefman_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 22:01 UTC</sub>
