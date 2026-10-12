<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;enprostil&quot;}]"></div>

# enprostil

- **generic name:** enprostil
- **ATC codes:** `A02BB02`
- **DrugBank:** [DB13824](https://go.drugbank.com/drugs/DB13824) · **PubChem:** not captured
- **molar mass:** 400.471 g/mol (C23H28O6) — DrugBank
- **groups:** experimental

## About

Enprostil is a prostaglandin that was developed as an anti-ulcer drug for acid-related disorders such as peptic ulcer. It is not an established marketed medicine today; it appears only as an experimental compound and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5379483](https://www.wikidata.org/wiki/Q5379483) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 08:48 | 1:53 | 0/0/0 | 0/0/0 | 0/0/0 | 67,661/2,597 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 4/1 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 38 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Botella_1995.pdf` | Botella A et al., Receptor subtypes involved in dual effe…, The Journal of pharmacology… (1995) | pd | 4 | not captured | [7791070](https://www.ncbi.nlm.nih.gov/pubmed/7791070) | metadata signals extractable PD data (EC50) |
| `Pawlotsky_1993.pdf` | Pawlotsky JM et al., Effects of PGE2, misoprostol, and enpro…, Digestive diseases and scie… (1993) | pd | 4 | [10.1007/BF01307550](https://doi.org/10.1007/BF01307550) | [8425443](https://www.ncbi.nlm.nih.gov/pubmed/8425443) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T08:47:27.209982+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bang_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of misoprostol's protective effects on liver cells, where enprostil is only mentioned as a previous comparator, and no pharmacokinetic parameters are reported. |
| popPK | Botella_1995 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| popPK | Chirila_2026 | irrelevant | 0 | 0 | The paper is a machine learning study for HIV-1 drug repurposing and does not contain any pharmacokinetic data for enprostil. |
| PD | Chirila_2026 | not_relevant | 0 | 0 | The paper is a computational study on machine learning for drug repurposing and does not contain any pharmacodynamic, exposure-response, or dose-response data for enprostil. |
| popPK | Crider_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of prostaglandin receptors, not a pharmacokinetic study, and enprostil is only mentioned as a weak/inactive agonist. |
| PD | Crider_1999 | not_relevant | 3 | 2 | The paper reports that enprostil is a weak or inactive agonist in the assay but does not provide specific numeric PD parameters (EC50, Emax) for enprostil, only for other DP receptor agonists. |
| popPK | Davis_1989 | irrelevant | 0 | 0 | The study assesses the metabolic effects (glucose and lipid) of enprostil in diabetic patients and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Eglen_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of enprostil's receptor activity (EC50 values) and does not report any pharmacokinetic disposition parameters. |
| popPK | Goa_1987 | irrelevant | 2 | 0 | The paper is a review of pharmacodynamic and therapeutic efficacy properties, and the provided evidence contains no quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) for enprostil. |
| PD | Goa_1987 | not_relevant | 2 | 1 | The text is a qualitative review summarizing general pharmacodynamic effects (e.g., up to 80% acid suppression) and clinical efficacy, but it does not provide specific numeric PD parameters (Emax, EC50) or an extractable concentration-effect curve. |
| popPK | Grass_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intestinal permeability, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Griffin_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of an FP receptor using enprostil as a test ligand, not a pharmacokinetic study of enprostil disposition. |
| PD | Griffin_1998 | not_relevant | 1 | 0 | The paper characterizes an FP receptor using various prostaglandins, but enprostil is only mentioned as a less potent/efficacious agonist without providing specific numeric PD parameters (EC50, Emax) for it. |
| popPK | Hawkey_1986 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of gastric mucosal protection (blood loss) and does not report any pharmacokinetic parameters for enprostil. |
| popPK | Heijerman_1990 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing ranitidine and enprostil for fat absorption in cystic fibrosis, reporting no pharmacokinetic parameters. |
| popPK | Hussein_1993 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of lansoprazole, not enprostil. |
| popPK | Kohli_1988 | irrelevant | 0 | 0 | The study focuses on the antisecretory pharmacodynamic effect of enprostil on gastric acid secretion, not on its pharmacokinetic disposition parameters. |
| popPK | Lanza_1990 | irrelevant | 0 | 0 | The study is a clinical safety/endoscopic assessment of mucosal effects and does not report any pharmacokinetic parameters. |
| PD | Lanza_1990 | not_relevant | 3 | 1 | The paper reports a qualitative dose-response relationship (35 vs 70 micrograms) on mucosal scores but does not provide numeric PD parameters (e.g., EC50, Emax) or concentration-effect data. |
| popPK | Lanzon-Miller_1988 | irrelevant | 0 | 0 | The study measures the pharmacodynamic effect of enprostil on gastrin release, not the pharmacokinetic disposition parameters of enprostil itself. |
| popPK | Livingston_1993 | irrelevant | 0 | 0 | The study investigates the effect of enprostil on gastric mucosal blood flow (hemodynamics) rather than pharmacokinetic disposition parameters. |
| popPK | Moriga_1989 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (gastric acid secretion inhibition) rather than pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Murai_1996 | irrelevant | 0 | 0 | The study investigates the metabolic effects of enprostil on hepatic lipid content and enzyme activities, not its pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Naito_1989 | irrelevant | 2 | 0 | The study reports qualitative whole-body autoradiographic distribution data (tissue levels, timing of peaks) rather than quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Nauck_1997 | irrelevant | 0 | 0 | The paper discusses GLP-1 pharmacology and mentions enprostil only as a comparator agent that suppresses GIP responses, without reporting any quantitative pharmacokinetic parameters for enprostil. |
| popPK | Onizuka_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy trial measuring eicosanoid concentrations and mucosal damage, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Pawlotsky_1993 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Reaven_1988 | irrelevant | 0 | 0 | The study reports metabolic effects (glucose, insulin, lipids) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for enprostil. |
| popPK | Reilly_1986 | irrelevant | 0 | 0 | The study investigates enprostil's effect on the pharmacokinetics of propranolol (a probe drug), not the disposition parameters of enprostil itself. |
| popPK | Schwartz_1988 | irrelevant | 0 | 0 | The study investigates the metabolic and hormonal effects of enprostil (glucose, insulin, GIP) rather than its pharmacokinetic disposition parameters. |
| popPK | Schwartz_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of enprostil on lipemia and glucose metabolism, not on its pharmacokinetic disposition parameters. |
| popPK | Smith_1989 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| popPK | Sontag_1994 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for ulcer healing and does not report any pharmacokinetic parameters for enprostil. |
| popPK | Vanhanen_1995 | irrelevant | 0 | 0 | The study investigates the effect of enprostil on cholesterol and fat absorption/metabolism, not the pharmacokinetic disposition parameters (CL, V, ka) of enprostil itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
