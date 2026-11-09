<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Sodium dichromate&quot;}]"></div>

# Sodium dichromate

- **generic name:** Sodium dichromate
- **DrugBank:** none · **PubChem:** [CID 25408](https://pubchem.ncbi.nlm.nih.gov/compound/25408)
- **groups:** not captured

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 00:59 | 7:40 | 0/0/0 | 0/0/0 | 0/0/0 | 454,764/6,364 | einfracz / qwen3.8-27b | 21 | 19/2 | 3/18 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akpiri_2017 | irrelevant | 0 | 0 | The paper reports genotoxicity (DNA strand breaks) and oxidative stress (ROS) data, which are toxicodynamic endpoints, and contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for sodium dichromate. |
| popPK | Bagchi_1995 | irrelevant | 1 | 1 | The paper measures oxidative stress markers (lipid peroxidation, DNA damage, ROS) rather than toxicokinetic parameters like half-life, clearance, or partition coefficients for sodium dichromate. |
| popPK | Bagchi_1997 | irrelevant | 0 | 0 | The paper reports oxidative stress outcomes (lipid peroxidation, DNA damage) rather than quantitative toxicokinetic parameters like half-life, clearance, or rate constants for sodium dichromate. |
| popPK | Bagchi_1997_2 | irrelevant | 0 | 0 | The paper reports toxicodynamic effects (PKC activity) of sodium dichromate in rats and cells, but contains no toxicokinetic parameters such as half-life, clearance, or absorption rates. |
| popPK | Bagchi_2000 | irrelevant | 0 | 0 | The paper reports toxicity endpoints (lipid peroxidation, DNA fragmentation, oxidative stress) rather than quantitative toxicokinetic parameters like half-life, clearance, or bioaccumulation. |
| popPK | Bagchi_2001 | irrelevant | 0 | 0 | The paper focuses on mechanistic toxicology (oxidative stress, apoptosis, gene modulation) and does not report quantitative toxicokinetic parameters (such as half-life, clearance, or tissue:plasma ratios) for sodium dichromate. |
| popPK | Bagchi_2002 | irrelevant | 0 | 0 | The paper reports acute toxicity biomarkers (lipid peroxidation, DNA fragmentation, ROS) and does not provide any toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for sodium dichromate. |
| popPK | De_2006 | irrelevant | 0 | 0 | The paper is a genotoxicity and carcinogenicity study reporting micronucleus frequencies and body weights, but it does not provide quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for sodium dichromate. |
| popPK | Diamantino_2000 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50) and enzyme inhibition data for Daphnia magna, but contains no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for sodium dichromate. |
| popPK | Glaser_1985 | irrelevant | 2 | 2 | The paper measures chromium tissue concentrations and immune responses, but the only kinetic clearance parameters provided are for a surrogate inert marker (iron oxide), not sodium dichromate itself. |
| popPK | Hininger_2007 | irrelevant | 1 | 0 | The paper reports cytotoxicity (LC50) and genotoxicity (DNA damage) endpoints for sodium dichromate in vitro, which are toxicity mechanisms/effects rather than quantitative toxicokinetic parameters (such as half-life, clearance, or bioaccumulation rates). |
| popPK | Izzotti_1998 | irrelevant | 2 | 0 | The paper is a genotoxicity study measuring DNA damage (adducts, fragmentation) rather than reporting quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for sodium dichromate, although it briefly mentions a clearance comparison and cites a prior distribution study. |
| popPK | Kijewski_1982 | irrelevant | 0 | 0 | The paper focuses on the analytical method for lead determination using sodium dichromate as a reagent, and does not report any toxicokinetic parameters for sodium dichromate itself. |
| popPK | Klein_2001 | irrelevant | 0 | 0 | The paper is a long-term inhalation carcinogenicity study reporting tumor incidence and exposure concentrations, containing no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for sodium dichromate. |
| popPK | Kopec_2012 | irrelevant | 0 | 0 | The paper reports gene expression and dose-response data for sodium dichromate exposure but does not provide toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for the substance. |
| popPK | Kopec_2012_2 | irrelevant | 0 | 0 | The paper reports gene expression changes and dose-response modeling (EC50) for toxicodynamic effects, containing no quantitative toxicokinetic parameters such as clearance, half-life, or absorption rates. |
| popPK | Krishnaja_1982 | irrelevant | 0 | 0 | The paper reports cytogenetic damage (chromosomal aberrations) induced by sodium dichromate but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Lee_2004 | irrelevant | 0 | 0 | The paper reports in vitro genotoxicity (DNA damage) and biomonitoring reproducibility, not quantitative toxicokinetic parameters (half-life, clearance, etc.). |
| popPK | Ming-Whitfield_2025 | irrelevant | 0 | 0 | The paper reports steady-state blood concentrations of chromium in mice after 14-day exposure, which is an accumulation/toxicity outcome rather than a quantitative toxicokinetic parameter (e.g., half-life, rate constant, or clearance). |
| popPK | Stern_2010 | irrelevant | 3 | 2 | The paper is a cancer potency assessment using benchmark dose modeling; while it mentions kinetic factors like gastric emptying and absorption capacity, it does not report specific quantitative toxicokinetic parameters (e.g., half-life, rate constants, clearance) for sodium dichromate. |
| popPK | Thompson_2011 | irrelevant | 2 | 0 | The paper reports total chromium tissue concentrations (accumulation) but explicitly states that specific toxicokinetic analyses are described in future publications, and no kinetic rate parameters or half-lives are provided. |
| popPK | Witt_2013 | irrelevant | 3 | 0 | The paper is a mechanistic review of NTP bioassays that discusses qualitative tissue distribution and uptake patterns but does not provide specific quantitative kinetic parameters (e.g., half-life, clearance, rate constants) for sodium dichromate in the provided text. |
| popPK | unknown_2008 | irrelevant | 2 | 0 | The paper reports tissue distribution trends (increasing with exposure) but provides no specific quantitative toxicokinetic parameters like half-life, rate constants, or partition coefficients in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_dichromate%5D&body=Drug%3A%20sodium_dichromate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_dichromate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
