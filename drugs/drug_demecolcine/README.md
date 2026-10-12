<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;demecolcine&quot;}]"></div>

# demecolcine

- **generic name:** demecolcine
- **ATC codes:** `L01CC01`
- **DrugBank:** [DB13318](https://go.drugbank.com/drugs/DB13318) · **PubChem:** not captured
- **molar mass:** 371.433 g/mol (C21H25NO5) — DrugBank
- **groups:** experimental

## About

Demecolcine, a colchicine derivative, has been studied as an anticancer treatment. It remains experimental and is not an established, approved cancer therapy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q903666](https://www.wikidata.org/wiki/Q903666) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:35 | 0:10 | 0/0/0 | 0/0/0 | 0/0/0 | 20,938/695 | einfracz / qwen3.8-27b | 2 | 3/0 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=demecolcine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MAP1A (modulator), MAP1B (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lopez_1997.pdf` | Lopez I et al., Effects of antimitotic agents on secret…, Cellular and molecular neur… (1997) | pd | 4 | [10.1023/a:1026350619823](https://doi.org/10.1023/a:1026350619823) | [9353587](https://www.ncbi.nlm.nih.gov/pubmed/9353587) | metadata signals extractable PD data (IC50) |
| `Urata_1985.pdf` | Urata C et al., Pharmacologic modulation of the IgE or…, International archives of a… (1985) | pd | 4 | [10.1159/000233869](https://doi.org/10.1159/000233869) | [2411672](https://www.ncbi.nlm.nih.gov/pubmed/2411672) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T17:35:01.225278+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2024 | irrelevant | 0 | 0 | The study is a biodosimetric cytogenetic analysis where demecolcine is used only as a reagent to arrest cell division, not as the subject of a pharmacokinetic study. |
| PD | Agarwal_2024 | not_relevant | 0 | 0 | The paper uses demecolcine as a standard laboratory reagent to arrest cells in metaphase for cytogenetic analysis; it does not report any pharmacodynamic or exposure-response relationship for demecolcine itself. |
| PGx | Dvorák_2000 | not_relevant | 0 | 0 | The study investigates the effect of demecolcine on cytochrome P450 expression in vitro but does not report any pharmacogenomic associations (gene variants) affecting its PK/PD parameters. |
| PGx | Loo_2003 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of P-gp conformational changes upon drug binding, not the impact of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Loo_2003_2 | not_relevant | 0 | 0 | The paper describes structural conformational changes in P-glycoprotein upon substrate binding but does not report any genetic variants or pharmacokinetic/pharmacodynamic parameters. |
| PGx | Loo_2003_3 | not_relevant | 0 | 0 | The paper investigates the biochemical mechanism of P-glycoprotein ATPase activation using a verapamil analog and does not report clinical pharmacokinetic or pharmacodynamic effects of demecolcine based on genetic variants. |
| PGx | Loo_2003_4 | not_relevant | 0 | 0 | The paper is a biochemical study on P-gp binding pockets and mutagenesis, not a clinical pharmacogenomic study on demecolcine PK/PD parameters. |
| PGx | Loo_2006 | not_relevant | 0 | 0 | The study investigates the structural role of P-gp TM1 in drug binding using verapamil and mentions demecolcine only as a negative control for ATPase stimulation, without reporting pharmacogenomic effects on demecolcine PK/PD. |
| popPK | Lopez_1997 | irrelevant | 0 | 0 | The paper focuses on the effects of antimitotic agents on adrenal receptors and does not report pharmacokinetic parameters for demecolcine. |
| PD | Lopez_1997 | not_relevant | 0 | 0 | The paper studies the effects of antimitotic agents on adrenal nicotinic receptors and does not mention demecolcine or report any pharmacodynamic or exposure-response data for it. |
| popPK | Scanlon_2004 | irrelevant | 0 | 0 | The paper is a mechanistic study on microsporidia infection where demecolcine is used only as a microtubule-disrupting agent, with no pharmacokinetic parameters reported. |
| PD | Scanlon_2004 | not_relevant | 0 | 0 | The paper discusses the structural relationship between mitochondria and the parasitophorous vacuole; demecolcine is mentioned only as a qualitative control for microtubule disruption, with no exposure-response or dose-response analysis or numeric PD parameters reported. |
| popPK | Starling_1983 | irrelevant | 0 | 0 | This is an in vitro mechanistic study investigating the effect of demecolcine on pinocytosis, not a pharmacokinetic study reporting disposition parameters. |
| PD | Starling_1983 | not_relevant | 2 | 1 | The text provides only qualitative comparisons of potency and mentions a delay in inhibition, but does not report specific numeric concentrations, IC50 values, or dose-response curves for demecolcine. |
| popPK | Urata_1985 | irrelevant | 0 | 0 | no_text gate: only 163 chars of text extracted (&lt; 400) |
| PD | Urata_1985 | not_relevant | 0 | 0 | The paper studies rat basophilic leukemia cells and does not mention demecolcine or report any pharmacodynamic parameters for it. |
| popPK | Yamaki_1982 | irrelevant | 0 | 0 | The paper studies the effects of geldanamycin on DNA synthesis in cell cultures and does not involve demecolcine or pharmacokinetic parameters. |
| PD | Yamaki_1982 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of geldanamycin (GDM), not demecolcine (which is only used as a synchronization agent). |
| popPK | Zeebul_2024 | irrelevant | 0 | 0 | The study is an in-vitro anticancer activity and molecular docking analysis where demecolcine is identified as a component of a plant extract, not a pharmacokinetic study. |
| PD | Zeebul_2024 | not_relevant | 2 | 1 | The paper reports IC50 values for a plant extract, not for demecolcine, and only provides a qualitative docking score for demecolcine without any concentration-effect data or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
