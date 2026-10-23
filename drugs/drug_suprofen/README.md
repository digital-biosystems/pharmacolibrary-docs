<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;suprofen&quot;}]"></div>

# suprofen

- **generic name:** suprofen
- **ATC codes:** `M01AE07`
- **DrugBank:** [DB00870](https://go.drugbank.com/drugs/DB00870) · **PubChem:** [CID 5359](https://pubchem.ncbi.nlm.nih.gov/compound/5359)
- **molar mass:** 260.308 g/mol (C14H12O3S) — DrugBank
- **groups:** approved, withdrawn

## About

Suprofen is a non-steroidal anti-inflammatory drug of the propionic acid type that was used to treat pain and inflammation. It has been withdrawn from the market, reportedly because it caused kidney-related side effects such as flank pain.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3978097](https://www.wikidata.org/wiki/Q3978097) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 01:22 | 0:38 | 0/0/0 | 0/0/0 | 0/0/0 | 9,109/680 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zulliger_1983.pdf` | Zulliger HW et al., Suprofen kinetics in healthy male volun…, Arzneimittel-Forschung (1983) | popPK | 9 | not captured | [6685517](https://pubmed.ncbi.nlm.nih.gov/6685517) | Study reports 2-compartmental model with specific rate constants (ka, alpha, beta) and absorption parameters for suprofen in humans. |
| `Malomvölgyi_1984.pdf` | Malomvölgyi B et al., Effects of cyclooxygenase inhibitors an…, Biomedica biochimica acta (1984) | pd | 4 | not captured | [6440541](https://www.ncbi.nlm.nih.gov/pubmed/6440541) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T01:22:15.523733+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aishah_2004 | irrelevant | 0 | 0 | The paper describes the chemical synthesis of suprofen precursors and contains no pharmacokinetic data. |
| PGx | Hu_2010 | not_relevant | 0 | 0 | The paper investigates metabolic activation and reactive intermediate formation of a novel 2,5-diaminothiophene derivative, not the PK/PD pharmacogenomics of suprofen. |
| popPK | Malomvölgyi_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of adrenergic contractions in isolated rabbit arteries, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Mancy_1995 | not_relevant | 0 | 0 | The paper describes the substrate binding site of CYP2C9 and reports kinetic parameters for suprofen, but it does not investigate the effect of specific gene variants or genotypes on these parameters. |
| PGx | Wang_2009 | not_relevant | 0 | 0 | The paper investigates structural binding and docking of suprofen to CYP2C9 to understand metabolic mechanisms, but it does not report specific gene variants (polymorphisms) or their effect on pharmacokinetic parameters. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The paper is a general review of CYP2C9 and only mentions suprofen as a mechanism-based inhibitor, without reporting pharmacogenomic effects on its PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
