<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Voxilaprevir&quot;}]"></div>

# Voxilaprevir

- **generic name:** Voxilaprevir
- **ATC codes:** `J05AP56`
- **DrugBank:** [DB12026](https://go.drugbank.com/drugs/DB12026) · **PubChem:** [CID 89921642](https://pubchem.ncbi.nlm.nih.gov/compound/89921642)
- **molar mass:** 868.94 g/mol (C40H52F4N6O9S) — DrugBank
- **groups:** approved, investigational

## About

Voxilaprevir is a direct-acting antiviral that targets hepatitis C infections. It is administered orally in tablet form. The product is classified as investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27236086](https://www.wikidata.org/wiki/Q27236086), [Wikipedia](https://en.wikipedia.org/wiki/Voxilaprevir?oldid=1370850150) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gammeltoft_2021_percent_cell_viability](drugs/drug_voxilaprevir/pd_Gammeltoft_2021_percent_cell_viability.md) | percent cell viability ← voxilaprevir · direct sigmoid Emax (Hill) effect | — | Gammeltoft KA et al., Hepatitis C Virus Protease Inhibitors S…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02680-20](https://doi.org/10.1128/AAC.02680-20) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gammeltoft_2021_percent_residual_infectivity](drugs/drug_voxilaprevir/pd_Gammeltoft_2021_percent_residual_infectivity.md) | percent residual infectivity ← voxilaprevir · direct sigmoid Emax (Hill) effect | — | Gammeltoft KA et al., Hepatitis C Virus Protease Inhibitors S…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02680-20](https://doi.org/10.1128/AAC.02680-20) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 07:26 | 0:03 | 0/0/0 | 2/0/0 | 0/0/0 | 4,642/170 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gammeltoft_2021 | irrelevant | 0 | 0 | This is an in-vitro study of antiviral efficacy and cytotoxicity (EC50, CC50) against SARS-CoV-2, not a pharmacokinetic study of voxilaprevir. |
| PGx | Gammeltoft_2021 | not_relevant | 0 | 0 | The paper investigates the in vitro antiviral activity of HCV protease inhibitors against SARS-CoV-2 and does not report any pharmacogenomic data or effects on the pharmacokinetics/pharmacodynamics of voxilaprevir. |
| popPK | Indolfi_2022 | irrelevant | 5 | 0 | The study mentions pharmacokinetics and exposure but does not provide specific quantitative parameter values (CL, V, etc.) in the provided evidence. |
| PGx | Indolfi_2022 | not_relevant | 0 | 0 | The paper evaluates the safety and efficacy of the drug in adolescents but does not report any pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Pham_2019 | irrelevant | 0 | 0 | The study is an in vitro mechanistic/resistance paper measuring EC50 values and viral fitness, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for voxilaprevir. |
| PGx | Pham_2019 | not_relevant | 1 | 0 | The paper studies HCV viral resistance and viral genotype effects on drug sensitivity in vitro, not human host pharmacogenomics (patient genotype effects on drug PK/PD). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvoxilaprevir%5D&body=Drug%3A%20voxilaprevir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_voxilaprevir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
