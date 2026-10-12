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
| 2026-10-07 11:33 | 2:59 | 0/0/0 | 0/0/0 | 0/0/0 | 24,468/1,128 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

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

<sub>queue written 2026-10-07T11:32:58.958793+00:00</sub>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
