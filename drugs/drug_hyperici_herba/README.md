<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;Hyperici herba&quot;}]"></div>

# Hyperici herba

- **generic name:** Hyperici herba
- **ATC codes:** `N06AX25`
- **DrugBank:** [DB01323](https://go.drugbank.com/drugs/DB01323) · **PubChem:** not captured
- **groups:** approved, investigational, nutraceutical

## About

St John's wort (Hypericum perforatum) flowering tops are used as a herbal antidepressant for mild to moderate depression. It is widely available as an over-the-counter herbal remedy and nutraceutical, and is approved in several countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q158289](https://www.wikidata.org/wiki/Q158289) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hyperforin | metabolite | 536.797 | C35H52O4 | PubChem | [441298](https://pubchem.ncbi.nlm.nih.gov/compound/441298) | Biber_1998 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Biber_1998_reference](drugs/drug_hyperici_herba/HypericiHerba_Biber1998_reference.md) | — | 1-compartment (no model) | 5 | Biber A et al., Oral bioavailability of hyperforin from…, Pharmacopsychiatry 31 Suppl (1998) | [10.1055/s-2007-979344](https://doi.org/10.1055/s-2007-979344) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:13 | 2:07 | 0/0/1 | 0/0/0 | 0/0/0 | 69,071/13,413 | ollama / glm-5.3-flash | 3 | 2/0 | 1/2 | 0 |

## Coverage

- **PubMed hits:** 183 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Biber_1998.pdf` | Biber A et al., Oral bioavailability of hyperforin from…, Pharmacopsychiatry 31 Suppl (1998) | popPK | 8 | [10.1055/s-2007-979344](https://doi.org/10.1055/s-2007-979344) | [9684946](https://pubmed.ncbi.nlm.nih.gov/9684946) | Reports numeric PK parameters (half-life, clearance, Cmax, tmax, MRT) for hyperforin from hypericum extract in both rats and humans, though no full compartmental model parameters (V, Q) are given. |
| `Staffeldt_1994.pdf` | Staffeldt B et al., Pharmacokinetics of hypericin and pseud…, Journal of geriatric psychi… (1994) | popPK | 8 | [10.1177/089198879400700113](https://doi.org/10.1177/089198879400700113) | [7857509](https://pubmed.ncbi.nlm.nih.gov/7857509) | Human PK study of hypericin/pseudohypericin from St. John's wort with numeric half-lives, lag times, Cmax, and AUC reported in the abstract, though no CL/V or compartmental model values. |

<sub>queue written 2026-10-06T23:11:57.798884+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Alahmad_2022 | not_relevant | 0 | 0 | The paper focuses on the chemical identification of constituents and their in vitro antioxidant activities, not on pharmacokinetic or pharmacodynamic modeling in biological systems. |
| popPK | Boyle_2024 | irrelevant | 0 | 0 | A nursing review discussing SJW pharmacokinetics qualitatively with no numeric PK parameters reported. |
| popPK | Cheng_2023 | irrelevant | 0 | 0 | A review of herb-drug interactions with no original PK parameter values for St. John's wort in the evidence. |
| PD | Dimpfel_1997 | not_relevant | 2 | 0 | The paper describes qualitative EEG changes (delta/alpha waves) and trends in discriminant analysis but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) that can be extracted. |
| popPK | Goey_2014 | irrelevant | 0 | 0 | Hyperici herba (St John's wort) is only the co-administered inducer; the PK parameters reported (CL, AUC, half-life) are for docetaxel, not for hyperici herba or its metabolites. |
| popPK | Izzo_2009 | irrelevant | 0 | 0 | This is a review of herbal-drug interactions; St John's wort appears only as a perpetrator affecting other drugs' concentrations, with no PK parameters for hypericin/hyperforin itself. |
| PD | Kladar_2020 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and antioxidant assays for various Hypericum samples, but does not contain any pharmacokinetic (PK) data, exposure-response analysis, or pharmacodynamic (PD) modeling. |
| popPK | Maideen_2021 | irrelevant | 0 | 0 | Review of β-blocker drug interactions; hyperici_herba (St. John's wort) is only mentioned as an interacting herb, no PK parameters for it. |
| popPK | Mohammadinia_2018 | irrelevant | 2 | 1 | Hyperici herba is only a P-gp inducer modulating clearance of Tc-99-sestamibi, not the subject drug; no PK parameters for hyperici herba itself are reported. |
| popPK | Nicolussi_2020 | irrelevant | 1 | 0 | A review of SJW's interactions with OTHER drugs; no PK parameters for hyperici_herba itself and no numeric values present. |
| popPK | Tan_2021 | irrelevant | 0 | 0 | Systematic review of warfarin interactions; St. John's Wort is only a listed interacting supplement with no PK parameters reported. |
| popPK | Wise_2019 | irrelevant | 3 | 2 | In silico prediction of phytochemical Tmax only; no clearance, volume, or compartmental PK parameters for hyperici_herba are reported, and no numeric parameter values beyond a Tmax range appear. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:11 UTC</sub>
