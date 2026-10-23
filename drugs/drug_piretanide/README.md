<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;piretanide&quot;}]"></div>

# piretanide

- **generic name:** piretanide
- **ATC codes:** `C03CA03`
- **DrugBank:** [DB02925](https://go.drugbank.com/drugs/DB02925) · **PubChem:** [CID 4849](https://pubchem.ncbi.nlm.nih.gov/compound/4849)
- **molar mass:** 362.4 g/mol (C17H18N2O5S) — DrugBank
- **groups:** approved

## About

Piretanide is a loop (high-ceiling) diuretic used to treat conditions involving fluid retention, such as oedema and hypertension. It is an approved medicine, though it is not widely used and is not authorised across the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3905617](https://www.wikidata.org/wiki/Q3905617) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| piretanide | parent | 362.4 | C17H18N2O5S | DrugBank | [4849](https://pubchem.ncbi.nlm.nih.gov/compound/4849) | Marone_1984, Trenk_1987 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 13.14 | L/h | 219 ml/min | healthy male volunteers | &gt;=10 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Trenk_1987_reference](drugs/drug_piretanide/Piretanide_Trenk1987_reference.md) |
| t½ | t1/2z | 1.29 | h | 1.29 h | healthy male volunteers | &gt;=10 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Trenk_1987_reference](drugs/drug_piretanide/Piretanide_Trenk1987_reference.md) |
| F | Fab | 0.88 |  | 0.88 | healthy male volunteers | &gt;=10 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Trenk_1987_reference](drugs/drug_piretanide/Piretanide_Trenk1987_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Trenk_1987_reference](drugs/drug_piretanide/Piretanide_Trenk1987_reference.md) | — | 1-compartment (no model) | 5 | Trenk D et al., Pharmacokinetics and bioavailability of…, Arzneimittel-Forschung (1987) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Marone_1984_reference](drugs/drug_piretanide/Piretanide_Marone1984_reference.md) | — | 1-compartment (no model) | 1 | Marone C et al., Pharmacokinetics of high doses of piret…, European journal of clinica… (1984) | [10.1007/BF00556897](https://doi.org/10.1007/BF00556897) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Marone_1989_diuresis](drugs/drug_piretanide/pd_Marone_1989_diuresis.md) | diuresis ← urinary piretanide excretion · direct Emax (saturable) effect | — | Marone C et al., Efficacy and pharmacokinetics of pireta…, European journal of clinica… (1989) | [10.1111/j.1365-2362.1989.tb00245.x](https://doi.org/10.1111/j.1365-2362.1989.tb00245.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=piretanide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SLC12A1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:36 | 6:30 | 1/1/0 | 1/0/0 | 0/0/0 | 51,058/10,451 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/0 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 64 matched, 48 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marone_1984.pdf` | Marone C et al., Pharmacokinetics of high doses of piret…, European journal of clinica… (1984) | popPK | 10 | [10.1007/BF00556897](https://doi.org/10.1007/BF00556897) | [6519164](https://pubmed.ncbi.nlm.nih.gov/6519164) | The study reports quantitative pharmacokinetic parameters (alpha, beta, half-lives) for piretanide in humans, with specific numeric ranges provided in the text. |
| `Trenk_1987.pdf` | Trenk D et al., Pharmacokinetics and bioavailability of…, Arzneimittel-Forschung (1987) | popPK | 10 |  | [3449067](https://pubmed.ncbi.nlm.nih.gov/3449067) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for piretanide in humans, with all values explicitly stated in the abstract. |
| `Sjöström_1987.pdf` | Sjöström P et al., Pharmacokinetic-pharmacodynamic relatio…, Scandinavian journal of uro… (1987) | popPK | 9 | [10.3109/00365598709180292](https://doi.org/10.3109/00365598709180292) | [3589526](https://pubmed.ncbi.nlm.nih.gov/3589526) | The study reports quantitative PK parameters (bioavailability, renal clearance, total clearance) for piretanide in humans, though specific values for volume of distribution or half-life are not explicitly listed in the provided text. |
| `Marone_1989.pdf` | Marone C et al., Efficacy and pharmacokinetics of pireta…, European journal of clinica… (1989) | popPK | 8 | [10.1111/j.1365-2362.1989.tb00245.x](https://doi.org/10.1111/j.1365-2362.1989.tb00245.x) | [2506054](https://pubmed.ncbi.nlm.nih.gov/2506054) | The study reports qualitative PK findings (reduced clearance) and pharmacodynamic parameters (Emax, EC50) but lacks specific numeric values for clearance, volume, or half-life in the provided text. |
| `Cox_1988.pdf` | Cox HM et al., The effect of neuropeptide Y and peptid…, The Journal of physiology (1988) | pd | 5 | [10.1113/jphysiol.1988.sp017029](https://doi.org/10.1113/jphysiol.1988.sp017029) | [3392683](https://www.ncbi.nlm.nih.gov/pubmed/3392683) | metadata signals extractable PD data (EC50) |
| `Baird_1989.pdf` | Baird AW et al., Bradykinin stimulates electrogenic bica…, The Journal of pharmacology… (1989) | pd | 4 |  | [2913274](https://www.ncbi.nlm.nih.gov/pubmed/2913274) | metadata signals extractable PD data (EC50) |
| `Barthelmebs_1994.pdf` | Barthelmebs M et al., Vascular effects of loop diuretics: an…, Naunyn-Schmiedeberg's archi… (1994) | pd | 4 | [10.1007/BF00169839](https://doi.org/10.1007/BF00169839) | [8170505](https://www.ncbi.nlm.nih.gov/pubmed/8170505) | metadata signals extractable PD data (EC50) |
| `Xin_2005.pdf` | Xin HW et al., Thiopurine S-methyltransferase as a tar…, European journal of clinica… (2005) | pgx | 7 | [10.1007/s00228-005-0950-5](https://doi.org/10.1007/s00228-005-0950-5) | [15952020](https://www.ncbi.nlm.nih.gov/pubmed/15952020) | metadata signals extractable PGX data (TPMT, PK/PD-context) |

<sub>queue written 2026-10-06 19:33 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aiton_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion transport in cultured cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Baird_1989 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Baird_1989 | not_relevant | 0 | 0 | The paper studies the pharmacology of bradykinin in guinea pig gallbladder, not the pharmacodynamics of piretanide. |
| popPK | Barthelmebs_1994 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Barthelmebs_1994 | not_relevant | 0 | 0 | The paper studies the vascular effects of loop diuretics in rats but does not report specific pharmacodynamic or exposure-response data for piretanide. |
| popPK | Brayden_1988 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment on sweat glands where piretanide is used only as a pharmacological tool to test ion transport mechanisms, not as a subject for PK parameter estimation. |
| PD | Brayden_1988 | not_relevant | 0 | 0 | The paper mentions piretanide only to state that it did not affect SCC responses, providing no numeric dose-response or concentration-effect data for the drug. |
| popPK | Chinery_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion transport where piretanide is used only as a pharmacological inhibitor, with no pharmacokinetic parameters reported. |
| popPK | Cox_1988 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Cox_1988 | not_relevant | 0 | 0 | The paper studies neuropeptide Y and peptide YY in rat intestinal epithelia and does not mention piretanide or report any pharmacodynamic parameters for it. |
| popPK | Cox_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CGRP receptors where piretanide is used only as a pharmacological inhibitor, with no pharmacokinetic parameters reported. |
| PD | Cox_1994 | not_relevant | 0 | 0 | The paper reports CGRP concentration-response data, but piretanide is only mentioned as a qualitative inhibitor at a single fixed concentration (200 microM) without any dose-response curve or numeric PD parameters for piretanide itself. |
| popPK | Eriksson_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of diuretic activity on fish epithelium, reporting EC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Leung_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion transport in PC12 cells where piretanide is used only as a pharmacological inhibitor, not as the subject of pharmacokinetic analysis. |
| popPK | Lu_1987 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding piretanide pharmacokinetics. |
| popPK | Marone_1989 | relevant | 8 | 2 | The study reports qualitative PK findings (reduced clearance) and pharmacodynamic parameters (Emax, EC50) but lacks specific numeric values for clearance, volume, or half-life in the provided text. |
| popPK | McKeen_1995 | irrelevant | 0 | 0 | Piretanide is used only as a pharmacological tool to inhibit ion transport in a somatostatin receptor study, with no PK parameters reported. |
| PD | McKeen_1995 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for somatostatin receptor ligands, not for piretanide, which is only mentioned as a tool to characterize the mechanism of action. |
| popPK | Vigne_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Na-K-Cl cotransporter properties using piretanide as a pharmacological inhibitor, not a pharmacokinetic study. |
| PGx | Xin_2005 | not_relevant | 0 | 0 | The study investigates the effect of piretanide on TPMT enzyme activity (drug interaction), not the effect of a gene variant on the PK/PD of piretanide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpiretanide%5D&body=Drug%3A%20piretanide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_piretanide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 19:33 UTC</sub>
