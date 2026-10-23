<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;oxolinic acid&quot;}]"></div>

# oxolinic acid

- **generic name:** oxolinic acid
- **ATC codes:** `J01MB05`
- **DrugBank:** [DB13627](https://go.drugbank.com/drugs/DB13627) · **PubChem:** none
- **molar mass:** 261.2301 g/mol (C13H11NO5) — DrugBank
- **groups:** investigational

## About

Oxolinic acid is a quinolone antibiotic that was used as a urinary anti-infective to treat bacterial infections. It is now considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q287840](https://www.wikidata.org/wiki/Q287840) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 11:44 | 0:42 | 0/0/0 | 0/0/0 | 0/0/0 | 27,730/1,082 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Björklund_1991.pdf` | Björklund HV et al., Comparative pharmacokinetics and bioava…, Xenobiotica; the fate of fo… (1991) | popPK | 10 | [10.3109/00498259109044401](https://doi.org/10.3109/00498259109044401) | [1763525](https://pubmed.ncbi.nlm.nih.gov/1763525) | The paper reports quantitative compartmental PK parameters (half-lives, Vdarea, bioavailability) for oxolinic acid in rainbow trout. |
| `Poher_1998.pdf` | Poher I et al., Pharmacokinetics of a discontinuous abs…, Xenobiotica; the fate of fo… (1998) | popPK | 7 | [10.1080/004982598238958](https://doi.org/10.1080/004982598238958) | [9879638](https://pubmed.ncbi.nlm.nih.gov/9879638) | The paper describes a pharmacokinetic study of oxolinic acid in turbot and reports specific numeric values for Cmax, Tmax, and bioavailability, but lacks explicit clearance or volume parameters. |
| `Halling-Sørensen_2001.pdf` | Halling-Sørensen B, Inhibition of aerobic growth and nitrif…, Archives of environmental c… (2001) | pd | 4 | [10.1007/s002440010197](https://doi.org/10.1007/s002440010197) | [11525487](https://www.ncbi.nlm.nih.gov/pubmed/11525487) | metadata signals extractable PD data (EC50) |
| `Lützhøft_1999.pdf` | Lützhøft HH et al., Algal toxicity of antibacterial agents…, Archives of environmental c… (1999) | pd | 4 | [10.1007/s002449900435](https://doi.org/10.1007/s002449900435) | [9828255](https://www.ncbi.nlm.nih.gov/pubmed/9828255) | metadata signals extractable PD data (EC50) |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 |  | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |
| `Wollenberger_2000.pdf` | Wollenberger L et al., Acute and chronic toxicity of veterinar…, Chemosphere (2000) | pd | 4 | [10.1016/s0045-6535(99)00443-9](https://doi.org/10.1016/s0045-6535(99)00443-9) | [10705550](https://www.ncbi.nlm.nih.gov/pubmed/10705550) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07 11:44 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dodd_1989 | irrelevant | 0 | 0 | The study is an in-vitro neurochemical investigation of receptor binding and is not a pharmacokinetic study. |
| popPK | Giraud_2004 | irrelevant | 0 | 0 | This is an antimicrobial resistance study on fish pathogens (Aeromonas salmonicida) using oxolinic acid as a test agent, not a pharmacokinetic study. |
| popPK | Halling-Sørensen_2001 | irrelevant | 0 | 0 | The study is an ecotoxicology assay measuring inhibition of bacterial growth (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Hernando_2007 | irrelevant | 0 | 0 | The paper evaluates the acute toxicity of oxolinic acid using the Vibrio fischeri bioassay and does not report any pharmacokinetic disposition parameters. |
| popPK | Lützhøft_1999 | irrelevant | 0 | 0 | The paper investigates algal toxicity (EC50 values) of oxolinic acid, not its pharmacokinetic parameters. |
| popPK | Poher_1998 | relevant | 7 | 3 | The paper describes a pharmacokinetic study of oxolinic acid in turbot and reports specific numeric values for Cmax, Tmax, and bioavailability, but lacks explicit clearance or volume parameters. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of GABA-antagonistic effects and does not report any pharmacokinetic parameters for oxolinic acid. |
| popPK | Wollenberger_2000 | irrelevant | 0 | 0 | The study reports ecotoxicity data (EC50/NOEC) for oxolinic acid in Daphnia magna, not pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxolinic_acid%5D&body=Drug%3A%20oxolinic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oxolinic_acid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
