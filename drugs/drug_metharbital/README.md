<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;metharbital&quot;}]"></div>

# metharbital

- **generic name:** metharbital
- **ATC codes:** `N03AA30`
- **DrugBank:** [DB00463](https://go.drugbank.com/drugs/DB00463) · **PubChem:** [CID 4099](https://pubchem.ncbi.nlm.nih.gov/compound/4099)
- **molar mass:** 198.2191 g/mol (C9H14N2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Metharbital is a barbiturate derivative that was used as an antiepileptic drug to treat seizures. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1176294](https://www.wikidata.org/wiki/Q1176294) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 07:11 | 0:08 | 0/0/0 | 0/0/0 | 0/0/0 | 17,774/199 | einfracz / qwen3.8-27b | 0 | 1/1 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Farag_1987.pdf` | Farag MM et al., Acute hepatic damage in rats impairs me…, Pharmacology (1987) | popPK | 7 | [10.1159/000138268](https://doi.org/10.1159/000138268) | [2885858](https://pubmed.ncbi.nlm.nih.gov/2885858) | Study reports qualitative changes in clearance and concentration-time curve slopes for metharbital in rats but lacks specific numeric PK parameter values in the provided evidence. |

<sub>queue written 2026-10-07T07:11:46.614012+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Campbell_2024 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting barbiturates in urine and does not report any pharmacokinetic parameters for metharbital. |
| popPK | Coupey_1997 | irrelevant | 0 | 0 | The text is a general review of barbiturate abuse in adolescents and contains no pharmacokinetic parameters or specific data for metharbital. |
| popPK | Farag_1987 | relevant | 7 | 3 | Study reports qualitative changes in clearance and concentration-time curve slopes for metharbital in rats but lacks specific numeric PK parameter values in the provided evidence. |
| popPK | JONES_1963 | irrelevant | 0 | 0 | The provided evidence contains only a title and no pharmacokinetic data or quantitative parameters for metharbital. |
| popPK | Kamel_1982 | irrelevant | 0 | 0 | The provided evidence contains only a general category title ("Barbituric acid derivatives") with no specific data, parameters, or mention of metharbital. |
| popPK | Lyness_1979 | irrelevant | 1 | 0 | The study focuses on behavioral tolerance and brain distribution of barbiturates rather than systemic pharmacokinetic parameters (CL, V, ka) for metharbital. |
| PD | Lyness_1979 | not_relevant | 2 | 0 | The text explicitly states that dose-response relationships were NOT obtained for metharbital, and no numeric PD parameters are provided. |
| popPK | MERLEY_1948 | irrelevant | 0 | 0 | The paper describes a qualitative detection method for barbiturates in urine and does not report any quantitative pharmacokinetic parameters for metharbital. |
| popPK | MULLAN_1965 | irrelevant | 0 | 0 | The provided evidence contains only a title and no pharmacokinetic data or quantitative parameters for metharbital. |
| popPK | Neighbors_1995 | irrelevant | 0 | 0 | The paper is a chemical synthesis study of glucuronide derivatives and does not report any pharmacokinetic parameters for metharbital. |
| popPK | Pressler_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for brivaracetam, not metharbital. |
| PD | Pressler_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetics (PK) and safety of brivaracetam, not metharbital, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Rondeau_1981 | irrelevant | 0 | 0 | The paper is a behavioral study on taste aversion using phenobarbital and related drugs, containing no pharmacokinetic parameters for metharbital. |
| popPK | Sato_1983 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding metharbital pharmacokinetics. |
| PD | Sato_1983 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any pharmacological data, PD models, or information regarding metharbital. |
| popPK | Soine_1989 | irrelevant | 0 | 0 | The paper is a chemical synthesis study of barbiturate derivatives and contains no pharmacokinetic data or disposition parameters for metharbital. |
| popPK | Vida_1973 | irrelevant | 0 | 0 | The evidence contains only a title fragment with no quantitative pharmacokinetic parameters or study details. |
| popPK | unknown_1949 | irrelevant | 0 | 0 | The evidence only lists "AMOBARBITAL" (a different drug) and contains no pharmacokinetic data for metharbital. |
| popPK | unknown_1949_2 | irrelevant | 0 | 0 | The evidence only lists a product name (Amobarbital elixir) and contains no pharmacokinetic data, parameters, or study details for metharbital. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
