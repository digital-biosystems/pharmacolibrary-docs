<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;alaproclate&quot;}]"></div>

# alaproclate

- **generic name:** alaproclate
- **ATC codes:** `N06AB07`
- **DrugBank:** [DB13233](https://go.drugbank.com/drugs/DB13233) · **PubChem:** [CID 2081](https://pubchem.ncbi.nlm.nih.gov/compound/2081)
- **molar mass:** 255.74 g/mol (C13H18ClNO2) — DrugBank
- **groups:** experimental

## About

Alaproclate is a selective serotonin reuptake inhibitor that was developed as an antidepressant. It is considered experimental and does not appear to be an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4708345](https://www.wikidata.org/wiki/Q4708345) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:37 | 0:13 | 0/0/0 | 1/1/0 | 0/0/0 | 12,202/1,727 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">pig</span> | [Alberts_1989_electrically_evoked_3H_acetylcholine_secretion](drugs/drug_alaproclate/pd_Alberts_1989_electrically_evoked_3H_acetylcholine_secretion.md) | electrically evoked 3H-acetylcholine secretion ← alaproclate · inhibition effect | — | Alberts P et al., Effects of alaproclate, potassium chann…, Pharmacology & toxicology (1989) | [10.1111/j.1600-0773.1989.tb01121.x](https://doi.org/10.1111/j.1600-0773.1989.tb01121.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Svensson_1994_K_current](drugs/drug_alaproclate/pd_Svensson_1994_K_current.md) | sustained voltage-dependent K+ current (hippocampal neurons) ← alaproclate · inhibition effect | — | Svensson BE et al., Alaproclate effects on voltage-dependen…, Neuropharmacology (1994) | [10.1016/0028-3908(94)90119-8](https://doi.org/10.1016/0028-3908(94)90119-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Svensson_1994_K_current_2](drugs/drug_alaproclate/pd_Svensson_1994_K_current_2.md) | sustained voltage-dependent K+ current (Kv1.2-expressing fibroblast cells) ← alaproclate · inhibition effect | — | Svensson BE et al., Alaproclate effects on voltage-dependen…, Neuropharmacology (1994) | [10.1016/0028-3908(94)90119-8](https://doi.org/10.1016/0028-3908(94)90119-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Svensson_1994_NMDA_current](drugs/drug_alaproclate/pd_Svensson_1994_NMDA_current.md) | NMDA receptor current (hippocampal neurons) ← alaproclate · inhibition effect | — | Svensson BE et al., Alaproclate effects on voltage-dependen…, Neuropharmacology (1994) | [10.1016/0028-3908(94)90119-8](https://doi.org/10.1016/0028-3908(94)90119-8) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Teunissen_1984.pdf` | Teunissen MW et al., Influence of alaproclate on antipyrine…, European journal of clinica… (1984) | popPK | 5 | [10.1007/BF00549593](https://doi.org/10.1007/BF00549593) | [6519152](https://pubmed.ncbi.nlm.nih.gov/6519152) | Alaproclate is the subject drug and its elimination half-life (3.0–3.5 h) is reported, but no CL/V or compartmental model values are given; the quantitative clearances reported are for antipyrine, not alaproclate. |

<sub>queue written 2026-10-06T21:37:36.096631+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aberg-Wistedt_1985 | irrelevant | 0 | 0 | The study is a clinical/biochemical comparison of antidepressant effects and CSF metabolites, not a pharmacokinetic study reporting disposition parameters for alaproclate. |
| PD | Aberg-Wistedt_1985 | not_relevant | 1 | 0 | The study reports qualitative clinical and biochemical outcomes (MADRS scores, CSF metabolites) at a fixed dose without providing concentration-effect data, PK parameters, or numeric PD model parameters. |
| popPK | Alberts_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of alaproclate's effect on neurotransmitter release, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Graffner_1984 | irrelevant | 2 | 0 | The paper focuses on in vitro-in vivo correlations (dissolution vs. bioavailability) and does not report specific quantitative PK parameters like clearance, volume, or half-life for alaproclate. |
| PD | Graffner_1984 | not_relevant | 0 | 0 | The paper describes an in vitro-in vivo correlation (IVIVC) for dissolution and bioavailability (PK), not a pharmacodynamic (exposure-response or dose-effect) relationship. |
| popPK | Ross_1995 | irrelevant | 0 | 0 | In vitro receptor binding study in rat tissue; alaproclate is only used as a binding-site ligand, with no PK disposition parameters. |
| PD | Ross_1995 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding assays (KD, Bmax) and ligand inhibition profiles, not pharmacodynamic exposure-response or dose-response relationships in a biological system. |
| popPK | Svensson_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on ion channels and receptors, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wilkinson_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of alaproclate's pharmacological action on NMDA receptors, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
