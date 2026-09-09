# metamizole sodium — `MetamizoleSodium_Blaser2021_naproxen_n_7`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `metamizole`, measured `4-methylaminoantipyrine`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Blaser LS; Duthaler U; Bouitbir J; Leuppi-Taegtmeyer AB; Liakoni E; Dolf R; et al. et al. (2021). Frontiers in pharmacology 12
  ·  DOI: [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635)

## Model component
<dbs-pgx drug="metamizole sodium" model-id="MetamizoleSodium_Blaser2021_naproxen_n_7" status="extracted" stale="false" population="healthy salt-depleted adults" measured-compound="4-methylaminoantipyrine" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Parameterization:** V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 0.538 | n = 7 | not captured | [n=7] | not captured | exact (1.0) | T3:row1:col2, T3:row1:col3 | — | not captured |
| V1/F (L) | `Q290` · V1/F | 3.27 | L | 0.00327 | [l] | not captured | exact (1.0) | T3:row2:col3 | — | not captured |
| k12 (1/h) | `Q301` · k12 | 0.185 | n = 7 | not captured | [n=7] | not captured | exact (1.0) | T3:row3:col2, T3:row3:col3 | — | not captured |
| k14 (1/h) | `Q347` · k14 | 1.334 | n = 7 | not captured | [n=7] | not captured | exact (1.0) | T3:row4:col2, T3:row4:col3 | — | not captured |
| k10 (1/h) | `Q47` · kel | 0.213 | n = 7 | not captured | [n=7] | not captured | exact (1.0) | T3:row5:col2, T3:row5:col3 | — | not captured |
| k23 (1/h) | `Q48` · kcomp | 0.009 | n = 7 | not captured | [n=7] | not captured | exact (1.0) | T3:row7:col2, T3:row7:col3 | — | not captured |
| T1/2 K01 (h) | `Q57` · t1/2z | 1.708 | h | 6148.8 | [h] | not captured | llm_confirmed (0.6) | T3:row15:col2, T3:row15:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| V2/F (L) | Q82 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Metamizole (n = 8)' — extend the ontology if this is a real PK parameter (source ['T3:row0:col2', 'T3:row0:col3'])
- unit_dimension_unknown: 'n = 7' (kabs)
- unit_dimension_unknown: 'n = 7' (k12)
- unit_dimension_unknown: 'n = 7' (k14)
- unit_dimension_unknown: 'n = 7' (kel)
- unit_dimension_unknown: 'n = 7' (kcomp)
- unit_dimension_unknown: 'n = 7' (kcomp)
- dropped duplicate Q48 ('k24 (1/h)', value '2.275') — already have one for this compound
- dropped duplicate Q57 ('T1/2 4-MAA (h)', value None) — already have one for this compound
- dropped duplicate Q57 ('T1/2 4-AA (h)', value '2.14') — already have one for this compound
- dropped duplicate Q57 ('T1/2 4-AAA (h)', value '1.00') — already have one for this compound
- dropped duplicate Q57 ('T1/2 4-FAA (h)', value None) — already have one for this compound
- dropped PD-category row 'EC50 (µM)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row20:col3'])
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['T3:row21:col3'])
- dropped PD-category row 'E0 b' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row22:col3'])
- dropped PD-category row 'Emax b' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row23:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=4-methylaminoantipyrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 4 first-order transfer(s) across 5 compounds → general_linear
- status held at route_to_review — not promoted
- population split: 'naproxen (n = 7)' subgroup of Blaser_2021 (paper reports 6 populations: 4-aa, 4-aaa, 4-faa, 4-maa, metamizole (n = 8), naproxen (n = 7))

**Extraction notes:**
- unparsed cell T3:row6:col3 = '16.8 ± 5.58a'
- unparsed cell T3:row16:col3 = '0.028 ± 0.004a'
- unparsed cell T3:row19:col3 = '22.10 ± 1.32a'
- unparsed cell T3:row20:col2 = 'EC50 (µM)'
- unparsed cell T3:row22:col2 = 'E0'
- companion parameter table 2 transcribed (8 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row2:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T3:row15:col2', 'T3:row15:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row6:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 3.27 L | not captured | not captured | ['T3:row2:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metamizole_sodium/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Blaser_2021` / `Blaser_2021::naproxen_n_7`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
