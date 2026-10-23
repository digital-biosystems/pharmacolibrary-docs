<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;etilefrine&quot;}]"></div>

# etilefrine

- **generic name:** etilefrine
- **ATC codes:** `C01CA01`
- **DrugBank:** [DB08985](https://go.drugbank.com/drugs/DB08985) · **PubChem:** [CID 3306](https://pubchem.ncbi.nlm.nih.gov/compound/3306)
- **molar mass:** 181.2316 g/mol (C10H15NO2) — DrugBank
- **groups:** approved, withdrawn

## About

Etilefrine is a sympathomimetic drug that acts on alpha- and beta-1 adrenergic receptors and was used as a cardiotonic and vasoconstrictor, mainly to raise blood pressure in low blood pressure conditions. It has been approved in some countries but is listed as withdrawn, so it is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417873](https://www.wikidata.org/wiki/Q417873) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| etilefrine | parent | 181.232 | C10H15NO2 | DrugBank | [3306](https://pubchem.ncbi.nlm.nih.gov/compound/3306) | Hengstmann_1975 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Hengstmann_1975_reference](drugs/drug_etilefrine/Etilefrine_Hengstmann1975_reference.md) | — | 1-compartment (no model) | 3 | Hengstmann JH et al., The physiological disposition of etilef…, European journal of clinica… (1975) | [10.1007/BF00614015](https://doi.org/10.1007/BF00614015) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 19:56 | 2:38 | 0/1/0 | 0/0/0 | 0/0/0 | 65,137/3,707 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 5  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hengstmann_1975.pdf` | Hengstmann JH et al., The physiological disposition of etilef…, European journal of clinica… (1975) | popPK | 10 | [10.1007/BF00614015](https://doi.org/10.1007/BF00614015) | [9300](https://pubmed.ncbi.nlm.nih.gov/9300) | The abstract explicitly reports quantitative PK parameters including bioavailability (0.55), volume of distribution (160 L), and half-life (2 hours) for etilefrine in humans. |

<sub>queue written 2026-10-09T19:54:39.635752+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Badr_2017 | not_relevant | 0 | 0 | The paper describes a spectrofluorimetric analytical method for quantifying drug concentration in formulations, not a pharmacodynamic or exposure-response relationship. |
| PD | Bakry_1995 | not_relevant | 0 | 0 | The paper describes a spectrophotometric analytical method for quantifying etilefrine, not a pharmacodynamic or exposure-response study. |
| PD | Coleman_1975 | not_relevant | 3 | 2 | The text provides only qualitative descriptions of dose-dependent effects (e.g., PVR falls at 1-8 mg, rises at higher doses) without reporting specific numeric PD parameters (Emax, EC50) or quantitative concentration-effect curves. |
| PD | Hassen_2022 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (bioavailability comparison) and in vitro dissolution/texture data; it does not measure any pharmacodynamic effect or report exposure-response/dose-response relationships. |
| PD | McTavish_1989 | not_relevant | 0 | 0 | The text is a review of midodrine and only qualitatively mentions etilefrine as a comparator without providing any numeric PD parameters or exposure-response data for etilefrine. |
| PD | Onishi_2018 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic absorption and bioavailability after buccal administration, reporting no pharmacodynamic effects or exposure-response relationships. |
| PD | Onishi_2021 | not_relevant | 0 | 0 | The paper focuses on the formulation and pharmacokinetics (plasma concentration-time profile) of etilefrine films, reporting no pharmacodynamic or exposure-response relationship. |
| PD | Otaif_2023 | not_relevant | 0 | 0 | The paper describes an electrochemical analytical method for detecting etilefrine concentration, not a pharmacodynamic or exposure-response study. |
| PD | Raviele_1999 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial reporting binary outcomes (syncope recurrence) and does not contain any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PD | Sakata_2020 | not_relevant | 0 | 0 | The paper focuses on the formulation and pharmacokinetics (absorption/plasma levels) of etilefrine buccal tablets, but does not report any pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| popPK | Trang_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for plazomicin, not etilefrine (which is only mentioned as a vasopressor used in the study). |
| PGx | Zhang_2019 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of metabolites for future analytical studies and does not report any pharmacogenomic effects on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 09:08 UTC</sub>
