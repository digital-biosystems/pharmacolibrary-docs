<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;albinterferon alfa-2b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlbinterferonAlfa2b_Riggs2012_reference&quot;,&quot;label&quot;:&quot;Riggs_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_albinterferon_alfa_2b/AlbinterferonAlfa2b_Riggs2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# albinterferon alfa-2b

- **generic name:** albinterferon alfa-2b
- **ATC codes:** `L03AB12`
- **DrugBank:** [DB05396](https://go.drugbank.com/drugs/DB05396) · **PubChem:** not captured
- **groups:** investigational

## About

It was never approved and remains an investigational compound, so it is not in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4712444](https://www.wikidata.org/wiki/Q4712444) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:19 | 2:10 | 1/0/0 | 1/0/0 | 0/0/0 | 23,567/2,305 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> | [Riggs_2012_reference](drugs/drug_albinterferon_alfa_2b/AlbinterferonAlfa2b_Riggs2012_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Riggs MM et al., Population pharmacokinetics and exposur…, Journal of clinical pharmac… (2012) | [10.1177/0091270011399576](https://doi.org/10.1177/0091270011399576) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> | [Osinusi_2014_HCV_RNA](drugs/drug_albinterferon_alfa_2b/pd_Osinusi_2014_HCV_RNA.md) | HCV RNA biomarker turnover ← albinterferon_alfa_2b | — | Osinusi A et al., Comparative efficacy, pharmacokinetic,…, Journal of medical virology (2014) | [10.1002/jmv.23773](https://doi.org/10.1002/jmv.23773) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:19 UTC</sub>
