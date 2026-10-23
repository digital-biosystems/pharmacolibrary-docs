<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01B&quot;,&quot;href&quot;:&quot;atc/H01B.md&quot;},{&quot;label&quot;:&quot;lypressin&quot;}]"></div>

# lypressin

- **generic name:** lypressin
- **ATC codes:** `H01BA03`
- **DrugBank:** [DB14642](https://go.drugbank.com/drugs/DB14642) · **PubChem:** not captured
- **molar mass:** 1056.23 g/mol (C46H65N13O12S2) — DrugBank
- **groups:** approved

## About

Lypressin, a lysine vasopressin from pigs, is a vasopressin analogue with antidiuretic, vasoconstricting and blood-stopping actions. It is an approved medicine, classified among posterior pituitary lobe hormones (vasopressin and analogues), though it is not an EU-authorised product.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27107266](https://www.wikidata.org/wiki/Q27107266) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Ukena_1995_spontaneous_contractions_of_isolated_gut_preparations](drugs/drug_lypressin/pd_Ukena_1995_spontaneous_contractions_of_isolated_gut_preparat.md) | spontaneous contractions of isolated gut preparations ← 8-L-lysinevasopressin · model not identified | — | Ukena K et al., Effects of annetocin, an oxytocin-relat…, The Journal of experimental… (1995) | [10.1002/jez.1402720303](https://doi.org/10.1002/jez.1402720303) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Zoeller_1983_Wolffian_duct_contraction](drugs/drug_lypressin/pd_Zoeller_1983_Wolffian_duct_contraction.md) | Wolffian duct contraction ← lypressin · stimulation effect | — | Zoeller RT et al., Contractions of amphibian Wolffian duct…, The Journal of experimental… (1983) | [10.1002/jez.1402260108](https://doi.org/10.1002/jez.1402260108) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lypressin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCC2` unknown | DrugBank actor |
| excretion | kidney | `ABCC2` unknown | DrugBank actor |
| excretion | liver | `ABCC2` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: AVPR1A (unknown), AVPR1B (unknown), AVPR2 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:16 | 4:33 | 0/0/0 | 1/1/0 | 0/0/0 | 109,900/3,058 | einfracz / qwen3.8-27b | 4 | 1/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 66 matched, 60 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Maggi_1986.pdf` | Maggi M et al., Identification and characterization of…, Proceedings of the National… (1986) | pd | 4 | [10.1073/pnas.83.23.8824](https://doi.org/10.1073/pnas.83.23.8824) | [2947237](https://www.ncbi.nlm.nih.gov/pubmed/2947237) | metadata signals extractable PD data (EC50) |
| `Meidan_1985.pdf` | Meidan R et al., Identification and characterization of…, Endocrinology (1985) | pd | 4 | [10.1210/endo-116-1-416](https://doi.org/10.1210/endo-116-1-416) | [2981073](https://www.ncbi.nlm.nih.gov/pubmed/2981073) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T09:15:09.007512+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atherton_1971 | irrelevant | 0 | 0 | The study is a physiological/pharmacodynamic investigation of renal tissue and urinary composition in response to lysine-vasopressin, not a pharmacokinetic study, and the drug is not lypressin. |
| PGx | Ayyad_2023 | not_relevant | 0 | 0 | The paper focuses on terlipressin (not lypressin) and discusses standard PK/PD properties without reporting any gene-based pharmacogenomic effects. |
| popPK | Bekemeier_1980 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics (vasopressor sensitivity) of noradrenaline and vasopressin in rats, not the pharmacokinetics of lypressin. |
| popPK | Bjelkengren_1990 | irrelevant | 0 | 0 | The study focuses on lysine-vasopressin and triglycyl-lysine-vasopressin, not lypressin (which is a different peptide), and does not report lypressin PK parameters. |
| popPK | Burnier_1983 | irrelevant | 0 | 0 | The study measures hemodynamic pressor responses (pharmacodynamics) to vasopressin in rats, not the pharmacokinetic disposition parameters (CL, V, t1/2) of lypressin. |
| popPK | Cantau_1988 | irrelevant | 0 | 0 | The study investigates receptor desensitization and binding kinetics in cell lines, not the population pharmacokinetic disposition parameters (CL, V, etc.) of lypressin. |
| popPK | Conklin_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of arginine vasotocin receptors in trout, not a pharmacokinetic study of lypressin. |
| popPK | Crine_1982 | irrelevant | 0 | 0 | The study investigates the behavioral effects of lysine-vasopressin (a different drug) on avoidance response, with no pharmacokinetic parameters or data for lypressin. |
| popPK | Elliott_1968 | irrelevant | 0 | 0 | The paper studies the physiological effects of neurohypophysial peptides on fluid uptake in toads, not the pharmacokinetics of lypressin. |
| popPK | Faiman_1991 | irrelevant | 0 | 0 | The study is a behavioral pharmacology study in mice investigating memory retention using vasopressin and nicotine, not a pharmacokinetic study of lypressin. |
| popPK | Höglund_1984 | irrelevant | 0 | 0 | The paper studies the behavioral effects of lysine-vasopressin (a related peptide) in rats, not the pharmacokinetics of lypressin. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics (antidiuretic effects) and receptor binding of octopus-derived peptides (CPT/OTP) and compares them to AVP and desmopressin; it does not report pharmacokinetic disposition parameters (CL, V, etc.) for lypressin. |
| popPK | Ladosky_1984 | irrelevant | 0 | 0 | The paper is an in vitro pharmacodynamic study of uterine sensitivity to vasopressin analogs (including lypressin) in a marsupial, not a pharmacokinetic study of lypressin. |
| popPK | Lindeberg_1980 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on adenylate cyclase activity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Lote_1987 | irrelevant | 0 | 0 | The study investigates renal haemodynamics and clearance of markers (PAH, inulin) in rats, not the pharmacokinetics of lypressin. |
| popPK | Maggi_1986 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Mineo_1997 | irrelevant | 0 | 0 | The study examines the metabolic effects of lysine-vasopressin (lypressin) on insulin and glucagon secretion in sheep, rather than its pharmacokinetic disposition parameters. |
| popPK | Nilsson_1987 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects (skin blood flow) of triglycyl-lysine-vasopressin (terlipressin), not the pharmacokinetics of lypressin. |
| popPK | Pliska_1966 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| popPK | Roy_1976 | irrelevant | 0 | 0 | The paper describes in vitro adenylate cyclase modulation by vasopressin and Mg2+ and contains no pharmacokinetic data for lypressin. |
| popPK | Schaller_1985 | irrelevant | 0 | 0 | The paper investigates the physiological response to endotoxemia and vasopressin activity in rats, and does not report pharmacokinetic parameters for lypressin. |
| popPK | Spertini_1981 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of pressor responses to vasopressin analogs (including lysine-vasopressin) in rats under ACE inhibition, not a pharmacokinetic study of lypressin. |
| popPK | Stassen_1988 | irrelevant | 0 | 0 | The study investigates the mechanism of oxytocin action (calcium signaling) in LLC-PK1 cells and does not report pharmacokinetic parameters for lypressin. |
| popPK | Szmigielska_1993 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamics of muscarinic receptors in rat brain tissue following vasopressin treatment and does not report any pharmacokinetic parameters for lypressin. |
| popPK | Textor_1981 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of bradykinin and angiotensin congeners in rats and does not involve lypressin. |
| popPK | Ukena_1995 | irrelevant | 0 | 0 | The study investigates the effects of annetocin and related peptides on gut motility in earthworms and rat uteri, containing no pharmacokinetic data for lypressin. |
| popPK | Yu_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological and receptor binding analysis, not a pharmacokinetic study. |
| popPK | Zoeller_1983 | irrelevant | 0 | 0 | The paper studies in-vitro contractile responses of amphibian Wolffian ducts to neurotransmitters and hormones, not the pharmacokinetics of lypressin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
