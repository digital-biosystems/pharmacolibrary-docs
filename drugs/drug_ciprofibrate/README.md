<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;ciprofibrate&quot;}]"></div>

# ciprofibrate

- **generic name:** ciprofibrate
- **ATC codes:** `C10AB08`
- **DrugBank:** [DB09064](https://go.drugbank.com/drugs/DB09064) · **PubChem:** not captured
- **molar mass:** 289.15 g/mol (C13H14Cl2O3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Ciprofibrate is a fibrate lipid-lowering drug used to treat hyperlipidemia, including familial forms. It has been withdrawn from the market in some countries and is no longer widely available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3496452](https://www.wikidata.org/wiki/Q3496452) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 01:12 | 0:15 | 0/0/0 | 0/0/0 | 0/0/0 | 20,964/1,164 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ciprofibrate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PPARA (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kocarek_1989.pdf` | Kocarek TA et al., Quantitative assessment of enzyme induc…, Biochemical pharmacology (1989) | pd | 4 | [10.1016/0006-2952(89)90511-x](https://doi.org/10.1016/0006-2952(89)90511-x) | [2597188](https://www.ncbi.nlm.nih.gov/pubmed/2597188) | metadata signals extractable PD data (EC50) |
| `Gallagher_1995.pdf` | Gallagher EP et al., The effects of diquat and ciprofibrate…, Toxicology and applied phar… (1995) | pgx | 8 | [10.1006/taap.1995.1171](https://doi.org/10.1006/taap.1995.1171) | [7676460](https://www.ncbi.nlm.nih.gov/pubmed/7676460) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-15T01:12:29.465511+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bighetti_2009 | not_relevant | 2 | 5 | The study investigates drug-induced changes in lipid metabolism and gene expression in transgenic mouse models, but does not report a specific gene variant/genotype altering the pharmacokinetic (ADME) or pharmacodynamic parameters of ciprofibrate itself. |
| PGx | Buckley_2009 | not_relevant | 0 | 0 | The study examines the induction of UGT mRNA expression in mice by ciprofibrate (as a PPARalpha activator), not the pharmacogenomic effects of human gene variants on ciprofibrate's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Budroe_1992 | irrelevant | 0 | 0 | The study focuses on toxicological endpoints (enzyme induction, mitogenesis) in mice and does not report pharmacokinetic parameters for ciprofibrate. |
| PGx | Gallagher_1995 | not_relevant | 0 | 0 | The study investigates the effects of ciprofibrate as a xenobiotic on hepatic enzyme expression in rats, rather than the impact of genetic variants on the pharmacokinetics or pharmacodynamics of ciprofibrate. |
| PGx | Hassett_1998 | not_relevant | 0 | 0 | The paper investigates the effect of chemical inducers (including ciprofibrate) on enzyme expression (mEH), rather than the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of ciprofibrate. |
| PGx | Heydel_2012 | not_relevant | 0 | 0 | The study investigates the drug's effect on hepatic enzymes (PGX) in rats, not the effect of a gene variant on the drug's PK/PD parameters. |
| popPK | Kocarek_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme induction in rat hepatocytes and does not report pharmacokinetic parameters for ciprofibrate. |
| PGx | Lake_1996 | not_relevant | 0 | 0 | The study investigates CYP induction by ciprofibrate in cultured liver slices, not the effect of a gene variant on ciprofibrate's PK/PD parameters. |
| PGx | Le-Niculescu_2021 | not_relevant | 0 | 0 | The paper discusses ciprofibrate only as a drug identified through bioinformatics for repurposing as a potential antidepressant, not analyzing the pharmacogenomics of ciprofibrate itself. |
| PGx | Miller_1998 | not_relevant | 0 | 0 | The paper is a general review of fibrate pharmacokinetics and does not report any pharmacogenomic or genotype-specific effects on PK/PD parameters. |
| popPK | Mukherjee_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PPARalpha ligand-receptor interactions and does not report any pharmacokinetic parameters for ciprofibrate. |
| popPK | Ochs_1992 | irrelevant | 0 | 0 | The study examines hepatic acyl-CoA oxidase activity (a toxicological endpoint) rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Olsson_1982 | irrelevant | 0 | 0 | The study is a clinical efficacy trial reporting lipoprotein concentration changes, not a pharmacokinetic study, and does not report any PK parameters (CL, V, t1/2) for ciprofibrate. |
| popPK | Reisenbichler_1993 | irrelevant | 0 | 0 | The study focuses on the genotoxic effects (SCE, chromosomal aberrations, micronuclei) of ciprofibrate in rat hepatocytes and does not report any pharmacokinetic disposition parameters. |
| popPK | Rouffy_1985 | irrelevant | 2 | 0 | The study focuses on therapeutic efficacy and lipid changes, mentioning a long half-life qualitatively but providing no quantitative pharmacokinetic parameters (CL, V, etc.) for ciprofibrate. |
| PGx | Surry_2000 | not_relevant | 0 | 0 | The paper focuses on CYP induction in rat hepatocytes and does not report any human pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of ciprofibrate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
