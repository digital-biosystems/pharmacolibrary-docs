<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;ciprofibrate&quot;}]"></div>

# ciprofibrate

- **generic name:** ciprofibrate
- **ATC codes:** `C10AB08`
- **DrugBank:** [DB09064](https://go.drugbank.com/drugs/DB09064) · **PubChem:** none
- **molar mass:** 289.15 g/mol (C13H14Cl2O3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Ciprofibrate is a fibrate lipid-lowering drug used to treat hyperlipidemia, including familial forms. It has been withdrawn from the market in some countries and is no longer widely available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3496452](https://www.wikidata.org/wiki/Q3496452) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ciprofibrate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PPARA (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:33 | 2:59 | 0/0/0 | 0/0/0 | 0/0/0 | 24,468/1,128 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kocarek_1989.pdf` | Kocarek TA et al., Quantitative assessment of enzyme induc…, Biochemical pharmacology (1989) | pd | 4 | [10.1016/0006-2952(89)90511-x](https://doi.org/10.1016/0006-2952(89)90511-x) | [2597188](https://www.ncbi.nlm.nih.gov/pubmed/2597188) | metadata signals extractable PD data (EC50) |
| `Gallagher_1995.pdf` | Gallagher EP et al., The effects of diquat and ciprofibrate…, Toxicology and applied phar… (1995) | pgx | 8 | [10.1006/taap.1995.1171](https://doi.org/10.1006/taap.1995.1171) | [7676460](https://www.ncbi.nlm.nih.gov/pubmed/7676460) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07 11:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bighetti_2009 | not_relevant | 0 | 0 | The paper studies the effect of ciprofibrate on CETP gene expression and lipid metabolism in transgenic mice, but does not report a pharmacogenomic effect (gene variant altering drug PK/PD) for ciprofibrate itself. |
| PGx | Buckley_2009 | not_relevant | 0 | 0 | The paper studies the induction of UGT mRNA expression in mice by various drugs, including ciprofibrate, but does not report pharmacogenomic effects of genetic variants on ciprofibrate's PK or PD parameters. |
| popPK | Budroe_1992 | irrelevant | 0 | 0 | The study focuses on toxicological endpoints (enzyme induction, mitogenesis) in mice and does not report pharmacokinetic parameters such as clearance or volume. |
| PGx | Gallagher_1995 | not_relevant | 0 | 0 | The study investigates the effects of ciprofibrate on hepatic enzyme expression in rats and does not report any pharmacogenomic effects (gene variants) on ciprofibrate's PK or PD parameters. |
| PGx | Hassett_1998 | not_relevant | 0 | 0 | The paper investigates the effect of ciprofibrate as a chemical inducer on epoxide hydrolase expression, not the effect of genetic variants on ciprofibrate's pharmacokinetics or pharmacodynamics. |
| PGx | Heydel_2012 | not_relevant | 0 | 0 | The study investigates the effect of ciprofibrate on rat hepatic enzyme expression (drug effect on biology), not the effect of a genetic variant on ciprofibrate's pharmacokinetics or pharmacodynamics. |
| popPK | Kocarek_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme induction in rat hepatocytes and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for ciprofibrate. |
| PGx | Lake_1996 | not_relevant | 0 | 0 | The paper studies the induction of CYP enzymes by ciprofibrate in liver slices, not the effect of a gene variant on ciprofibrate's PK/PD. |
| PGx | Le-Niculescu_2021 | not_relevant | 0 | 0 | The paper discusses ciprofibrate only as a potential repurposed drug candidate for mood disorders and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Miller_1998 | not_relevant | 0 | 0 | The paper is a general review of fibrate pharmacokinetics and does not report any pharmacogenomic effects or specific gene variants affecting ciprofibrate. |
| popPK | Mukherjee_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PPARalpha ligand binding and coactivator recruitment, not a pharmacokinetic study. |
| popPK | Ochs_1992 | irrelevant | 0 | 0 | The study is a mechanistic/toxicological investigation of hepatic enzyme activity in mice, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Olsson_1982 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects on serum lipoprotein concentrations, not pharmacokinetic parameters. |
| popPK | Reisenbichler_1993 | irrelevant | 0 | 0 | The study investigates the genotoxic effects of ciprofibrate in rat hepatocytes and does not report any pharmacokinetic parameters. |
| popPK | Rouffy_1985 | irrelevant | 1 | 0 | The study is a clinical efficacy trial comparing lipid-lowering effects and does not report quantitative pharmacokinetic parameters (CL, V, ka) for ciprofibrate. |
| PGx | Surry_2000 | not_relevant | 0 | 0 | The paper describes a method for measuring CYP induction in rat hepatocytes and reports Ind50 values for ciprofibrate, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bciprofibrate%5D&body=Drug%3A%20ciprofibrate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ciprofibrate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
