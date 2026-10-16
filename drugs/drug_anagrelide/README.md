<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;anagrelide&quot;}]"></div>

# anagrelide

- **generic name:** anagrelide
- **ATC codes:** `L01XX35`
- **DrugBank:** [DB00261](https://go.drugbank.com/drugs/DB00261) · **PubChem:** [CID 2182](https://pubchem.ncbi.nlm.nih.gov/compound/2182)
- **molar mass:** 256.088 g/mol (C10H7Cl2N3O) — DrugBank
- **groups:** approved, investigational

## About

Anagrelide is used to treat essential thrombocythemia, a condition in which the body makes too many platelets. It is authorised in the European Union and remains in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408163](https://www.wikidata.org/wiki/Q408163) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:17 | 0:48 | 0/0/0 | 0/0/0 | 0/0/0 | 135,646/1,391 | einfracz / qwen3.8-27b | 7 | 0/4 | 6/1 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=anagrelide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PDE3A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 34 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ferrer-Marín_2024 | not_relevant | 0 | 0 | The paper is a general review of essential thrombocythaemia management that mentions anagrelide as a treatment, but it does not report specific pharmacokinetic or pharmacodynamic parameters influenced by gene variants. |
| popPK | Jian_2026 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics and pharmacodynamics of peginterferon alfa-2b (Pegbing), not anagrelide. |
| PGx | Kiladjian_2024 | not_relevant | 0 | 0 | The paper is a protocol for a clinical trial of ropeginterferon alfa-2b and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of anagrelide. |
| PGx | Larsen_2009 | not_relevant | 0 | 0 | The paper focuses on the efficacy of hydroxyurea and does not report any pharmacokinetic or pharmacodynamic changes in anagrelide driven by genetic variants. |
| popPK | Larson_2012 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of nilotinib, not anagrelide. |
| popPK | McCarty_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anagrelide's effect on cell differentiation and signaling, reporting no pharmacokinetic parameters. |
| PGx | Okamoto_2013 | not_relevant | 4 | 2 | The paper reports pharmacokinetic differences between Japanese and non-Japanese patients, but it does not provide fitted quantitative effect sizes for specific gene variants. |
| popPK | Qin_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ropeginterferon alfa-2b, with anagrelide mentioned only as a comparator in the trial design, not as the subject drug. |
| popPK | Shameer_2018 | irrelevant | 0 | 0 | The paper is a bioinformatics study on drug repositioning databases (RepurposeDB) and does not report any pharmacokinetic parameters or studies for anagrelide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
