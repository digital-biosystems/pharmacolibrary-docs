<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ethyl biscoumacetate&quot;}]"></div>

# ethyl biscoumacetate

- **generic name:** ethyl biscoumacetate
- **ATC codes:** `B01AA08`
- **DrugBank:** [DB08794](https://go.drugbank.com/drugs/DB08794) · **PubChem:** [CID 54685524](https://pubchem.ncbi.nlm.nih.gov/compound/54685524)
- **molar mass:** 408.362 g/mol (C22H16O8) — DrugBank
- **groups:** approved, withdrawn

## About

Ethyl biscoumacetate is a vitamin K antagonist that was used as an anticoagulant to prevent or treat blood clots. It is no longer used, as it was withdrawn from the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106042078](https://www.wikidata.org/wiki/Q106042078) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 15:54 | 0:10 | 0/0/0 | 0/0/0 | 0/0/0 | 3,802/186 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ethyl_biscoumacetate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GLUL (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Perlík_1994.pdf` | Perlík F et al., Pharmacokinetics of ethyl biscoumacetat…, International journal of cl… (1994) | popPK | 9 | not captured | [7874379](https://pubmed.ncbi.nlm.nih.gov/7874379) | The study reports quantitative PK parameters (half-life) for ethyl biscoumacetate in humans, but lacks other key disposition parameters like clearance or volume of distribution. |
| `Copie_1993.pdf` | Copie X et al., [Effect of dimethicone on pharmacokinet…, Therapie (1993) | popPK | 8 | not captured | [8351679](https://pubmed.ncbi.nlm.nih.gov/8351679) | The study reports PK parameters for ethyl biscoumacetate in humans, but only Cmax values are explicitly provided in the text, while other quantitative parameters (CL, V, AUC) are mentioned as non-significant or implied without specific numeric values. |

<sub>queue written 2026-10-05T15:54:19.146484+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Au_2008 | irrelevant | 0 | 0 | The paper is a review of pharmacogenomics for 4-hydroxycoumarin anticoagulants (e.g., warfarin) and does not report quantitative pharmacokinetic parameters for ethyl_biscoumacetate. |
| popPK | Breckenridge_1985 | irrelevant | 0 | 0 | The study investigates warfarin, difenacoum, and brodifacoum, not ethyl_biscoumacetate. |
| popPK | Chen_2011 | irrelevant | 0 | 0 | The study focuses on the metabolism and nephrotoxicity of aristolochic acid I, and ethyl_biscoumacetate is not mentioned or studied. |
| popPK | Copie_1993 | relevant | 8 | 2 | The study reports PK parameters for ethyl biscoumacetate in humans, but only Cmax values are explicitly provided in the text, while other quantitative parameters (CL, V, AUC) are mentioned as non-significant or implied without specific numeric values. |
| PD | Copie_1993 | not_relevant | 2 | 1 | The study reports only a comparison of mean PK/PD parameters between two conditions (with/without dimethicone) and finds no significant difference in PD; it does not provide a concentration-effect curve, Emax, EC50, or any numeric PD model parameters. |
| popPK | Curto_2017 | irrelevant | 0 | 0 | The paper is a review on dental management of edoxaban and does not report pharmacokinetic parameters for ethyl_biscoumacetate. |
| popPK | Curto_2017_2 | irrelevant | 0 | 0 | The paper is a review on dental management of novel oral anticoagulants (dabigatran, etc.) and does not report pharmacokinetic parameters for ethyl_biscoumacetate. |
| popPK | Eagling_1994 | irrelevant | 0 | 0 | The paper studies the in-vitro metabolism of zidovudine and does not report pharmacokinetic parameters for ethyl_biscoumacetate. |
| popPK | FREMONT_1964 | irrelevant | 0 | 0 | The provided evidence contains only the title of a pharmacodynamics study, with no quantitative pharmacokinetic parameters or data for ethyl biscoumacetate. |
| PD | FREMONT_1964 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data, curves, or parameters for ethyl biscoumacetate. |
| popPK | Haider_2023 | irrelevant | 0 | 0 | The paper is a case report on brodifacoum (a superwarfarin) intoxication and does not study ethyl_biscoumacetate or report its pharmacokinetic parameters. |
| popPK | Kelly_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of difenacoum, not ethyl_biscoumacetate. |
| popPK | Lavanya_2023 | irrelevant | 0 | 0 | The study is an in-vitro biophysical investigation of DNA binding and antioxidant activity for a different compound (CDC), not a pharmacokinetic study of ethyl_biscoumacetate. |
| popPK | Lavanya_2024 | irrelevant | 0 | 0 | The paper studies the biophysical interaction of dicoumarol (a different drug) with DNA in vitro, not the pharmacokinetics of ethyl_biscoumacetate. |
| popPK | Nosal_2020 | irrelevant | 0 | 0 | The paper describes an analytical method for superwarfarins and does not study ethyl_biscoumacetate or report any pharmacokinetic parameters. |
| popPK | Pan_2026 | irrelevant | 0 | 0 | The paper studies novel 4-hydroxycoumarin derivatives (PB1-3) for anti-cancer activity, not the pharmacokinetics of ethyl biscoumacetate. |
| popPK | Perucca_1982 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions with antiepileptic drugs and does not report quantitative PK parameters for ethyl_biscoumacetate. |
| popPK | Shi_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifampicin and its metabolite rifampicin-quinone in rats, not ethyl biscoumacetate. |
| popPK | Sun_2020 | irrelevant | 0 | 0 | The paper is a review of dicoumarol, not ethyl_biscoumacetate, and contains no original quantitative PK parameters for the target drug. |
| popPK | Sáez-Peñataro_2016 | irrelevant | 0 | 0 | The paper is a review of direct oral anticoagulants (dabigatran, rivaroxaban, apixaban, edoxaban) and does not report pharmacokinetic parameters for ethyl biscoumacetate. |
| popPK | Thijssen_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of warfarin, not ethyl_biscoumacetate. |
| popPK | Thijssen_1988 | irrelevant | 0 | 0 | The study focuses on acenocoumarol and phenprocoumon, not ethyl_biscoumacetate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
