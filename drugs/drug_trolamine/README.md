<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03A&quot;,&quot;href&quot;:&quot;atc/D03A.md&quot;},{&quot;label&quot;:&quot;trolamine&quot;}]"></div>

# trolamine

- **generic name:** trolamine
- **ATC codes:** `D03AX12`
- **DrugBank:** [DB13747](https://go.drugbank.com/drugs/DB13747) · **PubChem:** [CID 7618](https://pubchem.ncbi.nlm.nih.gov/compound/7618)
- **molar mass:** 149.1882 g/mol (C6H15NO3) — DrugBank
- **groups:** approved

## About

Trolamine is a dermatological preparation used to help wounds and ulcers heal. It is an approved medicine, used topically on the skin.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424314](https://www.wikidata.org/wiki/Q424314) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:58 | 1:25 | 0/0/0 | 0/0/0 | 0/0/0 | 22,707/2,821 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ochs_1984.pdf` | Ochs DL et al., Ca2+-stimulated, Mg2+-dependent ATPase…, The Journal of biological c… (1984) | pd | 4 | not captured | [6142882](https://www.ncbi.nlm.nih.gov/pubmed/6142882) | metadata signals extractable PD data (EC50) |
| `Główka_2007.pdf` | Główka F et al., Enantioselective CE method for pharmaco…, Electrophoresis (2007) | pgx | 8 | [10.1002/elps.200600736](https://doi.org/10.1002/elps.200600736) | [17657761](https://www.ncbi.nlm.nih.gov/pubmed/17657761) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-10-07T13:57:41.275250+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chien_1980 | irrelevant | 0 | 0 | This is an oxygen-equilibrium study of carp hemoglobin, not a pharmacokinetic study of trolamine. |
| popPK | Findlay_1987 | irrelevant | 0 | 0 | This is an in-vitro enzyme study with no trolamine pharmacokinetic parameters. |
| popPK | Guse_1994 | irrelevant | 0 | 0 | This is an in-vitro cellular mechanism study and reports no quantitative pharmacokinetic disposition parameters for trolamine. |
| PGx | Główka_2007 | not_relevant | 0 | 0 | The paper studies ibuprofen and its metabolites in relation to CYP2C polymorphism; it reports no pharmacogenomic effect on trolamine. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | Triethanolamine is used as a reaction reagent, and the paper reports no pharmacogenomic effect on a trolamine PK or PD parameter. |
| popPK | Libralato_2010 | irrelevant | 0 | 0 | This is an ecotoxicity study reporting toxicity endpoints, not trolamine pharmacokinetic parameters. |
| PGx | Lu_2007 | not_relevant | 0 | 0 | The paper describes an analytical method for fluoxetine and norfluoxetine, not a pharmacogenomic effect on trolamine PK or PD. |
| popPK | Macri_2009 | irrelevant | 0 | 0 | This is an in-vitro antimicrobial study of dendritic amphiphiles, not a trolamine pharmacokinetic study. |
| popPK | Müller-Decker_1994 | irrelevant | 0 | 0 | This in vitro irritation study reports no pharmacokinetic disposition parameters for triethanolamine. |
| popPK | Ochs_1984 | irrelevant | 0 | 0 | This is an in-vitro neutrophil ATPase study, not a pharmacokinetic study of trolamine. |
| PGx | Qusa_2024 | not_relevant | 0 | 0 | The study reports in vitro CYP and transporter inhibition by trolamine, not an effect of a gene variant, genotype, or phenotype on its PK or PD. |
| PGx | Spalding_1999 | not_relevant | 0 | 0 | The paper evaluates tumor formation after triethanolamine exposure, not a genotype effect on its pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
