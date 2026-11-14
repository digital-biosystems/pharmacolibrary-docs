<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Quinestrol&quot;}]"></div>

# Quinestrol

- **generic name:** Quinestrol
- **T3DB:** [T3D3063](http://www.t3db.ca/toxins/T3D3063) · **DrugBank:** [DB04575](https://go.drugbank.com/drugs/DB04575) · **PubChem:** [CID 9046](https://pubchem.ncbi.nlm.nih.gov/compound/9046)
- **groups:** approved

## About

Quinestrol is only found in individuals that have used or taken this drug. It is a 3-cyclopentyl ether of ethinyl estradiol. Estrogens diffuse into their target cells and interact with a protein receptor (the estrogen receptor). …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** absorbed following oral administration.
- **Sources and uses:** Used in hormone replacement therapy, treating symptoms of menopause such as hot flashes. Also used to treat breast and prostate cancer.
- **Mechanism of toxicity:** Estrogens diffuse into their target cells and interact with a protein receptor (the estrogen receptor). Estrogen interacts with a target cell receptor. …
- **Health effects:** Side effects include liver and kidney dysfunction, high blood pressure, heart disease, degeneration of the testicles, premature baldness, and acne.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3063">T3DB T3D3063</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 152-43-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:8716">ChEBI 8716</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=quinestrol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ESR1 (modulator), ESR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 05:29 | 3:37 | 0/0/0 | 0/0/0 | 0/0/0 | 72,838/1,759 | einfracz / qwen3.8-flash-next | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 22 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baumgardner_1978 | irrelevant | 0 | 0 | The paper reports clinical efficacy outcomes for vasomotor flushes but contains no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients for quinestrol. |
| popPK | Chuan_1976 | irrelevant | 0 | 0 | no_text gate: only 51 chars of text extracted (&lt; 400) |
| popPK | Hefnawi_1972 | irrelevant | 0 | 0 | no_text gate: only 37 chars of text extracted (&lt; 400) |
| popPK | Ji_2024 | irrelevant | 2 | 2 | The paper focuses on reproductive toxicity outcomes (sperm, hormones) rather than quantitative toxicokinetic parameters like half-life or clearance; the few kinetic values present are cited from other studies. |
| PGx | Ji_2024 | not_relevant | 2 | 2 | The paper describes a drug-drug interaction (ketoconazole inhibiting CYP3A4 metabolism of quinestrol) rather than a pharmacogenomic effect based on human or animal genetic variation (gene variant/genotype). |
| PGx | Ji_2024_2 | not_relevant | 0 | 0 | The study investigates the pharmacokinetic interaction between quinestrol and clarithromycin (a CYP3A4 inhibitor) and their effects on reproductive parameters, but does not analyze genetic variants (pharmacogenomics). |
| popPK | Kejuan_2007 | irrelevant | 1 | 1 | This is a review of contraceptive efficacy and safety, reporting serum levels of a metabolite (ethinylestradiol) and clinical outcomes, but no toxicokinetic parameters for quinestrol itself are reported. |
| popPK | Mandla_2026 | relevant | 4 | 0 | The paper reports pharmacodynamic effects (ovary/uterine weight, histology) and duration of efficacy in rats but lacks specific quantitative toxicokinetic parameters like half-life, clearance, or volume of distribution; no numeric kinetic values are present in the evidence. |
| popPK | Manning_1971 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| popPK | Mokkarala_2025 | irrelevant | 1 | 0 | The paper is a scoping review of contraceptive methods that references quinestrol-containing contraception but does not report any quantitative toxicokinetic parameters or numeric values for quinestrol in the evidence provided. |
| popPK | Peters_1977 | irrelevant | 1 | 0 | The paper is a clinical study comparing the effects of quinestrol and bromocriptine on glucose tolerance, reporting no quantitative toxicokinetic parameters for quinestrol. |
| popPK | Ping_1976 | irrelevant | 0 | 0 | no_text gate: only 36 chars of text extracted (&lt; 400) |
| popPK | Saeed_2026 | irrelevant | 0 | 0 | The paper mentions quinestrol only as a compound with predicted ADMET properties in an in silico study, with no quantitative toxicokinetic parameters reported. |
| popPK | Shi_2020 | irrelevant | 2 | 1 | The paper reports reproductive toxicity and hormone effects of quinestrol in Brandt's voles but provides no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients); the mention of adipose storage is qualitative. |
| PGx | Shi_2020 | not_relevant | 0 | 0 | The study investigates drug effects in a wild rodent species without analyzing gene variants or genotypes (pharmacogenomics); CYP1A2 expression is treated as a downstream toxicological outcome of the drug, not a stratified genetic predictor. |
| PGx | Su_2017 | not_relevant | 1 | 0 | The study reports general pharmacodynamic/toxicodynamic effects of quinestrol in animal models but does not investigate any gene variants, genotypes, or pharmacogenomic interactions. |
| popPK | Su_2019 | irrelevant | 0 | 0 | The paper reports reproductive toxicology outcomes (hormone levels, sperm density, organ weights) but contains no toxicokinetic parameters such as half-lives, clearance, or absorption rates. |
| popPK | Tsilifonis_1967 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Yu_1988 | irrelevant | 1 | 0 | The study focuses on metabolic changes (lipids, glucose, cortisol) and return of ovulation, not toxicokinetic parameters; quinestrol concentration-time data or kinetic parameters are absent. |
| popPK | Zha_1987 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| popPK | Zhu_1988 | irrelevant | 0 | 0 | no_text gate: only 49 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquinestrol%5D&body=Drug%3A%20quinestrol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_quinestrol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
