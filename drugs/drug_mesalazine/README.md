<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;mesalazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mesalazine_Cuffari2016_nonmem_estimates&quot;,&quot;label&quot;:&quot;Cuffari_2016_nonmem_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mesalazine_Cuffari2016_multimatrix_mesalamine&quot;,&quot;label&quot;:&quot;Cuffari_2016_multimatrix_mesalamine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/Mesalazine_Cuffari2016_multimatrix_mesalamine.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# mesalazine

- **generic name:** mesalazine
- **ATC codes:** `A07EC02`
- **DrugBank:** [DB00244](https://go.drugbank.com/drugs/DB00244) · **PubChem:** [CID 4075](https://pubchem.ncbi.nlm.nih.gov/compound/4075)
- **molar mass:** 153.1354 g/mol (C7H7NO3) — DrugBank
- **groups:** approved, investigational

## About

Mesalazine (5-aminosalicylic acid) is an intestinal anti-inflammatory aminosalicylic acid used mainly to treat inflammatory bowel conditions such as ulcerative colitis, proctitis, and microscopic colitis. It is an approved medicine in widespread use, and is also being investigated for other conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412479](https://www.wikidata.org/wiki/Q412479) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 5-ASA | parent | 153.135 | C7H7NO3 | DrugBank | [4075](https://pubchem.ncbi.nlm.nih.gov/compound/4075) | Cuffari_2016 |
| Ac-5-ASA | metabolite | 195.15 | — | the paper | — | Cuffari_2016 |

## Start here

> **Cuffari_2016_nonmem_estimates** — <span class="pk-badge pk-badge--neutral">Not simulated</span> children and adolescents with ulcerative colitis, n = fifty-two. [Run it in the simulator](drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md?tab=Simulation) · [record](drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V1/F | 70.1 | L | 70.1 L | children and adolescents with ulcerative colitis | fifty-two | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Cuffari_2016_nonmem_estimates](drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md) |
| ka | kabs | 0.0207 | 1/h | 0.0207 h−1 | children and adolescents with ulcerative colitis | fifty-two | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Cuffari_2016_nonmem_estimates](drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md) |
| F | Fab | 0.413 |  | 0.413 | children and adolescents with ulcerative colitis | fifty-two | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Cuffari_2016_nonmem_estimates](drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Cuffari_2016_nonmem_estimates](drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md) | ▶ model + simulator | 1-compartment, oral | 8 (+6 cov.) | Cuffari C et al., Randomized clinical trial: pharmacokine…, Drug design, development an… (2016) | [10.2147/DDDT.S95316](https://doi.org/10.2147/DDDT.S95316) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T1_tmax</sub> | [↳ multimatrix_mesalamine](drugs/drug_mesalazine/Mesalazine_Cuffari2016_multimatrix_mesalamine.md) | ▶ model + simulator | 1-compartment, IV | 2 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span> | [Oliván-Viguera_2013_KCa3_1](drugs/drug_mesalazine/pd_Oliv_n_Viguera_2013_KCa3_1.md) | KCa3.1 current ← mesalamine · direct sigmoid Emax (Hill) effect | — | Oliván-Viguera A et al., Novel phenolic inhibitors of small/inte…, PloS one (2013) | [10.1371/journal.pone.0058614](https://doi.org/10.1371/journal.pone.0058614) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mesalazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` substrate | DrugBank actor |
| absorption | small intestine | `SLCO2B1` substrate | DrugBank actor |
| metabolism | blood | `NAT1` substrate | DrugBank actor |
| metabolism | liver | `NAT1` substrate, `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ALOX5 (inhibitor), CHUK (inhibitor), IKBKB (inhibitor), NOS2 (inhibitor), PPARG (target), PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 19:45 | 10:13 | 1/1/0 | 1/0/0 | 0/0/0 | 186,987/30,702 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 2/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 12  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2022.pdf` | Zhang Y et al., Population pharmacokinetics and IVIVC f…, Journal of controlled relea… (2022) | popPK | 9 | [10.1016/j.jconrel.2022.04.024](https://doi.org/10.1016/j.jconrel.2022.04.024) | [35461968](https://pubmed.ncbi.nlm.nih.gov/35461968) | The study performs a population PK analysis of mesalazine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only reports variability coefficients. |

<sub>queue written 2026-10-04T19:36:21.366646+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kumar_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of intestinal transit and smooth muscle contractility, not a pharmacokinetic study, and mesalazine is used only as a reference drug. |
| PD | Kumar_2021 | not_relevant | 0 | 0 | The paper reports pharmacodynamic effects of roxithromycin and mesalazine on intestinal transit and cholinergic responsiveness (EC50 of acetylcholine), but does not report a concentration-effect or dose-response relationship for mesalazine itself (i.e., no mesalazine exposure linked to effect magnitude). |
| popPK | Lin_2021_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of azathioprine's metabolite (6-TGN), and mesalazine is only mentioned as a covariate affecting clearance, not as the subject drug. |
| popPK | Markopoulos_2015 | irrelevant | 1 | 0 | The study is an in-vitro dissolution and biorelevant media simulation study, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for mesalazine. |
| popPK | Oliván-Viguera_2013 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and pharmacological investigation of KCa3.1 channel inhibition, not a pharmacokinetic study of mesalazine. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of bakuchiol for colitis, using mesalazine only as a clinical comparator without reporting any pharmacokinetic parameters for mesalazine. |
| PD | Xu_2025 | not_relevant | 0 | 0 | The paper reports an EC50 for bakuchiol, not mesalazine, and provides no exposure-response or dose-response data for mesalazine. |
| popPK | Yarlas_2018 | irrelevant | 0 | 0 | The paper is a clinical trial analyzing health-related quality of life and work outcomes in ulcerative colitis patients, containing no pharmacokinetic data or disposition parameters for mesalazine. |
| popPK | Zhang_2022 | relevant | 9 | 2 | The study performs a population PK analysis of mesalazine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only reports variability coefficients. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 19:36 UTC</sub>
