<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;alimemazine&quot;}]"></div>

# alimemazine

- **generic name:** alimemazine
- **ATC codes:** `R06AD01`
- **DrugBank:** [DB01246](https://go.drugbank.com/drugs/DB01246) · **PubChem:** [CID 5574](https://pubchem.ncbi.nlm.nih.gov/compound/5574)
- **molar mass:** 298.446 g/mol (C18H22N2S) — DrugBank
- **groups:** approved, vet_approved

## About

Alimemazine (trimeprazine) is an antihistamine of the phenothiazine class used to treat allergic skin conditions such as urticaria, atopic dermatitis and contact dermatitis, and to relieve itching. It is an approved medicine and is also approved for veterinary use, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2623251](https://www.wikidata.org/wiki/Q2623251) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:34 | 0:58 | 0/0/0 | 0/0/0 | 0/0/0 | 36,854/859 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alimemazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sponheim_1990.pdf` | Sponheim S et al., Pharmacokinetics of trimeprazine in chi…, Pharmacology & toxicology (1990) | popPK | 9 | [10.1111/j.1600-0773.1990.tb00821.x](https://doi.org/10.1111/j.1600-0773.1990.tb00821.x) | [2255680](https://pubmed.ncbi.nlm.nih.gov/2255680) | The study reports quantitative pharmacokinetic parameters (half-life, clearance, AUC) for alimemazine in children. |

<sub>queue written 2026-10-07T22:34:08.327813+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antao_2005 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of alimemazine for retching and does not report any pharmacokinetic parameters. |
| popPK | Fort_2026 | irrelevant | 0 | 0 | The paper is a forensic hair drug analysis compendium reporting qualitative detection and hair concentrations, not a pharmacokinetic study with disposition parameters (CL, V, etc.) for alimemazine. |
| popPK | Hilberg_1999 | irrelevant | 1 | 0 | The study investigates postmortem redistribution in rats and reports concentration ratios rather than quantitative pharmacokinetic parameters (CL, V, ka) for alimemazine. |
| popPK | Pin_2026 | irrelevant | 0 | 0 | This is a clinical consensus guideline for insomnia treatment in children with ASD, not a pharmacokinetic study, and contains no quantitative PK parameters for alimemazine. |
| popPK | Vybornykh_2023 | irrelevant | 0 | 0 | The paper is a clinical safety review of psychotropic drugs in hematological patients and does not report any pharmacokinetic parameters for alimemazine. |
| popPK | van_2002 | irrelevant | 0 | 0 | The paper is a clinical case report of neuroleptic malignant syndrome and does not report any pharmacokinetic parameters for alimemazine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
