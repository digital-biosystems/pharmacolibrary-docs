<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01B&quot;,&quot;href&quot;:&quot;atc/R01B.md&quot;},{&quot;label&quot;:&quot;pseudoephedrine&quot;}]"></div>

# pseudoephedrine

- **generic name:** pseudoephedrine
- **ATC codes:** `R01BA02`
- **DrugBank:** [DB00852](https://go.drugbank.com/drugs/DB00852) · **PubChem:** [CID 7028](https://pubchem.ncbi.nlm.nih.gov/compound/7028)
- **molar mass:** 165.2322 g/mol (C10H15NO) — DrugBank
- **groups:** approved, investigational

## About

Pseudoephedrine is a decongestant used to relieve nasal congestion from conditions such as the common cold, sinusitis, and nasopharyngitis, and it also acts as a bronchodilator. It is an approved medicine, available in nasal and respiratory preparations, and is widely used as a systemic nasal decongestant.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q263958](https://www.wikidata.org/wiki/Q263958) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.90).">human + animal</span> | [Palamanda_2010_nasal_congestion_feline_model_of_nasal_congestion](drugs/drug_pseudoephedrine/pd_Palamanda_2010_nasal_congestion_feline_model_of_nasal_conges.md) | nasal congestion (feline model of nasal congestion) ← pseudoephedrine · direct sigmoid Emax (Hill) effect | — | Palamanda JR et al., Pharmacokinetics of pseudoephedrine in…, Drug metabolism letters (2010) | [10.2174/187231210791292762](https://doi.org/10.2174/187231210791292762) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vansal_1999_cAMP_beta1_AR](drugs/drug_pseudoephedrine/pd_Vansal_1999_cAMP_beta1_AR.md) | cyclic AMP accumulation (adenylyl cyclase stimulation) via human beta1-AR ← pseudoephedrine (1S,2S and 1R,2R isomers) · direct Emax (saturable) effect | — | Vansal SS et al., Direct effects of ephedrine isomers on…, Biochemical pharmacology (1999) | [10.1016/s0006-2952(99)00152-5](https://doi.org/10.1016/s0006-2952(99)00152-5) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vansal_1999_cAMP_beta2_AR](drugs/drug_pseudoephedrine/pd_Vansal_1999_cAMP_beta2_AR.md) | cyclic AMP accumulation (adenylyl cyclase stimulation) via human beta2-AR ← pseudoephedrine (1S,2S and 1R,2R isomers) · direct Emax (saturable) effect | — | Vansal SS et al., Direct effects of ephedrine isomers on…, Biochemical pharmacology (1999) | [10.1016/s0006-2952(99)00152-5](https://doi.org/10.1016/s0006-2952(99)00152-5) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vansal_1999_cAMP_beta3_AR](drugs/drug_pseudoephedrine/pd_Vansal_1999_cAMP_beta3_AR.md) | cyclic AMP accumulation (adenylyl cyclase stimulation) via human beta3-AR ← pseudoephedrine · direct Emax (saturable) effect | — | Vansal SS et al., Direct effects of ephedrine isomers on…, Biochemical pharmacology (1999) | [10.1016/s0006-2952(99)00152-5](https://doi.org/10.1016/s0006-2952(99)00152-5) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pseudoephedrine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `MAOA` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `MAOA` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRB1 (partial agonist), ADRB1 (target), ADRB2 (partial agonist), ATF1 (inhibitor), DRD2 (stimulator), IL2 (inhibitor), NFATC1 (inhibitor), NFKB1 (inhibitor), SLC6A2 (inhibitor), SLC6A3 (inhibitor), TNF (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:25 | 0:38 | 0/0/0 | 2/0/0 | 0/0/0 | 32,394/2,564 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Palamanda_2010.pdf` | Palamanda JR et al., Pharmacokinetics of pseudoephedrine in…, Drug metabolism letters (2010) | popPK | 10 | [10.2174/187231210791292762](https://doi.org/10.2174/187231210791292762) | [20446910](https://pubmed.ncbi.nlm.nih.gov/20446910) | Original PK study reporting CL, Vdss, t1/2, and bioavailability values for pseudoephedrine directly in the abstract. |
| `Atsumi_2026.pdf` | Atsumi T et al., Effect of pre- and postprandial adminis…, Journal of natural medicines (2026) | popPK | 8 | [10.1007/s11418-025-01980-w](https://doi.org/10.1007/s11418-025-01980-w) | [41276775](https://pubmed.ncbi.nlm.nih.gov/41276775) | Human crossover PK study with a one-compartment absorption model for pseudoephedrine, but the abstract reports only qualitative directions (higher ka, Cmax) with no numeric parameter values shown. |
| `Graves_1990.pdf` | Graves DA et al., Application of NONMEM to routine bioava…, Journal of pharmacokinetics… (1990) | popPK | 8 | [10.1007/BF01063557](https://doi.org/10.1007/BF01063557) | [2348381](https://pubmed.ncbi.nlm.nih.gov/2348381) | Population-PK (NONMEM) analysis of pseudoephedrine absorption/disposition, but no numeric parameter values appear in the evidence. |
| `He_2005.pdf` | He F et al., [Effect on pharmacokinetics of pseudo-e…, Zhongguo Zhong yao za zhi =… (2005) | popPK | 8 |  | [16381471](https://pubmed.ncbi.nlm.nih.gov/16381471) | Human PK study of pseudoephedrine with compartmental modeling, but no numeric parameter values appear in the evidence (likely in tables/figures not provided). |
| `Pade_1995.pdf` | Pade V et al., Bioavailability of pseudoephedrine from…, Biopharmaceutics & drug dis… (1995) | popPK | 6 | [10.1002/bdd.2510160503](https://doi.org/10.1002/bdd.2510160503) | [8527687](https://pubmed.ncbi.nlm.nih.gov/8527687) | Human bioavailability/PK study with a one-compartment model, but the evidence gives no numeric CL/V/ka values — parameters likely in tables/figures not provided. |
| `Wan_2019.pdf` | Wan JY et al., [Pharmacokinetics of compatible effecti…, Zhongguo Zhong yao za zhi =… (2019) | popPK | 5 | [10.19540/j.cnki.cjcmm.20190125.002](https://doi.org/10.19540/j.cnki.cjcmm.20190125.002) | [31355574](https://pubmed.ncbi.nlm.nih.gov/31355574) | PK of pseudoephedrine measured in febrile rats, but only AUC/MRT statistical moment totals are described; no numeric CL/V/ka values appear in the evidence. |

<sub>queue written 2026-10-07 13:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atsumi_2026 | relevant | 8 | 3 | Human crossover PK study with a one-compartment absorption model for pseudoephedrine, but the abstract reports only qualitative directions (higher ka, Cmax) with no numeric parameter values shown. |
| popPK | Bantle_1990 | irrelevant | 0 | 0 | This is a developmental toxicity assay in Xenopus embryos with no pharmacokinetic parameters for pseudoephedrine. |
| popPK | Graves_1990 | relevant | 8 | 2 | Population-PK (NONMEM) analysis of pseudoephedrine absorption/disposition, but no numeric parameter values appear in the evidence. |
| popPK | He_2005 | relevant | 8 | 2 | Human PK study of pseudoephedrine with compartmental modeling, but no numeric parameter values appear in the evidence (likely in tables/figures not provided). |
| popPK | Jing_2010 | irrelevant | 0 | 0 | This is an electrophysiology/mechanism study of ephedrine; pseudoephedrine is only a negative comparator with no PK parameters. |
| popPK | Pade_1995 | relevant | 6 | 4 | Human bioavailability/PK study with a one-compartment model, but the evidence gives no numeric CL/V/ka values — parameters likely in tables/figures not provided. |
| popPK | Rothman_2003 | irrelevant | 0 | 0 | In vitro receptor/transporter pharmacology study with no pharmacokinetic parameters for pseudoephedrine. |
| popPK | Van_2004 | irrelevant | 0 | 0 | This is a population-PK study of garenoxacin; pseudoephedrine appears only as a concomitant-medication covariate affecting garenoxacin clearance, not as the subject drug. |
| popPK | Vansal_1999 | irrelevant | 0 | 0 | In vitro receptor pharmacology study of ephedrine isomers with EC50 values, no PK disposition parameters for pseudoephedrine. |
| popPK | Wan_2019 | relevant | 5 | 2 | PK of pseudoephedrine measured in febrile rats, but only AUC/MRT statistical moment totals are described; no numeric CL/V/ka values appear in the evidence. |
| popPK | Zhang_2008 | irrelevant | 0 | 0 | Pseudoephedrine is only used as an internal standard; the PK parameters are for matrine alkaloids, not pseudoephedrine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpseudoephedrine%5D&body=Drug%3A%20pseudoephedrine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pseudoephedrine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
