<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03X&quot;,&quot;href&quot;:&quot;atc/C03X.md&quot;},{&quot;label&quot;:&quot;conivaptan&quot;}]"></div>

# conivaptan

- **generic name:** conivaptan
- **ATC codes:** `C03XA02`
- **DrugBank:** [DB00872](https://go.drugbank.com/drugs/DB00872) · **PubChem:** [CID 151171](https://pubchem.ncbi.nlm.nih.gov/compound/151171)
- **molar mass:** 498.5744 g/mol (C32H26N4O2) — DrugBank
- **groups:** approved

## About

Conivaptan is a vasopressin antagonist used to treat hyponatremia (low blood sodium). It is given by infusion and restricted to hospital use, mainly in the United States; it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5161126](https://www.wikidata.org/wiki/Q5161126) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=conivaptan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: AVPR1A (target), AVPR2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:23 | 1:19 | 0/0/0 | 0/0/0 | 0/0/0 | 38,454/1,456 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mao_2009.pdf` | Mao ZL et al., Pharmacokinetics of conivaptan hydrochl…, Clinical therapeutics (2009) | popPK | 10 | [10.1016/j.clinthera.2009.07.011](https://doi.org/10.1016/j.clinthera.2009.07.011) | [19695403](https://pubmed.ncbi.nlm.nih.gov/19695403) | The study reports quantitative pharmacokinetic parameters (clearance, half-life, AUC) for conivaptan in humans, with specific numeric values provided in the results text. |
| `Roy_2013.pdf` | Roy MJ et al., Pharmacokinetics of intravenous conivap…, Clinical pharmacokinetics (2013) | popPK | 8 | [10.1007/s40262-013-0047-8](https://doi.org/10.1007/s40262-013-0047-8) | [23456393](https://pubmed.ncbi.nlm.nih.gov/23456393) | The study reports PK parameters (AUC, Cmax) for conivaptan in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only relative changes. |
| `Yang_2020.pdf` | Yang CW et al., Repurposing old drugs as antiviral agen…, Biomedical journal (2020) | pd | 4 | [10.1016/j.bj.2020.05.003](https://doi.org/10.1016/j.bj.2020.05.003) | [32563698](https://www.ncbi.nlm.nih.gov/pubmed/32563698) | metadata signals extractable PD data (EC50) |
| `Lica-Miler_2026.pdf` | Lica-Miler M et al., Vaptans: A Narrative Review of Pharmaco…, Cells (2026) | pgx | 8 | [10.3390/cells15151388](https://doi.org/10.3390/cells15151388) | [42587799](https://www.ncbi.nlm.nih.gov/pubmed/42587799) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Ali_2007.pdf` | Ali F et al., Conivaptan: a dual vasopressin receptor…, Cardiovascular drug reviews (2007) | pgx | 7 | [10.1111/j.1527-3466.2007.00019.x](https://doi.org/10.1111/j.1527-3466.2007.00019.x) | [17919259](https://www.ncbi.nlm.nih.gov/pubmed/17919259) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T19:22:54.545977+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alhussieni_2026 | irrelevant | 0 | 0 | The paper is an in silico/in vitro study on RIOK3 inhibitors where conivaptan is only a repurposed candidate, and no quantitative PK parameters for conivaptan are reported. |
| popPK | Ali_2007 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PGx | Ali_2007 | not_relevant | 0 | 0 | The paper is a general review of conivaptan's mechanism and clinical profile, not a pharmacogenomic study reporting genotype-specific PK/PD changes. |
| popPK | Alrabiah_2018 | irrelevant | 2 | 5 | The study is an in-vitro metabolic stability assay using rat liver microsomes, not a pharmacokinetic study reporting in-vivo disposition parameters (CL, V, Q, ka) or a population PK model for conivaptan. |
| popPK | Ben_2025 | irrelevant | 0 | 0 | The paper is a computational virtual screening study for Alzheimer's disease targets and does not report any pharmacokinetic parameters for conivaptan. |
| popPK | Fernández-Varo_2003 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamic effects (aquaresis, hemodynamics) of conivaptan in rats, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2). |
| popPK | García-Arroyo_2017 | irrelevant | 0 | 0 | The study investigates the renal protective effects of conivaptan in rats but does not report any pharmacokinetic parameters (clearance, volume, half-life) for the drug itself. |
| popPK | Goldsmith_2011 | irrelevant | 0 | 0 | The study focuses on renal and hemodynamic effects (diuresis, GFR, blood pressure) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Golestaneh_2004 | irrelevant | 0 | 0 | The text is a narrative review discussing the mechanism and clinical context of vasopressin antagonists without reporting any quantitative pharmacokinetic parameters for conivaptan. |
| PD | Golestaneh_2004 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism of action and clinical context of vaptans without providing any numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Human_2012 | irrelevant | 0 | 0 | The study reports clinical efficacy (serum sodium response) rather than pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Lica-Miler_2026 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Moen_2008 | irrelevant | 0 | 0 | The text describes clinical efficacy and safety outcomes (serum sodium, water clearance) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Palmer_2016 | irrelevant | 2 | 0 | The study mentions pharmacokinetics were measured but provides no quantitative PK parameter values (CL, V, t1/2) in the evidence, only stating they were similar to previous reports. |
| popPK | Rianthavorn_2008 | irrelevant | 0 | 0 | This is a clinical case report describing the therapeutic use of conivaptan for SIADH, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Roy_2013 | relevant | 8 | 2 | The study reports PK parameters (AUC, Cmax) for conivaptan in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only relative changes. |
| popPK | Singh_2024 | irrelevant | 0 | 0 | The paper is an in-silico molecular docking study for neuroglioma where conivaptan is a screened ligand, not a pharmacokinetic study reporting disposition parameters. |
| PD | Singh_2024 | not_relevant | 0 | 0 | The paper is an in silico study (molecular docking and simulation) for drug repurposing and does not report any in vivo or in vitro pharmacodynamic data, exposure-response relationships, or numeric PD parameters for conivaptan. |
| popPK | Vidic_2019 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy (urine output, sodium) of vaptans in heart failure, not a pharmacokinetic study reporting disposition parameters for conivaptan. |
| popPK | Walter_2007 | irrelevant | 2 | 0 | The paper is a review article that discusses pharmacokinetics qualitatively but does not provide specific quantitative parameter values (CL, V, etc.) in the provided text. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study focuses on the cholesterol-lowering mechanism of DHCR24 inhibitors, with conivaptan serving only as a candidate compound in a virtual screen and biological assay, reporting no pharmacokinetic parameters. |
| PD | Wang_2023 | not_relevant | 0 | 0 | The paper reports an IC50 for irbesartan, but conivaptan is only mentioned as a candidate with qualitative activity; no numeric PD parameters or exposure-response relationship are provided for conivaptan. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Yang_2020 | not_relevant | 0 | 0 | The provided text is a title of a review article regarding drug repurposing for coronaviruses and contains no specific data, models, or numeric parameters for conivaptan. |
| popPK | Yatsu_1999 | irrelevant | 1 | 0 | The study reports hemodynamic and renal effects (pharmacodynamics) in dogs but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Zeltser_2010 | irrelevant | 0 | 0 | The paper is a clinical review discussing efficacy and safety, containing no quantitative pharmacokinetic parameters or models for conivaptan. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
