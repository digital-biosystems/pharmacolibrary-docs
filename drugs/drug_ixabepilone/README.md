<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;ixabepilone&quot;}]"></div>

# ixabepilone

- **generic name:** ixabepilone
- **ATC codes:** `L01DC04`
- **DrugBank:** [DB04845](https://go.drugbank.com/drugs/DB04845) · **PubChem:** [CID 6445540](https://pubchem.ncbi.nlm.nih.gov/compound/6445540)
- **molar mass:** 506.7 g/mol (C27H42N2O5S) — DrugBank
- **groups:** approved, investigational

## About

Ixabepilone is a cancer medicine used to treat certain forms of advanced breast cancer. It is approved in the United States, where it is used in specialised oncology care, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q11711607](https://www.wikidata.org/wiki/Q11711607) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Mani_2007_MBF](drugs/drug_ixabepilone/pd_Mani_2007_MBF.md) | percentage of PBMCs with MBF ← ixabepilone · direct sigmoid Emax (Hill) effect | — | Mani S et al., Peripheral blood mononuclear and tumor…, Annals of oncology : offici… (2007) | [10.1093/annonc/mdl315](https://doi.org/10.1093/annonc/mdl315) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Mehrotra_2017_CIPN](drugs/drug_ixabepilone/pd_Mehrotra_2017_CIPN.md) | CIPN ← ixabepilone · model not identified | — | Mehrotra S et al., Kinetic-Pharmacodynamic Model of Chemot…, The AAPS journal (2017) | [10.1208/s12248-017-0101-9](https://doi.org/10.1208/s12248-017-0101-9) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Goel_2008_microtubule_bundle_formation_in_peripheral_blood_mononuclear_cells](drugs/drug_ixabepilone/pd_Goel_2008_microtubule_bundle_formation_in_peripheral_blood_m.md) | microtubule bundle formation in peripheral blood mononuclear cells ← ixabepilone · direct sigmoid Emax (Hill) effect | — | Goel S et al., The effect of ketoconazole on the pharm…, Clinical cancer research :… (2008) | [10.1158/1078-0432.CCR-07-4151](https://doi.org/10.1158/1078-0432.CCR-07-4151) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ixabepilone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TUBB3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:15 | 5:02 | 0/0/0 | 2/1/0 | 0/0/0 | 24,492/7,746 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yardley_2009.pdf` | Yardley DA, Proactive management of adverse events…, The oncologist (2009) | pgx | 7 | [10.1634/theoncologist.2008-0284](https://doi.org/10.1634/theoncologist.2008-0284) | [19411315](https://www.ncbi.nlm.nih.gov/pubmed/19411315) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T18:14:14.183419+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Fountzilas_2013 | not_relevant | 0 | 0 | Genetic markers were assessed for association with response and toxicity, but none was associated with these outcomes; no ixabepilone pharmacokinetic or pharmacodynamic parameter was reported. |
| PGx | Genovesi_2021 | not_relevant | 0 | 0 | The paper evaluates ixabepilone’s antitumour activity in medulloblastoma models but does not report a gene-related change in an ixabepilone pharmacokinetic or pharmacodynamic parameter. |
| popPK | Goel_2008 | irrelevant | 3 | 2 | The human interaction study reports a 79% AUC increase but no quantitative clearance, volume, or compartmental/population-PK parameters. |
| PGx | Goel_2008 | not_relevant | 0 | 0 | Ketoconazole drug interaction effects are reported, but no gene variant, genotype, or phenotype effect on ixabepilone PK or PD is assessed. |
| popPK | Jain_2026 | irrelevant | 0 | 0 | This study predicts drug-combination synergy and reports no ixabepilone pharmacokinetic parameters. |
| PGx | Lee_2008 | not_relevant | 0 | 0 | The text mentions MDR1 expression and tubulin mutations in relation to antitumor activity, but reports no pharmacogenomic effect on an ixabepilone PK or PD parameter. |
| PGx | Lee_2016 | not_relevant | 1 | 1 | Reports associations between pathway mutations and ixabepilone activity in cell lines, not effects on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Mani_2007 | irrelevant | 1 | 0 | The study reports a pharmacodynamic EC50 but no quantitative ixabepilone disposition parameters. |
| popPK | Mehrotra_2017 | irrelevant | 1 | 0 | The study models dose-related neuropathy, not ixabepilone disposition, and reports no quantitative PK parameters. |
| PGx | Nobili_2012 | not_relevant | 0 | 0 | The review discusses P-glycoprotein-mediated tumor drug resistance but does not report a gene variant, genotype, or phenotype effect on an ixabepilone PK or PD parameter. |
| popPK | Peterson_2005 | irrelevant | 3 | 4 | Numeric Cmax, half-life, and AUC are reported, but no qualifying disposition parameters or quantitative compartmental model are provided. |
| PGx | Rashkin_2019 | not_relevant | 0 | 0 | The study predicts progression-free survival from genetic data but does not report a genotype effect on an ixabepilone pharmacokinetic or pharmacodynamic parameter. |
| popPK | Vishnu_2012 | irrelevant | 0 | 0 | This is an in-vitro antitumor mechanism study and reports no ixabepilone disposition parameters. |
| PGx | Yardley_2009 | not_relevant | 0 | 0 | The paper addresses adverse-event management and reports no genotype- or phenotype-associated ixabepilone PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
