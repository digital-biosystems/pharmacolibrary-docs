<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;chlorprothixene&quot;}]"></div>

# chlorprothixene

- **generic name:** chlorprothixene
- **ATC codes:** `N05AF03`
- **DrugBank:** [DB01239](https://go.drugbank.com/drugs/DB01239) · **PubChem:** [CID 667466](https://pubchem.ncbi.nlm.nih.gov/compound/667466)
- **molar mass:** 315.86 g/mol (C18H18ClNS) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Chlorprothixene is a thioxanthene antipsychotic used to treat psychotic disorders such as schizophrenia. It remains an approved medicine and is used in some countries, though not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q63395672](https://www.wikidata.org/wiki/Q63395672) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Kim_2016_proton_current](drugs/drug_chlorprothixene/pd_Kim_2016_proton_current.md) | proton currents (voltage-gated proton channel current) in BV2 microglial cells ← chlorprothixene · direct sigmoid Emax (Hill) effect | — | Kim J et al., Thioxanthenes, chlorprothixene and flup…, European journal of pharmac… (2016) | [10.1016/j.ejphar.2016.03.009](https://doi.org/10.1016/j.ejphar.2016.03.009) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Bagli_1999_PRL](drugs/drug_chlorprothixene/pd_Bagli_1999_PRL.md) | prolactin biomarker turnover ← chlorprothixene | — | Bagli M et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1999) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Petersson_2013_prolactin](drugs/drug_chlorprothixene/pd_Petersson_2013_prolactin.md) | prolactin ← chlorprothixene · inhibition effect | — | Petersson KJ et al., Predictions of in vivo prolactin levels…, The AAPS journal (2013) | [10.1208/s12248-012-9450-6](https://doi.org/10.1208/s12248-012-9450-6) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">in vitro</span> | [Vasudevan_2012_histamine_induced_calcium_release](drugs/drug_chlorprothixene/pd_Vasudevan_2012_histamine_induced_calcium_release.md) | histamine-induced calcium release ← chlorprothixene · inhibition effect | — | Vasudevan SR et al., Shape-based reprofiling of FDA-approved…, Journal of medicinal chemis… (2012) | [10.1021/jm300671m](https://doi.org/10.1021/jm300671m) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=chlorprothixene).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), DRD1 (target), DRD2 (target), DRD3 (target), HRH1 (target), HTR1A (inhibitor), HTR2A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:36 | 5:04 | 0/0/0 | 1/3/0 | 0/0/0 | 208,065/2,179 | ollama / glm-5.3-flash | 9 | 4/3 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bagli_1999.pdf` | Bagli M et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1999) | popPK | 8 |  | [10525070](https://pubmed.ncbi.nlm.nih.gov/10525070) | Human PK-PD study with a three-compartment PK model of chlorprothixene, but numeric parameter values are not present in the provided evidence. |
| `Petersson_2013.pdf` | Petersson KJ et al., Predictions of in vivo prolactin levels…, The AAPS journal (2013) | popPK | 5 | [10.1208/s12248-012-9450-6](https://doi.org/10.1208/s12248-012-9450-6) | [23392818](https://pubmed.ncbi.nlm.nih.gov/23392818) | Chlorprothixene appears to be one of the D2 antagonists with a population PK model, but no numeric PK parameter values are present in the evidence (likely in supplementary material/tables not provided). |
| `Kim_2016.pdf` | Kim J et al., Thioxanthenes, chlorprothixene and flup…, European journal of pharmac… (2016) | pd | 4 | [10.1016/j.ejphar.2016.03.009](https://doi.org/10.1016/j.ejphar.2016.03.009) | [26945819](https://www.ncbi.nlm.nih.gov/pubmed/26945819) | metadata signals extractable PD data (IC50) |
| `Zilberstein_1990.pdf` | Zilberstein D et al., Tricyclic drugs reduce proton motive fo…, Biochemical pharmacology (1990) | pd | 4 | [10.1016/0006-2952(90)90210-c](https://doi.org/10.1016/0006-2952(90)90210-c) | [1968745](https://www.ncbi.nlm.nih.gov/pubmed/1968745) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06 15:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bagli_1999 | relevant | 8 | 3 | Human PK-PD study with a three-compartment PK model of chlorprothixene, but numeric parameter values are not present in the provided evidence. |
| popPK | Bakshi_2016 | irrelevant | 0 | 0 | This is a dynamical systems tutorial on prolactin pool models; chlorprothixene is only mentioned as a prolactin-stimulating antipsychotic, with no PK parameters for it. |
| popPK | Djeddi_2023 | irrelevant | 0 | 0 | This is a machine-learning drug-target interaction prediction paper with no pharmacokinetic parameters for chlorprothixene; "Vd" here refers to vector embeddings, not volume of distribution. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | This is a pharmacovigilance disproportionality (FAERS ROR) study of sedation/somnolence; chlorprothixene is only listed among 37 antipsychotics with no PK parameters reported. |
| popPK | Gaudêncio_2023 | irrelevant | 0 | 0 | This is a natural products discovery review; chlorprothixene is only mentioned as an antiviral screening hit, with no PK parameters. |
| popPK | Jing_2025 | irrelevant | 0 | 0 | This is a FAERS pharmacovigilance disproportionality study of azole-related myopathy with no chlorprothixene PK parameters; chlorprothixene is not mentioned at all. |
| popPK | Ma_2010 | irrelevant | 0 | 0 | Study models remoxipride's effect on prolactin, not chlorprothixene pharmacokinetics; no chlorprothixene parameters present. |
| popPK | Neuner_2022 | irrelevant | 0 | 0 | This is a 7T MRI neuroimaging study of depression; chlorprothixene is only mentioned as a co-administered medication, with no PK parameters. |
| popPK | Petersson_2013 | relevant | 5 | 2 | Chlorprothixene appears to be one of the D2 antagonists with a population PK model, but no numeric PK parameter values are present in the evidence (likely in supplementary material/tables not provided). |
| popPK | Tokmakjian_2026 | irrelevant | 0 | 0 | This is a C. elegans CAD defense/metabolism study; chlorprothixene is not the subject and no PK parameters (CL, V, half-life) are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchlorprothixene%5D&body=Drug%3A%20chlorprothixene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chlorprothixene/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
