<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;terguride&quot;}]"></div>

# terguride

- **generic name:** terguride
- **ATC codes:** `G02CB06`
- **DrugBank:** [DB13399](https://go.drugbank.com/drugs/DB13399) · **PubChem:** not captured
- **molar mass:** 340.471 g/mol (C20H28N4O) — DrugBank
- **groups:** experimental

## About

Terguride is a dopamine agonist that acts as a prolactin inhibitor, and has been investigated for conditions involving high prolactin levels. It remains an experimental drug and is not an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7702355](https://www.wikidata.org/wiki/Q7702355) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:29 | 0:37 | 0/0/0 | 1/0/0 | 0/0/0 | 38,893/1,276 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span> | [Yamada_2003_P](drugs/drug_terguride/pd_Yamada_2003_P.md) | Plasma Prolactin Concentration ← terguride · indirect response — drug inhibits the production of Plasma Prolactin Concentration | — | Yamada Y et al., [Pharmacokinetic/pharmacodynamic analys…, Yakugaku zasshi : Journal o… (2003) | [10.1248/yakushi.123.255](https://doi.org/10.1248/yakushi.123.255) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=terguride).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carratù_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of receptor binding in isolated mouse tissue and does not report any pharmacokinetic parameters. |
| popPK | Jordan_2007 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding/signaling assay and contains no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Kren_2004 | irrelevant | 0 | 0 | The study investigates receptor pharmacology (affinity and agonism at 5-HT2A receptors) in rat tail artery, not pharmacokinetics. |
| popPK | Newman-Tancredi_1997 | irrelevant | 0 | 0 | The paper is an in vitro pharmacodynamic study measuring receptor binding and G-protein activation, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
