<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;rokitamycin&quot;}]"></div>

# rokitamycin

- **generic name:** rokitamycin
- **ATC codes:** `J01FA12`
- **DrugBank:** [DB13409](https://go.drugbank.com/drugs/DB13409) · **PubChem:** none
- **molar mass:** 828.006 g/mol (C42H69NO15) — DrugBank
- **groups:** experimental

## About

Rokitamycin is a macrolide antibiotic, a class of drugs used to treat bacterial infections. It is not an established marketed medicine; DrugBank lists it only as experimental, so it appears to be limited to research or investigational use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3940221](https://www.wikidata.org/wiki/Q3940221) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rokitamycin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:32 | 2:38 | 0/0/0 | 0/0/0 | 0/0/0 | 54,112/1,949 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 30 matched, 28 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Broggini_1991.pdf` | Broggini M et al., Pharmacokinetics of rokitamycin after s…, European journal of drug me… (1991) | popPK | 8 | [10.1007/BF03189950](https://doi.org/10.1007/BF03189950) | [1936073](https://pubmed.ncbi.nlm.nih.gov/1936073) | The study reports qualitative PK findings (Tmax, linearity) for rokitamycin in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided evidence. |
| `Zhao_1999.pdf` | Zhao XJ et al., An in vitro study on the metabolism and…, Drug metabolism and disposi… (1999) | pd | 4 |  | [10383920](https://www.ncbi.nlm.nih.gov/pubmed/10383920) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-13 11:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adam_1992 | irrelevant | 0 | 0 | The paper is a clinical review discussing the use of macrolides in pediatrics and does not report quantitative pharmacokinetic parameters for rokitamycin. |
| popPK | Broggini_1991 | relevant | 8 | 2 | The study reports qualitative PK findings (Tmax, linearity) for rokitamycin in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided evidence. |
| popPK | Cazzola_1991 | irrelevant | 0 | 0 | The study evaluates the effect of rokitamycin on theophylline pharmacokinetics, not the pharmacokinetic parameters of rokitamycin itself. |
| popPK | Cenci_1996 | irrelevant | 0 | 0 | The study is a clinical tolerance/safety trial in humans and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for rokitamycin. |
| popPK | Cogo_1996 | irrelevant | 0 | 0 | The study focuses on clinical efficacy and immunological effects (sIgA levels) rather than pharmacokinetic parameters. |
| popPK | Farrell_2003 | irrelevant | 0 | 0 | The paper describes macrolide resistance mechanisms in bacterial isolates and reports MICs, not pharmacokinetic parameters for rokitamycin. |
| popPK | Fornaseri_1997 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety trial for odontostomatological infections and does not report any pharmacokinetic parameters. |
| popPK | Hirosawa_1988 | irrelevant | 0 | 0 | The study reports clinical efficacy and safety in pediatric patients but contains no pharmacokinetic parameters (CL, V, t1/2, etc.) for rokitamycin. |
| popPK | Irimajiri_1991 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for Campylobacter enteritis and does not report pharmacokinetic parameters (CL, V, t1/2) for rokitamycin. |
| popPK | Kanfer_1998 | irrelevant | 0 | 0 | The paper is a review of analytical methods (chromatography) for macrolides and does not report pharmacokinetic parameters for rokitamycin. |
| popPK | Kuno_1988 | relevant | 4 | 2 | The study reports qualitative PK parameters (tmax, half-life range, urinary recovery) for rokitamycin in humans, but lacks specific numeric values for clearance, volume of distribution, or absorption rate constants. |
| popPK | Mazzei_1993 | irrelevant | 0 | 0 | The paper is a review of the chemistry and mode of action of macrolides and does not report quantitative pharmacokinetic parameters for rokitamycin. |
| popPK | Meguro_1988 | irrelevant | 2 | 0 | The abstract mentions pharmacokinetic observations but provides no quantitative disposition parameters (CL, V, t1/2, etc.) for rokitamycin. |
| popPK | Miura_1987 | irrelevant | 0 | 0 | The paper is a toxicity study reporting clinical and pathological observations, not a pharmacokinetic study with quantitative disposition parameters. |
| popPK | Motohiro_1989 | irrelevant | 0 | 0 | The study focuses on the clinical efficacy and MICs of clarithromycin in children, with rokitamycin serving only as a comparator for in-vitro susceptibility testing, not as the subject of pharmacokinetic analysis. |
| popPK | Nagata_1987 | irrelevant | 0 | 0 | The paper describes a chronic toxicity study in beagle dogs and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for rokitamycin. |
| popPK | Nahata_1996 | irrelevant | 0 | 0 | The paper is a review of drug interactions and does not report quantitative pharmacokinetic parameters for rokitamycin. |
| popPK | Ono_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tricyclic ketolides (TE-802, etc.), with rokitamycin serving only as an in vitro comparator for antibacterial activity. |
| popPK | Periti_1992 | irrelevant | 0 | 0 | The paper is a review of macrolide drug interactions and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for rokitamycin. |
| popPK | Petitjean_1995 | irrelevant | 1 | 0 | The study is a methodological investigation into tissue extraction techniques using rokitamycin as a probe, and it does not report quantitative pharmacokinetic parameters (CL, V, etc.). |
| popPK | Sakata_1988 | irrelevant | 4 | 2 | The study reports only peak concentrations and urinary excretion percentages, lacking quantitative disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Sato_1989 | irrelevant | 0 | 0 | The study focuses on clarithromycin, with rokitamycin mentioned only as a comparator for antibacterial activity, not as the subject of pharmacokinetic analysis. |
| popPK | Zhao_1999 | irrelevant | 1 | 2 | The study is an in-vitro mechanistic investigation of metabolism using rat liver microsomes, reporting enzyme kinetic parameters (Km, Vmax) rather than in-vivo pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Zhao_1999_2 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of metabolism and enzyme inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Zhao_1999_2 | not_relevant | 0 | 0 | The study is an in vitro investigation of metabolic pathways and drug interactions in human liver microsomes and does not report pharmacogenomic effects or human PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brokitamycin%5D&body=Drug%3A%20rokitamycin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rokitamycin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
