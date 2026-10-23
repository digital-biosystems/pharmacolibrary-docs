<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;mupirocin&quot;}]"></div>

# mupirocin

- **generic name:** mupirocin
- **ATC codes:** `D06AX09`, `R01AX06`
- **DrugBank:** [DB00410](https://go.drugbank.com/drugs/DB00410) · **PubChem:** [CID 446596](https://pubchem.ncbi.nlm.nih.gov/compound/446596)
- **molar mass:** 500.6222 g/mol (C26H44O9) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Mupirocin is a topical antibiotic used to treat skin infections such as impetigo and other staphylococcal infections, and is also applied in nasal preparations. It is an approved medicine in widespread human use, is also approved for veterinary use, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413578](https://www.wikidata.org/wiki/Q413578) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Reva_2019_cytotoxicity_against_melanoma_cell_line](drugs/drug_mupirocin/pd_Reva_2019_cytotoxicity_against_melanoma_cell_line.md) | cytotoxicity against melanoma cell line ← mupirocin · inhibition effect | — | Reva ON et al., Comparison of structures and cytotoxici…, Future medicinal chemistry (2019) | [10.4155/fmc-2018-0333](https://doi.org/10.4155/fmc-2018-0333) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wiegand_2012_bacterial_growth](drugs/drug_mupirocin/pd_Wiegand_2012_bacterial_growth.md) | bacterial growth ← mupirocin · inhibition effect | — | Wiegand C et al., Analysis of the adaptation capacity of…, Skin pharmacology and physi… (2012) | [10.1159/000341222](https://doi.org/10.1159/000341222) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mupirocin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:48 | 13:57 | 0/0/0 | 1/1/0 | 0/0/0 | 166,515/10,070 | openai / gpt-6-luna | 12 | 0/5 | 11/1 | 0 |

## Coverage

- **PubMed hits:** 61 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anderson_2015 | not_relevant | 0 | 0 | The study compares antimicrobial treatments against mupirocin-sensitive and -resistant bacteria but does not report a genetic or phenotypic effect on a mupirocin PK/PD parameter. |
| popPK | Bourgeois-Nicolaos_2014 | irrelevant | 0 | 0 | This human study reports linezolid pharmacokinetics, not mupirocin parameters. |
| popPK | Chase_2012 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| popPK | European_2018 | irrelevant | 0 | 0 | This antimicrobial-resistance surveillance report contains no mupirocin pharmacokinetic parameters. |
| popPK | European_2019 | irrelevant | 0 | 0 | This antimicrobial-resistance surveillance report contains no quantitative mupirocin pharmacokinetic parameters. |
| popPK | European_2020 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report, not a mupirocin pharmacokinetic study, and it gives no disposition parameter values. |
| popPK | European_2021 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report, not a mupirocin pharmacokinetic study, and it reports no PK parameter values. |
| popPK | European_2022 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report, not a mupirocin pharmacokinetic study, and it reports no disposition parameters. |
| popPK | European_2023 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report and contains no mupirocin pharmacokinetic parameters. |
| PGx | Furi_2016 | not_relevant | 0 | 0 | Mupirocin resistance genes are mentioned only as examples of mobile resistance mechanisms; no pharmacogenomic effect on a mupirocin PK or PD parameter is reported. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | This is a human leptospirosis clinical study and reports no mupirocin pharmacokinetic parameters. |
| PGx | Katayama_2017 | not_relevant | 0 | 0 | The paper studies mupirocin-induced changes in vancomycin resistance, not genetic effects on mupirocin pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kpanou_2021 | irrelevant | 0 | 0 | This computational drug–drug interaction study reports no quantitative mupirocin disposition parameters. |
| popPK | Lanoiselée_2020 | irrelevant | 0 | 0 | This study reports cefuroxime pharmacokinetics, not mupirocin, and provides no mupirocin parameter values. |
| PGx | Talon_1995 | not_relevant | 0 | 0 | The paper reports mupirocin efficacy and colonization outcomes, but no genetic variation or genotype-related PK/PD effects. |
| PGx | Terlecky_2026 | not_relevant | 2 | 1 | The study detects mupA and describes resistance mechanisms, but does not report a genotype-associated change in mupirocin MIC or another PK/PD parameter. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | This review reports no quantitative mupirocin pharmacokinetic parameters or disposition model. |
| popPK | Wiegand_2012 | irrelevant | 0 | 0 | This in-vitro bacterial adaptation study reports no mupirocin pharmacokinetic disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmupirocin%5D&body=Drug%3A%20mupirocin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mupirocin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
