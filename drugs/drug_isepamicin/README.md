<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;isepamicin&quot;}]"></div>

# isepamicin

- **generic name:** isepamicin
- **ATC codes:** `J01GB11`
- **DrugBank:** [DB13540](https://go.drugbank.com/drugs/DB13540) · **PubChem:** not captured
- **molar mass:** 569.6031 g/mol (C22H43N5O12) — DrugBank
- **groups:** experimental

## About

Isepamicin is an aminoglycoside antibacterial used to treat bacterial infections. It is not an approved medicine today; it is considered experimental and has no European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q554818](https://www.wikidata.org/wiki/Q554818) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| isepamicin | parent | 569.603 | C22H43N5O12 | DrugBank | — | Barr_1995, Fauvelle_2001 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V | 23.31 | L | 23.31 L | ICU patients | 236 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Fauvelle_2001_reference](drugs/drug_isepamicin/Isepamicin_Fauvelle2001_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Fauvelle_2001_reference](drugs/drug_isepamicin/Isepamicin_Fauvelle2001_reference.md) | — | 1-compartment (no model) | 1 | Fauvelle F et al., Comparison of two methods to obtain a d…, Fundamental & clinical phar… (2001) | [10.1046/j.1472-8206.2001.00020.x](https://doi.org/10.1046/j.1472-8206.2001.00020.x) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Barr_1995_reference](drugs/drug_isepamicin/Isepamicin_Barr1995_reference.md) | — | 1-compartment (no model) | 2 | Barr WH et al., Pharmacokinetics of isepamicin, Journal of chemotherapy (Fl… (1995) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:35 | 6:09 | 0/1/1 | 0/0/0 | 0/0/0 | 29,594/34,037 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barr_1995.pdf` | Barr WH et al., Pharmacokinetics of isepamicin, Journal of chemotherapy (Fl… (1995) | popPK | 10 | not captured | [8622111](https://pubmed.ncbi.nlm.nih.gov/8622111) | The text provides specific quantitative PK parameters (CL, Vss, half-lives) and a compartmental model description for isepamicin in humans. |
| `Tod_1996.pdf` | Tod M et al., Population pharmacokinetic study of ise…, Antimicrobial agents and ch… (1996) | popPK | 10 | [10.1128/AAC.40.4.983](https://doi.org/10.1128/AAC.40.4.983) | [8849264](https://pubmed.ncbi.nlm.nih.gov/8849264) | Study reports population PK for isepamicin with covariates, but specific mean numeric values for CL, V, etc., are not explicitly listed in the provided text (only relative changes and simulation ranges). |
| `Tod_1999.pdf` | Tod M et al., Isepamicin in intensive care unit patie…, The Journal of antimicrobia… (1999) | popPK | 10 | [10.1093/jac/44.1.99](https://doi.org/10.1093/jac/44.1.99) | [10459816](https://pubmed.ncbi.nlm.nih.gov/10459816) | The study describes a population PK model and reports peak levels and model structure, but the specific numeric parameter estimates (CL, V, Q, etc.) are not present in the provided abstract text. |
| `Uematsu_1993.pdf` | Uematsu T, Population pharmacokinetic analysis of…, International journal of cl… (1993) | popPK | 10 | not captured | [8314363](https://pubmed.ncbi.nlm.nih.gov/8314363) | The paper describes a population PK model for isepamicin in humans, but the specific numeric parameter values (CL, V, Q) are not present in the provided abstract text. |
| `Yombi_2005.pdf` | Yombi JC et al., Key pharmacokinetic parameters of isepa…, Journal of chemotherapy (Fl… (2005) | popPK | 10 | [10.1179/joc.2005.17.5.521](https://doi.org/10.1179/joc.2005.17.5.521) | [16323441](https://pubmed.ncbi.nlm.nih.gov/16323441) | The abstract provides explicit numeric values for volume of distribution (Vd), clearance, Cmax, and AUC for isepamicin in human patients. |
| `Fauvelle_2001.pdf` | Fauvelle F et al., Comparison of two methods to obtain a d…, Fundamental & clinical phar… (2001) | popPK | 8 | [10.1046/j.1472-8206.2001.00020.x](https://doi.org/10.1046/j.1472-8206.2001.00020.x) | [11468025](https://pubmed.ncbi.nlm.nih.gov/11468025) | The study reports quantitative disposition parameters (volume of distribution) for isepamicin in humans, though specific clearance values are not explicitly listed in the evidence. |
| `Okubo_2002.pdf` | Okubo T et al., [Antibacterial activities and PK/PD par…, The Japanese journal of ant… (2002) | pd | 5 | not captured | [12532635](https://www.ncbi.nlm.nih.gov/pubmed/12532635) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-07T11:30:07.682857+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blaser_1991 | irrelevant | 0 | 0 | This is an in-vitro efficacy study simulating PK profiles rather than a study measuring pharmacokinetic disposition parameters for isepamicin. |
| PGx | Mainardi_1994 | not_relevant | 0 | 0 | The paper reports bacterial resistance mechanisms and animal model efficacy, not human pharmacogenomic effects on isepamicin PK/PD. |
| popPK | Okubo_2002 | irrelevant | 2 | 0 | The study is primarily antibacterial activity (MICs) with PK/PD indices (Cmax/MIC, AUC/MIC) used for efficacy estimation, but it does not report underlying quantitative PK disposition parameters (CL, V, ka, t1/2) for isepamicin, and the specific numeric PK values are not present in the provided text. |
| popPK | Tod_1996 | relevant | 10 | 4 | Study reports population PK for isepamicin with covariates, but specific mean numeric values for CL, V, etc., are not explicitly listed in the provided text (only relative changes and simulation ranges). |
| popPK | Tod_1999 | relevant | 10 | 1 | The study describes a population PK model and reports peak levels and model structure, but the specific numeric parameter estimates (CL, V, Q, etc.) are not present in the provided abstract text. |
| popPK | Uematsu_1993 | relevant | 10 | 2 | The paper describes a population PK model for isepamicin in humans, but the specific numeric parameter values (CL, V, Q) are not present in the provided abstract text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 11:35 UTC</sub>
