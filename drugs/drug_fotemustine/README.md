<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;fotemustine&quot;}]"></div>

# fotemustine

- **generic name:** fotemustine
- **ATC codes:** `L01AD05`
- **DrugBank:** [DB04106](https://go.drugbank.com/drugs/DB04106) · **PubChem:** [CID 46936889](https://pubchem.ncbi.nlm.nih.gov/compound/46936889)
- **molar mass:** 315.69 g/mol (C9H19ClN3O5P) — DrugBank
- **groups:** investigational

## About

Fotemustine is a nitrosourea alkylating agent with antineoplastic activity, investigated for the treatment of cancer. It is not approved by the European Medicines Agency and remains investigational in major databases, so its use is limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1439555](https://www.wikidata.org/wiki/Q1439555) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fotemustine | parent | 315.69 | C9H19ClN3O5P | DrugBank | [46936889](https://pubchem.ncbi.nlm.nih.gov/compound/46936889) | Hartmann_1997 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.1316 | L/h | 2.193 ml/min | adults with liver metastases from colorectal carcinoma | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hartmann_1997_reference](drugs/drug_fotemustine/Fotemustine_Hartmann1997_reference.md) |
| t½ | t1/2z | 0.43 | h | 25.8 min | adults with liver metastases from colorectal carcinoma | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hartmann_1997_reference](drugs/drug_fotemustine/Fotemustine_Hartmann1997_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Hartmann_1997_reference](drugs/drug_fotemustine/Fotemustine_Hartmann1997_reference.md) | — | 1-compartment (no model) | 2 | Hartmann J et al., Hepatic arterial infusion of the nitros…, Oncology reports (1997) | [10.3892/or.4.1.167](https://doi.org/10.3892/or.4.1.167) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:10 | 4:15 | 0/0/1 | 0/0/0 | 0/0/0 | 107,720/6,400 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 39 matched, 34 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hartmann_1997.pdf` | Hartmann J et al., Hepatic arterial infusion of the nitros…, Oncology reports (1997) | popPK | 10 | [10.3892/or.4.1.167](https://doi.org/10.3892/or.4.1.167) | [21590035](https://pubmed.ncbi.nlm.nih.gov/21590035) | The abstract reports quantitative pharmacokinetic parameters for fotemustine, including half-life and clearance, in a human clinical trial. |
| `Iliadis_1996.pdf` | Iliadis A et al., Pharmacokinetics and pharmacodynamics o…, European journal of cancer… (1996) | popPK | 10 | [10.1016/0959-8049(95)00565-x](https://doi.org/10.1016/0959-8049(95)00565-x) | [8814692](https://pubmed.ncbi.nlm.nih.gov/8814692) | The study reports pharmacokinetic parameters for fotemustine, with clearance values provided in the abstract, though volume and other specific compartmental parameters are not detailed in the provided text. |

<sub>queue written 2026-10-07T17:09:07.399064+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Addeo_2011 | not_relevant | 0 | 0 | The paper is a clinical phase II trial reporting efficacy (response rates, PFS) and safety, but it does not contain any pharmacokinetic data, exposure-response analysis, or numeric PD parameters. |
| PD | Binder_1992 | not_relevant | 0 | 0 | The paper reports only clinical response rates and toxicity in a small cohort without any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PD | Comella_1997 | not_relevant | 0 | 0 | The paper reports clinical efficacy and toxicity outcomes for a fixed-dose combination regimen but contains no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PD | Dine_1998 | not_relevant | 0 | 0 | The paper is a chemical stability and compatibility study of fotemustine in solution, reporting no pharmacodynamic or exposure-response data. |
| popPK | Etinosa_2026 | irrelevant | 0 | 0 | The paper is a review on functional biomaterials for cancer drug delivery and does not contain any pharmacokinetic data or specific parameters for fotemustine. |
| PD | Fabi_2009 | not_relevant | 3 | 2 | The paper reports a clinical dose-response comparison (response rates across three dose groups) but lacks pharmacokinetic data, concentration-effect modeling, or formal PD parameters (Emax, EC50), making it a clinical efficacy study rather than a pharmacodynamic analysis. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The paper is a review of ML-enhanced PBPK models for nanocarriers and does not contain any pharmacokinetic data or parameters for fotemustine. |
| popPK | Huitema_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of thioTEPA and its metabolite TEPA, not fotemustine. |
| PD | Lee_1993_2 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response relationship for dacarbazine (response rates at 3 dose levels) but provides no numeric PD parameters (e.g., Emax, EC50) or concentration-effect data for fotemustine. |
| PD | McBain_2021 | not_relevant | 0 | 0 | The paper is a network meta-analysis of clinical outcomes (OS/PFS) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for fotemustine. |
| popPK | Poddar_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of DI-87, a novel dCK inhibitor, in mice, and does not report data for fotemustine. |
| PD | Silvani_2008 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (PFS, OS, response rates) for a fixed-dose regimen but contains no pharmacokinetic data, exposure-response analysis, or numeric PD parameters. |
| PGx | Sinha_2003 | not_relevant | 0 | 0 | The study investigates proteomic changes in cell lines associated with chemoresistance to fotemustine and other drugs, but does not report pharmacogenomic associations affecting PK or PD parameters in humans. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper describes the discovery and pharmacological evaluation of novel mu-opioid receptor agonists, not the pharmacokinetics of fotemustine. |
| popPK | Watkins_2024 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of a small molecule MST1/2 inhibitor (mCLC846), not fotemustine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 17:09 UTC</sub>
