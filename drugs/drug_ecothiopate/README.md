<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;ecothiopate&quot;}]"></div>

# ecothiopate

- **generic name:** ecothiopate
- **ATC codes:** `S01EB03`
- **DrugBank:** [DB01057](https://go.drugbank.com/drugs/DB01057) · **PubChem:** [CID 10548](https://pubchem.ncbi.nlm.nih.gov/compound/10548)
- **molar mass:** 256.323 g/mol (C9H23NO3PS) — DrugBank
- **groups:** approved

## About

Ecothiopate (echothiophate) is an eye drop medicine used to treat glaucoma, working as a parasympathomimetic miotic. It is an approved drug, but it is not authorised in the European Union and is now only rarely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4352952](https://www.wikidata.org/wiki/Q4352952) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:46 | 0:16 | 0/0/0 | 0/0/0 | 0/0/0 | 4,917/391 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ecothiopate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |
| — | blood | `ACHE` modulator | DrugBank actor |
| — | neuromuscular junction | `ACHE` modulator | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boulanger_1994.pdf` | Boulanger CM et al., Mediation by M3-muscarinic receptors of…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb13104.x](https://doi.org/10.1111/j.1476-5381.1994.tb13104.x) | [8075871](https://www.ncbi.nlm.nih.gov/pubmed/8075871) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T18:46:34.520786+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abram_1995 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect (analgesia) of intrathecal echothiophate in rats, not its pharmacokinetic parameters (clearance, volume, etc.). |
| popPK | Boulanger_1994 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| popPK | Chang_1976 | irrelevant | 0 | 0 | The paper studies the mechanism of carbachol action in a chick muscle preparation, and while echothiophate is mentioned as a co-agent, no pharmacokinetic parameters for it are reported. |
| popPK | Croft_1991 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic analysis of muscarinic receptor binding and ciliary muscle accommodation in monkeys, with no pharmacokinetic parameters (CL, V, ka, etc.) reported for echothiophate. |
| popPK | Harris_1971 | irrelevant | 0 | 0 | no_text gate: only 46 chars of text extracted (&lt; 400) |
| popPK | Kandalaft_1991 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro/in-ex-vivo investigation of cholinesterase inhibition and acetylcholine sensitivity in pancreatic tissue, reporting no pharmacokinetic parameters (CL, V, etc.). |
| popPK | Oguchi_1989 | irrelevant | 0 | 0 | The paper is a mechanistic study of cholinesterase inhibition and amylase release in canine pancreas fragments (in vitro/organ bath) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for ecothiopate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
