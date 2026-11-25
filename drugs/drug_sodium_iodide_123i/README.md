<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09F&quot;,&quot;href&quot;:&quot;atc/V09F.md&quot;},{&quot;label&quot;:&quot;sodium iodide (123I)&quot;}]"></div>

# sodium iodide (123I)

- **generic name:** sodium iodide (123I)
- **ATC codes:** `V09FX02`
- **DrugBank:** [DB09420](https://go.drugbank.com/drugs/DB09420) · **PubChem:** [CID 135300](https://pubchem.ncbi.nlm.nih.gov/compound/135300)
- **molar mass:** 122.9061 g/mol (I) — DrugBank
- **groups:** approved

## About

Sodium iodide 123i is a radioactive diagnostic radiopharmaceutical used in nuclear medicine for imaging the thyroid. It is given orally as a capsule or intravenously as an injection solution. The drug is approved and used in clinical settings.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3801335](https://www.wikidata.org/wiki/Q3801335), [Wikipedia](https://en.wikipedia.org/wiki/Iodine-123?oldid=1328703950) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tonacchera_2004_125_I_uptake](drugs/drug_sodium_iodide_123i/pd_Tonacchera_2004_125_I_uptake.md) | (125)I(-) uptake ← perchlorate, thiocyanate, nitrate, and iodide · direct sigmoid Emax (Hill) effect | — | Tonacchera M et al., Relative potencies and additivity of pe…, Thyroid : official journal… (2004) | [10.1089/thy.2004.14.1012](https://doi.org/10.1089/thy.2004.14.1012) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:32 | 0:12 | 0/0/0 | 0/1/0 | 0/0/0 | 6,072/1,539 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adams_2020 | irrelevant | 0 | 0 | The paper studies the toxicology of 5-aminotetrazole and only mentions the sodium iodide symporter test for uptake inhibition, providing no pharmacokinetic parameters for sodium iodide 123I. |
| PGx | Adams_2020 | not_relevant | 0 | 0 | The paper is a toxicity study of 5-aminotetrazole and does not report pharmacogenomic effects on the PK/PD of sodium_iodide_123i. |
| popPK | Chan_2012 | irrelevant | 0 | 0 | The study investigates the effects of brominated flame retardants on gene expression in zebrafish and does not report pharmacokinetic parameters for sodium iodide 123I. |
| PGx | Chan_2012 | not_relevant | 0 | 0 | The paper reports toxicological effects of environmental chemicals on zebrafish gene expression, not a pharmacogenomic effect on the PK/PD of sodium iodide I-123. |
| popPK | Hays_1979 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for Tc-99m pertechnetate, not sodium iodide 123i. |
| PGx | Hays_1979 | not_relevant | 0 | 0 | The paper studies physiological effects of iodide, TSH, and PTU on thyroid kinetics using Tc-99m, but does not involve sodium iodide 123I or any pharmacogenomic gene variants. |
| popPK | Kogai_2005 | irrelevant | 0 | 0 | The study focuses on the molecular regulation of sodium/iodide symporter expression and cytotoxicity using iodine-131 in breast cancer cells, not the pharmacokinetic disposition of sodium iodide 123i. |
| PGx | Kogai_2005 | not_relevant | 0 | 0 | The paper investigates the regulation of sodium/iodide symporter expression by retinoids in cancer cells, focusing on I-131 cytotoxicity, and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of I-123. |
| popPK | Kramer_2002 | irrelevant | 1 | 5 | The study measures the pharmacokinetics of Iodine-131 (131I), a different isotope from the target drug Iodine-123 (123I), in human subjects. |
| PGx | Kramer_2002 | not_relevant | 0 | 0 | The study investigates biological half-life and uptake of I-131 in relation to thyroid status (functional phenotype) rather than specific genetic variants, and does not assess pharmacogenomic effects on PK/PD parameters. |
| popPK | Latif_2020 | irrelevant | 0 | 0 | This is an in-vitro TSH receptor agonist study, not a pharmacokinetic study of sodium_iodide_123i. |
| popPK | Murr_2025 | irrelevant | 0 | 0 | The study investigates the toxicological effects of the herbicide oxyfluorfen on rat puberty and thyroid function, not the pharmacokinetics of sodium iodide 123i. |
| PGx | Murr_2025 | not_relevant | 0 | 0 | The paper reports on endocrine disruption by oxyfluorfen, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of sodium iodide 123i. |
| popPK | Neumann_2016 | irrelevant | 0 | 0 | This is a pharmacology study of a TSH receptor agonist, not a quantitative PK study of sodium_iodide_123i. |
| popPK | Rosowsky_1997 | irrelevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50/TC50) of synthetic HIV-1 inhibitors, not pharmacokinetic parameters for sodium iodide 123i. |
| PGx | Rosowsky_1997 | not_relevant | 0 | 0 | The paper studies HIV-1 antiviral chemistry and does not involve sodium iodide 123i or pharmacogenomics. |
| popPK | Stoker_2024 | irrelevant | 0 | 0 | The study evaluates the herbicide oxyfluorfen as a sodium iodide symporter inhibitor in rats, not the pharmacokinetics of sodium iodide 123i. |
| PGx | Stoker_2024 | not_relevant | 0 | 0 | The paper evaluates the effects of the herbicide oxyfluorfen on thyroid hormones in rats and does not involve the drug sodium iodide I-123i or any pharmacogenomic analysis. |
| popPK | Tonacchera_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of competitive inhibition of the sodium iodide symporter (NIS) by various anions, not a pharmacokinetic study of sodium iodide I-123i. |
| PGx | Tonacchera_2004 | not_relevant | 0 | 0 | The study investigates competitive inhibition of NIS by various anions in cell cultures, not the effect of a specific genetic variant on the pharmacokinetics or pharmacodynamics of sodium iodide 123I in humans. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_iodide_123i%5D&body=Drug%3A%20sodium_iodide_123i%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_iodide_123i/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
