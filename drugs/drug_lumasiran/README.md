<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;lumasiran&quot;}]"></div>

# lumasiran

- **generic name:** lumasiran
- **ATC codes:** `A16AX18`
- **DrugBank:** [DB15935](https://go.drugbank.com/drugs/DB15935) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Lumasiran, a small interfering RNA medicine, is used to treat primary hyperoxaluria. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q100692768](https://www.wikidata.org/wiki/Q100692768) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:26 | 1:08 | 0/1/0 | 0/0/0 | 0/0/0 | 97,210/3,922 | einfracz / qwen3.8-27b | 5 | 0/7 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sten_2023_reference](drugs/drug_lumasiran/Lumasiran_Sten2023_reference.md) | — | 1-compartment (no model) | 0 | Sten S et al., Plasma Pharmacokinetics of N-Acetylgala…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01314-7](https://doi.org/10.1007/s40262-023-01314-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lumasiran).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Hydroxyacid oxidase 1 mRNA (antisense oligonucleotide).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 23 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `McDougall_2022.pdf` | McDougall R et al., The Nonclinical Disposition and Pharmac…, Drug metabolism and disposi… (2022) | popPK | 5 | [10.1124/dmd.121.000428](https://doi.org/10.1124/dmd.121.000428) | [34154993](https://pubmed.ncbi.nlm.nih.gov/34154993) | The paper is a narrative review discussing GalNAc-siRNA properties generally and does not provide specific quantitative PK parameter values for lumasiran in the evidence. |

<sub>queue written 2026-10-15T03:25:26.230570+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abosalha_2022 | irrelevant | 0 | 0 | The paper is a general review of siRNA therapeutics and does not report specific quantitative pharmacokinetic parameters for lumasiran. |
| PD | Abosalha_2022 | not_relevant | 1 | 0 | The text is a general review of siRNA therapeutics and does not contain specific numeric PD parameters or exposure-response data for lumasiran. |
| popPK | An_2024 | irrelevant | 2 | 0 | The paper is a review article summarizing PK/PD of GalNAc-conjugated siRNAs and does not report original quantitative disposition parameters for lumasiran. |
| PD | An_2024 | not_relevant | 2 | 1 | The text is an abstract for a review article that discusses PK/PD concepts generally but does not present specific numeric PD parameters or extractable exposure-response data for lumasiran. |
| popPK | Batra_2026 | irrelevant | 0 | 0 | The paper studies the efficacy of PD-L1 siRNA in cancer cells and does not involve lumasiran or any pharmacokinetic parameters. |
| PD | Batra_2026 | not_relevant | 0 | 0 | The paper studies a different drug (BioRNA/PD-L1-siRNA) and does not report any pharmacodynamic or exposure-response data for lumasiran. |
| popPK | Cronin_2025 | irrelevant | 1 | 0 | The paper is a review of oligonucleotide drugs and mentions lumasiran only as an approved siRNA in a list, without providing any specific quantitative pharmacokinetic parameters for it. |
| PD | Cronin_2025 | not_relevant | 1 | 0 | The paper is a review discussing the challenges of evaluating drug-drug interactions for RNA therapeutics and does not report specific numeric PD parameters or exposure-response models for lumasiran. |
| popPK | Fan_2026 | irrelevant | 3 | 2 | The paper is a computational platform study where lumasiran is used only for external validation; the specific PK parameters for lumasiran are listed in Table S1, which is not provided in the evidence. |
| PD | Fan_2026 | not_relevant | 0 | 0 | The paper describes a computational platform for GalNAc-siRNA development and does not report specific pharmacodynamic or exposure-response data for lumasiran. |
| popPK | Fontana_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics/pharmacodynamics of vutrisiran, not lumasiran, which is only mentioned as a comparable agent. |
| popPK | Frishberg_2021 | irrelevant | 2 | 0 | The abstract describes a clinical trial evaluating safety and pharmacodynamics (urinary oxalate) but does not report quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for lumasiran in the provided text. |
| PD | Frishberg_2021 | not_relevant | 3 | 2 | The abstract reports qualitative target engagement (glycolate increase) and a mean maximal reduction in urinary oxalate (75%), but does not provide numeric PD parameters (Emax, EC50) or a concentration-effect curve. |
| popPK | George_2026 | irrelevant | 0 | 0 | The paper discusses siRNA therapy for ovarian cancer and contains no information on lumasiran or its pharmacokinetics. |
| PD | George_2026 | not_relevant | 0 | 0 | The paper studies a novel siRNA (siFXR1-LNA) for ovarian cancer, not the drug lumasiran, and does not report any pharmacodynamic or exposure-response parameters for lumasiran. |
| PGx | Gupta_2022 | not_relevant | 0 | 0 | The paper discusses general treatment options for primary hyperoxaluria type 1 and mentions pyridoxine response to specific genotypes, but it does not report pharmacogenomic effects on the PK or PD of lumasiran. |
| popPK | Jeon_2022 | irrelevant | 2 | 0 | This is a minireview summarizing PK/PD modeling approaches for siRNA therapeutics (including lumasiran) and does not report original quantitative disposition parameter values for lumasiran. |
| PD | Jeon_2022 | not_relevant | 2 | 0 | The text is a minireview abstract that discusses the general state of PK/PD modeling for siRNAs but does not present specific numeric PD parameters or extractable exposure-response data for lumasiran. |
| popPK | Loganathan_2023 | irrelevant | 0 | 0 | The paper is a review on non-coding RNAs and contains no pharmacokinetic data for lumasiran. |
| PD | Loganathan_2023 | not_relevant | 0 | 0 | The paper is a general review of non-coding RNAs as biomarkers and therapeutic targets and does not contain any pharmacokinetic or pharmacodynamic data for lumasiran. |
| popPK | McDougall_2022 | irrelevant | 5 | 0 | The paper is a narrative review discussing GalNAc-siRNA properties generally and does not provide specific quantitative PK parameter values for lumasiran in the evidence. |
| PD | McDougall_2022 | not_relevant | 2 | 0 | The text is a minireview summarizing nonclinical ADME and PK/PD translation principles for GalNAc-siRNAs generally, without providing specific numeric PD parameters or extractable concentration-effect curves for lumasiran. |
| popPK | Michael_2023 | irrelevant | 2 | 0 | The paper reports pharmacodynamic outcomes (plasma oxalate reduction) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for lumasiran. |
| PD | Michael_2023 | not_relevant | 2 | 1 | The paper reports clinical efficacy outcomes (percent change in plasma oxalate) but does not provide a concentration-effect or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) or a PK/PD model fit. |
| popPK | Ranasinghe_2023 | irrelevant | 0 | 0 | The paper is a general introductory review of siRNA technology and does not report specific quantitative pharmacokinetic parameters for lumasiran. |
| PD | Ranasinghe_2023 | not_relevant | 1 | 0 | The text is a general introductory review of siRNA technology and mentions lumasiran only as a licensed example without providing specific pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| PGx | Soncin_2026 | not_relevant | 0 | 0 | The paper reports an association (or lack thereof) between underlying disease genotypes and clinical efficacy endpoints, not a pharmacokinetic or pharmacodynamic change in lumasiran's own handling or mechanism driven by a drug-metabolizing gene. |
| PD | Sten_2023 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of GalNAc-siRNAs, including dose-proportionality and compartmental models, but does not report any pharmacodynamic (PD) or exposure-response relationships for lumasiran. |
| popPK | Yue_2019 | irrelevant | 0 | 0 | This is a review article on substrate reduction therapy for inborn errors of metabolism and does not contain any specific pharmacokinetic data for lumasiran. |
| PD | Yue_2019 | not_relevant | 0 | 0 | The text is a general review of substrate reduction therapy for inborn errors of metabolism and does not contain specific data, models, or numeric PD parameters for lumasiran. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for nedosiran, not lumasiran. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper reports PK/PD modeling for nedosiran, not lumasiran. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for nedosiran, not lumasiran, which is only mentioned as background context. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:25 UTC</sub>
