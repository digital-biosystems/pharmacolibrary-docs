<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;dirithromycin&quot;}]"></div>

# dirithromycin

- **generic name:** dirithromycin
- **ATC codes:** `J01FA13`
- **DrugBank:** [DB00954](https://go.drugbank.com/drugs/DB00954) · **PubChem:** [CID 6473883](https://pubchem.ncbi.nlm.nih.gov/compound/6473883)
- **molar mass:** 835.086 g/mol (C42H78N2O14) — DrugBank
- **groups:** investigational

## About

Dirithromycin is a macrolide antibiotic that was intended to treat bacterial infections such as tonsillitis, pharyngitis, acute bronchitis, pneumonia, and staphylococcal infections. It is not an approved medicine today and is regarded as investigational, with no authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1989071](https://www.wikidata.org/wiki/Q1989071) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.00).">human + animal</span> | [Goldberg_1996_CYP3A](drugs/drug_dirithromycin/pd_Goldberg_1996_CYP3A.md) | CYP3A activity ← dirithromycin · inhibition effect | — | Goldberg MJ et al., Effect of dirithromycin on human CYP3A…, Journal of clinical pharmac… (1996) | [10.1002/j.1552-4604.1996.tb04170.x](https://doi.org/10.1002/j.1552-4604.1996.tb04170.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [McConnell_1999_MIC90](drugs/drug_dirithromycin/pd_McConnell_1999_MIC90.md) | in vitro MIC ← dirithromycin · inhibition effect | — | McConnell SA et al., Review and comparison of advanced-gener…, Pharmacotherapy (1999) | [10.1592/phco.19.6.404.31054](https://doi.org/10.1592/phco.19.6.404.31054) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:51 | 2:36 | 0/0/0 | 0/2/0 | 0/0/0 | 48,471/997 | einfracz / qwen3.8-27b | 3 | 0/0 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chamberland_1991.pdf` | Chamberland S et al., Comparative activity of macrolides agai…, Antimicrobial agents and ch… (1991) | pd | 4 | [10.1128/AAC.35.5.903](https://doi.org/10.1128/AAC.35.5.903) | [1854172](https://www.ncbi.nlm.nih.gov/pubmed/1854172) | metadata signals extractable PD data (IC50) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T11:51:37.945364+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | McConnell_1999_2 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of theophylline to assess a drug-drug interaction, not the pharmacokinetic parameters of dirithromycin itself. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and CYP3A4 inhibition of macrolides, specifically noting dirithromycin's lack of interaction, but contains no information on pharmacogenomics or gene variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
