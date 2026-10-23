<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;methapyrilene&quot;}]"></div>

# methapyrilene

- **generic name:** methapyrilene
- **ATC codes:** `R06AC05`
- **DrugBank:** [DB04819](https://go.drugbank.com/drugs/DB04819) · **PubChem:** [CID 8667](https://pubchem.ncbi.nlm.nih.gov/compound/8667)
- **molar mass:** 261.39 g/mol (C14H19N3S) — DrugBank
- **groups:** approved, withdrawn

## About

Methapyrilene is an antihistamine of the substituted ethylenediamine type that was used to treat allergies and related respiratory conditions. It has been withdrawn from use after safety concerns, including liver toxicity, were recognised.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q59854145](https://www.wikidata.org/wiki/Q59854145) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:31 | 1:11 | 0/0/0 | 0/0/0 | 0/0/0 | 13,951/627 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Daum_1984.pdf` | Daum PR et al., Histamine stimulation of inositol 1-pho…, Journal of neurochemistry (1984) | pd | 4 | [10.1111/j.1471-4159.1984.tb06674.x](https://doi.org/10.1111/j.1471-4159.1984.tb06674.x) | [6327916](https://www.ncbi.nlm.nih.gov/pubmed/6327916) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T21:30:56.461793+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bercu_2010 | irrelevant | 0 | 0 | The study is a toxicogenomic/risk assessment analysis using microarrays to identify points of departure for carcinogenicity, not a pharmacokinetic study reporting disposition parameters for methapyrilene. |
| popPK | Daum_1984 | irrelevant | 0 | 0 | The paper is a study on H1 receptor binding affinity in guinea pig brain tissue, not a pharmacokinetic study of methapyrilene disposition. |
| popPK | Hatch_1986 | irrelevant | 0 | 0 | The paper is an in-vitro genotoxicity/carcinogenicity assay using methapyrilene as a test chemical, containing no pharmacokinetic data. |
| popPK | Horn_1996 | irrelevant | 0 | 0 | The paper describes a carcinogenicity/bioassay study in rats measuring GST-P+ foci, not a pharmacokinetic study with disposition parameters. |
| PGx | Park_2006 | not_relevant | 0 | 0 | The paper discusses methapyrilene as a model hepatotoxin to illustrate general mechanisms of drug bioactivation and toxicity, but does not report any pharmacogenomic analysis or gene variants affecting its PK/PD. |
| PGx | Probert_2014 | not_relevant | 0 | 0 | The paper investigates CYP activity in a cell line model but does not report a genetic variant effect on a pharmacokinetic or pharmacodynamic parameter of methapyrilene. |
| popPK | Richardson_1992 | irrelevant | 0 | 0 | The paper investigates DNA synthesis and carcinogenic mechanisms, not pharmacokinetic parameters like clearance or volume. |
| popPK | Richardson_1994 | irrelevant | 0 | 0 | The study is a proteomic/molecular toxicology analysis of hepatic protein modification and expression, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Teutsch_1975 | irrelevant | 0 | 0 | The study evaluates hypnotic efficacy (pharmacodynamics) using subjective response methods and does not report any quantitative pharmacokinetic parameters such as clearance or volume. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
