<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;zafirlukast&quot;}]"></div>

# zafirlukast

- **generic name:** zafirlukast
- **ATC codes:** `R03DC01`
- **DrugBank:** [DB00549](https://go.drugbank.com/drugs/DB00549) · **PubChem:** [CID 5717](https://pubchem.ncbi.nlm.nih.gov/compound/5717)
- **molar mass:** 575.675 g/mol (C31H33N3O6S) — DrugBank
- **groups:** approved, investigational

## About

Zafirlukast is a leukotriene receptor antagonist used to treat asthma. It is an approved medicine, though not authorised in the European Union, and is used as a systemic treatment for obstructive airway disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q928378](https://www.wikidata.org/wiki/Q928378) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Göbel_2019_CBP_recruitment](drugs/drug_zafirlukast/pd_G_bel_2019_CBP_recruitment.md) | PPARγ cofactor recruitment (CBP) ← zafirlukast · direct sigmoid Emax (Hill) effect | — | Göbel T et al., Zafirlukast Is a Dual Modulator of Huma…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00263](https://doi.org/10.3389/fphar.2019.00263) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Göbel_2019_sEH_HEP_G2](drugs/drug_zafirlukast/pd_G_bel_2019_sEH_HEP_G2.md) | Soluble epoxide hydrolase (sEH) activity (HEP-G2 lysates) ← zafirlukast · direct sigmoid Emax (Hill) effect | — | Göbel T et al., Zafirlukast Is a Dual Modulator of Huma…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00263](https://doi.org/10.3389/fphar.2019.00263) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Göbel_2019_sEH_rec](drugs/drug_zafirlukast/pd_G_bel_2019_sEH_rec.md) | Soluble epoxide hydrolase (sEH) activity (recombinant) ← zafirlukast · direct sigmoid Emax (Hill) effect | — | Göbel T et al., Zafirlukast Is a Dual Modulator of Huma…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00263](https://doi.org/10.3389/fphar.2019.00263) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Göbel_2019_PPAR](drugs/drug_zafirlukast/pd_G_bel_2019_PPAR.md) | PPARγ reporter gene activity ← zafirlukast · direct sigmoid Emax (Hill) effect | — | Göbel T et al., Zafirlukast Is a Dual Modulator of Huma…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00263](https://doi.org/10.3389/fphar.2019.00263) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=zafirlukast).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCG2` target | DrugBank actor |
| distribution | blood-brain barrier | `ABCG2` target | DrugBank actor |
| distribution | mammary gland | `ABCG2` target | DrugBank actor |
| distribution | testis | `ABCG2` target | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `SLC10A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCG2` target | DrugBank actor |

<sub>Actors without a tissue in the table: CYSLTR1 (target), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:23 | 0:21 | 0/0/0 | 1/0/0 | 0/0/0 | 52,231/2,146 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fischer_2000.pdf` | Fischer JD et al., Comparison of zafirlukast (Accolate) ab…, Pharmaceutical research (2000) | popPK | 8 | [10.1023/a:1007509112383](https://doi.org/10.1023/a:1007509112383) | [10751029](https://pubmed.ncbi.nlm.nih.gov/10751029) | The study provides specific PK parameters (AUC, Cmax, tmax, relative ratios) and describes a two-compartment model for zafirlukast in humans, though absolute values for Clearance, Volume, and specific Ka rates are not explicitly listed in the text. |
| `Dekhuijzen_2002.pdf` | Dekhuijzen PN et al., Pharmacokinetic profile of zafirlukast, Clinical pharmacokinetics (2002) | popPK | 5 | [10.2165/00003088-200241020-00003](https://doi.org/10.2165/00003088-200241020-00003) | [11888331](https://pubmed.ncbi.nlm.nih.gov/11888331) | The text is a general review describing the pharmacokinetic profile qualitatively (half-life, two-compartment model) but provides no specific numeric values for clearance (CL), volume (V), or clearance (Q) in the provided evidence. |

<sub>queue written 2026-10-07 22:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biagioli_2020 | irrelevant | 0 | 0 | The study investigates the off-target interaction of the drug REV5901 with the GPBAR1 receptor, mentioning zafirlukast only as a comparative CysLT1R antagonist without providing any pharmacokinetic data for it. |
| popPK | Dekhuijzen_2002 | irrelevant | 5 | 0 | The text is a general review describing the pharmacokinetic profile qualitatively (half-life, two-compartment model) but provides no specific numeric values for clearance (CL), volume (V), or clearance (Q) in the provided evidence. |
| popPK | Göbel_2019 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating the polypharmacological effects of zafirlukast on sEH and PPARγ, containing no pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Liu_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor antagonism and mucus secretion in guinea pigs, reporting no pharmacokinetic parameters such as clearance or volume for zafirlukast. |
| popPK | Ruiz_2020 | irrelevant | 0 | 0 | The paper is an in-vitro virology study on HCV replication where zafirlukast is used as a mechanistic probe to reverse the effect of MK-571, reporting no pharmacokinetic parameters for zafirlukast. |
| popPK | Sarau_1999 | irrelevant | 0 | 0 | This is a receptor pharmacology study in vitro (HEK-293 cells) characterizing ligand binding and calcium mobilization, not a pharmacokinetic study of zafirlukast. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzafirlukast%5D&body=Drug%3A%20zafirlukast%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zafirlukast/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
