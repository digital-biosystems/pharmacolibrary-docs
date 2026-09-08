# von Willebrand factor — `VonWillebrandFactor_Daniel2026_value`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `high-purity von Willebrand factor`, measured `VWF:Ag`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Daniel MY; Rauch A; Paris C; Jeanpierre E; Goudemand J; Marichez C; Pradines B; Zawadzki C; Dupont A; Denis CV; Lenting PJ; Susen S; Delavenne X et al. (2026). Blood advances 10
  ·  DOI: [10.1182/bloodadvances.2025017898](https://doi.org/10.1182/bloodadvances.2025017898)

## Model component
<dbs-pgx drug="von Willebrand factor" model-id="VonWillebrandFactor_Daniel2026_value" status="" stale="false" population="patients with von Willebrand disease" measured-compound="VWF:Ag" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| VVWF (mL) | `Q61` · V | —(suppressed) | mL | — | [ml] | not captured | llm (0.6) | tbl2:row3:col1 | — | not captured |
| ClVWF (mL/h) | `Q22` · CL | —(suppressed) | mL/h | — | [ml] / [h] | not captured | llm (0.6) | tbl2:row4:col1 | — | not captured |
| 𝑄𝑄𝑉𝑉𝑉𝑉𝑉𝑉 (mL) | `Q30` · Q | —(suppressed) | mL | — | [ml] | not captured | llm (0.6) | Daniel_2026_table_S4:row10:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'BaselineVWF(IU/mL)' — extend the ontology if this is a real PK parameter (source ['tbl2:row2:col1'])
- dropped unlinked row (NIL): 'BaselineFVIII' — extend the ontology if this is a real PK parameter (source ['tbl2:row5:col1'])
- dropped duplicate Q61 ('VFVIII (mL)', value '4944') — already have one for this compound
- dropped duplicate Q22 ('ClFVIII (mL/h)', value '598.0') — already have one for this compound
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row8:col1'])
- dropped PD-category row 'IC50 (IU/mL)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row9:col1'])
- dropped unlinked row (NIL): 'RVWF' — extend the ontology if this is a real PK parameter (source ['tbl2:row10:col1'])
- dropped unlinked row (NIL): 'ClVWF A, B, AB blood group' — extend the ontology if this is a real PK parameter (source ['tbl2:row14:col1'])
- dropped unlinked row (NIL): 'ClVWF O blood group' — extend the ontology if this is a real PK parameter (source ['tbl2:row15:col1'])
- dropped PD-category row 'IC50 VWD type 2N and 3' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row16:col1'])
- dropped PD-category row 'IC50 VWD type 1, 2A/B/M' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row17:col1'])
- dropped unlinked row (NIL): 'RVWF VWD type 1, 2N, 3' — extend the ontology if this is a real PK parameter (source ['tbl2:row18:col1'])
- dropped unlinked row (NIL): 'RVWF VWD type 2A/B/M' — extend the ontology if this is a real PK parameter (source ['tbl2:row19:col1'])
- routed 'ωBaselineVWF_ωBaselineFVIII' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'βpropeptideBaselineVWF' — extend the ontology if this is a real PK parameter (source ['tbl2:row27:col1'])
- dropped unlinked row (NIL): 'βBWonVVWF' — extend the ontology if this is a real PK parameter (source ['tbl2:row28:col1'])
- dropped unlinked row (NIL): 'βbloodgroupOonClVWF' — extend the ontology if this is a real PK parameter (source ['tbl2:row29:col1'])
- dropped unlinked row (NIL): 'βAgeonBaselineVWF' — extend the ontology if this is a real PK parameter (source ['tbl2:row30:col1'])
- dropped PD-category row 'βVWDonIC50 (VWD 2N, 3)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row31:col1'])
- dropped unlinked row (NIL): 'βVWD on RVWF (VWD 2A/B/M)' — extend the ontology if this is a real PK parameter (source ['tbl2:row32:col1'])
- dropped unlinked row (NIL): 'ωBaselineVWF (CV%)' — extend the ontology if this is a real PK parameter (source ['tbl2:row36:col1'])
- dropped unlinked row (NIL): 'ωVVWF (CV%)' — extend the ontology if this is a real PK parameter (source ['tbl2:row37:col1'])
- dropped unlinked row (NIL): 'ωClVWF (CV%)' — extend the ontology if this is a real PK parameter (source ['tbl2:row38:col1'])
- dropped unlinked row (NIL): 'ωBaselineFVIII (CV%)' — extend the ontology if this is a real PK parameter (source ['tbl2:row39:col1'])
- dropped unlinked row (NIL): 'ωIC50 (CV%)' — extend the ontology if this is a real PK parameter (source ['tbl2:row40:col1'])
- dropped unlinked row (NIL): 'ωRVWF (CV%)' — extend the ontology if this is a real PK parameter (source ['tbl2:row41:col1'])
- dropped unlinked row (NIL): 'pVWF:Ag' — extend the ontology if this is a real PK parameter (source ['tbl2:row45:col1'])
- dropped unlinked row (NIL): 'aVWF:Ag' — extend the ontology if this is a real PK parameter (source ['tbl2:row46:col1'])
- dropped unlinked row (NIL): 'pVWF:Act' — extend the ontology if this is a real PK parameter (source ['tbl2:row47:col1'])
- dropped unlinked row (NIL): 'aFVIII:C' — extend the ontology if this is a real PK parameter (source ['tbl2:row48:col1'])
- dropped unlinked row (NIL): 'pFVIII:C' — extend the ontology if this is a real PK parameter (source ['tbl2:row49:col1'])
- dropped unlinked row (NIL): '(mL/h)' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row2:col2'])
- dropped unlinked row (NIL): '(mL)' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row3:col2'])
- dropped unlinked row (NIL): '𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝑉𝑉𝑉𝑉𝑉𝑉 3 (IU/mL)' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row7:col2'])
- dropped duplicate Q22 ('𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝑉𝑉𝑉𝑉𝑉𝑉 (mL/h)', value '447') — already have one for this compound
- dropped duplicate Q61 ('𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝑉𝑉𝑉𝑉𝑉𝑉 (mL)', value '193') — already have one for this compound
- unit_dimension_mismatch: '𝑄𝑄𝑉𝑉𝑉𝑉𝑉𝑉 (mL)' → Q30 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): '𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉 (mL/h)' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row11:col2'])
- dropped unlinked row (NIL): '𝑉𝑉𝑉𝑉𝑉𝑉𝐹𝐹𝐹𝐹𝐹𝐹 (IU/mL)' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row12:col2'])
- dropped unlinked row (NIL): '𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝑉𝑉𝑉𝑉𝐹𝐹𝐹𝐹𝐹𝐹 (IU/mL) 2N,3' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row14:col2'])
- dropped PD-category row '𝐼𝐼𝐶𝐶50 Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Daniel_2026_table_S4:row15:col2'])
- dropped unlinked row (NIL): '𝜔𝜔𝐶𝐶𝐵𝐵𝑉𝑉𝑉𝑉𝑉𝑉' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row21:col2'])
- dropped unlinked row (NIL): '𝜔𝜔𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row23:col2'])
- dropped unlinked row (NIL): '𝜔𝜔𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝑉𝑉𝑉𝑉𝑉𝑉' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row24:col2'])
- dropped unlinked row (NIL): '𝐵𝐵𝑉𝑉' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row28:col2'])
- dropped unlinked row (NIL): '𝛽𝛽 𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row30:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=VWF:Ag
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'value' subgroup of Daniel_2026 (paper reports 5 populations: -, bauer et al (6), bukkems et al (7), value, will-pk)

**Extraction notes:**
- companion parameter table S4 transcribed (66 record(s))
- companion parameter table S5 transcribed (8 record(s))
- LLM selected parameter table(s) 2, S4, S5

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_von_willebrand_factor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Daniel_2026` / `Daniel_2026::value`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
