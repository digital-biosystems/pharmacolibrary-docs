<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;rotigotine&quot;}]"></div>

# rotigotine

- **generic name:** rotigotine
- **ATC codes:** `N04BC09`
- **DrugBank:** [DB05271](https://go.drugbank.com/drugs/DB05271) · **PubChem:** [CID 59227](https://pubchem.ncbi.nlm.nih.gov/compound/59227)
- **molar mass:** 315.48 g/mol (C19H25NOS) — DrugBank
- **groups:** approved, investigational

## About

Rotigotine is a non-ergoline dopamine agonist used to treat Parkinson's disease and restless legs syndrome. It is administered as a transdermal patch that provides a slow release of the medication. The medication is authorized in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q411985](https://www.wikidata.org/wiki/Q411985), [Wikipedia](https://en.wikipedia.org/wiki/Rotigotine?oldid=1366385573) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zhang_2019_CGI_I](drugs/drug_rotigotine/pd_Zhang_2019_CGI_I.md) | Clinical Global Impression Improvement (CGI-I) scale response rate ← rotigotine · stimulation effect | — | Zhang N et al., Quantitative Comparison of the Efficaci…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1426](https://doi.org/10.1002/jcph.1426) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zhang_2019_IRLS](drugs/drug_rotigotine/pd_Zhang_2019_IRLS.md) | International Restless Leg Syndrome Study Group (IRLS) rating scale ← rotigotine · inhibition effect | — | Zhang N et al., Quantitative Comparison of the Efficaci…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1426](https://doi.org/10.1002/jcph.1426) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:39 | 0:15 | 0/0/0 | 2/0/0 | 0/0/0 | 6,227/1,884 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2025.pdf` | Chen Y et al., Pharmacodynamics, safety pharmacology a…, Toxicology and applied phar… (2025) | pd | 5 | [10.1016/j.taap.2025.117478](https://doi.org/10.1016/j.taap.2025.117478) | [40683571](https://www.ncbi.nlm.nih.gov/pubmed/40683571) | metadata signals extractable PD data (EC50) |
| `Elshoff_2014.pdf` | Elshoff JP et al., No influence of the CYP2C19-selective i…, Clinical pharmacology in dr… (2014) | pgx | 8 | [10.1002/cpdd.78](https://doi.org/10.1002/cpdd.78) | [27128608](https://www.ncbi.nlm.nih.gov/pubmed/27128608) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Damasceno_2019.pdf` | Damasceno Dos Santos EU et al., Pharmacogenetic Profile and the Occurre…, Journal of clinical pharmac… (2019) | pgx | 5 | [10.1002/jcph.1394](https://doi.org/10.1002/jcph.1394) | [30794329](https://www.ncbi.nlm.nih.gov/pubmed/30794329) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-11-24 05:38 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cacabelos_2017 | not_relevant | 1 | 0 | Rotigotine is only listed among dopamine agonists; no gene-variant effect on its PK/PD parameters is reported. |
| popPK | Cawello_2018 | relevant | 9 | 2 | The paper describes a one-compartment pharmacokinetic model for rotigotine absorption, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text, likely residing in figures or supplementary data. |
| PGx | Cawello_2018 | not_relevant | 0 | 0 | The paper describes pharmacokinetic modeling of rotigotine absorption in healthy subjects and PD patients but does not report any pharmacogenomic effects or associations with gene variants. |
| popPK | Chen_2025 | irrelevant | 1 | 0 | The study focuses on pharmacodynamics, safety, and local tolerance (preclinical safety pharmacology) rather than quantitative disposition parameters; while it mentions PK profiles are improved, no specific CL, V, or t1/2 values are provided in the evidence. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper reports general preclinical pharmacodynamics and safety for a new formulation of rotigotine, but it does not investigate any gene variants, genotypes, or pharmacogenomic effects on its PK or PD parameters. |
| popPK | Damasceno_2019 | irrelevant | 0 | 0 | The study is a pharmacogenetic analysis of visual hallucinations in Parkinson's disease where rotigotine is only a covariate/confounder, and no pharmacokinetic parameters (CL, V, ka, etc.) are reported. |
| PGx | Damasceno_2019 | not_relevant | 2 | 0 | The paper reports associations between genetic variants and visual hallucinations, noting rotigotine as a confounder, but does not measure pharmacokinetic or pharmacodynamic parameters of rotigotine itself. |
| popPK | Elshoff_2014 | irrelevant | 3 | 0 | The paper reports only geometric mean ratios (bioequivalence) and not absolute pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| PGx | Elshoff_2014 | not_relevant | 0 | 0 | The study evaluates the effect of a competitive inhibitor (omeprazole) rather than a genetic variant on rotigotine pharmacokinetics. |
| popPK | Karroum_2008 | irrelevant | 0 | 0 | The text is a general review of Restless Legs Syndrome that mentions rotigotine only as a treatment option, with no pharmacokinetic data. |
| PGx | Karroum_2008 | not_relevant | 0 | 0 | The text is a general review of Restless Legs Syndrome that mentions rotigotine as a treatment option but contains no information on pharmacogenomics, gene variants, or PK/PD parameters. |
| popPK | Nugroho_2004 | irrelevant | 1 | 0 | This is an in-vitro mechanistic study of transdermal iontophoretic transport, not a pharmacokinetic study reporting disposition parameters for rotigotine. |
| PGx | Nugroho_2004 | not_relevant | 0 | 0 | The study examines in vitro transdermal iontophoretic transport of rotigotine and reports no gene variants, genotypes, or phenotypes. |
| popPK | Sun_2024 | relevant | 10 | 0 | The study is a population PK analysis of rotigotine, but the specific numeric parameter estimates (CL, V, KA, etc.) are not listed in the provided abstract evidence. |
| PGx | Sun_2024 | not_relevant | 0 | 0 | The study investigates population PK covariates such as body weight and race, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK parameters. |
| popPK | Tadori_2014 | irrelevant | 1 | 0 | This is a review focused on the relationship between therapeutic plasma concentrations and in vitro receptor pharmacology, without reporting original quantitative pharmacokinetic disposition parameters (such as clearance, volume of distribution, or half-life) for rotigotine. |
| PGx | Tadori_2014 | not_relevant | 0 | 0 | The paper is a review of pharmacology and plasma concentrations but does not investigate genetic variants or pharmacogenomics. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of efficacy for RLS, not a pharmacokinetic study, and reports no PK parameters for rotigotine. |
| PGx | Zhang_2019 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis comparing the efficacy of five drugs for RLS and does not investigate genetic variants or pharmacogenomic influences on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brotigotine%5D&body=Drug%3A%20rotigotine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rotigotine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
