<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;albinterferon alfa-2b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlbinterferonAlfa2b_Riggs2012_reference&quot;,&quot;label&quot;:&quot;Riggs_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_albinterferon_alfa_2b/AlbinterferonAlfa2b_Riggs2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# albinterferon alfa-2b

- **generic name:** albinterferon alfa-2b
- **ATC codes:** `L03AB12`
- **DrugBank:** [DB05396](https://go.drugbank.com/drugs/DB05396) · **PubChem:** not captured
- **groups:** investigational

## About

It was never approved and remains an investigational compound, so it is not in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4712444](https://www.wikidata.org/wiki/Q4712444) and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Riggs_2012_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> adults with chronic hepatitis C virus. [Run it in the simulator](drugs/drug_albinterferon_alfa_2b/AlbinterferonAlfa2b_Riggs2012_reference.md?tab=Simulation) · [record](drugs/drug_albinterferon_alfa_2b/AlbinterferonAlfa2b_Riggs2012_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 0.0389 | L/h | 38.9 mL/h | adults with chronic hepatitis C virus | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Riggs_2012_reference](drugs/drug_albinterferon_alfa_2b/AlbinterferonAlfa2b_Riggs2012_reference.md) |
| V | V/F | 11.6 | L | 11.6 L | adults with chronic hepatitis C virus | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Riggs_2012_reference](drugs/drug_albinterferon_alfa_2b/AlbinterferonAlfa2b_Riggs2012_reference.md) |
| ka | kabs | 0.0148 | 1/h | 0.0148 h(-1) | adults with chronic hepatitis C virus | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Riggs_2012_reference](drugs/drug_albinterferon_alfa_2b/AlbinterferonAlfa2b_Riggs2012_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Riggs_2012_reference](drugs/drug_albinterferon_alfa_2b/AlbinterferonAlfa2b_Riggs2012_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Riggs MM et al., Population pharmacokinetics and exposur…, Journal of clinical pharmac… (2012) | [10.1177/0091270011399576](https://doi.org/10.1177/0091270011399576) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Osinusi_2014_HCV_RNA](drugs/drug_albinterferon_alfa_2b/pd_Osinusi_2014_HCV_RNA.md) | HCV RNA biomarker turnover ← albinterferon_alfa_2b | — | Osinusi A et al., Comparative efficacy, pharmacokinetic,…, Journal of medical virology (2014) | [10.1002/jmv.23773](https://doi.org/10.1002/jmv.23773) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=albinterferon_alfa_2b).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:19 | 2:10 | 1/0/0 | 1/0/0 | 0/0/0 | 23,567/2,305 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 26 matched, 26 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Riggs_2012.pdf` | Riggs MM et al., Population pharmacokinetics and exposur…, Journal of clinical pharmac… (2012) | popPK | 10 | [10.1177/0091270011399576](https://doi.org/10.1177/0091270011399576) | [21551316](https://pubmed.ncbi.nlm.nih.gov/21551316) | The abstract explicitly reports quantitative population PK parameters (CL, V, ka) for albinterferon alfa-2b in humans. |
| `Osinusi_2014.pdf` | Osinusi A et al., Comparative efficacy, pharmacokinetic,…, Journal of medical virology (2014) | pd | 5 | [10.1002/jmv.23773](https://doi.org/10.1002/jmv.23773) | [24166150](https://www.ncbi.nlm.nih.gov/pubmed/24166150) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-06T22:19:36.390436+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bain_2006 | not_relevant | 0 | 0 | The study evaluates PK/PD of albinterferon_alfa_2b in HCV patients but does not investigate gene variants or pharmacogenomic effects. |
| PGx | Bain_2006_2 | not_relevant | 0 | 0 | The study evaluates the pharmacodynamic effect of the drug on gene expression but does not report how a patient's genetic variant or genotype alters these PK/PD parameters. |
| PGx | Bain_2008 | not_relevant | 1 | 2 | The study examines clinical response to dosing intervals in HCV genotypes 2/3 and insulin resistance, but does not report pharmacokinetic or pharmacodynamic parameters modified by host gene variants. |
| popPK | Liu_2007 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study measuring antiviral activity (EC50), not a pharmacokinetic study reporting disposition parameters. |
| PGx | Nelson_2009 | not_relevant | 0 | 0 | The paper reports clinical outcomes (SVR, safety) but does not investigate gene variants or their effects on PK/PD parameters. |
| PGx | Nelson_2010 | not_relevant | 0 | 0 | The study compares albinterferon alfa-2b to pegylated interferon for HCV but does not assess how gene variants affect PK/PD parameters. |
| popPK | Osinusi_2014 | irrelevant | 2 | 0 | The paper reports viral kinetics and pharmacodynamic parameters (infected cell loss) rather than standard quantitative PK disposition parameters (CL, V, ka, half-life) for albinterferon_alfa_2b. |
| PGx | Osinusi_2014 | not_relevant | 0 | 0 | The study compares different interferon formulations in HIV/HCV patients but does not report any gene variant, genotype, or phenotype affecting the PK or PD of albinterferon alfa-2b. |
| PGx | Pianko_2012 | not_relevant | 5 | 0 | The paper mentions the IL28B genotype but reports non-significant effects (NS) on Rapid Virologic Response without providing fitted pharmacokinetic/pharmacodynamic effect sizes or detailed statistical models. |
| PGx | Riggs_2012 | not_relevant | 0 | 0 | The study analyzes population PK and exposure-response but identifies body weight as the only covariate and does not report any pharmacogenomic effects. |
| PGx | Rustgi_2009 | not_relevant | 0 | 0 | The paper is a review of the pharmacokinetics and clinical outcomes of albinterferon alfa-2b in chronic hepatitis C patients, but it does not report any pharmacogenomic effects (gene variants/genotypes) on its PK or PD parameters. |
| PGx | Ruţă_2011 | not_relevant | 0 | 0 | The paper discusses the clinical development of interferon formulations but does not report pharmacogenomic data or the impact of gene variants on albinterferon PK/PD. |
| PGx | Stauber_2008 | not_relevant | 0 | 0 | The text is a general review of hepatitis C drug development and contains no information about gene variants or pharmacogenomics. |
| PGx | Thompson_2012 | not_relevant | 2 | 10 | The paper evaluates the association between HCV viral clearance and a metabolic marker (insulin resistance), which is a disease outcome rather than a pharmacogenomic effect on the drug's PK or PD. |
| PGx | Zeuzem_2008 | not_relevant | 0 | 0 | The study is a phase 2b clinical trial evaluating the efficacy and safety of albinterferon alfa-2b in hepatitis C patients and does not report any pharmacogenomic analysis or gene-specific effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Zeuzem_2010 | not_relevant | 0 | 0 | The paper reports on the efficacy and safety of albinterferon alfa-2b compared to pegylated interferon in a clinical trial but does not investigate pharmacogenomic effects (gene variants) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 22:19 UTC</sub>
