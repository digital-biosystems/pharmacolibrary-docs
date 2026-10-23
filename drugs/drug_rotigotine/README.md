<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;rotigotine&quot;}]"></div>

# rotigotine

- **generic name:** rotigotine
- **ATC codes:** `N04BC09`
- **DrugBank:** [DB05271](https://go.drugbank.com/drugs/DB05271) · **PubChem:** [CID 59227](https://pubchem.ncbi.nlm.nih.gov/compound/59227)
- **molar mass:** 315.48 g/mol (C19H25NOS) — DrugBank
- **groups:** approved, investigational

## About

Rotigotine is a dopamine agonist used to treat Parkinson's disease and restless legs syndrome. It is authorised in the European Union and widely used for these conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411985](https://www.wikidata.org/wiki/Q411985) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Chen_2025_D2L](drugs/drug_rotigotine/pd_Chen_2025_D2L.md) | Dopamine D2L receptor agonism (Gi Cell-based functional assay) ← rotigotine · direct Emax (saturable) effect | — | Chen Y et al., Pharmacodynamics, safety pharmacology a…, Toxicology and applied phar… (2025) | [10.1016/j.taap.2025.117478](https://doi.org/10.1016/j.taap.2025.117478) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Chen_2025_D2S](drugs/drug_rotigotine/pd_Chen_2025_D2S.md) | Dopamine D2S receptor agonism (Gi Cell-based functional assay) ← rotigotine · direct Emax (saturable) effect | — | Chen Y et al., Pharmacodynamics, safety pharmacology a…, Toxicology and applied phar… (2025) | [10.1016/j.taap.2025.117478](https://doi.org/10.1016/j.taap.2025.117478) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Chen_2025_D3](drugs/drug_rotigotine/pd_Chen_2025_D3.md) | Dopamine D3 receptor agonism (Gi Cell-based functional assay) ← rotigotine · direct Emax (saturable) effect | — | Chen Y et al., Pharmacodynamics, safety pharmacology a…, Toxicology and applied phar… (2025) | [10.1016/j.taap.2025.117478](https://doi.org/10.1016/j.taap.2025.117478) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Chen_2025_hERG](drugs/drug_rotigotine/pd_Chen_2025_hERG.md) | hERG channel inhibition (manual patch clamp) ← rotigotine behenate extended-release microspheres (RBEM) · direct Emax (saturable) effect | — | Chen Y et al., Pharmacodynamics, safety pharmacology a…, Toxicology and applied phar… (2025) | [10.1016/j.taap.2025.117478](https://doi.org/10.1016/j.taap.2025.117478) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zhang_2019_CGI_I](drugs/drug_rotigotine/pd_Zhang_2019_CGI_I.md) | Clinical Global Impression Improvement scale response rate ← rotigotine · direct Emax (saturable) effect | — | Zhang N et al., Quantitative Comparison of the Efficaci…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1426](https://doi.org/10.1002/jcph.1426) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zhang_2019_IRLS](drugs/drug_rotigotine/pd_Zhang_2019_IRLS.md) | Change in International Restless Leg Syndrome Study Group rating scale score ← rotigotine · direct Emax (saturable) effect | — | Zhang N et al., Quantitative Comparison of the Efficaci…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1426](https://doi.org/10.1002/jcph.1426) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rotigotine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA2B (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (target), HTR1A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:22 | 1:08 | 0/0/0 | 2/0/0 | 0/0/0 | 19,402/2,376 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sun_2024.pdf` | Sun H et al., Population pharmacokinetics of rotigoti…, British journal of clinical… (2024) | popPK | 9 | [10.1111/bcp.15991](https://doi.org/10.1111/bcp.15991) | [38148659](https://pubmed.ncbi.nlm.nih.gov/38148659) | Population PK model of rotigotine in humans, but actual parameter values (CL, V, ka) are not shown in the evidence, only simulation-based exposure changes. |
| `Cawello_2018.pdf` | Cawello W et al., Drug Delivery and Transport into the Ce…, European journal of drug me… (2018) | popPK | 8 | [10.1007/s13318-018-0460-3](https://doi.org/10.1007/s13318-018-0460-3) | [29332198](https://pubmed.ncbi.nlm.nih.gov/29332198) | Population/deconvolution PK model of rotigotine itself in humans, but the abstract contains no numeric parameter values (likely in tables/figures not provided). |
| `Chen_2025.pdf` | Chen Y et al., Pharmacodynamics, safety pharmacology a…, Toxicology and applied phar… (2025) | pd | 5 | [10.1016/j.taap.2025.117478](https://doi.org/10.1016/j.taap.2025.117478) | [40683571](https://www.ncbi.nlm.nih.gov/pubmed/40683571) | metadata signals extractable PD data (EC50) |
| `Elshoff_2014.pdf` | Elshoff JP et al., No influence of the CYP2C19-selective i…, Clinical pharmacology in dr… (2014) | pgx | 8 | [10.1002/cpdd.78](https://doi.org/10.1002/cpdd.78) | [27128608](https://www.ncbi.nlm.nih.gov/pubmed/27128608) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Damasceno_2019.pdf` | Damasceno Dos Santos EU et al., Pharmacogenetic Profile and the Occurre…, Journal of clinical pharmac… (2019) | pgx | 5 | [10.1002/jcph.1394](https://doi.org/10.1002/jcph.1394) | [30794329](https://www.ncbi.nlm.nih.gov/pubmed/30794329) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-10-06 14:21 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cacabelos_2017 | not_relevant | 1 | 0 | Rotigotine is only listed among dopamine agonists; no gene-variant effect on its PK/PD parameters is reported. |
| popPK | Cawello_2018 | relevant | 8 | 2 | Population/deconvolution PK model of rotigotine itself in humans, but the abstract contains no numeric parameter values (likely in tables/figures not provided). |
| popPK | Chen_2025 | irrelevant | 2 | 1 | This is a pharmacodynamics/safety pharmacology and local tolerance study; no PK disposition parameters (CL, V, ka, half-life with volume, or population-PK model) for rotigotine are reported, and no numeric PK values are present. |
| PGx | Damasceno_2019 | not_relevant | 3 | 5 | Rotigotine is only reported as a risk factor for hallucinations; no gene variant effect on rotigotine PK/PD parameters is reported. |
| PGx | Elshoff_2014 | not_relevant | 2 | 5 | This is a drug-drug interaction study (omeprazole inhibiting CYP2C19), not a pharmacogenomic comparison of genotype/phenotype effects on rotigotine PK; all subjects were extensive metabolizers with no genotype-stratified results. |
| PGx | Karroum_2008 | not_relevant | 0 | 0 | Review of RLS mentions rotigotine only as a treatment option; no gene variant effects on PK/PD parameters reported. |
| popPK | Nugroho_2004 | irrelevant | 2 | 1 | In vitro transdermal iontophoresis transport model, not in vivo pharmacokinetic disposition of rotigotine; no numeric parameter values are given in the evidence. |
| popPK | Sun_2024 | relevant | 9 | 3 | Population PK model of rotigotine in humans, but actual parameter values (CL, V, ka) are not shown in the evidence, only simulation-based exposure changes. |
| popPK | Tadori_2014 | irrelevant | 1 | 1 | A review of pharmacodynamics vs plasma concentrations; no PK disposition parameters (CL, V, ka, model) for rotigotine are reported. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | This is a pharmacodynamic (efficacy) meta-analysis of RLS drugs including rotigotine, with no PK disposition parameters for rotigotine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brotigotine%5D&body=Drug%3A%20rotigotine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rotigotine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
