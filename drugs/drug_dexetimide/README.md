<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04A&quot;,&quot;href&quot;:&quot;atc/N04A.md&quot;},{&quot;label&quot;:&quot;dexetimide&quot;}]"></div>

# dexetimide

- **generic name:** dexetimide
- **ATC codes:** `N04AA08`
- **DrugBank:** [DB08997](https://go.drugbank.com/drugs/DB08997) · **PubChem:** [CID 30843](https://pubchem.ncbi.nlm.nih.gov/compound/30843)
- **molar mass:** 362.4647 g/mol (C23H26N2O2) — DrugBank
- **groups:** approved, withdrawn

## About

Dexetimide is an anticholinergic (muscarinic antagonist) drug that was used to treat Parkinson's disease. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q904647](https://www.wikidata.org/wiki/Q904647) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:14 | 0:26 | 0/0/0 | 0/0/0 | 0/0/0 | 13,927/617 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akiyama_1986 | irrelevant | 0 | 0 | The paper reports muscarinic ligand binding parameters (Kd, Ki) for dexetimide as a tool compound in vitro, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Bowen_1982 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of muscarinic receptors using dexetimide as a test ligand, containing no pharmacokinetic or disposition parameters. |
| popPK | Fan_1994 | irrelevant | 0 | 0 | The paper is an electrophysiological study of serotonin receptors in rat neurons where dexetimide is used only as a comparative muscarinic antagonist, not as the subject of a pharmacokinetic investigation. |
| popPK | Kovacs_1998 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacology study comparing M2 receptor binding and signaling, and dexetimide is used only as a reference antagonist, not a PK subject. |
| popPK | Richelson_1977 | irrelevant | 0 | 0 | This is an in-vitro pharmacology study measuring receptor binding affinity (KB), not a pharmacokinetic study of disposition parameters. |
| popPK | de_1981 | irrelevant | 0 | 0 | The study investigates the cardiovascular effects of physostigmine in cats, using dexetimide (likely a typo for atropine or similar antagonist, or a comparator) only as a mechanistic tool to verify cholinergic involvement, without reporting any pharmacokinetic parameters for dexetimide itself. |
| popPK | de_1981_2 | irrelevant | 0 | 0 | The study focuses on the haemodynamic effects of paraoxon in cats, and dexetimide is used only as a blocking agent/comparator, with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
